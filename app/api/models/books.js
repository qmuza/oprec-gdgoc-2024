const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: { type: "string" },
    author: { type: "string" },
    published_at: { type: "string" },
    created_at: { type: "string" },
    updated_at: { type: "string" },
    id: { type: "number" }
});

const Books = mongoose.models.books || mongoose.model("books", bookSchema);

module.exports = Books;