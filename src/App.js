import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import globalStore from './redux/configureStore';
import Messages from './components/messages';
import Home from './components/home';

function App() {
  return (
    <Provider store={globalStore}>
      <BrowserRouter>
        <div className="App">
          <h1>Wellcome to the messages app</h1>
          <Routes>
            <Route path="/" exact element={<Messages />} />
            <Route path="/home" exact element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
