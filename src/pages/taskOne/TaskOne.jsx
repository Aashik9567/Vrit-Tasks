import  { useState } from "react";
import { motion } from "framer-motion";

const TaskOne = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="relative h-[341px] w-[630px] flex justify-center items-center overflow-visible">
        <div 
          className="flex ml-[144px] mt-[144px] mb-[96px] mr-[87px] z-50 flex-col items-center justify-center text-center gap-[20px] max-w-[399px] max-h-[131px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h2
            className="text-[#414141] text-nowrap"
            style={{
              fontSize: "24px",
              fontWeight: "400",
              lineHeight: "100%",
            }}
          >
            Hear How They Level Up Their Game!
          </h2>

          <h1
            style={{
              fontSize: "32px",
              fontWeight: "700",
              lineHeight: "120%",
              color: "#1F2937",
            }}
          >
            <span className="text-[#2B2B2B]">Skill </span>
            <span
              style={{
                color: "#1DA077",
              }}
            >
              Masters
            </span>
            <span className="text-[#2B2B2B]"> Unite! 🤝</span>
          </h1>

          <div
            className="cursor-pointer"
            style={{
              fontFamily: "Outfit, sans-serif",
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
            }}
          >
            View all Testimonials →
          </div>
        </div>
      
        <motion.div
          className="absolute"
          style={{
            width: "96px",
            height: "97px",
            top: "6px",
            left: "106px",
            opacity: 1,
          }}
          animate={{
            top: isHovered ? "-60px" : "6px",
            left: isHovered ? "16px" : "106px",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {isHovered && (
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatType: "loop",
              }}
            >
              <img
                src="/src/assets/task1/image1.png"
                alt="Profile 1"
                style={{
                  width: "96px",
                  height: "97px",
                  borderRadius: "32px",
                }}
              />
            </motion.div>
          )}
          
          {!isHovered && (
            <img
              src="/src/assets/task1/image1.png"
              alt="Profile 1"
              style={{
                width: "96px",
                height: "97px",
                borderRadius: "32px",
              }}
            />
          )}
        </motion.div>

        <motion.div
          className="absolute"
          style={{
            top: "1px",
            left: "227px",
            opacity: 1,
          }}
          animate={{
            top: isHovered ? "-65px" : "1px",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {isHovered && (
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatType: "loop",
                delay: 0.2,
              }}
            >
              <img
                src="/src/assets/task1/image2.png"
                alt="Profile 2"
                className="taskOneAvatar"
              />
            </motion.div>
          )}
          
          {!isHovered && (
            <img
              src="/src/assets/task1/image2.png"
              alt="Profile 2"
              className="taskOneAvatar"
            />
          )}
        </motion.div>

        <motion.div
          className="absolute"
          style={{
            top: "6px",
            left: "359px",
            opacity: 1,
          }}
          animate={{
            top: isHovered ? "-60px" : "6px",
            left: isHovered ? "449px" : "359px",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {isHovered && (
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatType: "loop",
                delay: 0.3,
              }}
            >
              <img
                src="/src/assets/task1/image3.png"
                alt="Star Icon"
                className="taskOneAvatar"
              />
            </motion.div>
          )}
          
          {!isHovered && (
            <img
              src="/src/assets/task1/image3.png"
              alt="Star Icon"
              className="taskOneAvatar"
            />
          )}
        </motion.div>

        <motion.div
          className="absolute"
          style={{
            top: "99px",
            left: "534px",
            opacity: 1,
          }}
          animate={{
            top: isHovered ? "70px" : "99px",
            left: isHovered ? "654px" : "534px",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {isHovered && (
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatType: "loop",
                delay: 0.1,
              }}
            >
              <img
                src="/src/assets/task1/image4.png"
                alt="Profile 3"
                className="taskOneAvatar"
              />
            </motion.div>
          )}
          
          {!isHovered && (
            <img
              src="/src/assets/task1/image4.png"
              alt="Profile 3"
              className="taskOneAvatar"
            />
          )}
        </motion.div>

        <motion.div
          className="absolute"
          style={{
            top: "213px",
            left: "495px",
            opacity: 1,
          }}
          animate={{
            top: isHovered ? "283px" : "213px",
            left: isHovered ? "585px" : "495px",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {isHovered && (
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatType: "loop",
                delay: 0.25,
              }}
            >
              <img
                src="/src/assets/task1/image5.png"
                alt="Like Icon"
                className="taskOneAvatar"
              />
            </motion.div>
          )}
          
          {!isHovered && (
            <img
              src="/src/assets/task1/image5.png"
              alt="Like Icon"
              className="taskOneAvatar"
            />
          )}
        </motion.div>

        <motion.div
          className="absolute"
          style={{
            top: "239px",
            left: "375px",
            opacity: 1,
          }}
          animate={{
            top: isHovered ? "319px" : "239px",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {isHovered && (
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatType: "loop",
                delay: 0.35,
              }}
            >
              <img
                src="/src/assets/task1/image6.png"
                alt="Profile 4"
                className="w-[97px] h-[98px] rounded-[32px]"
              />
            </motion.div>
          )}
          
          {!isHovered && (
            <img
              src="/src/assets/task1/image6.png"
              alt="Profile 4"
              className="w-[97px] h-[98px] rounded-[32px]"
            />
          )}
        </motion.div>

        <motion.div
          className="absolute"
          style={{
            top: "239px",
            left: "257px",
            opacity: 1,
          }}
          animate={{
            top: isHovered ? "319px" : "239px",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {isHovered && (
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatType: "loop",
                delay: 0.2,
              }}
            >
              <img
                src="/src/assets/task1/image7.png"
                alt="Chat Icon"
                className="taskOneAvatar"
              />
            </motion.div>
          )}
          
          {!isHovered && (
            <img
              src="/src/assets/task1/image7.png"
              alt="Chat Icon"
              className="taskOneAvatar"
            />
          )}
        </motion.div>

        <motion.div
          className="absolute"
          style={{
            top: "244px",
            left: "128px",
            opacity: 1,
          }}
          animate={{
            top: isHovered ? "314px" : "244px",
            left: isHovered ? "38px" : "128px",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {isHovered && (
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatType: "loop",
                delay: 0.3,
              }}
            >
              <img
                src="/src/assets/task1/image8.png"
                alt="Trophy Icon"
                className="taskOneAvatar"
              />
            </motion.div>
          )}
          
          {!isHovered && (
            <img
              src="/src/assets/task1/image8.png"
              alt="Trophy Icon"
              className="taskOneAvatar"
            />
          )}
        </motion.div>

        <motion.div
          className="absolute"
          style={{
            top: "213px",
            left: "32px",
            opacity: 1,
          }}
          animate={{
            top: isHovered ? "283px" : "213px",
            left: isHovered ? "-48px" : "32px",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {isHovered && (
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatType: "loop",
                delay: 0.25,
              }}
            >
              <img
                src="/src/assets/task1/image9.png"
                alt="Profile 5"
                className="taskOneAvatar"
              />
            </motion.div>
          )}
          
          {!isHovered && (
            <img
              src="/src/assets/task1/image9.png"
              alt="Profile 5"
              className="taskOneAvatar"
            />
          )}
        </motion.div>

        <motion.div
          className="absolute"
          style={{
            top: "130px",
            left: "0px",
            opacity: 1,
          }}
          animate={{
            top: isHovered ? "100px" : "130px",
            left: isHovered ? "-80px" : "0px",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {isHovered && (
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatType: "loop",
                delay: 0.15,
              }}
            >
              <img
                src="/src/assets/task1/image10.png"
                alt="Heart Icon"
                className="taskOneAvatar"
              />
            </motion.div>
          )}
          
          {!isHovered && (
            <img
              src="/src/assets/task1/image10.png"
              alt="Heart Icon"
              className="taskOneAvatar"
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default TaskOne;