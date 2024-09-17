import React, { useRef } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useSectionInView } from "../assets/lib/hooks";
import { useTheme } from "../context/theme-context";
import { useLanguage } from "../context/language-context";
import RadialGradient from "./RadialGradient";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./Button";

const TechStack: React.FC = () => {
  const { ref } = useSectionInView("Rewards");
  const { theme } = useTheme();
  const { language } = useLanguage();
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <React.Fragment>
      <section
        className="relative tech-stack max-lg:p-16 "
        id="skills"
        ref={ref}
      >
        <RadialGradient
          scale="scale-y-[3]"
          opacity={theme === "light" ? "opacity-30" : "opacity-30"}
          position="top-[55rem]"
        />
        <div className="title-container flex flex-col justify-center items-center p-32 w-1/2   gap-6 min-[1921px]:px-[55rem] max-lg:p-0  max-lg:w-full max-lg:items-start max-lg:py-16 ">
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
            }}>
            <p className="font-black mb-6">
              <span className="text-[--orange]"></span>How does it work?
              <span className="text-[--orange]"></span>
            </p>
            <h2>
              {language === "DE"
                ? "Meine Techstack und Skills"
                : "Getting started is easy!"}
            </h2>
          </motion.div>
        </div>
        <div className="relative pl-[10vw] justify-center max-lg:flex-col text-lg">
         
         
          <div className="w-2/3 max-lg:w-full mb-24">  
                <h2 className="">Step One:</h2>
                <br></br>

                 <p className="">Press the button to sign-up with your email and phone number:</p>
              <br></br>
                <Button
                        label="Join NWUSA Rewards!"
                        link={'https://platform.mobile-text-alerts.com/subscribe/NWUSA-Rewards'}
                        iconSVG={'mask.svg'}
                        buttoncolor={'bg-black text-white '}
                        iconcolor={'px-4 py-2 rounded'}
                        onClick={console.log}
                      />  
          </div>

                <br></br>
                <br></br>

                <div className="w-2/3 max-lg:w-full mb-24">  
                <h2 className="text-right">Step Two:</h2>
                <br></br>

                 <p className="text-right">You will begin to receive email and text alerts for promotions, discounts, giveaways and specials taking place on needweedusa.com</p>
              <br></br>
          </div>   

          <br></br>
                <br></br>

                <div className="w-2/3 max-lg:w-full mb-24">  
                <h2 className="">Step Three (Optional):</h2>
                <br></br>

                 <p className="">If you want the opportunity for EVEN MORE Prizes and even ways to earn CASH, then sign up below to join our street team also:</p>
              <br></br>
                <Button
                        label="Join our Street Team"
                        link={'https://platform.mobile-text-alerts.com/subscribe/NWUSA-Rewards'}
                        iconSVG={'mask.svg'}
                        buttoncolor={'bg-black text-white '}
                        iconcolor={'px-4 py-2 rounded'}
                        onClick={console.log}
                      />  
          </div>        
        
        </div>
      </section>
      <ReactTooltip
        place="top"
        id="my-tooltip"
        style={{

          fontSize: "1.5rem",
          zIndex: 10,
          backgroundColor: "var(--orange)",

        }}
      />
    </React.Fragment>
  );
};

export default TechStack;
