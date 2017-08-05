const normilizeDateItem = (item) => {
  return (item < 10) ? `0${item}` : item;
};

const formatUNIXTimestamp = (timestamp, time = false) => {
  const date = new Date(timestamp * 1000);

  const year = date.getFullYear();
  const day = normilizeDateItem(date.getDate());
  const month = normilizeDateItem(date.getMonth() + 1);

  const hours = normilizeDateItem(date.getHours());
  const minutes = normilizeDateItem(date.getMinutes());

  return (time)
    ? `${day}.${month}.${year} | ${hours}:${minutes}`
    : `${day}.${month}.${year}`;
};

export default formatUNIXTimestamp;
