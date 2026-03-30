import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  GraduationCap, 
  Briefcase, 
  Mail, 
  Linkedin, 
  Instagram, 
  ExternalLink, 
  ChevronRight,
  Cpu,
  Globe,
  Terminal,
  Sun,
  Moon
} from 'lucide-react';

// Types
interface Project {
  title: string;
  url: string;
  description: string;
  tags: string[];
}

interface Education {
  level: string;
  school: string;
  details?: string;
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [isDarkMode]);

  const projects: Project[] = [
    {
      title: "Yavuz Kumbar Portfolio",
      url: "https://yavuzkumbar.netlify.app",
      description: "Kişisel dijital kimlik ve portfolyo platformu.",
      tags: ["Web", "Design", "Personal"]
    },
    {
      title: "The Media Tech",
      url: "https://themediatech.netlify.app",
      description: "Medya ve teknoloji kesişimindeki dijital projeler.",
      tags: ["Media", "Tech", "Innovation"]
    },
    {
      title: "Kırılma Noktası Haber",
      url: "https://kirilmanoktasihaber.wordpress.com",
      description: "Güncel haber ve analizlerin yer aldığı dijital yayın.",
      tags: ["Journalism", "Analysis", "News"]
    }
  ];

  const education: Education[] = [
    { level: "Üniversite", school: "Üsküdar Üniversitesi", details: "Yeni Medya ve İletişim (3. Sınıf - Devam Ediyor)" },
    { level: "Lise", school: "Edirne Nazmi Arıkan Fen Bilimleri Lisesi" },
    { level: "Ortaokul", school: "Ataşehir Emlak Konut Ortaokulu" },
    { level: "İlkokul", school: "Pendik Özel Bayramlar Koleji" }
  ];

  const navItems = [
    { id: 'home', label: 'BAŞLANGIÇ', icon: <Terminal size={18} /> },
    { id: 'about', label: 'HAKKIMDA', icon: <User size={18} /> },
    { id: 'education', label: 'EĞİTİM', icon: <GraduationCap size={18} /> },
    { id: 'projects', label: 'PROJELER', icon: <Briefcase size={18} /> },
    { id: 'contact', label: 'İLETİŞİM', icon: <Mail size={18} /> }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className={`min-h-screen cyber-grid selection:bg-cyber-pink selection:text-white transition-colors duration-500 ${isDarkMode ? 'bg-cyber-bg text-white' : 'bg-white text-gray-900'}`}>
      <div className="scanline" />
      
      {/* Theme Toggle Button */}
      <button 
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`fixed top-6 left-6 z-[60] p-3 rounded-full border transition-all neon-border ${isDarkMode ? 'bg-black/40 border-cyber-blue/50 text-cyber-blue' : 'bg-white border-cyber-blue/30 text-cyber-blue shadow-lg'}`}
        title={isDarkMode ? "Açık Tema" : "Koyu Tema"}
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? (isDarkMode ? 'bg-black/80' : 'bg-white/80') + ' backdrop-blur-md border-b border-cyber-blue/30 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`font-display font-black text-2xl tracking-tighter cursor-pointer ml-12 md:ml-0 transition-colors ${isDarkMode ? 'text-white neon-text-blue' : 'text-gray-900'}`}
            onClick={() => scrollToSection('home')}
          >
            YAVUZ <span className="text-cyber-pink">KUMBAR</span>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-xs font-display tracking-widest transition-colors hover:text-cyber-blue flex items-center gap-2 ${activeSection === item.id ? 'text-cyber-blue' : (isDarkMode ? 'text-gray-400' : 'text-gray-600')}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="md:hidden">
            <button className="text-cyber-blue">
              <Terminal size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-[100px] ${isDarkMode ? 'bg-cyber-blue/10' : 'bg-cyber-blue/5'}`} />
          <div className={`absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-[100px] ${isDarkMode ? 'bg-cyber-pink/10' : 'bg-cyber-pink/5'}`} />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center"
        >
          <div className={`inline-block px-3 py-1 border border-cyber-blue/50 bg-cyber-blue/5 text-cyber-blue text-[10px] font-display tracking-[0.3em] mb-6`}>
            SYSTEM_INITIALIZED // V.3.0
          </div>
          <h1 className={`font-display font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter mb-4 leading-none ${!isDarkMode && 'text-gray-900'}`}>
            MEHMET <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink animate-pulse">
              YAVUZ KUMBAR
            </span>
          </h1>
          <p className={`font-display tracking-[0.2em] text-sm md:text-lg mb-12 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            YENİ MEDYA VE İLETİŞİM // DİJİTAL STRATEJİST // ANALİTİK DÜŞÜNÜR
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="px-8 py-4 bg-cyber-blue text-black font-display font-bold text-sm tracking-widest hover:bg-white transition-all transform hover:scale-105 neon-border"
            >
              PROTOKOLÜ BAŞLAT
            </button>
            <div className="flex items-center space-x-4">
              <a href="https://tr.linkedin.com/in/mehmet-yavuz-kumbar-886263226" target="_blank" rel="noopener noreferrer" className={`p-3 border transition-all ${isDarkMode ? 'border-gray-700 hover:border-cyber-blue hover:text-cyber-blue' : 'border-gray-300 hover:border-cyber-blue hover:text-cyber-blue text-gray-600'}`}>
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com/m.yavuzkumbar" target="_blank" rel="noopener noreferrer" className={`p-3 border transition-all ${isDarkMode ? 'border-gray-700 hover:border-cyber-pink hover:text-cyber-pink' : 'border-gray-300 hover:border-cyber-pink hover:text-cyber-pink text-gray-600'}`}>
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyber-blue/50"
        >
          <ChevronRight size={32} className="rotate-90" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square w-full max-w-md mx-auto relative z-10 overflow-hidden border-2 border-cyber-blue p-2">
              <img 
                src="https://i.imgur.com/rCYLgZz.jpeg" 
                alt="Mehmet Yavuz Kumbar" 
                className="w-full h-full object-cover transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-cyber-pink z-0" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-cyber-blue z-0" />
            
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 hidden lg:block">
              <div className={`writing-mode-vertical text-[10px] font-display tracking-[0.5em] uppercase ${isDarkMode ? 'text-cyber-blue/30' : 'text-cyber-blue/50'}`}>
                IDENTITY_VERIFIED // 001
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-cyber-pink" />
              <span className="font-display text-cyber-pink tracking-[0.3em] text-xs">HAKKIMDA</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-8 tracking-tighter">
              ANALİTİK ZİHİN, <br />
              <span className="text-cyber-blue">DİJİTAL GELECEK.</span>
            </h2>
            <div className={`space-y-6 leading-relaxed text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <p>
                Edirne Nazmi Arıkan Fen Bilimleri Lisesi mezunu olarak kazandığım analitik düşünme yeteneğini, Üsküdar Üniversitesi Yeni Medya ve İletişim Bölümü'ndeki eğitimimle birleştiriyorum. Sayısal verilerin gücü ile iletişimin yaratıcılığını harmanlayan bir perspektife sahibim.
              </p>
              <p>
                Dijital dünyayı sadece bir tüketim alanı değil, bir üretim ve strateji sahası olarak görüyorum. Yeni medya teknolojileri, içerik stratejileri ve dijital ekosistemler üzerine yoğunlaşarak, geleceğin iletişim dünyasında fark yaratmayı hedefliyorum.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className={`p-4 border bg-white/5 ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                  <div className="text-cyber-blue font-display text-2xl font-bold mb-1">3. Sınıf</div>
                  <div className="text-[10px] text-gray-500 tracking-widest uppercase">Akademik Seviye</div>
                </div>
                <div className={`p-4 border bg-white/5 ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                  <div className="text-cyber-pink font-display text-2xl font-bold mb-1">Fen Kökenli</div>
                  <div className="text-[10px] text-gray-500 tracking-widest uppercase">Analitik Temel</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-24 relative ${isDarkMode ? 'bg-black/40' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <div className="font-display text-cyber-blue tracking-[0.3em] text-xs mb-4">AKADEMİK GEÇMİŞ</div>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tighter text-center">
              EĞİTİM <span className="text-cyber-blue">YOLCULUĞU</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 border transition-all group relative overflow-hidden ${isDarkMode ? 'border-gray-800 bg-black/60 hover:border-cyber-blue' : 'border-gray-200 bg-white hover:border-cyber-blue shadow-sm'}`}
              >
                <div className={`absolute top-0 right-0 p-2 transition-colors ${isDarkMode ? 'text-gray-800 group-hover:text-cyber-blue/20' : 'text-gray-100 group-hover:text-cyber-blue/10'}`}>
                  <Cpu size={40} />
                </div>
                <div className="text-cyber-pink font-display text-[10px] tracking-widest mb-4 uppercase">{item.level}</div>
                <h3 className={`font-display text-xl font-bold mb-2 group-hover:text-cyber-blue transition-colors ${!isDarkMode && 'text-gray-900'}`}>{item.school}</h3>
                {item.details && <p className="text-sm text-gray-500 font-medium">{item.details}</p>}
                
                <div className="mt-6 h-1 w-0 bg-cyber-blue group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="font-display text-cyber-pink tracking-[0.3em] text-xs mb-4">PORTFOLYO</div>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tighter">
              DİJİTAL <span className="text-cyber-pink">PROJELER</span>
            </h2>
          </div>
          <div className={`hidden md:block font-mono text-xs ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>
            TOTAL_RESOURCES: 03
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group block p-1 transition-all duration-500 ${isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-cyber-blue hover:to-cyber-pink' : 'bg-gray-100 hover:bg-gradient-to-br hover:from-cyber-blue hover:to-cyber-pink'}`}
            >
              <div className={`p-8 h-full flex flex-col transition-colors ${isDarkMode ? 'bg-cyber-bg' : 'bg-white'}`}>
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 transition-colors ${isDarkMode ? 'bg-gray-900 text-cyber-blue group-hover:text-white' : 'bg-gray-50 text-cyber-blue group-hover:bg-cyber-blue group-hover:text-white'}`}>
                    <Globe size={24} />
                  </div>
                  <ExternalLink size={18} className={`transition-colors ${isDarkMode ? 'text-gray-600 group-hover:text-white' : 'text-gray-300 group-hover:text-white'}`} />
                </div>
                <h3 className={`font-display text-2xl font-black mb-4 group-hover:text-cyber-blue transition-colors ${!isDarkMode && 'text-gray-900'}`}>{project.title}</h3>
                <p className="text-gray-500 mb-8 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={`text-[10px] font-display tracking-widest px-2 py-1 border transition-colors ${isDarkMode ? 'border-gray-800 text-gray-400 group-hover:border-cyber-blue group-hover:text-cyber-blue' : 'border-gray-200 text-gray-400 group-hover:border-cyber-blue group-hover:text-cyber-blue'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-24 relative overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-gray-50'}`}>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-blue to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="font-display text-cyber-blue tracking-[0.3em] text-xs mb-4">İLETİŞİM</div>
              <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter mb-8">
                BAĞLANTI <br />
                <span className="text-cyber-blue">KURUN.</span>
              </h2>
              <p className={`text-lg mb-12 max-w-md ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Yeni projeler, iş birlikleri veya sadece dijital dünya üzerine sohbet etmek için bana ulaşabilirsiniz.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:damboncin09@gmail.com" className="flex items-center gap-4 group">
                  <div className={`p-4 border transition-all ${isDarkMode ? 'border-gray-800 group-hover:border-cyber-blue' : 'border-gray-200 group-hover:border-cyber-blue bg-white'}`}>
                    <Mail size={24} className="text-cyber-blue" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 tracking-widest uppercase">E-Posta</div>
                    <div className={`text-lg font-display group-hover:text-cyber-blue transition-colors ${!isDarkMode && 'text-gray-900'}`}>damboncin09@gmail.com</div>
                  </div>
                </a>
                <a href="https://tr.linkedin.com/in/mehmet-yavuz-kumbar-886263226" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className={`p-4 border transition-all ${isDarkMode ? 'border-gray-800 group-hover:border-cyber-blue' : 'border-gray-200 group-hover:border-cyber-blue bg-white'}`}>
                    <Linkedin size={24} className="text-cyber-blue" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 tracking-widest uppercase">LinkedIn</div>
                    <div className={`text-lg font-display group-hover:text-cyber-blue transition-colors ${!isDarkMode && 'text-gray-900'}`}>Mehmet Yavuz Kumbar</div>
                  </div>
                </a>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`p-8 border backdrop-blur-sm ${isDarkMode ? 'border-gray-800 bg-white/5' : 'border-gray-200 bg-white shadow-xl'}`}
            >
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-display tracking-widest text-gray-500 uppercase">İsim</label>
                  <input type="text" className={`w-full border p-4 focus:border-cyber-blue outline-none transition-all ${isDarkMode ? 'bg-black/50 border-gray-800 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`} placeholder="ADINIZ" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-display tracking-widest text-gray-500 uppercase">E-Posta</label>
                  <input type="email" className={`w-full border p-4 focus:border-cyber-blue outline-none transition-all ${isDarkMode ? 'bg-black/50 border-gray-800 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`} placeholder="E-POSTA ADRESİNİZ" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-display tracking-widest text-gray-500 uppercase">Mesaj</label>
                  <textarea rows={4} className={`w-full border p-4 focus:border-cyber-blue outline-none transition-all ${isDarkMode ? 'bg-black/50 border-gray-800 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`} placeholder="MESAJINIZ"></textarea>
                </div>
                <button className="w-full py-4 bg-cyber-pink text-white font-display font-bold tracking-widest hover:bg-white hover:text-black transition-all neon-border border-cyber-pink">
                  MESAJI GÖNDER
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 border-t text-center ${isDarkMode ? 'border-gray-900' : 'border-gray-100'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className={`font-display font-black text-xl tracking-tighter ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            YAVUZ <span className={`${isDarkMode ? 'text-cyber-pink' : 'text-cyber-pink'}`}>KUMBAR</span>
          </div>
          <div className={`text-[10px] font-display tracking-[0.2em] ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>
            © 2026 // ALL RIGHTS RESERVED // DESIGNED_BY_AI
          </div>
          <div className="flex space-x-6">
            <a href="https://tr.linkedin.com/in/mehmet-yavuz-kumbar-886263226" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-cyber-blue transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="https://instagram.com/m.yavuzkumbar" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-cyber-pink transition-colors">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
