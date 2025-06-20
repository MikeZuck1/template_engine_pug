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

## Exercise 3 — User Creation Form & Conditional Rendering

**Goal**:  
Build a basic form in Pug to add a new user, with server-side rendering and validation.

---

### 🛠 Instructions

1. **Create a `GET /users/new` route**:
   - It renders a Pug view with a form containing the following fields:  
     `name`, `email`, and `age`.

2. **Create a `POST /users` route**:
   - It receives form data.
   - Adds the new user to the in-memory user list.
   - Redirects to `/users`, where the updated user list is shown.

3. **Show a one-time success message** after a user is added:
   - (Optional) Use `res.locals` or `req.session.message` if using `express-session`.

4. **Handle basic validation**:
   - If any field is empty, show an error message below the form.
   - Optional: Keep the previously entered values in the form.

---

### ✏️ Bonus Features

- Use `express.urlencoded({ extended: true })` middleware to parse `POST` data.
- Improve the form with simple styling using inline `<style>` or a layout file.
- Add a navigation link between `/users` and `/users/new`.

---

### ✅ Expected Routes

| Route         | Description                     |
|---------------|---------------------------------|
| `GET /users`  | Show list of users              |
| `GET /users/new` | Show user creation form    |
| `POST /users` | Add a new user and redirect     |

---

### 📁 Suggested View Structure

## Suggested Project Structure