import {
    Heading,
    Grid,
    GridItem,
    Image,
    Box,
    Button,
    Stack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ImageGasoil from "../assets/img/gasoil.png";
import ImageGasoilA from "../assets/img/diesel.png";
import ImageAdBlue from "../assets/img/adblue.png";
import ImageDieselPlus from "../assets/img/diesel-plus.png";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function Product() {

    const navigate = useNavigate();
    const typesGasoil = [
        {
            type: "Gasolina SP 95",
            price: "1,65",
            imageSrc: ImageGasoil,
        },
        {
            type: "Gasóleo A",
            price: "1,55",
            imageSrc: ImageGasoilA,
        },
        {
            type: "Biodiesel A",
            price: "1,40",
            imageSrc: ImageAdBlue,
        },
        {
            type: "Diesel Plus",
            price: "1,99",
            imageSrc: ImageDieselPlus,
        },
    ];

    return (
        <>
            <Heading textAlign="center" size="lg">
            </Heading></>
    )
}