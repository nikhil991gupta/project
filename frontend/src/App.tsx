import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  // Navigate,
} from "react-router-dom";
import Layout from "./layouts/Layout";
// import Register from "./pages/Register";
// import SignIn from "./pages/SignIn";
// import AddHotel from "./pages/AddHotel";
// import { useAppContext } from "./contexts/AppContext";
// import MyHotels from "./pages/MyHotels";
// import EditHotel from "./pages/EditHotel";
// import Search from "./pages/Search";
// import Detail from "./pages/Detail";
// import Booking from "./pages/Booking";
// import MyBookings from "./pages/MyBookings";
// import Home from "./pages/Home";

const App = () => {
  // const { isLoggedIn } = useAppContext();
  return (
    <Router>
      <Routes>
      <Route
          path="/"
          element={
            <Layout>
              <p>
                HomePage
              </p>
            </Layout>
          }
        />
        <Route path="/search" element={<>Search Page</>}/>
        <Route path="*" element={<Navigate to="/"/>}/>

       
         
      </Routes>
    </Router>
  );
};

export default App;