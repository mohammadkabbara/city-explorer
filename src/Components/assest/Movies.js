
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



class Movies extends React.Component {

    render() {
        return (
            <>

                {
                   
     
                   <Row xs={1} md={3} className="g-4" style={{ width: '1000px' ,margin:'50px',marginLeft:'150px',marginRight:'50px'}}>
                   {Array.from({ length: 2 }).map((_, idx) => (
                     <Col>
                       <Card>
                         <Card.Img variant="top" src={this.props.movieAssest.poster_path}  style={{ border: 'groove', width: '200px' ,marginRight:'50px' ,height:'200px'}}/>
                         <Card.Body>
                           <Card.Title> {this.props.movieAssest.title}</Card.Title>
                           <Card.Text>
                              {this.props.movieAssest.vote_average}
                           </Card.Text>
                           <Card.Text>
                             {this.props.movieAssest.vote_count}
                           </Card.Text>
                           <Card.Text>
                               {this.props.movieAssest.overview} 
                           </Card.Text>
                            <Card.Text>
                                 {this.props.movieAssest.popularity}
                           </Card.Text>
                            <Card.Text>
                                {this.props.movieAssest.release_date}
                           </Card.Text>
                         </Card.Body>
                       </Card>
                     </Col>
                   ))}
                 </Row>
                 

                        
                    
                }


            </>
        )
    }


}

export default Movies;

 


  