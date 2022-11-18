const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const createHttpServer = (port) => {
    port = port || 3000;

    const mimeType = {
        '.jpg': 'image/jpeg',
        '.png': 'image/png',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon',
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.wav': 'audio/wav',
        '.mp3': 'audio/mpeg',
        '.zip': 'application/zip',
        '.pdf': 'application/pdf',
        '.doc': 'application/msword',
        '.eot': 'application/vnd.ms-fontobject',
        '.ttf': 'application/x-font-ttf'
    };
    
    http.createServer(async (req, res) => {
        console.log(`${req.method} ${req.url}`);
        
        const parseUrl = url.parse(req.url);
        const sanPath = path.normalize(parseUrl.pathname).replace(/^(\.\.[\/\\])+/, '');
        let pathname = path.join(__dirname, sanPath);
    
        try {
            const exists = await fs.promises.stat(pathname);
            if (!exists) {
                res.statusCode = 404;
                return res.end();
            }
            const dir = await fs.promises.stat(pathname);
            if (!dir) {
                res.statusCode = 404;
                return res.end();
            }
            if (dir.isDirectory()) {
                pathname = path.join(pathname, 'index.html');
            }
            const dataFile = await fs.promises.readFile(pathname);
            if (!dataFile) {
                res.statusCode = 404;
                return res.end();
            }
            const ext = path.parse(pathname).ext;
            res.setHeader('Content-Type', mimeType[ext]);
            res.end(dataFile);
        } catch (error) {
            res.statusCode = 500;
            return res.end(err);
        }
    }).listen(port);
};

module.exports = createHttpServer;