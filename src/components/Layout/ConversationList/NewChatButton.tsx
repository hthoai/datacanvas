import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@nextui-org/react';

interface NewChatButtonProps {
  onClick: () => void;
}

export function NewChatButton({ onClick }: NewChatButtonProps) {
  return (
    <Button
      onClick={onClick}
      startContent={<Plus className="w-4 h-4" />}
      color="primary"
      variant="flat"
      className="w-full"
    >
      New Chat
    </Button>
  );
}