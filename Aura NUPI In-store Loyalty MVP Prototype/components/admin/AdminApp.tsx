import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { 
  ArrowLeft, 
  Users, 
  Settings, 
  BarChart3, 
  MessageSquare,
  Gift,
  Target,
  HelpCircle,
  Home,
  Menu,
  X,
  Gamepad2,
  Bell,
  Search,
  Calendar,
  Filter
} from 'lucide-react';
import { AdminDashboard } from './AdminDashboard';
import { AdminCampaigns } from './AdminCampaigns';
import { AdminAnalytics } from './AdminAnalytics';
import { AdminUsers } from './AdminUsers';
import { AdminWhatsApp } from './AdminWhatsApp';
import { AdminSettings } from './AdminSettings';
import { AdminSupport } from './AdminSupport';
import { AdminGamification } from './AdminGamification';

export function AdminApp() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { path: '/admin', icon: Home, label: 'Dashboard', exact: true },
    { path: '/admin/analytics', icon: BarChart3, label: 'Analytics' },
    { path: '/admin/users', icon: Users, label: 'Users' },
    { path: '/admin/campaigns', icon: Target, label: 'Campaigns' },
    { path: '/admin/gamification', icon: Gamepad2, label: 'Gamification' },
    { path: '/admin/whatsapp', icon: MessageSquare, label: 'WhatsApp' },
    { path: '/admin/settings', icon: Settings, label: 'Settings' },
    { path: '/admin/support', icon: HelpCircle, label: 'Support' }
  ];

  const isActive = (path: string, exact = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-[#f8fafb] flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0FA3A3] to-[#0d8a8a] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">I</span>
            </div>
            <div>
              <h2 className="font-bold text-gray-900">IRIS Admin</h2>
              <p className="text-xs text-gray-500">Aura Loyalty Portal</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <nav className="flex-1 px-4 py-6">
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path, item.exact);
              
              return (
                <button
                  key={item.path}
                  onClick={() => {
                    navigate(item.path);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                    active
                      ? 'bg-gradient-to-r from-[#0FA3A3] to-[#0d8a8a] text-white shadow-lg shadow-[#0FA3A3]/25'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </nav>

        <div className="px-4 py-6 border-t border-gray-200">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/')}
            className="w-full border-gray-200 hover:bg-gray-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Exit Admin
          </Button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-25 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between lg:px-8">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden hover:bg-gray-100"
            >
              <Menu className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="font-bold text-gray-900 text-xl">
                {navItems.find(item => isActive(item.path, item.exact))?.label || 'Admin Portal'}
              </h1>
              <p className="text-gray-500 text-sm">Manage your loyalty program</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                <Calendar className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-gray-100 relative">
                <Bell className="w-5 h-5" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </Button>
            </div>
            
            <div className="flex items-center gap-3">
              <Badge className="bg-green-100 text-green-700 border-green-200">
                System Online
              </Badge>
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-gradient-to-br from-[#0FA3A3] to-[#0d8a8a] text-white font-semibold">
                  A
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-auto bg-[#f8fafb]">
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/users" element={<AdminUsers />} />
            <Route path="/campaigns" element={<AdminCampaigns />} />
            <Route path="/gamification" element={<AdminGamification />} />
            <Route path="/analytics" element={<AdminAnalytics />} />
            <Route path="/whatsapp" element={<AdminWhatsApp />} />
            <Route path="/settings" element={<AdminSettings />} />
            <Route path="/support" element={<AdminSupport />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}