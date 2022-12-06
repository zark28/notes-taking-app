const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');
// const { verifyToken } = require('../controllers/authController');

router
  .route('/')
  .get(noteController.getAllNotes)
  .post(noteController.createNote);

router
  .route('/:noteId')
  .get(noteController.getNote)
  .patch(noteController.updateNote)
  .delete(noteController.deleteNote);

module.exports = router;
