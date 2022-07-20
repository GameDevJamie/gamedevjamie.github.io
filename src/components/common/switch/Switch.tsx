import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Handle } from "./styles";
import { Icon, IconType } from "components/common/icon";

type Props = {
  onToggle: (on: boolean) => void;
  offIcon?: IconType;
  onIcon?: IconType;

  offColor: string;
  onColor: string;
};

const Switch = ({ onToggle, offIcon, onIcon, offColor, onColor }: Props) => {
  const [isOn, setIsOn] = useState(false);
  const handleToggle = (isOn: boolean) => {
    setIsOn(isOn);
    onToggle(isOn);
  };

  return (
    <Container
      data-switchOn={isOn}
      onClick={() => handleToggle(!isOn)}
      style={{ justifyContent: isOn ? "flex-end" : "flex-start" }}
      offColor={offColor}
      onColor={onColor}
    >
      <Handle layout>
        {(offIcon || onIcon) && (
          <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
              key={isOn ? "moon" : "sun"}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOn
                ? onIcon && <Icon icon={IconType.Moon} />
                : offIcon && <Icon icon={IconType.Sun} />}
            </motion.div>
          </AnimatePresence>
        )}
      </Handle>
    </Container>
  );
};

Switch.defaultProps = {
  offColor: "#f88748",
  onColor: "#501a96",
};

export default Switch;
