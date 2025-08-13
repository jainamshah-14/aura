import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { ArrowLeft, ShoppingCart, User, CreditCard, Send, Scan } from 'lucide-react';
import { useLoyalty } from '../../contexts/LoyaltyContext';
import { POSLogin } from './POSLogin';
import { LoyaltyModal } from './LoyaltyModal';
import { PaymentModal } from './PaymentModal';
import { toast } from 'sonner';

export function POSApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cashierName, setCashierName] = useState('');

  if (!isLoggedIn) {
    return <POSLogin onLogin={(name) => { setIsLoggedIn(true); setCashierName(name); }} />;
  }

  return (
    <Routes>
      <Route path="/" element={<POSMain cashierName={cashierName} />} />
    </Routes>
  );
}

function POSMain({ cashierName }: { cashierName: string }) {
  const { state, dispatch } = useLoyalty();
  const navigate = useNavigate();
  const [barcode, setBarcode] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [showLoyaltyModal, setShowLoyaltyModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const cartTotal = state.cart.reduce((sum, item) => sum + (item.sku.price * item.quantity), 0);

  // Debug logging
  useEffect(() => {
    console.log('POSMain state:', { 
      customerPhone, 
      currentUser: state.currentUser,
      cartTotal,
      cartItems: state.cart.length 
    });
  }, [customerPhone, state.currentUser, cartTotal, state.cart.length]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'F1') {
        e.preventDefault();
        document.getElementById('barcode-input')?.focus();
      } else if (e.key === 'F2') {
        e.preventDefault();
        document.getElementById('phone-input')?.focus();
      } else if (e.key === 'F5' && state.cart.length > 0) {
        e.preventDefault();
        handleProceedToPayment();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [state.cart.length, customerPhone]);

  const handleScanProduct = () => {
    const sku = state.skus.find(s => s.barcode === barcode || s.id === barcode);
    if (sku) {
      dispatch({ type: 'ADD_TO_CART', payload: { sku, quantity: 1 } });
      setBarcode('');
      toast.success(`Added ${sku.name} to cart`);
    } else {
      toast.error('Product not found');
    }
  };

  const handleLoyaltyCheck = async () => {
    if (!customerPhone) {
      toast.error('Please enter phone number');
      return;
    }
    
    console.log('Checking loyalty for phone:', customerPhone);
    
    setIsLoading(true);
    try {
      // Simulate API call
      setTimeout(() => {
        const existingUser = state.users.find(u => u.phone === customerPhone);
        
        if (existingUser) {
          dispatch({ type: 'SET_CURRENT_USER', payload: existingUser });
          toast.success(`Welcome back, ${existingUser.name}!`);
          console.log('Found existing user:', existingUser);
        } else {
          dispatch({ type: 'SET_CURRENT_USER', payload: undefined });
          toast.info('New customer - welcome points will be awarded');
          console.log('New customer detected for phone:', customerPhone);
        }
        setIsLoading(false);
      }, 800);
    } catch (error) {
      console.error('Loyalty check error:', error);
      toast.error('Failed to check loyalty status');
      setIsLoading(false);
    }
  };

  const handleRemoveFromCart = (skuId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: skuId });
    toast.success('Item removed from cart');
  };

  const handleProceedToPayment = () => {
    console.log('Proceed to payment clicked. CustomerPhone:', customerPhone);
    
    if (!customerPhone.trim()) {
      toast.error('Please enter customer phone number first');
      setShowLoyaltyModal(true);
      return;
    }
    
    if (state.cart.length === 0) {
      toast.error('Cart is empty');
      return;
    }
    
    // Proceed directly to payment
    setShowPaymentModal(true);
  };

  const handleLoyaltyComplete = (phone?: string) => {
    console.log('Loyalty modal completed with phone:', phone);
    if (phone) {
      setCustomerPhone(phone);
      // Check loyalty for the new phone number
      const existingUser = state.users.find(u => u.phone === phone);
      if (existingUser) {
        dispatch({ type: 'SET_CURRENT_USER', payload: existingUser });
      }
    }
    setShowLoyaltyModal(false);
    // Auto-proceed to payment after loyalty setup
    setTimeout(() => {
      setShowPaymentModal(true);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div>
            <h1 className="text-xl font-semibold">Aura POS System</h1>
            <p className="text-sm text-gray-600">Cashier: {cashierName}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <kbd className="px-2 py-1 bg-gray-100 rounded">F1</kbd> Scan
          <kbd className="px-2 py-1 bg-gray-100 rounded">F2</kbd> Phone
          <kbd className="px-2 py-1 bg-gray-100 rounded">F5</kbd> Payment
        </div>
      </div>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Panel - Product Scanning & Cart */}
        <div className="flex-1 p-4 space-y-4">
          {/* Scan Product */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scan className="w-5 h-5" />
                Scan Product (F1)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-2">
                <Input
                  id="barcode-input"
                  placeholder="Scan barcode or enter SKU"
                  value={barcode}
                  onChange={(e) => setBarcode(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleScanProduct()}
                />
                <Button onClick={handleScanProduct} className="bg-teal-600 hover:bg-teal-700">
                  Add
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {state.skus.slice(0, 4).map(sku => (
                  <Button
                    key={sku.id}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      dispatch({ type: 'ADD_TO_CART', payload: { sku, quantity: 1 } });
                      toast.success(`Added ${sku.name}`);
                    }}
                    className="h-auto p-2 text-left justify-start"
                  >
                    <div>
                      <div className="font-medium">{sku.name}</div>
                      <div className="text-gray-500">₹{sku.price}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Shopping Cart */}
          <Card className="flex-1">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Shopping Cart ({state.cart.length} items)
                </span>
                <Badge variant="secondary">₹{cartTotal}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {state.cart.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Cart is empty</p>
              ) : (
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {state.cart.map((item, index) => (
                    <div key={`${item.sku.id}-${index}`} className="flex items-center justify-between p-2 border rounded">
                      <div>
                        <div className="font-medium">{item.sku.name}</div>
                        <div className="text-sm text-gray-600">₹{item.sku.price} × {item.quantity}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge>₹{item.sku.price * item.quantity}</Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleRemoveFromCart(item.sku.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right Panel - Customer & Payment */}
        <div className="w-80 p-4 space-y-4 bg-white border-l">
          {/* Customer Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Customer (F2)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-2">
                <Input
                  id="phone-input"
                  placeholder="Enter phone number"
                  value={customerPhone}
                  onChange={(e) => {
                    const phone = e.target.value;
                    setCustomerPhone(phone);
                    console.log('Phone number updated:', phone);
                  }}
                  onKeyPress={(e) => e.key === 'Enter' && handleLoyaltyCheck()}
                />
                <Button 
                  onClick={handleLoyaltyCheck}
                  disabled={!customerPhone || isLoading}
                  className="bg-teal-600 hover:bg-teal-700"
                >
                  {isLoading ? 'Checking...' : 'Check'}
                </Button>
              </div>
              
              {state.currentUser && customerPhone && (
                <div className="p-3 bg-teal-50 rounded border">
                  <div className="font-medium">{state.currentUser.name}</div>
                  <div className="text-sm text-gray-600">{state.currentUser.phone}</div>
                  <div className="flex items-center justify-between mt-2">
                    <Badge variant="secondary">{state.currentUser.tier}</Badge>
                    <span className="text-sm font-medium">{state.currentUser.points_balance} points</span>
                  </div>
                </div>
              )}

              {customerPhone && !state.currentUser && (
                <div className="p-3 bg-green-50 rounded border">
                  <div className="font-medium">New Customer</div>
                  <div className="text-sm text-gray-600">{customerPhone}</div>
                  <div className="text-sm text-green-700 mt-1">
                    Will receive 50 welcome points!
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Payment Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Payment (F5)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>₹{cartTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax:</span>
                  <span>₹{Math.round(cartTotal * 0.18)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total:</span>
                  <span>₹{cartTotal + Math.round(cartTotal * 0.18)}</span>
                </div>
              </div>

              <Button
                className="w-full bg-teal-600 hover:bg-teal-700"
                onClick={handleProceedToPayment}
                disabled={state.cart.length === 0}
              >
                {customerPhone ? 'Make Payment' : 'Add Customer & Pay'}
              </Button>

              {!customerPhone && (
                <p className="text-xs text-gray-500 text-center">
                  Enter customer phone number first
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Modals */}
      <LoyaltyModal
        open={showLoyaltyModal}
        onClose={() => setShowLoyaltyModal(false)}
        cartTotal={cartTotal}
        onComplete={handleLoyaltyComplete}
      />

      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        cartTotal={cartTotal}
        customerPhone={customerPhone}
        onPaymentComplete={() => {
          dispatch({ type: 'CLEAR_CART' });
          setCustomerPhone('');
          dispatch({ type: 'SET_CURRENT_USER', payload: undefined });
          setShowPaymentModal(false);
          toast.success('Transaction completed!');
        }}
      />
    </div>
  );
}