const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const fullname = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    showMessage("Passwords do not match", "danger");
    return;
  }

  try {
    const response = await fetch(
      "https://novatech-backend-mu4a.onrender.com/api/signup",
      {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({ fullname, email, password }),
      },
    );

    const data = await response.json();
    if (!response.ok) {
      showMessage(data.message, "danger");
      return;
    }
    showMessage("Signup successful!", "success");

    setTimeout(() => {
      window.location.href = "signin.html";
    }, 1500);
  } catch (error) {
    console.log(error);
    showMessage("Unable to connect to the server", "danger");
  }
});

function showMessage(message, type) {
    const messageDiv = document.createElement("div");

    messageDiv.textContent = message;
    messageDiv.className = `alert alert-${type}`;
    messageDiv.style.marginTop = "15px";

    signupForm.prepend(messageDiv);

    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}
