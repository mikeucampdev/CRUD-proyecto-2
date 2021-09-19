
 //toda tarea debe tener un id
 var invent = [
   { id:1, name: 'calabaza'},
   { id:2,name: 'durazno'},
   { id:3, name: 'zanahoria'},
   { id:4, name: 'piña'},
  ];
 
 
window.onload = () =>{
  console.log(invent);
}
 

function saveLocalStorage(invent){
  window.localStorage.setItem('invent', JSON.stringify(invent))
}



 
 function createItem(item) {
  const itemId = {id:Math.random() ,...item}
  invent.push(itemId);
  saveLocalStorage(invent);
  return invent;
   

 }

 function deleteItem(name) {
   //Filter es para filtrar los elementos que hagan match con mi condicional
   const itemFilter = invent.filter((item) => {
   return item.name != name //-> Esta es mi condicional
   })
   invent = itemFilter;
   saveLocalStorage(invent)
  }
  
 
 

 
 function updateItem(itemEdit) {
  const itemFilter = invent.filter((item) => {
    return item.id != itemEdit.id//-> Esta es mi condicional
    })
    itemFilter.push(itemEdit);
    saveLocalStorage(invent)
    
   }
   

 
 
 
 