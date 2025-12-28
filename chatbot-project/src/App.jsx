import { useState } from 'react'
import { ChatMessages } from './components/ChatMessages'
import { ChatInput } from './components/ChatInput'
import { WelcomeMessage } from './components/WelcomeMessage';
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState([]);

  return (
    <div
      className="app-container">
      <ChatMessages
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <WelcomeMessage
        chatMessages={chatMessages}
      />
    </div>
  );
}

export default App
