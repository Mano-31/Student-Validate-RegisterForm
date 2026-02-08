  let params = new URLSearchParams(window.location.search);
  let name = params.get("name");

  document.getElementById("msg").innerText =
    " Welcome " + name + "!";