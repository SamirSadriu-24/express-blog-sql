


import express from 'express'
import postController from '../controllers/postController.js';

const router = express.Router();

router.get('/', postController.getPost)

router.get('/:id', postController.getSinglePost)

router.post('/', postController.createNewPost)

router.patch('/:id', postController.modificaPost)

router.delete('/:id',postController.deletePost)

export default router;