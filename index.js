const { response, json, request } = require("express");
const express = require("express");
const app = express();
const port = 3001;

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-532425",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-2837383",
  },
];

const generateId = (max) => {
  return Math.floor(Math.random() * max);
};

app.use(express.json());

app.get("/api/persons", (request, response) => {
  response.json(persons);
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
  const person = request.body;
  console.log(person);
  if (!person.name || !person.number) {
    response.status(500).send({ error: "Name or number is missing" });
  } else if (persons.find((p) => p.name === person.name)) {
    response.status(500).send({ error: "name must be unique" });
  } else {
    const newId = generateId(1000);
    const newPerson = { id: newId, ...person };
    persons = persons.concat(newPerson);
    response.send(newPerson);
  }
});

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
