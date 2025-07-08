import { motion } from "framer-motion";


export default function index({ Mainvariant, SecondVariant, JobTitle, CompanyName, Start, End,
    ListOfResposibilities,
    EducationPart,
}) {
    return (
        <motion.div
            variants={Mainvariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
        >
            <motion.div
                variants={SecondVariant}
                className={["border-l-2 border-blue-500 pl-4 ml-2 py-4", EducationPart ? ' border-purple-500' : '']}
            >
                <h3 className="text-xl font-bold">{JobTitle}</h3>
                <p className={[EducationPart ? 'text-purple-400' : "text-blue-400"]}>
                    {CompanyName} | {Start} {Start ? '-' : ''}  {End ? End : 'Present'}
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                    {ListOfResposibilities.map((each, index) => {
                        return <li key={index}>{each}</li>
                    })}
                </ul>
            </motion.div>
        </motion.div>
    )
}