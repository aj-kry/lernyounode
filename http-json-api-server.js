const http = require('http');
const url = require('url');

function parseTime(time) {
return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
};
}

function unixTime(time) {
  return { unixtime: time.getTime(1) };
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const queryTime = new Date(parsedUrl.query.iso);
  let result;

if (req.url.startsWith('/api/parsetime')) {
    result = parseTime(queryTime);
}else if (req.url.startsWith('/api/unixtime')) {
    result = unixTime(queryTime);
}
if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
}else {
    res.writeHead(404);
    res.end();
}
});

const port = Number(process.argv[2]); 
server.listen(port); 
