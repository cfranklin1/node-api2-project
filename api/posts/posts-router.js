// implement your posts router here

const router = require('express').Router();
const Post = require('./posts-model');

router.get('/', (req, res) => {
    Post.find(req.query)
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: 'There was an error retrieving the posts'
            });
        });
});



module.exports = router