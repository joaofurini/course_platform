import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Input, InputGroup, InputLeftElement, Stack, Image, Text, Heading, VStack } from "@chakra-ui/react";

import Head from "next/head";


interface HeaderOfferProps {
  title: string
  subtitle?: string
  img?: string
}


export default function HeaderOffer({title, subtitle, img}: HeaderOfferProps) {

  const imageUrl = `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)),url(${img})`
  return (
    <Stack  height={400} backgroundImage={imageUrl} backgroundSize='cover' display={'flex'} mt='35px' justifyContent={'center'}   w={'100%'}> 
  


      <Box pl={200} pr={200}>

 

        <Heading  color={'white'} fontSize={50} >{title}</Heading>
        <Text color={'white'}>{subtitle ??''}</Text>
       

      </Box>
    
      
    </Stack>
  );
}
