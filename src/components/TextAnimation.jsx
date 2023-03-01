import { TypeAnimation } from "react-type-animation";

export const Animation = () => {
  return (
    <TypeAnimation
      sequence={[
        "in 9 languages",
        3000,
        "30 sec audio",
        3000,
        "with context",
        3000,
        () => {
          console.log("Done typing!");
        },
      ]}
      speed={5}
      deletionSpeed={5}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
    />
  );
};
