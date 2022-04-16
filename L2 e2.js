function numere() {
    let vector = [];
    for (let i = 0; i <= 5; i++) {
      console.log(i);
      let valoare = prompt("introdu numar intre 10 si 100");
      if (valoare > 10 && valoare < 100) {
        let verificare = true;
        for (let j = 0; j < vector.length; j++) {
          if (valoare === vector[j]) {
            verificare = false;
          }
        }
        if (verificare === true) {
          vector.push(valoare);
          console.log(valoare);
          alert(valoare);
        }
      } else {
        i--;
      }
    }
  }