'use client';
import React, { useEffect, useRef, useState } from 'react'

const localWebhookUrl = 'http://localhost:5678/webhook/chatbot';

const webhookUrl = 'https://shahd303.app.n8n.cloud/webhook/chatbot';

type Message={
  role: 'user' | 'chatBot';
  msg: string;
}

const TextInputArea = () => {

  // Input from input box sent to chatbot
  const [input, setInput] = useState("");

  // JSON response and all the messages to be mapped to chat bubbles
  const [msg, setMsg] = useState<Message[]>([]);

  // For loading while the msg gets sent back and for to n8n
  const [loading, setLoading] = useState(false);

// ============= SCROLLING AUTOMATICALLY ========================

  // To smoothly scroll down on new message
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [msg]);

// =================================================================

//================== N8N INTEGRATION LOGIC =========================
  
  const handleSubmittion = async (e: { preventDefault: () => void; })=>{
      e.preventDefault(); // important to prevent default form reload

    console.log("ON SUBMIT");
    if(!input.trim()) return;

    // USERS MESSAGES
    const userMsg = {role: 'user' as const, msg: input}
    setMsg((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    // Sending msg to n8n
    try{
      const result = await fetch(webhookUrl,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      if(!result.ok) throw new Error(`Error with Server ${result.status}`);

      const dataJson = await result.text();
      console.log("HIIIIIIIIIIIIIdataJson"); // DEBUG LINE

      console.log(result); // DEBUG LINE

      // const dataString = JSON.parse(dataJson);
      // console.log(dataString.text); // DEBUG LINE

      const botMsg = {
        role: 'chatBot' as const,
        msg: dataJson || '[No response]',
      };

      setMsg((prev) => [...prev, botMsg]);
    }
    finally {
      setLoading(false);
    }
  };

// ============================================================

  return (
    <div className="flex flex-col flex-1">

      <div className="flex-1 overflow-y-auto p-4 bg-base-200">
{/*********************  The Messages ***************************/}

      {msg.map((msg, index)=>
        <div 
            key={index} 
            className= {` m-6 rounded-xl text-neutral-content whitespace-pre-line ${
    msg.role === 'user'
      ? ' chat chat-end rounded-br-none'
      : ' chat chat-start rounded-bl-none'}`}>
        
          <div className={`chat chat-bubble rounded-2xl 
                ${msg.role === 'user'
                ?'bg-neutral text-neutral-content'
                : 'bg-base-300 text-base-content'} `}>{msg.msg}</div>
          <div ref={messagesEndRef} />
        </div>
      )}
      {loading&& (
        <div className="chat chat-start">
          <span className="loading chat-bubble loading-dots"></span>
        </div>
      )}
      </div>

      {/* Input Area */}
      <form 
            id="chat-form"
            onSubmit={handleSubmittion} 
            className="w-full p-2 bg-base-100 border border-base-300 rounded-2xl enabled:border-2 focus-within:border-2 hover:border-2 sticky">

        <div className="flex items-center gap-2 sticky">
          <input
            type="text"
            placeholder="Enter your query here"
            className="input  w-full"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button 
                type="submit" 
                className="btn btn-neutral-800 rounded-2xl hover:border-2"
                disabled={loading}>
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default TextInputArea