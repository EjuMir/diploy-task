import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ConnectYourStore = () => {
  const platforms = [
    { name: 'Shopify', img : 'https://logos-world.net/wp-content/uploads/2020/11/WIX-Logo-2015.png'},
    { name: 'Wix', img : "https://logos-world.net/wp-content/uploads/2020/11/WIX-Logo-2015.png" },
    { name: 'Etsy', img : "https://logos-world.net/wp-content/uploads/2020/11/WIX-Logo-2015.png" },
    { name: 'Squarespace', img : "https://logos-world.net/wp-content/uploads/2020/11/WIX-Logo-2015.png" },
    { name: 'WooCommerce', img : "https://logos-world.net/wp-content/uploads/2020/11/WIX-Logo-2015.png" },
    { name: 'BigCommerce', img : "https://logos-world.net/wp-content/uploads/2020/11/WIX-Logo-2015.png" },
  ];

  const radius = 200;
  const centralRadius = 100; 
  const angleIncrement = (2 * Math.PI) / platforms.length; 

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => {
      const angle = i * angleIncrement;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      return {
        opacity: 1,
        scale: 1,
        x,
        y,
        transition: {
          delay: i * 0.2,
          duration: 0.6,
          type: 'spring',
        },
      };
    },
  };

  return (
    <div 
      ref={ref}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', position: 'relative' }}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundColor: '#00C853',
          width: centralRadius,
          height: centralRadius,
          borderRadius: '50%',
          position: 'absolute',
        }}
      />

      {platforms.map((platform, i) => (
        <motion.div
          key={platform.name}
          custom={i}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants}
          style={{
            width: 100,
            height: 100,
            borderRadius: '10%',
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#000000',
          }}
        >
         <img src={platform.img}/>
        </motion.div>
      ))}
    </div>
  );
};

export default ConnectYourStore;
