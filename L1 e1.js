
      function adunare() {
        let a = parseFloat(document.getElementById("a").value);
        let b = parseFloat(document.getElementById("b").value);
        let sum = a + b;
        document.getElementById("rezultat").textContent = sum;
      }
      function scadere() {
        let a = parseFloat(document.getElementById("a").value);
        let b = parseFloat(document.getElementById("b").value);
        let substract = a - b;
        document.getElementById("rezultat").textContent = substract;
      }
      function inmultire() {
        let a = parseFloat(document.getElementById("a").value);
        let b = parseFloat(document.getElementById("b").value);
        let multiply = a * b;
        document.getElementById("rezultat").textContent = multiply;
      }
      function impartire() {
        let a = parseFloat(document.getElementById("a").value);
        let b = parseFloat(document.getElementById("b").value);
        let divide = a / b;
        document.getElementById("rezultat").textContent = divide;
      }