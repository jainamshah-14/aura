import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { 
  Users, 
  Gift, 
  Target, 
  BarChart3,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  MessageSquare,
  Gamepad2,
  Trophy,
  Medal,
  Zap,
  ShoppingBag,
  DollarSign,
  Activity
} from 'lucide-react';
import { useLoyalty } from '../../contexts/LoyaltyContext';

export function AdminDashboard() {
  const { state } = useLoyalty();

  const stats = [
    { 
      title: 'Active Users', 
      value: state.users.length.toLocaleString(), 
      change: '+12.5%', 
      icon: Users, 
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      trend: 'up'
    },
    { 
      title: 'Points Distributed', 
      value: '2.4M', 
      change: '+8.2%', 
      icon: Gift, 
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      trend: 'up'
    },
    { 
      title: 'Game Sessions', 
      value: '15.8K', 
      change: '+22.1%', 
      icon: Gamepad2, 
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      trend: 'up'
    },
    { 
      title: 'Revenue Uplift', 
      value: '₹2.3M', 
      change: '+15.3%', 
      icon: DollarSign, 
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      trend: 'up'
    }
  ];

  const recentActivities = [
    { type: 'gamification', message: '234 users played Daily Spin Wheel', time: '2 hours ago', user: 'System', icon: Gamepad2, color: 'text-purple-600' },
    { type: 'achievement', message: '89 achievements unlocked today', time: '3 hours ago', user: 'System', icon: Trophy, color: 'text-yellow-600' },
    { type: 'campaign', message: 'Tea Promotion campaign launched', time: '4 hours ago', user: 'Admin', icon: Target, color: 'text-blue-600' },
    { type: 'user', message: '15 new users registered', time: '6 hours ago', user: 'System', icon: Users, color: 'text-green-600' },
    { type: 'redemption', message: '23 vouchers redeemed', time: '8 hours ago', user: 'Customers', icon: Gift, color: 'text-orange-600' },
    { type: 'whatsapp', message: '156 WhatsApp messages sent', time: '1 day ago', user: 'System', icon: MessageSquare, color: 'text-teal-600' }
  ];

  const topPerformers = [
    { name: 'Priya Sharma', points: 2850, tier: 'Platinum', purchases: 24, games_played: 18, trend: '+15%' },
    { name: 'Rajesh Kumar', points: 2650, tier: 'Gold', purchases: 18, games_played: 12, trend: '+12%' },
    { name: 'Anita Verma', points: 2420, tier: 'Gold', purchases: 15, games_played: 22, trend: '+8%' },
    { name: 'Suresh Patel', points: 2180, tier: 'Silver', purchases: 12, games_played: 8, trend: '+5%' },
    { name: 'Maya Singh', points: 1950, tier: 'Silver', purchases: 11, games_played: 15, trend: '+3%' }
  ];

  const activeCampaigns = state.campaigns.filter(c => c.status === 'active');

  const weeklyData = [
    { day: 'Mon', users: 1200, revenue: 45000 },
    { day: 'Tue', users: 1350, revenue: 52000 },
    { day: 'Wed', users: 1180, revenue: 48000 },
    { day: 'Thu', users: 1420, revenue: 65000 },
    { day: 'Fri', users: 1650, revenue: 78000 },
    { day: 'Sat', users: 1580, revenue: 72000 },
    { day: 'Sun', users: 1380, revenue: 58000 }
  ];

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-gray-900 text-2xl">Welcome back, Admin!</h1>
          <p className="text-gray-600 mt-1">Here's what's happening with your loyalty program today.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button size="sm" variant="outline" className="border-gray-200 hover:bg-gray-50">
            <BarChart3 className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-[#0FA3A3] to-[#0d8a8a] text-white shadow-lg hover:shadow-xl">
            <MessageSquare className="w-4 h-4 mr-2" />
            Send Broadcast
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
          return (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-gray-600 text-sm mb-2">{stat.title}</p>
                    <p className="font-bold text-gray-900 text-2xl mb-3">{stat.value}</p>
                    <div className="flex items-center gap-2">
                      <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                        stat.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        <TrendIcon className="w-3 h-3" />
                        {stat.change}
                      </div>
                      <span className="text-gray-500 text-xs">vs last month</span>
                    </div>
                  </div>
                  <div className={`w-14 h-14 ${stat.bgColor} rounded-2xl flex items-center justify-center`}>
                    <Icon className={`w-7 h-7 ${stat.textColor}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Weekly Analytics Chart */}
        <Card className="lg:col-span-2 border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="text-gray-900">Weekly Performance</span>
              <Button variant="ghost" size="sm" className="text-[#0FA3A3] hover:bg-[#0FA3A3]/10">
                View Details <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Chart */}
              <div className="flex items-end justify-between h-48">
                {weeklyData.map((day, index) => (
                  <div key={day.day} className="flex flex-col items-center gap-2">
                    <div className="relative flex flex-col items-center gap-1">
                      {/* Revenue Bar */}
                      <div 
                        className="w-8 bg-gradient-to-t from-[#0FA3A3] to-[#34d4d4] rounded-t-lg opacity-30"
                        style={{ height: `${(day.revenue / 80000) * 120}px` }}
                      ></div>
                      {/* Users Bar */}
                      <div 
                        className="w-8 bg-gradient-to-t from-[#0FA3A3] to-[#34d4d4] rounded-t-lg -mt-1"
                        style={{ height: `${(day.users / 1700) * 120}px` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500 font-medium">{day.day}</span>
                  </div>
                ))}
              </div>
              
              {/* Legend */}
              <div className="flex items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#0FA3A3] rounded-full"></div>
                  <span className="text-sm text-gray-600">Active Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#0FA3A3] opacity-30 rounded-full"></div>
                  <span className="text-sm text-gray-600">Revenue</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Performers */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">Top Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPerformers.slice(0, 5).map((customer, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[#0FA3A3] to-[#0d8a8a] text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-700">
                      {customer.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 truncate">{customer.name}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>{customer.purchases} purchases</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Gamepad2 className="w-3 h-3" />
                        {customer.games_played}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{customer.points.toLocaleString()}</p>
                    <div className="flex items-center gap-1">
                      <Badge variant="outline" className="text-xs">
                        {customer.tier}
                      </Badge>
                      <span className="text-xs text-green-600">{customer.trend}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Campaigns & Activities */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Active Campaigns */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="text-gray-900">Active Campaigns</span>
              <Button variant="ghost" size="sm" className="text-[#0FA3A3] hover:bg-[#0FA3A3]/10">
                View All <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeCampaigns.slice(0, 3).map(campaign => (
                <div key={campaign.id} className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{campaign.title}</h4>
                        <p className="text-sm text-gray-600">{campaign.objective}</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 border-green-200">
                      {campaign.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Reach: {campaign.estimated_reach.toLocaleString()}</span>
                    <span className="text-gray-600">Since: {new Date(campaign.start_date).toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
              
              {activeCampaigns.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <Target className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p className="font-medium">No active campaigns</p>
                  <p className="text-sm">Create a new campaign to get started</p>
                  <Button variant="outline" size="sm" className="mt-3">
                    Create Campaign
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.slice(0, 6).map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-5 h-5 ${activity.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900 font-medium">{activity.message}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-500">{activity.time}</span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-500">by {activity.user}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}