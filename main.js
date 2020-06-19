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
const navbar = document.querySelector(".navbar-expand-lg");
const formContent = document.querySelector("#content");
const footerContainer = document.querySelector("#footer-container");
const footerCopy = document.querySelector("#footer-copyright")

// adding dark mode
const checkDarkMode = document.getElementById("check-dark-mode")
checkDarkMode.addEventListener("change", activateDarkMode);
function activateDarkMode(){
    if (checkDarkMode.checked){
        navbar.classList.add("bg-dark", "bg-nav", "btn-dark")

        formContent.classList.add("bg-dark", "bg-nav")
        button.classList.add("bg-dark")
        document.querySelector("thead").classList.add("bg-dark")
        document.querySelector("thead").style.color =" white ";
        document.querySelector("#table-content").classList.add("bg-dark")
        document.querySelector("tbody").style.color = "white"
    
        document.querySelector("body").style.backgroundColor =" #1f2429"
        footerContainer.classList.add("bg-dark");
        footerContainer.style.color = "white";
        footerCopy.style.color = "white";
    }else{
        navbar.classList.remove("bg-dark", "bg-nav", "btn-dark")

        formContent.classList.remove("bg-dark", "bg-nav")
        button.classList.remove("bg-dark")
        document.querySelector("thead").classList.remove("bg-dark")
        document.querySelector("thead").style.color =" black ";
        document.querySelector("#table-content").classList.remove("bg-dark")
        document.querySelector("tbody").style.color = "black"
    
        document.querySelector("body").style.backgroundColor ="white"
        footerContainer.classList.remove("bg-dark");
        footerContainer.style.color = "black";
        footerCopy.style.color = "black";
    }
}

// const PromptName = prompt("enter your name"); 
// const promptValue = document.querySelector("h3");
// promptValue.textContent = `welcome ${PromptName}, start saving your contacts`;

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

     else if(numberValue.value.length <= 10){
      let innerMsg = document.createElement("div");
      innerMsg.textContent = "The Number entered is not valid";
      innerMsg.classList.add("alert-danger", "text-center")
      msgDiv.appendChild(innerMsg);
      setTimeout(() => innerMsg.remove() , 3000)

      input[2].classList.add("border-danger")
      setTimeout(() => input[1].classList.remove("border-danger"), 3000)
     }
    else if(numberValue.value >= 15){
        let innerMsg = document.createElement("div");
        innerMsg.textContent = "The Number entered is not valid";
        innerMsg.classList.add("alert-danger", "text-center")
        msgDiv.appendChild(innerMsg);
        setTimeout(() => innerMsg.remove() , 3000)
  
        input[2].classList.add("border-danger")
        setTimeout(() => input[1].classList.remove("border-danger"), 3000)
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

         let innerMsg = document.createElement("div");
         innerMsg.textContent = "Contact Saved Successfully";
         innerMsg.classList.add("alert-success", "text-center")
         msgDiv.appendChild(innerMsg);
         setTimeout(() => innerMsg.remove() , 3000)

         input[0].classList.add("border-success")
         input[1].classList.add("border-success")
         input[2].classList.add("border-success") 

         setTimeout(() => input[0].classList.remove("border-success"), 3000)
         setTimeout(() => input[1].classList.remove("border-success"), 3000)
         setTimeout(() => input[2].classList.remove("border-success"), 3000)

      //adding the delete button
     let deleteButton = document.createElement("button");
     deleteButton.textContent = "Delete Contact";
     deleteButton.style.marginTop= "5px";
     deleteButton.classList.add("btn", "btn-danger");
     tr.appendChild(deleteButton);
    }
  
 });

 // adding dark mode



