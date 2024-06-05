import { Container, Text, VStack, HStack, Input, Select, Button, Table, Thead, Tbody, Tr, Th, Td, Checkbox, IconButton, Box } from "@chakra-ui/react";
import { AddIcon, SearchIcon, DownloadIcon, UpDownIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        <HStack spacing={4}>
          <Input placeholder="Search" />
          <Select placeholder="Category">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </Select>
          <Button leftIcon={<SearchIcon />} colorScheme="teal">
            Filter
          </Button>
          <Button leftIcon={<UpDownIcon />} colorScheme="teal">
            Sort
          </Button>
        </HStack>
        <HStack spacing={4}>
          <Button leftIcon={<DownloadIcon />} colorScheme="teal">
            Import
          </Button>
          <Button leftIcon={<DownloadIcon />} colorScheme="teal">
            Export
          </Button>
        </HStack>
        <Box overflowX="auto">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Item</Th>
                <Th>Value ($)</Th>
                <Th>Data</Th>
                <Th>Data</Th>
                <Th>Status</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td><Checkbox /></Td>
                <Td>Lorem dolore</Td>
                <Td>9,000</Td>
                <Td>Data series</Td>
                <Td>01/01/23</Td>
                <Td>
                  <Button size="sm" colorScheme="teal">Status</Button>
                </Td>
                <Td>
                  <IconButton icon={<EditIcon />} aria-label="Edit" size="sm" mr={2} />
                  <IconButton icon={<DeleteIcon />} aria-label="Delete" size="sm" />
                </Td>
              </Tr>
              {/* Repeat <Tr> for more rows */}
            </Tbody>
          </Table>
        </Box>
        <HStack justify="space-between" w="100%">
          <Text>106 results</Text>
          <HStack spacing={2}>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>Next</Button>
          </HStack>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;