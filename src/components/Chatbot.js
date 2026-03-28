import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChatbubblesOutline, IoCloseOutline, IoSendOutline, IoMicOutline, IoMicOffOutline, IoVolumeHighOutline, IoVolumeMuteOutline } from 'react-icons/io5';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! Welcome to our Hotel. 🏨 I am your Voice-enabled Assistant. How can I help you today?', sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const messagesEndRef = useRef(null);

  // Web Speech API - Recognition
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  if (recognition) {
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInputValue(transcript);
      setIsListening(false);
      handleSend(transcript);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  }

  const startListening = () => {
    if (recognition && !isListening) {
      setIsListening(true);
      recognition.start();
    } else {
      alert("Speech Recognition is not supported in your browser or is already active.");
    }
  };

  const stopListening = () => {
    if (recognition && isListening) {
      recognition.stop();
      setIsListening(false);
    }
  };

  // Web Speech API - Synthesis (TTS)
  const speakResponse = (text) => {
    if (!isMuted && window.speechSynthesis) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.volume = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    // Speak first greeting if not muted
    if (isOpen && messages.length === 1 && messages[0].sender === 'bot') {
       speakResponse(messages[0].text);
    }
  }, [messages, isOpen]);

  const handleSend = (text = inputValue) => {
    if (!text.trim()) return;

    const userMessage = { id: Date.now(), text, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Mock bot response
    setTimeout(() => {
      const responseText = getBotResponse(text);
      const botMessage = { id: Date.now() + 1, text: responseText, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
      speakResponse(responseText);
    }, 1000);
  };

  const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('room') || lowerInput.includes('book')) {
      return "You can view and book our rooms by clicking on the 'Rooms' tab in the navbar. We have Deluxe, Semi-Deluxe, Kids, and Family rooms!";
    } else if (lowerInput.includes('location') || lowerInput.includes('where')) {
      return "We are located in a beautiful prime spot. You can check the 'Location' link under the Rooms menu for detailed maps.";
    } else if (lowerInput.includes('amenities') || lowerInput.includes('facility')) {
      return "Our facilities include free Wi-Fi, a swimming pool, spa, and a fine-dining restaurant. Check out the 'Facilities' section on our home page!";
    } else if (lowerInput.includes('contact')) {
      return "You can reach us through the 'Contact' page or call us at +1 234 567 890.";
    }
    return "I'm not sure I understand. Could you please rephrase your question or select one of the quick options?";
  };

  const quickOptions = [
    "Book a Room",
    "Hotel Location",
    "Facilities",
    "Contact Us"
  ];

  return (
    <div className="chatbot-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            className="chat-window"
          >
            <div className="chat-header">
              <div className="header-info">
                <h3>Hotel Assistant</h3>
                <p>{isListening ? "Listening..." : "Online | Ready to help"}</p>
              </div>
              <div className="header-actions">
                <button 
                  onClick={() => setIsMuted(!isMuted)} 
                  className="mute-btn"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <IoVolumeMuteOutline size={20} /> : <IoVolumeHighOutline size={20} />}
                </button>
                <button onClick={() => setIsOpen(false)} className="close-btn">
                  <IoCloseOutline size={24} />
                </button>
              </div>
            </div>

            <div className="chat-messages">
              {messages.map((msg) => (
                <div key={msg.id} className={`message ${msg.sender}`}>
                  <div className="message-content">
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="quick-options">
              {quickOptions.map((option, index) => (
                <button 
                  key={index} 
                  onClick={() => handleSend(option)}
                  className="quick-opt-btn"
                >
                  {option}
                </button>
              ))}
            </div>

            <form 
              className="chat-input-area" 
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
            >
              <button 
                type="button" 
                className={`voice-btn ${isListening ? 'listening' : ''}`}
                onClick={isListening ? stopListening : startListening}
                title={isListening ? "Stop Listening" : "Start Voice Input"}
              >
                {isListening ? <IoMicOffOutline size={22} /> : <IoMicOutline size={22} />}
              </button>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type or speak..."
              />
              <button type="submit" className="send-btn">
                <IoSendOutline size={20} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) { 
             // Small delay to ensure synthesis is ready if needed
             setTimeout(() => speakResponse(messages[0].text), 500);
          }
        }}
        className={`chatbot-toggle ${isOpen ? 'active' : ''}`}
      >
        {isOpen ? <IoCloseOutline size={30} /> : <IoChatbubblesOutline size={30} />}
      </motion.button>
    </div>
  );
};

export default Chatbot;
