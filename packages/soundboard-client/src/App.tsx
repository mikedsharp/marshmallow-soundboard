import SoundBoardGrid from "./components/SoundBoardGrid";
function App() {
  const soundString: string = localStorage.getItem("sounds") || "";
  const sounds = JSON.parse(soundString);
  return <SoundBoardGrid sounds={sounds} />;
}

export default App;
