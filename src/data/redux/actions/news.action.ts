// Constants
import { GET_ALL_AVAILABLE_NEWS_SOURCES, GET_LATEST_NEWS } from "../../constants/index";

// Services
import NewsService from "../../services/news.service";

/**
 * @description Retrieves a list of all the available news sources
 * @date 2018-12-29
 * @param {*} source
 * @returns
 */
const getAllAvailableNewsSources = () => {
  function AvailableNewsSources(data: any) {
    const general = data.sources.filter((source: any) => source.category === "general");
    const business = data.sources.filter((source: any) => source.category === "business");
    const entertainment = data.sources.filter((source: any) => source.category === "entertainment");
    const health = data.sources.filter((source: any) => source.category === "health");
    const science = data.sources.filter((source: any) => source.category === "science");
    const sports = data.sources.filter((source: any) => source.category === "sports");
    const technology = data.sources.filter((source: any) => source.category === "technology");

    return {
      type: GET_ALL_AVAILABLE_NEWS_SOURCES,
      sources: {
        data,
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

  return (dispatch: any) => {
    NewsService.getAllAvailableSources()
      .then((result) => {
        if (result.data) {
          dispatch(AvailableNewsSources(result.data));
        }
      })
      .catch((error) => {});
  };
};

const getAvailableNewSourcesFromLanguage = (language: string) => (dispatch: any) => {
  const AvailableNewsSources = (data: any) => {
    console.log("data: ", data);
  };

  NewsService.getAvailableSourcesFromLanguage(language)
    .then((result) => {
      if (result.data) {
        dispatch(AvailableNewsSources(result.data));
      }
    })
    .catch((error) => {});
};

/**
 * @description Fetch a list of all the latest news from a specific news outlet.
 * @date 2018-12-29
 * @param {*} source
 * @returns
 */
const getAllLatestNewsFromSource = (source: any) => {
  function LatestNewsList(news: any) {
    return {
      type: GET_LATEST_NEWS,
      latest: news,
    };
  }

  return (dispatch: any) => {
    NewsService.getAllLatestNews(source)
      .then((result) => {
        if (result.data) {
          dispatch(LatestNewsList(result.data));
        }
      })
      .catch((error) => {});
  };
};

export {
  getAllAvailableNewsSources,
  getAvailableNewSourcesFromLanguage,
  getAllLatestNewsFromSource,
};
