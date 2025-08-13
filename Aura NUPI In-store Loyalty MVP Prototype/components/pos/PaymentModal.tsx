import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { CreditCard, Smartphone, Banknote, Send } from 'lucide-react';
import { useLoyalty } from '../../contexts/LoyaltyContext';
import { toast } from 'sonner';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartTotal: number;
  customerPhone: string;
  onPaymentComplete: () => void;
}

export function PaymentModal({ isOpen, onClose, cartTotal, customerPhone, onPaymentComplete }: PaymentModalProps) {
  const { state, dispatch } = useLoyalty();
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState<'cash' | 'card' | 'upi'>('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const taxAmount = Math.round(cartTotal * 0.18);
  const totalAmount = cartTotal + taxAmount;
  const pointsToEarn = Math.floor(cartTotal / 10); // 1 point per ₹10

  // Check if this is a new user
  const existingUser = state.users.find(u => u.phone === customerPhone);
  const isNewUser = !existingUser;

  const handlePayment = async () => {
    console.log('Payment started with phone:', customerPhone);
    
    if (!customerPhone) {
      toast.error('Customer phone number is required');
      return;
    }

    setIsProcessing(true);
    
    try {
      // Create transaction
      const transaction = {
        id: `TXN_${Date.now()}`,
        user_id: existingUser?.id || `USER_${Date.now()}`,
        skus: state.cart,
        total: totalAmount,
        date: new Date().toISOString(),
        points_awarded: pointsToEarn,
        applied_coupons: [],
        phone: customerPhone
      };

      dispatch({ type: 'ADD_TRANSACTION', payload: transaction });

      // Handle user creation or update
      if (existingUser) {
        // Update existing user
        const updatedUser = {
          ...existingUser,
          points_balance: existingUser.points_balance + pointsToEarn,
          total_purchases: (existingUser.total_purchases || 0) + 1,
          total_spent: (existingUser.total_spent || 0) + totalAmount,
          last_purchase_date: new Date().toISOString()
        };
        dispatch({ type: 'UPDATE_USER', payload: updatedUser });
        console.log('Updated existing user:', updatedUser);
      } else {
        // Create new user with welcome points
        const newUser = {
          id: transaction.user_id,
          phone: customerPhone,
          name: `Customer ${customerPhone.slice(-4)}`,
          email: `customer${customerPhone.slice(-4)}@example.com`,
          points_balance: 50 + pointsToEarn, // Welcome points + earned points
          tier: 'Bronze' as const,
          total_purchases: 1,
          total_spent: totalAmount,
          last_purchase_date: new Date().toISOString(),
          achievements: ['first_purchase']
        };
        dispatch({ type: 'ADD_USER', payload: newUser });
        console.log('Created new user:', newUser);
      }

      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Complete payment flow first
      onPaymentComplete();
      onClose();
      
      toast.success(`Payment of ₹${totalAmount} completed successfully!`);
      
      // Navigate to WhatsApp simulator in same window
      const messageId = `msg_${Date.now()}`;
      const whatsappUrl = `/whatsapp/${customerPhone}/${messageId}`;
      
      console.log('Navigating to WhatsApp URL:', whatsappUrl);
      toast.success('Redirecting to WhatsApp receipt...');
      
      // Use navigate to go to WhatsApp in same window
      navigate(whatsappUrl);
      
    } catch (error) {
      console.error('Payment error:', error);
      toast.error('Payment failed. Please try again.');
    }
    
    setIsProcessing(false);
  };

  const paymentMethods = [
    { id: 'card', label: 'Card Payment', icon: CreditCard },
    { id: 'upi', label: 'UPI Payment', icon: Smartphone },
    { id: 'cash', label: 'Cash Payment', icon: Banknote }
  ];

  console.log('PaymentModal rendered with customerPhone:', customerPhone, 'isNewUser:', isNewUser);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            Complete Payment
          </DialogTitle>
          <DialogDescription>
            Complete your purchase and receive digital receipt via WhatsApp.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Customer Info Warning */}
          {!customerPhone && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-800">
                ⚠️ No customer phone number provided. Please go back and add customer information.
              </p>
            </div>
          )}

          {/* Order Summary */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium mb-2">Order Summary</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Subtotal ({state.cart.length} items):</span>
                <span>₹{cartTotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (18%):</span>
                <span>₹{taxAmount}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-medium">
                <span>Total:</span>
                <span>₹{totalAmount}</span>
              </div>
            </div>
          </div>

          {/* Loyalty Info */}
          {customerPhone && (
            <div className="p-3 bg-teal-50 rounded-lg border">
              <div className="flex items-center justify-between">
                <span className="text-sm">Points to earn:</span>
                <Badge className="bg-teal-600">{pointsToEarn} points</Badge>
              </div>
              {isNewUser && (
                <div className="mt-2 space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>Welcome bonus:</span>
                    <Badge className="bg-green-600">+50 points</Badge>
                  </div>
                  <p className="text-xs text-gray-600">New customer welcome gift!</p>
                </div>
              )}
              {!isNewUser && existingUser && (
                <p className="text-xs text-gray-600 mt-1">
                  Current balance: {existingUser.points_balance} points
                </p>
              )}
            </div>
          )}

          {/* Payment Methods */}
          <div>
            <h4 className="font-medium mb-2">Payment Method</h4>
            <div className="grid grid-cols-3 gap-2">
              {paymentMethods.map(method => {
                const Icon = method.icon;
                return (
                  <Button
                    key={method.id}
                    variant={selectedPayment === method.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedPayment(method.id as any)}
                    className="h-auto p-3 flex flex-col gap-1"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-xs">{method.label}</span>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose} className="flex-1" disabled={isProcessing}>
              Cancel
            </Button>
            <Button 
              onClick={handlePayment}
              disabled={isProcessing || !customerPhone}
              className="flex-1 bg-teal-600 hover:bg-teal-700"
            >
              {isProcessing ? (
                'Processing...'
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Pay ₹{totalAmount}
                </>
              )}
            </Button>
          </div>

          {customerPhone && (
            <p className="text-xs text-gray-500 text-center">
              {isNewUser 
                ? 'Welcome message with app download link will be sent via WhatsApp'
                : 'Digital receipt with points balance will be sent via WhatsApp'
              }
            </p>
          )}

          {!customerPhone && (
            <p className="text-xs text-red-500 text-center">
              Please add customer phone number before payment
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}