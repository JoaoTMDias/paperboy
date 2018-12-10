import { GET_LATEST_NEWS, GET_ALL_AVAILABLE_NEWS_SOURCES } from '../../constants/index';
import NewsService from '../../services/news-service';

const getAllAvailableNewsSources = () => {
  function AvailableNewsSources(sources) {
    const available = sources;
    const general = sources.sources.filter(source => source.category === 'general');
    const business = sources.sources.filter(source => source.category === 'business');
    const entertainment = sources.sources.filter(
      source => source.category === 'entertainment',
    );
    const health = sources.sources.filter(source => source.category === 'health');
    const science = sources.sources.filter(source => source.category === 'science');
    const sports = sources.sources.filter(source => source.category === 'sports');
    const technology = sources.sources.filter(source => source.category === 'technology');

    return {
      type: GET_ALL_AVAILABLE_NEWS_SOURCES,
      sources: {
        available,
        general,
        business,
        entertainment,
        health,
        science,
        sports,
        technology,
      },
    };
  }

  return (dispatch) => {
    NewsService.getAllAvailableSources()
      .then((result) => {
        if (result.data) {
          dispatch(AvailableNewsSources(result.data));
        }
      })
      .catch((error) => {
        console.log(error.stack);
      });
  };
};

const getAllLatestNewsFromSource = (source) => {
  function LatestNewsList(news) {
    return {
      type: GET_LATEST_NEWS,
      latest: news,
    };
  }

  return (dispatch) => {
    NewsService.getAllLatestNews(source)
      .then((result) => {
        if (result.data) {
          console.log('data: ', result.data);
          dispatch(LatestNewsList(result.data));
        }
      })
      .catch((error) => {
        console.log(error.stack);
      });
  };
};

export {
  getAllAvailableNewsSources,
  getAllLatestNewsFromSource,
};
