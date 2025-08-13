import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  Gift, 
  Store, 
  Ticket, 
  Clock, 
  Tag,
  Star,
  ShoppingBag
} from 'lucide-react';

export function ConsumerOffers({ user }: { user: any }) {
  const [activeTab, setActiveTab] = useState('products');

  const productOffers = [
    {
      id: 'P001',
      title: 'Organic Rice 1kg',
      description: 'Premium quality organic rice',
      originalPrice: 120,
      discountedPrice: 89,
      discount: 26,
      pointsRequired: 0,
      category: 'Groceries',
      image: '🌾'
    },
    {
      id: 'P002',
      title: 'Tata Tea Premium 250g',
      description: 'Rich and aromatic tea blend',
      originalPrice: 150,
      discountedPrice: 125,
      discount: 17,
      pointsRequired: 50,
      category: 'Beverages',
      image: '🍵'
    },
    {
      id: 'P003',
      title: 'Amul Butter 100g',
      description: 'Fresh dairy butter',
      originalPrice: 65,
      discountedPrice: 52,
      discount: 20,
      pointsRequired: 25,
      category: 'Dairy',
      image: '🧈'
    }
  ];

  const voucherOffers = [
    {
      id: 'V001',
      title: '₹50 Off on Groceries',
      description: 'Valid on purchases above ₹200',
      pointsCost: 100,
      validity: '30 days',
      category: 'Discount',
      value: 50
    },
    {
      id: 'V002',
      title: 'Free Home Delivery',
      description: 'Free delivery on next 3 orders',
      pointsCost: 150,
      validity: '45 days',
      category: 'Service',
      value: 60
    },
    {
      id: 'V003',
      title: '20% Off Personal Care',
      description: 'Valid on all personal care items',
      pointsCost: 200,
      validity: '15 days',
      category: 'Discount',
      value: 100
    }
  ];

  const experienceOffers = [
    {
      id: 'E001',
      title: 'Cooking Workshop',
      description: 'Learn to cook authentic Indian dishes',
      pointsCost: 500,
      duration: '3 hours',
      location: 'Aura Cooking Studio',
      slots: 'Weekend batches available'
    },
    {
      id: 'E002',
      title: 'Tea Tasting Session',
      description: 'Explore different tea varieties from across India',
      pointsCost: 300,
      duration: '2 hours',
      location: 'Aura Experience Center',
      slots: 'Daily 4 PM - 6 PM'
    },
    {
      id: 'E003',
      title: 'Farm Visit',
      description: 'Visit organic farms and learn about sustainable farming',
      pointsCost: 800,
      duration: '1 day',
      location: 'Partner Organic Farms',
      slots: 'First Saturday of every month'
    }
  ];

  return (
    <div className="p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Offers & Rewards</h1>
        <p className="text-gray-600">Discover amazing deals and experiences</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="products" className="flex items-center gap-2">
            <Store className="w-4 h-4" />
            Products
          </TabsTrigger>
          <TabsTrigger value="vouchers" className="flex items-center gap-2">
            <Gift className="w-4 h-4" />
            Vouchers
          </TabsTrigger>
          <TabsTrigger value="experiences" className="flex items-center gap-2">
            <Ticket className="w-4 h-4" />
            Experiences
          </TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="space-y-4 mt-4">
          <div className="grid gap-4">
            {productOffers.map(product => (
              <Card key={product.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{product.image}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium">{product.title}</h3>
                          <p className="text-sm text-gray-600">{product.description}</p>
                          <Badge variant="outline" className="mt-1">{product.category}</Badge>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold">₹{product.discountedPrice}</span>
                            <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                          </div>
                          <Badge className="bg-green-100 text-green-800">{product.discount}% OFF</Badge>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="text-sm text-gray-600">
                          {product.pointsRequired > 0 ? (
                            <span>Unlock with {product.pointsRequired} points</span>
                          ) : (
                            <span>Available for all customers</span>
                          )}
                        </div>
                        <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                          <ShoppingBag className="w-4 h-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="vouchers" className="space-y-4 mt-4">
          <div className="grid gap-4">
            {voucherOffers.map(voucher => (
              <Card key={voucher.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-medium">{voucher.title}</h3>
                        <Badge variant="outline">{voucher.category}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{voucher.description}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          Value: ₹{voucher.value}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Valid for {voucher.validity}
                        </span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-lg font-bold text-teal-600 mb-2">
                        {voucher.pointsCost} points
                      </div>
                      <Button 
                        size="sm" 
                        className="bg-teal-600 hover:bg-teal-700"
                        disabled={user.points_balance < voucher.pointsCost}
                      >
                        {user.points_balance < voucher.pointsCost ? 'Insufficient Points' : 'Redeem'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="experiences" className="space-y-4 mt-4">
          <div className="grid gap-4">
            {experienceOffers.map(experience => (
              <Card key={experience.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium mb-2">{experience.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{experience.description}</p>
                      
                      <div className="space-y-1 text-sm text-gray-600">
                        <div>📍 {experience.location}</div>
                        <div>⏱️ Duration: {experience.duration}</div>
                        <div>📅 {experience.slots}</div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-lg font-bold text-teal-600 mb-2">
                        {experience.pointsCost} points
                      </div>
                      <Button 
                        size="sm" 
                        className="bg-teal-600 hover:bg-teal-700"
                        disabled={user.points_balance < experience.pointsCost}
                      >
                        {user.points_balance < experience.pointsCost ? 'Insufficient Points' : 'Book Now'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}