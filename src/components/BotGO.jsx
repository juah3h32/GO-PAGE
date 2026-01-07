import React, { useState, useRef, useEffect } from 'react';
import './BotGO.css';

// ==========================================
// 1. ÍCONOS SVG
// ==========================================

const RobotIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <defs>
      <linearGradient id="headGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F24F13" /><stop offset="100%" stopColor="#F24F13" />
      </linearGradient>
    </defs>
    <line x1="20" y1="35" x2="15" y2="20" stroke="#F24F13" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="15" cy="20" r="4" fill="#F24F13"/>
    <line x1="80" y1="35" x2="85" y2="20" stroke="#F24F13" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="85" cy="20" r="4" fill="#F24F13"/>
    <circle cx="50" cy="55" r="40" fill="url(#headGrad)" />
    <ellipse cx="50" cy="58" rx="32" ry="30" fill="#FFF5E6"/>
    <rect x="25" y="45" width="50" height="22" rx="10" fill="#F24F13"/>
    <circle cx="38" cy="56" r="5" fill="#FFD700"/>
    <circle cx="62" cy="56" r="5" fill="#FFD700"/>
    <ellipse cx="50" cy="78" rx="6" ry="2" fill="#D35400" opacity="0.8"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const SendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

const MicIcon = ({ isListening }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={isListening ? "#F24F13" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isListening ? "pulse-animation" : ""}>
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
    <line x1="12" y1="19" x2="12" y2="23"></line>
    <line x1="8" y1="23" x2="16" y2="23"></line>
  </svg>
);

const BackArrowIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
);

// ==========================================
// 2. CONFIGURACIÓN DE IDIOMAS
// ==========================================

const UI_TEXTS = {
  es: {
    greeting: '¡Hola! Soy BotGo 🤖. ¿En qué puedo asesorarte hoy?',
    placeholder: 'Escribe un mensaje...',
    listening: 'Escuchando...',
    error: 'Error de conexión.',
    salesBtn: 'Cotizar',
    voiceCode: 'es-ES',
    waStart: 'Hola Grupo Ortiz, me interesa cotizar'
  },
  en: {
    greeting: 'Hello! I am BotGo 🤖. How can I assist you today?',
    placeholder: 'Type a message...',
    listening: 'Listening...',
    error: 'Connection error.',
    salesBtn: 'Get Quote',
    voiceCode: 'en-US',
    waStart: 'Hello Grupo Ortiz, I am interested in a quote for'
  },
  pt: {
    greeting: 'Olá! Eu sou o BotGo 🤖. Como posso ajudar você hoje?',
    placeholder: 'Digite uma mensagem...',
    listening: 'Ouvindo...',
    error: 'Erro de conexão.',
    salesBtn: 'Solicitar Cotação',
    voiceCode: 'pt-BR',
    waStart: 'Olá Grupo Ortiz, estou interessado em cotar'
  },
  zh: {
    greeting: '你好！我是 BotGo 🤖。今天有什么可以帮你？',
    placeholder: '输入消息...',
    listening: '正在聆听...',
    error: '连接错误。',
    salesBtn: '询价',
    voiceCode: 'zh-CN',
    waStart: '你好 Grupo Ortiz，我有兴趣询价'
  },
  ar: {
    greeting: 'مرحباً! أنا BotGo 🤖. كيف يمكنني مساعدتك اليوم؟',
    placeholder: 'اكتب رسالة...',
    listening: 'جاري الاستماع...',
    error: 'خطأ في الاتصال.',
    salesBtn: 'طلب عرض سعر',
    voiceCode: 'ar-SA',
    waStart: 'مرحباً Grupo Ortiz، أنا مهتم بطلب سعر لـ'
  }
};

// ==========================================
// 3. COMPONENTE PRINCIPAL
// ==========================================

export default function BotGO({ language = 'es' }) {
  
  // Selección de textos y detección RTL
  const t = UI_TEXTS[language] || UI_TEXTS.es;
  const isRTL = language === 'ar';

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: t.greeting }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSalesButton, setShowSalesButton] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [productoInteres, setProductoInteres] = useState("sus productos"); 

  const chatWindowRef = useRef(null);
  const inputRef = useRef(null); 
  const messagesContainerRef = useRef(null); 

  // --- Efecto: Actualizar saludo si cambia el idioma y el chat está "nuevo" ---
  useEffect(() => {
    if (messages.length === 1 && messages[0].role === 'assistant') {
        setMessages([{ role: 'assistant', content: t.greeting }]);
    }
  }, [language, t.greeting, messages.length]);

  // --- Lógica Voz (Speech to Text) ---
  const toggleListening = () => {
    if (isListening) {
      setIsListening(false);
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Tu navegador no soporta reconocimiento de voz. / Your browser does not support speech recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = t.voiceCode; // Ej: 'es-ES', 'ar-SA'
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
    };

    recognition.start();
  };

  const handleCloseChat = () => {
    setIsOpen(false);
    if (inputRef.current) inputRef.current.blur();
    window.focus();
  };

  // --- Tecla rápida 'F' para abrir, ESC para cerrar ---
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (e.key.toLowerCase() === 'f') {
        const tagName = e.target.tagName;
        const isTyping = (tagName === 'INPUT' || tagName === 'TEXTAREA' || e.target.isContentEditable);
        if (!isTyping) {
          e.preventDefault(); 
          setIsOpen(true);
        }
      }
    };

    const handleEscKey = (event) => {
        if (event.key === 'Escape' || event.keyCode === 27) handleCloseChat();
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
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100);
  }, [isOpen]);

  // Auto-scroll al fondo
  useEffect(() => {
    if (messagesContainerRef.current) messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
  }, [messages, loading]);

  // --- Detección básica de productos para WhatsApp ---
  const detectingProducto = (texto) => {
    const txt = texto.toLowerCase();
    
    // Palabras clave multilingües
    if (txt.includes('rafia') || txt.includes('fibrilada') || txt.includes('raffia') || txt.includes('رافيا')) return 'Rafia';
    if (txt.includes('cuerda') || txt.includes('rope') || txt.includes('corda') || txt.includes('حبل')) return 'Cuerdas';
    if (txt.includes('saco') || txt.includes('bag') || txt.includes('sack') || txt.includes('costal') || txt.includes('كيس')) return 'Sacos';
    if (txt.includes('malla') || txt.includes('bolsa') || txt.includes('mesh') || txt.includes('شبكة')) return 'Mallas';
    if (txt.includes('film') || txt.includes('stretch') || txt.includes('playo') || txt.includes('estirable')) return 'Stretch Film';
    
    return null; 
  };

  const WHATSAPP_LINK = `https://wa.me/524434845466?text=${t.waStart.replace(/ /g, '+')}+${productoInteres.replace(' ', '+')}...`;

  const renderFormattedText = (text) => {
    return text.split('\n').map((str, index) => {
      if (str.trim() === '') return <div key={index} style={{ height: '8px' }}></div>;
      const parts = str.split(/(\*\*.*?\*\*)/g);
      return (
        <div key={index} style={{ marginBottom: '4px' }}>
          {parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>;
            return part;
          })}
        </div>
      );
    });
  };

  // --- ENVÍO DE MENSAJE ---
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setShowSalesButton(false);
    const textoUsuario = input.toLowerCase();

    // Palabras trigger de venta universales
    const triggers = ['comprar', 'cotizar', 'precio', 'costo', 'buy', 'price', 'quote', 'order', 'preço', 'cotação', '买', 'saber precio', 'cost'];
    const esVentaObvia = triggers.some(palabra => textoUsuario.includes(palabra));

    const nuevoProducto = detectingProducto(textoUsuario);
    if (nuevoProducto) setProductoInteres(nuevoProducto);

    const userMsg = { role: 'user', content: input };
    const newMessagesForState = [...messages, userMsg]; 
    setMessages(newMessagesForState);
    
    setInput('');
    setLoading(true);

    try {
      // Fetch a la API enviando 'language'
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            messages: newMessagesForState,
            language: language 
        })
      });
      const data = await response.json();
      let replyText = data.reply;

      if (replyText.includes('[[VENTA_DETECTADA]]') || esVentaObvia) {
        setShowSalesButton(true);
        replyText = replyText.replace('[[VENTA_DETECTADA]]', '');
      }
      setMessages(prev => [...prev, { role: 'assistant', content: replyText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: t.error }]);
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  };

  // ==========================================
  // 4. RENDER (JSX)
  // ==========================================

  return (
    <div 
        className={`botgo-container ${isOpen ? 'open' : ''}`}
        // Fuente fallback segura para árabe
        style={{ fontFamily: isRTL ? 'Tahoma, Arial, sans-serif' : 'inherit' }}
    >
      <div ref={chatWindowRef} className={`botgo-window ${isOpen ? 'show' : 'hide'}`}>
        
        {/* HEADER */}
        {/* Invertimos dirección en árabe */}
        <div className="botgo-header-clean" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <button onClick={handleCloseChat} className="header-back-btn">
                <BackArrowIcon />
            </button>
            
            <div className="header-title" style={{ textAlign: isRTL ? 'right' : 'left' }}>
                <h2>BotGo</h2>
            </div>
            
            <div className="header-avatar-container">
                <RobotIcon className="header-robot-icon" />
            </div>
        </div>

        {/* MENSAJES */}
        <div className="botgo-messages" ref={messagesContainerRef}>
          {messages.map((msg, idx) => (
            <div 
                key={idx} 
                className={`msg-row ${msg.role}`}
                // Ajuste de layout para RTL: Si es asistente en árabe, icon a la derecha
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
                // Alineación del texto dentro de la burbuja
                style={{ direction: isRTL ? 'rtl' : 'ltr', textAlign: isRTL ? 'right' : 'left' }}
              >
                 {renderFormattedText(msg.content)}
              </div>
            </div>
          ))}

           {loading && (
            <div className="msg-row assistant" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
              <div className="msg-avatar-small"><RobotIcon className="msg-icon-svg" /></div>
              <div className="msg-bubble assistant typing">
                  <span className="dot"></span><span className="dot"></span><span className="dot"></span>
              </div>
            </div>
          )}

          {showSalesButton && (
            <div className="sales-action-container">
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="whatsapp-float-btn"
                style={{ direction: isRTL ? 'rtl' : 'ltr' }}
              >
                <WhatsAppIcon /> {t.salesBtn} {productoInteres}
              </a>
            </div>
          )}
        </div>

        {/* INPUT (FOOTER) */}
        <div className="botgo-footer-curve">
            <form 
                onSubmit={sendMessage} 
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
                    placeholder={isListening ? t.listening : t.placeholder} 
                    disabled={loading}
                    // Configuración nativa para escribir en árabe
                    dir={isRTL ? "rtl" : "ltr"}
                    style={{ textAlign: isRTL ? 'right' : 'left' }}
                />
                
                <button type="submit" className="action-btn-send" disabled={loading || !input.trim()}>
                    {/* Rotamos el avión de papel en árabe */}
                    <div style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }}>
                        <SendIcon />
                    </div>
                </button>
            </form>
        </div>

      </div>
      
      {/* Botón Flotante de Apertura */}
      {!isOpen && (
          <button className="botgo-button" onClick={() => setIsOpen(true)}>
              <RobotIcon className="botgo-btn-icon" />
          </button>
      )}
    </div>
  );
}