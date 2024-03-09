var notes = [

];

var N = notes.length;
exports.N = N;

function getNotes(search){
    if(!search){return notes;}
    return notes.filter(note => note.title.includes(search) || note.content.includes(search));
}
exports.getNotes = getNotes;

function getSingleNote(id){
    for(var i = 0; i < notes.length; i++){
        if(notes[i].id==id)return notes[i];
    }
    return -1;
}
exports.getSingleNote = getSingleNote;

function addNote(note){
    notes.push({
        id : notes.length+1,
        title : note.title,
        content : note.content,
    });
}
exports.addNote = addNote;

function deleteNote(id){
    notes = notes.filter((note) => note.id != id);
}
exports.deleteNote = deleteNote;