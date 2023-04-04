import type {NextComponentType, NextPageContext} from "next";
import Image from "next/image";
import SelfPhoto from "@/assets/self-photo.png";

interface Props {
  onClickContact: Function;
}

const About: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
  const {onClickContact = () => {}} = props;
  return (
    <div>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="w-5/6 flex flex-row justify-between h-4/5 items-end">
          <div className="flex flex-col mb-32 w-1/3">
            <span className="text-xl">Welcome to my portfolio</span>
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
            className="w-7/12"
            width={0}
            height={0}
          />
        </div>
      </div>
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <strong className="text-4xl font-lexend mb-8">About me</strong>
        <div className="flex flex-row w-5/6 items-center">
          <Image src={SelfPhoto} alt="Self photo" className="w-1/4" />
          <div className="flex flex-col ml-12">
            <p className="font-medium text-xl mb-4">
              Hi! I am Tondiki Andika, an Experienced Web and Mobile Developer.
              Operate features, design, test and maintain web systems.
              Influenced to self-organise, as well as collaborate effectively in
              team settings. Loves challenge that could improve self knowledge
              and skills. Usually manages tools used to create clean,
              lightweight, and effective code
            </p>
            <a
              className="w-1/5 py-4 bg-gray-300 rounded-lg font-lexend mt-2 text-xs text-center"
              href="https://cv-tondikiandika.tiiny.site/"
              target="_blank"
            >
              VIEW RESUME
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
