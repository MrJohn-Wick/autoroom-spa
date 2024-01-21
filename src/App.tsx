import { Route, Routes } from 'react-router-dom';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      <Header />
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
