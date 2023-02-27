import { TypeAnimation } from 'react-type-animation';

export const Animation = () => {
  return (
    <TypeAnimation
      sequence={[
        'in 9 languages', // Types 'One'
        1000, // Waits 1s
        '10-30 second audio', // Deletes 'One' and types 'Two'
        1000, // Waits 2s
        'with context',
        1000, // Types 'Three' without deleting 'Two'
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
    />
  );
};