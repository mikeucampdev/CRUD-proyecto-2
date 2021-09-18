


let element, i;
let data = [
  { name: "Mauricio", lastname: "Sevilla" },
  { name: "Jorge", lastname: "Barón" },
  { name: "Andrés", lastname: "Espinoza" },
  { name: "Rafael", lastname: "Pérez" }
];


window.onload = () =>{
  data.push(window.localStorage.getItem('data'))
  console.log(data);
  alert('Bienvenidos a mi primer CRUD.Gracias TOTALES!!!')
}

//Se guardan los datos en local storage
function guardarLocalStorage (data){
  window.localStorage.setItem('data', JSON.stringify(data)
  );
}




/*function renderItem() {

  panel.textContent = "";
  data.forEach(x => {
    element = document.createElement("option");
    element.innerText = `${x.name} ${x.lastname}`;
    panel.append(element);
  });
}*/

// Aqui se agregan nuevos datos
function create(data) {
  let name = document.querySelector("#name").value;
  let lastname = document.querySelector("#lname").value;
  data = [...data, { firstname: name, lastname: lastname }];
  data.push(data);
  guardarLocalStorage(data);
  return data;
  alert('Dato guardado con éxito');
  console.log(data);
  
}


//Aqui se actualizan nuevos datos
function update() {
  data[i].name = document.querySelector("#name").value;
  data[i].lastname = document.querySelector("#lname").value;
  renderItem();
}


//Aqui se borran los datos
function deleteItem(NombresFiltrados) {
  const name = data.filter((data) => {
    return data.name != NombresFiltrados;
  })
}
data = deleteItem;
guardarLocalStorage(data);

 