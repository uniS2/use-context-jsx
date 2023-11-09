import "./App.css";
import Page from "./components/Page";
import { useAtom } from 'jotai'
import { darkAtom } from './Jotai'

function App() {
  const [isDark, setIsDark] = useAtom(darkAtom);
  return <Page isDark={isDark} toggleThema={() => setIsDark(!isDark)} />;
}

export default App;
