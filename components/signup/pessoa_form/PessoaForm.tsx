
import { motion } from "framer-motion"
import dynamic from 'next/dynamic'
import {
    Box,
    Text,
    Input,
    Button,
} from "@chakra-ui/react";
import axios from "axios";
import { Formik, Form } from "formik";
import * as yup from 'yup'


export function PessoaForm() {
    const phoneRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const validationSchema = yup.object().shape({
        nome: yup.string().required("Preencha seu nome"),
        email: yup
            .string()
            .email("Digite um email válido ")
            .required("Campo obrigatório"),
        CPF: yup
            .string()
            .matches(phoneRegExp, "Digite um CPF válido")
            .required("Campo obrigatório")
            .min(11, 'Seu CPF deve ter 11 números')
            .max(11, 'Seu CPF não deve passar de 11 números'),
        senha: yup.string().required("Campo obrigatório").min(8, 'Sua senha deve contar ao menos 8 caractres'),
        confirmSenha: yup.string().required("Campo obrigatório").oneOf([yup.ref('senha'), null],'Suas senhas devem combinar'),
    });

    return (
        <Box border='2px solid #62CA16' p='5%' display='flex'
                alignContent='center'
                justifyContent='center'
                alignItems='center'
                justifyItems='center' borderRadius={'20px'} w='45%'>

                <Formik
                    validationSchema={validationSchema}
                    initialValues={{
                        nome: "",
                        email: "",
                        CPF: "",
                        senha: "",
                        confirmSenha:"",
                    }}
                    onSubmit={async (values, { setSubmitting }) => {
                        setSubmitting(true);
           

                        try {
                          
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
                                        name="nome"
                                        type="name"

                                        placeholder="Nome Completo"
                                        fontSize="0.9rem"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.nome}
                                    />
                                    <Text color="red">
                                        {errors.nome && touched.nome && errors.nome}
                                    </Text>
                                </Box>
                                <Box>
                                    <Input
                                        variant="filled"
                                        name="CPF"
                                        type="number"
                                        placeholder="Digite seu CPF"
                                        mt='20px'
                                        fontSize="0.9rem"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.CPF}
                                    />
                                    <Text color="red">
                                        {errors.CPF && touched.CPF && errors.CPF}
                                    </Text>
                                </Box>

                                {/* <Box>
                                    <Input
                                        variant="filled"
                                        name="endereço"
                                        type="text"
                                        placeholder="Digite seu endereço"
                                        mt='20px'
                                        fontSize="0.9rem"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.CPF}
                                    />
                                    <Text color="red">
                                        {errors.CPF && touched.CPF && errors.CPF}
                                    </Text>
                                </Box> */}

                                <Box>
                                    <Input
                                        variant="filled"
                                        name="email"
                                        type="email"
                                        placeholder="Digite seu e-mail"
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
                                        name="senha"
                                        type="password"
                                        placeholder="Digite uma senha"
                                        mt='20px'
                                        fontSize="0.9rem"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.senha}
                                    />
                                    <Text color="red">
                                        {errors.senha && touched.senha && errors.senha}
                                    </Text>
                                </Box>


                                <Box>
                                    <Input
                                        variant="filled"
                                        name="confirmSenha"
                                        type="password"
                                        placeholder="Confirme sua senha"
                                        mt='20px'
                                        fontSize="0.9rem"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.confirmSenha}
                                    />
                                    <Text color="red">
                                        {errors.confirmSenha && touched.confirmSenha && errors.confirmSenha}
                                    </Text>
                                </Box>


                            </Box>
                            <Box display='flex'
                                alignContent='center'
                                justifyContent='center'
                                alignItems='center'
                                justifyItems='center'>
                                <Button
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
                                    Cadastra-se
                                </Button>
                            </Box>
                        </Form>
                    )}
                </Formik>

            </Box>
    );
}

