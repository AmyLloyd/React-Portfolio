import { Outlet } from 'react-router-dom';
import Navbar from './components/UI/Navbar';
import Heading from './components/UI/Heading';

function App() {
    //The outlet component will conditionally swap between different pages according to the URL
    return (
        <>
            <Navbar />
            <Heading />
            <Outlet /> 
        </>
    );
}

export default App;
