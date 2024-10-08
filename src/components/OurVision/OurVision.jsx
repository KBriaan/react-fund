import { motion } from "framer-motion";
const fadeAnimation = (delay) => {
  return {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const OurVision = () => {
  return (
    <div className="container my-16 bg-white dark:bg-gray-900 dark:text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <motion.div
          variants={fadeAnimation(0.2)}
          initial="initial"
          whileInView="animate"
          className="mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8 border-green-800 dark:bg-slate-800"
        >
          <h1 className="text-xl font-semibold">Our Vision</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, sed quae architecto ullam dolorem ad libero placeat saepe consectetur, ducimus porro sequi officia molestias qui, fuga inventore! Unde quia iste delectus! Suscipit, nemo. Laudantium blanditiis, numquam accusantium ut officiis dicta?
          </p>
          <a
            href="#"
            className="inline-block hover:text-primary border-b-2 hover:border-primary"
          >
            Learn More
          </a>
        </motion.div>

        <motion.div  variants={fadeAnimation(0.4)}
          initial="initial"
          whileInView="animate" className="mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8 border-yellow-500 dark:bg-slate-800">
          <h1 className="text-xl font-semibold">Our Mision</h1>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores labore obcaecati animi fuga aliquid voluptatum eaque nihil beatae, dolor ab, cumque sint aut, voluptates omnis hic ducimus repudiandae iure sit magni esse ad recusandae a. Enim tenetur possimus dolor fuga!
          </p>
          <a
            href="#"
            className="inline-block hover:text-primary border-b-2 hover:border-primary"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default OurVision;
