
import { motion } from "framer-motion"
import dynamic from 'next/dynamic'
import {
    Box,
    Text,
    Input,
    Button,
    HStack,
    Icon,
} from "@chakra-ui/react";
import axios from "axios";
import { Formik, Form } from "formik";
import * as yup from 'yup'




export function Stepper({step}) {

    const CircleIcon = (props) => (
        <Icon viewBox='0 0 200 200' {...props}>
          <path
            fill='currentColor'
            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
          />
        </Icon>
      )

      const checkIconColor = (step) => {

        return [0,1,2,3].map(item => {

            if(step < item) {
                return <CircleIcon boxSize={4} color='grey' />
            }else {
                return <CircleIcon boxSize={4} color='green' />
            }
        })
      }

    return (
        <HStack  >

        {checkIconColor(step)}
        </HStack >

    );
}

