import useHooks from "./hooks";
import ProfilePic from "../../assets/ProfilePic.png";
import Resume from "../../assets/resume/Syed Gohar Ali Naqvi CV.pdf";
import LogoPic from "../../assets/Logo.png";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { ShowCaseContainer, Spacer } from "../../components";
import { IoLogoWhatsapp } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";

export default function index() {
  const {
    itemVariants,
    containerVariants,
    skills,
    List_Of_Repons_In_Balawal_IT,
    bbitTopics,
  } = useHooks();

  return (
    <div className="bg-gray-900 text-white ">
      {/* Hero Section */}
      <section className="h-full min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        <div className="">
          {/* the Image Container */}
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: -100, opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute w-60 h-60 left-1/2 top-1/2 -translate-1/2"
          >
            <motion.img
              animate={{
                rotate: "1turn",
                scale: [1, 1.5, 1],
                borderRadius: ["6%", "75%", "150%"],
                boxShadow: [
                  "0px 0px 10px rgba(255, 255, 255, 0.2)",
                  "0px 0px 20px rgba(255, 255, 255, 0.5)",
                  "0px 0px 30px rgba(255, 255, 255, 0.8)",
                  "0px 0px 40px rgba(255, 255, 255, 1)",
                ],
              }}
              transition={{ duration: 1.5 }}
              src={ProfilePic}
              alt="Profile"
              className="w-60 h-60 "
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 400, opacity: 0 }}
          animate={{ y: 200, opacity: 1 }}
          transition={{ duration: 4 }}
          className="text-center z-10 max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            SYED GOHAR ALI NAQVI
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-300">
            React Native Developer | Mobile App Developer | Frontend Engineer
          </p>
          <div className="flex justify-center gap-4  mb-12">
            <a
              href="https://www.linkedin.com/in/syed-gohar-ali-naqvi-107953361 "
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-colors"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href={Resume}
              download
              className="flex items-center gap-2 border border-purple-500 hover:bg-purple-500 px-6 py-3 rounded-full transition-colors"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-8 text-center"
          >
            About Me
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 text-lg leading-relaxed"
          >
            {/* Paragraph 1 */}
            <motion.p variants={itemVariants}>
              <span className="font-bold">Hello!</span> I'm{" "}
              <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Syed Gohar Ali Naqvi
              </span>
              , a motivated and adaptable{" "}
              <span className="font-bold text-blue-400">
                React Native Developer
              </span>{" "}
              passionate about crafting intuitive and high-performance mobile
              applications. With hands-on experience in the field, I specialize
              in building scalable and responsive cross-platform solutions that
              deliver exceptional user experiences.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p variants={itemVariants}>
              My expertise lies in core React Native development, complemented
              by strong skills in{" "}
              <span className="font-bold text-purple-400">API integration</span>
              , ensuring seamless communication between frontend and backend
              systems. I have practical experience implementing robust features
              like{" "}
              <span className="font-bold text-blue-400">
                Firebase Authentication
              </span>{" "}
              and leveraging{" "}
              <span className="font-bold text-purple-400">Firestore</span> for
              efficient, real-time data management. I am committed to writing
              clean, modular, and reusable code, adhering to software
              engineering best practices to ensure maintainability and optimal
              performance.
            </motion.p>

            {/* Paragraph 3 */}
            <motion.p variants={itemVariants}>
              Currently pursuing a{" "}
              <span className="font-bold text-blue-400">
                Bachelor's in Business & Information Technology
              </span>
              , I combine a foundational understanding of business principles
              with strong technical acumen. I pride myself on my{" "}
              <span className="font-bold text-purple-400">
                analytical and critical thinking
              </span>{" "}
              abilities, which enable me to troubleshoot and resolve complex
              logic issues effectively.
            </motion.p>

            {/* Paragraph 4 */}
            <motion.p variants={itemVariants}>
              I am eager to contribute my skills to innovative projects and
              continue growing as a Frontend development professional.{" "}
              <span className="font-bold text-blue-400">Let's connect</span> and
              build something great!
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className=" py-20 bg-gray-800/50  px-4  ">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-8 text-center"
          >
            Skills
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {skills.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex justify-center items-center gap-2 bg-gray-700 p-4 rounded-lg hover:bg-blue-600 transition-colors"
              >
                {item.icon}
                {item.skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-8 text-center"
          >
            Experience
          </motion.h2>
          <ShowCaseContainer
            Mainvariant={itemVariants}
            SecondVariant={containerVariants}
            JobTitle={"React Native Developer"}
            CompanyName={" Balawal IT House"}
            Start={"Jan 2024"}
            End={"May 2025"}
            ListOfResposibilities={List_Of_Repons_In_Balawal_IT}
          />
          <Spacer isBasic />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-800 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-8 text-center"
          >
            Education
          </motion.h2>
          <ShowCaseContainer
            Mainvariant={itemVariants}
            SecondVariant={containerVariants}
            JobTitle={
              "Bachelor of Science in Business & Information Technology"
            }
            CompanyName={"Virtual University"}
            End={"Expected April 2027"}
            ListOfResposibilities={bbitTopics}
            EducationPart
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-8 text-center"
          >
            Contact Me
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <a
                href="mailto:ga741741@gmail.com?subject=Contact%20From%20Portfolio&body=Hi%20Gohar,%0AI%20visited%20your%20portfolio%20and%20wanted%20to%20reach%20out%20to%20you."
                className="flex flex-row items-center gap-2"
              >
                <p className="flex items-center gap-2">
                  <FaEnvelope /> ga741741@gmail.com
                </p>
              </a>

              <a
                href="https://wa.me/+923041038639"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                {" "}
                <FaPhoneAlt />
                <p className="flex items-center gap-2">+923041038639</p>
              </a>
              <p className="flex items-center gap-2">
                <CiLocationOn size={20} />
                Daska, Sialkot Pakistan
              </p>
            </motion.div>
            <motion.form
              variants={itemVariants}
              action="https://formspree.io/f/mjkrqyvd"
              method="POST"
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-800 rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-800 rounded"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 bg-gray-800 rounded"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-colors"
              >
                Send Message
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      <footer className="bg-gray-900 py-6 px-4 text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Syed Gohar Ali Naqvi. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
