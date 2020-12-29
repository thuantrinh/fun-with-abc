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
        console.log(this.props.store);
        const alphabetIndexParam = this.getValidIndex(this.props.match.params.index);
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col sm={1}>
                        </Col>
                        <Col sm={8} style={{fontWeight: "700", height: "80vh", fontSize: "100vw", textAlign: "center", verticalAlign: "middle"}}>
                            {this.props.store.alphabets[alphabetIndexParam]}
                        </Col>
                        <Col sm={1}>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                        </Col>
                        <Col sm={8} style={{fontWeight: "700", textAlign: "center", height: "10vh"}}>
                            <Button onClick={this.generateNextHandler} style={{fontSize: "10vw", width: "100%", height: "13vh", paddingBottom: "5h"}}>NEXT</Button>
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
        console.log(indes);
        console.log(this.props.store.indes);
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
        if (index === "start") {
            this.props.store.resetAlphabetIndecs();
            return 0;
        }
        const parsedIndex = parseInt(index)
        if (Number.isInteger(parsedIndex) && (parsedIndex >= 0 && parsedIndex <= this.props.store.alphabets.length)) {
            return index
        }
        return 0
    }
}

export default RandomAlphabets