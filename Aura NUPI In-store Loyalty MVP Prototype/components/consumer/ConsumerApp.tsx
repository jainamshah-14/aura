import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  Wallet, 
  Gift, 
  Trophy, 
  User, 
  Home,
  Gamepad2,
  History,
  Award,
  TrendingUp,
  Star,
  Coins,
  Target,
  Bell,
  Settings,
  ArrowRight,
  Plus,
  Zap
} from 'lucide-react';
import { useLoyalty } from '../../contexts/LoyaltyContext';
import { ConsumerWallet } from './ConsumerWallet';
import { ConsumerGames } from './ConsumerGames';
import { ConsumerOffers } from './ConsumerOffers';
import { ConsumerProfile } from './ConsumerProfile';
import { ConsumerHistory } from './ConsumerHistory';
import { ConsumerAchievements } from './ConsumerAchievements';
import { ConsumerLeaderboard } from './ConsumerLeaderboard';
import { ConsumerOnboard } from './ConsumerOnboard';

export function ConsumerApp() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = useLoyalty();
  
  // Mock user data - in a real app, this would come from authentication
  const currentUser = state.users[0] || {
    name: 'John Doe',
    points_balance: 1250,
    tier: 'Gold',
    phone: '9876543210'
  };

  const isActive = (path: string) => location.pathname === path || 
    (path === '/consumer' && location.pathname === '/consumer/');

  return (
    <div className="min-h-screen bg-[#f8fafb]">
      <Routes>
        <Route path="/" element={<ConsumerDashboard user={currentUser} />} />
        <Route path="/wallet" element={<ConsumerWallet />} />
        <Route path="/games" element={<ConsumerGames />} />
        <Route path="/offers" element={<ConsumerOffers />} />
        <Route path="/profile" element={<ConsumerProfile />} />
        <Route path="/history" element={<ConsumerHistory />} />
        <Route path="/achievements" element={<ConsumerAchievements />} />
        <Route path="/leaderboard" element={<ConsumerLeaderboard />} />
        <Route path="/onboard" element={<ConsumerOnboard />} />
      </Routes>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 max-w-sm mx-auto">
        <div className="flex items-center justify-around">
          {[
            { path: '/consumer', icon: Home, label: 'Home' },
            { path: '/consumer/wallet', icon: Wallet, label: 'Wallet' },
            { path: '/consumer/games', icon: Gamepad2, label: 'Games' },
            { path: '/consumer/offers', icon: Gift, label: 'Offers' },
            { path: '/consumer/profile', icon: User, label: 'Profile' }
          ].map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center py-2 px-3 transition-colors ${
                  active ? 'text-[#0FA3A3]' : 'text-gray-500'
                }`}
              >
                <Icon className="w-5 h-5 mb-1" />
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ConsumerDashboard({ user }: { user: any }) {
  const navigate = useNavigate();
  const { state } = useLoyalty();

  // Mock data for charts and analytics
  const weeklyProgress = [
    { day: 'Mon', points: 45 },
    { day: 'Tue', points: 78 },
    { day: 'Wed', points: 65 },
    { day: 'Thu', points: 120 },
    { day: 'Fri', points: 95 },
    { day: 'Sat', points: 110 },
    { day: 'Sun', points: 88 }
  ];

  const monthlyData = [
    { month: 'Jan', points: 420 },
    { month: 'Feb', points: 680 },
    { month: 'Mar', points: 890 },
    { month: 'Apr', points: 750 },
    { month: 'May', points: 1200 }
  ];

  const leaderboard = [
    { rank: 1, name: 'Alex Chen', points: 2850, avatar: 'AC' },
    { rank: 2, name: 'Sarah Kim', points: 2650, avatar: 'SK' },
    { rank: 3, name: 'Mike Ross', points: 2420, avatar: 'MR' },
    { rank: 4, name: user.name, points: user.points_balance, avatar: user.name.split(' ').map(n => n[0]).join('') }
  ];

  const recentTransactions = [
    { date: 'Today', store: 'Aura Store', amount: 150, points: 15, time: '2:30 PM' },
    { date: 'Yesterday', store: 'Aura Store', amount: 280, points: 28, time: '6:45 PM' },
    { date: '2 days ago', store: 'Aura Mall', amount: 420, points: 42, time: '1:20 PM' },
    { date: '3 days ago', store: 'Aura Express', amount: 180, points: 18, time: '4:15 PM' }
  ];

  return (
    <div className="pb-20 max-w-sm mx-auto bg-[#f8fafb] min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0FA3A3] to-[#0d8a8a] p-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">
                {user.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <h2 className="text-white font-semibold">Hello, {user.name.split(' ')[0]}!</h2>
              <p className="text-white/80 text-sm">{user.tier} Member</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
              <Bell className="w-5 h-5" />
            </Button>
            <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Points Card */}
        <Card className="bg-white/95 backdrop-blur border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Available Points</p>
                <p className="text-3xl font-bold text-gray-900">{user.points_balance.toLocaleString()}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge className="bg-[#0FA3A3] text-white text-xs">
                    {user.tier}
                  </Badge>
                  <span className="text-gray-500 text-xs">+25 this week</span>
                </div>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-[#0FA3A3] to-[#0d8a8a] rounded-2xl flex items-center justify-center">
                <Coins className="w-8 h-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="p-4 space-y-6">
        {/* Quick Actions */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Quick Actions</h3>
          <div className="grid grid-cols-4 gap-3">
            {[
              { icon: Gamepad2, label: 'Games', color: 'bg-purple-100 text-purple-600', path: '/consumer/games' },
              { icon: Gift, label: 'Offers', color: 'bg-orange-100 text-orange-600', path: '/consumer/offers' },
              { icon: Trophy, label: 'Rewards', color: 'bg-yellow-100 text-yellow-600', path: '/consumer/achievements' },
              { icon: History, label: 'History', color: 'bg-blue-100 text-blue-600', path: '/consumer/history' }
            ].map((action, index) => (
              <button
                key={index}
                onClick={() => navigate(action.path)}
                className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${action.color}`}>
                  <action.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium text-gray-700">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Weekly Progress Chart */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Your Progress</h3>
              <Button variant="ghost" size="sm" className="text-[#0FA3A3] p-0">
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            
            <div className="flex items-end justify-between h-32 mb-4">
              {weeklyProgress.map((day, index) => (
                <div key={day.day} className="flex flex-col items-center gap-2">
                  <div className="relative">
                    <div 
                      className="w-6 bg-gradient-to-t from-[#0FA3A3] to-[#34d4d4] rounded-t-full"
                      style={{ height: `${(day.points / 120) * 80}px` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500">{day.day}</span>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#0FA3A3] rounded-full"></div>
                <span className="text-gray-600">Points Earned</span>
              </div>
              <span className="font-medium text-gray-900">601 pts this week</span>
            </div>
          </CardContent>
        </Card>

        {/* Rewards Section */}
        <Card className="border-0 shadow-sm bg-gradient-to-r from-purple-50 to-pink-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Rewards Waiting</h3>
                <p className="text-gray-600 text-sm mb-3">You have 3 rewards ready to claim</p>
                <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  <Gift className="w-4 h-4 mr-2" />
                  Claim Now
                </Button>
              </div>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Gift className="w-10 h-10 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leaderboard */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Leaderboard</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-[#0FA3A3] p-0"
                onClick={() => navigate('/consumer/leaderboard')}
              >
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            
            <div className="space-y-3">
              {leaderboard.slice(0, 3).map((user, index) => (
                <div key={user.rank} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                    user.rank === 1 ? 'bg-yellow-500' :
                    user.rank === 2 ? 'bg-gray-400' :
                    user.rank === 3 ? 'bg-orange-500' :
                    'bg-[#0FA3A3]'
                  }`}>
                    {user.rank}
                  </div>
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-700">{user.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.points.toLocaleString()} points</p>
                  </div>
                  {user.rank <= 3 && (
                    <Trophy className={`w-5 h-5 ${
                      user.rank === 1 ? 'text-yellow-500' :
                      user.rank === 2 ? 'text-gray-400' :
                      'text-orange-500'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Recent Transactions</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-[#0FA3A3] p-0"
                onClick={() => navigate('/consumer/history')}
              >
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            
            <div className="space-y-4">
              {recentTransactions.slice(0, 3).map((transaction, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#0FA3A3]/10 rounded-full flex items-center justify-center">
                      <Zap className="w-5 h-5 text-[#0FA3A3]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{transaction.store}</p>
                      <p className="text-sm text-gray-500">{transaction.date} • {transaction.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">₹{transaction.amount}</p>
                    <p className="text-sm text-[#0FA3A3]">+{transaction.points} pts</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}