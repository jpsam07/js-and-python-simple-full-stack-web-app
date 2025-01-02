import { Container, Stack, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import UserGrid from "./components/UserGrid";
import { useState } from "react";

export const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api";

function App() {
    const [users, setUsers] = useState([]);
    return (
      <Stack minH={"100vh"}>
        <Navbar setUsers={setUsers} />

        <Container maxW={"1200px"} my={4}></Container>
        <Text
        fontSize={{ base: "3x1", md: "50" }}
        fontWeight={"bold"}
        letterSpacing={"2px"}
        textTransform={"uppercase"}
        textAlign={"center"}
        mb={8}
        >

          <Text 
          as={"span"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"} bgClip={"text"}
          >Peak Gamer Peeps</Text>
          🎮
        </Text>

        <UserGrid users={users} setUsers={setUsers} />
      </Stack>
  );
}

export default App;