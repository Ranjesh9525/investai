'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function MarketSentimentAnalyzer() {
  const [sentiment, setSentiment] = useState<string | null>(null)

  const analyzeSentiment = () => {
    // In a real application, this would call an AI service to analyze market sentiment
    const mockSentiment = `
      Based on our AI analysis of recent news and market trends:

      Overall Market Sentiment: Cautiously Optimistic

      Key Factors:
      - Positive economic indicators
      - Upcoming tech sector earnings reports
      - Geopolitical tensions easing

      Recommendation: Consider maintaining a balanced portfolio with a slight tilt towards growth assets.
    `
    setSentiment(mockSentiment)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Sentiment Analyzer</CardTitle>
        <CardDescription>Get AI-powered insights on current market sentiment</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Button onClick={analyzeSentiment} className="bg-green-900 text-white hover:bg-green-800">Analyze Current Sentiment</Button>
          {sentiment && (
            <div className="bg-muted p-4 rounded-md whitespace-pre-wrap">
              {sentiment}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

