datos();

//Create
function create() {
    let nombre = document.querySelector("#lbl_nombre").value;
    let apellido1 = document.querySelector("#lbl_apellido1").value;
    let apellido1 = document.querySelector("#lbl_apellido2").value;
    let poke = document.querySelector("#lbl_poke").value;
    console.log(data = { nombre: nombre, apellido1: apellido1, apellido2: apellido1, Pokemon: poke});
    datos();
}





//Update
function update(nombre){
    let nombre = document.querySelector("#lbl_nombre").value;
    let apellido1 = document.querySelector("#lbl_apellido1").value;
    let apellido1 = document.querySelector("#lbl_apellido2").value;
    let poke = document.querySelector("#lbl_poke").value;
    console.log(data = { nombre: nombre, apellido1: apellido1, apellido2: apellido1, Pokemon: poke});
    datos();
}




//Delete
function delete() {
    let nombre = document.querySelector("#lbl_nombre").value;
    let apellido1 = document.querySelector("#lbl_apellido1").value;
    let apellido1 = document.querySelector("#lbl_apellido2").value;
    let poke = document.querySelector("#lbl_poke").value;
    console.log(data = { nombre: null, apellido1: null, apellido2: null, Pokemon: null});
}

