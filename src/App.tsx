import React, { useState } from 'react';
import { LandingView } from './components/Layout/LandingView';
import { ChatView } from './components/Chat/ChatView';
import { useConversations } from './hooks/useConversations';
import { useFileHandler } from './hooks/useFileHandler';

export function App() {
  const [isStarted, setIsStarted] = useState(false);
  const {
    conversations,
    activeConversationId,
    createConversation,
    addMessage,
  } = useConversations();
  const { handleFileUpload: processFile } = useFileHandler();

  const handleStart = (message: string) => {
    const conversation = createConversation();
    addMessage(conversation.id, message, 'user');
    addMessage(conversation.id, "I'm analyzing your request. What would you like to know?", 'bot');
    setIsStarted(true);
  };

  const handleSendMessage = (message: string) => {
    if (!activeConversationId) return;
    addMessage(activeConversationId, message, 'user');
    // Simulate bot response
    setTimeout(() => {
      addMessage(
        activeConversationId,
        "I'm analyzing your data. What would you like to know?",
        'bot'
      );
    }, 1000);
  };

  const handleFileUpload = async (files: File[]) => {
    const conversation = activeConversationId
      ? { id: activeConversationId }
      : createConversation();
    
    const fileData = await processFile(files[0]);
    addMessage(
      conversation.id,
      `Received ${files[0].name}. I can help you analyze this data. What would you like to know?`,
      'bot',
      { dataPreview: fileData }
    );
    
    if (!isStarted) {
      setIsStarted(true);
    }
  };

  const activeConversation = conversations.find(c => c.id === activeConversationId);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {!isStarted ? (
        <LandingView
          onStart={handleStart}
          onFileUpload={handleFileUpload}
        />
      ) : (
        <ChatView
          messages={activeConversation?.messages || []}
          onSendMessage={handleSendMessage}
          onFileUpload={handleFileUpload}
        />
      )}
    </div>
  );
}