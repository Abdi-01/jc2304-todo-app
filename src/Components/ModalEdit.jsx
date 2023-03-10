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
function ModalEdit(props) {
    // const { detail } = props;
    // console.log(detail);
    const [newDate, setNewDate] = React.useState('');
    const [newTodo, setNewTodo] = React.useState('');
    const [newLocation, setNewLocation] = React.useState('');
    const [newNote, setNewNote] = React.useState('');
    const [newStatus, setNewStatus] = React.useState('');

    const dataTodo = useSelector((state) => state.todoReducer.dataTodo);
    const dispatch = useDispatch();
    const onBtSave = () => {
        let newData = {
            date: newDate,
            todo: newTodo,
            location: newLocation,
            note: newNote,
            status: newStatus
        }
        // console.table(props.detail);
        // console.table(newData);
        // console.table({ ...props.detail, ...newData })
        let temp = [...dataTodo];
        let idx = temp.findIndex((val) => val.id == props.detail.id);
        temp[idx] = { ...props.detail, ...newData };
        dispatch(updateTodoAction(temp));
        props.onToggle();
        props.setSelected(null); // mereset ulang props.detail/state selected pada component table
    }

    // Mode 1 : Hanya akan ter trigger saat pertama kali website dirender
    React.useEffect(() => {
        // / fungsi yang mau dijalankan
    }, []);

    // Mode 2 : akan ter trigger setiap kali ada perubahan pada state atau props
    React.useEffect(() => {
        // / fungsi yang mau dijalankan
    });

    // Mode 3 : akan ter trigger setiap kali ada perubahan pada state atau props yang ditentukan
    React.useEffect(() => {
        // / fungsi yang mau dijalankan
        setNewDate(props.detail?.date);
        setNewTodo(props.detail?.todo);
        setNewLocation(props.detail?.location);
        setNewNote(props.detail?.note);
        setNewStatus(props.detail?.status);
    }, [props.detail]);

    return <Modal isOpen={props.open}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>
                <h5 className='modal-title'>Detail Todo</h5>
            </ModalHeader>
            <ModalBody>
                <form>
                    <div className='form-group'>
                        <label>Date</label>
                        <input onChange={(e) => setNewDate(e.target.value)} defaultValue={props.detail?.date} type="date" className="form-control" />
                    </div>
                    <div className='form-group'>
                        <label>Todo</label>
                        <input onChange={(e) => {
                            console.log(e.target.value);
                            setNewTodo(e.target.value);
                        }} type="text" defaultValue={props.detail?.todo} className="form-control" />
                    </div>
                    <div className='form-group'>
                        <label>Location</label>
                        <input onChange={(e) => setNewLocation(e.target.value)} type="text" defaultValue={props.detail?.location} className="form-control" />
                    </div>
                    <div className='form-group'>
                        <label>Note</label>
                        <input onChange={(e) => setNewNote(e.target.value)} type="text" defaultValue={props.detail?.note} className="form-control" />
                    </div>
                    <div className='form-group'>
                        <label>Status</label>
                        <select className='form-select' onChange={(e) => setNewStatus(e.target.value)} defaultValue={props.detail?.status}>
                            <option value="On going">On going</option>
                            <option value="Done">Done</option>
                        </select>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button type="button" colorScheme="red" onClick={props.onToggle} >Cancel</Button>
                <Button type="button" colorScheme="green" variant="outline" onClick={onBtSave}>Save</Button>
            </ModalFooter>
        </ModalContent>
    </Modal>;
}

export default ModalEdit;