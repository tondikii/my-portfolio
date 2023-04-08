import Navbar from "@/components/navigators/Navbar";
import type {NextComponentType, NextPageContext} from "next";
import styles from "@/styles/Home.module.css";
import About from "@/components/sections/About";
import {useRef, useEffect, useCallback, useState} from "react";
import * as CONST from "@/constants";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

interface Props {}

const HomePage: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState(CONST.ABOUT_SECTION);
  const [showNavbar, setShowNavbar] = useState<boolean>(true);

  const onClickContact = () => {
    contactRef?.current?.scrollIntoView({behavior: "smooth"});
  };

  const scrolling = useCallback(() => {
    let prevScrollpos = window?.pageYOffset;
    window.onscroll = () => {
      const {innerHeight} = window;
      const {scrollTop} = document.documentElement;
      if (
        scrollTop < innerHeight * 2 &&
        activeSection !== CONST.ABOUT_SECTION
      ) {
        setActiveSection(CONST.ABOUT_SECTION);
      } else if (
        scrollTop >= innerHeight * 2 &&
        scrollTop < innerHeight * 3 &&
        activeSection !== CONST.SKILLS_SECTION
      ) {
        setActiveSection(CONST.SKILLS_SECTION);
      } else if (
        scrollTop >= innerHeight * 3 &&
        scrollTop < innerHeight * 4 &&
        activeSection !== CONST.PROJECTS_SECTION
      ) {
        setActiveSection(CONST.PROJECTS_SECTION);
      } else if (
        scrollTop >= innerHeight * 4 &&
        scrollTop < innerHeight * 5 &&
        activeSection !== CONST.CONTACT_SECTION
      ) {
        setActiveSection(CONST.CONTACT_SECTION);
      }

      let currentScrollPos = window?.pageYOffset;
      console.log({prevScrollpos, currentScrollPos});
      if (prevScrollpos > currentScrollPos) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      prevScrollpos = currentScrollPos;
    };
  }, [activeSection]);

  useEffect(() => {
    scrolling();
  });

  return (
    <>
      <Navbar
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        activeSection={activeSection}
        show={showNavbar}
      />
      <div className={`${styles.container}`}>
        <div ref={aboutRef}>
          <About onClickContact={onClickContact} />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </>
  );
};

export default HomePage;
