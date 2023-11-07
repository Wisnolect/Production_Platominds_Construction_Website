import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropDownCircle,
} from "react-icons/md";
import data from "../utils/accordion.jsx";
import Image from "next/image.js";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ValueSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [expandedItems, setExpandedItems] = useState(data.map(() => false));

  const toggleItem = (index) => {
    const updatedExpandedItems = [...expandedItems];
    updatedExpandedItems[index] = !updatedExpandedItems[index];
    setExpandedItems(updatedExpandedItems);
  };

  return (
    <section id="value" className="v-wrapper mt-10">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="w-full h-full flex justify-center items-center px-4" data-aos="fade-up">
          <img src="/value.jpg" alt="image" className="w-[500px] h-[550px] object-cover border-2 border-gray-600 rounded-t-full" />
        </div>

        {/* right */}
        <div className="flexColStart v-right" data-aos="fade-down">
          <span className="text-orange-600 font-semibold text-lg">Our Value</span>

          <span className="primaryText">Value We Give to You</span>

          <span className="secondaryText">
            We are always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => (
              <AccordionItem
                className={`accordionItem ${expandedItems[i] ? "expanded" : "collapsed"}`}
                uuid={i}
                key={i}
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="flex justify-around accordionButton ">
                    <div className="flexCenter icon">{item.icon}</div>
                    <span className="primaryText">{item.heading}</span>
                    <div className="flexCenter icon">
                      <MdOutlineArrowDropDown size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
