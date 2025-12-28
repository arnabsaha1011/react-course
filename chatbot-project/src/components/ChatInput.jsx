import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import LoadingSpinnerImage from '../assets/loading-spinner.gif'
import './ChatInput.css'

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    var newChatMessages = [
      ...chatMessages,
      { message: inputText, sender: 'user', id: crypto.randomUUID() }
    ];
    setChatMessages([
      ...newChatMessages,
      { message: <img className="loading-spinner" src={LoadingSpinnerImage} />, sender: 'robot', id: crypto.randomUUID() }
    ]);
    setInputText('');

    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...newChatMessages,
      { message: response, sender: 'robot', id: crypto.randomUUID() }
    ]);
  }

  function checkKeyDown(event) {
    if (event.key === 'Enter') {
      sendMessage();
    }

    if (event.key === 'Escape') {
      setInputText('');
    }
  }

  function clearMessages() {
    setChatMessages([]);
  }

  return (
    <div
      className="chat-input-container">
      <input id="hello"
        className="chat-input"
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        onKeyDown={checkKeyDown}
      />
      <button
        onClick={sendMessage}
        className="send-button"
      >Send</button>
      <button
        onClick={clearMessages}
        className='clear-button'
      >Clear</button>
    </div>
  );
}