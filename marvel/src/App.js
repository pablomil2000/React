import './App.css';
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/home"
import Series from "./pages/series"
import Comincs from "./pages/comics"
import Error from "./pages/errror404"

function App() {
  return (
    <div>
      {/* Version 6 */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/comics" element={<Comincs />} />



          {/* Si ninguna pagina coincide */}
          <Route path="*" element={<Error />} />
        </Routes>

        {/* Version 5 */}
        {/* <Routes>
          <Route patch="/" exact component={() => <Home />} />
          <Route patch="/inicio" exact component={() => <Home />} />
          <Route patch="/series" exact component={() => <Series />} />
          <Route patch="/comics" exact component={() => <Comincs />} />
          <Route component={() => <Error />} />
        </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
