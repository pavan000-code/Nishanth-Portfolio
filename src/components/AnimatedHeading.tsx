import { motion } from 'framer-motion';
import { CSSProperties } from 'react';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  style?: CSSProperties;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ 
  text, 
  className = '', 
  tag: Tag = 'h2',
  style
}) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <Tag className={className} style={{ ...style, display: 'inline-block' }}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ display: 'inline-block' }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={child}
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
};

export default AnimatedHeading; 