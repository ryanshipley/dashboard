import logo from './logo.svg';
import './App.css';
import Sidebar from "./components/sidebar";
import Reviews from "./components/reviews";
import Rating from "./components/average-rating";
import Sentiment from "./components/sentiment-analysis";

function App() {
  return (
    <div>
      <Sidebar/>
      <Reviews/>
      <Rating/>
      <Sentiment/>
    </div>
  );
};

export default App;
