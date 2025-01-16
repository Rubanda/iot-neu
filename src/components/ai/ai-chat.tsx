'use client'

import { useChat } from 'ai/react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import TextareaAutosize from 'react-textarea-autosize'
import { Terminal } from "lucide-react"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
 
export function AIChat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({ api: '/api/chat' })
  return (
    <Card className="relative h-[400px] w-full flex flex-col">
      <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>ai chatbot</AlertTitle>
      <AlertDescription>
       we are not saving history of your chat
      </AlertDescription>
    </Alert>
      <ScrollArea className="flex-1 p-4">
        {messages.map((message, i) => (
          <div key={i} className={`flex gap-3 mb-4 ${message.role === 'assistant' ? 'justify-start' : 'justify-end'}`}>
            {message.role === 'assistant' && (
              <Avatar>
                <AvatarFallback>AI</AvatarFallback>
                <AvatarImage src="/ai-avatar.png" />
              </Avatar>
            )}
            <div className={`rounded-lg p-3 ${
              message.role === 'assistant' 
                ? 'bg-secondary' 
                : 'bg-primary text-primary-foreground'
            }`}>
              {message.content}
            </div>
          </div>
        ))}
      </ScrollArea>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-3">
          <TextareaAutosize
            className="flex-1 p-2 border rounded-md"
            value={input}
            onChange={handleInputChange}
            placeholder="Ask about skin conditions..."
            rows={1}
          />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  )
}