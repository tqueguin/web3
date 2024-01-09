const mongoose = require("mongoose");

if (process.argv.length != 5 && process.argv.length != 3) {
  console.log("Incorrect number of arguments");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://cours_js:${password}@cluster0.6ckws1v.mongodb.net/phoneApp?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);
mongoose.connect(url);

const phoneSchema = new mongoose.Schema({
    name: String,
    number: String,
  });

  const Phone = mongoose.model("Phone", phoneSchema);

if (process.argv.length == 5) {
  const phone = new Phone({
    name: process.argv[3],
    number: process.argv[4],
  });

  phone.save().then((result) => {
    console.log("note saved!");
    mongoose.connection.close();
  });
} else {
  Phone.find({}).then((result) => {
    result.forEach((phone) => {
      console.log(phone);
    });
    mongoose.connection.close();
  });
}
