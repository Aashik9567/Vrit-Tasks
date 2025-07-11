import { motion } from "framer-motion";
import { useState } from "react";

const TaskTwo = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardData = [
    {
      title: "Start with Clarity",
      subtitle: "Step into a better learning path.",
      description:
        "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
      bgColor: "#F45B5B",
      image: "/src/assets/task2/img1.png",
      imageStyles: {
        position: "absolute",
        zIndex: 1200,
        minWidth: "257.38px",
        minHeight: "338.59px",
        top: "22px",
        left: "-49px",
        transform: "rotate(0deg)",
      },
    },
    {
      title: "Learn by Doing",
      subtitle: "Practical skills, real projects.",
      description:
        "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
      bgColor: "#5492A0",
      image: "/src/assets/task2/img4.png",
      imageStyles: {
        minWidth: "180.35px",
        minHeight: "367px",
        zIndex: 1200,
        top: "14px",
        left: "380px",
        transform: "rotate(0deg)",
      },
    },
    {
      title: "Get Mentored & Supported",
      subtitle: "You're not learning alone.",
      description:
        "Stuck or need feedback? SkillShikshya's community of mentors and learners has your back with live support, interactive discussions, and expert insights. You're never on your own.",
      bgColor: "#6C64A8",
      image: "/src/assets/task2/img3.png",
      imageStyles: {
        minWidth: "307.04px",
        minHeight: "249.97px",
        top: "106px",
        zIndex: 1200,
        left: "-48.92px",
        transform: "rotate(0deg)",
      },
    },
    {
      title: "Achieve & Showcase",
      subtitle: "Build your portfolio, get job-ready.",
      description:
        "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
      bgColor: "#A88964",
      image: "/src/assets/task2/img2.png",
      imageStyles: {
        minWidth: "280.04px",
        zIndex: 1200,
        minHeight: "310.77px",
        top: "53.56px",
        left: "317.66px",
        transform: "rotate(-6.05deg)",
      },
    },
  ];

const ArrowLeft = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 12H5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 19L5 12L12 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRight = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 5L19 12L12 19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

  return (
    <div className="w-full max-w-screen-xl mx-auto px-8 py-16">
      {/* Header */}
      <div className="mb-12">
        <h3 className="text-[#414141] text-[24px] mb-[24px] ">
          Your SkillShikshya Journey
        </h3>
        <h1 className="text-[32px] font-bold">
          <span className="text-emerald-500">
            Step <span className="text-[#2b2b2b]">In.</span> Skill{" "}
            <span className="text-[#2b2b2b]">Up.</span>
          </span>{" "}
          <span className="text-[#2b2b2b]">Stand Out.</span> 🚀
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 gap-x-[32px] gap-y-[42px]">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="relative z-0 overflow-visible "
            style={{
              backgroundColor: card.bgColor,
              width: "592px",
              height: "341px",
              borderRadius: "30px",
            }}
            onMouseEnter={() => index < 2 && setHoveredCard(index)}
            onMouseLeave={() => index < 2 && setHoveredCard(null)}
            whileHover={index < 2 ? { scale: 1.02 } : {}}
            transition={{ duration: 0.3 }}
          >
            {/* Original Content */}
            <motion.div
              className="absolute inset-0"
              animate={{
                x: hoveredCard === index ? -592 : 0,
                opacity: hoveredCard === index ? 0 : 1,
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
            >
              {/* Animated Image */}
              <motion.img
                src={card.image}
                alt={card.title}
                className="absolute "
                style={{
                  ...card.imageStyles,
                  backdropFilter:
                    "0px 20px 40px -8px rgba(16, 24, 40, 0.1), 0px 20px 40px -8px rgba(16, 24, 40, 0.05)",
                }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              />

              {/* Content */}
              <div
                className={`relative z-10 h-full flex flex-col justify-center ${
                  index % 2 != 0
                    ? "items-start pl-[35px]"
                    : index % 2 === 0
                    ? "items-end"
                    : ""
                }     w-[67%]`}
                style={{
                  marginLeft: index % 2 === 0 ? "180px" : "0px",
                  marginRight: index % 2 === 1 ? "240px" : "0px",
                }}
              >
                <h3
                  className={`text-white text-3xl font-bold mb-2 text-nowrap ${
                    index % 2 != 0
                      ? "text-start"
                      : index % 2 === 0
                      ? "text-end"
                      : ""
                  }  w-[100%] `}
                >
                  {card.title}
                </h3>
                <div className="w-[75%]  ">
                  <p
                    className={`text-white text-lg font-medium mb-4 text-nowrap ${
                      index % 2 != 0 ? "text-left" : "text-right"
                    }  w-[100%]`}
                  >
                    {card.subtitle}
                  </p>
                  <p
                    className={`text-white text-sm font-normal leading-relaxed ${
                      index % 2 === 0 ? "text-end" : "text-start"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hover Content (only for first 2 cards) */}
            {index < 2 && (
              <motion.div
                className="absolute inset-0 flex border-0 items-center justify-center pointer-events-auto p-0"
                initial={{ x: 592, opacity: 0 }}
                animate={{
                  x: hoveredCard === index ? 0 : 592,
                  opacity: hoveredCard === index ? 1 : 0,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                style={{
                  zIndex: -1,
                  overflow: "hidden",
                }}
              >
                {/* Left Arrow */}
                <motion.button className="absolute -left-11 top-1/2 transform -translate-y-1/2 p-[30px] bg-white rounded-full shadow-none border-none flex items-center justify-center z-32">
                  <div className="rounded-full p-4 shadow-[0_6px_30px_0_rgba(0,0,0,0.45)] shadow-gray/80 ml-4">
                    <ArrowLeft />
                  </div>
                </motion.button>
                <motion.button className="absolute -right-11 top-1/2 transform -translate-y-1/2 p-[30px] bg-white rounded-full shadow-none border-none flex items-center justify-center z-32">
                  <div className="rounded-full p-4 shadow-[0_6px_30px_0_rgba(0,0,0,0.45)] shadow-gray/80 mr-4">
                    <ArrowRight />
                  </div>
                </motion.button>

                {/* Main Content */}
                <div className="flex w-full h-full px-[58px] z-40 ">
                  {index === 0 ? (
                    <div className="text-center flex flex-col   overflow-visible  relative w-[100%]">
                      <div className=" text-white ">
                        <div className="mb-6 absolute top-14">
                          <div className="inline-block bg-white bg-opacity-20 rounded-full p-4 -rotate-12">
                            <span className="text-orange-400 text-3xl font-bold">
                              wow
                            </span>
                          </div>
                        </div>
                        <div className="text-left mt-[35px]  w-[60%] ml-auto">
                          <h2 className="text-xl font-bold mb-4 text-left">
                            Clarity unlocked—
                            <br />
                            stickers, sips, and skills
                            <br />
                            all in one go!
                          </h2>
                        </div>
                        <div className="absolute bottom-5 right-14 rotate-45">
                          <div className="inline-block bg-white bg-opacity-20 rounded-full p-4">
                            <span className="text-orange-400 text-3xl font-bold">
                              wow
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="">
                        <img
                          src="/src/assets/task2/1.png"
                          alt="Sticker"
                          className="w-[200px] h-[225px] ml-2 absolute bottom-0"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col-2 ">
                      <div className=" text-white w-[50%]">
                        <h2 className="my-10 mr-32 text-xl font-bold text-nowrap">
                          Focused faces—learning
                          <br />
                          mode: ON!
                        </h2>
                      </div>
                      <div className="flex">
                        <div className="absolute justify-center items-center bottom-0">
                          <img
                            className=" w-70 h-76"
                            src="/src/assets/task2/2.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {/* Right Arrow */}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default TaskTwo;
