const Note = require('../models/Note');

const getAllNotes = async (req, res) => {

  try {
    // const user = req.user._id
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json({ notes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getNote = async (req, res) => {
  try {
    const { noteId } = req.params;
    const note = await Note.findById(noteId);
    if (!note) {
      res.status(404).send('Note with this ID could not be found.');
    }
    res.status(200).json({ note });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createNote = async (req, res) => {
  try {
    const { title, content, date } = req.body;

    //create Note

    const note = await Note.create({
      title,
      content,
      date,
    });
    
      res.status(201).json({ note });
   
    }
       
  catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateNote = async (req, res) => {
  try {
    const { noteId } = req.params;

    const note = await Note.findByIdAndUpdate(noteId, req.body, { new: true });
    res.status(200).json({ note });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteNote = async (req, res) => {
  try {
    const { noteId } = req.params;
    await Note.findOneAndDelete({ _id: noteId });
    res.status(200).json({ message: 'Note deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
};
