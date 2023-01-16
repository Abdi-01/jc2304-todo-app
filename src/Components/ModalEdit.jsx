import React from 'react';
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
                        <input type="date" />
                    </div>
                    <div className='form-group'>
                        <label>Todo</label>
                        <input type="text" />
                    </div>
                    <div className='form-group'>
                        <label>Location</label>
                        <input type="text" />
                    </div>
                    <div className='form-group'>
                        <label>Note</label>
                        <input type="text" />
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
        </ModalContent>
    </Modal>;
}

export default ModalEdit;