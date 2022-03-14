import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Input, InputGroup, InputLeftElement, Stack, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import CourseCard from "./course_card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HeaderOffer from "../header/header_offer";
import Footer from "../footer/footer";



const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  interface CoursesListProps {
      title: string
      courseLlist?: Array<any>
  }

export default function CoursesList({title} :CoursesListProps) {
  return (
    <Stack display={'flex'}   pt="20px"> 
    


        <Stack   pr={200} pl={200} >
        <Text fontSize={30} fontWeight='bold'>{title}</Text>     
        
          <Carousel  
        centerMode autoPlay={false}responsive={responsive}>
    <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
    </Carousel>
          </Stack>   
     

    </Stack>
  );
}
