import Addtask from "./Components/Addtask/Addtask";
import Navbar from "./Components/Navbar/Navbar";
import ShowTodos from "./Components/ShowTodo/Showtodo";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className=" bg-gray-100 mx-auto mt-0 sm:mt-8 w-full sm:w-3/12  h-[100vh] sm:h-[85vh] flex flex-col rounded-md p-2 shadow-lg">
          <Navbar />
          <Routes>
            <Route path="/" element={<Addtask />} />
            <Route path="/showtodos" element={<ShowTodos />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
