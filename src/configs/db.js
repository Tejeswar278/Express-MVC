const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://epj:epj23@Azfqw@cluster0.uklfn.mongodb.net/?retryWrites=true&w=majority"
  );
};
module.exports=connect;