function verifica(){
    let x = parseFloat(document.getElementById("x").value);
    let y = parseFloat(document.getElementById("y").value);
    let z = parseFloat(document.getElementById("z").value);
    
    let verificare = false;
    if (x + y === z){
        document.getElementById("raspuns").textContent=`x + y = z => ${x} + ${y} = ${z}`;
    }else if (x - y === z){
        document.getElementById("raspuns").textContent=`x - y = z => ${x} - ${y} = ${z}`;
    }else if (x * y === z){
        document.getElementById("raspuns").textContent=`x * y = z => ${x} * ${y} = ${z}`;
    }else if (x / y === z){
        document.getElementById("raspuns").textContent=`x / y = z => ${x} / ${y} = ${z}`;
    }else {
        document.getElementById("raspuns").textContent=`niciun operator nu convine lui $`;
    }
}