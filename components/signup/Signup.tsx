
import { motion } from "framer-motion"
import dynamic from 'next/dynamic'
import {
    Box,
    Text,
    Input,
    Button,
    HStack,
    VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { Formik, Form } from "formik";
import * as yup from 'yup'
import { AddressForm } from "./address_form/AddressForm";
import { ContatoForm } from "./contato_form/ContatoForm";
import { PessoaForm } from "./pessoa_form/PessoaForm";
import { UserForm } from "./user_form/UserForm";
import { Stepper } from "../stepper/stepper";



export function Signup({step, nextStep, previousStep}) {


    function stepSelector(step){

        switch (step) {
            case 0:
                return <AddressForm nextStep={nextStep} previousStep={previousStep}  />
            case 1:
                return <ContatoForm nextStep={nextStep} previousStep={previousStep} />
            case 2:
                return <PessoaForm />
            case 3:
                return <UserForm />
            default:
                return <Text >t</Text>
                break;
        }
    }

    return (
        <VStack
            display='flex'
            w={'100%'}
            height={"100vh"}
            justifyItems="center"
            justifyContent="center"
            alignItems={'center'}>

            <Stepper step={step}/>

            {
               stepSelector(step)
            }

        </VStack >

    );
}

