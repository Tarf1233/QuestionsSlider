const opinions  = require('./principal.json')
const opinions_concorrente  =require('./concorrente.json')
const opinions_concorrente2= require('./concorrentes2.json')
const opinions_concorrente3 =require('./concorrentes3.json')
const opinions_concorrente4 =require('./concorrentes4.json')
const opinions_concorrente5 =require('./concorrentes5.json')
const opinions_concorrente6 =require ('./concorrentes6.json')

class DataOpinions{


GetOpinions(concorrente_id){
    switch(concorrente_id){
        case'0':
            return opinions
        case '123':
            return opinions_concorrente
        break
        case '1234':
            return opinions_concorrente2
        break
        case '12345':
            return opinions_concorrente3
        break
        case '12356':
            return opinions_concorrente4
        break
        case '1234567':
            return opinions_concorrente5
        break
        case '12345678':
            return opinions_concorrente6
        break
        default:
            return opinions

    }
    
}

}

module.exports =  DataOpinions