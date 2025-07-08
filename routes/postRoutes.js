const express = require('express');
const { createPost, getPosts, getPost, updatePost, deletePost, like } = require('../controllers/postController');
const auth = require('../middlewares/auth');
const upload = require('../middlewares/upload'); 

const postRouter = express.Router();

postRouter.get('/', auth.checkAuth, getPosts);
postRouter.get('/:id', auth.checkAuth, getPost);
postRouter.put('/:id', auth.checkAuth, updatePost);
postRouter.delete('/:id', auth.checkAuth, deletePost);
postRouter.post('/', auth.checkAuth, upload.single('image'), createPost);



postRouter.post('/:id/like', auth.checkAuth, like);


module.exports = postRouter;