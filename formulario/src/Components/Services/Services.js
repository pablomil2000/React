import { Container, Row, Col } from 'react-bootstrap'
import './Services.css'
import imgCourse1 from "../../assets/img/hbo.jpeg"
import imgCourse2 from "../../assets/img/netflix.jpeg"
import imgCourse3 from "../../assets/img/prime.jpeg"
import CardServices from "../cardServices"

export default function Services() {

    const servicesArray = [
        {
            title: "Wordpress Course",
            subtitle: "Learn Wordpress",
            image: imgCourse1,
            footer: "Go to the course ➡️",
            link: "#"
        },
        {
            title: "php Course",
            subtitle: "Learn php",
            image: imgCourse2,
            footer: "Go to the course ➡️",
            link: "#"
        },
        {
            title: "react Course",
            subtitle: "Learn react",
            image: imgCourse3,
            footer: "Go to the course ➡️",
            link: "#"
        },
    ]


    return (
        <div className="services p-4 mt-5">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={12} me={8}>
                        <h2 className='text-center'>Services</h2>
                        <h4 className='pb-3 text-center'>mira los services</h4>
                        <Row xs={12} me={3} className='g-4 mt-4'>
                            {servicesArray.map((service, index) => (
                                <CardServices services={service} key={index} />
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}