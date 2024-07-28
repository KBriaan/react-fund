import { motion } from "framer-motion";
import CountUp from "react-countup";
const OverviewCounter = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="container h-12 md:h-32 p-3"
    >
      <div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            
            <CountUp
              enableScrollSpy={true}
              scrollSpyOnce={true}
              start={0}
              end={234}
              suffix="+"
              duration={2.75}
            />
          </p>
          <p className="sm:text-md text-xs md:text-lg">Fundraisers</p>
        </div>
      </div>
    </motion.section>
  );
};

export default OverviewCounter;
