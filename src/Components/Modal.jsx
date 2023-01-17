import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    ButtonGroup,
    Button,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodoAction } from '../actions/todoAction';

function ModalAdd(props) {
    // Metode 1 get value from input with useRef
    const inDate = React.useRef(null);
    const inTodo = React.useRef(null);
    const inLocation = React.useRef(null);
    const inNote = React.useRef(null);

    // Metode 2 dengan state dan onChange
    const [date, setDate] = React.useState('');
    const [todo, setTodo] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [note, setNote] = React.useState('');

    const dataTodo = useSelector((state) => state.todoReducer.dataTodo);
    const dispatch = useDispatch();
    
    const onBtnSave = () => {

        // code here
        // alert(`${inDate.current.value} ${inTodo.current.value} ${inLocation.current.value} ${inNote.current.value}`);
        // Salin data dari state
        let temp = [...dataTodo];
        temp.push({
            id: temp[temp.length - 1].id + 1,
            date: inDate.current.value,
            todo: inTodo.current.value,
            location: inLocation.current.value,
            note: inNote.current.value,
            status: 'On going'
        });
        dispatch(updateTodoAction(temp));
        props.onToggle(); // Menutup modal kembali
    }
    return <Modal isOpen={props.buka} >
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>
                <h5 className="modal-title" id="exampleModalLabel">Add Todo</h5>
            </ModalHeader>
            <ModalBody>
                <form >
                    <div className="form-group">
                        <label for="exampleInputPassword1">Date</label>
                        <input type="date" onChange={(element) => setDate(element.target.value)} ref={inDate} className="form-control" id="exampleInputPassword1"
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">To Do</label>
                        <input type="text" onChange={(element) => setTodo(element.target.value)} ref={inTodo} className="form-control" id="exampleInputPassword1"
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Location</label>
                        <input type="text" onChange={(element) => setLocation(element.target.value)} ref={inLocation} className="form-control" id="exampleInputPassword1"
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Note</label>
                        <textarea className="form-control" onChange={(element) => setNote(element.target.value)} ref={inNote} id="exampleInputPassword1"
                        />
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <ButtonGroup>
                    <Button type="button" colorScheme="red" onClick={props.onToggle} >Cancel</Button>
                    <Button type="button" colorScheme="green" variant="outline" onClick={onBtnSave}>Save</Button>
                </ButtonGroup>
            </ModalFooter>
        </ModalContent >
    </Modal >;
}

export default ModalAdd;