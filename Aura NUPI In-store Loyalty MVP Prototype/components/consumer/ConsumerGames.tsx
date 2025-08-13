import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { 
  GameController2, 
  RotateCcw, 
  Gift, 
  Trophy,
  Star,
  Zap
} from 'lucide-react';
import { useLoyalty } from '../../contexts/LoyaltyContext';
import { toast } from 'sonner';

export function ConsumerGames({ user }: { user: any }) {
  const { dispatch } = useLoyalty();
  const [isSpinning, setIsSpinning] = useState(false);
  const [lastSpin, setLastSpin] = useState<Date | null>(null);
  const [spinResult, setSpinResult] = useState<number | null>(null);
  const [scratchRevealed, setScratchRevealed] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const canSpin = !lastSpin || Date.now() - lastSpin.getTime() > 24 * 60 * 60 * 1000; // 24 hours

  const spinWheel = async () => {
    if (!canSpin) {
      toast.error('You can only spin once per day!');
      return;
    }

    setIsSpinning(true);
    
    // Simulate spinning animation
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const prizes = [5, 10, 15, 20, 25, 50, 100];
    const wonPoints = prizes[Math.floor(Math.random() * prizes.length)];
    
    setSpinResult(wonPoints);
    setLastSpin(new Date());
    setIsSpinning(false);
    
    // Update user points
    dispatch({ 
      type: 'UPDATE_USER_POINTS', 
      payload: { userId: user.id, points: user.points_balance + wonPoints }
    });
    
    toast.success(`🎉 You won ${wonPoints} points!`);
  };

  const scratchCard = () => {
    if (scratchRevealed) return;
    
    setScratchRevealed(true);
    const wonPoints = Math.random() > 0.5 ? 25 : 10;
    
    dispatch({ 
      type: 'UPDATE_USER_POINTS', 
      payload: { userId: user.id, points: user.points_balance + wonPoints }
    });
    
    toast.success(`🎉 Scratch card revealed ${wonPoints} points!`);
  };

  const quizQuestions = [
    {
      question: "Which tea is known for its strong flavor and is commonly consumed in India?",
      options: ["Green Tea", "Assam Tea", "Oolong Tea", "White Tea"],
      correct: 1
    },
    {
      question: "What is the main ingredient in traditional Indian butter?",
      options: ["Cow Milk", "Buffalo Milk", "Goat Milk", "Plant-based Oil"],
      correct: 0
    },
    {
      question: "Which spice is known as the 'Queen of Spices'?",
      options: ["Turmeric", "Cardamom", "Cinnamon", "Black Pepper"],
      correct: 1
    }
  ];

  const answerQuiz = (selectedOption: number) => {
    if (selectedOption === quizQuestions[currentQuestion].correct) {
      setQuizScore(prev => prev + 10);
      toast.success('Correct! +10 points');
    } else {
      toast.error('Incorrect answer');
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Quiz completed
      dispatch({ 
        type: 'UPDATE_USER_POINTS', 
        payload: { userId: user.id, points: user.points_balance + quizScore + 10 }
      });
      toast.success(`Quiz completed! Total score: ${quizScore + 10} points`);
    }
  };

  return (
    <div className="p-4 space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Games & Rewards</h1>
        <p className="text-gray-600">Play games and earn points!</p>
      </div>

      {/* Daily Spin Wheel */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RotateCcw className="w-5 h-5" />
            Daily Spin Wheel
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="relative w-48 h-48 mx-auto">
            <div className={`w-full h-full rounded-full border-8 border-teal-500 bg-gradient-conic from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 flex items-center justify-center ${isSpinning ? 'animate-spin' : ''}`}>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                {isSpinning ? (
                  <RotateCcw className="w-8 h-8 text-teal-600 animate-spin" />
                ) : spinResult ? (
                  <span className="font-bold text-lg">{spinResult}</span>
                ) : (
                  <Gift className="w-8 h-8 text-teal-600" />
                )}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            {canSpin ? (
              <Button 
                onClick={spinWheel}
                disabled={isSpinning}
                className="bg-teal-600 hover:bg-teal-700"
              >
                {isSpinning ? 'Spinning...' : 'Spin Now!'}
              </Button>
            ) : (
              <div>
                <Badge variant="secondary">Already played today</Badge>
                <p className="text-sm text-gray-600 mt-1">Come back tomorrow for another spin!</p>
              </div>
            )}
          </div>

          <div className="text-sm text-gray-600">
            Possible rewards: 5, 10, 15, 20, 25, 50, 100 points
          </div>
        </CardContent>
      </Card>

      {/* Scratch Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5" />
            Scratch Card
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div 
            className={`w-48 h-32 mx-auto rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer transition-all ${
              scratchRevealed ? 'bg-gradient-to-r from-yellow-400 to-orange-400' : 'bg-gray-200'
            }`}
            onClick={scratchCard}
          >
            {scratchRevealed ? (
              <div className="text-center text-white">
                <Gift className="w-8 h-8 mx-auto mb-2" />
                <p className="font-bold">You Won!</p>
                <p>{Math.random() > 0.5 ? '25' : '10'} Points</p>
              </div>
            ) : (
              <div className="text-center text-gray-600">
                <p className="text-sm">Tap to scratch</p>
                <p className="text-xs">Reveal your reward!</p>
              </div>
            )}
          </div>

          {!scratchRevealed && (
            <Button 
              onClick={scratchCard}
              variant="outline"
              className="border-teal-600 text-teal-600 hover:bg-teal-50"
            >
              Scratch to Reveal
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Daily Quiz */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Daily Quiz
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Progress</span>
            <span className="text-sm text-gray-600">{currentQuestion + 1}/{quizQuestions.length}</span>
          </div>
          
          <Progress value={(currentQuestion / quizQuestions.length) * 100} className="h-2" />

          {currentQuestion < quizQuestions.length ? (
            <div className="space-y-4">
              <h4 className="font-medium">{quizQuestions[currentQuestion].question}</h4>
              
              <div className="space-y-2">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full text-left justify-start h-auto p-3"
                    onClick={() => answerQuiz(index)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center space-y-2">
              <Trophy className="w-12 h-12 mx-auto text-yellow-500" />
              <h4 className="font-medium">Quiz Completed!</h4>
              <p className="text-sm text-gray-600">Final Score: {quizScore} points</p>
              <Button 
                onClick={() => {
                  setCurrentQuestion(0);
                  setQuizScore(0);
                }}
                className="bg-teal-600 hover:bg-teal-700"
              >
                Play Again Tomorrow
              </Button>
            </div>
          )}

          <div className="text-center">
            <Badge className="bg-teal-100 text-teal-800">
              Current Score: {quizScore} points
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Game Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Your Gaming Stats</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <span>Games Played Today</span>
            <Badge variant="secondary">
              {(!canSpin ? 1 : 0) + (scratchRevealed ? 1 : 0) + (currentQuestion > 0 ? 1 : 0)}
            </Badge>
          </div>
          <div className="flex justify-between">
            <span>Points Earned Today</span>
            <Badge className="bg-teal-100 text-teal-800">
              {(spinResult || 0) + (scratchRevealed ? 25 : 0) + quizScore}
            </Badge>
          </div>
          <div className="flex justify-between">
            <span>Total Gaming Points</span>
            <Badge>500+</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}