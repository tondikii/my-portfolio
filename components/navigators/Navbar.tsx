import type {NextComponentType, NextPageContext} from "next";
import Image from "next/image";
import styles from "@/styles/Navbar.module.css";
import * as CONST from "@/constants";
import LogoProfile from "@/assets/logo-profile.jpeg";

interface Props {
  aboutRef: any;
  skillsRef: any;
  projectsRef: any;
  contactRef: any;
  activeSection: number;
}

const Navbar: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const {aboutRef, skillsRef, projectsRef, contactRef, activeSection} = props;

  return (
    <nav className="flex justify-center bg-transparent text-zinc-900 fixed w-full">
      <div className="w-10/12 flex flex-row justify-between p-4 items-center">
        <Image
          src={LogoProfile}
          className="w-10 h-10 rounded-full drop-shadow-sm"
          height={0}
          width={0}
          alt="Logo Profile"
        />
        <div className="flex flex-row space-x-8 items-center">
          <ul className="flex flex-row space-x-12">
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
          <div className="flex flex-row space-x-4">
            <a
              role="button"
              className="border-2 rounded-full p-2 border-instagram"
              target="_blank"
              href="https://instagram.com/tondikii?igshid=ZDdkNTZiNTM="
            >
              <Image
                src="/icon-instagram.svg"
                alt="Instagram icon"
                className="w-7 h-7"
                width={0}
                height={0}
              />
            </a>
            <a
              role="button"
              className="border-2 rounded-full p-2 border-linkedin"
              target="_blank"
              href="https://www.linkedin.com/in/tondikii/"
            >
              <Image
                src="/icon-linkedin.svg"
                alt="Linkedin icon"
                className="w-7 h-7"
                width={0}
                height={0}
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
