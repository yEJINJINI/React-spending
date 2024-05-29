import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
