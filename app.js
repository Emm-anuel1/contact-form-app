// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfC4f_KzhyCf5WOa0JZJ8L45p_MBgvNuI",
  authDomain: "form-app-955ba.firebaseapp.com",
  databaseURL: "https://form-app-955ba-default-rtdb.firebaseio.com",
  projectId: "form-app-955ba",
  storageBucket: "form-app-955ba.appspot.com",
  messagingSenderId: "713386037073",
  appId: "1:713386037073:web:cb8fcba703df142003cd70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Save to Firebase Realtime Database
  set(ref(database, 'messages/' + Date.now()), {
    name: name,
    email: email,
    message: message
  })
  .then(() => {
    alert("Message sent successfully!");
    document.getElementById("contactForm").reset();  // Reset form
  })
  .catch((error) => {
    alert("Error: " + error.message);
  });
});
