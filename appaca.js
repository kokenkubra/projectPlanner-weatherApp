const btnAdd = document.querySelector('#btnsubmit');
const form1 = document.querySelector('#workname');
const form2 = document.querySelector('#description');
const form3 = document.querySelector('#status');
const form4 = document.querySelector('#duetime');
const table = document.querySelector('.worktable');
const tr = document.querySelectorAll('tr');
const inWitchSelectShouldBe = document.querySelector(".newl");

 const array = ["To do","done"];

btnAdd.addEventListener('click', () => {

//Create and append select list
let selectList = document.createElement("select");

  selectList.id = "mySelect";
  

  //Create and append the options
  for (let i = 0; i < array.length; i++) {
      let option = document.createElement("option");
      option.value = array[i];
      option.text = array[i];
      selectList.appendChild(option);
     
  } 
  let work = form1.value;
  let des = form2.value;
  let todo = selectList;
  let dueDate = form4.value;

 // first date
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  // var mm = String(today.getMonth()).padStart(2, '0'); //January is 0!

  const month = ["01","02","03","04","05","06","07","08","09","10","11","12"];

  const d = new Date();
  let mm = month[d.getMonth()];
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  console.log(today);

  // second date

  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date(today);
  const secondDate = new Date(dueDate);
  
  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  console.log(firstDate);
  console.log(secondDate);
  
  let template = `
              <tr>
                  <td >${work}</td>
                  <td class="orange">${des}</td>
                  <td class="newl">${todo.outerHTML}</td>
                  <td>${dueDate}</td>
                  <td>${diffDays + " days"}</td>
              </tr>`;
  table.innerHTML += template;
});


// const tr = document.querySelector("#tr");
// const items = tr.firstElementChild;
// console.log(tr);
//   inputTEXT = document.querySelector("#workname"),
//   tab = [], liIndex;
//   //populate tab with li value
//   for (let i = 0; i < items.length; i++) {
//     const element = items[i];
//         tab.push(items[i].innerHTML)
//   }

//   for (let i = 0; i < items.length; i++) {
//     const element = items[i];
//         items[i].onclick = function (){
//             inputTEXT.value = this.innerHTML;
//             liIndex = tab.indexOf(this.innerHTML);
//             console.log(this.innerHTML + "index =" + liIndex);
//         }
//   }
//   function editLI(){

//     items[liIndex].innerHTML = inputTEXT.value;
//     tab.length = 0
//     for (let i = 0; i < items.length; i++) {
//         const element = items[i];
//             tab.push(items[i].innerHTML)
//       }
//   }

(function () {
  document.querySelector('#btnRemoveSchedule').addEventListener('click', function () {
  
    let list = document.querySelector('#worktbl'); 
        
    list.removeChild(list.lastElementChild); // remove last child in the list
  });
})();
  