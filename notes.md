1. For running the server by the command "npm run dev" we firstly have to make sure we have run the "npm install nodemon -D" in the correct directory , for this case the backend directory not the overall whole directory of MERN_ThinkBoard

2. The flow of imports is as follows in the backend ,
   notesController.js--> notesRoutes.js--> server.js
   Here all these are kept under the same folder src of the backend folder for good practice

3. The .env file is created so that all the passwords remain a secret via gitignore when we upload this project to github.
   For this we imported the following
   import dotenv from "dotenv"

4. In the models/Notes.js file the overall structure of the saved notes is defined. Here there are 3 main parts such as title, content and the timestamps(where the createdAt and updatedAt will be automatically made). The result of this sturcture saved can be displayed at the notes.db at the mongodb website.

Later optional changes in the postNotes function makes it so that it will also show the above information in the postman app too as it shows in mongodb website

5. In the notesController the updatedNotes function, if we can update only the title or the content if we want to.

6. The middleware is a function that can be executed before sending a response from the server to any request of the client. Some important use cases of the middleware is
   --> authentication check
   --> rate limiting (This is a way to control how often someone can do somthing in a webpage or app. For example, how many times they can refresh a page ,make an API request or try to log in. This prevents from error 429 Too Many Request and prevents servers from getting overwhelmed.)

   For implementing the rate limiting using middleware, we will use Upstash and Redis (free).

7. shortcut for opening and closing a terminal in vscode is Ctrl+`

8. For the frontend we used tailwind.css, this helps us by allowing to write the css code directly into the .js files without needing to write it in a separate .css file.

9. The daisyui, a library for the tailwind.css is used so that classes can be easily called after installing the daisyui version 4.12.

10. Now aftrer closing and opening the application, to check everything is working properly or not,

firstly we check the backend--> running npm run dev under backend folder, we check this by sending a request in the postman app and observe the proper response for this

then we check the frontend--> running npm run dev under frontend folder, we open the link in the output terminal to see if the proper webpage is displyed.

11. For the different icons used here, we will use the lucide-react package

12. react hooks useState and useEffect

Great! Let's break down **`useState`** and **`useEffect`** — two of the most important and commonly used **React hooks** — from the ground up, keeping it **simple and beginner-friendly**, and build toward more **practical and advanced use cases**.

---

## 🔧 What are React Hooks?

In React, **hooks** are functions that let you “hook into” React features — like state, lifecycle, and context — **without writing class components**.

---

## 🧠 1. `useState`: React's way of remembering data

### 🔹 What does it do?

- It lets you **add state** (i.e., remember data) to **functional components**.
- Think of `useState` as a **box** where you can put a value and React will remember it between re-renders.

### ✅ Basic Syntax:

```js
const [stateVariable, setStateFunction] = useState(initialValue);
```

### 🧪 Example 1: A counter

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // count is 0 initially

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

### 🔄 What happens here?

- `useState(0)` means `count` starts at 0.
- `setCount(count + 1)` increases it by 1.
- Each click updates the state and React re-renders the component.

---

## ⚙️ 2. `useEffect`: React's side-effect manager

### 🔹 What is a "side effect"?

- Anything **outside** the component's return/render logic — like:

  - Fetching data from an API
  - Setting up event listeners
  - Modifying the DOM
  - Setting a timer

### ✅ Basic Syntax:

```js
useEffect(() => {
  // Do something here (a side-effect)
}, [dependencies]);
```

### 🧪 Example 2: Log count when it changes

```jsx
import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed to:", count);
  }, [count]); // Only runs when `count` changes

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}
```

---

## 🔁 `useEffect` Dependency Variants

| Syntax                          | Meaning                                                          |
| ------------------------------- | ---------------------------------------------------------------- |
| `useEffect(() => { ... })`      | Runs **after every render**                                      |
| `useEffect(() => { ... }, [])`  | Runs **once**, on component **mount** (like `componentDidMount`) |
| `useEffect(() => { ... }, [x])` | Runs **only when `x` changes** (like `componentDidUpdate`)       |

---

## 🎯 Real-world `useEffect` Examples

### 📡 Example 3: Fetch data from an API once

```jsx
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []); // empty array = run only once

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

## 🛠 More `useState` Examples

### 📋 Form Input

```jsx
function FormExample() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}</p>
    </div>
  );
}
```

### ✅ Toggle State

```jsx
const [isVisible, setIsVisible] = useState(false);

<button onClick={() => setIsVisible(!isVisible)}>
  {isVisible ? "Hide" : "Show"}
</button>;
```

---

## 🧠 More `useEffect` Use Cases

### ⏲️ Set Timeout or Interval

```jsx
useEffect(() => {
  const timer = setTimeout(() => {
    console.log("This runs after 3 seconds");
  }, 3000);

  return () => clearTimeout(timer); // cleanup
}, []);
```

### 🌐 Syncing with localStorage

```jsx
const [data, setData] = useState(() => {
  return JSON.parse(localStorage.getItem("myData")) || "";
});

useEffect(() => {
  localStorage.setItem("myData", JSON.stringify(data));
}, [data]);
```

---

## 🔁 Summary: When to Use Each?

| Feature     | When to Use                                                 |
| ----------- | ----------------------------------------------------------- |
| `useState`  | To remember values like form input, counters, toggles, etc. |
| `useEffect` | To handle anything that needs to happen **after render**    |
|             | e.g. data fetching, subscriptions, timers, syncing with DOM |

---

## 🧩 Bonus Tips

- Always use hooks **at the top** of your function, never inside loops or conditionals.
- If you're updating state based on previous state:
  Use callback form:

  ```js
  setCount((prev) => prev + 1);
  ```

- Cleanup functions in `useEffect` prevent memory leaks:

  ```js
  useEffect(() => {
    const listener = () => console.log("scrolling...");
    window.addEventListener("scroll", listener);

    return () => window.removeEventListener("scroll", listener);
  }, []);
  ```

---

13. CORS (Cross Origin Resource Sharing) error

This is a browser security rule. This happens when a website tries to get data from another website i.e. when our frontend is calling an API on different domain.

For example

You have frontend at http://localhost:3000
An API at backend at: http://api.example.com

Frontend makes a fetch request for the API

fetch('http://api.example.com')

But the browser will not allow this as this is a different origin from the current frontend address.

To avoid this we need to add another middleware called the cors

this cors middleware needs to be placed before the routes so that the frontend can access the backend API
if we place it after the routes, the frontend will not be able to access the backend

14. Besides checking for errors in the backend( terminal and postman ) and frontend( terminal and resulting webpage), we can also check for error when there is nothing shown the resulting webpage (right click->inspect->errors and warnings logo on topmost right)

15. In CreatePage.jsx-> in handleSubmit() , usually after we give any title and content and click Create Note , it will refresh the page. To avoid this default behaviour, we use e.preventDefault() as follows

const handleSubmit = (e) => {
e.preventDefault(); // Prevent default form submission behavior
console.log(title);
console.log(content);
};

16. Some shortcuts in react
    --> clg = console.log()
    --> .card-actions = <div className="card-actions">

17. This is how to add updates to an already existing project repository in github

C:\8th_Semester\Project\MERN_ThinkBoard>git init
Reinitialized existing Git repository in C:/8th_Semester/Project/MERN_ThinkBoard/.git/

C:\8th_Semester\Project\MERN_ThinkBoard>git add .

C:\8th_Semester\Project\MERN_ThinkBoard>git commit -m "Included delete functionality and also empty note page"
[main edee4e2] Included delete functionality and also empty note page
6 files changed, 179 insertions(+), 13 deletions(-)
create mode 100644 frontend/src/components/NotesNotFound.jsx
create mode 100644 frontend/src/lib/axios.js
rewrite frontend/src/pages/CreatePage.jsx (60%)

C:\8th_Semester\Project\MERN_ThinkBoard>git remote add origin https://github.com/Elham048/MERN_ThinkBoard.git
error: remote origin already exists.

C:\8th_Semester\Project\MERN_ThinkBoard>git remote set-url origin https://github.com/Elham048/MERN_ThinkBoard.git

C:\8th_Semester\Project\MERN_ThinkBoard>git branch -M main

C:\8th_Semester\Project\MERN_ThinkBoard>git push -u origin main
Enumerating objects: 23, done.
Counting objects: 100% (23/23), done.
Delta compression using up to 8 threads
Compressing objects: 100% (13/13), done.
Writing objects: 100% (13/13), 3.97 KiB | 812.00 KiB/s, done.
Total 13 (delta 4), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
To https://github.com/Elham048/MERN_ThinkBoard.git
e7da475..edee4e2 main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.

C:\8th_Semester\Project\MERN_ThinkBoard>

18. Going to the website "bg.ibelick.com" we can get the code for the background of our app. Here we just changed the color to meet our requirements.

<div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

19. In the terminal give the command
    C:\8th_Semester\Project\MERN_ThinkBoard>npm init -y
    Wrote to C:\8th_Semester\Project\MERN_ThinkBoard\package.json:

{
"name": "mern_thinkboard",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"  
 },
"keywords": [],
"author": "",
"license": "ISC"
}

This creates the package.json which is then updated as

{
"name": "mern_thinkboard",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"build": "npm install --prefix backend && npm install --prefix frontend && npm run build --prefix frontend"
},
"keywords": [],
"author": "",
"license": "ISC"
}

by doing this, after we delete the node_modules folder in both frontend and backend, we can run the command

C:\8th_Semester\Project\MERN_ThinkBoard>npm run build

This will install all the dependencies and also build the frontend application. This also creates a dist folder under frontend folder, which is the optimized version of the application we have built.

All this is done as when this app is uploaded to github, there won't be the dependencies with it. So by running these commands in the render.com, these dependencies will be automatically installed and the frontend will also be built. Thus we will get the optimized version of the react app.
