import { Route, Routes } from 'react-router-dom';

import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { TopBar } from './components/TopBar';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      <TopBar />
      <NavBar />
      <section>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;
