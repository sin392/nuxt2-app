// ref: https://qiita.com/tokimeki40/items/72897c700693464bc15b
import fetch from 'node-fetch'

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  return await fetch(process.env.SLACK_WEBHOOK_URL, {
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ text: `デプロイが成功しました` }),
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
