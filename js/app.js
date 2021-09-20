





var el, i;
var data = [ 
{ firstname: "Mauricio", lastname: "Sevilla" },
{ firstname: "Jorge", lastname: "Barón" },
{ firstname: "Andrés", lastname: "Espinoza" },
{ firstname: "Rafael", lastname: "Pérez" }];
var panel = document.querySelector("#panel");

//Funcion para borrar los datos del formulario
function clearForm() {
  document.querySelector("#fname").value = "";
  document.querySelector("#lname").value = "";
}

//Funcion para crear nuevos datos
function create() {
  var fn = document.querySelector("#fname").value;
  var ln = document.querySelector("#lname").value;
  data = [...data, { firstname: fn, lastname: ln }];
  clearForm();
  console.log(data)
  renderItem();
  saveLocalStorage(data)
}

//Funcion para actualizar datos existentes
function update() {
  data[i].firstname = document.querySelector("#fname").value;
  data[i].lastname = document.querySelector("#lname").value;
  renderItem();
  saveLocalStorage(data)
}

//Funcion para borrar los datos
function deleteItem() {
  data.splice(i, 1);
  renderItem();
  saveLocalStorage(data)
}

 renderItem();

 //Obtener los datos para localStorage

window.onload = () => {
  const dataFormat = JSON.parse(window.localStorage.getItem('data'))
  invent = dataFormat
  console.log(data);
}

//Funcion para guardar los datos en localStorage
function saveLocalStorage(data){
  window.localStorage.setItem('data', JSON.stringify(data))
}


//Muestra los datos en el DOM
function renderItem() {

  panel.textContent = "";
  data.forEach(x => {
    el = document.createElement("option");
    el.innerText = `${x.firstname} ${x.lastname}`;
    panel.append(el);
    saveLocalStorage(data)
  });
}



function panelClick() {
  i = panel.selectedIndex;
  document.querySelector("#fname").value = data[i].firstname;
  document.querySelector("#lname").value = data[i].lastname;
  saveLocalStorage(data)
}




   

 
 
 
 