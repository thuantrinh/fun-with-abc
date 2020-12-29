import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import { Button } from 'semantic-ui-react'

class RandomAlphabets extends React.Component {
    alphabets = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    state = {
        alphabets: this.alphabets,
        indes: [...Array(this.alphabets.length).keys()],
        currentIndex: 0
    }

    constructor(props) {
        super(props);
         this.generateNextHandler= this.generateNextHandler.bind(this);
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col sm={2}>
                        </Col>
                        <Col sm={8} style={{height: "80vh", fontSize: "100vw", textAlign: "center"}}>
                            {this.state.alphabets[this.state.currentIndex]}
                        </Col>
                        <Col sm={2}>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                        </Col>
                        <Col sm={8} style={{textAlign: "center", height: "10vh"}}>
                            <Button onClick={this.generateNextHandler} style={{fontSize: "8vw", minWidth: "20vw"}}>Next</Button>
                        </Col>
                        <Col sm={2}>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>)
    }

    generateNextHandler(e) {
        e.preventDefault()
        if (this.state.indes.length <= 0) {
            return;
        }
        const randomFromIndecs = this.getRandomInt(0, this.state.indes.length - 1);
        const newIndex = this.state.indes[randomFromIndecs]
        this.state.indes.splice(randomFromIndecs, 1)
        this.setState({
            currentIndex: newIndex
        })
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export default RandomAlphabets