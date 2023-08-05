import { Container, Row, Col, FloatingLabel, Form } from 'react-bootstrap'
import './ThirdStep.css'
export default function SecondStep() {
    return (
        <div>
            <h2>Third Step</h2>
            <h4>Do you want any comment?</h4>
            <Container className="p-5 text-center">
                <Row className="justify-content-md-center">
                    <Col lg="10">
                        <FloatingLabel controlId='floationgTextArea' label="Comments" className="mb-3">
                            <Form.Control as="textarea" placeholder="leave a comment" onChange={(e) => console.log(e.target.value)} />
                        </FloatingLabel>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}