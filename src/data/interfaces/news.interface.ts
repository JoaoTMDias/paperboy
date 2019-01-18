export interface ILatestNews {
  status: string;
  totalResults: number;
  articles: ILatestNewsArticle[];
}

export interface ILatestNewsArticle {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface Source {
  id: string | null;
  name: string;
}
