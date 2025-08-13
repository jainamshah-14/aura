import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  Trophy, 
  Medal, 
  Crown,
  Star,
  Users,
  Calendar,
  Target,
  TrendingUp
} from 'lucide-react';
import { useLoyalty } from '../../contexts/LoyaltyContext';

export function ConsumerLeaderboard({ user }: { user: any }) {
  const { state } = useLoyalty();
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  // Mock leaderboard data with extended users
  const allUsers = [
    ...state.users,
    { id: '4', name: 'Suresh Patel', points_balance: 920, tier: 'Gold', last_purchase_date: '2024-08-12' },
    { id: '5', name: 'Maya Singh', points_balance: 780, tier: 'Silver', last_purchase_date: '2024-08-11' },
    { id: '6', name: 'Ravi Kumar', points_balance: 650, tier: 'Silver', last_purchase_date: '2024-08-10' },
    { id: '7', name: 'Deepika Shah', points_balance: 580, tier: 'Bronze', last_purchase_date: '2024-08-09' },
    { id: '8', name: 'Amit Verma', points_balance: 520, tier: 'Bronze', last_purchase_date: '2024-08-08' },
    { id: '9', name: 'Neha Gupta', points_balance: 480, tier: 'Bronze', last_purchase_date: '2024-08-07' },
    { id: '10', name: 'Rohit Sharma', points_balance: 420, tier: 'Bronze', last_purchase_date: '2024-08-06' }
  ];

  // Sort users by points for leaderboard
  const sortedUsers = [...allUsers].sort((a, b) => b.points_balance - a.points_balance);
  const currentUserRank = sortedUsers.findIndex(u => u.id === user.id) + 1;
  const topUsers = sortedUsers.slice(0, 10);

  // Mock weekly/monthly data
  const weeklyLeaders = [
    { name: 'Anita Verma', points: 450, growth: '+23%' },
    { name: 'Priya Sharma', points: 380, growth: '+18%' },
    { name: 'Rajesh Kumar', points: 290, growth: '+15%' }
  ];

  const monthlyLeaders = [
    { name: 'Priya Sharma', points: 1250, growth: '+35%' },
    { name: 'Anita Verma', points: 1100, growth: '+28%' },
    { name: 'Suresh Patel', points: 920, growth: '+22%' }
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="w-5 h-5 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-5 h-5 text-gray-400" />;
    if (rank === 3) return <Medal className="w-5 h-5 text-orange-600" />;
    return <span className="w-5 h-5 flex items-center justify-center text-sm font-bold text-gray-600">#{rank}</span>;
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Bronze': return 'bg-orange-100 text-orange-800';
      case 'Silver': return 'bg-gray-100 text-gray-800';
      case 'Gold': return 'bg-yellow-100 text-yellow-800';
      case 'Platinum': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-4 space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Leaderboard</h1>
        <p className="text-gray-600">See how you rank among other NUPI members</p>
      </div>

      {/* Current User Position */}
      <Card className="bg-gradient-to-r from-teal-500 to-blue-500 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">#{currentUserRank}</span>
              </div>
              <div>
                <h3 className="font-medium">Your Current Rank</h3>
                <p className="text-teal-100">Out of {allUsers.length} members</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{user.points_balance}</div>
              <p className="text-teal-100">Points</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Period Tabs */}
      <Tabs value={selectedPeriod} onValueChange={setSelectedPeriod}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="week">This Week</TabsTrigger>
          <TabsTrigger value="month">This Month</TabsTrigger>
          <TabsTrigger value="all">All Time</TabsTrigger>
        </TabsList>

        <TabsContent value="week" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Weekly Champions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {weeklyLeaders.map((leader, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      {getRankIcon(index + 1)}
                      <div>
                        <p className="font-medium">{leader.name}</p>
                        <p className="text-sm text-gray-600">+{leader.points} points this week</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      {leader.growth}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="month" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Monthly Leaders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {monthlyLeaders.map((leader, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      {getRankIcon(index + 1)}
                      <div>
                        <p className="font-medium">{leader.name}</p>
                        <p className="text-sm text-gray-600">{leader.points} total points</p>
                      </div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">
                      {leader.growth}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                All-Time Leaderboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topUsers.map((member, index) => (
                  <div 
                    key={member.id} 
                    className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                      member.id === user.id ? 'bg-teal-50 border border-teal-200' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {getRankIcon(index + 1)}
                      <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium text-sm">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium flex items-center gap-2">
                          {member.name}
                          {member.id === user.id && (
                            <Badge variant="outline" className="text-xs">You</Badge>
                          )}
                        </p>
                        <p className="text-sm text-gray-600">{member.points_balance} points</p>
                      </div>
                    </div>
                    <Badge className={getTierColor(member.tier)}>
                      {member.tier}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Achievement Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5" />
            Your Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">#{currentUserRank}</div>
              <p className="text-sm text-gray-600">Current Rank</p>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {Math.max(0, Math.ceil((sortedUsers.length - currentUserRank) / sortedUsers.length * 100))}%
              </div>
              <p className="text-sm text-gray-600">Better Than</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Climb the Rankings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              <span>Shop more frequently to earn points faster</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Play daily games for bonus points</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Complete achievements for extra rewards</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Refer friends to boost your score</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}