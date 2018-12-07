const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/saved")
  .get(booksController.findSaved)
  
module.exports = router;

// /api/books (get)
// /api/books (post)
// api/books/:id (delete)
// * (get - load singlt HTML page) => Define this after all other routes

// https://www.googleapis.com/books/v1/volumes/mKfDFa8r3pYC
