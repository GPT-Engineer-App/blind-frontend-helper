import { Box, VStack, Link } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box bg="white" w="200px" p={4} boxShadow="md">
      <VStack align="start" spacing={4}>
        <Link href="#">Call Tool</Link>
        <Link href="#">Invoice Tool</Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;