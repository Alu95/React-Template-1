import React from 'react';
import Card from 'react-bootstrap/Card'

class UserCard extends React.Component{
    render() {

        const isLoading = <Card.Body>Loading.</Card.Body>
        const loaded = <Card.Body>Loading.</Card.Body>
        
        return (
            <Card>
                <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
        );
    }
}