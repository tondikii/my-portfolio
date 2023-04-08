import type {NextComponentType, NextPageContext} from "next";
import Image from "next/image";
import styles from "@/styles/Navbar.module.css";
import * as CONST from "@/constants";
import LogoProfile from "@/assets/logo-profile.jpeg";
import {useCallback, useRef, useEffect, useState} from "react";

interface Props {
  aboutRef: any;
  skillsRef: any;
  projectsRef: any;
  contactRef: any;
  activeSection: number;
  show: boolean;
}

const Navbar: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const {aboutRef, skillsRef, projectsRef, contactRef, activeSection, show} =
    props;

  return (
    <div
      id={styles.container}
      className={`flex justify-center bg-transparent text-zinc-900 fixed w-full ${
        show ? "" : styles.hideNavbar
      }`}
    >
      <div className="w-full lg:w-10/12 flex flex-row justify-between px-4 py-2 lg:py-4 items-center">
        <Image
          src={LogoProfile}
          className="w-8 h-8 lg:w-10 lg:h-10 rounded-full drop-shadow-sm"
          height={0}
          width={0}
          alt="Logo Profile"
        />
        <div className="flex flex-row space-x-4 md:space-x-8 items-center">
          <ul className="flex flex-row space-x-3 md:space-x-4 lg:space-x-12">
            <li
              role="button"
              className={
                activeSection === CONST.ABOUT_SECTION
                  ? styles.activeSection
                  : styles.section
              }
              onClick={() => {
                aboutRef?.current?.scrollIntoView({behavior: "smooth"});
              }}
            >
              About
            </li>
            <li
              role="button"
              className={
                activeSection === CONST.SKILLS_SECTION
                  ? styles.activeSection
                  : styles.section
              }
              onClick={() => {
                skillsRef?.current?.scrollIntoView({behavior: "smooth"});
              }}
            >
              Skills
            </li>
            <li
              role="button"
              className={
                activeSection === CONST.PROJECTS_SECTION
                  ? styles.activeSection
                  : styles.section
              }
              onClick={() => {
                projectsRef?.current?.scrollIntoView({behavior: "smooth"});
              }}
            >
              Projects
            </li>
            <li
              role="button"
              className={
                activeSection === CONST.CONTACT_SECTION
                  ? styles.activeSection
                  : styles.section
              }
              onClick={() => {
                contactRef?.current?.scrollIntoView({behavior: "smooth"});
              }}
            >
              Contact
            </li>
          </ul>
          <div className="flex flex-row space-x-3 lg:space-x-4 items-center">
            <a
              role="button"
              className="border-2 rounded-full p-1 lg:p-2 border-instagram"
              target="_blank"
              href="https://instagram.com/tondikii?igshid=ZDdkNTZiNTM="
            >
              <Image
                src="/icon-instagram.svg"
                alt="Instagram icon"
                className="w-5 lg:w-7 w-5 lg:h-7"
                width={0}
                height={0}
              />
            </a>
            <a
              role="button"
              className="border-2 rounded-full p-1 lg:p-2 border-linkedin"
              target="_blank"
              href="https://www.linkedin.com/in/tondikii/"
            >
              <Image
                src="/icon-linkedin.svg"
                alt="Linkedin icon"
                className="w-5 lg:w-7 w-5 lg:h-7"
                width={0}
                height={0}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
