import './WelcomeMessage.css';

export function WelcomeMessage({ chatMessages }) {
  return (
    chatMessages.length === 0
    && <div className="welcome-message">
      <p>Welcome to the Chatbot!</p>
    </div>
  );
}