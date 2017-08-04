const formatBalance = (input) => {
  const formattedInput = String(parseInt(Math.round(parseFloat(input)), 10));

  return formattedInput.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
};

export default formatBalance;
