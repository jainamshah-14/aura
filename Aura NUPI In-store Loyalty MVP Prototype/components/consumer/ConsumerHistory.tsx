import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { 
  History, 
  ShoppingBag, 
  Gift, 
  Calendar,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { useLoyalty } from '../../contexts/LoyaltyContext';

export function ConsumerHistory({ user }: { user: any }) {
  const { state } = useLoyalty();
  
  // Get user's transaction history
  const userTransactions = state.transactions
    .filter(t => t.user_id === user.id || t.phone === user.phone)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Mock transaction history for demo
  const mockTransactions = [
    {
      id: 'TXN_001',
      date: '2024-08-12',
      type: 'purchase',
      description: 'In-store Purchase',
      amount: 287,
      points: 28,
      items: ['Organic Rice 1kg', 'Tata Tea Premium 250g × 2'],
      status: 'completed'
    },
    {
      id: 'TXN_002',
      date: '2024-08-10',
      type: 'redemption',
      description: 'Voucher Redeemed',
      amount: -100,
      points: -100,
      items: ['₹50 Off Groceries Voucher'],
      status: 'completed'
    },
    {
      id: 'TXN_003',
      date: '2024-08-08',
      type: 'purchase',
      description: 'In-store Purchase',
      amount: 156,
      points: 15,
      items: ['Maggi Noodles × 3', 'Colgate Toothpaste 200g'],
      status: 'completed'
    },
    {
      id: 'TXN_004',
      date: '2024-08-05',
      type: 'bonus',
      description: 'Daily Spin Reward',
      amount: 0,
      points: 25,
      items: ['Spin Wheel Bonus'],
      status: 'completed'
    },
    {
      id: 'TXN_005',
      date: '2024-08-01',
      type: 'purchase',
      description: 'In-store Purchase',
      amount: 423,
      points: 42,
      items: ['Britannia Biscuits × 2', 'Amul Butter 100g', 'Organic Rice 1kg'],
      status: 'completed'
    }
  ];

  const pointsSummary = {
    totalEarned: mockTransactions
      .filter(t => t.points > 0)
      .reduce((sum, t) => sum + t.points, 0),
    totalRedeemed: Math.abs(mockTransactions
      .filter(t => t.points < 0)
      .reduce((sum, t) => sum + t.points, 0)),
    totalSpent: mockTransactions
      .filter(t => t.amount > 0)
      .reduce((sum, t) => sum + t.amount, 0)
  };

  return (
    <div className="p-4 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Transaction History</h1>
        <p className="text-gray-600">Track your purchases and rewards</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">
              {pointsSummary.totalEarned}
            </div>
            <p className="text-sm text-gray-600">Points Earned</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">
              {pointsSummary.totalRedeemed}
            </div>
            <p className="text-sm text-gray-600">Points Redeemed</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-lg font-bold">₹{pointsSummary.totalSpent}</div>
              <p className="text-sm text-gray-600">Total Spent</p>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-teal-600">{user.points_balance}</div>
              <p className="text-sm text-gray-600">Current Balance</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transaction List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="w-5 h-5" />
            Recent Transactions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {mockTransactions.map((transaction, index) => (
            <div key={transaction.id}>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === 'purchase' ? 'bg-blue-100' :
                    transaction.type === 'redemption' ? 'bg-orange-100' :
                    'bg-green-100'
                  }`}>
                    {transaction.type === 'purchase' ? (
                      <ShoppingBag className="w-5 h-5 text-blue-600" />
                    ) : transaction.type === 'redemption' ? (
                      <ArrowDownRight className="w-5 h-5 text-orange-600" />
                    ) : (
                      <Gift className="w-5 h-5 text-green-600" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{transaction.description}</h4>
                      <div className="text-right">
                        {transaction.amount > 0 && (
                          <div className="font-medium">₹{transaction.amount}</div>
                        )}
                        <div className={`text-sm flex items-center gap-1 ${
                          transaction.points > 0 ? 'text-green-600' : 'text-orange-600'
                        }`}>
                          {transaction.points > 0 ? (
                            <ArrowUpRight className="w-3 h-3" />
                          ) : (
                            <ArrowDownRight className="w-3 h-3" />
                          )}
                          {Math.abs(transaction.points)} points
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-600 mt-1">
                      {transaction.items.join(', ')}
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        {new Date(transaction.date).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={
                          transaction.status === 'completed' ? 'bg-green-100 text-green-800' : 
                          'bg-gray-100 text-gray-800'
                        }
                      >
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              {index < mockTransactions.length - 1 && (
                <Separator className="mt-4" />
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Monthly Summary */}
      <Card>
        <CardHeader>
          <CardTitle>This Month</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <span>Transactions</span>
            <span className="font-medium">3</span>
          </div>
          <div className="flex justify-between">
            <span>Amount Spent</span>
            <span className="font-medium">₹866</span>
          </div>
          <div className="flex justify-between">
            <span>Points Earned</span>
            <span className="font-medium text-green-600">85</span>
          </div>
          <div className="flex justify-between">
            <span>Points Redeemed</span>
            <span className="font-medium text-orange-600">100</span>
          </div>
          <Separator />
          <div className="flex justify-between font-medium">
            <span>Net Points</span>
            <span className="text-orange-600">-15</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}