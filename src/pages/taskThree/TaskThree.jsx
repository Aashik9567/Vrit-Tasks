
import { motion } from "framer-motion";
import img1 from "/src/assets/task3/img1.png";
import img2 from "/src/assets/task3/img2.png";
import img3 from "/src/assets/task3/img3.png";
import img4 from "/src/assets/task3/img4.png";

const TechIcon = ({ src, alt, size = "80px", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
    </motion.div>
  );
};

const Card = ({
  children,
  backgroundColor = "#FFFFFF",
  isClickable = false,
  style = {},
}) => {
  return (
    <motion.div
      className={`relative rounded-3xl shadow-lg flex flex-col justify-between overflow-hidden ${
        isClickable ? "cursor-pointer" : ""
      }`}
      layout
      style={{
        backgroundColor,
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
};

const RotatedText = ({ text, color, className = "" }) => (
  <div
    className={` ${className} absolute bottom-[50px] h-auto -rotate-90 w-[90%] text-wrap -right-[30px]`}
  >
    <span
      style={{
        color,
        fontSize: "12px",
        fontWeight: "500",
        fontFamily: "Nohemi, sans-serif",
      }}
    >
      {text}
    </span>
  </div>
);

const TaskThree = () => {
  const techIcons = [
    { src: img1, alt: "React", delay: 0.1 },
    { src: img2, alt: "Figma", delay: 0.2 },
    { src: img3, alt: "Vue.js", delay: 0.3 },
    { src: img4, alt: "Flutter", delay: 0.4 },
  ];
  return (
    <div
      className="relative bg-white"
      style={{
        width: "100%",
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "80px 120px",
        boxSizing: "border-box",
      }}
    >
      <div className="mb-12">
        <h3
          className="text-[#414141] mb-[20px]"
          style={{
            fontSize: "24px",
            fontWeight: "400",
            fontFamily: "Nohemi, sans-serif",
          }}
        >
          Explore our classes and master trending skills!
        </h3>

        <h1
          style={{
            fontSize: "32px",
            fontWeight: "700",
            fontFamily: "Nohemi, sans-serif",
            lineHeight: "1.2",
          }}
        >
          <span style={{ color: "#2B2B2B" }}>Dive Into </span>
          <span style={{ color: "#1DA077" }}>What's Hot Right Now!</span>
          <span> 🔥</span>
        </h1>
      </div>

      <div
        className="grid grid-cols-3"
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "24px",
        }}
      >
        <Card
          backgroundColor="#C33241"
          style={{
            width: "592px",
            height: "461px",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div className="flex justify-end">
            <button
              className="text-white rounded-full px-6 py-3 font-medium transition-all duration-300 flex items-center"
              style={{
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "Nohemi, sans-serif",
              }}
            >
              View all Courses <span className="ml-2"> → </span>
            </button>
          </div>

          <div className="flex justify-center gap-6">
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

          <div className="flex items-end justify-center gap-8 mt-auto">
            <div className="flex items-start">
              <span
                style={{
                  fontSize: "150px",
                  fontWeight: "700",
                  color: "#FFFFFF",
                  fontFamily: "Nohemi, sans-serif",
                  lineHeight: "0.9",
                }}
              >
                23
              </span>
              <span
                style={{
                  fontSize: "70px",
                  fontWeight: "700",
                  color: "#FFFFFF",
                  fontFamily: "Nohemi, sans-serif",
                  lineHeight: "0.8",
                  marginLeft: "-10px",
                  marginTop: "-10px",
                }}
              >
                +
              </span>
            </div>
            <div className="text-white text-left">
              <h3
                className="font-bold"
                style={{ fontSize: "32px", fontFamily: "Nohemi, sans-serif" }}
              >
                All Courses
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  fontFamily: "Nohemi, sans-serif",
                }}
              >
                courses you're powering through right now.
              </p>
            </div>
          </div>
        </Card>

        <Card
          backgroundColor="#FFF5F5"
          isClickable={true}
          style={{
            height: "456px",
            padding: "40px",
            position: "relative",
            overflow: "visible",
          }}
        >
          <div className="flex gap-2 relative top-[200px]">
            <div className="mt-4 flex flex-col absolute   -rotate-90 bottom-[10px]">
              <motion.h3
                className="font-bold"
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#C33241",
                  fontFamily: "Nohemi, sans-serif",
                }}
                transition={{ duration: 0.5 }}
              >
                Upcoming
              </motion.h3>
              <h3
                className="font-bold"
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#C33241",
                  fontFamily: "Nohemi, sans-serif",
                }}
              >
                Courses
              </h3>
            </div>
            <RotatedText
              text="exciting new courses waiting to boost your skills."
              color="#C33241"
              className=" text-xl "
            />
          </div>
          <div className="h-auto  flex flex-col justify-center items-center text-center">
            <div className="relative">
              <div
                style={{
                  fontSize: "140px",
                  fontWeight: "700",
                  color: "#C33241",
                  fontFamily: "Nohemi, sans-serif",
                  lineHeight: "0.9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                05
                <span
                  style={{
                    fontSize: "60px",
                    fontWeight: "700",
                    color: "#C33241",
                    fontFamily: "Nohemi, sans-serif",
                    marginLeft: "-10px",
                    lineHeight: "0.8",
                    position: "relative",
                    top: "-20px",
                  }}
                >
                  +
                </span>
              </div>
            </div>
          </div>
        </Card>

        <Card
          backgroundColor="#FFF5F5"
          isClickable={true}
          style={{
            height: "456px",
            padding: "40px",
            position: "relative",
            overflow: "visible",
          }}
        >
          <div className="flex gap-2 relative top-[200px]">
            <div className="mt-4 flex flex-col absolute -rotate-90 bottom-[10px]">
              <motion.h3
                className="font-bold"
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#C33241",
                  fontFamily: "Nohemi, sans-serif",
                }}
                transition={{ duration: 0.5 }}
              >
                Ongoing
              </motion.h3>
              <h3
                className="font-bold"
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#C33241",
                  fontFamily: "Nohemi, sans-serif",
                }}
              >
                Courses
              </h3>
            </div>
            <RotatedText
              text="currently happening—don't miss out on the action!"
              color="#C33241"
              className=" text-xl "
            />
          </div>
          <div className="h-auto flex flex-col justify-center items-center text-center">
            <div className="relative">
              <div
                style={{
                  fontSize: "140px",
                  fontWeight: "700",
                  color: "#C33241",
                  fontFamily: "Nohemi, sans-serif",
                  lineHeight: "0.9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                10
                <span
                  style={{
                    fontSize: "60px",
                    fontWeight: "700",
                    color: "#C33241",
                    fontFamily: "Nohemi, sans-serif",
                    marginLeft: "-10px",
                    lineHeight: "0.8",
                    position: "relative",
                    top: "-20px",
                  }}
                >
                  +
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default TaskThree;
