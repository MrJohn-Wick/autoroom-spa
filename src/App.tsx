import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { SocialMenu } from './components/SocialMenu';
import { Calculator } from './pages/Calculator';
import { Contacts } from './pages/Contacts';
import { Home } from './pages/Home';
import { Tracking } from './pages/Tracking';
import { TrackingSearch } from './pages/TrackingSearch';
import { CookieBanner } from './components/CookieBanner';

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
        </Routes>
      </section>
      <Footer />
      <SocialMenu />
      <CookieBanner />
    </>
  );
}

export default App;
