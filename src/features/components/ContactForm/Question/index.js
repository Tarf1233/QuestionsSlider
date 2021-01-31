import './index.css';
import LabelIcon from '@material-ui/icons/Label';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';

function Card(props) {

  
  

  return (
            <div>
                <div className='QuestionFormat'> 
                    <div >
                        <Badge color="secondary">
                            <LabelIcon className='iconbadge'/>
                        </Badge>
                        
                        <Badge color="secondary">
                            <Typography className='questiontext'>{props.question}</Typography>
                        </Badge>
                    </div>
                </div>
            </div>

  );
}

export default Card;
