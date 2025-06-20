# Express & Pug

This project includes two progressive exercises to practice **Pug** as a templating engine with **Express**.

---

## Exercise 1 — Simple Pug Page

**Goal**:  
Set up Express to use Pug and render a basic page with a welcome message.

**Instructions**:
- Configure `app.set("view engine", "pug")` in your Express app.
- Create a route `/` that renders a simple Pug view with a welcome message.

---

## Exercise 2 — Dynamic User List

**Goal**:  
Render a list of users passed from the server into a Pug template.

**Instructions**:
- Create a `/users` route in Express.
- Pass an array of 3–5 user objects to the view (e.g., `{ id: 1, name: "Alice", email: "alice@test.com" }`).
- Create a `users.pug` view inside the `views` folder.
- Display a main title and loop through the users to render their name and email.
- **Bonus**: Handle the case where the list is empty by showing "No users found."

---

## Suggested Project Structure