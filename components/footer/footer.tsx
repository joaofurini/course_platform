import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, Heading, HStack, Image, Input, InputGroup, InputLeftElement, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";

import { Router, useRouter } from "next/router";
import { BaseSyntheticEvent } from "react";



export default function Footer() {


  return (
    <VStack pt={10} mt={10} pl={200} pr={200}   backgroundColor={'#1c1d1f'} display={'flex'}  justifyContent={'flex-start'}  alignItems={'flex-start'}   w={'100%'}  h={'400px'}> 

    <HStack  display={'flex'} justifyContent='space-between' w={'100%'} >

    <Heading   fontSize={24} color={'white'}>As melhores empresas nos escolhem para desenvolver as habilidades de carreira necessárias.</Heading>
    <HStack mt={5}  display={'flex'} justifyContent='space-between' >

<Image src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg" ></Image>
<Image src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg" ></Image>
<Image src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg" ></Image>
<Image src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg" ></Image>


</HStack>
    </HStack>

    <Divider ></Divider>

    <VStack p={10} alignItems={'start'} >
        <Text color={'white'}>Carreiras</Text>
        <Text color={'white'}>Trabalhe conosco</Text>
    
        <Text color={'white'}>Ajuda e suporte</Text>
        <Text color={'white'}>Termos </Text>
        <Text color={'white'}>Política de privacidade</Text>
    </VStack>
    <HStack pl={10} pr={10} display={'flex'} justifyContent='space-between' w={'100%'} >

<Text color={'white'}>Icone</Text>
<Text color={'white'}>@ 2022 courses, Inc.</Text>
</HStack>

    

    </VStack>
  );
}
