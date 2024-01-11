import { BrowserRouter, Route, Routes } from "react-router-dom"
import Videos from "./pages/Videos"
import VideoDetails from "./pages/VideoDetails"
import UploadVideo from "./pages/UploadVideo"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Videos} />
        <Route path="/video/upload" Component={UploadVideo} />
        <Route path="/video/:id" Component={VideoDetails} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
