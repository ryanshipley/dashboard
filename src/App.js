import logo from './logo.svg';
import './App.css';
import Sidebar from "./components/sidebar";
import Reviews from "./components/reviews";
import Rating from "./components/average-rating";

function App() {
  return (
    <div>
      <Sidebar/>
      <Reviews/>
      <Rating/>
    </div>
  );
}

export default App;
