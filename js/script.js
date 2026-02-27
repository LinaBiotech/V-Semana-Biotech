var biotechDate = new Date(2026, 4, 29).getTime();

var x = setInterval(function(){

    var now = new Date().getTime();

    var distance = biotechDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0){
        document.getElementById("countdown-contagem").innerHTML = "Chegou a hora !!!";
        clearInterval(x)
    }
    else if (days === 0 && hours === 0 && min === 0){
        document.getElementById("countdown-contagem").innerHTML =  sec + "s ";
    } 
    else if (days === 0 && hours === 0){
        document.getElementById("countdown-contagem").innerHTML = min + "m " +  sec + "s ";
    }
    else if (days === 0){
        document.getElementById("countdown-contagem").innerHTML = hours + "h " + min + "m " +  sec + "s ";
    }
    else{
        document.getElementById("countdown-contagem").innerHTML =  days + "d " + hours + "h " + min + "m " +  sec + "s ";
    }

},1000)