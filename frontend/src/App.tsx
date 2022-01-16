import './App.scss';

import {
  Route,
  Routes
} from "react-router-dom";

import Footer from './common/footer/Footer';
import Header from './common/header/Header';
import Result from './pages/result/Result';
import Splash from './pages/splash/Splash';
import Test from './pages/test/Test';

const routes = [
  { path: "/", name: 'Splash', element: <Splash /> },
  { path: "/result", name: 'Result', element: <Result /> },
  { path: "/test", name: 'Test', element: <Test /> },
]

function App() {
  return (
    <div className="App-maincontainer">
      <Header />
      <div className="App-subcontainer">
        <div className="App-content">
          <Routes>
            {routes.map(({ path, name, element }) => (
              <Route path={`${path}`} key={`${name}`} element={element} />
            ))}
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
