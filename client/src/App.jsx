import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./router/AppRoutes";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>       
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="grow">
          <AppRoutes />
        </main>

        {/* Footer */}
        <Footer />
    </Router>
  );
}

export default App;
