import React from "react"
import { Container, Row, Col } from 'react-grid-system';

class About extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Container style={{alignItems: "center", direction: "column"}}>
                    <Row>
                        <Col sm={1}>
                        </Col>
                        <Col sm={10} style={{textAlign: "center", height: "100%", width: "100%", padding: "2vh"}}>
                            <p>
                                made this small app to help my son learn some basic alphabets and numbers
                            </p>
                        </Col>
                        <Col sm={1}>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default About