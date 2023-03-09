import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
  Outlet
} from "react-router-dom";

// import Header from './Views/Header.jsx';
 import Sidebar from './views/Sidebar';
// import Footer  from './Views/Footer.jsx';

import AddStudents from './views/AddStudents.jsx';
import DisplayStudents from './views/DisplayStudents.jsx';
import UpdateStudents from './views/UpdateStudents.jsx';
import AddTeachers from './views/AddTeachers.jsx';
import DisplayTeachers from "./views/DisplayTeachers.jsx";
import UpdateTeachers from "./views/UpdateTeachers.jsx";
import AddProducts from './views/AddProducts.jsx';
import DisplayProducts  from "./views/DisplayProducts.jsx";
import UpdateProducts from "./views/UpdateProducts.jsx";
import AddBabynames from './views/AddBabynames.jsx';
import DisplayBabynames  from "./views/DisplayBabynames.jsx";
import UpdateBabynames from "./views/UpdateBabynames.jsx";
import AddPlayers from "./views/AddPlayers.jsx";
import DisplayPlayers from "./views/DisplayPlayers.jsx";
import UpdatePlayers from "./views/UpdatePlayers.jsx";


// import Dashboard from './Views/Dashboard';
// import Test1 from './Views/Test1';
// import AddTeacher from './Views/AddTeacher.jsx';
// import UpdateTeacher from './Views/UpdateTeacher.jsx';
// import DisplayTeachers from './Views/DisplayTeachers.jsx';
// import TeacherDocuments from './Views/TeacherDocuments';
// import UserContext from './Views/UserContext.js'
// import Test2 from "./Views/Test2.jsx";
// import AddForm from "./Views/AddForm.jsx";
const Layout = () => {
  return (
    <>
      {/* <Header></Header> */}
      <Sidebar></Sidebar>
      <Outlet/>
      {/* <Footer/> */}
    </>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      // {
      //   path: "/",
      //   element: <Dashboard/>,
      // },
      // {
      //   path: "/Test1",
      //   element: <Test1/>,
      // },
      {
        path: "/AddStudent",
        element: <AddStudents/>,
      },
      {
        path: "/DisplayStudents",
        element: <DisplayStudents/>,
      },
      {
        path: "/UpdateStudents/:id",
        element: <UpdateStudents/>,
      },
      {
        path: "/AddTeacher",
        element: <AddTeachers/>,
      },
      {
        path: "/DisplayTeachers",
        element: <DisplayTeachers/>,
      },
      {
        path: "/UpdateTeacher/:id",
        element: <UpdateTeachers/>,
      },
      {
        path: "/AddProduct",
        element: <AddProducts/>,
      },
      {
        path: "/DisplayProducts",
        element: <DisplayProducts/>,
      },
      {
        path: "/UpdateProducts/:id",
        element: <UpdateProducts/>,
      },
      {
        path: "/AddBabyname",
        element: <AddBabynames/>,
      },
      {
        path: "/DisplayBabynames",
        element: <DisplayBabynames/>,
      },
      {
        path: "/UpdateBabynames/:id",
        element: <UpdateBabynames/>,
      },
      {
        path: "/Addplayer",
        element: <AddPlayers/>,
      },
      {
        path: "/DisplayPlayers",
        element: <DisplayPlayers/>,
      },
      {
        path: "/UpdatePlayers/:id",
        element: <UpdatePlayers/>,
      },






      // {
      //   path: "/TeacherDocuments/:id",
      //   element: <TeacherDocuments/>,
      // },
      // {
      //   path: "/Test2",
      //   element: <Test2/>,
      // },
      // {
      //   path: "/AddForm",
      //   element: <AddForm/>,
      // },
    ]
  }
]);

function App() {
  return (
    <>
     
      <RouterProvider router={router} />
    </>
  );
}
export default App;
