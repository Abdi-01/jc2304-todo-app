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

function ModalAdd(props) {
    const onBtnSave=()=>{
        // code here
    
        // props.updateStateData(data); // menyimpan data baru ke state data pda parent component
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
                        <input type="date" className="form-control" id="exampleInputPassword1"
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">To Do</label>
                        <input type="text" className="form-control" id="exampleInputPassword1"
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Location</label>
                        <input type="text" className="form-control" id="exampleInputPassword1"
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Note</label>
                        <textarea className="form-control" id="exampleInputPassword1"
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