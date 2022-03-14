
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


export function AddressForm({nextStep, previousStep}) {

    const cookies = parseCookies()

    const validationSchema = yup.object().shape({
        bairro: yup.string().required("Campo obrigatório"),
        cep: yup
            .string()
            .required("Campo obrigatório"),
        cidade: yup
            .string()
            .required("Campo obrigatório"),
        complemento: yup.string(),
        logradouro: yup.string(),
        numero: yup.string()
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

                <Text alignSelf={'start' } mb='40px' >Endereço</Text>

                <Formik
                    validationSchema={validationSchema}
                    initialValues={{
                        bairro: "",
                        cep: "",
                        cidade: "",
                        complemento: "",
                        logradouro: "",
                        numero: ""
                    }}
                    onSubmit={async (values, { setSubmitting }) => {
                        setSubmitting(true);
                        const address: AddressInterface = {
                            ativo: true,
                            bairro: values.bairro,
                            cep: values.cep,
                            cidade: values.cidade,
                            complemento: values.complemento,
                            logradouro: values.logradouro,
                            numero: values.numero,                            
                        }
                        try {
                          setCookie(null, 'address', JSON.stringify(address), {
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
                                        name="bairro"
                                        type="bairro"
                                        placeholder="Bairro"
                                        fontSize="0.9rem"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.bairro}
                                    />
                                    <Text color="red">
                                        {errors.bairro && touched.bairro && errors.bairro}
                                    </Text>
                                </Box>
                                <Box>
                                    <Input
                                        variant="filled"
                                        name="numero"
                                        
                                        placeholder="Numero"
                                        mt='20px'
                                        fontSize="0.9rem"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.numero}
                                    />
                                    <Text color="red">
                                        {errors.numero && touched.numero && errors.numero}
                                    </Text>
                                </Box>
                                <Box>
                                    <Input
                                        variant="filled"
                                        name="cep"
                                        type="number"
                                        placeholder="CEP"
                                        mt='20px'
                                        fontSize="0.9rem"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.cep}
                                    />
                                    <Text color="red">
                                        {errors.cep && touched.cep && errors.cep}
                                    </Text>
                                </Box>

                                <Box>
                                    <Input
                                        variant="filled"
                                        name="cidade"
                                        type="cidade"
                                        placeholder="Cidade"
                                        mt='20px'
                                        fontSize="0.9rem"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.cidade}
                                    />
                                    <Text color="red">
                                        {errors.cidade && touched.cidade && errors.cidade}
                                    </Text>
                                </Box>

                                <Box>
                                    <Input
                                        variant="filled"
                                        name="complemento"
                                        type="text"
                                        placeholder="Complemento"
                                        mt='20px'
                                        fontSize="0.9rem"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.complemento}
                                    />
                                    <Text color="red">
                                        {errors.complemento && touched.complemento && errors.complemento}
                                    </Text>
                                </Box>


                                <Box>
                                    <Input
                                        variant="filled"
                                        name="logradouro"
                                        placeholder="Logradouro"
                                        mt='20px'
                                        fontSize="0.9rem"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.logradouro}
                                    />
                                    <Text color="red">
                                        {errors.logradouro && touched.logradouro && errors.logradouro}
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

