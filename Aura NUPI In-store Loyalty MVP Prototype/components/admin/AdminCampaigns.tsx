import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { 
  Plus, 
  Target, 
  Calendar,
  Users,
  BarChart3,
  Edit,
  Trash2,
  Play,
  Pause,
  Sparkles
} from 'lucide-react';
import { useLoyalty } from '../../contexts/LoyaltyContext';
import { toast } from 'sonner';

export function AdminCampaigns() {
  const { state, dispatch } = useLoyalty();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newCampaign, setNewCampaign] = useState({
    title: '',
    objective: '',
    conditions: '',
    reward: '',
    start_date: '',
    end_date: '',
    estimated_reach: ''
  });

  const handleCreateCampaign = () => {
    if (!newCampaign.title || !newCampaign.objective) {
      toast.error('Please fill in required fields');
      return;
    }

    const campaign = {
      id: `C_${Date.now()}`,
      ...newCampaign,
      estimated_reach: parseInt(newCampaign.estimated_reach) || 0,
      status: 'draft' as const
    };

    dispatch({ type: 'ADD_CAMPAIGN', payload: campaign });
    toast.success('Campaign created successfully!');
    setShowCreateForm(false);
    setNewCampaign({
      title: '',
      objective: '',
      conditions: '',
      reward: '',
      start_date: '',
      end_date: '',
      estimated_reach: ''
    });
  };

  const useSuggestion = (suggestion: any) => {
    setNewCampaign({
      title: suggestion.title,
      objective: suggestion.objective,
      conditions: suggestion.conditions,
      reward: suggestion.reward,
      start_date: '',
      end_date: '',
      estimated_reach: suggestion.estimated_reach.toString()
    });
    setShowCreateForm(true);
  };

  const aiSuggestions = [
    {
      title: 'Weekend Warriors',
      objective: 'Increase weekend sales',
      conditions: 'Active on weekends, last purchase >7 days',
      reward: '2x points on weekend purchases',
      estimated_reach: 850
    },
    {
      title: 'New Customer Welcome',
      objective: 'Onboard new customers',
      conditions: 'First-time shoppers',
      reward: '100 welcome points + 20% off next purchase',
      estimated_reach: 200
    },
    {
      title: 'High Spender Appreciation',
      objective: 'Retain high-value customers',
      conditions: 'Total spend >₹10,000 in last 3 months',
      reward: 'Exclusive 500 bonus points',
      estimated_reach: 45
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Campaign Management</h1>
          <p className="text-gray-600">Create and manage your loyalty campaigns</p>
        </div>
        <Button onClick={() => setShowCreateForm(true)} className="bg-teal-600 hover:bg-teal-700">
          <Plus className="w-4 h-4 mr-2" />
          Create Campaign
        </Button>
      </div>

      {/* AI Campaign Builder */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            AI Campaign Suggestions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiSuggestions.map((suggestion, index) => (
              <Card key={index} className="border-dashed border-2 border-gray-200 hover:border-teal-300 transition-colors">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">{suggestion.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{suggestion.objective}</p>
                  <div className="space-y-2 text-xs">
                    <div>
                      <strong>Target:</strong> {suggestion.conditions}
                    </div>
                    <div>
                      <strong>Reward:</strong> {suggestion.reward}
                    </div>
                    <div>
                      <strong>Reach:</strong> ~{suggestion.estimated_reach} users
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full mt-3"
                    onClick={() => useSuggestion(suggestion)}
                  >
                    Use Template
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Create Campaign Form */}
      {showCreateForm && (
        <Card>
          <CardHeader>
            <CardTitle>Create New Campaign</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Campaign Title *</Label>
                <Input
                  id="title"
                  value={newCampaign.title}
                  onChange={(e) => setNewCampaign({...newCampaign, title: e.target.value})}
                  placeholder="e.g., Weekend Double Points"
                />
              </div>
              <div>
                <Label htmlFor="objective">Objective *</Label>
                <Input
                  id="objective"
                  value={newCampaign.objective}
                  onChange={(e) => setNewCampaign({...newCampaign, objective: e.target.value})}
                  placeholder="e.g., Increase weekend sales"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="conditions">Target Conditions</Label>
              <Textarea
                id="conditions"
                value={newCampaign.conditions}
                onChange={(e) => setNewCampaign({...newCampaign, conditions: e.target.value})}
                placeholder="e.g., Users with last purchase >30 days"
                rows={2}
              />
            </div>

            <div>
              <Label htmlFor="reward">Reward</Label>
              <Input
                id="reward"
                value={newCampaign.reward}
                onChange={(e) => setNewCampaign({...newCampaign, reward: e.target.value})}
                placeholder="e.g., 100 bonus points"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="start_date">Start Date</Label>
                <Input
                  id="start_date"
                  type="date"
                  value={newCampaign.start_date}
                  onChange={(e) => setNewCampaign({...newCampaign, start_date: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="end_date">End Date</Label>
                <Input
                  id="end_date"
                  type="date"
                  value={newCampaign.end_date}
                  onChange={(e) => setNewCampaign({...newCampaign, end_date: e.target.value})}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="reach">Estimated Reach</Label>
              <Input
                id="reach"
                type="number"
                value={newCampaign.estimated_reach}
                onChange={(e) => setNewCampaign({...newCampaign, estimated_reach: e.target.value})}
                placeholder="Number of users"
              />
            </div>

            <div className="flex gap-2">
              <Button onClick={handleCreateCampaign} className="bg-teal-600 hover:bg-teal-700">
                Create Campaign
              </Button>
              <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Existing Campaigns */}
      <Card>
        <CardHeader>
          <CardTitle>All Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {state.campaigns.map(campaign => (
              <div key={campaign.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-medium">{campaign.title}</h4>
                    <Badge 
                      variant={
                        campaign.status === 'active' ? 'default' :
                        campaign.status === 'draft' ? 'secondary' :
                        campaign.status === 'paused' ? 'outline' :
                        'destructive'
                      }
                    >
                      {campaign.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{campaign.objective}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {campaign.estimated_reach.toLocaleString()} users
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(campaign.start_date).toLocaleDateString()} - {new Date(campaign.end_date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {campaign.status === 'active' ? (
                    <Button variant="outline" size="sm">
                      <Pause className="w-4 h-4 mr-2" />
                      Pause
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm">
                      <Play className="w-4 h-4 mr-2" />
                      Activate
                    </Button>
                  )}
                  <Button variant="outline" size="sm">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Analytics
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}