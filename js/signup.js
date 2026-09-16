const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const fullname = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("passwords do not match");
    return;
  }

  try {
    const response = await fetch("https://novatech-backend-mu4a.onrender.com/api/signup", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ fullname, email, password }),
    });

    const data = await response.json();
    if (!response.ok) {
      alert(data.message);
      return;
    }
    alert("Successfull!");
    window.location.href = "signin.html";
  } catch (error) {
    console.log(error);
    alert("Unable to connect to the server");
  }
});
