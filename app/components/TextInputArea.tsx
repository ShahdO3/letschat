'use client';
import React, { useState } from 'react'

// n8n webhook URL= "http://localhost:5678/webhook/chatbot"

const webhookUrl = 'http://localhost:5678/webhook/chatbot';

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


//=============== N8N INTEGRATION LOGIC =======================
  
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
            className= {`chat ${msg.role == 'user' ? 'chat-end': 'chat-start'}`}>

              <div className='chat-bubble'>{msg.msg}</div>
        </div>
      )}
      {loading&& (
        <div className="chat chat-start">
          <div className="chat-bubble loading">...</div>
        </div>
      )}
      </div>

      {/* Input Area */}
      <form 
            id="chat-form"
            onSubmit={handleSubmittion} 
            className="w-full p-4 bg-base-100 border border-base-300 rounded-2xl enabled:border-2 focus-within:border-2 hover:border-2">

        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="How may I assist you this fine day?"
            className="input  w-full"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button 
                type="submit" 
                className="btn btn-primary rounded-2xl hover:border-2"
                disabled={loading}>
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default TextInputArea