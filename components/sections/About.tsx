import type {NextComponentType, NextPageContext} from "next";
import Image from "next/image";
import SelfPhoto from "@/assets/self-photo.png";
import styles from "@/styles/About.module.css";

interface Props {
  onClickContact: Function;
  renderAnimation: boolean;
}

const About: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
  const {onClickContact = () => {}, renderAnimation} = props;
  return (
    <div>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="w-5/6 flex flex-col md:flex-row justify-between md:h-4/5 items-end">
          <div
            className={`flex flex-col md:mb-32 w-full md:w-1/3 ${styles.slideLeft}`}
          >
            <span className="text-xs lg:text-xl">Welcome to my portfolio</span>
            <strong className="text-4xl font-lexend">
              Hi! I’m a Full-Stack Developer
            </strong>
            <button
              className="w-2/5 py-4 bg-gray-300 rounded-lg font-lexend mt-2 text-xs"
              onClick={() => onClickContact()}
            >
              CONTACT ME
            </button>
          </div>
          <Image
            src="/illustration-developer.svg"
            alt="Illustration developer"
            className={`w-4/5 md:w-7/12 ${styles.slideRight}`}
            width={0}
            height={0}
          />
        </div>
      </div>

      <div className="h-screen w-full flex flex-col justify-center items-center">
        {renderAnimation && (
          <>
            <strong
              className={`text-4xl font-lexend mb-4 md:mb-8 ${styles.slideTop}`}
            >
              About me
            </strong>
            <div className="flex flex-col md:flex-row w-5/6 items-center">
              <Image
                src={SelfPhoto}
                alt="Self photo"
                className={`mb-4 md:mb-0 w-1/2 md:w-1/4 ${styles.slideLeft}`}
              />
              <div className={`flex flex-col md:ml-12 ${styles.slideRight}`}>
                <p className="font-medium text-base text-justify md:text-xl mb-4">
                  Hi! I am Tondiki Andika, an Experienced Web and Mobile
                  Developer. Operate features, design, test and maintain web
                  systems. Influenced to self-organise, as well as collaborate
                  effectively in team settings. Loves challenge that could
                  improve self knowledge and skills. Usually manages tools used
                  to create clean, light, and effective code
                </p>
                <a
                  className="w-2/5 md:w-1/5 py-4 bg-gray-300 rounded-lg font-lexend mt-2 text-xs text-center self-center md:self-start"
                  href="https://cv-tondikiandika.tiiny.site/"
                  target="_blank"
                  role="button"
                >
                  VIEW RESUME
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default About;
