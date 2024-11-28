import { Box , useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";

function App() {
  const containerBg = useColorModeValue("gray.100", "gray.900");
  return (
  <Box minH={"100vh"} bg={containerBg}>  
    <Navbar/>
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/create" element={<CreatePage/>}/>
   </Routes>
  </Box>
);
}

export default App;
