const container  = document.querySelector(".container");
const nameValue = document.querySelector("#name-input");
const numberValue = document.querySelector("#number-input");
const addressValue = document.querySelector("#address");
const button = document.querySelector("#button");
const formValue = document.querySelector("#formsValue")
const msgDiv = document.querySelector("#msgdiv");
const filterItem = document.getElementById("filteritems");
const tableRow = document.querySelector(".tablerow");
const input = document.querySelectorAll("input");

   // const PromptName = prompt("enter your name"); 
   // const promptValue = document.querySelector("h3");
   // promptValue.textContent = `welcome ${PromptName}, start saving your contacts`;

   // filterItem.addEventListener("keyup", (e) => {
   //    let text = e.target.value.toLowerCase();
   //    let contactNames =  tableRow.getElementsByClassName("newName");
   //    Array.from(contactNames).forEach(names => {
   //       var itemName = names.firstChild.textContent;
   //       //console.log(itemName);
   //       if(itemName.toLowerCase().indexOf(text) != -1){
   //          names.style.display = "block";
   //       }else{
   //          names.style.display = "none";
   //       }
   //    })
   // });

 button.addEventListener("click" , (e) => {
     e.preventDefault()

     if (nameValue.value === "" || numberValue.value ==="" || addressValue.value === "") {
         let innerMsg = document.createElement("div");
         innerMsg.textContent = "All Fields Are Required";
         innerMsg.classList.add("alert-danger", "text-center")
         msgDiv.appendChild(innerMsg);
         setTimeout(() => innerMsg.remove() , 3000)

         input[0].classList.add("border-danger")
         input[1].classList.add("border-danger")
         input[2].classList.add("border-danger") 

         setTimeout(() => input[0].classList.remove("border-danger"), 3000)
         setTimeout(() => input[1].classList.remove("border-danger"), 3000)
         setTimeout(() => input[2].classList.remove("border-danger"), 3000)
     }
     
    else{
        
      document.querySelector("table").style.marginTop = "20px";

      let tr = document.createElement("tr");
      let td = document.createElement("td")
      td.appendChild(document.createTextNode(nameValue.value));
      document.querySelector("tbody").appendChild(tr)
      tr.appendChild(td)
 

     
      let td1 = document.createElement("td")
      td1.appendChild(document.createTextNode(numberValue.value));
      tr.appendChild(td1);

     
      let td2 = document.createElement("td")
      td2.appendChild(document.createTextNode(addressValue.value));
      tr.appendChild(td2);

      //adding the delete button
     let deleteButton = document.createElement("button");
     deleteButton.textContent = "Delete Contact";
     deleteButton.classList.add("btn", "btn-danger", "btn-block");
     tr.appendChild(deleteButton);
     deleteButton.classList.add("newName");
    }
  
 });
// removing contact 
 container.addEventListener("click" , (e) => {
    e.preventDefault();
    if(e.target.classList.contains("btn-danger")){
         if(confirm("Are you sure you want to delete this contact")){
         e.target.parentElement.remove();
       }else{
          alert("your contatct was not deleted");
       }
    }
 });



// console.log(document.querySelector("table").children[1]);

// button.addEventListener("click" , (e) => {
//     e.preventDefault();
    
//     let newdiv = document.createElement("div");
//     newdiv.classList.add("form-group");

//     let newinput = document.createElement("input");
//     newinput.placeholder = "Enter Age";
//     newinput.classList.add("form-control");
//     newinput.type = "number";

//     container.appendChild(formsvalue);
//     formsvalue.appendChild(newdiv);
//     newdiv.appendChild(newinput);
// })

