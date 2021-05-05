// implement your server here
const express = require('express');
const server = express();
// require your posts router and connect it here
const postsRouter = require('./posts/posts-router');

server.use(express.json());
server.use('/api/posts', postsRouter);
server.use('*', (req, res) => {
    res.status(404).send(`
        <h2>mortal kombat</h2> 
    `);
});

module.exports = server;
