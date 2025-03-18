import Aside from "./components/Aside";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat";
import RecommendedOffer from "./components/RecommendedOffer";

function App() {
  return (
    <div className="flex items-start justify-start">
      <Aside />
      <div className="lg:w-4/5">
        <Navbar/>
        <div className="flex w-full">
          <Chat/>
          <RecommendedOffer/>
        </div>
      </div>
    </div>
  );
}

export default App;
