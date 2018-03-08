'use strict';



window.onload = function(){
  var listCountMessage = setListMessage();
  alert(listCountMessage);
  // setListMessage();
  createListCountHeaderElement();
  updateHeaderMessage();

  creatNewItemTextInput();

  addRemoveButtonstoExistingItems();
}

function setListMessage(){
  var list = document.getElementById('shopping-list');
  // alert("This page has " + list.children.length + " items on the page");
  return "This page has " + list.children.length + " items on the page";
}

function createListCountHeaderElement(message){
  let listHeading = document.createElement("h2");
  document.getElementsByTagName("h1")[0].appendChild(listHeading);
  listHeading.setAttribute("id", "list-heading");

}

function updateHeaderMessage(){
  var listMessage = setListMessage();
  var listHeader = document.getElementById('list-heading');
  listHeader.innerHTML = listMessage;
}

function addRemoveButtonstoExistingItems(){
  let list=document.getElementById("shopping-list");
  for (let i=0); i<list.children.length; i++){
    addRemoveButton(list.children[i]);
  }
}

function addRemoveButton (appendElement){
  console.log(appendElement);
  let removeButton = document.creatElement("button");
  removeButton.innerHTML = "Remove";
  removeButton.onclick - deleteItem;
  appendElement.appendChild(removeButton);
  updateListCountHeaderMessage();
}

function createNewItemTextInput(){
  let textField = document.getElementById("item-text");
  textField.setAttribute("placeholder", "type item to add");
  let addButton = document.getElementById("add-button");
  addButton.innerHTML="Add Item";
  addButton.onclick=addItem;
  document.getElementById("add-item").appendChild(textField);
  document.getElementById("add-item").appendChild(addButton);
}

function addItem(event){
  event.preventDefault();
  let newItemText = document.getElementById("item-text").value;
  let newItem=document.creatElement("li");
  newItem.innerHTML=newItemText;
  document.getElementById("shopping-list").appendChild(newItem);
  updateListCountHeaderMessage();


addRemoveButton(newItem);
document.getElementById('add-item').reset();

}

function deleteItem(){
  this.parentNode.remove(this);
  updateListCountHeaderMessage();
}
