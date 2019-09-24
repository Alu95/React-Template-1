import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

class Users extends React.Component {

    render() {
        return ( 
            <Container>
                <h1>Users Page</h1>
                <Row>
                <Col xs={3}>
                    <Card>
                        <Card.Body>This is some text within a card body.</Card.Body>
                    </Card>
                </Col>
                <Col xs={6}>
                    <Card>
                        <Card.Body>This is some text within a card body.</Card.Body>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card>
                        <Card.Body>This is some text within a card body.</Card.Body>
                    </Card>
                </Col>
                </Row>
            </Container>
            
        )
    }
}
export default Users;