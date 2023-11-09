import "./App.css";
import Page from "./components/Page";
import { useSnapshot } from "valtio";
import { darkState } from './Valtio'

function App() {
  const isDark = useSnapshot(darkState).isDark  // read-only
  return <Page isDark={isDark} toggleThema={() => darkState.isDark = !isDark} />;
}

export default App;
