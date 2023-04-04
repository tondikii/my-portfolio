import type {NextComponentType, NextPageContext} from "next";

interface Props {}

const Projects: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      Projects Page
    </div>
  );
};

export default Projects;
