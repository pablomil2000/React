import {Image, Box, Stack, Heading} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import ImageClick from '../assets/img/cursor.png'
import imageCliente from '../assets/img/button.png'


export default function Home() {
    
    const navigate = useNavigate();

    const buttonStart=()=>{
        navigate('/surtidor');
    }

    const buttonClient=()=>{
        navigate('/surtidor');
    }

    return(
    <Box
    w="100%">
        <Stack
        spacing={8}
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%,-50%)">
            <Box
            p={5}
            borderRadius="10"
            bgGradient="linear(to-r, teal.500, green.500)"
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            cursor="pointer"
            shadow="base"
            _hover={{ shadow:"2xl" }}
            onClick={buttonStart}
            >
                <div>
                <Heading fontSize="7xl" color="white">Empezar</Heading>
                    <Heading fontSize="7xl" color="white">Pulsa aqui</Heading>
                </div>
                <Image src={ImageClick} alt="Click here" width="150px"/>
            </Box>
            <Box
            p={5}
            shadow="md"
            borderWidth="flex"
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            cursor="pointer"
            borderRadius="10">
                <Heading fontSize="4xl">Identificarse como cliente</Heading>
                <Image src={imageCliente} alt='cliente' width="100px"/>
            </Box>
        </Stack>
    </Box>
    )
}