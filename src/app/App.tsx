import { MainLayout } from '@/components/layout';
import { AppProviders } from './providers/AppProviders'
import { AppRoutes } from './routes'

export function App() {
  return (
    <AppProviders>
      <MainLayout>
      <AppRoutes />
      </MainLayout>
    </AppProviders>
  )
}
