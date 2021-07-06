const mongoose = require("mongoose");

const password = process.argv[2];
const name = process.argv[3];
const number = process.argv[4];
const url = `mongodb+srv://fullstack:${password}@cluster0.jmogz.mongodb.net/phone-app?retryWrites=true&w=majority`;

if (process.argv.length < 3) {
  console.log(
    `Please provide the password as an argument: node mongo.js <password>`
  );
  process.exit(1);
}

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: name,
  number: number,
});

person &&
  number &&
  person.save().then((result) => {
    console.log(`added ${person.name} ${person.number} to phonebook`);
    mongoose.connection.close();
  });

process.argv.length === 3 &&
  Person.find({}).then((result) => {
    console.log("phonebook:");
    result.forEach((entry) => {
      console.log(`${entry.name} ${entry.number}`);
      mongoose.connection.close();
    });
  });
