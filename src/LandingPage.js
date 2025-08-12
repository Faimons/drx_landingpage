import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Shield, Bot, Zap, Filter, BarChart3, Clock, CheckCircle, ArrowRight, Settings, Star } from 'lucide-react';

export default function FastAILandingPage() {
  const [stats, setStats] = useState({ tests: 0, months: 0, trades: 0 });
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  useEffect(() => {
    const animateStats = () => {
      const targets = { tests: 2847, months: 18, trades: 15420 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setStats({
          tests: Math.floor(targets.tests * progress),
          months: Math.floor(targets.months * progress),
          trades: Math.floor(targets.trades * progress)
        });
        
        if (currentStep >= steps) clearInterval(timer);
      }, stepDuration);
    };
    
    const timer = setTimeout(animateStats, 1000);
    return () => clearTimeout(timer);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Dynamic Background with Moving Structures */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-cyan-900/30 to-black"></div>
        
        {/* Moving geometric structures */}
        <motion.div 
          style={{ y: y1, rotate }}
          className="absolute top-20 left-10 w-32 h-32 border border-cyan-500/20 rounded-lg"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-40 right-20 w-24 h-24 border border-blue-500/15 rotate-45"
        />
        <motion.div 
          style={{ y: y1 }}
          className="absolute bottom-40 left-1/4 w-16 h-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full"
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Animated particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-50 flex justify-between items-center px-8 py-8 bg-black/40 backdrop-blur-xl border-b border-cyan-500/20"
      >
        <div className="flex items-center space-x-4">
          {/* Fast AI Logo */}
          <div className="relative w-16 h-16">
            {/* AI Head silhouette */}
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-2xl shadow-cyan-500/25 relative overflow-hidden">
              {/* Head outline */}
              <div className="absolute inset-2 border-2 border-cyan-300/50 rounded-lg">
                {/* Face features */}
                <div className="absolute top-1.5 left-1.5 w-1 h-1 bg-cyan-300 rounded-full"></div>
                <div className="absolute top-1.5 right-1.5 w-1 h-1 bg-cyan-300 rounded-full"></div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-cyan-300/60"></div>
              </div>
              {/* Circuit lines */}
              <div className="absolute inset-0 opacity-60">
                <div className="absolute top-1 left-1 w-3 h-px bg-cyan-300"></div>
                <div className="absolute top-2 right-1 w-2 h-px bg-cyan-300"></div>
                <div className="absolute bottom-1 left-2 w-2 h-px bg-cyan-300"></div>
              </div>
            </div>
          </div>
          <div>
            <span className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
              FAST AI
            </span>
            <div className="text-xs text-cyan-400/80 font-medium tracking-wider">GOLD EXPERT</div>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <a href="/setup" className="text-gray-400 hover:text-cyan-400 transition-colors font-medium">
            Setup & Installation
          </a>
          <motion.a 
            href="https://www.mql5.com/de/market/product/127288?source=Site+Profile+Seller"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 rounded-xl font-bold text-black shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
          >
            Experten erwerben
          </motion.a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-8 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                <Star className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-200 font-medium">Limitierte Premium-Edition</span>
              </div>
              
              <h1 className="text-7xl md:text-9xl font-black leading-none">
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
                  FAST AI
                </span>
                <br />
                <span className="text-white/90 text-5xl md:text-7xl">Gold Expert</span>
              </h1>
            </motion.div>
            
            <motion.p 
              variants={fadeInUp}
              className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Der einzige <span className="text-cyan-400 font-semibold">marktstruktur-basierte</span> Trading-Experte,
              der echte Goldmarkt-Dynamiken nutzt. <span className="text-white font-medium">Keine historischen Daten. Nur reine Marktstruktur.</span>
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            >
              <motion.a 
                href="https://www.mql5.com/de/market/product/127288?source=Site+Profile+Seller"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-cyan-500 to-blue-500 px-12 py-5 rounded-xl text-xl font-bold text-black shadow-2xl shadow-cyan-500/30 flex items-center space-x-3"
              >
                <span>Jetzt sichern</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                href="/setup"
                whileHover={{ scale: 1.05 }}
                className="border-2 border-cyan-500/50 px-12 py-5 rounded-xl text-xl font-semibold hover:bg-cyan-500/10 transition-all backdrop-blur-sm"
              >
                Setup ansehen
              </motion.a>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-3 gap-12 mt-20 max-w-4xl mx-auto"
            >
              {[
                { value: stats.tests.toLocaleString(), label: "Intensive Backtests", color: "text-cyan-400" },
                { value: stats.months, label: "Monate Live-Testing", color: "text-blue-400" },
                { value: stats.trades.toLocaleString(), label: "Analysierte Trades", color: "text-sky-400" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-5xl md:text-6xl font-black ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-lg font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Technology Section */}
      <section className="relative z-10 py-32 px-8 bg-gradient-to-r from-black/60 to-cyan-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-20"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-6xl md:text-7xl font-black mb-8"
            >
              Revolutionäre
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Kern-Technologie
              </span>
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-2xl text-gray-300 max-w-4xl mx-auto font-light"
            >
              Entwickelt ausschließlich für XAUUSD. Basiert auf echter Marktstruktur-Analyse, 
              nicht auf veralteten historischen Mustern.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {[
              {
                icon: <BarChart3 className="w-12 h-12" />,
                title: "Marktstruktur-Engine",
                subtitle: "Revolutionär",
                description: "Analysiert live Marktstruktur und Liquiditätszonen. Keine historischen Daten, nur echte Marktdynamiken für präzise Entscheidungen.",
                highlight: "Live-Struktur-Analyse"
              },
              {
                icon: <Filter className="w-12 h-12" />,
                title: "Intelligenter News-Filter",
                subtitle: "Hochentwickelt", 
                description: "Erkennt marktbewegende News automatisch und passt Strategie in Echtzeit an. Schutz vor unvorhersehbaren Volatilitätsspitzen.",
                highlight: "Automatische Anpassung"
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "XAUUSD-Spezialisierung",
                subtitle: "Exklusiv",
                description: "Ausschließlich für Gold entwickelt. Nutzt spezifische Goldmarkt-Eigenschaften und Liquiditätsmuster optimal aus.",
                highlight: "Gold-optimiert"
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Robuste Architektur", 
                subtitle: "Getestet",
                description: "18 Monate intensive Entwicklung. Über 2.800 Backtests für maximale Stabilität unter allen Marktbedingungen.",
                highlight: "Battle-tested"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-10 hover:border-cyan-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-bold text-cyan-400 bg-cyan-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
                          {feature.subtitle}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed text-lg mb-4">{feature.description}</p>
                      <div className="inline-flex items-center text-cyan-400 font-semibold">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        {feature.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="relative z-10 py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-6xl md:text-7xl font-black mb-8"
            >
              Exklusive
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Verfügbarkeit
              </span>
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              Limitierte Edition - Preis steigt automatisch mit jeder verkauften Lizenz
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border-2 border-cyan-500/30 rounded-3xl p-12 shadow-2xl shadow-cyan-500/20">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 rounded-full text-lg font-bold text-black shadow-lg">
                  Premium Edition
                </span>
              </div>
              
              <div className="text-center mb-12 pt-6">
                <h3 className="text-4xl font-black mb-6">Fast AI Gold Expert</h3>
                <div className="text-xl text-gray-300 mb-8">
                  Einmaliger Erwerb • Keine APIs • Keine laufenden Kosten
                </div>
                
                <div className="bg-cyan-500/20 border border-cyan-500/50 rounded-2xl p-6 mb-8">
                  <p className="text-cyan-200 text-lg font-medium">
                    ⚠️ Dynamische Preisgestaltung - Preis erhöht sich mit jeder Lizenz
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  "Marktstruktur-basierte Trading-Engine",
                  "Speziell für XAUUSD optimiert",
                  "Intelligente News- und Volatilitäts-Filter",
                  "18 Monate Entwicklung + 2.800+ Tests",
                  "Vollständige Flexibilität und Anpassung",
                  "Lebenslange Nutzung ohne Folgekosten",
                  "Keine API-Abhängigkeiten oder Limits",
                  "Professioneller Setup-Support inklusive"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-200 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <motion.a 
                href="https://www.mql5.com/de/market/product/127288?source=Site+Profile+Seller"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 py-6 rounded-2xl text-2xl font-bold text-black shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all block text-center"
              >
                Fast AI Expert jetzt sichern
              </motion.a>
              
              <div className="mt-8 text-center text-gray-500 text-sm">
                Risikohinweis: Trading birgt Verlustrisiken. Keine Garantie für zukünftige Ergebnisse.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Setup Section */}
      <section id="setup" className="relative z-10 py-32 px-8 bg-gradient-to-r from-black/80 to-cyan-900/30">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-black mb-8"
            >
              Professioneller
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Setup-Service
              </span>
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
            >
              Vollständige Installation und Konfiguration inklusive. 
              Unser Expertenteam richtet alles für optimale Performance ein.
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center space-x-4"
            >
              <Settings className="w-8 h-8 text-cyan-400" />
              <span className="text-lg text-gray-300">Detaillierte Setup-Anleitung nach dem Kauf verfügbar</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16 px-8 bg-black/60 border-t border-cyan-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-black" />
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Fast AI Gold Expert
            </span>
          </div>
          
          <div className="text-gray-400 text-lg mb-6">
            Marktstruktur-basierter XAUUSD Trading-Experte
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-gray-500 text-sm space-y-2">
            <p>© 2025 Fast AI Expert. Alle Rechte vorbehalten.</p>
            <p>
              Risikohinweis: Trading mit Forex und CFDs birgt erhebliche Verlustrisiken. 
              Vergangene Performance ist keine Garantie für zukünftige Ergebnisse.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}