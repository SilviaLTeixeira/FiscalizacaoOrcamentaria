
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import ClientRegister from './Pages/ClientRegister';
import NewEstimate from './Pages/NewEstimate';
import ErrorPage from './Pages/ErrorPage';
import ListClients from './Pages/ListClients';
import ListEstimate from './Pages/ListEstimate';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                    <Route path="clientregister" element={<ClientRegister />} />
                    <Route path="newestimate" element={<NewEstimate />} />
                    <Route path="listclients" element={<ListClients />} />
                    <Route path="listestimate" element={<ListEstimate />} />
                    <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default App;