import 'semantic-ui-css/semantic.min.css';
import { Home } from './components/Home/Home';
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
