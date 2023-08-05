import { Container, Row, Col, Form } from 'react-bootstrap'
import './SecondStep.css'
import { useState } from 'react'
import Select from 'react-select'
export default function SecondStep() {
    const [SelectOption, setSelectOption] = useState(null);

    const hobbiesSer = JSON.stringify(SelectOption);
    // console.log(hobbiesSer);
    localStorage.setItem('hobbie', hobbiesSer);

    const onChangeAdditionHobies = (e) => {
        const sport = e.target.value;
        // console.log(sport);

        localStorage.setItem('additionHobbie', sport);
    }

    const options = [
        { id: 1, value: "football", label: "Football ⚽" },
        { id: 2, value: "computer", label: "Computer 💻" },
        { id: 3, value: "play", label: "Play 🎮" },
        { id: 4, value: "music", label: "Play Music 🎼" },
        { id: 5, value: "photo", label: "Photography 📷" },
        { id: 6, value: "swim", label: "Swim 🥽" },
        { id: 7, value: "run", label: "Run 👟" },
    ];

    return (
        <div>
            <h2>Select your favorite sport</h2>
            <h4>tell me about your hobbies</h4>
            <Container className="p-5 text-center">
                <Row className="justify-content-md-center">
                    <Col lg="7">
                        <h5>Select your hobbies</h5>
                        <Select
                            // defaultValue={ }
                            onChange={setSelectOption}
                            options={options}
                            isSearchable
                            isMulti
                        />
                    </Col>
                    <Col lg="7" className='mt-4'>
                        <h5>do you want to add more</h5>
                        <Form.Control type="text" placeholder="Karate" onChange={(e) => onChangeAdditionHobies(e)} />
                    </Col>
                </Row>

            </Container>
        </div>
    )
}