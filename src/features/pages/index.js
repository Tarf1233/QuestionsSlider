import './index.css';
import LabelIcon from '@material-ui/icons/Label';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';

import { Email, Item, Span, A, renderEmail } from 'react-html-email'


 

 
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

function dale(email, mailcontent){
    var sendmail = require('sendmail')({silent: true})
    sendmail({
      from: 'test@yourdomain.com',
      to: 'thomazmatos@gmail.com',
      replyTo: 'jason@yourdomain.com',
      subject: 'MailComposer sendmail',
      html: 'Mail of test sendmail '
    }, function (err, reply) {
      console.log(err && err.stack)
      console.dir(reply)
    })
}


function Relatorio(props) {
  return (
            <div>
                {dale('thomazmatos@gmail.com')}
            </div>

  )
}

export default Relatorio;
