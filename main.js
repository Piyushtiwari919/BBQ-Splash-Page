const registerButton = document.querySelector(".btn")
const registerDiv = document.querySelector(".register-div")
registerButton.addEventListener("click",()=>{
    registerDiv.style.display = "block";
    setTimeout(() => {
        registerDiv.style.display = "none";
    }, 2100);
    console.log("abc");
    const inputElements = document.querySelectorAll("input");
    setTimeout(() => {
        inputElements.forEach((input)=>{
            input.value = "";
        })
    }, 100);
})