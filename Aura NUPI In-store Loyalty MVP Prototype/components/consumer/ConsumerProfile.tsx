import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { 
  User, 
  Phone, 
  Mail, 
  Calendar,
  Settings,
  HelpCircle,
  Shield,
  Bell,
  Star,
  Edit,
  LogOut
} from 'lucide-react';
import { toast } from 'sonner';

export function ConsumerProfile({ user }: { user: any }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleSave = () => {
    // In a real app, this would call an API
    toast.success('Profile updated successfully!');
    setIsEditing(false);
  };

  const handleCreateTicket = () => {
    toast.success('Support ticket created! We\'ll get back to you soon.');
  };

  const tierBenefits = {
    Bronze: ['Basic rewards', 'Email support'],
    Silver: ['Enhanced rewards', 'Priority support', '2x points on weekends'],
    Gold: ['Premium rewards', 'Phone support', '3x points on special days', 'Free delivery'],
    Platinum: ['Exclusive rewards', 'Dedicated support', '5x points on birthdays', 'Premium experiences']
  };

  const currentBenefits = tierBenefits[user.tier as keyof typeof tierBenefits] || [];

  return (
    <div className="p-4 space-y-6">
      <div className="text-center">
        <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl font-bold text-white">
            {user.name.split(' ').map((n: string) => n[0]).join('')}
          </span>
        </div>
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <Badge className="bg-teal-100 text-teal-800 mt-2">{user.tier} Member</Badge>
      </div>

      {/* Profile Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Profile Information
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditing(!isEditing)}
            >
              <Edit className="w-4 h-4 mr-2" />
              {isEditing ? 'Cancel' : 'Edit'}
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {isEditing ? (
            <>
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={editedUser.name}
                  onChange={(e) => setEditedUser({...editedUser, name: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={editedUser.email}
                  onChange={(e) => setEditedUser({...editedUser, email: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={editedUser.phone}
                  onChange={(e) => setEditedUser({...editedUser, phone: e.target.value})}
                />
              </div>
              <Button onClick={handleSave} className="w-full bg-teal-600 hover:bg-teal-700">
                Save Changes
              </Button>
            </>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <User className="w-4 h-4 text-gray-600" />
                <span>{user.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-600" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-600" />
                <span>{user.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-gray-600" />
                <span>Member since {new Date(user.registered_at).toLocaleDateString('en-IN', {
                  month: 'long',
                  year: 'numeric'
                })}</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Tier Benefits */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5" />
            {user.tier} Tier Benefits
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {currentBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Account Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="w-4 h-4 text-gray-600" />
              <span>Push Notifications</span>
            </div>
            <Badge variant="secondary">Enabled</Badge>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gray-600" />
              <span>Email Notifications</span>
            </div>
            <Badge variant="secondary">Enabled</Badge>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-4 h-4 text-gray-600" />
              <span>Privacy Settings</span>
            </div>
            <Button variant="outline" size="sm">
              Manage
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Support */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5" />
            Support
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button 
            variant="outline" 
            className="w-full justify-start"
            onClick={handleCreateTicket}
          >
            <HelpCircle className="w-4 h-4 mr-3" />
            Create Support Ticket
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full justify-start"
          >
            <Phone className="w-4 h-4 mr-3" />
            Contact Support
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full justify-start"
          >
            <Mail className="w-4 h-4 mr-3" />
            Email Us
          </Button>
        </CardContent>
      </Card>

      {/* Account Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Account Statistics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <span>Total Purchases</span>
            <span className="font-medium">24</span>
          </div>
          <div className="flex justify-between">
            <span>Total Points Earned</span>
            <span className="font-medium">1,250</span>
          </div>
          <div className="flex justify-between">
            <span>Total Savings</span>
            <span className="font-medium">₹2,450</span>
          </div>
          <div className="flex justify-between">
            <span>Referrals Made</span>
            <span className="font-medium">3</span>
          </div>
        </CardContent>
      </Card>

      {/* Sign Out */}
      <Card>
        <CardContent className="p-4">
          <Button 
            variant="destructive" 
            className="w-full"
            onClick={() => toast.success('Signed out successfully')}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}