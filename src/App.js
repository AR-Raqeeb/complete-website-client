import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddService from "./components/Daashboard/AddService/AddService";
import AllAdmissions from "./components/Daashboard/AllAdmissions/AllAdmissions";
import MakeAdmin from "./components/Daashboard/MakeAdmin/MakeAdmin";
import ManageService from "./components/Daashboard/ManageService/ManageService";
import Admission from "./components/Daashboard/Admission/Admission";
import AdmissionList from "./components/Daashboard/AdmissionList/AdmissionList";
import Review from "./components/Daashboard/Review/Review";
import Home from "./components/Home/Home/Home";
import GoogleLogin from "./components/Login/GoogleLogin/GoogleLogin";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import NothingFound from "./components/shared/NothingFound/NothingFound";

export const userContext = createContext();
export const admissionContext = createContext();
function App() {
  const [loggedUser,setLoggedUser] = useState({});
  const [admission,setAdmission] = useState({});
  return (
    <userContext.Provider value={[loggedUser,setLoggedUser]}>
      <admissionContext.Provider value={[admission,setAdmission]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <GoogleLogin />
          </Route>
          <PrivateRoute path="/admission">
            <Admission />
          </PrivateRoute>
          <PrivateRoute path="/allAdmissions">
            <AllAdmissions />
          </PrivateRoute>
          <PrivateRoute path="/admissionList">
            <AdmissionList />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/manageService">
            <ManageService />
          </PrivateRoute>
          <Route to='*'>
            <NothingFound/>
          </Route>
        </Switch>
      </Router>
      </admissionContext.Provider>
    </userContext.Provider>
  );
}

export default App;
