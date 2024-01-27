import { useState } from 'react';
import Navbar from '../components/Navbar';
import Backend from '../utils/utils.js';
// import Fuse from 'fuse.js';
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    TableContainer,
    Table,
    TableCaption,
    Th,
    Thead,
    Tr,
    Tbody,
    Td,
    Tfoot,
    Tag,
    TagLabel,
    HStack,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement
  } from "@chakra-ui/react";
  import { BsFunnel } from "react-icons/bs";
  import pharmaseeLogo from '../components/pharmaseeLogo.png';
  import { Search2Icon } from '@chakra-ui/icons'

const PatientSearch = () => {

    const [patients, setPatients] = useState([]);

    const getPatients = async () => {
        try {
            const res = await Backend.get(`/patients`);
            console.log(res);
            setPatients(patients);
            return res;
          } catch (err) {
            console.log(err);
          }
    };

    const PatientTableEntry = ( {patient} ) => {
        
        return (
            <Tr>
                <Td>{patient.first_name} {patient.last_name}</Td>
                <Td>{patient.mrn}</Td>
                <Td>{patient.hospitals}</Td>
            </Tr>
        );
    };
    
    return (
        <>
            <Navbar />
            <Flex
            flexDirection="column"
            width="100vw"
            height="100vh"
            backgroundColor="F3F3F3"
            justifyContent="center"
            alignItems="center"
            >
            <Flex 
            flexDirection="column"
            width="90vw"
            height="80vh"
            alignItems="center"
            >
                <Stack spacing={2} direction="row" width='auto' justifyContent="space-evenly">
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                        <Search2Icon color='gray.300' />
                        </InputLeftElement>
                        <Input width='59vw' placeholder='Enter Patient Name' />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                        <Search2Icon color='gray.300' />
                        </InputLeftElement>
                        <Input width='18vw' placeholder='Enter Patient MRN' />
                    </InputGroup>
                    <InputGroup>
                        <Button backgroundColor="#44ACCF"><BsFunnel style={{ color: 'white' }} /></Button>
                    </InputGroup>
                </Stack>
                <TableContainer width='81vw' marginTop='5vh'>
                    <Table variant='simple'>
                        <Thead style={{ backgroundColor: '#44ACCF' }}>
                        <Tr>
                            <Th style={{ color: 'white' }}>Patient Name</Th>
                            <Th style={{ color: 'white' }}>MRN</Th>
                            <Th style={{ color: 'white' }}>Hospital</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        <Tr justifyContent="space-evenly">
                            <Td>Alyssia Tan</Td>
                            <Td>592841</Td>
                            <Td>
                                <HStack spacing={4} display='flex'>
                                    <Tag
                                    size='sm'
                                    key='sm'
                                    borderRadius='full'
                                    variant='solid'
                                    colorScheme='green'
                                    >
                                    <TagLabel>Green</TagLabel>
                                    </Tag>
                                </HStack>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Ethan Ho</Td>
                            <Td>592842</Td>
                            <Td>
                                <HStack spacing={4} display='flex'>
                                    <Tag
                                    size='sm'
                                    key='sm'
                                    borderRadius='full'
                                    variant='solid'
                                    colorScheme='cyan'
                                    >
                                    <TagLabel>Cyan</TagLabel>
                                    </Tag>
                                    <Tag
                                    size='sm'
                                    key='sm'
                                    borderRadius='full'
                                    variant='solid'
                                    colorScheme='purple'
                                    >
                                    <TagLabel>Kaiser Permanente</TagLabel>
                                    </Tag>
                                </HStack>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Gayathri Yedavilli</Td>
                            <Td>592843</Td>
                            <Td>
                            <HStack spacing={4} display='flex'>
                                    <Tag
                                    size='sm'
                                    key='sm'
                                    borderRadius='full'
                                    variant='solid'
                                    colorScheme='purple'
                                    >
                                    <TagLabel>Not Green</TagLabel>
                                    </Tag>
                                </HStack>
                            </Td>
                        </Tr>
                        </Tbody>
                    </Table>
                    </TableContainer>
            </Flex>
        </Flex>
      </>
    );
};
export default PatientSearch;