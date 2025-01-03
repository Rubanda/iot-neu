'use client'

import { useChat } from 'ai/react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import TextareaAutosize from 'react-textarea-autosize'

export function AIChat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({ api: '/api/chat' })
  console.log('[k:messages]', messages)
  return (
    <Card className="relative h-[600px] w-full flex flex-col">
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