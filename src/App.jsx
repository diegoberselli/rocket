import { ToastContainer } from "react-toastify";
import Routes from "./routes";
import GlobalStyles from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Routes />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
