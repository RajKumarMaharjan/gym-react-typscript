import { motion } from "framer-motion";
import { BenefitType, SelectedPage } from "../../shared/types";
import HText from "../../shared/HText";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon, } from "@heroicons/react/24/solid";
import Benefit from './Benefits'
import ActionButton from "../../shared/ActionButton";
import BenefitsPageGraphic from "../../../public/images/BenefitsPageGraphic.png"


const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description:
            "Nor is coaching a hobby. Let the pain fly for the leaven in the bed of the children. Any body and.",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "In football, it is necessary to laugh at the time, because someone always triggers it. Nor is it easy to pursue and poison. It is necessary and ugly.",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "I'm going to have some work tomorrow. If you read the book you need to know. Let the lake be my children. They will give birth to homework.",
    }
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.3 },
    },
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="Benefits"
            className="mx-auto min-h-full w-5/6 py-20">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                {/* Header */}
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HText>MORE THAN JUST GYM.</HText>
                    <p className="my-5 text-sm">
                        We provide world class fitness equipment, trainers and classes to
                        get you to your ultimate fitness goals with ease. We provide true
                        care into each and every member.
                    </p>
                </motion.div>
                {/* Benefits */}
                <motion.div className="md:grid grid-cols-3 items-center justify-between gap-8 mt-5"
                    initial="hidden"
                    whileInView="visible"
                    // viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={container}
                >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>
                {/* Graphics and Description */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* Graphics */}
                    <img
                        className="mx-auto"
                        alt="benefits-page-graphic"
                        src={BenefitsPageGraphic}
                    />
                    {/* Description */}
                    <div>
                        {/* Title */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    <HText>
                                        MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                        <span className="text-primary-500">FIT</span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>
                        {/* Decrypt */}
                        <motion.div
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.5 }}
                         transition={{ delay:0.3, duration: 0.5 }}
                         variants={{
                             hidden: { opacity: 0, x: 50 },
                             visible: { opacity: 1, x: 0 },
                         }}
                        >
                            <p className="my-5">
                                An iron mass will be born, the author of tincidunt. A lot of powerful shots
                                the need for education will be followed by education. I am a pillow
                                Who is hungry for life? Quis amet vulputate tincidunt at in
                                neither But let it be easy to follow the need of basketball
                                land Ullamcorper arcu that price wise for the whole players.
                                I hate clinical cats.
                            </p>
                            <p className="mb-5">
                                Fringilla was suspended for the weekend. It is a hoarse voice
                                country than the airline. Mauris does not want an element of euismod
                                easy Amet semper tortor facilisis nibh nibh. Let it be a hoarse voice
                                for the estate is now in a state of laughter.
                            </p>
                        </motion.div>
                        {/* Button */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Benefits