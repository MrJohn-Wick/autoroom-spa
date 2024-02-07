import { Route, Routes } from 'react-router-dom';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { SocialMenu } from './components/SocialMenu';
import { Calculator } from './pages/Calculator';
import { Home } from './pages/Home';
import { Tracking } from './pages/Tracking';

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
          <Route
            path="/calculator"
            element={<Calculator />}
          />
          <Route
            path="/tracking"
            element={<Tracking />}
          />
        </Routes>
      </section>
      <Footer />
      <SocialMenu />
    </>
  );
}

export default App;
