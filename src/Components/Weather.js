import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'



class Weather extends React.Component {

    render() {
        return (
            <>

                {
                    
                    this.props.weather.map(element => {
                        return (


                        <Card style={{ border: 'groove', width: '500px' ,margin:'50px',marginLeft:'150px' ,display : 'inline-block'}}>
  <Card.Header>The Weather</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
           {element.date}.{' '}
      </p>
      <footer className="blockquote-footer">
         {element.description} 
      </footer>
    </blockquote>
  </Card.Body>
</Card>
                        )
                    })
                }


            </>
        )
    }


}

export default Weather;