import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { useState } from 'react';

export const ModalFallas=(args)=>{
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return(
        <>
        <Button className="my-4" color="success" type="button" onClick={toggle}>
         <i className="ni ni-fat-add ni-md text-white"/>
             Añadir
        </Button>

        <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
         <ModalBody>
            Formulario add
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{''}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
        </>
    )
}