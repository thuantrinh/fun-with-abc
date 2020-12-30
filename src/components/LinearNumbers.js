import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import { Button } from 'semantic-ui-react'
import { inject, observer } from "mobx-react";

@inject('store')
@observer class LinearNumbers extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.generateNextHandler= this.generateNextHandler.bind(this);
        this.generatePreviousHandler= this.generatePreviousHandler.bind(this);
        this.getValidIndex= this.getValidIndex.bind(this);
    }

    render() {
        const indexParam = this.getValidIndex(this.props.match.params.index);
        return (
            <React.Fragment>
                <Container fluid>
                    <Row>
                        <Col sm={1}>
                        </Col>
                        <Col sm={10} style={{fontWeight: "700", height: "100%", fontSize: "60vw", textAlign: "center"}}>
                            {indexParam}
                        </Col>
                        <Col sm={1}>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        </Col>
                        <Col style={{height: "10vh"}}>
                            <Button onClick={this.generatePreviousHandler} style={{fontWeight: "600", fontSize: "6vw", width: "37vw", height: "13vh"}}>PREVIOUS</Button>
                        </Col>
                        <Col style={{height: "10vh"}}>
                            <Button onClick={this.generateNextHandler} style={{fontWeight: "600", fontSize: "6vw", width: "37vw", height: "13vh"}}>NEXT</Button>
                        </Col>
                        <Col >
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>)
    }

    generateNextHandler(e) {
        e.preventDefault()
        const newIndex = ++this.props.store.currentIntegerIndex;
        this.props.store.currentIntegerIndex = newIndex;
        this.props.history.push(`/linearNumbers/${newIndex}`);
    }

    generatePreviousHandler(e) {
        e.preventDefault()
        if (this.props.store.currentIntegerIndex === 0) {
            return;
        }
        const newIndex = --this.props.store.currentIntegerIndex;
        this.props.store.currentIntegerIndex = newIndex;
        this.props.history.push(`/linearNumbers/${newIndex}`);
    }

    getValidIndex(index) {
        if (index === "start") {
            this.props.store.resetIntegerIndecs();
            return 0;
        }
        const parsedIndex = parseInt(index)
        if (Number.isInteger(parsedIndex)) {
            this.props.store.currentIntegerIndex = parsedIndex;
            return parsedIndex
        }
        return 0
    }
}

export default LinearNumbers