const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://ayush-admin:myntra_123@cluster0.yytyd.mongodb.net/myntra",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );
};


// "mongodb+srv://teamMyntra:2Qak72qo8wS3tI9D@cluster0.hphku.mongodb.net/myntraDatabase?retryWrites=true&w=majority"