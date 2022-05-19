import React, { useEffect, useState } from "react";
import styled from "styled-components";
import About from "./About";
import Skills from "./Skills";
import { animated, useSpring } from "react-spring";

const Main = styled(animated.div)`
  position: relative;
`;
const Section = styled.div`
  position: absolute;
  width: 100%;
`;

type Props = {
  section: string; //Section to display
};

const SectionHandler = ({ section }: Props) => {
  const [parentLeft, setLeft] = useState(0);
  const [showSkills, setShowSkills] = useState(false);
  const [styles, api] = useSpring(() => ({ left: "0%" }));

  useEffect(() => {
    if (section == "about") setLeft(0);
    else if (section == "skills") {
      setLeft(-100);

      //Tell Skills section to start animation. Only perform once
      setShowSkills(true);
    } else if (section == "projects") setLeft(-200);

    //Section not found, do nothing
  }, [section]);

  useEffect(() => {
    //Start animation
    api.start({ left: parentLeft.toString() + "%" });
  }, [parentLeft]);

  return (
    <Main style={styles}>
      <Section style={{ left: 0 }}>
        <About />
      </Section>
      <Section style={{ left: "100%" }}>
        <Skills show={showSkills} />
      </Section>
      <Section style={{ left: "200%" }}>
        <About />
      </Section>
    </Main>
  );
};

/*
const SectionHandler = ({ section }: Props) => {
  const [activeSection, setActiveSection] = useState("about");
  const [show, setShow] = useState(true);

  const transition = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.default,
    onRest: () => setShow(true),
  });

  useEffect(() => {
    if (show) {
      setShow(false);
      setTimeout(() => {
        setActiveSection(section);
      }, 2000);
    }
  }, [section]);

  function getSection(section: string) {
    switch (section) {
      case "about":
        return <About />;
        break;
      case "skills":
        return <Skills />;
        break;
      case "projects":
        return <About />;
        break;
      default:
        return <About />;
        break;
    }
  }

  return transition(
    (styles, item) =>
      !item && (
        <animated.div style={styles}>{getSection(activeSection)}</animated.div>
      )
  );
  //return <>{renderSection(section)}</>;
};*/

export default SectionHandler;
