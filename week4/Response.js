let error_message = document.querySelectorAll(".error");
let form =  document.querySelector("form");
let summit = document.querySelector(".sumit");

let note = document.querySelector(".short-note");

summit.addEventListener("click", show_error);


function show_error(){

  form.addEventListener("click", function(e){
    e.preventDefault()
  })


    for (let i = 0; i < error_message.length; i++) {
       const check = error_message[i]
       let input = document.querySelector("input").value;
        if(input.length == 0 || input.length < 5){
          check.style.display = "grid"

        }

       else{
       alert(input.length)
       }

    }

}
