
 
 var list = [
   { name: "Mauricio", lastname: "Sevilla" },
   { name: "Jorge", lastname: "Barón" },
   { name: "Andrés", lastname: "Espinoza" },
   { name: "Rafael", lastname: "Pérez" }
 ];
 
 
window.onload = () =>{
  console.log(list);
}
 

 
 function create(data) {
   var name = document.querySelector("#name").value;
   var lastname = document.querySelector("#lname").value;
   data.push(name, lastname);
   return array;
   

 }

 function deleteItem(name) {
  const listNames = name.filter((data) => {
  return data.name !=  

  console.log(listNames);
  
})
 

 
 function update() {
   list.name = document.querySelector("#name").value;
   list.lastname = document.querySelector("#lname").value;
   renderItem();
 }
 
 
 
 }