import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskOne from "../pages/taskOne/TaskOne";
import TaskTwo from "../pages/taskTwo/TaskTwo";
import VideoTask from "../pages/VideoTask/VideoTask";
import TaskThree from "../pages/taskThree/TaskThree";
import Homepage from "../pages/HomePage";


const PageRoute = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/taskone" element={<TaskOne />} />
          <Route path="/tasktwo" element={<TaskTwo />} />
          <Route path="/taskthree" element={<TaskThree/>} />

          <Route path="/video" element={<VideoTask />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default PageRoute
