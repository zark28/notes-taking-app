const joi = require('joi');


const notesValidator = joi.object({
  content: joi.string().required(),
  title: joi.string().required(),
  date: joi.date().required()
});



module.exports = {
  notesValidator,
};
