import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import { Button } from 'semantic-ui-react'
import { inject, observer } from "mobx-react";

@inject('store')
@observer class LinearNumbers extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.generateNextHandler= this.generateNextHandler.bind(this);
        this.getValidIndex= this.getValidIndex.bind(this);
    }

    render() {
        const indexParam = this.getValidIndex(this.props.match.params.index);
        console.log(this.props.store);
        console.log(indexParam);
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col sm={2}>
                        </Col>
                        <Col sm={8} style={{fontWeight: "700", height: "100%", fontSize: "60vw", textAlign: "center"}}>
                            {this.props.store.integers[indexParam]}
                        </Col>
                        <Col sm={2}>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                        </Col>
                        <Col sm={8} style={{textAlign: "center", height: "10vh"}}>
                            <Button onClick={this.generateNextHandler} style={{fontWeight: "700", fontSize: "10vw", width: "100%", height: "13vh"}}>NEXT</Button>
                        </Col>
                        <Col sm={2}>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>)
    }

    generateNextHandler(e) {
        e.preventDefault()
        const newIndex = this.props.store.currentIntegerIndex + 1;
        const indes = this.props.store.numberIndecs;
        console.log(newIndex);
        if (newIndex >= indes.length) {
            return;
        }
        this.props.store.currentIntegerIndex = newIndex;
        this.props.history.push(`/linearNumbers/${newIndex}`);
    }

    getValidIndex(index) {
        if (index === "start") {
            this.props.store.resetIntegerIndecs();
            return 0;
        }
        const parsedIndex = parseInt(index)
        console.log(`index: ${parsedIndex}`);
        console.log(`parsed index: ${parsedIndex}`);
        if (Number.isInteger(parsedIndex) && (parsedIndex >= 0 && parsedIndex <= this.props.store.integers.length)) {
            return index
        }
        console.log('returning 0');
        return 0
    }
}

export default LinearNumbers