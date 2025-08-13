import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { 
  ArrowLeft,
  Phone,
  Video,
  MoreHorizontal,
  Smartphone,
  ExternalLink
} from 'lucide-react';
import { useLoyalty } from '../../contexts/LoyaltyContext';
import { toast } from 'sonner';

export function WhatsAppSimulator() {
  const { phone, messageId } = useParams();
  const navigate = useNavigate();
  const { state } = useLoyalty();
  const [currentTime, setCurrentTime] = useState(new Date());

  // Find user by phone number
  const user = state.users.find(u => u.phone === phone);
  const isNewUser = !user || user.total_purchases === 0;

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleViewInApp = () => {
    toast.success('Opening NUPI App...');
    navigate('/consumer');
  };

  const handleDownloadApp = () => {
    toast.success('Redirecting to app download...');
    navigate('/consumer/onboard');
  };

  // Message templates based on user type
  const getMessageContent = () => {
    if (isNewUser) {
      return {
        type: 'welcome',
        title: 'Welcome to NUPI! 🎉',
        content: `Hi! Thank you for shopping with us!

📄 *Digital Receipt*
Amount: ₹150.00
Date: ${new Date().toLocaleDateString()}
Store: Aura Retail Store

🎁 *Welcome Bonus*
You've earned 50 welcome points!

📱 Download the NUPI app to:
• Track your points and rewards
• Get exclusive offers  
• Play games and earn more points
• Unlock achievement badges

Your loyalty journey starts here!`,
        showDownload: true,
        showViewApp: false
      };
    } else {
      return {
        type: 'receipt',
        title: 'Purchase Complete ✅',
        content: `Thank you for shopping with us!

📄 *Digital Receipt*
Amount: ₹150.00
Date: ${new Date().toLocaleDateString()}
Store: Aura Retail Store

💰 *Points Update*
Points Earned: +15 points
Current Balance: ${user?.points_balance || 0} points
Tier Status: ${user?.tier || 'Bronze'}

🎯 *Your Rewards Await*
You have offers and rewards waiting in your NUPI wallet!`,
        showDownload: false,
        showViewApp: true
      };
    }
  };

  const messageContent = getMessageContent();

  return (
    <div className="max-w-sm mx-auto bg-black relative overflow-hidden" style={{ height: '932px', width: '430px' }}>
      {/* iPhone 16 Pro Frame */}
      <div className="absolute inset-0 bg-black rounded-[60px] p-2">
        <div className="w-full h-full bg-black rounded-[50px] overflow-hidden relative">
          
          {/* Dynamic Island */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-full z-50"></div>
          
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-[#075E54] flex items-center justify-between px-6 pt-3 text-white text-sm font-medium z-40">
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full opacity-60"></div>
              <span className="ml-1 text-xs">Airtel</span>
            </div>
            <div className="text-xs font-semibold">
              {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
            <div className="flex items-center gap-1">
              <div className="text-xs">100%</div>
              <div className="w-6 h-3 border border-white rounded-sm">
                <div className="w-full h-full bg-white rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* WhatsApp Header */}
          <div className="absolute top-12 left-0 right-0 h-16 bg-[#075E54] flex items-center px-4 z-30">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate(-1)}
              className="text-white hover:bg-white/10 p-2 mr-3"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex items-center gap-3 flex-1">
              <div className="w-10 h-10 bg-[#128C7E] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">N</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">NUPI Support</h3>
                <p className="text-white/70 text-xs">online</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-2">
                <Video className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-2">
                <Phone className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-2">
                <MoreHorizontal className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Chat Background */}
          <div 
            className="absolute top-28 left-0 right-0 bottom-0 overflow-y-auto"
            style={{
              background: `url("data:image/svg+xml,${encodeURIComponent(`
                <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="whatsapp-bg" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                      <rect width="100" height="100" fill="#0a1014"/>
                      <circle cx="10" cy="10" r="0.5" fill="#ffffff" opacity="0.05"/>
                      <circle cx="50" cy="30" r="0.3" fill="#ffffff" opacity="0.03"/>
                      <circle cx="80" cy="60" r="0.4" fill="#ffffff" opacity="0.04"/>
                      <circle cx="20" cy="80" r="0.2" fill="#ffffff" opacity="0.02"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#whatsapp-bg)"/>
                </svg>
              `)}")`
            }}
          >
            <div className="px-4 py-6">
              {/* Date Separator */}
              <div className="flex justify-center mb-6">
                <div className="bg-[#182229] text-white/70 px-3 py-1 rounded-full text-xs">
                  {new Date().toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
              </div>

              {/* Message Bubble */}
              <div className="flex justify-end mb-4">
                <div className="max-w-[280px] bg-[#005C4B] rounded-3xl rounded-br-md p-4 relative">
                  {/* Message Content */}
                  <div className="text-white space-y-3">
                    <h3 className="font-semibold text-base">{messageContent.title}</h3>
                    <div className="whitespace-pre-line text-sm leading-relaxed">
                      {messageContent.content}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-4 space-y-2">
                    {messageContent.showViewApp && (
                      <Button 
                        onClick={handleViewInApp}
                        className="w-full bg-[#25D366] hover:bg-[#20C05A] text-white border-0 rounded-full h-10 text-sm font-semibold"
                      >
                        <Smartphone className="w-4 h-4 mr-2" />
                        View in NUPI App
                      </Button>
                    )}
                    
                    {messageContent.showDownload && (
                      <Button 
                        onClick={handleDownloadApp}
                        className="w-full bg-[#0084FF] hover:bg-[#0078E7] text-white border-0 rounded-full h-10 text-sm font-semibold"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Download NUPI App
                      </Button>
                    )}
                  </div>

                  {/* Message Time and Status */}
                  <div className="flex items-center justify-end mt-3 gap-1">
                    <span className="text-white/60 text-xs">
                      {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                    <div className="flex">
                      <div className="w-4 h-3 flex items-end justify-end">
                        <svg width="16" height="12" viewBox="0 0 16 12" className="text-[#4FC3F7]">
                          <path fill="currentColor" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l2.541 2.435c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.512z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Powered by footer */}
              <div className="flex justify-center mt-8">
                <div className="bg-[#182229] text-white/50 px-3 py-2 rounded-lg text-xs">
                  💬 Powered by NUPI Loyalty Platform
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Input Area */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#1f2c34] border-t border-[#2a3942] flex items-center px-4">
            <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 mr-3">
              <span className="text-white/50 text-sm">Message...</span>
            </div>
            <div className="w-10 h-10 bg-[#00A884] rounded-full flex items-center justify-center">
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"/>
              </svg>
            </div>
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60"></div>
        </div>
      </div>
    </div>
  );
}