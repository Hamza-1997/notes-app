const Note = require("../models/note");

const initialNotes = [
  {
    content: "HTML is easy",
    date: new Date(),
    important: false,
  },
  {
    content: "Browser can execute only Javascript",
    date: new Date(),
    important: true,
  },
];

// nonExistingId function can be used for creating a database
// object ID that does not belong to any note object in the database.

const nonExistingId = async () => {
  const note = new Note({ content: "willremovethissoon", date: new Date() });
  await note.save();
  await note.remove();

  return note._id.toString();
};

const notesInDb = async () => {
  const notes = await Note.find({});
  return notes.map((note) => note.toJSON());
};

const usersInDb = async () => {
  const users = await User.find({});
  return users.map((u) => u.toJSON());
};

module.exports = {
  initialNotes,
  nonExistingId,
  notesInDb,
  usersInDb,
};
