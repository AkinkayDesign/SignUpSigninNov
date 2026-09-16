const signinForm = document.getElementById("signinForm");

signinForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("https://novatech-backend-mu4a.onrender.com/api/signin", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ identifier: email, password: password }),
    });

    const data = await response.json();
    if (!response.ok) {
      alert(data.message);
      return;
    }
    // localStorage.setItem("token", data.token);
    document.cookie = `token=${data.token}; path=/`

    alert("Signin Successfully!!!");
    window.location.href = "http://127.0.0.1:5500/index.html"
    
  } catch (error) {
    console.log("Signin error", error);
    alert("Unable to connect to the server");
  }
});
