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

function ModalEdit(props) {
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
                        <input defaultValue={props.detail.date} type="date" className="form-control" />
                    </div>
                    <div className='form-group'>
                        <label>Todo</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className='form-group'>
                        <label>Location</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className='form-group'>
                        <label>Note</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className='form-group'>
                        <label>Status</label>
                        <select className='form-select'>
                            <option value="On Going">On going</option>
                            <option value="Done">Done</option>
                        </select>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
            <Button type="button" colorScheme="red" onClick={props.onToggle} >Cancel</Button>
                    <Button type="button" colorScheme="green" variant="outline">Save</Button> 
            </ModalFooter>
        </ModalContent>
    </Modal>;
}

export default ModalEdit;