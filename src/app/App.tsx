import { Toaster } from 'sonner';
import { AppProviders } from './providers/AppProviders';
import { AppRoutes } from './routes';

export function App() {
  return (
    <AppProviders>
      <AppRoutes />
      <Toaster position="top-right" />
    </AppProviders>
  );
}

export default App;
