import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { 
  MessageSquare, 
  Send, 
  Edit,
  Plus,
  Eye
} from 'lucide-react';

export function AdminWhatsApp() {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [templateName, setTemplateName] = useState('');
  const [templateContent, setTemplateContent] = useState('');
  const [broadcastTemplate, setBroadcastTemplate] = useState('');
  const [broadcastAudience, setBroadcastAudience] = useState('');

  const templates = [
    {
      id: 'welcome',
      name: 'Welcome Message',
      status: 'active',
      content: 'Welcome to NUPI! We\'ve credited you {{points}} welcome points. Download the app: {{app_link}}',
      variables: ['points', 'app_link']
    },
    {
      id: 'receipt',
      name: 'Purchase Receipt',
      status: 'active',
      content: 'Thanks for shopping! Receipt: ₹{{amount}}. You earned {{points}} points. Balance: {{balance}}. View offers: {{app_link}}',
      variables: ['amount', 'points', 'balance', 'app_link']
    },
    {
      id: 'campaign',
      name: 'Campaign Notification',
      status: 'active',
      content: '🔥 {{campaign_title}}: {{description}} Valid till {{expiry}}. Claim: {{link}}',
      variables: ['campaign_title', 'description', 'expiry', 'link']
    }
  ];

  // Update template editor when a template is selected
  React.useEffect(() => {
    const template = templates.find(t => t.id === selectedTemplate);
    if (template) {
      setTemplateName(template.name);
      setTemplateContent(template.content);
    } else {
      setTemplateName('');
      setTemplateContent('');
    }
  }, [selectedTemplate]);

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">WhatsApp Templates</h1>
          <p className="text-gray-600">Manage message templates and broadcasts</p>
        </div>
        <Button className="bg-teal-600 hover:bg-teal-700">
          <Plus className="w-4 h-4 mr-2" />
          New Template
        </Button>
      </div>

      {/* Message Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">1,234</div>
            <p className="text-sm text-gray-600">Messages Sent Today</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">98.5%</div>
            <p className="text-sm text-gray-600">Delivery Rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">15.2%</div>
            <p className="text-sm text-gray-600">Click-through Rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">3</div>
            <p className="text-sm text-gray-600">Active Templates</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Templates List */}
        <Card>
          <CardHeader>
            <CardTitle>Message Templates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {templates.map(template => (
                <div 
                  key={template.id} 
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedTemplate === template.id ? 'border-teal-500 bg-teal-50' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{template.name}</h4>
                    <Badge className="bg-green-100 text-green-800">
                      {template.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{template.content}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {template.variables.map(variable => (
                        <Badge key={variable} variant="outline" className="text-xs">
                          {`{{${variable}}}`}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="w-3 h-3" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Template Editor */}
        <Card>
          <CardHeader>
            <CardTitle>Template Editor</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {selectedTemplate ? (
              <>
                <div>
                  <Label htmlFor="template-name">Template Name</Label>
                  <Input 
                    id="template-name" 
                    value={templateName}
                    onChange={(e) => setTemplateName(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="template-content">Message Content</Label>
                  <Textarea 
                    id="template-content"
                    value={templateContent}
                    onChange={(e) => setTemplateContent(e.target.value)}
                    rows={4}
                    placeholder="Enter your message template here..."
                  />
                </div>
                <div>
                  <Label>Available Variables</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {templates.find(t => t.id === selectedTemplate)?.variables.map(variable => (
                      <Badge key={variable} variant="outline">
                        {`{{${variable}}}`}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button className="bg-teal-600 hover:bg-teal-700">
                    Save Template
                  </Button>
                  <Button variant="outline">
                    Preview
                  </Button>
                </div>
              </>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>Select a template to edit</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Broadcast Section */}
      <Card>
        <CardHeader>
          <CardTitle>Send Broadcast</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="broadcast-template">Select Template</Label>
              <Select value={broadcastTemplate} onValueChange={setBroadcastTemplate}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a template..." />
                </SelectTrigger>
                <SelectContent>
                  {templates.map(template => (
                    <SelectItem key={template.id} value={template.id}>
                      {template.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="broadcast-audience">Target Audience</Label>
              <Select value={broadcastAudience} onValueChange={setBroadcastAudience}>
                <SelectTrigger>
                  <SelectValue placeholder="Select audience..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Users</SelectItem>
                  <SelectItem value="bronze">Bronze Tier</SelectItem>
                  <SelectItem value="silver">Silver Tier</SelectItem>
                  <SelectItem value="gold">Gold+ Tier</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button className="bg-teal-600 hover:bg-teal-700">
              <Send className="w-4 h-4 mr-2" />
              Send Broadcast
            </Button>
            <Button variant="outline">
              Schedule Later
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}