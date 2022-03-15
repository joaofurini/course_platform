import { Box, Divider, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import CoursesList from "../../components/courses_list/courses_list";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import HeaderMenu from "../../components/header/header_menu";
import HeaderOffer from "../../components/header/header_offer";







export default function Courses({ctx}) {
  const acceptedRoutes = ['development', 'business', 'finances', 'ti', 'productivity' ,'self_development', 'design', 'marketing', 'health', 'music']

    const router = useRouter()
    const { slug } = router.query

    const parsedSlug = slug as string

    
    // if(!acceptedRoutes.includes(parsedSlug)){

    //   router.push('/home')
    // }

  



    function selectTitle(slug) {
        switch (slug) {
            case 'development':
                return 'Desenvolvimento'
                
            case 'business':
                return 'Negócios'

            case 'finances':
              return 'Finanças'

            case 'ti':
              return 'Tecnologia da Informação'

            case 'productivity':
              return 'Produtividade no escritório'

            case 'self_development':
              return 'Desenvolvimento Pessoal'

            case 'design': 
              return 'Design'

            case 'marketing': 
              return 'Marketing'
            case 'health': 
              return 'Saúde e fitness'
            case 'music': 
              return 'Musica'
            default:

                return ''
            
        }
    }


 

  return (
    <>
 
 <Header />
    <Divider></Divider>
    <HeaderMenu></HeaderMenu>
    <HeaderOffer title={`${selectTitle(slug)}`} img="/assets/keyboard.jpg" ></HeaderOffer>
    

    


    <CoursesList title="Para começar"></CoursesList>
    <CoursesList title="Já tenho um pouco de experiência"></CoursesList>
    <CoursesList title=""></CoursesList>



    <Footer></Footer>



  

     
      
    </>
  );
}
