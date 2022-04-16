function getDistance() {
    let x1 = parseFloat(document.getElementById("x1").value);
    let y1 = parseFloat(document.getElementById("y1").value);
    let x2 = parseFloat(document.getElementById("x2").value);
    let y2 = parseFloat(document.getElementById("y2").value);
    let x = x2 - x1;
    let y = y2 - y1;
    document.getElementById("rezultat").textContent = Math.sqrt(
      x * x + y * y
    );
  }