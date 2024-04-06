
import Index from "views/Index.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import AddFallas from "views/examples/AddFallas";
import Usuarios from "views/examples/Usuarios";

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
    path: "/users",
    name: "Usuarios",
    icon: "ni ni-single-02 text-yellow",
    component: <Usuarios />,
    layout: "/admin",
  },



];
export default routes;
