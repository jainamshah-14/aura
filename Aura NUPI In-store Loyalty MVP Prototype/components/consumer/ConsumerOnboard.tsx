import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Badge } from '../ui/badge';
import { 
  Smartphone, 
  Gift, 
  Star, 
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';

interface ConsumerOnboardProps {
  onComplete: () => void;
}

export function ConsumerOnboard({ onComplete }: ConsumerOnboardProps) {
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '9876543210' // Pre-filled from WhatsApp
  });

  const totalSteps = 4;

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white flex flex-col">
      {/* Progress Bar */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-600">Step {step} of {totalSteps}</span>
          <span className="text-sm text-gray-600">{Math.round((step / totalSteps) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-teal-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        {step === 1 && (
          <Card className="w-full max-w-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <CardTitle>Welcome to NUPI!</CardTitle>
              <p className="text-gray-600">Your loyalty rewards companion</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center space-y-2">
                <h3 className="font-medium">🎉 50 Welcome Points</h3>
                <p className="text-sm text-gray-600">
                  We've already credited 50 points to your account from your first purchase!
                </p>
                <Badge className="bg-teal-100 text-teal-800">
                  Points: 78 (28 earned + 50 welcome)
                </Badge>
              </div>
              
              <Button onClick={nextStep} className="w-full bg-teal-600 hover:bg-teal-700">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        )}

        {step === 2 && (
          <Card className="w-full max-w-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <CardTitle>How NUPI Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-medium text-green-600">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Shop & Earn</h4>
                    <p className="text-sm text-gray-600">Earn 1 point for every ₹10 spent</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-medium text-blue-600">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Redeem Rewards</h4>
                    <p className="text-sm text-gray-600">Use points for discounts, products & experiences</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-medium text-purple-600">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Level Up</h4>
                    <p className="text-sm text-gray-600">Unlock better rewards as you climb tiers</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" onClick={prevStep} className="flex-1">
                  Back
                </Button>
                <Button onClick={nextStep} className="flex-1 bg-teal-600 hover:bg-teal-700">
                  Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 3 && (
          <Card className="w-full max-w-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <CardTitle>Complete Your Profile</CardTitle>
              <p className="text-gray-600">Help us personalize your experience</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={userInfo.email}
                  onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={userInfo.phone}
                  disabled
                  className="bg-gray-50"
                />
                <p className="text-xs text-gray-500 mt-1">Verified via WhatsApp</p>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" onClick={prevStep} className="flex-1">
                  Back
                </Button>
                <Button 
                  onClick={nextStep} 
                  disabled={!userInfo.name || !userInfo.email}
                  className="flex-1 bg-teal-600 hover:bg-teal-700"
                >
                  Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 4 && (
          <Card className="w-full max-w-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <CardTitle>You're All Set!</CardTitle>
              <p className="text-gray-600">Welcome to the NUPI family</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-teal-50 p-4 rounded-lg text-center">
                <Sparkles className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                <h3 className="font-medium">Your Account Summary</h3>
                <div className="space-y-1 mt-2 text-sm">
                  <div className="flex justify-between">
                    <span>Current Points:</span>
                    <span className="font-medium">78</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tier Status:</span>
                    <Badge variant="secondary">Bronze</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Welcome Bonus:</span>
                    <span className="text-green-600">✓ Claimed</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Profile completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Phone verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Welcome points credited</span>
                </div>
              </div>
              
              <Button onClick={onComplete} className="w-full bg-teal-600 hover:bg-teal-700">
                Start Exploring
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}