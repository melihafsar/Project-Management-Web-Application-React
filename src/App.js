import MainRoute from "../src/routes/MainRoute";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Project management System Section of Frontend

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <MainRoute/>
    </div>
  );
}

export default App;
