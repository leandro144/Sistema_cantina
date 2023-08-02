import React from 'react'
import { useState } from "react";
import Link from "next/link";
import {
  Button,
  Flex,
  Input,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Header from '../components/Header';
import axios from 'axios';

const main = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', { email, password });
      console.log(response.data.message);
      alert("deu certo")
    } catch (error) {
      console.error(error.response.data.message);
      alert("deu erro")
    }
  };

  return (
    <>
      <Header />
        <Flex bg="#01576B" w="100%" height="86.4vh" justifyContent="center" align="center">
            <Flex bg="#fff" w="400px" paddingTop="1rem" paddingBottom="1rem" borderRadius="10px" >
              <Flex w="350px" margin="0 auto" flexDirection="column">
                <Heading my="2rem">Login</Heading> 
                <Stack spacing={5} my="1rem">
                  <Input 
                  placeholder='Email' 
                  type='email' 
                  w="100%"
                  h="60px" 
                  fontWeight="bold"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                    />
                  <Input 
                  placeholder='Create Password' 
                  type='password'
                  w="100%" 
                  h="60px" 
                  fontWeight="bold" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button 
                  bg="#F5A802" 
                  color="#fff" 
                  h="60px" 
                  fontSize="1.2rem"
                  onClick={handleLogin}
                  >
                  Cadastrar</Button>
                  <Link href="/"><Text textAlign="center" textDecoration="underline" color="#01576B" fontWeight="bold">Se já possui um cadastro, clique aqui!</Text></Link>
                </Stack>
              </Flex>
            </Flex>
        </Flex>
    </>
  )
}

export default main