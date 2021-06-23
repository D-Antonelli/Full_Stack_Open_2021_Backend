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

app.listen(port, () => {
    console.log(`Listening at ${port}`);
})