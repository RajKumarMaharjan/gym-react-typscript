import useMediaQuery from "../../hooks/useMediaQuery";
import { SelectedPage } from "../../shared/types";
import ActionButton from "../../shared/ActionButton";
import HomePageText from "../../../public/images/HomePageText.png";
import HomePageGraphic from "../../../public/images/HomePageGraphic.png";
import SponsorRedBull from "../../../public/images/SponsorRedBull.png";
import SponsorForbes from "../../../public/images/SponsorForbes.png";
import SponsorFortune from "../../../public/images/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}


const Home = ({ setSelectedPage }: Props) => {

    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

    return (
        <section id="Home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
            {/* Image and Main Header */}
            <motion.div 
            className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                {/* Main Header */}
                <div className="z-10 mt-32 md:basis-3/5">
                    {/* Heading */}
                    <motion.div className="md:-mt-20" 
                      initial = "hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.8 }}
                      variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                        <div className="relative">
                            <div className="before:absolute before:-top-20 md:before:content-evolvetext before:-left-20 before:z-[-1]">
                                <img src={HomePageText} alt="HomePageText" />
                            </div>
                        </div>
                        <p className="mt-8 text-sm">
                            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                            Studios to get the Body Shapes That you Dream of.. Get Your Dream
                            Body Now.
                        </p>
                    </motion.div>
                    {/* Action */}
                    <motion.div 
                    className="mt-8 flex gap-8 items-center"
                    initial = "hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay:0.7, duration: 0.8 }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    >
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink
                            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >
                            <p>Learn More</p>
                        </AnchorLink>
                    </motion.div>
                </div>
                {/* Image */}
                <div className="flex basis-3/5 justify-center z-10 md:ml-40 md:mt-16 md:justify-items-end">
                    <img src={HomePageGraphic} alt="HomePageGraphic" />
                </div>
            </motion.div>
            {/* Sponsors */}
            {isAboveMediumScreens && (
                <div className="h-[150px] w-full bg-primary-100 py-10">
                    <div className="mx-auto w-5/6">
                        <div className="flex w-3/5 items-center justify-between gap-8">
                            <img src={SponsorRedBull} alt="SponsorRedBull" />
                            <img src={SponsorForbes} alt="SponsorForbes" />
                            <img src={SponsorFortune} alt="SponsorFortune" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Home