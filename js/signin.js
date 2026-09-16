const signinForm = document.getElementById("signinForm");

signinForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch(
      "https://novatech-backend-mu4a.onrender.com/api/signin",
      {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({ identifier: email, password: password }),
      },
    );

    const data = await response.json();
    if (!response.ok) {
      showMessage(data.message, "danger");
      return;
    }
    // localStorage.setItem("token", data.token);
    document.cookie = `token=${data.token}; path=/`;

    showMessage("Signin successful!", "success");

    setTimeout(() => {
      window.location.href = "https://akinkaydesign.github.io/new_project/";
    }, 1500);
  } catch (error) {
    console.log("Signin error", error);
    showMessage("Unable to connect to the server", "danger");
  }
});

function showMessage(message, type) {
    const messageDiv = document.createElement("div");

    messageDiv.textContent = message;
    messageDiv.className = `alert alert-${type}`;
    messageDiv.style.marginTop = "15px";

    signinForm.prepend(messageDiv);

    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}