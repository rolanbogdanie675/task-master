/* ----------------------------------------
   Filename: AdvancedWebApp.js
   Content: A complex web application that manages user authentication, 
            data retrieval from a REST API, and dynamic UI rendering.
---------------------------------------- */

// Global variables
let userLoggedIn = false;
let userData = {};

// User Class
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login() {
    return new Promise((resolve, reject) => {
      // Simulating API call for login
      setTimeout(() => {
        if (this.username === "admin" && this.password === "password") {
          this.getProfileData()
            .then((data) => {
              userLoggedIn = true;
              userData = data;
              resolve("Login successful!");
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          reject("Invalid username or password!");
        }
      }, 1000);
    });
  }

  getProfileData() {
    return new Promise((resolve, reject) => {
      // Simulating API call for profile data retrieval
      setTimeout(() => {
        resolve({ name: "John Doe", age: 30, email: "johndoe@example.com" });
      }, 1000);
    });
  }

  logout() {
    userLoggedIn = false;
    userData = {};
  }
}

// UI Class
class UI {
  renderLogin() {
    const loginForm = `
      <h2>Login Page</h2>
      <input type="text" id="username" placeholder="Username" />
      <br />
      <input type="password" id="password" placeholder="Password" />
      <br />
      <button onclick="handleLogin()">Login</button>
    `;

    const app = document.getElementById("app");
    app.innerHTML = loginForm;
  }

  renderProfile() {
    const profileData = `
      <h2>Welcome, ${userData.name}</h2>
      <p><strong>Username:</strong> ${userData.username}</p>
      <p><strong>Email:</strong> ${userData.email}</p>
      <button onclick="handleLogout()">Logout</button>
    `;

    const app = document.getElementById("app");
    app.innerHTML = profileData;
  }
}

// Event Handlers
function handleLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = new User(username, password);

  user.login()
    .then((message) => {
      const ui = new UI();
      ui.renderProfile();
      console.log(message);
    })
    .catch((error) => {
      console.error(error);
    });
}

function handleLogout() {
  const user = new User();
  user.logout();

  const ui = new UI();
  ui.renderLogin();
}

// Initial App Render
if (userLoggedIn) {
  const ui = new UI();
  ui.renderProfile();
} else {
  const ui = new UI();
  ui.renderLogin();
}