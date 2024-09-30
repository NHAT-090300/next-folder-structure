export default function handler(req, res) {
  const environment = process.env.HOST_WEB_USER;
  if (environment?.includes('dev')) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('User-agent: *\nDisallow: /');
  } else {
    res.setHeader('Content-Type', 'text/plain');
    res.send('User-agent: *\nDisallow:');
  }
}
