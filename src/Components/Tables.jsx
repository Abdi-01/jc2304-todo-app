import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    ButtonGroup,
} from '@chakra-ui/react'

function TablePrint(props) {

    const onBtDelete = (id) => {
        let temp = [...props.data];
        let idx = temp.findIndex((val,index) => val.id == id);
        temp.splice(idx, 1);
        props.updateStateData(temp);
    }

    const printData = () => {
        return props.data.map((value, index) => {
            return (
                <Tr>
                    <Td>{index + 1}</Td>
                    <Td>{value.date}</Td>
                    <Td>{value.todo}</Td>
                    <Td><img src={value.location} width="100%" alt="..." /></Td>
                    <Td>{value.note}</Td>
                    <Td>{value.status}</Td>
                    <Td>
                        <ButtonGroup>
                            <Button type="button" colorScheme="red" onClick={() => onBtDelete(value.id)}>Delete</Button>
                            <Button type="button" colorScheme="yellow">Edit</Button>
                        </ButtonGroup>
                    </Td>
                </Tr>
            )
        })
    }
    return <TableContainer>
        <Table variant="simple">
            <Thead>
                <Tr>
                    <Th>#</Th>
                    <Th>Date</Th>
                    <Th>To Do</Th>
                    <Th>Location</Th>
                    <Th>Note</Th>
                    <Th>Status</Th>
                    <Th>Action</Th>
                </Tr>
            </Thead>
            <Tbody>
                {printData()}
            </Tbody>
        </Table>
    </TableContainer>;
}

export default TablePrint;