/* eslint-disable quotes, jsx-quotes, no-debugger */

// debugger;
const getRandomMessage = async () => {
  const response = await fetch("httpsfrozen-inlet-25239.herokuapp.com").then(
    (res) => {
      console.log(res);
      res.json();
    },
  );
  return response;
};

export default getRandomMessage;
