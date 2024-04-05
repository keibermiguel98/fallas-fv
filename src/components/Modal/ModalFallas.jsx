import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, FormGroup, Input } from 'reactstrap';
import React, { useState } from 'react';

export const ModalFallas=(args)=>{
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return(
        <>
        <Button className="my-4" color="success" type="button" onClick={toggle}>
             Anexar nueva falla
        </Button>

        <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle}>NUEVA FALLA</ModalHeader>
         <ModalBody>
         <div className="pl-lg-4">
                    <Row>
                   
                      <Col lg="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Descripcion
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-descripcion"
                            placeholder="Example: Acetaminofen 200ML"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Existencia
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-existencia"
                            placeholder="0"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Cantidad sugerida
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-sugerencia"
                            placeholder="0"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Cargar falla
          </Button>{''}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
        </>
    )
}