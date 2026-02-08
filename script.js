
    document.getElementById("regForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let course = document.getElementById("course").value;

    if (name === "" || email === "" || phone === "" || course === "") {
      alert("Please fill all required fields");
      return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      alert("Enter valid 10-digit phone number");
      return;
    }

    window.location.href = "next.html?name=" + name;
  });
