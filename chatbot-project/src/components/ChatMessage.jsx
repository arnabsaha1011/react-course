import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/profile-1.jpg'
import dayjs from 'dayjs';
import './ChatMessage.css';

export function ChatMessage({ message, sender }) {
  const time = dayjs().format('h:mm A');
  return (
    <div className={
      sender === 'user'
        ? 'chat-message-user'
        : 'chat-message-robot'}
    >
      {sender === 'robot' && (
        <img src={RobotProfileImage}
          className="chat-message-profile"
          alt="Robot" />
      )}
      <div className="chat-message-text">
        {message}
        <div className="chat-message-time">
          {time}
        </div>
      </div>
      {sender === 'user' && (
        <img src={UserProfileImage}
          className="chat-message-profile"
          alt="User" />
      )}
    </div>
  );
}