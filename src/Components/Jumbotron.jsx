
import {Form, Button, Container, InputGroup} from 'react-bootstrap'

function Jumbotron() {
    return (
        
        <div >
        <div className='backgroundImage mt-5'>

        <Container className='Content'>
            
        <h1>Explore</h1>
        <h1 style={{
             fontWeight: '300',
             marginTop: '-12px',
             fontFamily: 'Product Sans Thin'
        }}>your amazing city together</h1>
        </Container>

        <Container className='OtherContent d-flex flex-column'>
        <Form.Label style={{
            color: '#FFF',
            fontFamily: 'Avenir'
        }}>Find great place to holiday</Form.Label>
       <InputGroup style={{
        marginLeft: 'auto',
        marginRight: 'auto'
       }}>
            <Form.Control
              type='search'
              size='lg'
              style={{
                padding: '0',
                width: '1182px',
              }}
            />
           <Button className='searchButton'>Search</Button>
           
       </InputGroup>
        </Container>
            
        
        </div>
        

        </div>
       
    )
}

export default Jumbotron;