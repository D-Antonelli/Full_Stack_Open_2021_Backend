const { response, json } = require("express");
const express = require("express");
const app = express();
const port = 3001;

const persons = [
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

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
