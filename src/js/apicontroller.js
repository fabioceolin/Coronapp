import $$ from 'dom7'
import Framework7 from 'framework7/framework7.esm.bundle.js';
    $$(document).on('page:init', getCountriesList)

function getWorldData(){
    Framework7.request.get('https://api.covid19api.com/summary',null, function (data) {
        var todos = JSON.parse(data)
        let deaths = 0
        let recovereds = 0
        let cases = 0
        todos.Countries.forEach(element => {
            deaths = deaths + element.TotalDeaths
            recovereds = recovereds + element.TotalRecovered
            cases = cases + element.TotalConfirmed
        });
        console.log('casos: '+cases+' mortes: '+deaths+ ' curados: '+recovereds)
    })
}

function getCountriesList(){
    Framework7.request.get('https://api.covid19api.com/countries', null, function(data){
        var todos = JSON.parse(data)
        var paises = []
        todos.forEach(element=>{
            paises.push({description:element.Country, id:element.Slug})
        })
        console.log(paises)
    })
}
    