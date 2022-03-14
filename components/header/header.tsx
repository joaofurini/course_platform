import { ChatIcon, RepeatClockIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";



export default function Header() {

  const router = useRouter()
  return (
    <HStack  display={'flex'} justifyContent='space-between' w={'100%'} pr='30px' pl={'30px'} h={'4.8rem'}> 

    <Box as={'button'} borderRadius={'20px'} onClick={() => {
      router.push('/home')

    }}  opacity={0.7}  backgroundColor={'transparent'} height='40px' width={'250px'} justifyContent='center' border={'1px solid'} alignItems='center' >

      <Text align={'center'}>Home</Text>

    </Box>
 

    <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon color='gray.300' />}
    />
    <Input borderRadius={20} placeholder='Pesquisar' />
  </InputGroup>

  <HStack> 
    <Button backgroundColor={'transparent'} fontSize={12}> Nos conheça</Button>
        <Button backgroundColor={'transparent'} fontSize={12} >Melhores instrutores</Button>
        <Button backgroundColor={'transparent'} fontSize={12}>Meus cursos</Button>
        
        <RepeatClockIcon></RepeatClockIcon>
        <ChatIcon ></ChatIcon>
     

  </HStack>
   

       



    </HStack>
  );
}
