import React from 'react'
import './App.css';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import Weather from './Components/Weather'
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displayName : '',
      lon : '',
      lat : '',
      showMap: false,
      errorMsg : 'bad response',
      displayErr : false,
      
      weather: [],
     
    }
  }

  

  getLocationData = async(event) => {
    event.preventDefault();
    console.log(process.env.REACT_APP_SERVER_URL);
    let cityName = event.target.city.value;
    console.log(cityName);

    let URL= `https://us1.locationiq.com/v1/search.php?key=pk.b4047dd2b66352b18ad93e8d78889b18&q=${cityName}&format=json`
    

    try {
      let locResult = await axios.get(URL); 
      
     
      this.setState({
        displayName : locResult.data[0].display_name,
        lon: locResult.data[0].lon,
        lat: locResult.data[0].lat,
        
        showMap : true,
        
      })
      // this.displayWeather(locResult.data[0].lat, locResult.data[0].lon)

      let wheaterURL=`${process.env.REACT_APP_SERVER_URL}/weather?searchQuery=${cityName}`
      let wheatherData=await axios.get(wheaterURL);
      this.setState({
        wheatherInfo :wheatherData.data
      })
      console.log(wheatherData.data);
    }
    catch {
      this.setState({
        showMap : false,
        displayErr : true
      })
    }

  }




  render() {



    return (
      <>

        <h1>
          City Exploer
        </h1>


        <Navbar bg="light" expand="lg"  >
          <Navbar.Brand 
             style={{ color: '#307f61' , fontSize: '35px'}}
          >Search to your favorite city</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >


            </Nav>
            <Form className="d-flex" onSubmit={this.getLocationData} >
              <FormControl
                type="text"
                placeholder="Explore"
                className="mr-2"
                aria-label="Search"
                name='city'
              />
              <Button  type='submit' variant="outline-success">Search</Button>
            </Form>

          </Navbar.Collapse>
        </Navbar >





        
        { 
        this.state.showMap &&
        <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.b4047dd2b66352b18ad93e8d78889b18&center=${this.state.lat},${this.state.lon}`} alt='map' />
      }
      <p>
          {this.state.displayName}
          
        </p>
        <p>
          {this.state.lon}
        </p>
        <p>
          {this.state.lat}
        </p>
        {/* <Weather
                  weather={this.state.weather}
                />
        */}
        {/* <Weather weather={this.state.weather} ></Weather> */}

       
        

       { 
       this.state.displayErr && 
       this.state.errorMsg 
       }

        
      </>





    )
  }
}



export default App;