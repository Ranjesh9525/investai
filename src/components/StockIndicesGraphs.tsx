'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

type IndexData = {
  date: string
  value: number
}

export default function StockIndicesGraphs() {
  const [sensexData, setSensexData] = useState<IndexData[]>([])
  const [niftyData, setNiftyData] = useState<IndexData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      // In a real-world scenario, you would fetch this data from an API
      // For this example, we'll generate mock data
      const mockSensexData = generateMockData(35000, 5000)
      const mockNiftyData = generateMockData(10000, 2000)
      setSensexData(mockSensexData)
      setNiftyData(mockNiftyData)
    }

    fetchData()
    // In a real application, you might want to set up a daily fetch
    // const dailyFetch = setInterval(fetchData, 24 * 60 * 60 * 1000)
    // return () => clearInterval(dailyFetch)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Sensex Daily Trend</CardTitle>
          <CardDescription>Track the performance of BSE Sensex</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sensexData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" name="Sensex" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Nifty Daily Trend</CardTitle>
          <CardDescription>Track the performance of NSE Nifty 50</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={niftyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#82ca9d" name="Nifty" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function generateMockData(baseValue: number, range: number): IndexData[] {
  const today = new Date()
  const data: IndexData[] = []

  for (let i = 30; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)
    data.push({
      date: date.toISOString().split('T')[0],
      value: Math.floor(baseValue + Math.random() * range),
    })
  }

  return data
}

