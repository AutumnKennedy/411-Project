import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  Link as ChakraLink,
  Divider,
} from "@chakra-ui/react";

import { Link as ReactRouterLink } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import { MdPerson, MdLogin, MdAttachMoney } from "react-icons/md";

export default function NavBar() {
  return (
    <div>
      <Flex minWidth="max-content" align-items="center" gap="3" p="20px">
        <Box p="2">
          <Heading size="md">
            <ChakraLink as={ReactRouterLink} to="/">
              Home
            </ChakraLink>
          </Heading>
        </Box>
        <Box p="2">
          <Heading size="md">Search</Heading>
        </Box>
        <Box p="2" display="flex">
          <Icon as={MdPerson} color="purple" boxSize={6} mr="1px" />
          <Heading size="md">Profile</Heading>
        </Box>
        <Box p="2">
          <Heading size="md">
            <ChakraLink as={ReactRouterLink} to="/about">
              About Us
            </ChakraLink>
          </Heading>
        </Box>
        <Box p="2" display="flex">
          <Icon as={MdAttachMoney} color="green" boxSize={6} mr="1px" />
          <Heading size="md">Donate</Heading>
        </Box>
        <Box p="2">
          <Heading size="md">
            <ChakraLink as={ReactRouterLink} to="/feedback">
              Feedback
            </ChakraLink>
          </Heading>
        </Box>
        <Spacer />
        <ButtonGroup spacing="3" pr="10px">
          <Button colorScheme="purple" p="20px">
            Sign Up
          </Button>
          <Button rightIcon={<MdLogin />} colorScheme="purple" p="20px">
            Log in
          </Button>
        </ButtonGroup>
      </Flex>

      <Divider />
    </div>
  );
}
