import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { 
  User, 
  Phone, 
  Gift, 
  Star,
  MessageSquare,
  UserPlus,
  Wallet
} from 'lucide-react';
import { useLoyalty } from '../../contexts/LoyaltyContext';
import { toast } from 'sonner';

interface LoyaltyModalProps {
  open: boolean;
  onClose: () => void;
  cartTotal: number;
  onComplete: (phone?: string) => void;
}

export function LoyaltyModal({ open, onClose, cartTotal, onComplete }: LoyaltyModalProps) {
  const { state, dispatch } = useLoyalty();
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [showNewUserForm, setShowNewUserForm] = useState(false);
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');

  const handlePhoneSubmit = async () => {
    if (!phone) {
      toast.error('Please enter phone number');
      return;
    }

    console.log('Looking up phone:', phone);
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const existingUser = state.users.find(u => u.phone === phone);
      
      if (existingUser) {
        setCurrentUser(existingUser);
        dispatch({ type: 'SET_CURRENT_USER', payload: existingUser });
        setShowNewUserForm(false);
        console.log('Found existing user:', existingUser);
      } else {
        setCurrentUser(null);
        setShowNewUserForm(true);
        console.log('New user detected for phone:', phone);
      }
      setLoading(false);
    }, 800);
  };

  const handleCreateNewUser = () => {
    if (!newUserName.trim()) {
      toast.error('Please enter customer name');
      return;
    }

    const newUser = {
      id: `U_${Date.now()}`,
      name: newUserName.trim(),
      phone: phone,
      email: newUserEmail.trim() || `${phone}@placeholder.com`,
      points_balance: 50, // Welcome bonus
      tier: 'Bronze' as const,
      total_purchases: 0, // Will be incremented during payment
      total_spent: 0,
      last_purchase_date: new Date().toISOString(),
      achievements: []
    };

    dispatch({ type: 'ADD_USER', payload: newUser });
    dispatch({ type: 'SET_CURRENT_USER', payload: newUser });
    setCurrentUser(newUser);
    setShowNewUserForm(false);
    toast.success('New customer registered with 50 welcome points!');
    console.log('Created new user:', newUser);
  };

  const handleContinueToPayment = () => {
    if (!phone || (!currentUser && !showNewUserForm)) {
      toast.error('Please complete customer setup');
      return;
    }

    console.log('Continuing to payment with phone:', phone);
    
    // Pass the phone number back to parent
    onComplete(phone);
    
    // Reset form
    setPhone('');
    setCurrentUser(null);
    setShowNewUserForm(false);
    setNewUserName('');
    setNewUserEmail('');
  };

  const pointsEarned = Math.floor(cartTotal / 10);
  const isNewUser = !currentUser || currentUser.total_purchases === 0;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Gift className="w-5 h-5 text-teal-600" />
            NUPI Loyalty Program
          </DialogTitle>
          <DialogDescription>
            Add customer to loyalty program and proceed to payment.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Phone Input */}
          {!currentUser && !showNewUserForm && (
            <div className="space-y-3">
              <Label htmlFor="loyalty-phone">Customer Phone Number</Label>
              <div className="flex gap-2">
                <Input
                  id="loyalty-phone"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handlePhoneSubmit} disabled={loading}>
                  {loading ? 'Checking...' : 'Look Up'}
                </Button>
              </div>
              {!phone && (
                <p className="text-xs text-gray-500">
                  Enter customer phone number to check loyalty status
                </p>
              )}
            </div>
          )}

          {/* New User Registration */}
          {showNewUserForm && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-blue-600">
                <UserPlus className="w-5 h-5" />
                <span className="font-medium">New Customer Registration</span>
              </div>
              
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Phone:</strong> {phone}
                </p>
                <p className="text-xs text-blue-600 mt-1">
                  This number is not in our system. Please register as new customer.
                </p>
              </div>
              
              <div className="space-y-3">
                <div>
                  <Label htmlFor="customerName">Customer Name *</Label>
                  <Input
                    id="customerName"
                    placeholder="Enter customer name"
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="customerEmail">Email (Optional)</Label>
                  <Input
                    id="customerEmail"
                    type="email"
                    placeholder="Enter email address"
                    value={newUserEmail}
                    onChange={(e) => setNewUserEmail(e.target.value)}
                  />
                </div>

                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="flex items-center gap-2 text-green-700">
                    <Gift className="w-4 h-4" />
                    <span className="font-medium">Welcome Bonus!</span>
                  </div>
                  <p className="text-sm text-green-600 mt-1">
                    New customers get 50 welcome points
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button onClick={handleCreateNewUser} className="flex-1" disabled={!newUserName.trim()}>
                  Register Customer
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setShowNewUserForm(false);
                    setPhone('');
                  }}
                >
                  Back
                </Button>
              </div>
            </div>
          )}

          {/* Existing Customer Info */}
          {currentUser && !showNewUserForm && (
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{currentUser.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-3 h-3" />
                      {currentUser.phone}
                    </div>
                  </div>
                  <Badge className={
                    currentUser.tier === 'Platinum' ? 'bg-purple-100 text-purple-800' :
                    currentUser.tier === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
                    currentUser.tier === 'Silver' ? 'bg-gray-100 text-gray-800' :
                    'bg-orange-100 text-orange-800'
                  }>
                    {currentUser.tier}
                  </Badge>
                </div>
                
                <Separator className="my-3" />
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Wallet className="w-4 h-4 text-teal-600" />
                    <div>
                      <p className="text-gray-600">Current Points</p>
                      <p className="font-medium">{currentUser.points_balance}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-600" />
                    <div>
                      <p className="text-gray-600">Total Purchases</p>
                      <p className="font-medium">{currentUser.total_purchases}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Transaction Preview */}
          {(currentUser || showNewUserForm) && (
            <div className="bg-teal-50 p-4 rounded-lg">
              <h4 className="font-medium text-teal-900 mb-3">Transaction Preview</h4>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Purchase Amount:</span>
                  <span className="font-medium">₹{cartTotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Points to Earn:</span>
                  <span className="font-medium text-teal-600">+{pointsEarned} points</span>
                </div>

                {isNewUser && (
                  <div className="flex justify-between">
                    <span>Welcome Bonus:</span>
                    <span className="font-medium text-green-600">+50 points</span>
                  </div>
                )}

                <Separator />
                
                <div className="flex justify-between font-medium">
                  <span>Total Points After:</span>
                  <span className="text-teal-600">
                    {isNewUser ? 50 + pointsEarned : (currentUser?.points_balance || 0) + pointsEarned} points
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Continue Button */}
          {(currentUser || (showNewUserForm && newUserName.trim())) && (
            <div className="space-y-3">
              <Button 
                onClick={handleContinueToPayment} 
                className="w-full bg-teal-600 hover:bg-teal-700"
                size="lg"
              >
                Continue to Payment
              </Button>
              
              <p className="text-xs text-center text-gray-500">
                Digital receipt will be sent via WhatsApp after payment
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}