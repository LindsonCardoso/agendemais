import { Center } from '@chakra-ui/react';
import { Modal, Button, ButtonToolbar, Placeholder } from 'rsuite';

export const ModalItem = ({ children, data, open, handleClose}) => (

  <>
    <Modal  size='md' open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Agenda</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{data.id}</p>
          <p>{data.title}</p>

        </Modal.Body>
      </Modal>

    </>
)
