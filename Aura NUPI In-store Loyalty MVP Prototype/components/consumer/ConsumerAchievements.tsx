import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  Trophy, 
  Medal, 
  Star, 
  Target,
  Gift,
  ShoppingBag,
  Calendar,
  Users,
  Gamepad2,
  Lock
} from 'lucide-react';

export function ConsumerAchievements({ user }: { user: any }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock achievements data
  const achievements = [
    {
      id: 'first_purchase',
      title: 'First Steps',
      description: 'Make your first purchase',
      category: 'shopping',
      points: 50,
      completed: true,
      completedAt: '2024-08-01',
      icon: ShoppingBag,
      rarity: 'common'
    },
    {
      id: 'loyal_customer',
      title: 'Loyal Customer',
      description: 'Make 5 purchases in a month',
      category: 'shopping',
      points: 100,
      completed: true,
      completedAt: '2024-08-10',
      icon: Medal,
      rarity: 'rare'
    },
    {
      id: 'points_collector',
      title: 'Points Collector',
      description: 'Accumulate 1000 total points',
      category: 'points',
      points: 150,
      completed: false,
      progress: 75,
      icon: Star,
      rarity: 'rare'
    },
    {
      id: 'game_master',
      title: 'Game Master',
      description: 'Play games for 7 consecutive days',
      category: 'gaming',
      points: 200,
      completed: false,
      progress: 57,
      icon: Gamepad2,
      rarity: 'epic'
    },
    {
      id: 'referral_champion',
      title: 'Referral Champion',
      description: 'Refer 5 friends to NUPI',
      category: 'social',
      points: 300,
      completed: false,
      progress: 20,
      icon: Users,
      rarity: 'legendary'
    },
    {
      id: 'tier_climber',
      title: 'Gold Rush',
      description: 'Reach Gold tier status',
      category: 'tier',
      points: 250,
      completed: true,
      completedAt: '2024-08-05',
      icon: Trophy,
      rarity: 'epic'
    }
  ];

  const categories = [
    { id: 'all', label: 'All', icon: Target },
    { id: 'shopping', label: 'Shopping', icon: ShoppingBag },
    { id: 'points', label: 'Points', icon: Star },
    { id: 'gaming', label: 'Gaming', icon: Gamepad2 },
    { id: 'social', label: 'Social', icon: Users },
    { id: 'tier', label: 'Tiers', icon: Trophy }
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

  const filteredAchievements = selectedCategory === 'all' 
    ? achievements 
    : achievements.filter(a => a.category === selectedCategory);

  const completedAchievements = achievements.filter(a => a.completed);
  const totalPoints = completedAchievements.reduce((sum, a) => sum + a.points, 0);

  return (
    <div className="p-4 space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Achievements</h1>
        <p className="text-gray-600">Track your progress and earn rewards</p>
      </div>

      {/* Achievement Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {completedAchievements.length}
            </div>
            <p className="text-sm text-gray-600">Unlocked</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">
              {achievements.length - completedAchievements.length}
            </div>
            <p className="text-sm text-gray-600">In Progress</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">
              {totalPoints}
            </div>
            <p className="text-sm text-gray-600">Points Earned</p>
          </CardContent>
        </Card>
      </div>

      {/* Category Filter */}
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map(category => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2 whitespace-nowrap"
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Achievements List */}
      <div className="space-y-4">
        {filteredAchievements.map(achievement => {
          const Icon = achievement.icon;
          return (
            <Card key={achievement.id} className={`overflow-hidden ${
              achievement.completed ? 'border-green-200 bg-green-50/30' : ''
            }`}>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    achievement.completed 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {achievement.completed ? (
                      <Medal className="w-6 h-6" />
                    ) : (
                      <Icon className="w-6 h-6" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-medium">{achievement.title}</h3>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className={getRarityColor(achievement.rarity)}>
                            {achievement.rarity}
                          </Badge>
                          <Badge className="bg-teal-100 text-teal-800">
                            {achievement.points} pts
                          </Badge>
                        </div>
                        {achievement.completed && achievement.completedAt && (
                          <p className="text-xs text-gray-500">
                            {new Date(achievement.completedAt).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    </div>

                    {!achievement.completed && achievement.progress !== undefined && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{achievement.progress}%</span>
                        </div>
                        <Progress value={achievement.progress} className="h-2" />
                      </div>
                    )}

                    {achievement.completed && (
                      <div className="flex items-center gap-2 text-green-600 text-sm">
                        <Medal className="w-4 h-4" />
                        <span>Achievement Unlocked!</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-600" />
            Recent Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {completedAchievements.slice(0, 3).map(achievement => {
              const Icon = achievement.icon;
              return (
                <div key={achievement.id} className="flex items-center gap-3 p-2 bg-green-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Medal className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{achievement.title}</p>
                    <p className="text-xs text-gray-600">+{achievement.points} points</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    {achievement.completedAt && new Date(achievement.completedAt).toLocaleDateString()}
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Achievement Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            Tips to Unlock More
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Shop regularly to unlock purchase milestones</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Play daily games to earn gaming achievements</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Refer friends to unlock social rewards</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span>Accumulate points to reach tier achievements</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}