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
  const [renderAnimation, setRenderAnimation] = useState<{
    about: boolean;
    projects: boolean;
    contact: boolean;
  }>({
    about: false,
    projects: false,
    contact: false,
  });

  const onClickContact = () => {
    contactRef?.current?.scrollIntoView({behavior: "smooth"});
  };

  const scrolling = useCallback(() => {
    let prevScrollpos = window?.pageYOffset;
    window.onscroll = () => {
      const {innerHeight} = window;
      const {scrollTop} = document.documentElement;
      if (scrollTop >= innerHeight / 3 && !renderAnimation.about) {
        setRenderAnimation({...renderAnimation, about: true});
      }
      if (
        scrollTop >= innerHeight * 2 + innerHeight / 3 &&
        !renderAnimation.projects
      ) {
        setRenderAnimation({...renderAnimation, projects: true});
      }
      if (
        scrollTop >= innerHeight * 3 + innerHeight / 3 &&
        !renderAnimation.contact
      ) {
        setRenderAnimation({...renderAnimation, contact: true});
      }

      if (
        scrollTop < innerHeight * 2 - innerHeight / 3 &&
        activeSection !== CONST.ABOUT_SECTION
      ) {
        setActiveSection(CONST.ABOUT_SECTION);
      } else if (
        scrollTop >= innerHeight * 2 &&
        scrollTop < innerHeight * 3 - innerHeight / 3 &&
        activeSection !== CONST.SKILLS_SECTION
      ) {
        setActiveSection(CONST.SKILLS_SECTION);
      } else if (
        scrollTop >= innerHeight * 3 &&
        scrollTop < innerHeight * 4 - innerHeight / 3 &&
        activeSection !== CONST.PROJECTS_SECTION
      ) {
        setActiveSection(CONST.PROJECTS_SECTION);
      } else if (
        scrollTop >= innerHeight * 4 &&
        scrollTop < innerHeight * 5 - innerHeight / 3 &&
        activeSection !== CONST.CONTACT_SECTION
      ) {
        setActiveSection(CONST.CONTACT_SECTION);
      }

      let currentScrollPos = window?.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      prevScrollpos = currentScrollPos;
    };
  }, [activeSection, renderAnimation]);

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
          <About
            onClickContact={onClickContact}
            renderAnimation={renderAnimation?.about}
          />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={projectsRef}>
          <Projects renderAnimation={renderAnimation?.projects} />
        </div>
        <div ref={contactRef}>
          <Contact renderAnimation={renderAnimation?.contact} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
