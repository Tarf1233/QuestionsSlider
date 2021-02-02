import React from 'react'

import { Email, Item, Span, A, renderEmail } from 'react-html-email'
import axios from 'axios'

import {connect} from 'react-redux'

 
const emailHTML = renderEmail(
  <Email title="Hello World!">
    <Item align="center">
      <Span fontSize={20}>
        This is an example email made with:
        <A href="https://github.com/chromakode/react-html-email">react-html-email</A>.
      </Span>
    </Item>
  </Email>
)

function sendmail(){
  axios({
    method: "POST", 
    url:"http://localhost:3001/sendmail", 
    data: {
  name: 'dale',
  email: 'thomazmatos@gmail.com',
  message: emailHTML
    }
}).then((response)=>{
    if (response.data.msg === 'success'){
        alert("Email sent, awesome!"); 
    }else if(response.data.msg === 'fail'){
        alert("Oops, something went wrong. Try again")
    }
})
}


class Relatorio extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
      }


      componentDidMount(){
        //sendmail()
        console.log(this.props.questions)
      }

      render(){
  return (
            <div>
            </div>

  )
}
}
const mapStateToProps = state => ({ questions: state.questions })



  
  export default connect(mapStateToProps,null) (Relatorio);
