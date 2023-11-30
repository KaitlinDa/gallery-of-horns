import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Gallery from './components/Gallery';


function App() {
  return (
    <>
    <Header title="Gallery of Horns" />
    <Main />
    <Gallery />
    <Footer year="2023"/>
    </>
  );
}



export default App;

