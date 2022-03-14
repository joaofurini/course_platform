import { Box, Divider, Heading, HStack, Image, Text } from "@chakra-ui/react";
import Head from "next/head";
import CoursesList from "../components/courses_list/courses_list";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import HeaderMenu from "../components/header/header_menu";
import HeaderOffer from "../components/header/header_offer";

import { Signup } from "../components/signup/Signup";

export default function Home() {
  return (
    <>
  

    <Header />
    <Divider></Divider>
    <HeaderMenu></HeaderMenu>
    <HeaderOffer img="assets/image.jpg" title="Comece a aprender imediatamente" subtitle="Seja um profissional melhor"></HeaderOffer>
    <CoursesList title="O que aprender em seguida"></CoursesList>
    <Box display={'flex'} w={'100%'} alignItems='center' justifyContent={'center'}>
    <Box height={'100%'} w="80%" alignSelf={'center'} border={'0.5px solid'} borderColor='grey' p={10} >

<Heading>Diversas empresas confiam no nosso trabalho</Heading>
<Text>Venha fazer parte dessa rede</Text>

<HStack mt={5}  display={'flex'} justifyContent='space-between' >

    <Image src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg" ></Image>
    <Image src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg" ></Image>
    <Image src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg" ></Image>
    <Image src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg" ></Image>
</HStack>

</Box>
    </Box>
    <CoursesList title="Continuar aprendendo"></CoursesList>
    <CoursesList title="Novidades"></CoursesList>

    <Footer></Footer>

    </>
  );
}
