import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
    Button
  } from "reactstrap";
  // core components
import HeaderFallas from "components/Headers/HeaderFallas.js";
import { Link } from "react-router-dom";
import { getDocs,collection } from "firebase/firestore";  
import { database } from "database/firebase";
import { useEffect, useState } from "react";
  
const Usuarios = () => {
   const [usuarios,setUsuarios] = useState([])
   const usuariosCollection = collection(database, "usuarios")
    
    const getUsuarios = async()=>{
      const users = await getDocs(usuariosCollection)
      setUsuarios(
        users.docs.map((data)=>({...data.data(), id:data.id}))
      )
    } 

    useEffect(()=>{
       getUsuarios()
    },[])

    return (
      <> 
        <HeaderFallas />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Listado de usuarios</h3>
                  
                  <Link to="/admin/profile" className="my-4 btn btn-success" color="success" type="button">
                    Nuevo usuario
                  </Link>
                 
                </CardHeader>
                <Table className="align-items-center table-flush" responsive hover>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Usuario</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Cedula</th>
                      <th scope="col">Rol</th>
                      <th scope="col">Fecha</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    
                      { usuarios.map((user)=>(
                          <tr key={user.id}>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("../../assets/img/theme/user.png")}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                               {user.nombreUsuario}
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>
                      {user.nombreCompleto}
                      </td>
                      <td>
                          {user.cedula}
                      </td>
                      <td>
                      <Badge color="primary" pill>
                      {user.rol}
                    </Badge>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">60%</span> 
                        </div>
  
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Pedido
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Fuera del mercado
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Agotado
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                      ))

                      }
                      
                
                  </tbody>
                </Table>
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  };
  
  export default Usuarios;
  