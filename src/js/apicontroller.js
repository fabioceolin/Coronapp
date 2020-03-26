import $$ from 'dom7'
import Framework7 from 'framework7/framework7.esm.bundle.js';

var paises;

    $$(document).on('page:init', test)//se n chamar c o () vai retornar a instancia da funcao, 
    //aqui to chamando assim pq o on vai invokar a instnacia da funcao


    function getWorldData(){
    Framework7.request.get('https://api.covid19api.com/summary',null, function (data) {
        var todos = JSON.parse(data)

        var testeDoTeste = localStorage["teste"]

        if(testeDoTeste === "Teste"){
            console.log("DADOS IN MEMORY MLK DO CARALHOOOOO PORRAAA")
        }else{
            localStorage["teste"] = "Teste"
            console.log("N TINHA NADA NA PARADA LA ENTAO COLOCAMOS ESSA PORRA PRA TESTAR VLW E NOIS")
        }


        localStorage["CountryData"] = JSON.stringify(todos)
        let deaths = 0
        let recovereds = 0
        let cases = 0
        todos.Countries.forEach(element => {
            deaths = deaths + element.TotalDeaths
            recovereds = recovereds + element.TotalRecovered
            cases = cases + element.TotalConfirmed
        });
        console.log('casos: '+cases+' mortes: '+deaths+ ' curados: '+recovereds, ' ts: ' + todos.Date)
        return {confirmed:cases, deaths:deaths, recovereds:recovereds, date:todos.Date}
    })
}

function getCountriesList(){
    Framework7.request.get('https://api.covid19api.com/countries', null, function(data){
        var todos = JSON.parse(data)
        var paises = []
        todos.forEach(element=>{
            paises.push({description:element.Country, id:element.Slug})
        })
        console.log({paises:paises})
        return paises
    })
}

function test(){
    getWorldData()
    console.log(localStorage["CountryData"])
}

function getCountrySummary(country){
    if(!(typeof country === 'string')){
        country = 'brazil'
    }
    let baseUrl = 'https://api.covid19api.com/country/'+country+'/status/'
    let confirmados = 0
    let mortos = 0
    let curados = 0
    Framework7.request.get(baseUrl+'confirmed',null, function(data){
        let todososconfirmados = JSON.parse(data)
        confirmados = todososconfirmados[todososconfirmados.length -1].Cases;
    })
    Framework7.request.get(baseUrl+'recovered',null, function(data){
        let todososcurados = JSON.parse(data)
        curados = todososcurados[todososcurados.length - 1].Cases;
    })
    Framework7.request.get(baseUrl+'deaths',null, function(data){
        let todososmortos = JSON.parse(data)
        mortos = todososmortos[todososmortos.length -1].Cases;
        var res = {confirmados:confirmados, mortos:mortos, curados:curados, date:todososmortos[todososmortos.length -1].Date}
        console.log(res)
        return res
    })

}
