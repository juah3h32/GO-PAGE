import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'; 
import './BotGO.css';

// IMPORTAR TUS TRADUCCIONES
import { translations } from '../i18n'; 

// ==========================================
// 1. ÍCONOS SVG (Sin cambios)
// ==========================================
const RobotIcon = ({ className }) => ( <svg className={className} viewBox="0 0 100 100" fill="none"><defs><linearGradient id="headGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#F24F13" /><stop offset="100%" stopColor="#F24F13" /></linearGradient></defs><line x1="20" y1="35" x2="15" y2="20" stroke="#F24F13" strokeWidth="4" strokeLinecap="round"/><circle cx="15" cy="20" r="4" fill="#F24F13"/><line x1="80" y1="35" x2="85" y2="20" stroke="#F24F13" strokeWidth="4" strokeLinecap="round"/><circle cx="85" cy="20" r="4" fill="#F24F13"/><circle cx="50" cy="55" r="40" fill="url(#headGrad)" /><ellipse cx="50" cy="58" rx="32" ry="30" fill="#FFF5E6"/><rect x="25" y="45" width="50" height="22" rx="10" fill="#F24F13"/><circle cx="38" cy="56" r="5" fill="#FFD700"/><circle cx="62" cy="56" r="5" fill="#FFD700"/><ellipse cx="50" cy="78" rx="6" ry="2" fill="#D35400" opacity="0.8"/></svg> );
const WhatsAppIcon = () => ( <svg viewBox="0 0 24 24" width="16" height="16" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg> );
const SendIcon = () => ( <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> );
const MicIcon = ({ isListening, size = 24 }) => ( <svg width={size} height={size} viewBox="0 0 24 24" fill={isListening ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isListening ? "pulse-animation" : ""}><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg> );
const BackArrowIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg> );
const KeyboardIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><line x1="6" y1="8" x2="6" y2="8"></line><line x1="10" y1="8" x2="10" y2="8"></line><line x1="14" y1="8" x2="14" y2="8"></line><line x1="18" y1="8" x2="18" y2="8"></line><line x1="6" y1="12" x2="6" y2="12"></line><line x1="10" y1="12" x2="10" y2="12"></line><line x1="14" y1="12" x2="14" y2="12"></line><line x1="18" y1="12" x2="18" y2="12"></line><line x1="6" y1="16" x2="11" y2="16"></line><line x1="15" y1="16" x2="18" y2="16"></line></svg> );
const CloseIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> );

// ==========================================
// 2. COMPONENTE PRINCIPAL
// ==========================================

export default function BotGO({ language = 'es' }) {
  
  const currentLangCode = translations[language] ? language : 'es';
  const t = translations[currentLangCode].chatbot;
  const isRTL = currentLangCode === 'ar';

  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState('voice'); 

  const [messages, setMessages] = useState([
    { role: 'assistant', content: t.greeting }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSalesButton, setShowSalesButton] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [productoInteres, setProductoInteres] = useState("sus productos"); 
  
  // ======================================
  // ESTADOS PARA MANEJAR LA VOZ
  // ======================================
  const [lastVoiceResponse, setLastVoiceResponse] = useState(t.greeting); 
  const [isBotSpeaking, setIsBotSpeaking] = useState(false);

  const chatWindowRef = useRef(null);
  const inputRef = useRef(null); 
  const messagesContainerRef = useRef(null); 
  const voiceTextRef = useRef('');
  
  // REFERENCIA AL AUDIO
  const audioRef = useRef(null);

  useEffect(() => {
    if (messages.length === 1 && messages[0].role === 'assistant') {
        setMessages([{ role: 'assistant', content: t.greeting }]);
        setLastVoiceResponse(t.greeting);
    }
  }, [language, t.greeting, messages.length]);

  // ==========================================
  // LÓGICA DE VOZ (SPEECH TO TEXT)
  // ==========================================
  const toggleListening = () => {
    if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
        setIsBotSpeaking(false);
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("❌ Tu navegador no tiene soporte de voz.");
      return;
    }

    const recognition = new SpeechRecognition();
    // [CORRECCIÓN]: Asegura que usa el código de voz de la traducción
    recognition.lang = (t && t.voiceCode) ? t.voiceCode : 'es-ES'; 
    recognition.continuous = false; 
    recognition.interimResults = true; 

    recognition.onstart = () => {
      setIsListening(true);
      voiceTextRef.current = '';
    };

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');
      
      setInput(transcript); 
      voiceTextRef.current = transcript;
    };

    recognition.onerror = (event) => {
      console.error("⚠️ Error voz:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
      if (voiceTextRef.current.trim().length > 0) {
          setTimeout(() => {
              sendMessage(null, voiceTextRef.current, true); 
          }, 600);
      }
    };

    try {
        recognition.start();
    } catch (err) {
        console.error("No se pudo iniciar:", err);
    }
  };

  const handleCloseChat = () => {
    setIsOpen(false);
    setViewMode('voice'); 
    if (audioRef.current) {
        audioRef.current.pause();
        setIsBotSpeaking(false);
    }
    if (inputRef.current) inputRef.current.blur();
    window.focus();
  };

  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (e.key.toLowerCase() === 'f') {
        const tagName = e.target.tagName;
        if (tagName !== 'INPUT' && tagName !== 'TEXTAREA' && !e.target.isContentEditable) {
          e.preventDefault(); 
          setIsOpen(true);
        }
      }
    };
    const handleEscKey = (event) => {
        if (event.key === 'Escape') handleCloseChat();
    };
    const handleClickOutside = (event) => {
        if (isOpen && chatWindowRef.current && !chatWindowRef.current.contains(event.target)) {
          const btn = document.querySelector('.botgo-button');
          if (btn && btn.contains(event.target)) return;
          handleCloseChat();
        }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscKey);
    }
    return () => {
        window.removeEventListener('keydown', handleGlobalKeyDown);
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen]);

  useEffect(() => {
    if (messagesContainerRef.current && viewMode === 'chat') {
      setTimeout(() => {
        messagesContainerRef.current.scrollTo({ top: messagesContainerRef.current.scrollHeight, behavior: 'smooth' });
      }, 100);
    }
  }, [messages, loading, viewMode]); 

  useEffect(() => {
    if (isOpen && viewMode === 'chat') {
        const isPC = window.innerWidth > 768;
        if (isPC) setTimeout(() => inputRef.current && inputRef.current.focus(), 300);
    }
  }, [isOpen, viewMode]);

  const WHATSAPP_LINK = `https://wa.me/524434845466?text=${t.waStart ? t.waStart.replace(/ /g, '+') : 'Hola'}+${productoInteres.replace(' ', '+')}...`;

  const playServerAudio = async (audioBase64) => {
    if (!audioBase64) return;
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    const audio = new Audio(audioBase64);
    audioRef.current = audio;
    audio.onplay = () => setIsBotSpeaking(true);
    audio.onended = () => setIsBotSpeaking(false);
    audio.onpause = () => setIsBotSpeaking(false);
    try {
      await audio.play();
    } catch (err) {
      console.warn("Audio bloqueado:", err);
      setIsBotSpeaking(false);
    }
  };

  const sendMessage = async (e = null, textOverride = null, isVoiceRequest = false) => {
    if (e) e.preventDefault();
    const textToSend = textOverride !== null ? textOverride : input;
    if (!textToSend.trim()) return;

    if (audioRef.current) {
        audioRef.current.pause();
        setIsBotSpeaking(false);
    }
    window.speechSynthesis.cancel(); 

    const userMsg = { role: 'user', content: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            messages: [...messages, userMsg],
            isVoice: isVoiceRequest,
            // [CORRECCIÓN]: Enviamos el idioma actual al backend para que sepa cómo responder/hablar
            language: currentLangCode 
        })
      });
      
      const data = await response.json();
      const replyText = data.reply;
      const audioUrl = data.audio; 

      setMessages(prev => [...prev, { role: 'assistant', content: replyText }]);
      setLastVoiceResponse(replyText);

      if (isVoiceRequest && audioUrl) {
          await playServerAudio(audioUrl);
      }

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: t.errorMsg || "Error de conexión." }]);
    } finally {
      setLoading(false);
      if (viewMode === 'chat' && window.innerWidth > 768) {
          setTimeout(() => inputRef.current && inputRef.current.focus(), 50);
      }
    }
  };

  return (
    <div 
        className={`botgo-container ${isOpen ? 'open' : ''}`}
        style={{ fontFamily: isRTL ? 'Tahoma, Arial, sans-serif' : 'inherit' }}
    >
      <div ref={chatWindowRef} className={`botgo-window ${isOpen ? 'show' : 'hide'}`}>
        
        {/* VISTA DE VOZ */}
        {viewMode === 'voice' && (
            <div className="botgo-voice-interface">
                <div className="voice-header">
                    {/* [CORRECCIÓN]: Texto dinámico */}
                    <span>{t.voiceAssistantTitle || "Asistente Virtual"}</span>
                    <button className="voice-close-btn" onClick={handleCloseChat}>
                        <CloseIcon />
                    </button>
                </div>

                <div className="voice-content">
                    {/* ESFERA */}
                    <div className={`voice-orb-container 
                        ${loading ? 'thinking' : ''} 
                        ${isBotSpeaking ? 'speaking' : ''} 
                        ${isListening ? 'listening' : 'idle'}`}
                    >
                        <div className="voice-orb-core"></div>
                        <div className="voice-orb-ring ring-1"></div>
                        <div className="voice-orb-ring ring-2"></div>
                    </div>

                    <div className="voice-text-display">
                        {isListening ? (
                            // [CORRECCIÓN]: Texto dinámico
                            <p className="user-listening-text">{input || t.listeningState || "Escuchando..."}</p>
                        ) : loading ? (
                            // [CORRECCIÓN]: Texto dinámico
                            <p className="assistant-thinking-text">{t.thinking || "Pensando..."}</p>
                        ) : (
                            <div className="assistant-speech-text">
                                <ReactMarkdown>
                                    {(() => {
                                        const paragraphs = lastVoiceResponse.split(/\n+/).filter(p => p.trim() !== '');
                                        const topTwo = paragraphs.slice(0, 2);
                                        return topTwo.join('\n\n') + (paragraphs.length > 2 ? '...' : '');
                                    })()}
                                </ReactMarkdown>
                            </div>
                        )}
                    </div>
                </div>

                <div className="voice-controls">
                    <button className="voice-control-btn secondary" onClick={() => setViewMode('chat')}>
                        <KeyboardIcon />
                    </button>
                    <button 
                        className={`voice-control-btn primary-mic ${isListening ? 'active' : ''}`} 
                        onClick={toggleListening}
                    >
                        <MicIcon isListening={isListening} size={32} />
                    </button>
                    <button className="voice-control-btn secondary" onClick={handleCloseChat}>
                        <CloseIcon />
                    </button>
                </div>
            </div>
        )}

        {/* VISTA DE CHAT (TEXTO) */}
        {viewMode === 'chat' && (
            <div className="botgo-chat-interface">
                <div className="botgo-header-clean" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                    <button onClick={() => setViewMode('voice')} className="header-back-btn">
                        <BackArrowIcon />
                    </button>
                    <div className="header-title" style={{ textAlign: isRTL ? 'right' : 'left' }}>
                        <h2>BotGo</h2>
                    </div>
                    <div className="header-avatar-container">
                        <RobotIcon className="header-robot-icon" />
                    </div>
                </div>

                <div className="botgo-messages" ref={messagesContainerRef}>
                    {messages.map((msg, idx) => (
                        <div 
                            key={idx} 
                            className={`msg-row ${msg.role}`}
                            style={{ 
                                flexDirection: isRTL && msg.role === 'assistant' ? 'row-reverse' : 
                                            (isRTL && msg.role === 'user' ? 'row' : undefined) 
                            }}
                        >
                            {msg.role === 'assistant' && (
                                <div className="msg-avatar-small"><RobotIcon className="msg-icon-svg" /></div>
                            )}
                            
                            <div 
                                className={`msg-bubble ${msg.role} structured-text`}
                                style={{ direction: isRTL ? 'rtl' : 'ltr', textAlign: isRTL ? 'right' : 'left' }}
                            >
                                <ReactMarkdown>
                                    {msg.content}
                                </ReactMarkdown>
                            </div>
                        </div>
                    ))}
                    {loading && (
                        <div className="msg-row assistant">
                            <div className="msg-avatar-small"><RobotIcon className="msg-icon-svg" /></div>
                            <div className="msg-bubble assistant typing"><span className="dot"></span><span className="dot"></span><span className="dot"></span></div>
                        </div>
                    )}
                    {showSalesButton && (
                        <div className="sales-action-container">
                            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="whatsapp-float-btn">
                                <WhatsAppIcon /> {t.salesBtn} {productoInteres}
                            </a>
                        </div>
                    )}
                </div>

                <div className="botgo-footer-curve">
                    <form 
                        onSubmit={(e) => sendMessage(e, null, false)} 
                        className="botgo-input-capsule" 
                        style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}
                    >
                        <button type="button" className="action-btn-mic" onClick={toggleListening}>
                            <MicIcon isListening={isListening} />
                        </button>
                        
                        <input 
                            ref={inputRef} 
                            className="botgo-input-field" 
                            type="text" 
                            value={input} 
                            onChange={(e) => setInput(e.target.value)} 
                            placeholder={isListening ? (t.listeningState || "Escuchando...") : t.placeholder} 
                            disabled={loading}
                            dir={isRTL ? "rtl" : "ltr"}
                        />
                        
                        <button type="submit" className="action-btn-send" disabled={loading || !input.trim()}>
                            <div style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }}>
                                <SendIcon />
                            </div>
                        </button>
                    </form>
                </div>
            </div>
        )}

      </div>
      
      {!isOpen && (
          <button className="botgo-button" onClick={() => setIsOpen(true)}>
              <RobotIcon className="botgo-btn-icon" />
          </button>
      )}
    </div>
  );
}