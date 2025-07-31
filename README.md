# 🧠 MERN ThinkBoard

**MERN ThinkBoard** is a full-stack note-taking web application built with the **MERN stack** (MongoDB, Express, React, Node.js). Users can create, edit, and delete notes with a beautiful UI powered by Tailwind CSS and DaisyUI.

---

## 📸 Screenshots by Features

---

### 🏠 Homepage View

Displays all created notes.

<img width="1910" height="982" alt="Thinkboard_backend1" src="https://github.com/user-attachments/assets/c0b9f9a0-eaaf-4263-8c4d-ac46fdc3c08b" />


---

### ✍️ Create Note

The form allows users to create a new note with a title and content.

<p float="left">
  <img src="Thinkboard_Screenshots/Thinkboard_Screenshots/CreateNoteFeature/Thinkboard_CreateNewPage1.png" width="48%"/>
  <img src="Thinkboard_Screenshots/Thinkboard_Screenshots/CreateNoteFeature/Thinkboard_CreateNewPage2.png" width="48%"/>
</p>

Once submitted, the note is added, and the success pop-up is shown.

<p float="left">
  <img src="Thinkboard_Screenshots/Thinkboard_Screenshots/CreateNoteFeature/Thinkboard_NoteCreatedSuccessfullyPopUp.png" width="48%"/>
  <img src="Thinkboard_Screenshots/Thinkboard_Screenshots/CreateNoteFeature/Thinkboard_Homepage_AfterAddingNewNote.png" width="48%"/>
</p>

---

### 🛠️ Edit Note

Users can click on a note to edit its contents.

<p float="left">
  <img src="Thinkboard_Screenshots/Thinkboard_Screenshots/EditNoteFeature/Thinkboard_EditPage.png" width="48%"/>
  <img src="Thinkboard_Screenshots/Thinkboard_Screenshots/EditNoteFeature/Thinkboard_AfterEditingANote.png" width="48%"/>
</p>

---

### ❌ Delete Note

Users receive a confirmation prompt before deletion.

<p float="left">
  <img src="Thinkboard_Screenshots/Thinkboard_Screenshots/DeleteNoteFeature/1_Thinkboard_DeleteNoteConfirmation.png" width="48%"/>
  <img src="Thinkboard_Screenshots/Thinkboard_Screenshots/DeleteNoteFeature/2_Thinkboard_NoteDeletedSuccessfullyPopUp.png" width="48%"/>
</p>

After deleting all notes, the homepage displays a message for empty notes.

<img src="Thinkboard_Screenshots/Thinkboard_Screenshots/DeleteNoteFeature/3_Thinkboard_HomepageWithEmptyNotes.png" width="100%"/>

---

## 🔧 Tech Stack

- **Frontend:** React, Tailwind CSS, DaisyUI, Lucide-react
- **Backend:** Node.js, Express
- **Database:** MongoDB + Mongoose
- **Deployment Ready:** Includes production build script and configuration for services like Render

---

## 🚀 Getting Started

```bash
# Clone this repo
git clone https://github.com/Elham048/MERN_ThinkBoard.git
cd MERN_ThinkBoard
````

### 📦 Install Dependencies

```bash
# Backend setup
cd backend
npm install

# Frontend setup
cd ../frontend
npm install
```

### 🌐 Environment Setup

Create a `.env` file in the `backend` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

### ▶️ Run Locally

```bash
# Backend
cd backend
npm run dev

# Frontend (in a new terminal)
cd frontend
npm run dev
```

---

## 📦 Build for Production

In the root folder:

```bash
npm run build
```

This installs dependencies and builds the React app to a production-ready `dist` folder inside `frontend`.

---

## 🛡️ Middleware and Security

* **dotenv** to hide credentials
* **cors** to handle cross-origin API calls
* **Custom middleware** for rate limiting, authentication, etc.

---

## 🎯 React Features Used

* `useState` and `useEffect` hooks for managing component logic and lifecycle
* `axios` for HTTP requests
* Tailwind + DaisyUI for rapid and clean UI design

---

## 📁 Screenshot Folder Structure

```bash
Thinkboard_Screenshots/
├── CreateNoteFeature/
├── EditNoteFeature/
└── DeleteNoteFeature/
```

Each folder contains feature-specific screenshots used above.

---

## 🧠 Author

* 👤 **Elham**
* 🔗 [GitHub Repository](https://github.com/Elham048/MERN_ThinkBoard)

---

## 📜 License

This project is licensed under the MIT License.

```

---

Let me know if you'd like a downloadable version of this `README.md` or want a separate markdown file like `NOTES.md` for your detailed development documentation.
```
