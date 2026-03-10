import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Shield, 
  Settings, 
  Bot, 
  Mic, 
  Zap, 
  Gift, 
  Gamepad2, 
  Wrench,
  Search,
  Copy,
  Check,
  ExternalLink,
  Filter,
  MessageCircle
} from 'lucide-react';

const CommandsSection = () => {
  const [activeCategory, setActiveCategory] = useState('antinuke');
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedCommand, setCopiedCommand] = useState('');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const categories = [
    {
      id: 'antinuke',
      name: 'Anti-Nuke',
      icon: Shield,
      color: 'from-red-500 to-red-600',
      commands: [
        {
          name: 'antinuke',
          description: 'Enable/disable anti-nuke protection',
          usage: '&antinuke enable/disable'
        },
        {
          name: 'whitelist',
          description: 'Add users to whitelist',
          usage: '&whitelist add @user'
        },
        {
          name: 'unwhitelist',
          description: 'Remove users from whitelist',
          usage: '&unwhitelist @user/id'
        },
        {
          name: 'extraowner',
          description: 'Manage extra owners',
          usage: '&extraowner set @user'
        },
        {
          name: 'mainrole',
          description: 'Configure main roles',
          usage: '&mainrole add @role'
        },
        {
          name: 'nightmode',
          description: 'Enable night mode protection',
          usage: '&nightmode on'
        }
      ]
    },
    {
      id: 'moderation',
      name: 'Moderation',
      icon: Settings,
      color: 'from-blue-500 to-blue-600',
      commands: [
        {
          name: 'ban',
          description: 'Ban a user from the server',
          usage: '&ban @user [reason]'
        },
        {
          name: 'unban',
          description: 'Unban a user from the server',
          usage: '&unban [userid] [reason]'
        },
        {
          name: 'kick',
          description: 'Kick a user from the server',
          usage: '&kick @user [reason]'
        },
        {
          name: 'mute',
          description: 'Mute a user',
          usage: '&mute @user [time] [reason]'
        },
        {
          name: 'unmute',
          description: 'Unmute a user',
          usage: '&unmute @user [reason]'
        },
        {
          name: 'warn',
          description: 'Warn a user',
          usage: '&warn @user [reason]'
        },
        {
          name: 'purge',
          description: 'Delete multiple messages',
          usage: '&purge [amount]'
        },
        {
          name: 'lock',
          description: 'Lock a channel',
          usage: '&lock [#channel]'
        },
        {
          name: 'unlock',
          description: 'Unlock a channel',
          usage: '&unlock [#channel]'
        },
        {
          name: 'nick',
          description: 'Change user nickname',
          usage: '&nick @user [nickname]'
        }
      ]
    },
    {
      id: 'automod',
      name: 'Auto-Mod',
      icon: Bot,
      color: 'from-green-500 to-green-600',
      commands: [
        {
          name: 'automod',
          description: 'Configure automod settings',
          usage: '&automod setup'
        },
        {
          name: 'antispam',
          description: 'Configure anti-spam protection',
          usage: '&antispam enable'
        },
        {
          name: 'antilink',
          description: 'Block links in messages',
          usage: '&antilink enable'
        },
        {
          name: 'antiswear',
          description: 'Filter inappropriate language',
          usage: '&antiswear enable'
        },
        {
          name: 'antiinvite',
          description: 'Block Discord invites',
          usage: '&antiinvite enable'
        }
      ]
    },
    {
      id: 'voice',
      name: 'Voice',
      icon: Mic,
      color: 'from-purple-500 to-purple-600',
      commands: [
        {
          name: 'vcban',
          description: 'Ban user from voice channels',
          usage: '&vcban @user'
        },
        {
          name: 'vcunban',
          description: 'Unban user from voice channels',
          usage: '&vcunban @user'
        },
        {
          name: 'vcmute',
          description: 'Mute user in voice',
          usage: '&vcmute @user'
        },
        {
          name: 'vcunmute',
          description: 'Unmute user in voice',
          usage: '&vcunmute @user'
        },
        {
          name: 'vcdeafen',
          description: 'Deafen user in voice',
          usage: '&vcdeafen @user'
        },
        {
          name: 'vcundeafen',
          description: 'Undeafen user in voice',
          usage: '&vcundeafen @user'
        },
        {
          name: 'vckick',
          description: 'Kick user from voice',
          usage: '&vckick @user'
        },
        {
          name: 'vcmove',
          description: 'Move user to another VC',
          usage: '&vcmove @user #channel'
        },
        {
          name: 'vclist',
          description: 'List users in voice channel',
          usage: '&vclist'
        },
        {
          name: 'vcrole',
          description: 'Configure voice roles',
          usage: '&vcrole setup'
        }
      ]
    },
    {
      id: 'jtc',
      name: 'Join To Create',
      icon: Zap,
      color: 'from-indigo-500 to-indigo-600',
      commands: [
        {
          name: 'jtc setup',
          description: 'Setup join to create voice channels',
          usage: '&jtc setup'
        },
        {
          name: 'jtc view',
          description: 'View join to create configuration',
          usage: '&jtc view'
        },
        {
          name: 'jtc reset',
          description: 'Reset join to create settings',
          usage: '&jtc reset'
        }
      ]
    },
    {
      id: 'giveaway',
      name: 'Giveaways',
      icon: Gift,
      color: 'from-pink-500 to-pink-600',
      commands: [
        {
          name: 'gstart',
          description: 'Start a giveaway',
          usage: '&gstart 1d 1w Prize Name'
        },
        {
          name: 'gend',
          description: 'End giveaway early',
          usage: '&gend [messageId]'
        },
        {
          name: 'greroll',
          description: 'Reroll giveaway winners',
          usage: '&greroll [messageId]'
        },
        {
          name: 'glist',
          description: 'List all active giveaways',
          usage: '&glist'
        }
      ]
    },
    {
      id: 'fun',
      name: 'Fun',
      icon: Gamepad2,
      color: 'from-yellow-500 to-yellow-600',
      commands: [
        {
          name: 'cute',
          description: 'Get cute images',
          usage: '&cute'
        },
        {
          name: 'dare',
          description: 'Get a dare challenge',
          usage: '&dare'
        },
        {
          name: 'imagine',
          description: 'Generate AI images',
          usage: '&imagine [prompt]'
        },
        {
          name: 'intelligence',
          description: 'Check intelligence score',
          usage: '&intelligence [@user]'
        },
        {
          name: 'reaction',
          description: 'Get reaction images',
          usage: '&reaction [type]'
        },
        {
          name: 'ship',
          description: 'Ship two users together',
          usage: '&ship @user1 @user2'
        },
        {
          name: 'truth',
          description: 'Get a truth question',
          usage: '&truth'
        },
        {
          name: 'wouldyourather',
          description: 'Would you rather questions',
          usage: '&wouldyourather'
        }
      ]
    },
    {
      id: 'utility',
      name: 'Utility',
      icon: Wrench,
      color: 'from-teal-500 to-teal-600',
      commands: [
        {
          name: 'userinfo',
          description: 'Get user information',
          usage: '&userinfo [@user]'
        },
        {
          name: 'serverinfo',
          description: 'Get server information',
          usage: '&serverinfo'
        },
        {
          name: 'avatar',
          description: 'Get user avatar',
          usage: '&avatar [@user]'
        },
        {
          name: 'banner',
          description: 'Get user banner',
          usage: '&banner [@user]'
        },
        {
          name: 'ping',
          description: 'Check bot latency',
          usage: '&ping'
        },
        {
          name: 'uptime',
          description: 'Check bot uptime',
          usage: '&uptime'
        },
        {
          name: 'stats',
          description: 'Bot statistics',
          usage: '&stats'
        },
        {
          name: 'help',
          description: 'Get help menu',
          usage: '&help [command]'
        }
      ]
    }
  ];

  const currentCommands = searchTerm
    ? categories
        .flatMap(cat => cat.commands)
        .filter(cmd => 
          cmd.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cmd.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
    : categories
        .find(cat => cat.id === activeCategory)?.commands || [];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(text);
    setTimeout(() => setCopiedCommand(''), 2000);
  };

  return (
    <section id="commands" className="section-padding bg-dark-900/30">
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
            <span className="gradient-text">Powerful Commands</span>
            <br />
            For Every Need
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive command library with powerful features for every aspect of server management.
          </p>
        </motion.div>

        {/* Commands Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="card lg:sticky lg:top-24"
            >
              <h3 className="text-base lg:text-lg font-bold text-white mb-3 lg:mb-4 flex items-center space-x-2">
                <Filter className="w-4 h-4 lg:w-5 lg:h-5 text-primary-400" />
                <span>Categories</span>
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 lg:space-y-2 lg:gap-0">
                {categories.map(category => (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center space-x-2 lg:space-x-3 p-2 lg:p-3 rounded-lg transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-primary-500/20 border border-primary-500/50 text-white"
                        : "bg-dark-800/50 hover:bg-dark-700/50 text-gray-300 hover:text-white"
                    }`}
                  >
                    <div
                      className={`w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <category.icon className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                    </div>
                    <span className="font-medium text-sm lg:text-base truncate">
                      {category.name}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Commands List */}
          <div className="lg:col-span-2">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card mb-6"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search commands..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-300"
                />
              </div>
            </motion.div>

            {/* Commands List */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {currentCommands.map((command, index) => (
                  <motion.div
                    key={command.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    className="card group"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                          <code className="text-primary-400 font-mono font-bold text-base lg:text-lg break-all">
                            {command.name}
                          </code>
                          <span className="text-xs bg-dark-700 text-gray-300 px-2 py-1 rounded w-fit">
                            Command
                          </span>
                        </div>
                        <p className="text-gray-300 mb-3 text-sm lg:text-base">
                          {command.description}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                          <span className="text-xs lg:text-sm text-gray-400 flex-shrink-0">
                            Usage:
                          </span>
                          <code className="text-xs lg:text-sm bg-dark-800 text-primary-300 px-2 py-1 rounded font-mono break-all">
                            {command.usage}
                          </code>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => copyToClipboard(command.usage)}
                        className="p-2 bg-dark-800 hover:bg-primary-500/20 rounded-lg transition-colors duration-300 group-hover:opacity-100 opacity-60 lg:opacity-0 flex-shrink-0"
                      >
                        {copiedCommand === command.usage ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-400" />
                        )}
                      </motion.button>
                    </div>
                  </motion.div>
                ))}

                {currentCommands.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400">
                      No commands found matching your search.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Note about complete command list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="card max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <MessageCircle className="w-6 h-6 text-primary-400" />
              <h3 className="text-xl font-bold text-white">Complete Command List</h3>
            </div>
            <p className="text-gray-300 mb-4">
              The commands shown above are just the main and most important features. Our bot includes many more commands and advanced features that you can discover by using the bot directly.
            </p>
            <p className="text-sm text-gray-400">
              💡 <strong>Tip:</strong> Use <code className="text-primary-400 bg-dark-800 px-2 py-1 rounded font-mono">&help</code> command in your Discord server to see the complete list of available commands and features.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
      </div>
    </section>
  );
};

export default CommandsSection;
