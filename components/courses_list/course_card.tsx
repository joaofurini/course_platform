import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Image, Input, InputGroup, InputLeftElement, Text, Tooltip, VStack } from "@chakra-ui/react";
import { url } from "inspector";
import Head from "next/head";
import { useRouter } from "next/router";
import ReactStars from "react-rating-stars-component";



export default function CourseCard() {

  const router = useRouter()
  return (
   
    <VStack as={'button'} onClick={() => {
      router.push('/details')

    }} width={300}  height={300}  >
        <Image w={'100%'} src="https://img-c.udemycdn.com/course/240x135/1708340_7108_5.jpg"></Image>
        <Text fontSize={18} fontWeight='bold'>Flutter e Dart - The Complete Guide [2022 Edition]</Text>
        <Text fontSize={13} color='grey'>Autor do curso</Text>

        <HStack>
            <Text>4.8</Text>
        <ReactStars
    count={5}
    onChange={() => {}}
    size={24}
    activeColor="#ffd700"
  />
      <Text>(656)</Text>
        </HStack>
        
    </VStack>

    
  );
}
