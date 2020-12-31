import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import { Button } from 'semantic-ui-react'
import { inject, observer } from "mobx-react";

@inject('store')
@observer class RandomAlphabets extends React.Component {
    constructor(props, context) {
        super(props, context);
         this.generateNextHandler= this.generateNextHandler.bind(this);
         this.generatePreviousHandler= this.generatePreviousHandler.bind(this);
         this.getValidIndex= this.getValidIndex.bind(this);
    }

    render() {
        const alphabetIndexParam = this.getValidIndex(this.props.match.params.index);
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col sm={1}>
                        </Col>
                        <Col sm={8} style={{fontWeight: "700", height: "100%", fontSize: "100vw", textAlign: "center", verticalAlign: "middle"}}>
                            {this.props.store.shuffledAlphabets[alphabetIndexParam]}
                        </Col>
                        <Col sm={1}>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={1}>
                        </Col>
                        <Col style={{textAlign: "center", height: "10vh"}}>
                            <Button disabled={alphabetIndexParam==="start" || alphabetIndexParam === 0} onClick={this.generatePreviousHandler} style={{fontWeight: "700", fontSize: "6vw", width: "35vw", height: "13vh"}}>PREVIOUS</Button>
                        </Col>
                        <Col style={{textAlign: "center", height: "10vh"}}>
                            <Button disabled={alphabetIndexParam === this.props.store.shuffledAlphabets.length - 1} onClick={this.generateNextHandler} style={{fontWeight: "700", fontSize: "6vw", width: "35vw", height: "13vh"}}>NEXT</Button>
                        </Col>
                        <Col sm={1}>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>)
    }

    generateNextHandler(e) {
        e.preventDefault()
        const newIndex = ++this.props.store.currentIndex;
        const alphabets = this.props.store.shuffledAlphabets;
        if (newIndex >= alphabets.length) {
            return;
        }
        this.props.store.currentIndex = newIndex;
        this.props.history.push(`/randomAlphabets/${newIndex}`);
    }

    generatePreviousHandler(e) {
        e.preventDefault()
        const newIndex = --this.props.store.currentIndex;
        const alphabets = this.props.store.shuffledAlphabets;
        if (newIndex >= alphabets.length) {
            return;
        }
        this.props.store.currentIndex = newIndex;
        this.props.history.push(`/randomAlphabets/${newIndex}`);
    }

    getValidIndex(index) {
        if (index === "start") {
            this.props.store.resetAlphabetIndecs(false);
            return 0;
        }
        const parsedIndex = parseInt(index)
        if (Number.isInteger(parsedIndex) && (parsedIndex >= 0 && parsedIndex <= this.props.store.shuffledAlphabets.length)) {
            return parsedIndex
        }
        return 0
    }
}

export default RandomAlphabets