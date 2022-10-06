// ref: https://qiita.com/tokimeki40/items/72897c700693464bc15b
import fetch from 'node-fetch'

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }
  const payload = JSON.parse(event.body)
  console.log('payload', payload)
  const name = payload.name
  const state = payload.state
  const branch = payload.branch
  const title = payload.title
  const deployUrl = payload.deploy_url
  const text = `"${name}" is ${state}: ${title}`

  let color = '#D00000'
  if (state === 'building') {
    color = '#c0c0c0'
  } else if (state === 'ready') {
    color = '#00D000'
  }

  return await fetch(process.env.SLACK_WEBHOOK_URL, {
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      attachments: [
        {
          fallback: text,
          pretext: text,
          color,
          fields: [
            {
              title: branch,
              value: `<${deployUrl}>`,
              short: false,
            },
          ],
        },
      ],
    }),
  })
    .then(() => ({
      statusCode: 200,
      body: `Your message has been sent to Slack.`,
    }))
    .catch((error) => ({
      statusCode: 422,
      body: `Oops! Something went wrong. ${error}`,
    }))
}
