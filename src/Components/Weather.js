import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card'

import WeatherAssestant from './assest/Weather';



class Weather extends React.Component {

    render() {
        return (
            <>

                {
                    
                    this.props.weather.map(element => {
                        return (
                          <>

                          <WeatherAssestant WeatherAssest={element}/>
                          </>



                        )
                    })
                }


            </>
        )
    }


}

export default Weather;