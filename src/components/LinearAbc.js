import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import { Button } from 'semantic-ui-react'
import { inject, observer } from "mobx-react";

@inject('store')
@observer class LinearAlphabets extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.generateNextHandler= this.generateNextHandler.bind(this);
        this.generatePreviousHandler= this.generatePreviousHandler.bind(this);
        this.getValidIndex= this.getValidIndex.bind(this);
    }

    render() {
        const originalIndexParam = this.props.match.params.index;
        const alphabetIndexParam = this.getValidIndex(originalIndexParam);
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col sm={2}>
                        </Col>
                        <Col sm={8} style={{fontWeight: "700", height: "100%", fontSize: "100vw", textAlign: "center"}}>
                            {this.props.store.alphabets[alphabetIndexParam]}
                        </Col>
                        <Col sm={2}>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={1}>
                        </Col>
                        <Col style={{textAlign: "center", height: "10vh"}}>
                            <Button disabled={originalIndexParam==="start" || alphabetIndexParam === 0} onClick={this.generatePreviousHandler} style={{fontWeight: "700", fontSize: "6vw", width: "35vw", height: "13vh"}}>PREVIOUS</Button>
                        </Col>
                        <Col style={{textAlign: "center", height: "10vh"}}>
                            <Button disabled={alphabetIndexParam === this.props.store.alphabets.length - 1} onClick={this.generateNextHandler} style={{fontWeight: "700", fontSize: "6vw", width: "35vw", height: "13vh"}}>NEXT</Button>
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
        const indes = this.props.store.indes;
        if (newIndex >= indes.length) {
            return;
        }
        this.props.store.currentIndex = newIndex;
        this.props.history.push(`/linearAlphabets/${newIndex}`);
    }

    generatePreviousHandler(e) {
        e.preventDefault()
        const newIndex = --this.props.store.currentIndex;
        const indes = this.props.store.indes;
        if (newIndex >= indes.length) {
            return;
        }
        this.props.store.currentIndex = newIndex;
        this.props.history.push(`/linearAlphabets/${newIndex}`);
    }

    getValidIndex(index) {
        if (index === "start") {
            this.props.store.resetAlphabetIndecs();
            return 0;
        }
        const parsedIndex = parseInt(index)
        if (Number.isInteger(parsedIndex) && (parsedIndex >= 0 && parsedIndex <= this.props.store.alphabets.length)) {
            return parsedIndex
        }
        return 0
    }
}

export default LinearAlphabets