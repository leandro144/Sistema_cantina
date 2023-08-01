import {
  Avatar,
  Image,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { useSidebarContext } from "../contexts/SidebarContext";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  const { onOpen } = useSidebarContext();

  return (
    <Flex
      paddingTop= ".825rem"
      paddingBottom=".825rem"
      boxShadow="rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;"
      >
      <Flex
      as="header"
      w="100%"
      maxW={1120}
      h="20"
      mx="auto"
      px="2"
      py="2"
      align="center"
      box-shadow= "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
      color="gray.500"
      fontWeight="bold"
    >
      {isMobile && (
        <IconButton
          icon={<Icon as={FiMenu} />}
          onClick={onOpen}
          variant="unstyled"
          fontSize="20"
          mr="2"
        ></IconButton>
      )}
       <Image w={160} h={70} src='https://colegiodomboscovilamatilde.com/img/logoatual-medio.png' alt='Dan Abramov' />
      <Flex ml="auto">
        <HStack>
          <Text px={5} fontSize="1.2rem">Cantina Colégio DomBosco</Text>
          <Avatar 
          size="md" 
          name="Fernanda Gimenes"
          backgroundColor="#319795"
           />
        </HStack>
      </Flex>
    </Flex>
    
    </Flex>
  );
};

export default Header;
