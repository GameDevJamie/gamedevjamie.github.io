import React from "react";
import Icon, { IconType } from "components/ui/display/Icon";

//bg-paper, shadow-elevate

type Props = {
  icons: IconType[];
  title: string;
  description: string;
};

const SkillBox = ({ icons, title, description }: Props) => {
  const iconsMap = icons.map((i) => {
    return <Icon icon={i} fontSize="lg" defaultColor />;
  });

  return (
    <div className="bg-paper rounded-lg shadow-elevate p-5 flex flex-col justify-start items-center w-full h-full overflow-hidden">
      <div className="flex flex-row justify-center items-center [&>*:not(:last-child)]:mr-1 flex-wrap lg:flex-nowrap">
        {iconsMap}
      </div>
      <div>
        <h3 className="text-base font-bold">{title}</h3>
      </div>
      <div>
        <p className="text-sm text-center text-muted">{description}</p>
      </div>
    </div>
  );
};

/*
const SkillBox = ({ icon, title }: Props) => {
  return (
    <div className="bg-paper shadow-elevate p-5 flex flex-col justify-center items-center rounded-xl max-w-[90px] max-h-[90px]">
      <div className="mb-2">
        <Icon icon={icon} defaultColor fontSize="lg" />
      </div>
      <div>{title}</div>
    </div>
  );
};*/

export default SkillBox;
