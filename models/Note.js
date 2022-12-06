const { Schema, model } = require('mongoose');

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Note title is required.'],
    },
    content: {
      type: String,
      required: [true, 'Content is required.'],
    },
  
   date:{
    type:Date,
    default:Date.now()
   }

  },
  {
    timestamps: true,
  }
);

module.exports = model('Note', noteSchema);
