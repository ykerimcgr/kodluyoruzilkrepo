let name = prompt("Lütfen isminizi giriniz: ", "Yusuf Kerim Ciğer")

const namePlace = document.querySelector("#myName")
namePlace.innerHTML = name


function showTime() 
{
    const days = ["Pazartesi", "Sali", "Carsamba", "Persembe", "Cuma", "Cumartesi", "Pazar"]
    let currentDate = new Date()
    let currentHour = currentDate.getHours()
    let currentMin = currentDate.getMinutes()
    let currentSec = currentDate.getSeconds()
    let currentDay = currentDate.getDay()

    let time = `${currentHour}:${currentMin}:${currentSec} ${days[currentDay]}`
    
    const clock = document.querySelector("#myClock")
    clock.innerHTML = time

}
setInterval(showTime)