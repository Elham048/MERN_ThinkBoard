# 🧠 MERN ThinkBoard

**MERN ThinkBoard** is a full-stack note-taking web application built with the **MERN stack** (MongoDB, Express, React, Node.js). Users can create, edit, and delete notes with a beautiful UI powered by Tailwind CSS and DaisyUI.

---

## 📸 Screenshots by Features

---

### 🏠 Homepage View

Displays all created notes.
<img width="1918" height="967" alt="Thinkboard_Homepage" src="https://github.com/user-attachments/assets/9095a488-cfd6-499a-bad9-5d491a99ed72" />


<img width="1918" height="966" alt="Thinkboard_Frontend" src="https://github.com/user-attachments/assets/cb653f1d-a9ba-4670-a523-ba4bd3aec1df" />

<img width="1918" height="956" alt="Thinkboard_backend2" src="https://github.com/user-attachments/assets/3eebc78f-9a8e-4151-a41f-cb8a4ce996dd" />

<img width="1910" height="982" alt="Thinkboard_backend1" src="https://github.com/user-attachments/assets/26cef313-280f-495e-a63b-753d97f9ed2a" />

<img width="1907" height="1020" alt="Thinkboard_backend_postman" src="https://github.com/user-attachments/assets/80305b69-646a-4a67-b11d-7e885435a1eb" />


### ✍️ Create Note

The form allows users to create a new note with a title and content.

<img width="1918" height="967" alt="Thinkboard_Homepage" src="https://github.com/user-attachments/assets/805a6172-e088-47c5-b9a3-eb48030ad9e3" />

<img width="1917" height="968" alt="Thinkboard_CreateNewPage1" src="https://github.com/user-attachments/assets/0574b1eb-df9b-4a15-81f7-183d87c8fe5f" />

<img width="1918" height="966" alt="Thinkboard_CreateNewPage2" src="https://github.com/user-attachments/assets/edaa326a-1f07-4396-8104-1a8b7b124f43" />


Once submitted, the note is added, and the success pop-up is shown.


<img width="1916" height="954" alt="Thinkboard_NoteCreatedSuccessfullyPopUp" src="https://github.com/user-attachments/assets/f67da64b-b5e6-4df8-ba9f-891fcb0e1643" />

<img width="1913" height="965" alt="Thinkboard_Homepage_AfterAddingNewNote" src="https://github.com/user-attachments/assets/377e3bf0-eaa3-4b7a-a5ea-e5b8305c6ad8" />


### 🛠️ Edit Note

Users can click on a note to edit its contents.
<img width="1913" height="965" alt="Thinkboard_Homepage_AfterAddingNewNote" src="https://github.com/user-attachments/assets/b599f9d3-1a8d-4af5-9055-d9a42af50cc9" />

<img width="1907" height="968" alt="Thinkboard_EditPage" src="https://github.com/user-attachments/assets/c5f330c7-8f03-42f1-9ef0-8c1e029ca26f" />

<img width="1918" height="956" alt="Thinkboard_AfterEditingANote" src="https://github.com/user-attachments/assets/85d343b0-4c93-4c77-ba68-54f73646a1dc" />

---

### ❌ Delete Note

Users receive a confirmation prompt before deletion.
<img width="1917" height="967" alt="1_Thinkboard_DeleteNoteConfirmation" src="https://github.com/user-attachments/assets/8b63361d-1ea2-48d5-80bc-8ed1e3cff2e6" />

<img width="1908" height="979" alt="2_Thinkboard_NoteDeletedSuccessfullyPopUp" src="https://github.com/user-attachments/assets/a706cb3a-4705-4813-80c1-26e4f0f87210" />


After deleting all notes, the homepage displays a message for empty notes.

<img width="1917" height="861" alt="3_Thinkboard_HomepageWithEmptyNotes" src="https://github.com/user-attachments/assets/708e7176-3ab9-49f1-be6e-29c7e8cd593e" />

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
<img width="1920" height="1080" alt="Thinkboard_FailedToCreateNotePopUp" src="https://github.com/user-attachments/assets/a8603916-da13-43d1-a40c-f3576141ceea" />

<img width="1916" height="930" alt="Thinkboard_RateLimiting_SecurityFeature_SlowDownPopUp" src="https://github.com/user-attachments/assets/a8cc36bc-dad8-4588-9066-49323e136788" />

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
