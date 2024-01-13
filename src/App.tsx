import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { TopBar } from './components/TopBar';
import { NavBar } from './components/NavBar';

function App() {

  return (
    <>
      <TopBar />
      <NavBar />
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
