import React, { useState } from 'react';
import { LandingView } from '../components/Layout/LandingView';
import { ChatView } from '../components/Chat/ChatView';
import { Sidebar } from '../components/Layout/Sidebar';
import { useConversations } from '../hooks/useConversations';
import { useFileHandler } from '../hooks/useFileHandler';
import clsx from 'clsx';

export function MainLayout() {
  const [isStarted, setIsStarted] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const {
    conversations,
    activeConversationId,
    setActiveConversationId,
    createConversation,
    addMessage,
  } = useConversations();

  const activeConversation = conversations.find(
    (conv) => conv.id === activeConversationId
  );

  const handleStart = (message: string) => {
    const conversation = createConversation();
    addMessage(conversation.id, message, 'user');
    setIsStarted(true);
  };

  const handleNewChat = () => {
    const conversation = createConversation();
    setActiveConversationId(conversation.id);
  };

  const handleSendMessage = (message: string) => {
    if (activeConversationId) {
      addMessage(activeConversationId, message, 'user');
    }
  };

  const { handleFileUpload } = useFileHandler();

  return (
    <div className="min-h-screen">
      <Sidebar
        conversations={conversations}
        activeId={activeConversationId}
        onSelect={setActiveConversationId}
        onNew={handleNewChat}
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      
      <main 
        className={clsx(
          'min-h-screen transition-all duration-300',
          isSidebarOpen ? 'pl-64' : 'pl-0'
        )}
      >
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
      </main>
    </div>
  );
}