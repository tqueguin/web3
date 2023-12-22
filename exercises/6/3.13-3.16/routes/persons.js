const router = require("express").Router();
const Phone = require("../models/phone");
const NotFoundError = require("../utils/NotFoundError");

router.get("/", (request, response) => {
  Phone.find({})
    .then((result) => {
      response.json(result);
    })
    .catch((err) => next(err));
});

router.get("/:id", (request, response) => {
  Phone.findById(request.params.id)
    .then((phone) => {
      if (phone) {
        response.json(phone);
      } else {
        throw new NotFoundError();
      }
    })
    .catch((err) => next(err));
});

router.delete("/:id", (request, response) => {
  Phone.findByIdAndDelete(request.params.id)
    .then((result) => {
      if (result) {
        res.json(result);
      } else {
        throw new NotFoundError();
      }
    })
    .catch((error) => next(error));
});

router.post("/", (request, response) => {
  const personPayload = request.body;

  const newPerson = new Phone({
    ...personPayload,
  });

  const errorMessages = [];
  if (!personPayload.name) errorMessages.push("name must be present");
  if (!personPayload.number) errorMessages.push("number must be present");
  if (errorMessages.length > 0) {
    response.status(422).json({
      errorMessages,
    });
    return;
  }

  Phone.find({ name: body.name })
    .then((person) => {
      if (person && person.length > 0) {
        errorMessages.push("name must be unique");
        res.status(422).json({ errorMessages });
      } else {
        // Insert
        const person = new Phone(body);
        person
          .save()
          .then((result) => {
            res.json(result);
          })
          .catch((err) => next(err));
      }
    })
    .catch((err) => next(err));
});
