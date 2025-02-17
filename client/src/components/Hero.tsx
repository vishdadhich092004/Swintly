import { motion } from "framer-motion";
import { Search, Tag, Banknote } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Animated background circles */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-10" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-10" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="text-left"
          >
            <motion.h1
              variants={fadeIn}
              className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl"
            >
              <span className="block text-secondary">Save More with</span>
              <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Shared Coupons
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Join our community of smart shoppers where you can discover,
              share, and trade discount codes. Start saving on your favorite
              brands today.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Saving
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full border border-border text-foreground font-medium hover:bg-accent/5 transition-all duration-300"
              >
                Share Coupons
              </motion.button>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: <Search className="h-6 w-6 text-primary" />,
                  title: "Find Deals",
                  description: "Search thousands of verified coupon codes",
                  color: "primary",
                },
                {
                  icon: <Tag className="h-6 w-6 text-secondary" />,
                  title: "Save Money",
                  description: "Get discounts on your favorite brands",
                  color: "secondary",
                },
                {
                  icon: <Banknote className="h-6 w-6 text-accent-foreground" />,
                  title: "Earn Cash",
                  description: "Sell your unused coupon codes",
                  color: "accent",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-6 rounded-lg bg-card/5 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center bg-${feature.color}/10`}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="mt-4 text-lg font-medium text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1651439372230-6a8f1c2aa597?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Coupon Savings Platform"
                className="rounded-lg shadow-2xl object-cover w-full h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent rounded-lg" />
            </motion.div>

            {/* Floating elements */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 p-6 bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg shadow-xl max-w-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Tag className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-card-foreground">
                    Active Users
                  </p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    50,000+
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
