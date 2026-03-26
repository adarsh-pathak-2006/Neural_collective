import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Join from './pages/Join';
import Verify from './pages/Verify';
import DevHub from './pages/DevHub';
import Onboarding from './pages/Onboarding';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/join" element={<Join />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/dev-hub" element={<DevHub />} />
          <Route path="/onboarding" element={<Onboarding />} />
        </Routes>
      </Layout>
    </Router>
  );
}
