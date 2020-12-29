import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import { Button } from 'semantic-ui-react'
import { inject, observer } from "mobx-react";

@inject('store')
@observer class RandomAlphabets extends React.Component {
    constructor(props, context) {
        super(props, context);
         this.generateNextHandler= this.generateNextHandler.bind(this);
         this.getValidIndex= this.getValidIndex.bind(this);
    }

    render() {
        const alphabetIndexParam = this.getValidIndex(this.props.match.params.alphabetIndex);
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col sm={2}>
                        </Col>
                        <Col sm={8} style={{height: "80vh", fontSize: "100vw", textAlign: "center"}}>
                            {this.props.store.alphabets[alphabetIndexParam]}
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
        const indes = this.props.store.indes;
        if (indes.length <= 0) {
            return;
        }
        const randomFromAvailableIndecs = this.getRandomInt(0, indes.length - 1 );
        const newIndex = indes[randomFromAvailableIndecs];
        this.props.store.indes.splice(randomFromAvailableIndecs, 1);
        this.props.store.currentIndex = newIndex;
        this.props.history.push(`/randomAlphabets/${newIndex}`);
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getValidIndex(index) {
        const parsedIndex = parseInt(index)
        if (Number.isInteger(parsedIndex) && (parsedIndex >= 0 && parsedIndex <= this.props.store.alphabets.length)) {
            return index
        }
        return 0
    }
}

export default RandomAlphabets