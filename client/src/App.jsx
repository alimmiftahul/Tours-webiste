import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import TourDetails from './pages/TourDetails';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import TourContextProvider from './components/TourContextProvider';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-white border">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          path="/tours/:id"
          element={<TourDetails />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
