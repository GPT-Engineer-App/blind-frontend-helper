import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <Header />
      <Flex>
        <Sidebar />
        <Box flex="1" p={4}>
          <Routes>
            <Route exact path="/" element={<Index />} />
          </Routes>
        </Box>
      </Flex>
    </Router>
  );
}

export default App;
