import React from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

class Weather extends React.Component {
    render(){
        return(



            <>

            {
                
                

                <Card style={{ border: 'groove', width: '500px' ,margin:'50px',marginLeft:'150px' ,display : 'inline-block'}}>
                <Card.Header>The Weather</Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      {' '}
                         {this.props.WeatherAssest.date}.{' '}
                    </p>
                    <footer className="blockquote-footer">
                       {this.props.WeatherAssest.description} 
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>




            }




            </>

        )
    }
}


export default Weather