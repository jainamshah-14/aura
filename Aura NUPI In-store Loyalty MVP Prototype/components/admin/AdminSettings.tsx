import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { 
  Settings, 
  Gift, 
  Target,
  Gamepad2,
  Shield
} from 'lucide-react';

export function AdminSettings() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">System Settings</h1>
        <p className="text-gray-600">Configure loyalty rules and system preferences</p>
      </div>

      {/* Loyalty Rules */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gift className="w-5 h-5" />
            Points & Rewards Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="points-per-rupee">Points per ₹10 spent</Label>
              <Input id="points-per-rupee" type="number" defaultValue="1" />
            </div>
            <div>
              <Label htmlFor="welcome-points">Welcome bonus points</Label>
              <Input id="welcome-points" type="number" defaultValue="50" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="silver-threshold">Silver tier threshold</Label>
              <Input id="silver-threshold" type="number" defaultValue="500" />
            </div>
            <div>
              <Label htmlFor="gold-threshold">Gold tier threshold</Label>
              <Input id="gold-threshold" type="number" defaultValue="1000" />
            </div>
            <div>
              <Label htmlFor="platinum-threshold">Platinum tier threshold</Label>
              <Input id="platinum-threshold" type="number" defaultValue="2000" />
            </div>
          </div>

          <Button className="bg-teal-600 hover:bg-teal-700">
            Save Loyalty Rules
          </Button>
        </CardContent>
      </Card>

      {/* Gamification Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gamepad2 className="w-5 h-5" />
            Gamification Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="daily-spin">Daily Spin Wheel</Label>
              <p className="text-sm text-gray-600">Allow users to spin once per day</p>
            </div>
            <Switch id="daily-spin" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="scratch-cards">Scratch Cards</Label>
              <p className="text-sm text-gray-600">Enable scratch card rewards</p>
            </div>
            <Switch id="scratch-cards" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="daily-quiz">Daily Quiz</Label>
              <p className="text-sm text-gray-600">Enable daily knowledge quiz</p>
            </div>
            <Switch id="daily-quiz" defaultChecked />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="spin-min-points">Min spin reward points</Label>
              <Input id="spin-min-points" type="number" defaultValue="5" />
            </div>
            <div>
              <Label htmlFor="spin-max-points">Max spin reward points</Label>
              <Input id="spin-max-points" type="number" defaultValue="100" />
            </div>
          </div>

          <Button className="bg-teal-600 hover:bg-teal-700">
            Save Gamification Settings
          </Button>
        </CardContent>
      </Card>

      {/* System Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            System Preferences
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="auto-whatsapp">Automatic WhatsApp receipts</Label>
              <p className="text-sm text-gray-600">Send receipts automatically after purchase</p>
            </div>
            <Switch id="auto-whatsapp" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="campaign-notifications">Campaign notifications</Label>
              <p className="text-sm text-gray-600">Send push notifications for campaigns</p>
            </div>
            <Switch id="campaign-notifications" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="tier-upgrade-notifications">Tier upgrade notifications</Label>
              <p className="text-sm text-gray-600">Notify users when they reach new tiers</p>
            </div>
            <Switch id="tier-upgrade-notifications" defaultChecked />
          </div>

          <Button className="bg-teal-600 hover:bg-teal-700">
            Save System Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}