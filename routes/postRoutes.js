const express = require('express');
const { createPost, getPosts, getPost, updatePost, deletePost, like } = require('../controllers/postController');
const auth = require('../middlewares/auth');

const postRouter = express.Router();

postRouter.post('/', auth.checkAuth, createPost);
postRouter.get('/', auth.checkAuth, getPosts);
postRouter.get('/:id', auth.checkAuth, getPost);
postRouter.put('/:id', auth.checkAuth, updatePost);
postRouter.delete('/:id', auth.checkAuth, deletePost);

postRouter.post('/:id/like', auth.checkAuth, like);


module.exports = postRouter;