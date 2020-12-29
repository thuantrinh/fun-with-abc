import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import { Button } from 'semantic-ui-react'
import { inject, observer } from "mobx-react";

@inject('store')
@observer class LinearAlphabets extends React.Component {
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
                            <Button onClick={this.generateNextHandler} style={{fontSize: "10vw", width: "100%", height: "13vh"}}>Next</Button>
                        </Col>
                        <Col sm={2}>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>)
    }

    generateNextHandler(e) {
        e.preventDefault()
        const newIndex = this.props.store.currentIndex + 1;
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
            return index
        }
        return 0
    }
}

export default LinearAlphabets