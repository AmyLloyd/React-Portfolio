import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';

function App() {
 {/*The outlet component will conditionally swap between different pages according to the URL*/}
    return (
        <div>
            <Header />
                <Nav />
            <Outlet /> 
        </div>
    )
};

export default App;
