const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// GET /posts
router.get('/', async (req, res) => {
    // Logic to fetch all posts
    let data = await postController.getAllPosts()
    res.append('X-Total-Count', data.length);
    res.append('Access-Control-Expose-Headers', 'X-Total-Count');
    res.send(data);
});

// GET /posts/:id
router.get('/:id', async (req, res) => {
    const postId = req.params.id;
    let data = await postController.getPostById(postId)
    // Logic to fetch a specific post by ID
    res.send(data);
});

// POST /posts
router.post('/', async (req, res) => {
    try {

        // Save the new post to the database
        const savedPost = await postController.createPost(req.body);

        // Return the saved post as a response
        return res.status(201).json(savedPost);
    } catch (error) {
        console.log(error);
        // Handle any errors that occur during the creation of the post
        return res.status(500).json({ error: 'Failed to create post' });
    }
});

// PUT /posts/:id
router.put('/:id', (req, res) => {
    const postId = req.params.id;
    // Logic to update a specific post by ID
    res.send(`Update post with ID ${postId}`);
});

// DELETE /posts/:id
router.delete('/:id', (req, res) => {
    const postId = req.params.id;
    // Logic to delete a specific post by ID
    res.send(`Delete post with ID ${postId}`);
});

module.exports = router;
