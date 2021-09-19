
 
 var invent = [
   { name: 'calabaza'},
   { name: 'durazno'},
   {  name: 'zanahoria'},
   {  name: 'piña'},
  ];
 
 
window.onload = () =>{
  console.log(invent);
}
 



 
 function createItem(item) {
  invent.push(item);
  return invent;
   

 }

 function deleteItem(nameInvent) {
   const itemFilter = invent.filter((item) => {
   return item.name != nameInvent 
   })
   console.log(itemFilter);
  }
  
 
 

 
 function updateItem(inventEdit) {
   console.log('Agregando item')
   
 }
 
 
 
 