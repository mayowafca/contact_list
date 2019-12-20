const container  = document.querySelector(".container");
const nameValue = document.querySelector("#name-input");
const numberValue = document.querySelector("#number-input");
const addressValue = document.querySelector("#address");
const button = document.querySelector("#button");
const formValue = document.querySelector("#formsValue")
const msgDiv = document.querySelector("#msgdiv")


  const PromptName = prompt("enter your name"); 
   const promptValue = document.querySelector("h3");
  promptValue.textContent = `welcome ${PromptName}, start saving your contacts`;



 button.addEventListener("click" , (e) => {
     e.preventDefault()

     if (nameValue.value === ""  && numberValue.value ==="" && addressValue.value === "") {
      msgDiv.innerHTML = "<p>Please Fill In the Form Below</p>"
      msgDiv.classList.add("error");
      setTimeout(() => msgDiv.remove() , 5000)
     }
      else if(nameValue.value === ""){
         msgDiv.textContent = "please enter  a name"
         nameValue.style.borderColor = "red"
         msgDiv.classList.add("error");
         setTimeout(() => msgDiv.remove() , 5000)
         nameValue.addEventListener("click" , () => {
            nameValue.style.borderColor = ""
         })
      }
    else if(numberValue.value === ""){
      msgDiv.textContent = "please enter  a phone number"
      numberValue.style.borderColor = "red"
      msgDiv.classList.add("error");
      setTimeout(() => msgDiv.remove() , 5000)
      numberValue.addEventListener("click" , () => {
         numberValue.style.borderColor = ""
      })
    }
    else if(addressValue.value === ""){
      msgDiv.textContent = "please enter  an address"
      addressValue.style.borderColor = "red"
      msgDiv.classList.add("error");
      setTimeout(() => msgDiv.remove() , 5000)
      addressValue.addEventListener("click" , () => {
         addressValue.style.borderColor = ""
      })
    }
    
    
    else{
        
     document.querySelector("table").style.marginTop = "20px"

        let tr = document.createElement("tr");
     
     let td = document.createElement("td")
     td.appendChild(document.createTextNode(nameValue.value));

     container.appendChild(document.querySelector("table"));
     document.querySelector("table").appendChild(document.querySelector("tbody"));
     document.querySelector("tbody").appendChild(tr)
     tr.appendChild(td)
 

     
     let td1 = document.createElement("td")
     td1.appendChild(document.createTextNode(numberValue.value));

     container.appendChild(document.querySelector("table"));
     document.querySelector("table").appendChild(document.querySelector("tbody"));
     document.querySelector("tbody").appendChild(tr)
     tr.appendChild(td1);

     
     let td2 = document.createElement("td")
     td2.appendChild(document.createTextNode(addressValue.value));

     container.appendChild(document.querySelector("table"));
     document.querySelector("table").appendChild(document.querySelector("tbody"));
     document.querySelector("tbody").appendChild(tr)
     tr.appendChild(td2)
    }
 })

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

button.addEventListener("click" , (e) => {
   e.preventDefault()
  

});