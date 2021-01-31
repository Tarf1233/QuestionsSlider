const Opinions = require('../Data/index')
const moment = require('moment')
const lodash =  require('lodash')
const Filtros = require('../Filtros/Filtros')
moment.suppressDeprecationWarnings = true;




async function FormatToChart(OpinionsByChronology, interval_init, interval_fim, category){



  const FiltrosObj = new Filtros()

  let inicio
  if(interval_init === interval_fim){

    inicio = moment(interval_init).subtract(1, 'week')
  }else{
    inicio = moment(interval_init)
  }


 let fim =  moment(interval_fim)

  const ChartOpinions = await FiltrosObj.FormatToChartFree(OpinionsByChronology, inicio, fim)


  return ChartOpinions


}


async function FormatToChartComparacao(OpinionsByChronology,opinions_by_cronology_concorrente,interval_init, interval_fim, category){

  const FiltrosObj = new Filtros()

  let inicio
  if(interval_init === interval_fim){

    inicio = moment(interval_init).subtract(20, 'week')
  }else{
    inicio = moment(interval_init)
  }


 let fim =  moment(interval_fim)

  const ChartOpinions = await FiltrosObj.FormatToChartFree_Comparacao(OpinionsByChronology,opinions_by_cronology_concorrente,inicio, fim, category)


  return ChartOpinions


}

async function GetOpinionsByChronology(estabelecimento_id, interval_init, interval_fim, category){
  const Opinions_Total = new Opinions()
  const Opinions_Total2 = Opinions_Total.GetOpinions(estabelecimento_id)




  const FiltrosObj = new Filtros()

  let inicio
  if(interval_init === interval_fim){

    inicio = moment(interval_init).subtract(1, 'week')
  }else{
    inicio = moment(interval_init)
  }


 let fim =  moment(interval_fim)
 


 let OpinionsByChronology = lodash.filter(Opinions_Total2,     
   function(each){ 
      return moment(each.data)
        .isBetween(inicio, fim) ;
   });

   OpinionsByChronology =   await FiltrosObj.FilterByCategory(OpinionsByChronology, category)
   //OpinionsByChronology == undefined ? 'asd': OpinionsByChronology
  

   return OpinionsByChronology
}


module.exports = {


async GetOpinionsByChronology (request, response) {


  try{

    const {estabelecimento_id} = request.body
    const {interval_init} = request.body
    const {interval_fim} = request.body
    const {category} = request.body


    console.log(request.body)


    

    
  const FiltrosObj = new Filtros()


  
    



    const OpinionsByChronology = await GetOpinionsByChronology(estabelecimento_id, interval_init, interval_fim, category)

    const ChartOpinions = await FormatToChart(OpinionsByChronology, interval_init, interval_fim)

    const PrincipaisPerfis =  await FiltrosObj.author_filter_count(OpinionsByChronology)

    const PrincipaisPlataformas = await FiltrosObj.plataforma_filter_count(OpinionsByChronology)

    const count_opinions = await FiltrosObj.CountOpinion(OpinionsByChronology)
    const negative_opinions = await FiltrosObj.CountNegativeOpinion(OpinionsByChronology)
    const positive_opinions = await FiltrosObj.CountPositiveOpinion(OpinionsByChronology)
    const percent_negative = await FiltrosObj.CountPositiveNegativePercent(OpinionsByChronology)[1]
    const percent_positive = await FiltrosObj.CountPositiveNegativePercent(OpinionsByChronology)[0]



    const count_positive_category = await FiltrosObj.CountPositiveOpinionForEachCategory(OpinionsByChronology)
    const count_negative_category = await FiltrosObj.CountNegativeOpinionForEachCategory(OpinionsByChronology)

    const PercentForEachPlataforma = await FiltrosObj.CountPercentForEachPlataforma(OpinionsByChronology)




    const CountSitesEspecializados = await FiltrosObj.CountSitesEspecializados(OpinionsByChronology)
    const CountRedesSociais = await FiltrosObj.CountRedesSociais(OpinionsByChronology)

    const CountWeb = await FiltrosObj.CountWeb(OpinionsByChronology)






    return response.json({
      "OpinionsByChronology": OpinionsByChronology,
      "ChartOpinions": ChartOpinions,
      "PrincipaisPerfis": PrincipaisPerfis,
      "PrincipaisPlataformas": PrincipaisPlataformas,
      "QuantidadeOpinions": count_opinions,
      "NegativeOpinions": negative_opinions,
      "PositiveOpinions": positive_opinions, 
      "PercentOpinionsPositive": percent_positive,
      "PercentOpinionsNegative": percent_negative,
      "count_positive_category": count_positive_category,
      "count_negative_category": count_negative_category,
      "PercentForEachPlataforma": PercentForEachPlataforma,
      "CountSitesEspecializados": CountSitesEspecializados,
      "CountRedesSociais": CountRedesSociais,
      "CountWeb": CountWeb

    })
} catch (err){
  console.log('erro servidor request')
  console.log(err)
  return response.status(400).json({error: 'wrong'})
}
},



async GetOpinionsByChronologyForCompare(request, response){

  try{
        const {estabelecimento_id} = request.body
        const {concorrente_id} = request.body
        const {interval_init} = request.body
        const {interval_fim} = request.body
        const {category} = request.body

        console.log(request.body)

        const FiltrosObj = new Filtros()



        const result_estabelecimento = await GetOpinionsByChronology(estabelecimento_id, interval_init, interval_fim, category)
        const result_concorrente = await GetOpinionsByChronology(concorrente_id, interval_init, interval_fim, category)

        const ChartOpinions = await FormatToChartComparacao(result_estabelecimento, result_concorrente,interval_init, interval_fim)


        
        const PrincipaisPerfis =  await FiltrosObj.author_filter_count(result_estabelecimento)
        const PrincipaisPlataformas = await FiltrosObj.plataforma_filter_count(result_estabelecimento)
        const count_opinions = await FiltrosObj.CountOpinion(result_estabelecimento)
        const negative_opinions = await FiltrosObj.CountNegativeOpinion(result_estabelecimento)
        const positive_opinions = await FiltrosObj.CountPositiveOpinion(result_estabelecimento)
        const percent_negative = await FiltrosObj.CountPositiveNegativePercent(result_estabelecimento)[1]
        const percent_positive = await FiltrosObj.CountPositiveNegativePercent(result_estabelecimento)[0]

        const PrincipaisPerfis2 =  await FiltrosObj.author_filter_count(result_concorrente)
        const PrincipaisPlataformas2 = await FiltrosObj.plataforma_filter_count(result_concorrente)
        const count_opinions2 = await FiltrosObj.CountOpinion(result_concorrente)
        const negative_opinions2 = await FiltrosObj.CountNegativeOpinion(result_concorrente)
        const positive_opinions2 = await FiltrosObj.CountPositiveOpinion(result_concorrente)
        const percent_negative2 = await FiltrosObj.CountPositiveNegativePercent(result_concorrente)[1]
        const percent_positive2 = await FiltrosObj.CountPositiveNegativePercent(result_concorrente)[0]

        const PercentForEachPlataforma = await FiltrosObj.CountPercentForEachPlataforma(result_estabelecimento)
        const PercentForEachPlataforma2 = await FiltrosObj.CountPercentForEachPlataforma(result_concorrente)


        
    const CountSitesEspecializados = await FiltrosObj.CountSitesEspecializados(result_estabelecimento)
    const CountRedesSociais = await FiltrosObj.CountRedesSociais(result_estabelecimento)
    const CountWeb = await FiltrosObj.CountWeb(result_estabelecimento)

    const CountSitesEspecializados2 = await FiltrosObj.CountSitesEspecializados(result_concorrente)
    const CountRedesSociais2 = await FiltrosObj.CountRedesSociais(result_concorrente)
    const CountWeb2 = await FiltrosObj.CountWeb(result_concorrente)


        return response.json({
          'estabelecimento': {
            "PrincipaisPerfis": PrincipaisPerfis,
            "PrincipaisPlataformas": PrincipaisPlataformas,
            "QuantidadeOpinions": count_opinions,
            "NegativeOpinions": negative_opinions,
            "PositiveOpinions": positive_opinions, 
            "PercentOpinionsPositive": percent_positive,
            "PercentOpinionsNegative": percent_negative,
            "PercentForEachPlataforma": PercentForEachPlataforma,
            "CountSitesEspecializados": CountSitesEspecializados,
            "CountRedesSociais": CountRedesSociais,
            "CountWeb": CountWeb
          },
          'concorrente': {
          "PrincipaisPerfis": PrincipaisPerfis2,
          "PrincipaisPlataformas": PrincipaisPlataformas2,
          "QuantidadeOpinions": count_opinions2,
          "NegativeOpinions": negative_opinions2,
          "PositiveOpinions": positive_opinions2, 
          "PercentOpinionsPositive": percent_positive2,
          "PercentOpinionsNegative": percent_negative2,
          "PercentForEachPlataforma": PercentForEachPlataforma2,
          "CountSitesEspecializados": CountSitesEspecializados2,
          "CountRedesSociais": CountRedesSociais2,
          "CountWeb": CountWeb2
        },
          "ChartOpinions": ChartOpinions
        })
      
  } catch (err){
      console.log('erro servidor request')
      console.log(err)
      return response.status(400).json({error: 'wrong'})
  }
}


}