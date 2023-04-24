import type {NextComponentType, NextPageContext} from "next";
import DoYourListMobile from "@/assets/do-your-list-mobile.jpeg";
import DoYourListDesktop from "@/assets/do-your-list-desktop.png";
import SociagramDesktopSignIn from "@/assets/sociagram-desktop-signin.png";
import SociagramDesktopProfile from "@/assets/sociagram-desktop-profile.png";
import HanaAquaMobile from "@/assets/hana-aqua-mobile.png";
import HanaAquaDesktop from "@/assets/hana-aqua-desktop.png";
import Image from "next/image";
import Head from "next/head";

import styles from "@/styles/About.module.css";

interface Props {
  renderAnimation: boolean;
}

const Projects: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const {renderAnimation} = props;
  const onClickProject = (link: string) => {
    window.open(link);
  };

  const sociagram = "https://sociagram.vercel.app/";
  const doYourList = "https://do-your-list.web.app/";
  const hanaAquaCustomer = "https://hana-aqua-customer.web.app/";
  const hanaAquaDashboard = "https://hana-aqua.web.app/";

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <Head>
        <meta name="description" content="Tondiki Andika's Project" />
        <meta property="og:title" content="Tondiki Andika's Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {renderAnimation && (
        <>
          <strong
            className={`text-4xl font-lexend mb-4 md:mb-10 ${styles.slideTop}`}
          >
            Projects
          </strong>
          <div
            className={`w-5/6 flex flex-row justify-around items-center ${styles.slideLeft}`}
          >
            <Image
              role="button"
              onClick={() => onClickProject(doYourList)}
              className="w-12 border-2 rounded-lg border-gray-200 shadow-md shadow-gray-400 mb-8"
              src={DoYourListMobile}
              width={0}
              height={0}
              alt="Project do your list mobile"
            />
            <Image
              role="button"
              onClick={() => onClickProject(doYourList)}
              className="w-1/3 shadow-md mt-4 shadow-gray-400"
              src={DoYourListDesktop}
              width={0}
              height={0}
              alt="Project do your list desktop"
            />
            <Image
              role="button"
              onClick={() => onClickProject(sociagram)}
              className="w-1/3 mt-12 shadow-md shadow-gray-600"
              src={SociagramDesktopSignIn}
              width={0}
              height={0}
              alt="Project sociagram desktop signin"
            />
          </div>
          <div
            className={`w-5/6 flex flex-row justify-around items-center mt-8 ${styles.slideRight}`}
          >
            <Image
              role="button"
              onClick={() => onClickProject(hanaAquaCustomer)}
              className="w-12 border-2 rounded-lg border-gray-200 shadow-md shadow-gray-400 mb-8"
              src={HanaAquaMobile}
              width={0}
              height={0}
              alt="Project hana aqua mobile"
            />
            <Image
              role="button"
              onClick={() => onClickProject(hanaAquaDashboard)}
              className="w-1/3 shadow-md shadow-gray-400"
              src={HanaAquaDesktop}
              width={0}
              height={0}
              alt="Project hana aqua desktop"
            />
            <Image
              role="button"
              onClick={() => onClickProject(sociagram)}
              className="w-1/3 mt-12 shadow-md shadow-gray-400"
              src={SociagramDesktopProfile}
              width={0}
              height={0}
              alt="Project sociagram desktop signin"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
