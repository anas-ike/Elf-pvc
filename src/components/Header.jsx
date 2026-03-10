import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ExternalLink, X, Menu, ArrowRight, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: "Features", href: "#features" },
    { name: "Commands", href: "#commands" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "https://discord.com/invite/w77ymEU82a", external: true }
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3 sm:py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between p-3 sm:p-4 rounded-2xl backdrop-blur-md bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.03] transition-all duration-300">
          {/* Logo and Navigation */}
          <div className="flex items-center gap-8">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 text-red-400 hover:text-red-300 transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/25">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold">Flame</span>
            </motion.a>

            <nav className="hidden md:flex items-center gap-6">
              {navigationItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 transition-all duration-300 text-white/60 hover:text-white hover:scale-105"
                >
                  <span>{item.name}</span>
                  {item.external && <ExternalLink className="w-4 h-4" />}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 transition-all duration-300"
              >
                {isMenuOpen ? 
                  <X className="w-4 h-4 text-red-400" /> : 
                  <Menu className="w-4 h-4 text-red-400" />
                }
              </motion.button>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <motion.a
                href="https://discord.com/oauth2/authorize?client_id=1259218811131793479&permissions=414530792793&integration_type=0&scope=bot+applications.commands"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] transition-all duration-300"
              >
                <span className="text-white/60 text-sm font-medium">Invite Bot</span>
              </motion.a>

              <motion.a
                href="https://discord.com/invite/w77ymEU82a"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 transition-all duration-300 shadow-lg shadow-red-500/25"
              >
                <span className="text-white text-sm font-semibold">Support</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md"
            >
              <div className="flex flex-col space-y-3">
                {navigationItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.05] transition-all duration-300"
                  >
                    <span>{item.name}</span>
                    {item.external && <ExternalLink className="w-4 h-4" />}
                  </motion.a>
                ))}

                <div className="flex flex-col space-y-3 pt-4 border-t border-white/10">
                  <motion.a
                    href="https://discord.com/oauth2/authorize?client_id=1259218811131793479&permissions=414530792793&integration_type=0&scope=bot+applications.commands"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] text-white/60 text-center font-medium transition-all duration-300"
                  >
                    Invite Bot
                  </motion.a>

                  <motion.a
                    href="https://discord.com/invite/w77ymEU82a"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-3 rounded-lg bg-gradient-to-br from-red-500 to-red-600 text-white text-center font-semibold transition-all duration-300 shadow-lg shadow-red-500/25"
                  >
                    Support
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;

