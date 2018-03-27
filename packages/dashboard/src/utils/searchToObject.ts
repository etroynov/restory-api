const searchToObject = (search) => {
  return search.substring(1).split('&').reduce((result, value) => {
    const parts = value.split('=');

    if (parts[0]) result[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);

    return result;
  }, {});
};

export default searchToObject;
