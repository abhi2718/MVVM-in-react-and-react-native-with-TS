import CombinedProviders from "./context";
import HomeScreen from "./screens/home/home";

function App() {
  return (
    <div>
      <CombinedProviders>
      <HomeScreen />
      </CombinedProviders>
    </div>
  );
}

export default App;
