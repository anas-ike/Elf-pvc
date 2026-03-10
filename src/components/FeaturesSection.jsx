import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Shield, 
  Settings, 
  Bot, 
  Mic, 
  Zap, 
  Ticket, 
  Gift, 
  Users,
  Palette,
  RotateCcw,
  Heart,
  MessageSquare,
  Gamepad2,
  Wrench,
  Crown,
  ChevronRight
} from 'lucide-react';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    {
      icon: Shield,
      title: "Anti-Nuke Protection",
      description: "Advanced security system with 25+ protection modules",
      color: "from-red-500 to-red-600",
      details: [
        "Anti Ban/Unban & Anti Kick protection",
        "Anti Channel/Role/Emoji management",
        "Anti Everyone/Here ping protection",
        "Anti Server/Member update protection",
        "Whitelist & Extraowner system",
        "Night mode & automated responses"
      ]
    },
    {
      icon: Settings,
      title: "Moderation Suite",
      description: "Comprehensive moderation tools for server management",
      color: "from-blue-500 to-blue-600",
      details: [
        "Ban/Unban, Kick, Mute/Unmute commands",
        "Advanced warning system",
        "Bulk moderation actions",
        "Channel management (Lock/Hide)",
        "Message purging & snipe features",
        "Role management & permissions"
      ]
    },
    {
      icon: Bot,
      title: "Auto-Moderation",
      description: "Intelligent automated content filtering and protection",
      color: "from-green-500 to-green-600",
      details: [
        "Anti-spam with configurable limits",
        "Anti-link & anti-invite protection",
        "Anti-swear with custom filters",
        "Strike system & punishments",
        "Whitelist system for trusted users",
        "Real-time threat detection"
      ]
    },
    {
      icon: Mic,
      title: "Voice Management",
      description: "Complete voice channel control and automation",
      color: "from-purple-500 to-purple-600",
      details: [
        "Voice ban/unban system",
        "Voice mute/unmute controls",
        "Voice deafen management",
        "Bulk voice operations",
        "Voice role automation",
        "Private VC creation"
      ]
    },
    {
      icon: Zap,
      title: "Join-to-Create",
      description: "Dynamic voice channel creation system",
      color: "from-yellow-500 to-yellow-600",
      details: [
        "Automatic channel creation",
        "User permission management",
        "Category organization",
        "Auto-cleanup system",
        "Custom channel naming",
        "Advanced configuration"
      ]
    },
    {
      icon: Ticket,
      title: "Ticket System",
      description: "Professional support ticket management",
      color: "from-indigo-500 to-indigo-600",
      details: [
        "Multi-category support",
        "User management system",
        "Transcript generation",
        "Panel customization",
        "Statistics tracking",
        "Log integration"
      ]
    },
    {
      icon: Gift,
      title: "Giveaway System",
      description: "Engaging giveaway management with advanced features",
      color: "from-pink-500 to-pink-600",
      details: [
        "Timed giveaway creation",
        "Multiple winner selection",
        "Pause/resume functionality",
        "Prize customization",
        "Reroll capabilities",
        "Entry requirements"
      ]
    },
    {
      icon: Users,
      title: "Welcomer System",
      description: "Customizable member onboarding and role assignment",
      color: "from-teal-500 to-teal-600",
      details: [
        "Custom welcome messages",
        "Auto-role assignment",
        "Channel configuration",
        "Message variables",
        "Auto-delete options",
        "Member statistics"
      ]
    }
  ];

  const additionalFeatures = [
    { icon: Palette, title: "Custom Roles" },
    { icon: Heart, title: "Logging System" },
    { icon: Gamepad2, title: "Fun Commands" },
    { icon: Zap, title: "Join To Create" },
    { icon: Wrench, title: "Utility Commands" },
    { icon: MessageSquare, title: "Autoresponder" },
    { icon: Crown, title: "Premium Features" }
  ];

  return (
    <section id="features" className="section-padding">
      <div className="container-max">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Everything Your Server Needs</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From advanced security to community engagement, Flame provides comprehensive tools to manage and protect your Discord server.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {/* Feature List */}
          <div className="space-y-3 lg:space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveFeature(index)}
                className={`card cursor-pointer transition-all duration-300 ${
                  activeFeature === index
                    ? "border-primary-500 bg-primary-500/10"
                    : "hover:border-primary-500/50"
                }`}
              >
                <div className="flex items-center space-x-3 lg:space-x-4">
                  <div
                    className={`w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <feature.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base lg:text-lg font-bold text-white mb-1 truncate">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-xs lg:text-sm line-clamp-2">
                      {feature.description}
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 flex-shrink-0 ${
                      activeFeature === index
                        ? "rotate-90 text-primary-400"
                        : "text-gray-400"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feature Details */}
          <div className="lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="card h-fit"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${features[activeFeature].color} rounded-xl flex items-center justify-center mb-6 glow`}
                >
                  {React.createElement(features[activeFeature].icon, {
                    className: "w-8 h-8 text-white"
                  })}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {features[activeFeature].title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {features[activeFeature].description}
                </p>
                <ul className="space-y-3">
                  {features[activeFeature].details.map((detail, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-3 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-primary-400 rounded-full" />
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">And Much More...</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card text-center"
              >
                <feature.icon className="w-8 h-8 text-primary-400 mx-auto mb-2" />
                <h4 className="text-sm font-bold text-white mb-1">
                  {feature.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
