import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarMenu from './Components/NavBarMenu'
import Introduction from './Components/Introduction'
import Services from './Components/Services';

function App() {
  return (
    <div>
      <NavBarMenu />
      <Introduction />
      <Services />
    </div>
  );
}

export default App;
