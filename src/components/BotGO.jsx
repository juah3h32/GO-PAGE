import React, { useState, useRef, useEffect } from 'react';
import './BotGO.css';

// --- ÍCONOS (Sin cambios) ---
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
  <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function BotGO() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '¡Hola! Soy BotGo 🤖. ¿En qué puedo asesorarte hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSalesButton, setShowSalesButton] = useState(false);
  
  const [productoInteres, setProductoInteres] = useState("sus productos"); 

  const chatWindowRef = useRef(null);
  const inputRef = useRef(null); 
  const messagesContainerRef = useRef(null); 

  // --- FUNCIÓN PARA CERRAR Y LIMPIAR EL FOCO ---
  const handleCloseChat = () => {
    setIsOpen(false);
    // IMPORTANTE: Quitamos el foco del input para que la próxima vez que presiones "F"
    // el sistema no piense que sigues escribiendo en el chat.
    if (inputRef.current) {
        inputRef.current.blur();
    }
    // Devolvemos el foco a la ventana principal
    window.focus();
  };

  // --- DETECCIÓN DE TECLA "F" ---
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      // Si la tecla es F
      if (e.key.toLowerCase() === 'f') {
        const tagName = e.target.tagName;
        // Solo bloqueamos si el usuario está escribiendo en UN INPUT VISIBLE
        // Si el chat está cerrado, ignoramos el inputRef aunque tuviera foco por error
        const isTyping = (tagName === 'INPUT' || tagName === 'TEXTAREA' || e.target.isContentEditable);

        // Si NO está escribiendo en otro lado, abrimos el chat
        if (!isTyping) {
          e.preventDefault(); 
          setIsOpen(true);
        }
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown);
    };
  }, []); // Dependencias vacías para que solo se monte una vez

  const detectarProducto = (texto) => {
    const t = texto.toLowerCase();
    if (t.includes('rafia') || t.includes('fibrilada')) return 'la Rafia';
    if (t.includes('cuerda') || t.includes('cabo') || t.includes('rope')) return 'las Cuerdas';
    if (t.includes('saco') || t.includes('costal')) return 'los Sacos';
    if (t.includes('malla') || t.includes('bolsa')) return 'las Bolsas/Mallas';
    if (t.includes('film') || t.includes('estirable') || t.includes('playo')) return 'el Stretch Film';
    if (t.includes('esquinero')) return 'los Esquineros';
    return null; 
  };

  const WHATSAPP_LINK = `https://wa.me/524434845466?text=Hola+Grupo+Ortiz,+me+interesa+cotizar+${productoInteres.replace(' ', '+')},+quisiera+atención+de+un+asesor...`;

  // Enfocar el input cuando se abre el chat
  useEffect(() => {
    if (isOpen) {
        // Pequeño delay para asegurar que el DOM se renderizó
        setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (messagesContainerRef.current) messagesContainerRef.current.scrollTop = 0;
  }, [messages, loading]);

  // Manejo de clicks fuera y tecla ESCAPE
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Si el chat está abierto y el click es fuera de la ventana del chat...
      if (isOpen && chatWindowRef.current && !chatWindowRef.current.contains(event.target)) {
        // IMPORTANTE: No cerrar si el click fue en el botón de abrir (para evitar conflictos)
        const btn = document.querySelector('.botgo-button');
        if (btn && btn.contains(event.target)) return;
        
        handleCloseChat();
      }
    };
    
    const handleEscKey = (event) => {
      if (event.key === 'Escape' || event.keyCode === 27) {
        handleCloseChat();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscKey);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen]);

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

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setShowSalesButton(false);
    const textoUsuario = input.toLowerCase();

    const palabrasVenta = ['comprar', 'cotizar', 'cotizacion', 'precio', 'costo', 'presupuesto', 'adquirir', 'pago', 'cuesta', 'pedido', 'vender'];
    const esVentaObvia = palabrasVenta.some(palabra => textoUsuario.includes(palabra));

    const nuevoProducto = detectarProducto(textoUsuario);
    if (nuevoProducto) {
        setProductoInteres(nuevoProducto);
    }

    const userMsg = { role: 'user', content: input };
    const newMessagesForState = [userMsg, ...messages]; 
    setMessages(newMessagesForState);
    
    const apiMessages = [...messages].reverse().concat(userMsg);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages })
      });
      const data = await response.json();
      let replyText = data.reply;

      if (replyText.includes('[[VENTA_DETECTADA]]') || esVentaObvia) {
        setShowSalesButton(true);
        replyText = replyText.replace('[[VENTA_DETECTADA]]', '');
      }
      setMessages(prev => [{ role: 'assistant', content: replyText }, ...prev]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [{ role: 'assistant', content: 'Error de conexión.' }, ...prev]);
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  };

  return (
    <div className={`botgo-container ${isOpen ? 'open' : ''}`}>
      <div ref={chatWindowRef} className={`botgo-window ${isOpen ? 'show' : 'hide'}`}>
        <div className="botgo-header">
          <div className="botgo-header-info">
            <div className="botgo-avatar-circle"><RobotIcon className="botgo-header-icon" /></div>
            <div className="botgo-text-info">
              <strong>BotGo</strong>
              <div className="botgo-status-container">
                <span className="status-dot"></span><span className="status-text">En línea</span>
              </div>
            </div>
          </div>
          {/* USAMOS LA NUEVA FUNCIÓN handleCloseChat AQUÍ */}
          <button onClick={handleCloseChat} className="botgo-close-btn">✕</button>
        </div>
        <div className="botgo-messages" ref={messagesContainerRef}>
          {loading && (
            <div className="msg-row assistant">
              <div className="msg-avatar"><RobotIcon className="msg-icon-svg" /></div>
              <div className="msg-bubble assistant typing"><span className="dot"></span><span className="dot"></span><span className="dot"></span></div>
            </div>
          )}
          {messages.map((msg, idx) => (
            <div key={idx} className={`msg-row ${msg.role}`}>
              {msg.role === 'assistant' && <div className="msg-avatar"><RobotIcon className="msg-icon-svg" /></div>}
              <div className={`msg-bubble ${msg.role} structured-text`}>
                 {renderFormattedText(msg.content)}
              </div>
            </div>
          ))}
          {showSalesButton && (
            <div className="sales-action-container">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="whatsapp-float-btn">
                <WhatsAppIcon /> Cotizar {productoInteres}
              </a>
            </div>
          )}
        </div>
        <form onSubmit={sendMessage} className="botgo-input-area">
          <input ref={inputRef} className="botgo-input" type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Escribe tu duda..." disabled={loading}/>
          <button type="submit" className="botgo-send" disabled={loading || !input.trim()}>➤</button>
        </form>
      </div>
      {!isOpen && <button className="botgo-button" onClick={() => setIsOpen(true)}><RobotIcon className="botgo-btn-icon" /></button>}
    </div>
  );
}