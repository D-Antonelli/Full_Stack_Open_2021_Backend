require("dotenv").config();
const Person = require("./models/person");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.static("build"));
app.use(cors());
app.use(morgan("tiny"));

morgan.token("data", function (req, res) {
  return JSON.stringify(req.body);
});

app.use(morgan(":data"));

app.get("/api/persons", (request, response) => {
  Person.find({})
    .then((persons) => response.json(persons));
});

app.get("/info", (request, response) => {
  const info = `<p>Phonebook has info for ${persons.length} people</p>`;
  const date = `<p>${new Date()}</p>`;
  response.send(`${info}${date}`);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((p) => p.id === id);
  person ? response.json(person) : response.status(404).end();
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((p) => p.id !== id);
  response.status(204).end();
});

app.post("/api/persons/", (request, response) => {
  const body = request.body;

  const person = new Person({
    name: body.name,
    number: body.number,
  });

  person
    .save()
    .then((savedPerson) => {
      response.json(savedPerson);
    });

  /*if (!person.name || !person.number) {
    response.status(500).send({ error: "Name or number is missing" });
  } else if (persons.find((p) => p.name === person.name)) {
    response.status(500).send({ error: "name must be unique" });
  } else {
    const newId = generateId(1000);
    const newPerson = { id: newId, ...person };
    persons = persons.concat(newPerson);
    response.send(newPerson);
  } */
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
