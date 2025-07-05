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

8. For the frontend we used tailwind.css, this helps us  by allowing to write the css code directly into the .js files without needing to write it in a separate .css file. 