import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield,
  ExternalLink,
  MessageCircle,
  Github,
  Globe,
  Calendar,
  Heart,
  ChevronUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Commands", href: "#commands" },
      { name: "Pricing", href: "#pricing" }
    ],
    Support: [
      { name: "Discord Server", href: "https://discord.com/invite/w77ymEU82a", external: true },
      { name: "Help Center", href: "https://discord.com/invite/w77ymEU82a", external: true },
      { name: "Report Bug", href: "https://discord.com/invite/w77ymEU82a", external: true }
    ],
    Community: [
      { name: "Discord", href: "https://discord.com/invite/w77ymEU82a", external: true },
      { name: "GitHub", href: "https://github.com/Ankush26030", external: true }
    ]
  };

  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      <div className="container-max section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-gradient rounded-lg flex items-center justify-center glow">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold gradient-text">Flame</span>
              </div>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                The most advanced Discord security bot with comprehensive protection, moderation, and community management features.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <motion.a
                  href="https://discord.com/invite/w77ymEU82a"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-dark-800 hover:bg-primary-500/20 rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <MessageCircle className="w-5 h-5 text-gray-400 hover:text-primary-400" />
                </motion.a>
                <motion.a
                  href="https://github.com/Ankush26030"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-dark-800 hover:bg-primary-500/20 rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <Github className="w-5 h-5 text-gray-400 hover:text-primary-400" />
                </motion.a>
                <motion.a
                  href="https://devankush.netlify.app/"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-dark-800 hover:bg-primary-500/20 rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <Globe className="w-5 h-5 text-gray-400 hover:text-primary-400" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([category, links], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-white font-bold mb-4">{category}</h3>
                  <ul className="space-y-3">
                    {links.map(link => (
                      <li key={link.name}>
                        {link.external ? (
                          <motion.a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 5 }}
                            className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-1 text-sm"
                          >
                            <span>{link.name}</span>
                            <ExternalLink className="w-3 h-3" />
                          </motion.a>
                        ) : (
                          <motion.div whileHover={{ x: 5 }}>
                            <Link
                              to={link.href}
                              className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-1 text-sm"
                            >
                              <span>{link.name}</span>
                            </Link>
                          </motion.div>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Secure Your Server?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of Discord servers that trust Flame for their security and moderation needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                href="https://discord.com/oauth2/authorize?client_id=1259218811131793479&permissions=414530792793&integration_type=0&scope=bot+applications.commands"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Add to Discord
              </motion.a>
              <motion.a
                href="https://discord.com/invite/w77ymEU82a"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Join Support Server
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-800 bg-dark-950">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>© 2024 Flame. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>by Ankush</span>
            </div>

            {/* Version & Scroll to Top */}
            <div className="flex items-center space-x-6">
              <span className="text-sm text-gray-400">Bot Version 5.0.0</span>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-dark-800 hover:bg-primary-500/20 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <ChevronUp className="w-5 h-5 text-gray-400 hover:text-primary-400" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

