import express from "express";
import {
  deleteNotes,
  getAllNotes,
  getNodeById,
  putNotes,
  postNotes,
} from "../controllers/notesController.js";

const router = express.Router();

//CRUD operations (create,read,update and delete)
//create-->get
//read-->post
//update-->put
//delete-->delete

//this part is exported to the server.js file
//this part is imported from notesController.js
router.get("/", getAllNotes);

router.get("/:id", getNodeById);

router.post("/", postNotes);

router.put("/:id", putNotes);

router.delete("/:id", deleteNotes);

export default router;
