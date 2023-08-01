import React from "react";
import { Box, Link as ChakraLink, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const SidebarNav = () => {
  const { asPath } = useRouter();

  return (
    <Stack spacing="6">
      <Stack>
        <Text fontSize="xs" fontWeight="bold" color="#fff">
          CADASTRO
        </Text>
        <Stack>
          <ChakraLink
            _hover={{ bg: "#319795" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/" ? "#319795" : ""}
          >
            <Link href="/">
              <Text fontSize="md" fontWeight="medium" color="#fff">
                PRODUTOS
              </Text>
            </Link>
          </ChakraLink>
        </Stack>
      </Stack>
      <Stack>
        <Text fontSize="xs" fontWeight="bold" color="#fff">
          ESTOQUE
        </Text>
        <Stack>
          <ChakraLink
            _hover={{ bg: "#319795" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/balance" ? "gray.200" : ""}
          >
            <Link href="/balance">
              <Text fontSize="md" fontWeight="medium" color="#fff">
                SALDO
              </Text>
            </Link>
          </ChakraLink>
          <ChakraLink
            _hover={{ bg: "#319795" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/stockEntries" ? "gray.200" : ""}
          >
            <Link href="/stockEntries">
              <Text fontSize="md" fontWeight="medium" color="#fff">
                ENTRADAS
              </Text>
            </Link>
          </ChakraLink>
          <ChakraLink
            _hover={{ bg: "#319795" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/stockOutputs" ? "gray.200" : ""}
          >
            <Link href="/stockOutputs">
              <Text fontSize="md" fontWeight="medium" color="#fff">
                SAÍDAS
              </Text>
            </Link>
          </ChakraLink>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SidebarNav;
