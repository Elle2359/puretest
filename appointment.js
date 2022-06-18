var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var container = document.getElementById('main-header');
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);



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
  var editBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  editBtn.className = 'btn  btn-sm float-right edit';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  editBtn.appendChild(document.createTextNode('Y'));

  // Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

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

  const li = document.createElement('li');

  // Add text node with input values
  li.appendChild(document.createTextNode(`${newItem.value}`));

  
  container.appendChild(li);

  // Clear fields
  newItem.value = '';
  
