const router = require("express").Router();
const Score = require("../models/scores");
const Joke = require("../models/jokes");

// Read all
router.get("/", (req, res, next) => {
  Score.find({})
    .then((jokes) => res.json(jokes))
    .catch((err) => next(err));
});

// Insert one
router.post("/", (req, res, next) => {
  const body = req.body;
  // Check body
  const errorMessages = [];
  if (!body.username || body.username.length < 3)
    errorMessages.push("username must be present and at least 3 chars");
  if (!body.date) errorMessages.push("date must be present");
  if (!body.score) errorMessages.push("score must be present");
  if (!body.joke) errorMessages.push("joke must be present");
  if (errorMessages.length > 0) {
    res.status(422).json({ errorMessages });
    return;
  }

  // Check score for this joke from username not already present
  Score.find({ joke: body.joke, username: body.username })
    .then((score) => {
      if (score && score.length > 0) {
        errorMessages.push(
          "a score for this joke from this username already exists"
        );
        res.status(422).json({ errorMessages });
      }
    })
    .catch((err) => next(err));
  
  // Check joke exists
  Joke.find({ _id: body.joke })
    .then((joke) => {
      if (!joke || joke.length == 0) {
        errorMessages.push("no joke with this id");
        res.status(422).json({ errorMessages });
      } else {
        // Insert
        const score = new Score(body);
        score
          .save()
          .then((result) => {
            res.json(result);
          })
          .catch((err) => next(err));
      }
    })
    .catch((err) => next(err));
});

module.exports = router;
