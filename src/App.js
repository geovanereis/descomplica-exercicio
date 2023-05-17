import { Login } from "@mui/icons-material";
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
      <Menu />
    </div>
    
  );
}

export default App;
