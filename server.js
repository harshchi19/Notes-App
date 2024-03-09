const express = require("express");
const database = require("./database");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/notes', (req, res) => {
    const notes = database.getNotes();
    const search = req.query.search;
    res.render("notes.ejs", {notes : database.getNotes(search)});
});

app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    if(id>database.getNotes().length){
        res.status(404).send("File not found.");
    }
    res.render("single_note.ejs", {note : database.getSingleNote(id)});
});

app.get('/createNote', (req, res) => {
    res.render("create_note.ejs");
});

app.post('/notes', (req, res) => {
    const data = req.body;
    database.addNote(data);
    res.redirect('/notes');
});

app.post('/notes/:id/delete', (req, res) => {
    const id = req.params.id;
    database.deleteNote(id);
    res.redirect('/notes');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});