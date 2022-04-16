function numere() {
    const pare = [];
    for (let i = 0; i <= 100; i++) {
      if (i % 2 == 0) {
        console.log(i);
      }
      pare[i] = i;
    }
    console.log(pare);
  }