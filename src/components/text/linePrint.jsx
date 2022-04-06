import { useState, useEffect } from 'react';

const LinePrint = (props) => {
  const [displayText, setDisplayText] = useState('');

  let desiredContent = '';
  let currentContent = '';

  useEffect(() => {
    let printTimer = setInterval(() => {
      let nextChar = props.content[currentContent.length];
      setDisplayText(currentContent + nextChar);
      currentContent += nextChar;
      if (currentContent === props.content) {
        clearInterval(printTimer);
        console.log('cleared!');
      }
    }, 100);

    return () => {
      clearInterval(printTimer);
    };
  }, []);

  return <span>&gt; {displayText}</span>;
};

export default LinePrint;
