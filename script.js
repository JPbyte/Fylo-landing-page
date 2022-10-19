const btn = document.querySelector(".email-input")

const email = document.querySelector('.text-input');

btn.addEventListener('click', (e) =>{
    e.preventDefault()
    let zen = /\S+@\S+\.\S+/;;
    const error = document.querySelector(".error")

    let validade = zen.test(email.value)

    if (!validade === true){
        error.style.opacity = 1
        error.innerText = "Please enter a valid email address"
        error.style.transition = "0.4s"
        email.style.border = "3px red solid"
        error.style.fontWeight = "bold"
    } else{
        error.style.opacity = 1
        error.innerText = "Your email is valid. Thanks"
        error.style.color = "green"
        error.style.fontWeight = "bold"
        email.style.border = "3px green solid"
    }
})