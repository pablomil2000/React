import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarMenu from './Components/NavBarMenu'
import Introduction from './Components/Introduction'
import Services from './Components/Services';
import DynamicForm from './Components/DynamicForm';
function App() {
  return (
    <div>
      <NavBarMenu />
      <Introduction />
      <Services />
      <DynamicForm />
    </div>
  );
}

export default App;
