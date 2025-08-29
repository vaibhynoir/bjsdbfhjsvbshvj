import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const DumbbellSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  const features = [
    {
      title: 'Personalized Programs',
      description: 'Tailored training plans designed for your specific goals and body type.',
      position: 'top-left'
    },
    {
      title: 'Nutrition Mastery',
      description: 'Science-based nutrition protocols that fuel your transformation.',
      position: 'top-right'
    },
    {
      title: '24/7 Support',
      description: 'Direct access to coaching support whenever you need it most.',
      position: 'bottom-left'
    },
    {
      title: 'Proven Results',
      description: 'Join hundreds of successful transformations with our system.',
      position: 'bottom-right'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-charcoal relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-6xl font-black mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            CHAMPIONS LIFESTYLE
            <br />
            <span className="text-primary">Training System</span>
          </motion.h2>
        </div>

        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* 3D Dumbbell (CSS-based) */}
          <motion.div
            className="relative w-64 h-32 flex items-center justify-center"
            style={{ rotateY, scale }}
          >
            {/* Dumbbell Handle */}
            <div className="w-32 h-6 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 rounded-full relative z-10 shadow-lg">
              <div className="absolute inset-y-0 left-0 w-1 bg-gray-600 rounded-l-full" />
              <div className="absolute inset-y-0 right-0 w-1 bg-gray-600 rounded-r-full" />
            </div>
            
            {/* Left Weight */}
            <div className="w-20 h-20 bg-gradient-to-br from-charcoal via-gray-700 to-charcoal-light rounded-full absolute left-0 shadow-2xl border-4 border-primary/20">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-transparent to-black/30" />
            </div>
            
            {/* Right Weight */}
            <div className="w-20 h-20 bg-gradient-to-br from-charcoal via-gray-700 to-charcoal-light rounded-full absolute right-0 shadow-2xl border-4 border-primary/20">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-transparent to-black/30" />
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl scale-150 animate-pulse" />
          </motion.div>

          {/* Surrounding Feature Cards */}
          {features.map((feature, index) => {
            const positions = {
              'top-left': 'top-16 left-16',
              'top-right': 'top-16 right-16',
              'bottom-left': 'bottom-16 left-16',
              'bottom-right': 'bottom-16 right-16'
            };

            return (
              <motion.div
                key={feature.title}
                className={`absolute ${positions[feature.position as keyof typeof positions]} max-w-xs`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-charcoal-light/80 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { number: '847+', label: 'Transformations' },
            { number: '98%', label: 'Success Rate' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="p-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-white/60 uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DumbbellSection;