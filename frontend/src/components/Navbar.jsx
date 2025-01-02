import { Box, Container, Flex, Text, Button, useColorMode, useColorModeValue} from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import CreateUserModal from "./CreateUserModal";

const Navbar = ({ setUsers }) => {
  const {colorMode, toggleColorMode } = useColorMode()
  return <Container maxW={"900px"}>
    <Box
      px={4}
      my={4}
      borderRadius={5}
      bg={useColorModeValue("gray.200", "gray.700")}
    >
      <Flex h="16"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        {/* Left side */}
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          gap={3}
          display={{base:"none", sm: "flex"}}
        >
          <img src='../../public/icons/react.png' alt='react icon' width={50} height={50} />
          <Text fontSize={"40px"}>+</Text>
          <img src='../../public/icons/python.png' alt='python icon' width={50} height={40} />
          <Text fontSize={"40px"}>=</Text>
          <img src='../../public/icons/explode.png' alt='explode head icon' width={45} height={45} />
        </Flex>
        {/* Right side */}
        <Flex gap={3} alignItems={"center"}>
          <Text fontSize={"lg"} fontWeight={500} display={{ base: "none", md: "block" }}>
            Gamer Peeps ✌️
          </Text>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun size={20}/>}
          </Button>
          <CreateUserModal setUsers={setUsers} />
        </Flex>
      </Flex>
    </Box>
  </Container>;
};

export default Navbar;
