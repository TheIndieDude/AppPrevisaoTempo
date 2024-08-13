const key = 'e0283766cee7e7e70be7e75409ae8042'
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

function ColetarDado() {
    const cidade = document.querySelector(".Input-Cidade").value
    dado(cidade)
}

async function dado(cidade) {
    let dado = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Resposta => Resposta.json()) 
    console.log(dado)
    TrocarInfo(dado)
}

function TrocarInfo(dado) {
    document.querySelector(".Titulo").innerHTML = dado.name
    document.querySelector(".Temp").innerHTML = Math.floor (dado.main.temp) + " °C" 
    document.querySelector(".Img-Previsao").src = `https://openweathermap.org/img/wn/${dado.weather[0].icon}.png`
    document.querySelector(".Texto-Previsao").innerHTML = dado.weather[0].description
    document.querySelector(".Umidade").innerHTML = "A umidade relativa do ar é de " + dado.main.humidity + "%"
    document.querySelector(".Vel-Vento").innerHTML = "A velocidade dos ventos é de " + dado.wind.speed + "Km/h"
}