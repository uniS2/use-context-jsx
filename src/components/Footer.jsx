import { useStore } from "../UseStore";

export default function Footer() {
  const { isDark, setIsDark } = useStore();

  return (
    <footer className={`footer ${isDark ? "dark" : "white"}`}>
      <button onClick={setIsDark}>테마 변경</button>
    </footer>
  );
}
