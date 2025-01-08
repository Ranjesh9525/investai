'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function AIPortfolioVisualizer() {
  const [portfolio, setPortfolio] = useState<string | null>(null)
  const [riskTolerance, setRiskTolerance] = useState('')

  const generatePortfolio = () => {
    // In a real application, this would call an AI service to generate the portfolio
    const mockPortfolio = `
      Based on your risk profile (${riskTolerance}) and financial goals, here's a suggested portfolio allocation:

      - 40% Large Cap Stocks
      - 20% International Stocks
      - 15% Small Cap Stocks
      - 15% Government Bonds
      - 10% Corporate Bonds

      This balanced approach aims to provide growth while managing risk.
    `
    setPortfolio(mockPortfolio)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Portfolio Visualizer</CardTitle>
        <CardDescription>Generate a personalized portfolio based on your risk profile</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex space-x-2">
            <Input 
              placeholder="Enter your risk tolerance (1-10)" 
              value={riskTolerance}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRiskTolerance(e.target.value)}
            />
            <Button onClick={generatePortfolio} className="bg-green-900 text-white hover:bg-green-800">Generate</Button>
          </div>
          {portfolio && (
            <div className="bg-muted p-4 rounded-md whitespace-pre-wrap">
              {portfolio}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

