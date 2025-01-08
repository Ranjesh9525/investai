import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import FeatureHighlight from '@/components/FeatureHighlight'
import AIPortfolioVisualizer from '@/components/AIPortfolioVisualizer'
import MarketSentimentAnalyzer from '@/components/MarketSentimentAnalyzer'
import StockIndicesGraphs from '@/components/StockIndicesGraphs'

export default function Home() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-green-900">Welcome to InvestAI</h1>
        <p className="text-xl mb-8 text-gray-600">Your intelligent financial companion for personalized investment planning.</p>
        <Link href="/get-started">
          <Button size="lg" className="bg-green-900 text-white hover:bg-green-800">Start Your Investment Journey</Button>
        </Link>
      </section>
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-900">Market Overview</h2>
        <StockIndicesGraphs />
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <FeatureHighlight 
          title="AI-Powered Advice" 
          description="Get personalized investment strategies using our advanced hybrid AI model."
          icon="brain"
        />
        <FeatureHighlight 
          title="Multi-Modal Input" 
          description="Easily input your financial data through text, voice, or document scanning."
          icon="input"
        />
        <FeatureHighlight 
          title="Ethical Investing" 
          description="Align your investments with your values using our ESG screening tools."
          icon="shield"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-900">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-green-900">1. Share Your Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Tell us about your financial situation and investment objectives.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-green-900">2. AI Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Our AI processes your information and current market data.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-green-900">3. Get Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Receive personalized investment strategies and start investing smarter.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-900">AI-Powered Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AIPortfolioVisualizer />
          <MarketSentimentAnalyzer />
        </div>
      </section>
    </main>
  )
}

