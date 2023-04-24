import type {NextComponentType, NextPageContext} from "next";
import ProgressBar from "@ramonak/react-progress-bar";
import {useEffect, useState} from "react";
import Head from "next/head";

interface Props {}

const Skills: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const masterSkills = {
    columnOne: [
      {label: "Front End", value: 82.5},
      {label: "Web Development", value: 85},
      {label: "Programming", value: 85},
      {label: "Database", value: 75},
    ],
    columnTwo: [
      {label: "Back End", value: 78},
      {label: "Mobile Development", value: 80},
      {label: "App Design", value: 60},
      {label: "Cloud", value: 70},
    ],
  };
  const emptyMasterSkills = {
    columnOne: [
      {label: "Front End", value: 0},
      {label: "Web Development", value: 0},
      {label: "Programming", value: 0},
      {label: "Database", value: 0},
    ],
    columnTwo: [
      {label: "Back End", value: 0},
      {label: "Mobile Development", value: 0},
      {label: "App Design", value: 0},
      {label: "Cloud", value: 0},
    ],
  };
  const [skills, setSkills] = useState({...masterSkills});

  useEffect(() => {
    if (skills?.columnOne[0]?.value > 0) {
      const interval = setInterval(
        () => setSkills({...emptyMasterSkills}),
        6000
      );
      return () => {
        clearInterval(interval);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (skills?.columnOne[0]?.value === 0) {
      const interval = setInterval(() => setSkills({...masterSkills}), 2000);
      return () => {
        clearInterval(interval);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skills]);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <Head>
        <meta
          name="description"
          content="Contact Tondiki Andika for furhter information or any services needed"
        />
        <meta property="og:title" content="Contact Tondiki Andika" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-11/12 md:w-5/6 lg:w-3/4 md:h-2/3 bg-black flex flex-col justify-center items-center mt-12 rounded-3xl p-4 md:p-12">
        <strong className="text-4xl md:text-5xl text-white mb-4 md:mb-16">
          Skills
        </strong>
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex flex-col w-full md:w-1/2 md:pr-8">
            {skills.columnOne.map(
              (e: {label: string; value: number}, idx: number) => (
                <div
                  className="flex flex-row w-full items-center mb-8"
                  key={idx + 1}
                >
                  <ProgressBar
                    className="w-7/12"
                    completed={e?.value}
                    transitionDuration={"2s"}
                    animateOnRender={true}
                    labelColor="#6a1b9a"
                  />
                  <label className="text-white text-sm lg:text-base w-5/12 ml-2">
                    {e?.label?.toUpperCase()}
                  </label>
                </div>
              )
            )}
          </div>
          <div className="flex flex-col justify-end w-full md:w-1/2 md:pl-8">
            {skills.columnTwo.map(
              (e: {label: string; value: number}, idx: number) => (
                <div
                  className="flex flex-row w-full items-center mb-8"
                  key={idx + 1}
                >
                  <ProgressBar
                    className="w-7/12"
                    completed={e?.value}
                    transitionDuration={"2s"}
                    animateOnRender={true}
                    labelColor="#6a1b9a"
                  />
                  <label className="text-white text-sm lg:text-base w-5/12 ml-2">
                    {e?.label?.toUpperCase()}
                  </label>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
