import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const root = new URL('./dist/', import.meta.url);
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8'};
http.createServer(async(req,res)=>{try{const path=decodeURIComponent(new URL(req.url,'http://localhost').pathname);const file=new URL(path==='/'?'index.html':path.slice(1),root);if(!fileURLToPath(file).startsWith(fileURLToPath(root)))throw Error();const body=await readFile(file);res.writeHead(200,{'Content-Type':types[file.pathname.slice(file.pathname.lastIndexOf('.'))]||'application/octet-stream','X-Content-Type-Options':'nosniff'});res.end(body);}catch{res.writeHead(404);res.end('Not found');}}).listen(process.env.PORT||4173,'127.0.0.1',()=>console.log('WAREBASE http://127.0.0.1:4173'));
