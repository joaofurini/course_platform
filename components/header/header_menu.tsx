import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import { BaseSyntheticEvent } from "react";



export default function CategoriesMenu() {
    const router = useRouter()


    function directToCategories(category: string){
        router.push(`/courses/${category}`)
    
    }


  return (
    <HStack  display={'flex'}  justifyContent={'center'}   w={'100%'}  h={'4.8rem'}boxShadow='lg' p='6' bg='white'> 
    <Text _hover={{color: 'purple'}}  as={'button'} onClick={()=> directToCategories('development')} p={5}>Desenvolvimento</Text>
    <Text  _hover={{color: 'purple'}} p={5}  as={'button'} onClick={()=> directToCategories('business')}>Negocios</Text>
    <Text  _hover={{color: 'purple'}} p={5}  as={'button'} onClick={()=> directToCategories('finances')}>Finanças</Text>
    <Text  _hover={{color: 'purple'}} p={5}  as={'button'} onClick={()=> directToCategories('ti')}>Ti e software</Text>
    <Text  _hover={{color: 'purple'}} p={5}  as={'button'} onClick={()=> directToCategories('productivity')}>Produtividade no escritorio</Text>
    <Text  _hover={{color: 'purple'}} p={5}  as={'button'} onClick={()=> directToCategories('self_development')}>Desenvolvimento pessoal</Text>
    <Text  _hover={{color: 'purple'}} p={5}  as={'button'} onClick={()=> directToCategories('design')}>Desing</Text>
    <Text  _hover={{color: 'purple'}} p={5}  as={'button'} onClick={()=> directToCategories('marketing')}>Marketing</Text>
    <Text  _hover={{color: 'purple'}} p={5}  as={'button'} onClick={()=> directToCategories('health')}>Saúde e Fitness</Text>
    <Text  _hover={{color: 'purple'}} p={5}  as={'button'} onClick={()=> directToCategories('music')}>Múisica</Text>
    

    </HStack>
  );
}
