import React, { useState } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { LandingView } from './components/Layout/LandingView';
import { ChatView } from './components/Chat/ChatView';
import { Sidebar } from './components/Layout/Sidebar';
import { useConversations } from './hooks/useConversations';
import { useFileHandler } from './hooks/useFileHandler';
import clsx from 'clsx';
import './styles/index.css';

export function App() {
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
    setIsSidebarOpen(true);
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
    <NextUIProvider>
      <div className="main-container">
        {!isStarted ? (
          <LandingView
            onStart={handleStart}
            onFileUpload={handleFileUpload}
          />
        ) : (
          <div className="flex">
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
                'flex-1 transition-all duration-300',
                isSidebarOpen ? 'ml-64' : 'ml-0'
              )}
            >
              <ChatView
                messages={activeConversation?.messages || []}
                onSendMessage={handleSendMessage}
                onFileUpload={handleFileUpload}
              />
            </main>
          </div>
        )}
      </div>
    </NextUIProvider>
  );
}