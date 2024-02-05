function siva()
{

    day = new Date().getDate()
    month = new Date().getMonth()
    year = new Date().getFullYear()

    if(month<10)
    {
        month=month+1
    }

    day =  day < 10 ? "0" + day:day
    month =  month<10?"0"+month:month

    document.getElementById("day").innerHTML = day
    document.getElementById("month").innerHTML = month
    document.getElementById("year").innerHTML=year

}

siva()

function kumar()
{

    hour =  new Date().getHours()
    min  = new Date(). getMinutes()
    sec = new Date().getSeconds()

    if(hour>12)
    {
        hour = hour-12
        document.getElementById("session").innerHTML="pm"
    }

    hour = hour<10?"0"+hour:hour
    min = min<10?"0"+min:min
    sec = sec<10?"0"+sec:sec

    document.getElementById("hour").innerHTML = hour
    document.getElementById("min").innerHTML = min
    document.getElementById("sec").innerHTML = sec

}
setInterval(kumar,1000)
