
import { motion } from "framer-motion"
import dynamic from 'next/dynamic'
import {
    Box,
    Text,
    Input,
    Button,
    VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { Formik, Form } from "formik";
import * as yup from 'yup'

import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { AddressInterface } from "../../../interfaces/Address/AddressModel";


export function ContatoForm({nextStep, previousStep}) {

    const cookies = parseCookies()

    const validationSchema = yup.object().shape({
       
        celular: yup
            .string()
            .required("Campo obrigatório"),
        fixo: yup
            .string()
            .required("Campo obrigatório"),
        email: yup.string(),
        site: yup.string(),
        
    });

    return (
        <VStack  display='flex'
                alignContent='center'
                justifyContent='center'
                alignItems='center'
                justifyItems='center' 
                pt={'40px'}
                borderRadius={'20px'} 
               >

                <Text alignSelf={'start' } mb='40px'>Contato</Text>

                <Formik
                    validationSchema={validationSchema}
                    initialValues={{
                        ativo:"",
                        celular: "",
                        fixo: "",
                        email: "",
                        site: "",
                    }}
                    onSubmit={async (values, { setSubmitting }) => {
                        setSubmitting(true);

                        const contactInfo:any = {
                            celular: values.celular,
                            fixo: values.fixo,
                            email: values.email,
                            site: values.site
                        }

                        console.log(contactInfo)
                     
                        try {
                          setCookie(null, 'contact', JSON.stringify(contactInfo), {
                                maxAge: 30 * 24 * 60 * 60,
                                path: '/',
                              })
                              nextStep()
                                                  
                        } catch (err) {
                            alert("Erro");
                        }
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <Form onSubmit={handleSubmit}  >
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignContent="center"
                                flexDirection="column"
                            >
                                <Box w='40vw'>
                                    <Input
                                        variant="filled"
                                        name="celular"
                                        type="celular"
                                        placeholder="Celular"
                                        fontSize="0.9rem"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.celular}
                                    />
                                    <Text color="red">
                                        {errors.celular && touched.celular && errors.celular}
                                    </Text>
                                </Box>
                                <Box>
                                    <Input
                                        variant="filled"
                                        name="fixo"
                                        
                                        placeholder="Fixo"
                                        mt='20px'
                                        fontSize="0.9rem"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.fixo}
                                    />
                                    <Text color="red">
                                        {errors.fixo && touched.fixo && errors.fixo}
                                    </Text>
                                </Box>
                                <Box>
                                    <Input
                                        variant="filled"
                                        name="email"
                                        type="number"
                                        placeholder="email"
                                        mt='20px'
                                        fontSize="0.9rem"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    <Text color="red">
                                        {errors.email && touched.email && errors.email}
                                    </Text>
                                </Box>

                                <Box>
                                    <Input
                                        variant="filled"
                                        name="site"
                                        type="site"
                                        placeholder="site"
                                        mt='20px'
                                        fontSize="0.9rem"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.site}
                                    />
                                    <Text color="red">
                                        {errors.site && touched.site && errors.site}
                                    </Text>
                                </Box>

                            </Box>
                            <Box display='flex'
                                alignContent='center'
                                justifyContent='center'
                                alignItems='center'
                                justifyItems='center'>
                                <Button
                                onClick={() => {
                                    var teste = cookies.fromClient

                                    let parsedtest = JSON.parse(teste) 
                                    console.log(parsedtest)
                                   
                                }}
                                    isLoading={isSubmitting}
                                    type="submit"
                                    mt="30px"
                                    color="white"
                                    bgGradient="linear(to-r, blue.900, blue.300)"
                                    _hover={{
                                        bgGradient: "linear(to-l, blue.300, blue.900)",
                                    }}
                                    _focus={{ boxShadow: "none" }}
                                    borderRadius="20px"
                                >
                                  Próximo
                                </Button>
                            </Box>
                        </Form>
                    )}
                </Formik>

            </VStack>
    );
}

