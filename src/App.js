import logo from './logo.svg';
import './App.css';
import Header  from './components/Header/Header';
import CalenderContainer from './components/Calander/CalenderContainer'
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'
import MainContext from './Context/Context';
function App() {
  return (
    <div className="App">
       <MainContext>
       <Header/>
       <Service/>
       <CalenderContainer/>
       <Contact/>
       <Footer/>
       </MainContext>
    </div>
  );
}

export default App;
