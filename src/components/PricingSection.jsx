import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Shield, 
  Crown, 
  Star, 
  Check, 
  ArrowRight,
  AlertTriangle
} from 'lucide-react';

const PricingSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "Forever",
      description: "Perfect for small communities getting started",
      icon: Shield,
      color: "from-gray-500 to-gray-600",
      features: [
        "Basic Anti-Nuke Protection",
        "Standard Moderation Commands",
        "Basic Auto-Moderation",
        "Voice Management",
        "Ticket System",
        "Fun Commands",
        "Community Support",
        "Basic Logging"
      ],
      limitations: [
        "Limited to 30 members",
        "Basic features only",
        "Community support"
      ],
      cta: "Get Started",
      href: "https://discord.com/oauth2/authorize?client_id=1259218811131793479&permissions=414530792793&integration_type=0&scope=bot+applications.commands",
      popular: false
    },
    {
      name: "Premium",
      price: "$2.99",
      period: "per month",
      description: "Advanced features for growing communities",
      icon: Crown,
      color: "from-primary-500 to-primary-600",
      features: [
        "Advanced Anti-Nuke Protection",
        "All Moderation Features",
        "Advanced Auto-Moderation",
        "Premium Voice Features",
        "Advanced Ticket System",
        "Giveaway System",
        "Join To Create Voice Master",
        "Advanced Logging",
        "Welcomer System",
        "Auto-Systems",
        "Autoresponder System",
        "Premium Support",
        "Custom Prefix",
        "Priority Updates"
      ],
      limitations: [],
      cta: "Go Premium",
      href: "https://discord.com/invite/w77ymEU82a",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Contact us",
      description: "Tailored solutions for large organizations",
      icon: Star,
      color: "from-yellow-500 to-yellow-600",
      features: [
        "Everything in Premium",
        "Custom Bot Instance",
        "White-label Solution",
        "Custom Features",
        "Dedicated Support",
        "SLA Guarantee",
        "Custom Integrations",
        "Advanced Analytics",
        "Multi-server Management",
        "Custom Branding",
        "Priority Feature Requests",
        "24/7 Phone Support"
      ],
      limitations: [],
      cta: "Contact Developer",
      href: "https://discord.com/invite/w77ymEU82a",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="section-padding">
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
            Choose Your{" "}
            <span className="gradient-text">Protection Level</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From basic security to enterprise-grade protection, we have a plan that fits your community's needs and budget.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`relative card ${
                plan.popular ? "border-primary-500 bg-primary-500/5" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-gradient text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Crown className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mx-auto mb-4 glow`}
                >
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-black gradient-text">{plan.price}</span>
                  {plan.period !== "Contact us" && (
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-300 text-sm">{plan.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.2 + featureIndex * 0.05 }}
                    className="flex items-center space-x-3"
                  >
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </motion.div>
                ))}

                {/* Limitations */}
                {plan.limitations.length > 0 && (
                  <div className="pt-4 border-t border-dark-700">
                    <p className="text-xs text-gray-500 mb-2">Limitations:</p>
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <p key={limitationIndex} className="text-xs text-gray-500">
                        • {limitation}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <motion.a
                href={plan.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular ? "btn-primary" : "btn-secondary"
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card text-left">
              <h4 className="text-lg font-bold text-primary-400 mb-2">
                How do I upgrade to Premium?
              </h4>
              <p className="text-gray-300 text-sm">
                Join our support server and contact our team for premium activation. We'll guide you through the simple setup process.
              </p>
            </div>
            <div className="card text-left">
              <h4 className="text-lg font-bold text-primary-400 mb-2">
                How long does Premium last?
              </h4>
              <p className="text-gray-300 text-sm">
                Premium subscriptions are monthly and can be managed through our support server. Your premium features remain active throughout your subscription period.
              </p>
            </div>
            <div className="card text-left">
              <h4 className="text-lg font-bold text-primary-400 mb-2">
                What's included in Enterprise?
              </h4>
              <p className="text-gray-300 text-sm">
                Enterprise includes a dedicated bot instance, custom features, white-label solutions, and dedicated support with priority assistance.
              </p>
            </div>
            <div className="card text-left">
              <h4 className="text-lg font-bold text-primary-400 mb-2">
                Is there a free trial?
              </h4>
              <p className="text-gray-300 text-sm">
                Yes! You can test all basic features for free. Premium features can be demonstrated in our support server before you decide to upgrade.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;

