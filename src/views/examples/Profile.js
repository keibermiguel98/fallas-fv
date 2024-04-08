
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import database from 'database/firebase.js'
import { addDoc } from "firebase/firestore";
import { useState } from "react";

const Profile = () => {
   const [nameUser, setNameUser] = useState('')
   const [correo, setCorreo] = useState('')
   const [nameComplete, setNameComplete] = useState('')
   const [telefono,setTelefono] = useState('')
   const [password,setPassword] = useState('')
   const [rol, setRol] = useState('') 
   const [direccion,setDireccion] = useState('')
   const [sobre,setSobre] = useState('')

   const handleGetNameUser =(e)=>{
     setNameUser(e.target.value)
   }

   const handleGetCorreo =(e)=>{
    setCorreo(e.target.value)
   }

   const handleSetNameComplete = (e)=>{
    setNameComplete(e.target.value)
   }

   const handleSetTelefono = (e)=>{
    setTelefono(e.target.value)
   }

   const handleSetPassword = (e)=>{
    setPassword(e.target.value)
   }

   const handleSetRol = (e)=>{
     setRol(e.target.value)
   }

   const handleSetDireccion = (e)=>{
    setDireccion(e.target.value)
   }

   const handleSobre = (e)=>{
    setSobre(e.target.value)
   }

   const handleSendDataUser=()=>{
     const data = {
      username: nameUser,
      correo:correo,
      password:password,
      rol: rol
     }
     console.log(data)
   }

  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../../assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-10 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  <Input type="file" className="form-control"/>
                
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-0">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <span className="heading">22</span>
                        <span className="description">Friends</span>
                      </div>
                      <div>
                        <span className="heading">10</span>
                        <span className="description">Photos</span>
                      </div>
                      <div>
                        <span className="heading">89</span>
                        <span className="description">Comments</span>
                      </div>
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h3>
                    Jessica Jones
                    <span className="font-weight-light">, 27</span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    Bucharest, Romania
                  </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    University of Computer Science
                  </div>
                  <hr className="my-4" />
                  <p>
                    Ryan — the name taken by Melbourne-raised, Brooklyn-based
                    Nick Murphy — writes, performs and records all of his own
                    music.
                  </p>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Show more
                  </a>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Cuenta de usuario</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Settings
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Datos de usuario
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Nombre de usuario
                          </label>
                          <Input
                            value={nameUser}
                            onChange={handleGetNameUser}
                            className="form-control-alternative"
                            id="input-username"
                            placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Correo electronico
                          </label>
                          <Input
                            value={correo}
                            onChange={handleGetCorreo}
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="jesse@example.com"
                            type="email"
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
                            Nombre completo
                          </label>
                          <Input
                            value={nameComplete}
                            onChange={handleSetNameComplete}
                            className="form-control-alternative"
                            id="input-first-name"
                            placeholder="First name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Telefono
                          </label>
                          <Input
                            value={telefono}
                            onChange={handleSetTelefono}
                            className="form-control-alternative"
                            id="input-last-name"
                            placeholder="Phone"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>

                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Informacion de seguridad
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                    
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Contraseña
                          </label>
                          <Input
                            value={password}
                            onChange={handleSetPassword}
                            className="form-control-alternative"
                            id="input-last-name"
                            placeholder="Password"
                            type="password"
                          />
                        </FormGroup>
                      </Col>

                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Rol
                          </label>
                        
                          <select className="form-control" value={rol} onChange={handleSetRol}>
                              <option value="Administrador">Administrador</option>
                              <option value="Encargado">Encargado</option>
                              <option value="Captador">Captador</option>
                          </select>
                        </FormGroup>
                      </Col>
                    
                      
                    </Row>
               
                  </div>



                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Informacion de contacto
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Direccion
                          </label>
                          <Input
                            value={direccion}
                            onChange={handleSetDireccion}
                            className="form-control-alternative"
                            id="input-address"
                            placeholder="Home Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
               
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">Sobre mi</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label>🧩</label>
                      <Input
                        value={sobre}
                        onChange={handleSobre}
                        className="form-control-alternative"
                        placeholder="A few words about you ..."
                        rows="4"
                        type="textarea"
                      />
                    </FormGroup>
                    <Button color="info" onClick={handleSendDataUser}>Enviar</Button>
                  </div>
                
                </Form>
               
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
