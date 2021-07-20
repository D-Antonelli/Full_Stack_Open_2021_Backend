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

morgan.token("data", function (req) {
  return JSON.stringify(req.body);
});

app.use(morgan(":data"));

app.get("/api/persons", (request, response) => {
  Person.find({}).then((persons) => response.json(persons));
});

app.get("/info", (request, response, next) => {
  Person.countDocuments({})
    .then((count) => {
      const info = `<p>Phonebook has info for ${count} people</p>`;
      const date = `<p>${new Date()}</p>`;
      response.send(`${info}${date}`);
    })
    .catch((err) => next(err));
});

app.get("/api/persons/:id", (request, response, next) => {
  const id = request.params.id;
  Person.findById(id)
    .then((person) => response.json(person))
    .catch((error) => next(error));
});

app.delete("/api/persons/:id", (request, response, next) => {
  const id = request.params.id;
  Person.findByIdAndRemove(id)
    .then((result) => {
      if (result) {
        response.status(204).end();
      } else {
        response.status(404).send("id not found");
      }
    })
    .catch((error) => {
      next(error);
    });
});

//TO-DO: USE VALIDATION FOR UPDATE OPERATIONS
app.put("/api/persons/:id", (request, response, next) => {
  const filter = request.params.id;
  const update = { $set: { number: request.body.number } };
  Person.findByIdAndUpdate(filter, update, { new: true, runValidators: true })
    .then((doc) => response.json(doc))
    .catch((error) => next(error));
});

app.post("/api/persons/", (request, response, next) => {
  const body = request.body;
  const person = new Person({
    name: body.name,
    number: body.number,
  });
  person
    .save()
    .then((savedPerson) => {
      response.json(savedPerson);
    })
    .catch((error) => next(error));
});

const errorHandler = (error, request, response, next) => {
  console.log("message is", error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }
  next(error);
};

app.use(errorHandler);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
