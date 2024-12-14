import { useState } from 'react';
import { Conversation, Message } from '../types';
import { generateId } from '../utils/helpers';

export function useConversations() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeConversationId, setActiveConversationId] = useState<string | null>(null);

  const createConversation = () => {
    const newConversation: Conversation = {
      id: generateId(),
      title: 'New Conversation',
      messages: [],
      lastUpdated: Date.now(),
    };
    setConversations(prev => [...prev, newConversation]);
    setActiveConversationId(newConversation.id);
    return newConversation;
  };

  const addMessage = (
    conversationId: string,
    content: string,
    type: 'user' | 'bot',
    extras?: Partial<Omit<Message, 'id' | 'type' | 'content' | 'timestamp'>>
  ) => {
    const message: Message = {
      id: generateId(),
      type,
      content,
      timestamp: Date.now(),
      ...extras
    };

    setConversations(prev => prev.map(conv => {
      if (conv.id === conversationId) {
        return {
          ...conv,
          messages: [...conv.messages, message],
          lastUpdated: Date.now(),
        };
      }
      return conv;
    }));
  };

  return {
    conversations,
    activeConversationId,
    setActiveConversationId,
    createConversation,
    addMessage,
  };
}