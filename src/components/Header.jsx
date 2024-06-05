import { Box, Flex, Text, Button, IconButton } from "@chakra-ui/react";
import { AddIcon, QuestionIcon, BellIcon } from "@chakra-ui/icons";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <Box bg="gray.100" w="100%" p={4}>
      <Flex justify="space-between" align="center">
        <Box>
          <Text fontSize="xl">Project Name</Text>
          <Text fontSize="sm">Category</Text>
        </Box>
        <Flex align="center">
          <Button leftIcon={<AddIcon />} colorScheme="teal" variant="solid" mr={4}>
            + Add report
          </Button>
          <IconButton icon={<QuestionIcon />} aria-label="Help" mr={4} />
          <IconButton icon={<BellIcon />} aria-label="Notifications" mr={4} />
          <IconButton icon={<FaUserCircle />} aria-label="User Profile" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;