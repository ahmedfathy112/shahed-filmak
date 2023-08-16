const apiUrl =
  "https://accountsauthentication.pythonanywhere.com/api/register/";

async function registerUser(fakeData) {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fakeData),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("User registered successfully!");
      console.log("Response:", data);
      // If you want to access the user ID and token separately, you can do it like this:
      const userId = data.user.id;
      const token = data.token;
      console.log("User ID:", userId);
      console.log("Token:", token);

      // Show success notification
      showNotification("User registered successfully!", "success");
    } else {
      console.log("Failed to register user.");
      console.log("Error:", data);

      // Show error notification
      showNotification("Failed to register user. Please try again.", "error");
    }
  } catch (error) {
    console.error("Error:", error.message);
    // Show error notification
    showNotification("An error occurred. Please try again later.", "error");
  }
}
function showErrorMessage(element, message) {
  const errorElement = document.getElementById(element + "-error");
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

function hideErrorMessage(element) {
  const errorElement = document.getElementById(element + "-error");
  errorElement.style.display = "none";
}

async function handleSignUpFormSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const button = document.getElementById("btn-send");
  button.textContent = "Loading...";
  button.disabled = true;

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-pass").value;

  // Check if User-Name, Email, and Password are filled
  if (!username.trim()) {
    showErrorMessage("username", "User-Name is required.");
  } else {
    hideErrorMessage("username");
  }

  if (!email.trim()) {
    showErrorMessage("email", "Email is required.");
  } else {
    hideErrorMessage("email");
  }

  if (!password.trim()) {
    showErrorMessage("password", "Password is required.");
  } else {
    hideErrorMessage("password");
  }

  // Check if Password and Confirm Password match
  if (password !== confirmPassword) {
    showErrorMessage("confirm-pass", "Passwords do not match.");
  } else {
    hideErrorMessage("confirm-pass");
  }

  // If any required fields are empty or passwords do not match, stop further processing
  if (
    !username.trim() ||
    !email.trim() ||
    !password.trim() ||
    password !== confirmPassword
  ) {
    // Reset the button state
    button.textContent = "Sign Now";
    button.disabled = false;
    return;
  }

  const fakeData = {
    username: username,
    email: email,
    password: password,
  };

  try {
    // Call the registerUser function with the form data
    await registerUser(fakeData);
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    // Reset the button state
    button.textContent = "Sign Now";
    button.disabled = false;
  }
}

function showNotification(message, type) {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.textContent = message;

  document.body.appendChild(notification);

  // Remove the notification after a few seconds
  setTimeout(() => {
    document.body.removeChild(notification);
  }, 3000); // Remove the notification after 3 seconds (adjust as needed)
}

// Add an event listener to the "Sign Now" button
document
  .getElementById("btn-send")
  .addEventListener("click", handleSignUpFormSubmit);
