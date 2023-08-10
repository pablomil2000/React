import {Image, Box, Heading} from '@chakra-ui/react';

import ImageShop from '../assets/img/shop.png';
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
    
    const navigate = useNavigate();

    const redirect=()=>{
        navigate("/home");
    }

    return(
        <Box 
            display="block"
            alignItems="center"
            justifyContent="space-between"
            borderBottom="1px solid #ddd"
            onClick={redirect}
            >
        <Image src={ImageShop} alt='Logotipo' width={75} margin="0 auto" cursor="pointer"/>
        <Heading as="h1" size="sm" isTruncated textTransform="uppercase" textAlign="center" color="#ff6b6b" fontWeight="900" paddingBottom="5">Gasolinera </Heading>
        </Box>
                
    )
}