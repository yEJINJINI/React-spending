import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import ExpenseProvider from "./contexts/ExpenseContext";

export default function App() {
  return (
    <>
      <ExpenseProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </ExpenseProvider>
    </>
  );
}
