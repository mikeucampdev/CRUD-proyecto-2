

//TODO Selectores del DOM

const inputName   = document.getElementById('name')
const buttonCreate = document.getElementById('newItem')
const buttonUpdate = document.getElementById('updateItem')
const buttonDelete = document.getElementById('deleteItem')





 //TODO toda tarea debe tener un id
 var invent = [];
 
 
window.onload = () => {
  const inventFormat = JSON.parse(window.localStorage.getItem('invent'))
  invent = inventFormat
  alert('Bienvenidos a mi primer CRUD. Gracias TOTALES!!!')
  console.log(invent);
}
 

function saveLocalStorage(invent){
  window.localStorage.setItem('invent', JSON.stringify(invent))
}



 // Funcion para crear
 function createItem(item) {
  const itemId = {id:Math.random() ,...item}
  invent.push(itemId)
  saveLocalStorage(invent)
  alert('Producto agregado')
  return invent;
   

 }

 //Funcion para borrar
 function deleteItem(name) {
   //TODO Filter es para filtrar los elementos que hagan match con mi condicional
   const itemFilter = invent.filter((item) => {
   return item.name != name //-> Esta es mi condicional
   })
   invent = itemFilter
   saveLocalStorage(invent)
  }
  
 
 

 //Funcion para actualizar
 function updateItem(itemEdit) {
  const itemFilter = invent.filter((item) => {
    return item.id != itemEdit.id//-> Esta es mi condicional
    })
    itemFilter.push(itemEdit)
    saveLocalStorage(invent)

   }

   //TODO Metodo para que funcionen los botones
  buttonCreate.addEventListener('click', () =>{
  const valueInput = inputName .value
  const name = {nombre: valueInput}
  createItem(name)
  inputName.value = ''
   
})
   

 
 
 
 