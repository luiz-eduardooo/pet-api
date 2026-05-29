import { Router } from "./app/routes/Router"
import { LandingPage } from "./features/landing/pages/LandingPage"
import { AuthProvider } from "./shared/contexts/AuthContext"

function App() {

  return (
    <>
    <AuthProvider>
      <Router>
    <LandingPage/>
    </Router>
    </AuthProvider>
    </>
  )
}

export default App
