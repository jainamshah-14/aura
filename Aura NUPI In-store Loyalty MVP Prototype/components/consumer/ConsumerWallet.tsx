import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Separator } from '../ui/separator';
import { 
  Wallet, 
  TrendingUp, 
  Gift, 
  Clock, 
  ArrowRight,
  Star,
  Trophy
} from 'lucide-react';
import { useLoyalty } from '../../contexts/LoyaltyContext';
import { toast } from 'sonner';

interface ConsumerWalletProps {
  user: any;
}

export function ConsumerWallet({ user }: ConsumerWalletProps) {
  const { state, dispatch, api } = useLoyalty();
  const [isRedeeming, setIsRedeeming] = useState(false);

  const userVouchers = state.vouchers.filter(v => v.user_id === user.id && v.status === 'active');
  
  const tierProgress = {
    Bronze: { current: 0, next: 500, nextTier: 'Silver' },
    Silver: { current: 500, next: 1000, nextTier: 'Gold' },
    Gold: { current: 1000, next: 2000, nextTier: 'Platinum' },
    Platinum: { current: 2000, next: 5000, nextTier: 'Diamond' }
  };

  const currentTierInfo = tierProgress[user.tier as keyof typeof tierProgress];
  const progressPercentage = Math.min(
    ((user.points_balance - currentTierInfo.current) / (currentTierInfo.next - currentTierInfo.current)) * 100,
    100
  );

  const availableRewards = [
    {
      id: 'R001',
      title: '₹100 Off Groceries',
      description: 'Valid on purchases above ₹500',
      points: 200,
      category: 'Discount'
    },
    {
      id: 'R002',
      title: 'Free Home Delivery',
      description: 'Free delivery on your next 3 orders',
      points: 150,
      category: 'Service'
    },
    {
      id: 'R003',
      title: 'Premium Tea Sample Box',
      description: '5 different premium tea varieties',
      points: 300,
      category: 'Product'
    },
    {
      id: 'R004',
      title: '20% Off Personal Care',
      description: 'Valid on all personal care items',
      points: 250,
      category: 'Discount'
    }
  ];

  const handleRedeem = async (rewardId: string, points: number) => {
    if (user.points_balance < points) {
      toast.error('Insufficient points for this reward');
      return;
    }

    setIsRedeeming(true);
    try {
      // Create a temporary voucher for demo
      const newVoucher = {
        id: `V_${Date.now()}`,
        user_id: user.id,
        code: `REDEEMED_${Date.now()}`,
        points_cost: points,
        status: 'redeemed' as const,
        expiry: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days
        title: availableRewards.find(r => r.id === rewardId)?.title || 'Reward',
        description: availableRewards.find(r => r.id === rewardId)?.description || ''
      };

      const result = await api.appRedeem(user.id, newVoucher.id);
      if (result.success) {
        toast.success(`Reward redeemed successfully! Code: ${result.voucher_code}`);
      }
    } catch (error) {
      toast.error('Redemption failed. Please try again.');
    }
    setIsRedeeming(false);
  };

  return (
    <div className="p-4 space-y-6">
      {/* Points Balance */}
      <Card className="bg-gradient-to-br from-teal-500 to-blue-600 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-teal-100">Available Points</p>
              <p className="text-4xl font-bold">{user.points_balance}</p>
            </div>
            <Wallet className="w-12 h-12 text-white/80" />
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span>Tier: {user.tier}</span>
            <Badge className="bg-white/20 text-white">
              <Trophy className="w-3 h-3 mr-1" />
              Active
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Tier Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Tier Progress
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-medium">{user.tier}</span>
            <span className="text-sm text-gray-600">
              Next: {currentTierInfo.nextTier}
            </span>
          </div>
          
          <Progress value={progressPercentage} className="h-3" />
          
          <div className="flex justify-between text-sm text-gray-600">
            <span>{user.points_balance} points</span>
            <span>{currentTierInfo.next} points needed</span>
          </div>
          
          <div className="text-sm text-gray-700">
            {currentTierInfo.next - user.points_balance} points to reach {currentTierInfo.nextTier}
          </div>
        </CardContent>
      </Card>

      {/* Active Vouchers */}
      {userVouchers.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="w-5 h-5" />
              My Vouchers ({userVouchers.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {userVouchers.map(voucher => (
              <div key={voucher.id} className="p-3 border rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium">{voucher.title}</h4>
                    <p className="text-sm text-gray-600">{voucher.description}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary">Code: {voucher.code}</Badge>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Expires: {new Date(voucher.expiry).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Available Rewards */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5" />
            Redeem Points
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {availableRewards.map(reward => (
            <div key={reward.id} className="p-4 border rounded-lg">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium">{reward.title}</h4>
                    <Badge variant="outline" className="text-xs">{reward.category}</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{reward.description}</p>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-teal-100 text-teal-800">{reward.points} points</Badge>
                  </div>
                </div>
                <Button
                  size="sm"
                  onClick={() => handleRedeem(reward.id, reward.points)}
                  disabled={user.points_balance < reward.points || isRedeeming}
                  className="bg-teal-600 hover:bg-teal-700"
                >
                  {user.points_balance < reward.points ? 'Insufficient' : 'Redeem'}
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Points Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Points Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <span>Total Earned</span>
            <span className="font-medium">{user.points_balance + 200}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Redeemed</span>
            <span className="font-medium">200</span>
          </div>
          <Separator />
          <div className="flex justify-between">
            <span>Current Balance</span>
            <span className="font-medium">{user.points_balance}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}