const Post = require('../models/post');
const User = require('../models/user');

const postController = {
    createPost: async (req, res) => {
        try {
            const { title, content } = req.body;

            // Create post
            const newPost = new Post({
                title,
                content,
                author: req.userId
            });

            // Save post
            const savedPost = await newPost.save();

            // Add post to user's posts
            const user = await User.findById(req.userId);
            user.posts.push(savedPost._id);
            await user.save();

            res.status(201).json({ message: 'Post created' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getPosts: async (req, res) => {
        try {
            // Get posts
            const posts = await Post.find().populate('author', 'name');

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getPost: async (req, res) => {
        try {
            // get the post id from the request params
            const { id } = req.params;

            // Get post
            const post = await Post.findById(id).populate('author', 'name');

            res.status(200).json(post);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    updatePost: async (req, res) => {
        try {
            // get the post id from the request params
            const { id } = req.params;
            const { title, content } = req.body;

            // Update post
            await Post.findByIdAndUpdate(id, { title, content });

            res.status(200).json({ message: 'Post updated' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    deletePost: async (req, res) => {
        try {
            // get the post id from the request params
            const { id } = req.params;

            // Delete post
            await Post.findByIdAndDelete(id);

            res.status(200).json({ message: 'Post deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    like: async (req, res) => {
        try {
            // get the post id from the request params
            const { id } = req.params;

            // Get post
            const post = await Post.findById(id);

            // Check if the post has already been liked
            if (post.likes.includes(req.userId)) {
                // dislike the post
                post.likes = post.likes.filter(userId => userId.toString() !== req.userId);
                await post.save();

                return res.status(200).json({ message: 'Post disliked ' });
            }

            // Like post
            post.likes.push(req.userId);
            await post.save();

            res.status(200).json({ message: 'Post liked' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = postController;