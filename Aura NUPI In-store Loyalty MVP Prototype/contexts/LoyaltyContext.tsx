import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Data Models
export interface User {
  id: string;
  phone: string;
  name: string;
  email: string;
  registered_at: string;
  points_balance: number;
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  last_purchase_date: string;
}

export interface SKU {
  id: string;
  name: string;
  price: number;
  category: string;
  barcode?: string;
}

export interface Transaction {
  id: string;
  user_id?: string;
  skus: { sku: SKU; quantity: number }[];
  total: number;
  date: string;
  points_awarded: number;
  applied_coupons: string[];
  phone?: string;
}

export interface Voucher {
  id: string;
  user_id: string;
  code: string;
  points_cost: number;
  status: 'active' | 'redeemed' | 'expired';
  expiry: string;
  title: string;
  description: string;
}

export interface Campaign {
  id: string;
  title: string;
  objective: string;
  conditions: string;
  reward: string;
  start_date: string;
  end_date: string;
  status: 'draft' | 'active' | 'paused' | 'ended';
  estimated_reach: number;
}

export interface Ticket {
  id: string;
  user_id: string;
  category: string;
  severity: 'low' | 'medium' | 'high';
  status: 'open' | 'assigned' | 'resolved';
  assigned_to?: string;
  title: string;
  description: string;
  created_at: string;
  messages: { sender: string; message: string; timestamp: string }[];
}

export interface LoyaltyState {
  users: User[];
  skus: SKU[];
  transactions: Transaction[];
  vouchers: Voucher[];
  campaigns: Campaign[];
  tickets: Ticket[];
  currentUser?: User;
  cart: { sku: SKU; quantity: number }[];
  loyaltyOffers: any[];
}

// Sample Data
const sampleUsers: User[] = [
  {
    id: '1',
    phone: '9876543210',
    name: 'Priya Sharma',
    email: 'priya@example.com',
    registered_at: '2024-01-15',
    points_balance: 750,
    tier: 'Gold',
    last_purchase_date: '2024-08-10'
  },
  {
    id: '2',
    phone: '9876543211',
    name: 'Rajesh Kumar',
    email: 'rajesh@example.com',
    registered_at: '2024-02-20',
    points_balance: 320,
    tier: 'Silver',
    last_purchase_date: '2024-08-05'
  },
  {
    id: '3',
    phone: '9876543212',
    name: 'Anita Verma',
    email: 'anita@example.com',
    registered_at: '2024-03-10',
    points_balance: 1250,
    tier: 'Platinum',
    last_purchase_date: '2024-08-12'
  }
];

const sampleSKUs: SKU[] = [
  { id: 'SKU001', name: 'Organic Rice 1kg', price: 89, category: 'Groceries', barcode: '8901234567890' },
  { id: 'SKU002', name: 'Tata Tea Premium 250g', price: 125, category: 'Beverages', barcode: '8901234567891' },
  { id: 'SKU003', name: 'Amul Butter 100g', price: 52, category: 'Dairy', barcode: '8901234567892' },
  { id: 'SKU004', name: 'Maggi Noodles 70g', price: 14, category: 'Instant Food', barcode: '8901234567893' },
  { id: 'SKU005', name: 'Colgate Toothpaste 200g', price: 89, category: 'Personal Care', barcode: '8901234567894' },
  { id: 'SKU006', name: 'Britannia Biscuits 200g', price: 35, category: 'Snacks', barcode: '8901234567895' }
];

const sampleVouchers: Voucher[] = [
  {
    id: 'V001',
    user_id: '1',
    code: 'SAVE50',
    points_cost: 100,
    status: 'active',
    expiry: '2024-09-30',
    title: '₹50 Off on Groceries',
    description: 'Get ₹50 off on grocery purchases above ₹200'
  },
  {
    id: 'V002',
    user_id: '1',
    code: 'FREE20',
    points_cost: 200,
    status: 'active',
    expiry: '2024-09-15',
    title: 'Free Delivery',
    description: 'Free home delivery on your next order'
  }
];

const sampleCampaigns: Campaign[] = [
  {
    id: 'C001',
    title: 'Tea Promotion',
    objective: 'Promote Tata Tea Premium',
    conditions: 'Users with last purchase >30 days',
    reward: '100 points on purchase of Tata Tea',
    start_date: '2024-08-01',
    end_date: '2024-08-31',
    status: 'active',
    estimated_reach: 1200
  }
];

const initialState: LoyaltyState = {
  users: sampleUsers,
  skus: sampleSKUs,
  transactions: [],
  vouchers: sampleVouchers,
  campaigns: sampleCampaigns,
  tickets: [],
  cart: [],
  loyaltyOffers: []
};

type LoyaltyAction = 
  | { type: 'ADD_TO_CART'; payload: { sku: SKU; quantity: number } }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_CURRENT_USER'; payload: User | undefined }
  | { type: 'ADD_TRANSACTION'; payload: Transaction }
  | { type: 'UPDATE_USER_POINTS'; payload: { userId: string; points: number } }
  | { type: 'ADD_USER'; payload: User }
  | { type: 'REDEEM_VOUCHER'; payload: { userId: string; voucherId: string } }
  | { type: 'ADD_CAMPAIGN'; payload: Campaign }
  | { type: 'ADD_TICKET'; payload: Ticket }
  | { type: 'UPDATE_TICKET'; payload: { ticketId: string; updates: Partial<Ticket> } };

function loyaltyReducer(state: LoyaltyState, action: LoyaltyAction): LoyaltyState {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.sku.id === action.payload.sku.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.sku.id === action.payload.sku.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        };
      }
      return { ...state, cart: [...state.cart, action.payload] };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.sku.id !== action.payload)
      };

    case 'CLEAR_CART':
      return { ...state, cart: [] };

    case 'SET_CURRENT_USER':
      return { ...state, currentUser: action.payload };

    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      };

    case 'UPDATE_USER_POINTS':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.payload.userId
            ? { ...user, points_balance: action.payload.points }
            : user
        ),
        currentUser: state.currentUser?.id === action.payload.userId
          ? { ...state.currentUser, points_balance: action.payload.points }
          : state.currentUser
      };

    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload]
      };

    case 'REDEEM_VOUCHER':
      return {
        ...state,
        vouchers: state.vouchers.map(voucher =>
          voucher.id === action.payload.voucherId && voucher.user_id === action.payload.userId
            ? { ...voucher, status: 'redeemed' as const }
            : voucher
        )
      };

    case 'ADD_CAMPAIGN':
      return {
        ...state,
        campaigns: [...state.campaigns, action.payload]
      };

    case 'ADD_TICKET':
      return {
        ...state,
        tickets: [...state.tickets, action.payload]
      };

    case 'UPDATE_TICKET':
      return {
        ...state,
        tickets: state.tickets.map(ticket =>
          ticket.id === action.payload.ticketId
            ? { ...ticket, ...action.payload.updates }
            : ticket
        )
      };

    default:
      return state;
  }
}

const LoyaltyContext = createContext<{
  state: LoyaltyState;
  dispatch: React.Dispatch<LoyaltyAction>;
  api: any;
} | null>(null);

export function LoyaltyProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(loyaltyReducer, initialState);

  // Simulated API functions
  const api = {
    loyaltyCheck: async (phone: string) => {
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
      const user = state.users.find(u => u.phone === phone);
      
      if (user) {
        const offers = [
          { id: 'O1', type: 'points', desc: 'Earn 2x points on groceries', discount: 0 },
          { id: 'O2', type: 'coupon', desc: '10% off on total bill', discount: 10 }
        ];
        return {
          registered: true,
          user: user,
          offers: offers
        };
      } else {
        return {
          registered: false,
          suggested_welcome_points: 50
        };
      }
    },

    loyaltyAward: async (userId: string, transactionId: string, points: number) => {
      await new Promise(resolve => setTimeout(resolve, 300));
      const user = state.users.find(u => u.id === userId);
      if (user) {
        const newBalance = user.points_balance + points;
        dispatch({ type: 'UPDATE_USER_POINTS', payload: { userId, points: newBalance } });
        return { success: true, new_balance: newBalance };
      }
      return { success: false, error: 'User not found' };
    },

    whatsappSend: async (phone: string, templateId: string, variables: any) => {
      await new Promise(resolve => setTimeout(resolve, 200));
      return { 
        success: true, 
        message_id: `msg_${Date.now()}`,
        url: `/whatsapp/${phone}/${templateId}`
      };
    },

    appRedeem: async (userId: string, voucherId: string) => {
      await new Promise(resolve => setTimeout(resolve, 400));
      const voucher = state.vouchers.find(v => v.id === voucherId && v.user_id === userId);
      const user = state.users.find(u => u.id === userId);
      
      if (voucher && user && user.points_balance >= voucher.points_cost) {
        dispatch({ type: 'UPDATE_USER_POINTS', payload: { 
          userId, 
          points: user.points_balance - voucher.points_cost 
        }});
        dispatch({ type: 'REDEEM_VOUCHER', payload: { userId, voucherId } });
        return { success: true, voucher_code: `REDEEMED_${Date.now()}` };
      }
      return { success: false, error: 'Insufficient points or invalid voucher' };
    }
  };

  return (
    <LoyaltyContext.Provider value={{ state, dispatch, api }}>
      {children}
    </LoyaltyContext.Provider>
  );
}

export function useLoyalty() {
  const context = useContext(LoyaltyContext);
  if (!context) {
    throw new Error('useLoyalty must be used within a LoyaltyProvider');
  }
  return context;
}