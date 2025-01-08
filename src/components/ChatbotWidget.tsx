'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { MessageCircle, X } from 'lucide-react'

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg w-80 h-[400px] flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="font-semibold">InvestAI Chat</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-grow">
            <iframe
              src="https://console.dialogflow.com/api-client/demo/embedded/2df1a4b7-8ec6-45bb-8816-13c7146f8a02"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
      ) : (
        <Button onClick={() => setIsOpen(true)} className="bg-green-900 text-white hover:bg-green-800">
          <MessageCircle className="mr-2 h-4 w-4" /> Chat with InvestAI
        </Button>
      )}
    </div>
  )
}

