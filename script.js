const botao = document.querySelector(".botao-coverter")
const euroedolar = document.querySelector(".euro-dolar")

function convertvalores() {
    const valoresdeconversao = document.querySelector(".valores-converter").value
    const real = document.querySelector(".real")
    const dolareuro = document.querySelector(".currençy-value")

    const dolaratual = 5.75
    const eurodia = 6.1
    const francosuiço = 6.55
    const dolaraustraliano = 3.76

    real.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(valoresdeconversao)


    if (euroedolar.value == "franco-suiço")
        dolareuro.innerHTML = new Intl.NumberFormat("de-CH", {
            style: "currency",
            currency: "CHF"
        }).format(valoresdeconversao / francosuiço)

    if (euroedolar.value == "dolar-australiano")
        dolareuro.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(valoresdeconversao / dolaraustraliano)

    if (euroedolar.value == "euro")
        dolareuro.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valoresdeconversao / eurodia)

    if (euroedolar.value == "dolar")
        dolareuro.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valoresdeconversao / dolaratual)
}
function mudoueurodolar() {
    const nomedolareuro = document.getElementById("dolar/euro")
    const logodamoeda = document.querySelector(".img-eua")

    if (euroedolar.value == "dolar") {
        nomedolareuro.innerHTML = "Dolar Americano"
        logodamoeda.src = "./img/EUA1.png"
    }
    if (euroedolar.value == "dolar-australiano"){
        nomedolareuro.innerHTML = "Franco Suiço"
        logodamoeda.src="./img/dolaraustraliano.png"

    }
    if (euroedolar.value == "franco-suiço") {
        nomedolareuro.innerHTML = "Franco-suiço"
        logodamoeda.src = "./img/franco-suiço.png"
    }


    if (euroedolar.value == "euro") {
        nomedolareuro.innerHTML = "Euro"
        logodamoeda.src = "./img/logo-euro.png"
    }
    convertvalores()
}


euroedolar.addEventListener("change", mudoueurodolar)
botao.addEventListener("click", convertvalores)
