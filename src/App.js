import "./App.css";
import Page from "./components/Page";
import { useSetAtom, useAtomValue } from 'jotai'
import { darkAtom } from './Jotai'

function App() {
  // const [anime, setAnime] = useAtom(animeAtom)
  const isDark = useAtomValue(darkAtom);  // write: 생성된 atom 값을 update만
  const setIsDark = useSetAtom(darkAtom); // read: 생성된 atom 값을 read만
  return <Page isDark={isDark} toggleThema={() => setIsDark(!isDark)} />;
}

export default App;
