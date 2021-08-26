// let button = document.getElementById('submit');

// const onClick = function() {
//     document.querySelector('h1').textContent += ' Maytees';
//     document.body.style.backgroundColor = "grey"; 
// }

// button.addEventListener("click", onClick); 


// // create Element 

// // create a Div
// const newDiv = document.createElement('div'); 

// // add class
// newDiv.className = "newClassNameAdded"
// // add ID
// newDiv.id = 'newIDHere'

//  // add attribute
// newDiv.setAttribute('href', 'url'); 

//  // create a text node
// let newDivText = document.createTextNode('hello world'); 

//  // add text to or new div
// newDiv.appendChild(newDivText); 

// let container = document.querySelector('container');
// let h1 = document.querySelector('header h1'); 
// newDiv.style.fontSize = '30px';  
// // insert before 
// container.insertBefore(newDiv, h1); 

// let wbutton = document.getElementById('wbutton')
// let box = document.getElementById('box')
// let header_title = document.getElementById('header-title'); 
// let output = document.getElementById('output'); 


// wbutton.addEventListener('click', onClickRunEvent);
// wbutton.addEventListener('dblclick', onClickRunEvent);
// wbutton.addEventListener('mousedown', onClickRunEvent);
// wbutton.addEventListener('mouseup', onClickRunEvent);
// box.addEventListener('mouseenter', onClickRunEvent); 
// box.addEventListener('mouseleave', onClickRunEvent); 
// box.addEventListener('mouseover', onClickRunEvent); // if you have elements inside it will run and mouseenter will not!
// box.addEventListener('mouseout', onClickRunEvent); 
// box.addEventListener('mousemove', onClickRunEvent); 

// let itemInput = document.querySelector('input[type="text"]'); 
// let form = document.querySelector('form'); 
// let select = document.querySelector('select'); 


// itemInput.addEventListener('keydown', onClickRunEvent)
// itemInput.addEventListener('keyup', onClickRunEvent)
// itemInput.addEventListener('keypress', onClickRunEvent)
// itemInput.addEventListener('focus', onClickRunEvent)
// itemInput.addEventListener('blur', onClickRunEvent)
// itemInput.addEventListener('cut', onClickRunEvent)
// itemInput.addEventListener('paste', onClickRunEvent)
// itemInput.addEventListener('input', onClickRunEvent)
// select.addEventListener('change', onClickRunEvent)
// select.addEventListener('input', onClickRunEvent)
// form.addEventListener('submit', onClickRunEvent); 


// function onClickRunEvent(event) {
//     event.preventDefault(); 
    // console.log(event); 
    // console.log(event.target)
    // console.log(event.target.id)
    // console.log(event.target.className); 
    // console.log(event.target.classList); 
    // console.log(event.type); 
    // console.log(event.clientX); 
    // console.log("event.offsetX:" + event.offsetX); // from the actual element itself
    // if(event.altKey) {
    //     document.querySelector('body').style.backgroundColor = "green"; 
    // // }
    // console.log('Event type:' + event.type); 
    // console.log(event.target.value)

    // output.innerHTML = "<h3>" + event.target.value+ "</h3>";
    // header_title.innerHTML = '<h3> MouseX:' + event.offsetX + " </h2><h3>MouseY:" + event.offsetY + '</h3>'; 
    // document.body.style.backgroundColor = "rgb("+event.offsetX+", "+event.offsetY+", 40)"; 
    // box.style.backgroundColor = "rgb("+event.offsetX+", "+event.offsetY+", 40)"; 
// }

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}