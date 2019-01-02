import { SET_CHOSEN_NEWS_SOURCES } from '../../constants/index';

const SetChosenNewsSources = (sources) => {
  const quantity = sources.length;
  return {
    type: SET_CHOSEN_NEWS_SOURCES,
    sources: {
      quantity,
      items: sources,
    },
  };
};

export { SetChosenNewsSources };
