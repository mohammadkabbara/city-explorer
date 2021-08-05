import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Movie from './assest/Movies'


class Movies extends React.Component {

    render() {
        return (
            <>

                {
                   
                    this.props.movies.map(element => {
                        return (
                          
                              
    
                          <Movie movieAssest= {element} />
                    


                        )
                    })
                }


            </>
        )
    }


}

export default Movies