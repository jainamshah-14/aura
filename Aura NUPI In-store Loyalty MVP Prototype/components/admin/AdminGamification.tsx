import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Switch } from '../ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  Gamepad2, 
  Trophy,
  Medal,
  Target,
  Gift,
  Zap,
  Settings,
  Play,
  Pause,
  Edit,
  Plus,
  Users,
  TrendingUp,
  BarChart3,
  Sparkles,
  Coins,
  Award
} from 'lucide-react';
import { useLoyalty } from '../../contexts/LoyaltyContext';
import { toast } from 'sonner';

export function AdminGamification() {
  const { state } = useLoyalty();
  const [activeTab, setActiveTab] = useState('overview');
  const [showCreateGame, setShowCreateGame] = useState(false);
  const [showCreateAchievement, setShowCreateAchievement] = useState(false);

  // Mock gamification data
  const games = [
    {
      id: 'daily_spin',
      name: 'Daily Spin Wheel',
      type: 'spin_wheel',
      status: 'active',
      players_today: 234,
      total_plays: 15678,
      rewards_distributed: 8945,
      engagement_rate: '78%',
      settings: {
        max_daily_spins: 1,
        min_reward: 5,
        max_reward: 100,
        special_reward_chance: 10
      }
    },
    {
      id: 'scratch_card',
      name: 'Lucky Scratch Cards',
      type: 'scratch_card',
      status: 'active',
      players_today: 189,
      total_plays: 12456,
      rewards_distributed: 7234,
      engagement_rate: '65%',
      settings: {
        daily_limit: 3,
        win_probability: 60,
        jackpot_chance: 2
      }
    },
    {
      id: 'daily_quiz',
      name: 'Knowledge Quiz',
      type: 'quiz',
      status: 'paused',
      players_today: 45,
      total_plays: 8901,
      rewards_distributed: 5432,
      engagement_rate: '42%',
      settings: {
        questions_per_quiz: 5,
        time_limit: 30,
        correct_answer_points: 10
      }
    }
  ];

  const achievements = [
    {
      id: 'first_purchase',
      name: 'First Steps',
      description: 'Make your first purchase',
      category: 'shopping',
      points: 50,
      rarity: 'common',
      unlocked_by: 1247,
      completion_rate: '100%',
      active: true
    },
    {
      id: 'loyal_customer',
      name: 'Loyal Customer',
      description: 'Make 5 purchases in a month',
      category: 'shopping',
      points: 100,
      rarity: 'rare',
      unlocked_by: 456,
      completion_rate: '37%',
      active: true
    },
    {
      id: 'game_master',
      name: 'Game Master',
      description: 'Play games for 7 consecutive days',
      category: 'gaming',
      points: 200,
      rarity: 'epic',
      unlocked_by: 123,
      completion_rate: '10%',
      active: true
    },
    {
      id: 'points_collector',
      name: 'Points Collector',
      description: 'Accumulate 1000 total points',
      category: 'points',
      points: 150,
      rarity: 'rare',
      unlocked_by: 789,
      completion_rate: '63%',
      active: true
    }
  ];

  const gamificationStats = [
    { label: 'Total Game Sessions Today', value: '468', change: '+12%', icon: Gamepad2, color: 'text-blue-600' },
    { label: 'Achievements Unlocked Today', value: '89', change: '+8%', icon: Trophy, color: 'text-yellow-600' },
    { label: 'Reward Points Distributed', value: '12,450', change: '+15%', icon: Gift, color: 'text-green-600' },
    { label: 'User Engagement Rate', value: '74%', change: '+5%', icon: TrendingUp, color: 'text-purple-600' }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-gray-100 text-gray-800';
      case 'rare': return 'bg-blue-100 text-blue-800';
      case 'epic': return 'bg-purple-100 text-purple-800';
      case 'legendary': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Gamification Management</h1>
          <p className="text-gray-600">Manage games, achievements, and reward systems</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <BarChart3 className="w-4 h-4 mr-2" />
            Analytics Report
          </Button>
          <Button className="bg-teal-600 hover:bg-teal-700">
            <Sparkles className="w-4 h-4 mr-2" />
            Create Campaign
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {gamificationStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600 mt-1">{stat.change} vs yesterday</p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-50`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="games">Games</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Popular Games */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gamepad2 className="w-5 h-5 text-blue-600" />
                  Popular Games Today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {games.map(game => (
                    <div key={game.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{game.name}</p>
                        <p className="text-sm text-gray-600">{game.players_today} players today</p>
                      </div>
                      <div className="text-right">
                        <Badge className={game.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                          {game.status}
                        </Badge>
                        <p className="text-sm text-gray-600 mt-1">{game.engagement_rate} engagement</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievement Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-600" />
                  Achievement Completion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.slice(0, 4).map(achievement => (
                    <div key={achievement.id} className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="font-medium">{achievement.name}</p>
                        <p className="text-sm text-gray-600">{achievement.unlocked_by} users</p>
                      </div>
                      <div className="text-right">
                        <Badge className={getRarityColor(achievement.rarity)}>
                          {achievement.rarity}
                        </Badge>
                        <p className="text-sm font-medium mt-1">{achievement.completion_rate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Gamification Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm">234 users played Daily Spin Wheel today</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm">89 new achievements unlocked across all categories</p>
                    <p className="text-xs text-gray-500">4 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm">Lucky Scratch Cards distributed 156 rewards</p>
                    <p className="text-xs text-gray-500">6 hours ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="games" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Game Management</h2>
            <Button onClick={() => setShowCreateGame(true)} className="bg-teal-600 hover:bg-teal-700">
              <Plus className="w-4 h-4 mr-2" />
              Create New Game
            </Button>
          </div>

          <div className="grid gap-6">
            {games.map(game => (
              <Card key={game.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-medium text-lg">{game.name}</h3>
                      <p className="text-sm text-gray-600 capitalize">{game.type.replace('_', ' ')}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={game.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                        {game.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        {game.status === 'active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Players Today</p>
                      <p className="text-lg font-medium">{game.players_today}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total Plays</p>
                      <p className="text-lg font-medium">{game.total_plays.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Rewards Given</p>
                      <p className="text-lg font-medium">{game.rewards_distributed.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Engagement</p>
                      <p className="text-lg font-medium text-green-600">{game.engagement_rate}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Achievement Management</h2>
            <Button onClick={() => setShowCreateAchievement(true)} className="bg-teal-600 hover:bg-teal-700">
              <Plus className="w-4 h-4 mr-2" />
              Create Achievement
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map(achievement => (
              <Card key={achievement.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <Medal className="w-5 h-5 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">{achievement.name}</h3>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                    <Switch defaultChecked={achievement.active} />
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <Badge className={getRarityColor(achievement.rarity)}>
                      {achievement.rarity}
                    </Badge>
                    <div className="flex items-center gap-1 text-teal-600">
                      <Coins className="w-4 h-4" />
                      <span className="font-medium">{achievement.points} pts</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Unlocked by</p>
                      <p className="font-medium">{achievement.unlocked_by} users</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Completion Rate</p>
                      <p className="font-medium">{achievement.completion_rate}</p>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Analytics
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <h2 className="text-xl font-semibold">Gamification Settings</h2>
          
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Global Game Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Enable Gamification</Label>
                    <p className="text-sm text-gray-600">Turn on/off all gamification features</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Daily Game Limits</Label>
                    <p className="text-sm text-gray-600">Enforce daily limits on games</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Achievement Notifications</Label>
                    <p className="text-sm text-gray-600">Send push notifications for achievements</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Reward Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Minimum Game Reward</Label>
                    <Input type="number" defaultValue="5" />
                  </div>
                  <div>
                    <Label>Maximum Game Reward</Label>
                    <Input type="number" defaultValue="100" />
                  </div>
                </div>

                <div>
                  <Label>Special Reward Probability (%)</Label>
                  <Input type="number" defaultValue="10" />
                </div>

                <div>
                  <Label>Jackpot Reward Amount</Label>
                  <Input type="number" defaultValue="500" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}