import { useRef } from "react";
import { SelectedPage } from "../../shared/types";
import image1 from "../../../public/images/image1.png"
import image2 from "../../../public/images/image2.png"
import image3 from "../../../public/images/image3.png"
import image4 from "../../../public/images/image4.png"
import image5 from "../../../public/images/image5.png"
import image6 from "../../../public/images/image6.png"
import HText from "../../shared/HText";
import { motion } from "framer-motion";
import Class from "./class";
import './class.css'


const classes = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image6,
  },
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
const hoverRef = useRef(null);

const handleMouseOver = () => {
  const scrollElements = hoverRef.current?.querySelectorAll(".scroll");
  scrollElements?.forEach((element) => {
    element.style.animationPlayState = "paused"
  })
};

const handleMouseOut = () => {
  const scrollElements = hoverRef.current?.querySelectorAll(".scroll");
  scrollElements?.forEach((element) => {
    element.style.animationPlayState = "running"
}
)};

  return (
    <section id="OurClasses" className="w-full bg-primary-100 py-20 md:py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>
              OUR CLASSES
            </HText>
            <p className="py-5">
              Fringilla was suspended for the weekend. It is a hoarse voice
              country than the airline. Mauris does not want an element of euismod
              easy Amet semper tortor facilisis nibh nibh. Let it be a hoarse voice
              for the estate is now in a state of laughter.
            </p>
          </div>
        </motion.div>
        <div ref={hoverRef}
         className="mt-10 h-[335px] whitespace-nowrap flex overflow-hidden" 
         onMouseOver={handleMouseOver}
         onMouseOut={handleMouseOut}
        >
          <ul className="scroll">
            {classes.map((item, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
          <ul className="scroll" aria-hidden="true">
            {classes.map((item, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default OurClasses