import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Store } from 'lucide-react';

interface POSLoginProps {
  onLogin: (cashierName: string) => void;
}

export function POSLogin({ onLogin }: POSLoginProps) {
  const [cashierName, setCashierName] = useState('');
  const [pin, setPin] = useState('');

  const handleLogin = () => {
    if (cashierName && pin === '1234') {
      onLogin(cashierName);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Store className="w-12 h-12 mx-auto text-teal-600 mb-4" />
          <CardTitle>POS System Login</CardTitle>
          <p className="text-sm text-gray-600">Enter your credentials to access the cashier interface</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="cashier-name">Cashier Name</Label>
            <Input
              id="cashier-name"
              placeholder="Enter your name"
              value={cashierName}
              onChange={(e) => setCashierName(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="pin">PIN</Label>
            <Input
              id="pin"
              type="password"
              placeholder="Enter PIN (demo: 1234)"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            />
          </div>
          <Button 
            className="w-full bg-teal-600 hover:bg-teal-700"
            onClick={handleLogin}
            disabled={!cashierName || !pin}
          >
            Login to POS
          </Button>
          <p className="text-xs text-gray-500 text-center">
            Demo PIN: 1234
          </p>
        </CardContent>
      </Card>
    </div>
  );
}