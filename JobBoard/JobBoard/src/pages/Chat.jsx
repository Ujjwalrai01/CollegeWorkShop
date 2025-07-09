import React, { useState, useRef, useEffect } from 'react';
import Adhiraj from '../assets/Images/adhiraj.png'
import Ujjwal from '../assets/Images/ujjwal.png'
import Kartik from '../assets/Images/kartik.png'
import Prithwi from '../assets/Images/prithwi.png'
import Sheethal from '../assets/Images/sheethal.png'
import { 
  Send, 
  Phone, 
  Video, 
  MoreVertical, 
  Paperclip, 
  Smile, 
  Mic, 
  Search, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Star, 
  Archive, 
  Bell, 
  BellOff, 
  Download,
  Filter,
  Check,
  CheckCheck,
  Clock,
  Building2,
  MapPin,
  DollarSign,
  Eye,
  ArrowLeft
} from 'lucide-react';

const JobBoardChat = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileView, setMobileView] = useState(false);
  const [activeChat, setActiveChat] = useState(0);
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showAttachMenu, setShowAttachMenu] = useState(false);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const messageInputRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Sample chat data with job board context
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "Ujjwal Rai",
      role: "HR Manager",
      company: "Microsoft",
      avatar: Ujjwal,
      lastMessage: "When would you be available for the interview?",
      time: "2m ago",
      unread: 3,
      online: true,
      starred: true,
      archived: false,
      job: {
        title: "Junior Frontend Developer",
        salary: "$60k - $70k",
        location: "Banglore, India"
      }
    },
    {
      id: 2,
      name: "Kartik Pandey",
      role: "HR Manager",
      company: "Google",
      avatar: Kartik,
      lastMessage: "When would you be available for the interview?",
      time: "2m ago",
      unread: 3,
      online: true,
      starred: true,
      archived: false,
      job: {
        title: "Junior Backend Developer",
        salary: "$70k - $80k",
        location: "Banglore, India"
      }
    },
    {
      id: 3,
      name: "Adhiraj Gaur",
      role: "HR Manager",
      company: "Apple",
      avatar: Adhiraj,
      lastMessage: "When would you be available for the interview?",
      time: "2m ago",
      unread: 3,
      online: true,
      starred: true,
      archived: false,
      job: {
        title: "Junior Frontend Developer",
        salary: "$50k - $60k",
        location: "Banglore, India"
      }
    },
    {
      id: 4,
      name: "Prithwi Hegede",
      role: "HR Manager",
      company: "Microsoft",
      avatar: Prithwi,
      lastMessage: "When would you be available for the interview?",
      time: "2m ago",
      unread: 3,
      online: true,
      starred: true,
      archived: false,
      job: {
        title: "Senior Backend Developer",
        salary: "$90k - $100k",
        location: "Mysuru, India"
      }
    },
    {
      id: 5,
      name: "Sheethal Vageesh",
      role: "HR Manager",
      company: "Google",
      avatar: Sheethal,
      lastMessage: "When would you be available for the interview?",
      time: "2m ago",
      unread: 3,
      online: true,
      starred: true,
      archived: false,
      job: {
        title: "Senior Frontend Developer",
        salary: "$80k - $90k",
        location: "Mysuru, India"
      }
    },
    {
      id: 6,
      name: "Michael Chen",
      role: "Tech Lead",
      company: "StartupX",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      lastMessage: "The technical assessment looks great!",
      time: "1h ago",
      unread: 0,
      online: true,
      starred: false,
      archived: false,
      job: {
        title: "Full Stack Engineer",
        salary: "$85k - $110k",
        location: "New York, NY"
      }
    },
    {
      id: 7,
      name: "Emma Rodriguez",
      role: "Recruiter",
      company: "Design Studio",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      lastMessage: "Portfolio review scheduled for tomorrow",
      time: "3h ago",
      unread: 1,
      online: false,
      lastSeen: "2h ago",
      starred: false,
      archived: false,
      job: {
        title: "UX/UI Designer",
        salary: "$70k - $95k",
        location: "San Francisco, CA"
      }
    },
    {
      id: 8,
      name: "David Park",
      role: "Engineering Manager",
      company: "CloudTech",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face",
      lastMessage: "Let's discuss the backend architecture",
      time: "1d ago",
      unread: 0,
      online: false,
      lastSeen: "5h ago",
      starred: true,
      archived: true,
      job: {
        title: "Backend Developer",
        salary: "$95k - $130k",
        location: "Austin, TX"
      }
    }
  ]);



    // Initial messages for the first chat
const initialMessages = {
  1: [
    // {
    //   id: 4,
    //   sender: "Prethwi Hegede",
    //   content: "Hi! I reviewed your application for the Senior Frontend Developer position. Very impressive background!",
    //   time: "10:30 AM",
    //   status: "read",
    //   isOwn: false
    // },
    // {
    //   id: 1,
    //   sender: "You",
    //   content: "Thank you! I'm really excited about this opportunity. The role seems like a perfect fit for my experience.",
    //   time: "10:32 AM",
    //   status: "read",
    //   isOwn: true
    // },
    // {
    //   id: 2,
    //   sender: "Kartik Pandey",
    //   content: "That's great to hear! We'd love to move forward with a technical interview. When would you be available for the interview?",
    //   time: "10:35 AM",
    //   status: "delivered",
    //   isOwn: false
    // }
  ],
  2: [
    //  {
    //   id: 2,
    //   sender: "Kartik Pandey",
    //   content: "Hi! I reviewed your application for the Senior Frontend Developer position. Very impressive background!",
    //   time: "10:30 AM",
    //   status: "read",
    //   isOwn: false
    // },
    // {
    //   id: 1,
    //   sender: "You",
    //   content: "Thank you! I'm really excited about this opportunity. The role seems like a perfect fit for my experience.",
    //   time: "10:32 AM",
    //   status: "read",
    //   isOwn: true
    // },
    // {
    //   id: 3,
    //   sender: "Adhiraj Gaur",
    //   content: "That's great to hear! We'd love to move forward with a technical interview. When would you be available for the interview?",
    //   time: "10:35 AM",
    //   status: "delivered",
    //   isOwn: false
    // }
  ],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
};
const [messages, setMessages] = useState(initialMessages);










//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       sender: "Ujjwal Rai",
//       content: "Hi! I reviewed your application for the Senior Frontend Developer position. Very impressive background!",
//       time: "10:30 AM",
//       status: "read",
//       isOwn: false
//     },
//     {
//       id: 2,
//       sender: "You",
//       content: "Thank you! I'm really excited about this opportunity. The role seems like a perfect fit for my experience.",
//       time: "10:32 AM",
//       status: "read",
//       isOwn: true
//     },
//     {
//       id: 3,
//       sender: "Sarah Wilson",
//       content: "That's great to hear! We'd love to move forward with a technical interview. When would you be available for the interview?",
//       time: "10:35 AM",
//       status: "delivered",
//       isOwn: false
//     }
//   ]);

  const emojis = ['😀', '😂', '😍', '🤔', '👍', '👋', '🎉', '❤️', '🔥', '💯', '😊', '😎'];

  // Responsive handler
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setMobileView(isMobile);
      if (isMobile) {
        setSidebarOpen(false);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    if (messageInputRef.current) {
      messageInputRef.current.style.height = 'auto';
      messageInputRef.current.style.height = messageInputRef.current.scrollHeight + 'px';
    }
  }, [message]);






  const sendMessage = () => {
  if (!message.trim()) return;
  const chatId = chats[activeChat].id;
  const chatMessages = messages[chatId] || [];
  const newMessage = {
    id: chatMessages.length + 1,
    sender: "You",
    content: message,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    status: "sent",
    isOwn: true
  };

  setMessages({
    ...messages,
    [chatId]: [...chatMessages, newMessage]
  });
  setMessage('');

  // Simulate message status updates
  setTimeout(() => {
    setMessages(prev => ({
      ...prev,
      [chatId]: prev[chatId].map(msg =>
        msg.id === newMessage.id ? { ...msg, status: "delivered" } : msg
      )
    }));
  }, 1000);

  setTimeout(() => {
    setMessages(prev => ({
      ...prev,
      [chatId]: prev[chatId].map(msg =>
        msg.id === newMessage.id ? { ...msg, status: "read" } : msg
      )
    }));
  }, 2000);

  // Simulate typing and response
  setIsTyping(true);
  setTimeout(() => {
    setIsTyping(false);
    const responses = [
      "Thanks for your response! I'll get back to you shortly.",
      "That sounds perfect. Let me check our calendar.",
      "Great! I'll send you the meeting details soon.",
      "Perfect timing! Looking forward to our conversation."
    ];
    const response = {
      id: chatMessages.length + 2,
      sender: chats[activeChat].name,
      content: responses[Math.floor(Math.random() * responses.length)],
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: "delivered",
      isOwn: false
    };
    setMessages(prev => ({
      ...prev,
      [chatId]: [...prev[chatId], response]
    }));
  }, 2000);
};








//   const sendMessage = () => {
//     if (!message.trim()) return;
    
//     const newMessage = {
//       id: messages.length + 1,
//       sender: "You",
//       content: message,
//       time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//       status: "sent",
//       isOwn: true
//     };
    
//     setMessages([...messages, newMessage]);
//     setMessage('');
    
//     // Simulate message status updates
//     setTimeout(() => {
//       setMessages(prev => prev.map(msg => 
//         msg.id === newMessage.id ? { ...msg, status: "delivered" } : msg
//       ));
//     }, 1000);
    
//     setTimeout(() => {
//       setMessages(prev => prev.map(msg => 
//         msg.id === newMessage.id ? { ...msg, status: "read" } : msg
//       ));
//     }, 2000);
    
//     // Simulate typing and response
//     setIsTyping(true);
//     setTimeout(() => {
//       setIsTyping(false);
//       const responses = [
//         "Thanks for your response! I'll get back to you shortly.",
//         "That sounds perfect. Let me check our calendar.",
//         "Great! I'll send you the meeting details soon.",
//         "Perfect timing! Looking forward to our conversation."
//       ];
//       const response = {
//         id: messages.length + 2,
//         sender: chats[activeChat].name,
//         content: responses[Math.floor(Math.random() * responses.length)],
//         time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//         status: "delivered",
//         isOwn: false
//       };
//       setMessages(prev => [...prev, response]);
//     }, 2000);
//   };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const toggleStar = (chatId) => {
    setChats(chats.map(chat => 
      chat.id === chatId ? { ...chat, starred: !chat.starred } : chat
    ));
  };

  const toggleArchive = (chatId) => {
    setChats(chats.map(chat => 
      chat.id === chatId ? { ...chat, archived: !chat.archived } : chat
    ));
  };

  const getFilteredChats = () => {
    let filtered = chats;
    
    if (filter === 'unread') {
      filtered = filtered.filter(chat => chat.unread > 0);
    } else if (filter === 'archived') {
      filtered = filtered.filter(chat => chat.archived);
    } else if (filter === 'all') {
      filtered = filtered.filter(chat => !chat.archived);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(chat => 
        chat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chat.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chat.job.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'sent':
        return <Clock className="w-3 h-3" />;
      case 'delivered':
        return <Check className="w-3 h-3" />;
      case 'read':
        return <CheckCheck className="w-3 h-3 text-blue-500" />;
      default:
        return null;
    }
  };

  const totalUnread = chats.reduce((sum, chat) => sum + chat.unread, 0);

  const themeClasses = darkMode 
    ? 'bg-gray-900 text-white' 
    : 'bg-gray-50 text-gray-900';

  return (
    <div className={`flex h-screen ${themeClasses} transition-colors duration-300`}>
      {/* Mobile Overlay */}
      {mobileView && sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        ${mobileView ? 'fixed z-50' : 'relative'} 
        w-80 h-full transition-transform duration-300 ease-in-out
        ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} 
        border-r flex flex-col`}>
        
        {/* Sidebar Header */}
        <div className={`p-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} flex items-center justify-between`}>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                JB
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <h1 className="font-semibold">JobBoard Chat</h1>
              {totalUnread > 0 && (
                <span className="text-xs text-blue-500">{totalUnread} unread</span>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            {mobileView && (
              <button
                onClick={() => setSidebarOpen(false)}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="p-4 space-y-3">
          <div className="relative">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                darkMode 
                  ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' 
                  : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>
          
          <div className="flex space-x-2">
            {['all', 'unread', 'archived'].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  filter === filterType
                    ? 'bg-blue-500 text-white'
                    : darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {getFilteredChats().map((chat) => (
            <div
              key={chat.id}
              onClick={() => {
                setActiveChat(chats.findIndex(c => c.id === chat.id));
                if (mobileView) setSidebarOpen(false);
              }}
              className={`p-4 border-b cursor-pointer transition-colors ${
                activeChat === chats.findIndex(c => c.id === chat.id)
                  ? darkMode ? 'bg-gray-700' : 'bg-blue-50'
                  : darkMode ? 'hover:bg-gray-700 border-gray-700' : 'hover:bg-gray-50 border-gray-200'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className="relative flex-shrink-0">
                  <img
                    src={chat.avatar}
                    alt={chat.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {chat.online && (
                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full animate-pulse"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold truncate">{chat.name}</h3>
                      {chat.starred && <Star className="w-3 h-3 text-yellow-500 fill-current" />}
                    </div>
                    <div className="flex items-center space-x-1">
                      {chat.unread > 0 && (
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full min-w-[20px] text-center">
                          {chat.unread}
                        </span>
                      )}
                      <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {chat.time}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 mb-2">
                    <Building2 className="w-3 h-3 text-gray-400" />
                    <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {chat.role} at {chat.company}
                    </span>
                  </div>
                  
                  <div className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'} truncate`}>
                    {chat.lastMessage}
                  </div>
                  
                  <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} flex items-center space-x-1`}>
                    <span className="font-medium">{chat.job.title}</span>
                    <span>•</span>
                    <span>{chat.job.salary}</span>
                  </div>
                  
                  {!chat.online && chat.lastSeen && (
                    <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'} mt-1`}>
                      Last seen {chat.lastSeen}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className={`p-4 border-b ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'} flex items-center justify-between`}>
          <div className="flex items-center space-x-3">
            {mobileView && (
              <button
                onClick={() => setSidebarOpen(true)}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                <Menu className="w-5 h-5" />
              </button>
            )}
            
            <div className="relative">
              <img
                src={chats[activeChat]?.avatar}
                alt={chats[activeChat]?.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              {chats[activeChat]?.online && (
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              )}
            </div>
            
            <div className="flex-1">
              <h2 className="font-semibold">{chats[activeChat]?.name}</h2>
              <div className="flex items-center space-x-2 text-sm">
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {chats[activeChat]?.role} at {chats[activeChat]?.company}
                </span>
                {chats[activeChat]?.online ? (
                  <span className="text-green-500 text-xs">• Online</span>
                ) : (
                  <span className={`${darkMode ? 'text-gray-500' : 'text-gray-400'} text-xs`}>
                    • Last seen {chats[activeChat]?.lastSeen}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => toggleStar(chats[activeChat]?.id)}
              className={`p-2 rounded-lg transition-colors ${
                chats[activeChat]?.starred 
                  ? 'text-yellow-500' 
                  : darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              <Star className={`w-5 h-5 ${chats[activeChat]?.starred ? 'fill-current' : ''}`} />
            </button>
            <button className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
              <Phone className="w-5 h-5" />
            </button>
            <button className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
              <Video className="w-5 h-5" />
            </button>
            <div className="relative">
              <button className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Job Details Card */}
        <div className={`p-4 border-b ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-blue-50'}`}>
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{chats[activeChat]?.job.title}</h3>
              <div className="flex items-center space-x-4 mt-2 text-sm">
                <div className="flex items-center space-x-1">
                  <Building2 className="w-4 h-4 text-gray-500" />
                  <span>{chats[activeChat]?.company}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span>{chats[activeChat]?.job.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <DollarSign className="w-4 h-4 text-gray-500" />
                  <span className="font-medium text-green-600">{chats[activeChat]?.job.salary}</span>
                </div>
              </div>
            </div>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2">
              <Eye className="w-4 h-4" />
              <span>View Job</span>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {(messages[chats[activeChat]?.id] || []).map((msg) => (
            <div key={msg.id} className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                msg.isOwn
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-md'
                  : darkMode
                  ? 'bg-gray-700 text-white rounded-bl-md'
                  : 'bg-gray-200 text-gray-900 rounded-bl-md'
              } shadow-sm`}>
                <p>{msg.content}</p>
                <div className={`flex items-center justify-between mt-2 text-xs ${
                  msg.isOwn ? 'text-blue-100' : darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <span>{msg.time}</span>
                  {msg.isOwn && (
                    <div className="ml-2">
                      {getStatusIcon(msg.status)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className={`px-4 py-2 rounded-2xl rounded-bl-md ${
                darkMode ? 'bg-gray-700' : 'bg-gray-200'
              }`}>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className={`p-4 border-t ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
          <div className={`flex items-end space-x-3 rounded-2xl border ${
            darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-50'
          } p-3`}>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <button
                  onClick={() => setShowAttachMenu(!showAttachMenu)}
                  className={`p-2 rounded-full transition-colors ${
                    darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'
                  }`}
                >
                  <Paperclip className="w-5 h-5" />
                </button>
                
                {showAttachMenu && (
                  <div className={`absolute bottom-full mb-2 left-0 w-48 rounded-lg border shadow-lg ${
                    darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                  } py-2`}>
                    <button className={`w-full px-4 py-2 text-left hover:${darkMode ? 'bg-gray-700' : 'bg-gray-50'} flex items-center space-x-2`}>
                      <span>📎</span><span>Document</span>
                    </button>
                    <button className={`w-full px-4 py-2 text-left hover:${darkMode ? 'bg-gray-700' : 'bg-gray-50'} flex items-center space-x-2`}>
                      <span>📷</span><span>Photo</span>
                    </button>
                    <button className={`w-full px-4 py-2 text-left hover:${darkMode ? 'bg-gray-700' : 'bg-gray-50'} flex items-center space-x-2`}>
                      <span>🎵</span><span>Audio</span>
                    </button>
                    <button className={`w-full px-4 py-2 text-left hover:${darkMode ? 'bg-gray-700' : 'bg-gray-50'} flex items-center space-x-2`}>
                      <span>📅</span><span>Schedule Meeting</span>
                    </button>
                  </div>
                )}
              </div>
              
              <div className="relative">
                <button
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  className={`p-2 rounded-full transition-colors ${
                    darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'
                  }`}
                >
                  <Smile className="w-5 h-5" />
                </button>
                
                {showEmojiPicker && (
                  <div className={`absolute bottom-full mb-2 left-0 w-64 rounded-lg border shadow-lg ${
                    darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                  } p-4`}>
                    <div className="grid grid-cols-6 gap-2">
                      {emojis.map((emoji, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setMessage(message + emoji);
                            setShowEmojiPicker(false);
                          }}
                          className={`p-2 text-lg rounded hover:${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <textarea
              ref={messageInputRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className={`flex-1 resize-none border-none outline-none bg-transparent ${
                darkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
              } max-h-32`}
              rows="1"
            />

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsRecording(!isRecording)}
                className={`p-2 rounded-full transition-colors ${
                  isRecording 
                    ? 'bg-red-500 text-white animate-pulse' 
                    : darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'
                }`}
              >
                <Mic className="w-5 h-5" />
              </button>
              
              <button
                onClick={sendMessage}
                disabled={!message.trim()}
                className={`p-2 rounded-full transition-all duration-200 ${
                  message.trim()
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg'
                    : darkMode ? 'bg-gray-600 text-gray-400' : 'bg-gray-300 text-gray-500'
                }`}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions Menu (Mobile) */}
      {mobileView && (
        <div className={`fixed bottom-20 right-4 space-y-2 ${
          showAttachMenu || showEmojiPicker ? 'block' : 'hidden'
        }`}>
          <button className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg">
            <Archive className="w-6 h-6" />
          </button>
          <button className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white shadow-lg">
            <Bell className="w-6 h-6" />
          </button>
          <button className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg">
            <Download className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Context Menu */}
      <div className="hidden">
        <div className={`absolute top-0 left-0 w-48 rounded-lg border shadow-lg ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        } py-2 z-50`}>
          <button className={`w-full px-4 py-2 text-left hover:${darkMode ? 'bg-gray-700' : 'bg-gray-50'} flex items-center space-x-2`}>
            <Star className="w-4 h-4" />
            <span>Star Conversation</span>
          </button>
          <button className={`w-full px-4 py-2 text-left hover:${darkMode ? 'bg-gray-700' : 'bg-gray-50'} flex items-center space-x-2`}>
            <Archive className="w-4 h-4" />
            <span>Archive</span>
          </button>
          <button className={`w-full px-4 py-2 text-left hover:${darkMode ? 'bg-gray-700' : 'bg-gray-50'} flex items-center space-x-2`}>
            <BellOff className="w-4 h-4" />
            <span>Mute Notifications</span>
          </button>
          <button className={`w-full px-4 py-2 text-left hover:${darkMode ? 'bg-gray-700' : 'bg-gray-50'} flex items-center space-x-2`}>
            <Download className="w-4 h-4" />
            <span>Export Chat</span>
          </button>
          <hr className={`my-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`} />
          <button className={`w-full px-4 py-2 text-left hover:${darkMode ? 'bg-gray-700' : 'bg-gray-50'} flex items-center space-x-2 text-red-500`}>
            <span>🗑️</span>
            <span>Delete Conversation</span>
          </button>
        </div>
      </div>

      {/* Notification Toast */}
      <div className="fixed top-4 right-4 space-y-2 z-50">
        {/* This would be dynamically populated with notifications */}
      </div>

      {/* Loading States */}
      {false && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`rounded-lg p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-center">Loading...</p>
          </div>
        </div>
      )}

      {/* Success/Error Messages */}
      <div className="hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2">
          <CheckCheck className="w-5 h-5" />
          <span>Message sent successfully!</span>
        </div>
      </div>

      {/* Keyboard Shortcuts Helper */}
      <div className="hidden fixed bottom-4 right-4 max-w-sm">
        <div className={`rounded-lg p-4 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border shadow-lg`}>
          <h3 className="font-semibold mb-2">Keyboard Shortcuts</h3>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Send message</span>
              <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Enter</kbd>
            </div>
            <div className="flex justify-between">
              <span>New line</span>
              <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Shift + Enter</kbd>
            </div>
            <div className="flex justify-between">
              <span>Search</span>
              <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Ctrl + F</kbd>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Features Overlay */}
      <style jsx>{`
        @keyframes messageSlideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
          }
        }
        
        .message-enter {
          animation: messageSlideIn 0.3s ease-out;
        }
        
        .online-indicator {
          animation: pulseGlow 2s infinite;
        }
        
        .glassmorphism {
          backdrop-filter: blur(10px);
          background-color: rgba(255, 255, 255, 0.1);
        }
        
        .gradient-border {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ef4444, #f59e0b);
          background-size: 400% 400%;
          animation: gradientShift 3s ease infinite;
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .hover-lift {
          transition: transform 0.2s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-2px);
        }
        
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .message-bubble {
          position: relative;
          overflow: hidden;
        }
        
        .message-bubble::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }
        
        .message-bubble:hover::before {
          left: 100%;
        }
        
        .scroll-smooth {
          scroll-behavior: smooth;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(156, 163, 175, 0.3);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(156, 163, 175, 0.5);
        }
        
        .typing-animation {
          animation: typing 1.4s infinite;
        }
        
        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-10px);
          }
        }
        
        .fade-in {
          animation: fadeIn 0.5s ease-in;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .slide-up {
          animation: slideUp 0.3s ease-out;
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .bounce-in {
          animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .glow-on-hover {
          transition: all 0.3s ease;
        }
        
        .glow-on-hover:hover {
          box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4);
          transform: translateY(-1px);
        }
        
        .premium-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .aurora-effect {
          background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
          background-size: 400% 400%;
          animation: aurora 15s ease infinite;
        }
        
        @keyframes aurora {
          0% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
          100% { background-position: 0% 50%; }
        }
        
        .floating {
          animation: floating 3s ease-in-out infinite;
        }
        
        @keyframes floating {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .neon-text {
          text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor;
        }
        
        .micro-interaction {
          transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .micro-interaction:active {
          transform: scale(0.95);
        }
        
        .message-status-animation {
          transition: all 0.3s ease;
        }
        
        .delivered-animation {
          animation: deliveredPulse 0.5s ease;
        }
        
        @keyframes deliveredPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        
        .read-animation {
          animation: readGlow 0.8s ease;
        }
        
        @keyframes readGlow {
          0% { color: inherit; }
          50% { color: #3b82f6; text-shadow: 0 0 8px #3b82f6; }
          100% { color: #3b82f6; }
        }
      `}</style>
    </div>
  );
};

export default JobBoardChat;