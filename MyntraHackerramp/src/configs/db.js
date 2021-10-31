const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "'mongodb://localhost:27017/myntra",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );
};


// "mongodb+srv://teamMyntra:2Qak72qo8wS3tI9D@cluster0.hphku.mongodb.net/myntraDatabase?retryWrites=true&w=majority"