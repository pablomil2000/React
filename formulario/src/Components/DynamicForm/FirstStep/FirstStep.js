import { Container, Row } from 'react-bootstrap'
import './FirstStep.css'
import CardFruit from './CardFruit';
import { useState } from 'react';

// Array de objetos con las frutas
export const fruits = [
    {
        id: 1,
        icon: "🍅",
        name: "Tomato",
        description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
        id: 2,
        icon: "🫐",
        name: "Blueberries",
        description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
        id: 3,
        icon: "🍌",
        name: "Banana",
        description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
];

export default function FirstStep() {

    const [SelectedCard, SetSelectedCard] = useState(null);

    const clickCard = (fruit) => (
        SetSelectedCard(fruit.id),
        localStorage.setItem('fruitId', fruit.id),
        localStorage.setItem('fruitIcon', fruit.icon)
    );

    return (
        <div>
            <h2>Fruta favorita</h2>
            <h4>Cual es tu fruta favorita</h4>
            <Container className='p-5 text-center'>
                <Row>
                    {fruits.map((fruit, index) => (
                        <CardFruit fruit={fruit} key={index} clickCard={clickCard} SelectedCard={SelectedCard} />
                    ))}
                </Row>

            </Container>
        </div>
    )
}