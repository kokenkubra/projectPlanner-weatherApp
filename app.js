(function () {
    document.querySelector('#btnschedule').addEventListener('click', function () {
      let input = document.querySelector('#scheduleInput');
      let list = document.querySelector('#ulschedule'); 
      
      
      let item = document.createElement('li'); // create li node
      let itemText = document.createTextNode(input.value); // create text node
      
      item.appendChild(itemText); // append text node to li node
      
      list.appendChild(item); // append li node to list
    
      input.value = ""; // clear input
    });
  })();

  (function () {
    document.querySelector('#btnRemoveSchedule').addEventListener('click', function () {
    
      let list = document.querySelector('#ulschedule'); 
      
      
      list.removeChild(list.lastElementChild); // remove last child in the list
    });
  })();



  var items = document.querySelectorAll("#ulschedule li"),
  inputTEXT = document.querySelector("#scheduleInput"),
  tab = [], liIndex;
  //populate tab with li value
  for (let i = 0; i < items.length; i++) {
    const element = items[i];
        tab.push(items[i].innerHTML)
  }

  for (let i = 0; i < items.length; i++) {
    const element = items[i];
        items[i].onclick = function (){
            inputTEXT.value = this.innerHTML;
            liIndex = tab.indexOf(this.innerHTML);
            console.log(this.innerHTML + "index =" + liIndex);
        }
  }
  function editLI(){

    items[liIndex].innerHTML = inputTEXT.value;
    tab.length = 0
    for (let i = 0; i < items.length; i++) {
        const element = items[i];
            tab.push(items[i].innerHTML)
      }
  }

 

