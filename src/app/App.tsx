// import { AppProviders } from './providers/AppProviders'
// import { AppRoutes } from './routes'

// export function App() {
//   return (
//     <div className="text-center bg-app-main">App</div>
//   )
// }

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../auth/Login';
import Signup from '../auth/signup';
import ForgotPassword from '../auth/ForgotPassword';
import ResetPassword from '../auth/ResetPassword';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
