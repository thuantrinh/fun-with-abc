import React from "react"
import { Container, Row, Col } from 'react-grid-system';
import {Button} from "semantic-ui-react";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.randomAlphabetsHandler = this.randomAlphabetsHandler.bind(this);
        this.linearAlphabetsHandler = this.linearAlphabetsHandler.bind(this);
        this.aboutHandler = this.aboutHandler.bind(this);
    }

    render() {
        return (
            <React.Fragment >
                <Container style={{alignItems: "center", direction: "column"}}>
                    <Row>
                        <Col sm={1}>
                        </Col>
                        <Col sm={10} style={{textAlign: "center", height: "100%", width: "100%", padding: "2vh"}}>
                            <Button onClick={this.randomAlphabetsHandler} style={{fontSize: "9vw", width: "100%", height: "13vh"}}>RANDOM ALPHABETS</Button>
                        </Col>
                        <Col sm={1}>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={1}>
                        </Col>
                        <Col sm={10} style={{textAlign: "center", height: "100%", width: "100%", padding: "2vh"}}>
                            <Button onClick={this.linearAlphabetsHandler} style={{fontSize: "10vw", width: "100%", height: "13vh"}}>ALPHABETS</Button>
                        </Col>
                        <Col sm={1}>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={1}>
                        </Col>
                        <Col sm={10} style={{textAlign: "center", height: "100%", width: "100%", padding: "2vh"}}>
                            <Button onClick={this.aboutHandler} style={{fontSize: "10vw", width: "100%", height: "13vh"}}>ABOUT</Button>
                        </Col>
                        <Col sm={1}>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }

    randomAlphabetsHandler() {
        this.props.history.push(`/randomAlphabets/start`);
    }

    linearAlphabetsHandler() {
        this.props.history.push(`/linearAlphabets/start`);
    }

    aboutHandler() {
        this.props.history.push(`/about`);
    }
}

export default Home