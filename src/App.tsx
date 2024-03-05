import { Route, Routes } from 'react-router-dom';

import { CookieBanner } from './components/CookieBanner';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { SocialMenu } from './components/SocialMenu';
import { Calculator } from './pages/Calculator';
import { Contacts } from './pages/Contacts';
import { Contract } from './pages/Contract';
import { Home } from './pages/Home';
import { Pay } from './pages/Pay';
import { Tracking } from './pages/Tracking';
import { TrackingSearch } from './pages/TrackingSearch';

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
            element={<TrackingSearch />}
          />
          <Route
            path="/tracking/:id"
            element={<Tracking />}
          />
          <Route
            path="/contacts"
            element={<Contacts />}
          />
          <Route
            path="/contract"
            element={<Contract />}
          />
          <Route
            path="/pay"
            element={<Pay />}
          />
        </Routes>
      </section>
      <Footer />
      <SocialMenu />
      <CookieBanner />
    </>
  );
}

export default App;
