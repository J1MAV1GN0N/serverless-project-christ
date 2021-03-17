// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '6fu8y3j4p0'
export const apiEndpoint = `https://${apiId}.execute-api.eu-central-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-d8rj2srd.us.auth0.com',            // Auth0 domain
  clientId: 'nBbw3BYer40rHLS1x63xKQAzNqAWKrfp',          // Auth0 client id
  callbackUrl: 'http://192.168.213.168:3000/callback' //localhost:3000
}
