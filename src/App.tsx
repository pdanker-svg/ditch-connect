import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PortaalPage from './pages/PortaalPage';
import MeldingPage from './pages/MeldingPage';
import BerichtPage from './pages/BerichtPage';
import PrivacyPage from './pages/PrivacyPage';
import NietGevondenPage from './pages/NietGevondenPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/project/:projectId" element={<PortaalPage />} />
        <Route path="/project/:projectId/melding" element={<MeldingPage />} />
        <Route path="/project/:projectId/bericht" element={<BerichtPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/404" element={<NietGevondenPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
