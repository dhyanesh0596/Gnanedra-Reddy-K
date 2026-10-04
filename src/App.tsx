import { HelmetProvider } from 'react-helmet-async'
import { HashRouter } from 'react-router-dom'
import { AppRoutes } from '@/routes/AppRoutes'
import { AppShell } from '@/components/AppShell'

function App() {
  return (
    <HelmetProvider>
      <HashRouter>
        <AppShell>
          <AppRoutes />
        </AppShell>
      </HashRouter>
    </HelmetProvider>
  )
}

export default App
