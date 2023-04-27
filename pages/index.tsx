import Navbar from "@/components/navigators/Navbar";
import type {NextComponentType, NextPageContext} from "next";
import styles from "@/styles/Home.module.css";
import About from "@/components/sections/About";
import {useRef, useEffect, useCallback, useState} from "react";
import * as CONST from "@/constants";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Head from "next/head";

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
      <Head>
        <title>Tondiki Andika</title>
        <link
          rel="canonical"
          href="https://tondikiandika.vercel.app"
          key="canonical"
        />
        <link rel="icon" href="/favicon.ico" key="icon" />
        <meta charSet="UTF-8" key="charSet" />
        <meta
          name="google-site-verification"
          content="TuMQlbTsYDlj_-MZbFQ9YgX3L_q1nx_gX8_mh-57t7M"
          key="googleVerification"
        />
        <meta
          property="og:url"
          content="https://tondikiandika.vercel.app/"
          key="ogUrl"
        />
        <meta property="og:image" content="/favicon.ico" key="ogImage" />
        <meta property="og:type" content="website" key="ogType" />
        <meta name="author" content="Tondiki" key="ogAuthor" />
        <meta
          property="og:title"
          content="Tondiki Andika Portfolio"
          key="ogTitle"
        />
        <meta
          name="description"
          content="Hi! I am Tondiki Andika, a Full-Stack Developer. I am experienced in web and mobile application development using React, React Native, Next, etc."
          key="desc"
        />
        <meta
          property="og:description"
          name="description"
          content="Hi! I am Tondiki Andika, a Full-Stack Developer. I am experienced in web and mobile application development using React, React Native, Next, etc."
          key="ogDesc"
        />
        <meta
          name="keywords"
          content="ton, tondi, tondiki, dika ,andika, tondi dika, tondiki dika, tondiki andika, portfolio, developer, frontend, front end, backend, back end, fullstack, full-stack, full stack, web, mobile,app, application, development, programming, design, database, html, css, javascript, js, typescript, ts, react, react native, next, postgre, sql, postgresql, project, projects, sociagram, hana, aqua"
          key="keyWords"
        />
      </Head>
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
