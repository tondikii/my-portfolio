import type {NextComponentType, NextPageContext} from "next";
import ProgressBar from "@ramonak/react-progress-bar";
import {useEffect, useState} from "react";

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
      <div className="w-3/4 h-2/3 bg-black flex flex-col justify-center items-center mt-12 rounded-3xl p-12">
        <strong className="text-5xl text-white mb-16">Skills</strong>
        <div className="flex flex-row w-full">
          <div className="flex flex-col w-1/2 pr-8">
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
                  <label className="text-white w-5/12 ml-2">
                    {e?.label?.toUpperCase()}
                  </label>
                </div>
              )
            )}
          </div>
          <div className="flex flex-col justify-end w-1/2 pl-8">
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
                  <label className="text-white w-5/12 ml-2">
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
