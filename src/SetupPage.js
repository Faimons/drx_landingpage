import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Download, Settings, Zap, AlertTriangle, Play, ArrowRight, ArrowLeft, Monitor, FileText, Cog } from 'lucide-react';

export default function FastAISetupPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const steps = [
    {
      id: 1,
      title: "Dateien erhalten",
      subtitle: "Nach dem Kauf",
      icon: <Download className="w-6 h-6" />,
      content: {
        description: "Sie erhalten diese Dateien direkt nach dem Kauf:",
        items: [
          "FastAI.ex5 (Hauptdatei des Experten)",
          "Installationsanleitung (PDF)",
          "Support-Kontakt für Hilfe"
        ],
        note: "Alle Dateien werden automatisch an Ihre E-Mail gesendet."
      }
    },
    {
      id: 2, 
      title: "MetaTrader 5 vorbereiten",
      subtitle: "Einstellungen aktivieren",
      icon: <Settings className="w-6 h-6" />,
      content: {
        description: "MT5 für Algorithmic Trading konfigurieren:",
        steps: [
          "Tools → Optionen öffnen",
          "Tab 'Expert Advisors' wählen",
          "✅ 'Allow algorithmic trading' aktivieren",
          "✅ 'Allow DLL imports' aktivieren", 
          "✅ 'Allow imports of external experts' aktivieren",
          "OK klicken"
        ],
        note: "Diese Einstellungen sind essentiell für den Betrieb."
      }
    },
    {
      id: 3,
      title: "Expert installieren", 
      subtitle: "Dateien kopieren",
      icon: <FileText className="w-6 h-6" />,
      content: {
        description: "Fast AI in MT5 installieren:",
        steps: [
          "MT5: Datei → Datenordner öffnen",
          "Ordner MQL5 → Experts öffnen",
          "FastAI.ex5 in Experts-Ordner kopieren",
          "MetaTrader 5 neu starten",
          "Navigator öffnen (Strg+N)",
          "Fast AI unter 'Expert Advisors' finden"
        ],
        note: "Nach dem Neustart ist Fast AI verfügbar."
      }
    },
    {
      id: 4,
      title: "Auf Chart anwenden",
      subtitle: "XAUUSD Chart",
      icon: <Monitor className="w-6 h-6" />,
      content: {
        description: "Fast AI auf Gold-Chart aktivieren:",
        steps: [
          "XAUUSD Chart öffnen (wichtig: nur Gold!)",
          "Zeitrahmen H1 oder H4 wählen",
          "Fast AI vom Navigator auf Chart ziehen",
          "Einstellungsfenster öffnet sich automatisch"
        ],
        note: "Fast AI funktioniert nur mit XAUUSD!"
      }
    },
    {
      id: 5,
      title: "Einstellungen konfigurieren",
      subtitle: "Optimale Parameter",
      icon: <Cog className="w-6 h-6" />,
      content: {
        description: "Empfohlene Einstellungen für Fast AI:",
        categories: [
          {
            name: "Grundeinstellungen",
            settings: [
              "Lot Size: 0.01 (für kleine Konten)",
              "Max Risk: 2.0% (pro Trade)",
              "Magic Number: 12345"
            ]
          },
          {
            name: "News Filter",
            settings: [
              "Use News Filter: true",
              "High Impact News: true",
              "Minutes Before/After: 30"
            ]
          },
          {
            name: "Zeitfilter",
            settings: [
              "Trade Hours: 08:00 - 22:00",
              "Trade Monday-Thursday: true",
              "Friday bis 20:00: empfohlen"
            ]
          }
        ],
        note: "Diese Parameter sind nach 18 Monaten Testing optimiert."
      }
    },
    {
      id: 6,
      title: "Aktivierung prüfen",
      subtitle: "Live-Status",
      icon: <Play className="w-6 h-6" />,
      content: {
        description: "Erfolgreiche Aktivierung erkennen:",
        indicators: [
          {
            status: "✅ Grüner Smiley",
            meaning: "Expert aktiv und bereit"
          },
          {
            status: "⚠️ Gelber Smiley", 
            meaning: "Expert wartet auf Signale"
          },
          {
            status: "❌ Rotes X",
            meaning: "Algorithmic Trading deaktiviert"
          }
        ],
        steps: [
          "Smiley-Symbol oben rechts im Chart prüfen",
          "Terminal öffnen (Strg+T) → 'Expert' Tab",
          "Fast AI Meldungen im Log prüfen",
          "Bei Problemen: Support kontaktieren"
        ],
        note: "Der Expert startet automatisch bei passenden Marktbedingungen."
      }
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-b border-cyan-500/20">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="relative w-16 h-16">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-2xl shadow-cyan-500/25">
                  <div className="absolute inset-2 border-2 border-cyan-300/50 rounded-lg">
                    <div className="absolute top-1.5 left-1.5 w-1 h-1 bg-cyan-300 rounded-full"></div>
                    <div className="absolute top-1.5 right-1.5 w-1 h-1 bg-cyan-300 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                  FAST AI
                </h1>
                <div className="text-cyan-400/80 font-medium">SETUP & INSTALLATION</div>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Schritt-für-Schritt Installation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Vollständige Anleitung zur Installation und Konfiguration Ihres Fast AI Gold Experten
            </p>
          </motion.div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-black/40 border-b border-cyan-500/20">
        <div className="max-w-6xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all cursor-pointer ${
                    index <= currentStep 
                      ? 'bg-cyan-500 border-cyan-500 text-black' 
                      : 'border-gray-600 text-gray-400'
                  }`}
                  onClick={() => setCurrentStep(index)}
                >
                  {index < currentStep ? <CheckCircle className="w-5 h-5" /> : step.id}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-2 ${index < currentStep ? 'bg-cyan-500' : 'bg-gray-600'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <motion.div
          key={currentStep}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-12">
            {/* Step Header */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center">
                {steps[currentStep].icon}
              </div>
              <div>
                <div className="text-sm text-cyan-400 font-medium uppercase tracking-wider">
                  Schritt {steps[currentStep].id} von {steps.length}
                </div>
                <h3 className="text-3xl font-bold">{steps[currentStep].title}</h3>
                <div className="text-gray-400">{steps[currentStep].subtitle}</div>
              </div>
            </div>

            {/* Step Content */}
            <div className="space-y-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                {steps[currentStep].content.description}
              </p>

              {/* Items List */}
              {steps[currentStep].content.items && (
                <div className="space-y-4">
                  {steps[currentStep].content.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Steps List */}
              {steps[currentStep].content.steps && (
                <div className="bg-black/30 rounded-2xl p-6">
                  <div className="space-y-3">
                    {steps[currentStep].content.steps.map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="bg-cyan-500 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-gray-200">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Categories */}
              {steps[currentStep].content.categories && (
                <div className="space-y-6">
                  {steps[currentStep].content.categories.map((category, index) => (
                    <div key={index} className="bg-black/30 rounded-2xl p-6">
                      <h4 className="text-xl font-bold text-cyan-400 mb-4">{category.name}</h4>
                      <div className="space-y-2">
                        {category.settings.map((setting, settingIndex) => (
                          <div key={settingIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span className="text-gray-200 font-mono text-sm">{setting}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Indicators */}
              {steps[currentStep].content.indicators && (
                <div className="space-y-4">
                  {steps[currentStep].content.indicators.map((indicator, index) => (
                    <div key={index} className="flex items-center justify-between bg-black/30 rounded-xl p-4">
                      <span className="font-mono text-lg">{indicator.status}</span>
                      <span className="text-gray-300">{indicator.meaning}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Note */}
              {steps[currentStep].content.note && (
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6 flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-cyan-400 font-medium mb-1">Wichtiger Hinweis</div>
                    <div className="text-gray-300">{steps[currentStep].content.note}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                currentStep === 0 
                  ? 'text-gray-500 cursor-not-allowed' 
                  : 'text-white border border-cyan-500/50 hover:bg-cyan-500/10'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Zurück</span>
            </button>

            <div className="text-gray-400">
              Schritt {currentStep + 1} von {steps.length}
            </div>

            <button
              onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
              disabled={currentStep === steps.length - 1}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                currentStep === steps.length - 1
                  ? 'text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-black hover:scale-105'
              }`}
            >
              <span>Weiter</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Support Section */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-t border-cyan-500/20">
        <div className="max-w-6xl mx-auto px-8 py-16 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-3xl font-bold mb-6">Benötigen Sie Hilfe?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Unser Support-Team hilft Ihnen gerne bei der Installation und Konfiguration.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-xl text-lg font-bold text-black hover:scale-105 transition-transform">
              Support kontaktieren
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}