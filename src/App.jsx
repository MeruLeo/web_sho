import Admin from "./admin/Admin";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="/vhAdmin3434opas07227" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
