import React from 'react'

import { Email, Item, Span, A, renderEmail } from 'react-html-email'
import axios from 'axios'

import {connect} from 'react-redux'

 





class Relatorio extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
      }

      emailHTML = renderEmail(
        <Email title="Perfil Investidor!">
          <Item align="center">
            <Span fontSize={20}>
              {this.props.questions.asks.map((ask, key)=>{
               let response = this.props.questions.questions[key]
               if (typeof response === 'string') {
                  return <div>{ask} {response}</div>
                } else {
                  let options = []
                  let resposta

                  console.log('response:' + response)
                  Object.keys(response).forEach(function(item){

                    if(response[item]==true)
                      resposta = 'sim'
                    else
                      resposta= 'nao' 
                    options.push("  "+item + " = " + resposta + "  ")
                   
                   });


                


                  // const options = Object.keys(response).filter(item => item[item] === true)
                  console.log("Todos booleanos", options);
                  return <div>{ask} {   options.map((option, key) =>{
                    return option
                 })} </div>
                }
                
             })}
              <A href="https://vencedoramente.com.br">Visite nosso site</A>.
            </Span>
          </Item>
        </Email>
      )

      sendmail(){
        axios({
          method: "POST", 
          url:"http://localhost:3001/sendmail", 
          data: {
        name: 'dale',
        email: 'thomazmatos@gmail.com',
        message: this.emailHTML
          }
      }).then((response)=>{
          if (response.data.msg === 'success'){
              alert("Email sent, awesome!"); 
          }else if(response.data.msg === 'fail'){
              alert("Oops, something went wrong. Try again")
          }
      })
      }

      componentDidMount(){
        this.sendmail()
      }

      render(){
  return (
            <div>
              {this.emailHTML}
            </div>

  )
}
}
const mapStateToProps = state => ({ questions: state.questions })



  
  export default connect(mapStateToProps,null) (Relatorio);
