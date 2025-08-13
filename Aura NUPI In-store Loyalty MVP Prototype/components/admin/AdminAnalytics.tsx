import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Target,
  Gift,
  Calendar
} from 'lucide-react';

export function AdminAnalytics() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
        <p className="text-gray-600">Comprehensive insights into your loyalty program performance</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Users</p>
                <p className="text-2xl font-bold">1,247</p>
                <Badge className="bg-green-100 text-green-800 mt-1">+12% vs last month</Badge>
              </div>
              <Users className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Points Awarded</p>
                <p className="text-2xl font-bold">45,678</p>
                <Badge className="bg-green-100 text-green-800 mt-1">+8% vs last month</Badge>
              </div>
              <Gift className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Redemption Rate</p>
                <p className="text-2xl font-bold">23.4%</p>
                <Badge className="bg-green-100 text-green-800 mt-1">+5.2% vs last month</Badge>
              </div>
              <Target className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Revenue Uplift</p>
                <p className="text-2xl font-bold">₹2.3L</p>
                <Badge className="bg-green-100 text-green-800 mt-1">+22% vs last month</Badge>
              </div>
              <TrendingUp className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Placeholder */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <BarChart3 className="w-12 h-12 mx-auto mb-2" />
                <p>Chart visualization would appear here</p>
                <p className="text-sm">Integration with recharts library</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Points Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <BarChart3 className="w-12 h-12 mx-auto mb-2" />
                <p>Chart visualization would appear here</p>
                <p className="text-sm">Points earned vs redeemed over time</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Analytics */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Comprehensive analytics dashboard with interactive charts, user segments, campaign performance, and export capabilities would be implemented here.</p>
        </CardContent>
      </Card>
    </div>
  );
}