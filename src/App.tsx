import './App.css';
import { useRoutes } from 'react-router-dom'
import { routes } from './routes/path';
import { AuthProvider } from './routes/auth';

function App() {
  const element = useRoutes(routes)
  return (
    <AuthProvider>
      <div className="App">
        {element}
      </div>
    </AuthProvider>
  );
}

export default App;
