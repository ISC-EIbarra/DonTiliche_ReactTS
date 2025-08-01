import Footer from './components/Footer/Footer';
import NavBar from './components/NavMenu/Navbar';
import NavMenu from './components/NavMenu/NavMenu';
import Brand_Values from './pages/Brand_Values';
import History_Mission from './pages/History_Mission';
import Home from './pages/Home';
import MenuS from './pages/MenuS';

function App() {
  return (
    <>
      <NavMenu />
      <NavBar />
      <Home />
      <History_Mission />
      <Brand_Values />
      <MenuS />
      <Footer />
    </>
  );
}

export default App;
