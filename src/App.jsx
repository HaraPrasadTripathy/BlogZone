import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import Loader from "./components/Loader";
import MobileWarning from "./MobileWarning";
import CommentIcon from "./components/CommentIcon";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const darkMode = useSelector((state) => state.auth.darkMode);
  const dispatch = useDispatch();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
  };

  useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  

  return !loading ? (
    <>
    {isMobile && <MobileWarning />}
    <div  className={`min-h-screen flex flex-col ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
      style={isMobile ? { filter: 'blur(150px)', pointerEvents: 'none' } : {}}>
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer className="mt-auto" />
      <CommentIcon />
    </div>
    </>
  ) : (
    <Loader />
  );
}

export default App;
