import { IAllAvailableNewsSource, EAllNewsSourcesCategories } from "../interfaces/index.interface";

const Top20EditorSuggestions: IAllAvailableNewsSource[] = [
	{
		id: 'bbc-news',
		name: 'BBC News',
		description:
			'Use BBC News for up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and regional perspectives. Also entertainment, business, science, technology and health news.',
		url: 'http://www.bbc.co.uk/news',
		category: EAllNewsSourcesCategories.General,
		language: 'en',
		country: 'gb',
	},
	{
		id: 'cnn',
		name: 'CNN',
		description:
			'View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN',
		url: 'http://us.cnn.com',
		category: EAllNewsSourcesCategories.General,
		language: 'en',
		country: 'us',
	},
	{
		id: 'fox-news',
		name: 'Fox News',
		description:
			'Breaking News, Latest News and Current News from FOXNews.com. Breaking news and video. Latest Current News: U.S., World, Entertainment, Health, Business, Technology, Politics, Sports.',
		url: 'http://www.foxnews.com',
		category: EAllNewsSourcesCategories.General,
		language: 'en',
		country: 'us',
	},

	{
		id: 'google-news',
		name: 'Google News',
		description:
			'Comprehensive, up-to-date news coverage, aggregated from sources all over the world by Google News.',
		url: 'https://news.google.com',
		category: EAllNewsSourcesCategories.General,
		language: 'en',
		country: 'us',
	},
	{
		id: 'the-times-of-india',
		name: 'The Times of India',
		description:
			'Times of India brings the Latest News and Top Breaking headlines on Politics and Current Affairs in India and around the World, Sports, Business, Bollywood News and Entertainment, Science, Technology, Health and Fitness news, Cricket and opinions from leading columnists.',
		url: 'http://timesofindia.indiatimes.com',
		category: EAllNewsSourcesCategories.General,
		language: 'en',
		country: 'in',
	},

	{
		id: 'the-new-york-times',
		name: 'The New York Times',
		description:
			'The New York Times: Find breaking news, multimedia, reviews & opinion on Washington, business, sports, movies, travel, books, jobs, education, real estate, cars & more at nytimes.com.',
		url: 'http://www.nytimes.com',
		category: EAllNewsSourcesCategories.General,
		language: 'en',
		country: 'us',
	},
	{
		id: 'the-guardian-uk',
		name: 'The Guardian (UK)',
		description:
			"Latest news, sport, business, comment, analysis and reviews from the Guardian, the world's leading liberal voice.",
		url: 'https://www.theguardian.com/uk',
		category: EAllNewsSourcesCategories.General,
		language: 'en',
		country: 'gb',
	},
	{
		id: 'usa-today',
		name: 'USA Today',
		description:
			'Get the latest national, international, and political news at USATODAY.com.',
		url: 'http://www.usatoday.com/news',
		category: EAllNewsSourcesCategories.General,
		language: 'en',
		country: 'us',
	},
	{
		id: 'the-wall-street-journal',
		name: 'The Wall Street Journal',
		description:
			'WSJ online coverage of breaking news and current headlines from the US and around the world. Top stories, photos, videos, detailed analysis and in-depth reporting.',
		url: 'http://www.wsj.com',
		category: 'business',
		language: 'en',
		country: 'us',
	},
];

export default Top20EditorSuggestions;
