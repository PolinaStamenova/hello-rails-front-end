const getRandomMessage = async () => {
  const response = await fetch('https://frozen-inlet-25239.herokuapp.com/');

  return response.json();
};

export default getRandomMessage;
