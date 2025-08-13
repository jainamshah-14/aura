import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Store, Smartphone, Settings, MessageCircle } from 'lucide-react';

export function MainSelector() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-2 text-teal-600">Aura NUPI</h1>
          <p className="text-lg text-gray-600">In-store Loyalty MVP Prototype</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/pos')}>
            <CardHeader className="text-center">
              <Store className="w-12 h-12 mx-auto text-teal-600 mb-2" />
              <CardTitle>POS System</CardTitle>
              <CardDescription>Cashier interface for checkout and loyalty management</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-teal-600 hover:bg-teal-700">
                Launch POS
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/consumer')}>
            <CardHeader className="text-center">
              <Smartphone className="w-12 h-12 mx-auto text-teal-600 mb-2" />
              <CardTitle>NUPI Consumer App</CardTitle>
              <CardDescription>Customer mobile app for wallet and redemptions</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-teal-600 hover:bg-teal-700">
                Launch App
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/admin')}>
            <CardHeader className="text-center">
              <Settings className="w-12 h-12 mx-auto text-teal-600 mb-2" />
              <CardTitle>Admin Portal</CardTitle>
              <CardDescription>IRIS-like admin interface for campaign management</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-teal-600 hover:bg-teal-700">
                Launch Admin
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/whatsapp/9876543210/welcome')}>
            <CardHeader className="text-center">
              <MessageCircle className="w-12 h-12 mx-auto text-teal-600 mb-2" />
              <CardTitle>WhatsApp Demo</CardTitle>
              <CardDescription>Simulated WhatsApp conversation flow</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-teal-600 hover:bg-teal-700">
                View WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Select an interface to explore the loyalty system prototype</p>
        </div>
      </div>
    </div>
  );
}