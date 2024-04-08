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
import { ModalFallas } from "components/Modal/ModalFallas";
import {collection, getDocs, getDoc,deleteDoc} from 'firebase/firestore'
import {database} from 'database/firebase.js'
import { useEffect, useState } from "react";

const AddFallas = () => {

  const [fallas,setFallas] = useState([])

  const fallasCollection = collection(database, "fallas")

  const getFallas = async ()=>{
  const fails = await getDocs(fallasCollection)
   setFallas(
    fails.docs.map((doc)=>({...doc.data(), id:doc.id}))
   )
   console.log(fallas)
  }

  useEffect(()=>{
   getFallas()
  },[])

  return (
    <> 
      <HeaderFallas />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Listado de fallas</h3>
                <ModalFallas />
               
              </CardHeader>
              <Table className="align-items-center table-flush" responsive hover>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Existencia</th>
                    <th scope="col">Sugerido</th>
                    <th scope="col">Status</th>
                    <th scope="col">Usuario</th>
                    <th scope="col">Fecha</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  { fallas.map((data)=>(                      
                    <tr key={data.id}>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("../../assets/img/theme/bootstrap.jpg")}
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            {data.medicamentos}
                          </span>
                        </Media>
                      </Media>
                    </th>

                    <td>{data.cantidadExistente}</td>
                    <td>{data.cantidadSugerida}</td>

                    <td>
                    <Badge color="primary" pill>
                      {data.statusFallas}
                    </Badge>
                    </td>

                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">{data.usuario}</span> 
                      </div>
                    </td>

                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">{data.usuarios}</span> 
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
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Pedido
                          </DropdownItem>
                          <DropdownItem
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Fuera del mercado
                          </DropdownItem>
                          <DropdownItem
                            href="#"
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

export default AddFallas;
