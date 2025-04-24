import Footer from './components/Footer/Footer';
import NavMenu from './components/NavMenu/NavMenu';
import Brand_Values from './pages/Brand_Values';
import History_Mission from './pages/History_Mission';
import Home from './pages/Home';
import Menu from './pages/Menu';

function App() {
  return (
    <>
      <NavMenu />
      <Home />
      <History_Mission />
      <Brand_Values />
      <Menu />
      <Footer />
    </>
  );
}

export default App;
