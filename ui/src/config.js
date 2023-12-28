const { hostname, host, protocol } = window.location;
const websocketprotocol = protocol === 'http:' ? 'ws:' : 'wss:';

// Uncomment this when using codespaces or other special DNS names (which you can't control)
// replace this with the DNS name of the kerberos agent server (the codespace url)
//const externalHost = 'https://super-duper-orbit-9wx6jw6jw5qh7gvj.github.dev';

const dev = {
  ENV: 'dev',
//Comment the below lines, when using codespaces or other special DNS names (which you can't control)
  HOSTNAME: hostname,
  API_URL: `${protocol}//${hostname}:5003`,
  URL: `${protocol}//${hostname}:3000`,
//   // Uncomment, and comment the above lines, when using codespaces or other special DNS names (which you can't control)
//   HOSTNAME: externalHost,
//   API_URL: `${protocol}//${externalHost}:5003/api`,
//   URL: `${protocol}//${externalHost}`,
//   WS_URL: `${websocketprotocol}//${externalHost}/ws`,
};

// const dev = {
//   ENV: 'dev',
//   HOSTNAME: hostname,
//   API_URL: `${protocol}//${hostname}:5003/api`,
//   URL: `${protocol}//${hostname}:3000`,
//   // WS_URL: `${websocketprotocol}//${hostname}/ws`,
// };

const prod = {
  ENV: process.env.REACT_APP_ENVIRONMENT,
  HOSTNAME: hostname,
  API_URL: `${protocol}//${host}/api`,
  URL: `${protocol}//${host}`,
};

const config = process.env.REACT_APP_ENVIRONMENT === 'production' ? prod : dev;

export default {
  // Add common config values here
  // MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
