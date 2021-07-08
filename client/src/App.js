import './App.css';
import PageIndex from './pages/PageIndex';
import { AuthProvider } from './components/AuthContext/index';

function App() {
  return (
    <AuthProvider>
      <PageIndex />
    </AuthProvider>
  );
}

export default App;