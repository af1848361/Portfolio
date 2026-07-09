import { useEffect } from "react";
import useHooks from "./hooks";
import { usePortfolioContent } from "../../content";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { ShowCaseContainer, Spacer, RichText, HeroSection } from "../../components";
import { CiLocationOn } from "react-icons/ci";

export default function index() {
  const { itemVariants, containerVariants } = useHooks();
  const { content, skills, heroLinks, projects } = usePortfolioContent();

  useEffect(() => {
    document.title = content.meta.pageTitle;
  }, [content.meta.pageTitle]);

  const buildMailtoLink = () => {
    const subject = encodeURIComponent(content.contact.emailSubject);
    const body = encodeURIComponent(content.contact.emailBody);
    return `mailto:${content.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-gray-900 text-white ">
      <HeroSection />

      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-8 text-center"
          >
            {content.about.title}
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 text-lg leading-relaxed"
          >
            {content.about.paragraphs.map((paragraph, index) => (
              <motion.p key={index} variants={itemVariants}>
                <RichText segments={paragraph.segments} />
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="skills" className=" py-20 bg-gray-800/50  px-4  ">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-8 text-center"
          >
            {content.skills.title}
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

      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-8 text-center"
          >
            {content.experience.title}
          </motion.h2>
          {content.experience.items.map((item, index) => (
            <div key={index}>
              <ShowCaseContainer
                Mainvariant={itemVariants}
                SecondVariant={containerVariants}
                JobTitle={item.title}
                CompanyName={item.organization}
                Start={item.startDate}
                End={item.endDate}
                ListOfResposibilities={item.highlights}
              />
              {index < content.experience.items.length - 1 && <Spacer isBasic />}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="py-20 bg-gray-800/50 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-8 text-center"
          >
            {content.projects.title}
          </motion.h2>
          {projects.map((project, index) => (
            <div key={index}>
              <ShowCaseContainer
                Mainvariant={itemVariants}
                SecondVariant={containerVariants}
                JobTitle={project.title}
                CompanyName={project.organization}
                Start={project.startDate ?? ""}
                End={project.endDate ?? ""}
                ListOfResposibilities={project.highlights}
              />
              {project.storeLinks?.length > 0 && (
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap justify-center gap-4 mt-6"
                >
                  {project.storeLinks.map((storeLink) => {
                    const className =
                      "flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-5 py-3 rounded-full text-sm transition-colors cursor-pointer";

                    if (storeLink.url?.trim()) {
                      return (
                        <a
                          key={storeLink.label}
                          href={storeLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={className}
                        >
                          {storeLink.icon}
                          {storeLink.label}
                        </a>
                      );
                    }

                    return (
                      <span
                        key={storeLink.label}
                        className={`${className} cursor-default opacity-70`}
                      >
                        {storeLink.icon}
                        {storeLink.label}
                      </span>
                    );
                  })}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="py-20 bg-gray-800 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-8 text-center"
          >
            {content.education.title}
          </motion.h2>
          {content.education.items.map((item, index) => (
            <ShowCaseContainer
              key={index}
              Mainvariant={itemVariants}
              SecondVariant={containerVariants}
              JobTitle={item.title}
              CompanyName={item.organization}
              Start={item.startDate}
              End={item.endDate}
              ListOfResposibilities={item.highlights}
              EducationPart
            />
          ))}
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-8 text-center"
          >
            {content.contact.title}
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <a
                href={buildMailtoLink()}
                className="flex flex-row items-center gap-2"
              >
                <p className="flex items-center gap-2">
                  <FaEnvelope /> {content.contact.email}
                </p>
              </a>

              <a
                href={content.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FaPhoneAlt />
                <p className="flex items-center gap-2">{content.contact.phone}</p>
              </a>
              <p className="flex items-center gap-2">
                <CiLocationOn size={20} />
                {content.contact.location}
              </p>
            </motion.div>
            <motion.form
              variants={itemVariants}
              action={content.contact.form.action}
              method={content.contact.form.method}
              className="space-y-4"
            >
              {content.contact.form.fields.map((field) => {
                if (field.type === "textarea") {
                  return (
                    <textarea
                      key={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      rows={field.rows}
                      className="w-full p-3 bg-gray-800 rounded"
                      required={field.required}
                    />
                  );
                }

                return (
                  <input
                    key={field.name}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="w-full p-3 bg-gray-800 rounded"
                    required={field.required}
                  />
                );
              })}
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-colors"
              >
                {content.contact.form.submitLabel}
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      <footer className="bg-gray-900 py-6 px-4 text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} {content.meta.copyrightName}. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}
