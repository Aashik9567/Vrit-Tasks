import  { useState } from 'react';
import { motion } from 'framer-motion';
import StatCard from '../../components/ui/Card/StatCard';
import Counter from '../../components/ui/Card/Counter';
import TechIcon from '../../components/ui/Card/TechIcon';

const TaskThree = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const techIcons = [
    { src: '/src/assets/task3/img1.png', alt: 'React', delay: 0.1 },
    { src: '/src/assets/task3/img2.png', alt: 'Figma', delay: 0.2 },
    { src: '/src/assets/task3/img3.png', alt: 'Vue.js', delay: 0.3 },
    { src: '/src/assets/task3/img4.png', alt: 'Flutter', delay: 0.4 }
  ];

  return (
    <div 
      className="relative bg-white"
      style={{
        width: '1440px',
        height: '817px',
        margin: '0 auto',
        padding: '80px 120px'
      }}
    >
      {/* Header Section */}
      <div className="mb-12">
        <h3 
          className="text-gray-600 mb-4"
          style={{
            fontSize: '16px',
            fontWeight: '400',
            fontFamily: 'Nohemi, sans-serif'
          }}
        >
          Explore our classes and master trending skills!
        </h3>
        
        <h1 
          style={{
            fontSize: '48px',
            fontWeight: '700',
            fontFamily: 'Nohemi, sans-serif',
            lineHeight: '1.2'
          }}
        >
          <span style={{ color: '#1F2937' }}>Dive Into </span>
          <span style={{ color: '#10B981' }}>What's Hot Right Now!</span>
          <span> 🔥</span>
        </h1>
      </div>

      {/* Cards Grid */}
      <div 
        className="grid grid-cols-3 gap-6"
        style={{
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: '24px'
        }}
      >
        {/* Card 1 - All Courses (Main Card) */}
        <StatCard
          backgroundColor="#C33241"
          style={{
            width: '696px',
            height: '456px',
            padding: '40px'
          }}
        >
          {/* View All Courses Button */}
          <div className="flex justify-end mb-8">
            <button 
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full px-6 py-3 font-medium transition-all duration-300"
              style={{
                fontSize: '16px',
                fontWeight: '600',
                fontFamily: 'Nohemi, sans-serif'
              }}
            >
              View all Courses →
            </button>
          </div>

          {/* Tech Icons */}
          <div className="flex justify-center gap-6 mb-12">
            {techIcons.map((icon, index) => (
              <TechIcon
                key={index}
                src={icon.src}
                alt={icon.alt}
                size="80px"
                delay={icon.delay}
              />
            ))}
          </div>

          {/* Main Counter */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Counter
                end={23}
                duration={2}
                fontSize="180px"
                color="#FFFFFF"
              />
              <motion.span
                className="text-white text-6xl font-black"
                style={{
                  fontSize: '60px',
                  fontWeight: '800',
                  fontFamily: 'Nohemi, sans-serif'
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
              >
                +
              </motion.span>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
            >
              <h3 
                className="text-white font-bold mb-2"
                style={{
                  fontSize: '32px',
                  fontWeight: '700',
                  fontFamily: 'Nohemi, sans-serif'
                }}
              >
                All Courses
              </h3>
              <p 
                className="text-white text-opacity-90"
                style={{
                  fontSize: '16px',
                  fontWeight: '400',
                  fontFamily: 'Nohemi, sans-serif'
                }}
              >
                courses you're powering through right now.
              </p>
            </motion.div>
          </div>
        </StatCard>

        {/* Card 2 - Upcoming Courses */}
        <StatCard
          backgroundColor="#F5F5F5"
          isClickable={true}
          onClick={() => handleCardClick(2)}
          isExpanded={expandedCard === 2}
          style={{
            width: '320px',
            height: '456px',
            padding: '40px'
          }}
        >
          <div className="h-full flex flex-col justify-center items-center text-center">
            {/* Rotated Text */}
            <motion.div
              className="absolute top-8 right-8"
              style={{
                transform: 'rotate(90deg)',
                transformOrigin: 'center'
              }}
            >
              <span 
                className="text-sm font-medium"
                style={{
                  color: '#C33241',
                  fontSize: '12px',
                  fontWeight: '500',
                  fontFamily: 'Nohemi, sans-serif'
                }}
              >
                exciting new courses waiting to boost your skills.
              </span>
            </motion.div>

            {/* Main Content */}
            <div>
              <motion.div
                className="flex items-center justify-center gap-2 mb-4"
                animate={expandedCard === 2 ? { scale: 1.1 } : { scale: 1 }}
              >
                <Counter
                  end={5}
                  duration={1.5}
                  fontSize="120px"
                  color="#C33241"
                />
                <span 
                  className="text-6xl font-black"
                  style={{
                    fontSize: '60px',
                    fontWeight: '800',
                    color: '#C33241',
                    fontFamily: 'Nohemi, sans-serif'
                  }}
                >
                  +
                </span>
              </motion.div>

              <motion.h3
                className="font-bold mb-2"
                style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#C33241',
                  fontFamily: 'Nohemi, sans-serif'
                }}
                animate={expandedCard === 2 ? { y: [0, -5, 0] } : {}}
                transition={{ duration: 0.5 }}
              >
                Upcoming
              </motion.h3>
              <h3
                className="font-bold"
                style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#C33241',
                  fontFamily: 'Nohemi, sans-serif'
                }}
              >
                Courses
              </h3>
            </div>

            {/* Expanded Content */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={expandedCard === 2 ? { 
                opacity: 1, 
                height: 'auto',
                transition: { duration: 0.3 }
              } : { 
                opacity: 0, 
                height: 0 
              }}
              className="mt-4 text-sm"
            >
              <p style={{ color: '#666', fontFamily: 'Nohemi, sans-serif' }}>
                New courses launching soon!
              </p>
            </motion.div>
          </div>
        </StatCard>

        {/* Card 3 - Ongoing Courses */}
        <StatCard
          backgroundColor="#F5F5F5"
          isClickable={true}
          onClick={() => handleCardClick(3)}
          isExpanded={expandedCard === 3}
          style={{
            width: '320px',
            height: '456px',
            padding: '40px'
          }}
        >
          <div className="h-full flex flex-col justify-center items-center text-center">
            {/* Rotated Text */}
            <motion.div
              className="absolute top-8 right-8"
              style={{
                transform: 'rotate(90deg)',
                transformOrigin: 'center'
              }}
            >
              <span 
                className="text-sm font-medium"
                style={{
                  color: '#C33241',
                  fontSize: '12px',
                  fontWeight: '500',
                  fontFamily: 'Nohemi, sans-serif'
                }}
              >
                currently happening—don't miss out on the action!
              </span>
            </motion.div>

            {/* Main Content */}
            <div>
              <motion.div
                className="flex items-center justify-center gap-2 mb-4"
                animate={expandedCard === 3 ? { scale: 1.1 } : { scale: 1 }}
              >
                <Counter
                  end={10}
                  duration={1.5}
                  fontSize="120px"
                  color="#C33241"
                />
                <span 
                  className="text-6xl font-black"
                  style={{
                    fontSize: '60px',
                    fontWeight: '800',
                    color: '#C33241',
                    fontFamily: 'Nohemi, sans-serif'
                  }}
                >
                  +
                </span>
              </motion.div>

              <motion.h3
                className="font-bold mb-2"
                style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#C33241',
                  fontFamily: 'Nohemi, sans-serif'
                }}
                animate={expandedCard === 3 ? { y: [0, -5, 0] } : {}}
                transition={{ duration: 0.5 }}
              >
                Ongoing
              </motion.h3>
              <h3
                className="font-bold"
                style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#C33241',
                  fontFamily: 'Nohemi, sans-serif'
                }}
              >
                Courses
              </h3>
            </div>

            {/* Expanded Content */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={expandedCard === 3 ? { 
                opacity: 1, 
                height: 'auto',
                transition: { duration: 0.3 }
              } : { 
                opacity: 0, 
                height: 0 
              }}
              className="mt-4 text-sm"
            >
              <p style={{ color: '#666', fontFamily: 'Nohemi, sans-serif' }}>
                Active courses in progress!
              </p>
            </motion.div>
          </div>
        </StatCard>
      </div>
    </div>
  );
};

export default TaskThree;