// Create web server

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController.js');

// GET request for creating a Comment. NOTE This must come before route for id (i.e. display comment).
router.get('/comment/create', commentController.comment_create_get);

// POST request for creating Comment.
router.post('/comment/create', commentController.comment_create_post);

// GET request to delete Comment.
router.get('/comment/:id/delete', commentController.comment_delete_get);

// POST request to delete Comment.
router.post('/comment/:id/delete', commentController.comment_delete_post);

// GET request to update Comment.
router.get('/comment/:id/update', commentController.comment_update_get);

// POST request to update Comment.
router.post('/comment/:id/update', commentController.comment_update_post);

// GET request for one Comment.
router.get('/comment/:id', commentController.comment_detail);

// GET request for list of all Comment items.
router.get('/comments', commentController.comment_list);

module.exports = router;