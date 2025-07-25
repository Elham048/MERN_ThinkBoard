import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // Fetch all notes sorted by creation date in descending order
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getNodeById(req, res) {
  try {
    const notes = await Note.findById(req.params.id); // Fetch a note by its unique ID

    if (!notes) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getNodeById controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function postNotes(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });

    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error in postNotes controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function putNotes(req, res) {
  try {
    const { title, content } = req.body; //these are the updated title and updated content

    //this function finds put the particular note we want updated by its unique id value
    //the new: true option returns the updated document
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );

    //if the note unique id is not found
    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error in updateNote controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteNotes(req, res) {
  try {
    const { id } = req.params; //the id of the note we want to delete
    const deletedNote = await Note.findByIdAndDelete(id);

    //if the note unique id is not found
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error in deleteNotes controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
