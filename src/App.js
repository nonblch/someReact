import  './App.css';
import React, { useEffect, useState } from 'react';


const App = () => {
    const [messageList, setMessageList]= useState([]);
    const [message, setMessage] = useState('');
    const [sender, setSender] = useState('bot');
    const [isTyping, setIsTyping] = useState(false);

    useEffect(()=> {
        if (isTyping) {
            return;
        }
        loadMessage(sender);
    }, [sender, isTyping]);

    const loadMessage = () => {messageList.push({id: sender, text: message})};


    const handleMessFormSubmit = event => {
        event.preventDefault();
        setIsTyping(false);
        botForLoad();
        setMessageList(messageList)
    };

    const botForLoad = () => {messageList.push({id: 'bot', text: 'Что ты делаешь? Не могу понять('})};

  return (
    <div className="app">
        <ul className="messageList">
            {messageList.map(message => {
                return (
                    <li className="messageListElem">
                        <span>
                            {message.sender}
                        </span>
                        <span>
                            {message.text}
                        </span>
                    </li>
                )
            })}
        </ul>
        <form onSubmit={handleMessFormSubmit}>
            <input
                type="text"
                placeholder="Напиши чего-нибудь)"
                value={message}
                onChange={event => {
                    setIsTyping(true);
                    setMessage(event.target.value);
                    setSender('user');
                }}
            />
            <button>send it!</button>
        </form>
    </div>
  );
};

export default App;
