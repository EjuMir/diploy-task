import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ConnectYourStore = () => {

  const platforms = [
    { name: 'Shopify', img: 'https://logos-world.net/wp-content/uploads/2020/11/WIX-Logo-2015.png' },
    { name: 'Wix', img: "https://cdn.freebiesupply.com/logos/large/2x/shopify-logo-png-transparent.png" },
    { name: 'Etsy', img: "https://www.shareicon.net/download/2016/06/20/606670_black.ico" },
    { name: 'Squarespace', img: "https://icons.veryicon.com/png/o/internet--web/internet-simple-icon/api-management.png" },
    { name: 'WooCommerce', img: "https://www.shareicon.net/data/2016/07/10/119878_store_512x512.png" },
    { name: 'BigCommerce', img: "https://seeklogo.com/images/E/etsy-logo-9CE3C0743D-seeklogo.com.png" },
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
    <div className='lg:w-[1200px] mx-auto mb-20'>
      <div>
        <h2 className='text-center text-4xl font-bold mb-3'>Connect Your Stores</h2>
        <p className='text-center text-gray-400'>Printify easily integrates with major e-commerce platforms and marketplaces</p>
      </div>
      <div
        ref={ref}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', position: 'relative' }}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            width: centralRadius,
            height: centralRadius,
            borderRadius: '10%',
            position: 'absolute',
          }}

        >
          <img className='rounded-lg' src='https://play-lh.googleusercontent.com/mNEe0pw6FpUqGUpeXaRC3yIBIOdsp9gqF1ppnu9B3t_LNHIVUZ0IxqHwvErVRLtXiQ' />
        </motion.div>

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
            <img src={platform.img} />
          </motion.div>
        ))}
      </div>

      <div className='flex mx-auto justify-center'>
        <div className='lg:w-3/5 bg-green-200 h-32 rounded-md'>
             <h2 className='text-green-800 ml-4 font-bold lg:text-2xl lg:w-96 mx-auto mt-6'>Are you a large business looking for custom solutions?</h2>
        </div>
        <div className='lg:w-1/5 bg-green-300 h-32'>
               
        </div>
        <div className='lg:w-1/5 bg-green-400 h-32 rounded-md '>
                <a className='btn ml-7 mt-10 lg:ml-9 lg:mt-10'>Talk to sales</a>
        </div>
      </div>


    </div>
  );
};

export default ConnectYourStore;
