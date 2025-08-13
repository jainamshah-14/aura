import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { 
  HelpCircle, 
  MessageSquare, 
  Clock,
  CheckCircle,
  AlertCircle,
  Search,
  User
} from 'lucide-react';
import { useLoyalty } from '../../contexts/LoyaltyContext';

export function AdminSupport() {
  const { state } = useLoyalty();
  const [selectedTicket, setSelectedTicket] = useState<string>('');
  const [response, setResponse] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock support tickets
  const mockTickets = [
    {
      id: 'T001',
      user_id: state.users[0]?.id,
      title: 'Points not credited',
      description: 'I made a purchase yesterday but points were not added to my account',
      status: 'open',
      severity: 'medium',
      created_at: '2024-08-13T10:30:00Z',
      customer_name: state.users[0]?.name,
      customer_phone: state.users[0]?.phone
    },
    {
      id: 'T002',
      user_id: state.users[1]?.id,
      title: 'Cannot redeem voucher',
      description: 'Getting error when trying to redeem my ₹50 off voucher',
      status: 'assigned',
      severity: 'high',
      created_at: '2024-08-13T09:15:00Z',
      customer_name: state.users[1]?.name,
      customer_phone: state.users[1]?.phone
    },
    {
      id: 'T003',
      user_id: state.users[2]?.id,
      title: 'App login issue',
      description: 'Cannot login to the NUPI app with my phone number',
      status: 'resolved',
      severity: 'low',
      created_at: '2024-08-12T16:45:00Z',
      customer_name: state.users[2]?.name,
      customer_phone: state.users[2]?.phone
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-red-100 text-red-800';
      case 'assigned': return 'bg-yellow-100 text-yellow-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const handleAssignTicket = (ticketId: string) => {
    // In real implementation, this would update the ticket status
    console.log('Assigning ticket:', ticketId);
  };

  const handleSelectTicket = (ticketId: string) => {
    setSelectedTicket(ticketId);
    setResponse(''); // Clear response when selecting a new ticket
  };

  const selectedTicketData = mockTickets.find(t => t.id === selectedTicket);

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Support Management</h1>
          <p className="text-gray-600">Handle customer support tickets and inquiries</p>
        </div>
        <Button className="bg-teal-600 hover:bg-teal-700">
          Create Ticket
        </Button>
      </div>

      {/* Support Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-600">
              {mockTickets.filter(t => t.status === 'open').length}
            </div>
            <p className="text-sm text-gray-600">Open Tickets</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {mockTickets.filter(t => t.status === 'assigned').length}
            </div>
            <p className="text-sm text-gray-600">In Progress</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">
              {mockTickets.filter(t => t.status === 'resolved').length}
            </div>
            <p className="text-sm text-gray-600">Resolved Today</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">2.5h</div>
            <p className="text-sm text-gray-600">Avg Response Time</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Tickets List */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Support Tickets</span>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search tickets..." 
                  className="pl-10 w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockTickets.map(ticket => (
                <div 
                  key={ticket.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedTicket === ticket.id ? 'border-teal-500 bg-teal-50' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => handleSelectTicket(ticket.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-medium">{ticket.title}</h4>
                        <Badge className={getStatusColor(ticket.status)}>
                          {ticket.status}
                        </Badge>
                        <span className={`text-sm ${getSeverityColor(ticket.severity)}`}>
                          {ticket.severity}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{ticket.description}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {ticket.customer_name}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {new Date(ticket.created_at).toLocaleString()}
                        </span>
                      </div>
                    </div>
                    
                    {ticket.status === 'open' && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAssignTicket(ticket.id);
                        }}
                      >
                        Assign to Me
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Ticket Details */}
        <Card>
          <CardHeader>
            <CardTitle>Ticket Details</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedTicketData ? (
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">{selectedTicketData.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{selectedTicketData.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Status:</span>
                      <Badge className={getStatusColor(selectedTicketData.status)}>
                        {selectedTicketData.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Severity:</span>
                      <span className={getSeverityColor(selectedTicketData.severity)}>
                        {selectedTicketData.severity}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Customer:</span>
                      <span>{selectedTicketData.customer_name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Phone:</span>
                      <span>{selectedTicketData.customer_phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Created:</span>
                      <span>{new Date(selectedTicketData.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="response">Response</Label>
                  <Textarea
                    id="response"
                    placeholder="Type your response..."
                    value={response}
                    onChange={(e) => setResponse(e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="flex gap-2">
                  <Button className="bg-teal-600 hover:bg-teal-700" size="sm">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Send Response
                  </Button>
                  <Button variant="outline" size="sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Mark Resolved
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <HelpCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>Select a ticket to view details</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}