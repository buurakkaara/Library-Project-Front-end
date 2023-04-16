export const oktaConfig = {
    clientId: '0oa91i6ql9xLFT46O5d7',
    issuer: 'https://dev-54295772.okta.com/oauth2/default',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid','profile','email'],
    pkce: true,
    disableHttpsCheck: true,
}