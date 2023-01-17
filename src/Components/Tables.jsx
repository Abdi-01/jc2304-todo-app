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
import ModalEdit from './ModalEdit';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodoAction } from '../actions/todoAction';

function TablePrint(props) {

    const dataTodo = useSelector((state) => state.todoReducer.dataTodo);// mengambil data dari globalStore reducer -->todoReducer
    const dispatch = useDispatch(); // untuk menjalankan fungsi action redux agar memperbarui data ke reducer

    // Membuat fungsi action --> nanti dipindah ke file action
    // const updateTodoAction = (data) => {
    //     return {
    //         type: "UPDATE_TODO", // memilih tindakan yang akan dilakukan pada data reducer
    //         payload: data // data yang ingin disimpan ke globalStore reducer
    //     }
    // }

    const onBtDelete = (id) => {
        let temp = [...dataTodo];
        let idx = temp.findIndex((val, index) => val.id == id);
        temp.splice(idx, 1);
        dispatch(updateTodoAction(temp));
    }

    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(null);

    const printData = () => {
        return dataTodo.map((value, index) => {
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
                            <Button type="button" colorScheme="yellow" onClick={() => {
                                setOpen(!open);
                                setSelected(value);
                            }}>Edit</Button>
                        </ButtonGroup>
                    </Td>
                </Tr>
            )
        })
    }
    return <>
        <ModalEdit
            data={props.data}
            updateStateData={props.updateStateData}
            detail={selected}
            setSelected={setSelected}
            open={open}
            onToggle={() => setOpen(!open)} />
        <TableContainer>
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
    </>
}

export default TablePrint;