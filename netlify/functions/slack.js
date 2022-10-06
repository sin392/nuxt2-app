// ref: https://qiita.com/tokimeki40/items/72897c700693464bc15b
import fetch from 'node-fetch'

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }
  const payload = JSON.parse(event.body)
  console.log('payload', payload)
  console.log('context', context)
  const state = payload.state
  const branch = payload.branch
  const title = payload.title
  const deployUrl = payload.deploy_url
  const text = `App is ${state}: <${deployUrl}>`

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
          color: '#00D000',
          fields: [
            {
              title: branch,
              value: title,
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
