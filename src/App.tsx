import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { TopBar } from './components/TopBar';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

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
      <Footer />
    </>
  );
}

export default App;
