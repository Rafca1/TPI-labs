function changeText() {
    const today = new Date();
    document.getElementById("paragraph").textContent = today;
    console.log(today);
  }