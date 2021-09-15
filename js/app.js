


let element, i;
let data = [
  { name: "Mauricio", lastname: "Sevilla" },
  { name: "Jorge", lastname: "Barón" },
  { name: "Andrés", lastname: "Espinoza" },
  { name: "Rafael", lastname: "Pérez" }
];

let panel = document.querySelector("#panel");


function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#lname").value = "";
}

function renderItem() {

  panel.textContent = "";
  data.forEach(x => {
    element = document.createElement("option");
    element.innerText = `${x.name} ${x.lastname}`;
    panel.append(element);
  });
}

function create() {
  let name = document.querySelector("#name").value;
  let lastname = document.querySelector("#lname").value;
  data = [...data, { firstname: name, lastname: lastname }];
  clearForm();
  console.log(data)
  renderItem();
}

function panelClick() {
  i = panel.selectedIndex;
  document.querySelector("#name").value = data[i].name;
  document.querySelector("#lname").value = data[i].lastname;
}

function update() {
  data[i].name = document.querySelector("#name").value;
  data[i].lastname = document.querySelector("#lname").value;
  renderItem();
}

function deleteItem() {
  data.splice(i, 1);
  renderItem();
}

 renderItem();