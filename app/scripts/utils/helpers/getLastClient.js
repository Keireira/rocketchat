const getLastClient = () => {
  const lastClient = window.localStorage.getItem('lastClient');

  try {
    return (lastClient) ? JSON.parse(lastClient) : {};
  } catch (e) {
    return {};
  }
};

export default getLastClient;
