import Index from "views/Index.js";
import AddFallas from "views/examples/AddFallas";
import Usuarios from "views/examples/Usuarios";
import Productos from "views/examples/Productos";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/Addfallas",
    name: "Fallas",
    icon: "ni ni-time-alarm text-danger",
    component: <AddFallas/>,
    layout: "/admin",
  },

  {
    path: "/productos",
    name: "Productos",
    icon: "ni ni-box-2 text-info",
    component: <Productos />,
    layout: "/admin",
  },


  {
    path: "/users",
    name: "Usuarios",
    icon: "ni ni-single-02 text-yellow",
    component: <Usuarios />,
    layout: "/admin",
  },



];
export default routes;
