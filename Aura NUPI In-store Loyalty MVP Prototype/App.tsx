import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LoyaltyProvider } from './contexts/LoyaltyContext';
import { MainSelector } from './components/MainSelector';
import { POSApp } from './components/pos/POSApp';
import { ConsumerApp } from './components/consumer/ConsumerApp';
import { AdminApp } from './components/admin/AdminApp';
import { WhatsAppSimulator } from './components/whatsapp/WhatsAppSimulator';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <LoyaltyProvider>
      <Router>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<MainSelector />} />
            <Route path="/pos/*" element={<POSApp />} />
            <Route path="/consumer/*" element={<ConsumerApp />} />
            <Route path="/admin/*" element={<AdminApp />} />
            <Route path="/whatsapp/:phone/:messageId" element={<WhatsAppSimulator />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </LoyaltyProvider>
  );
}