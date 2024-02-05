import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

import './App.css'

function App() {
 {/*The outlet component will conditionally swap between different pages according to the URL*/}
    return (
        <div className="body">
            <Header 
             />
            <Outlet /> 
            <Footer />
        </div>
    )
};

export default App;
