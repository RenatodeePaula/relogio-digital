const getHours = document.querySelector(".hours")
const getMinuts = document.querySelector(".minutes")
const getSeconds = document.querySelector(".seconds")

function updateTime() {
    const now = new Date()
    const hours = now.getHours().toString().padStart(2, "0")
    const minutes = now.getMinutes().toString().padStart(2, "0")
    const seconds = now.getSeconds().toString().padStart(2, "0")    
          
    getHours.textContent = hours
    getMinuts.textContent = minutes
    getSeconds.textContent = seconds 
}

updateTime()
setInterval(updateTime, 1000)
