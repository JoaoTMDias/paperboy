// Libraries
import { distanceInWordsToNow } from "date-fns";
import { Link } from "gatsby";
import { rem } from "polished";
import * as React from "react";
import styled from "styled-components";

import {
  ILatestNews,
  ILatestNewsArticle,
} from "../../../data/interfaces/index.interface";

// Component Props
interface IThumbnailLargeProps {
  theme?: any;
  id: number;
  options: ILatestNewsArticle;
}

/**
 * @description Article Thumbnail: Large
 * @author  João Dias
 * @date  17/January/2019 at 00:05
 * @extends {React.SFC}
 */
const ThumbnailLarge: React.FunctionComponent<IThumbnailLargeProps> = props => {
  const { id } = props;
  const { title, urlToImage, url, source, publishedAt } = props.options;

  const time: string = `${distanceInWordsToNow(publishedAt)} ago`;

  switch (source.name) {
    case "CNN":
    case "BBC News":
      return (
        <Anchor
          to="/news/detail/"
          aria-labelledby={`thumbnail__title--${id}`}
          tabIndex={0}
          state={props.options}
        >
          <Article>
            <Image
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 75%), url(${urlToImage})`,
              }}
            />
            <Copy>
              <h2 id={`thumbnail__title--${id}`} className="thumbnail__title">
                {title}
              </h2>
              <div className="thumbnail__metadata">
                <h3 className="thumbnail__metadata__source">{source.name}</h3>
                <time className="thumbnail__metadata__time">{time}</time>
              </div>
            </Copy>
          </Article>
        </Anchor>
      );

    default:
      return (
        <ExternalAnchor
          href={url}
          target="_blank"
          aria-labelledby={`thumbnail__title--${id}`}
          tabIndex={0}
        >
          <Article>
            <Image
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 75%), url(${urlToImage})`,
              }}
            />
            <Copy>
              <h2 id={`thumbnail__title--${id}`} className="thumbnail__title">
                {title}
              </h2>
              <div className="thumbnail__metadata">
                <h3 className="thumbnail__metadata__source">{source.name}</h3>
                <time className="thumbnail__metadata__time">{time}</time>
              </div>
            </Copy>
          </Article>
        </ExternalAnchor>
      );
  }
};

// Styling
const Anchor = styled(Link)`
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--color-gray1);
  padding: 0;
  position: relative;
  overflow: hidden;

  &:hover,
  &:focus {
    transform: scale(1);
  }
`;

const ExternalAnchor = styled.a`
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--color-gray1);
  padding: 0;
  position: relative;
  overflow: hidden;

  &:hover,
  &:focus {
    transform: scale(1);
  }
`;

const Article = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background-color: var(--color-gray1);
  padding: var(--global-padding) 2rem var(--global-padding)
    var(--global-padding);
  margin: 0;
  position: relative;
  overflow: hidden;
`;

const Image = styled.figure`
  background-repeat: none;
  background-size: cover;
  background-attachment: scroll;
  background-color: var(--color-gray1);

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  margin: 0;
  padding: 0;
`;

const Copy = styled.div`
  --number-of-lines: 3;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;

  .thumbnail {
    &__title {
      width: 100%;
      font-family: var(--body-font-family);
      font-size: ${rem("20px")};
      color: var(--color-white);
      letter-spacing: 0;
      text-align: left;
      line-height: ${rem("28px")};
      margin-bottom: var(--global-margin);

      overflow: hidden;
      text-overflow: -o-ellipsis-lastline;
      text-overflow: ellipsis;
      display: flex;
      /* autoprefixer: off */
      display: -webkit-box;
      -webkit-line-clamp: var(--number-of-lines);
      -webkit-box-orient: vertical;
      max-height: calc(
        var(--number-of-lines) * var(--global-lineheight) * 1rem
      );
    }

    &__metadata {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      opacity: 0.8;

      &__source,
      &__time {
        color: var(--color-white);
        font-size: ${rem("11px")};
      }

      &__source {
        font-family: var(--heading-font-family);
        letter-spacing: 0;
        margin-bottom: 0;
        text-transform: uppercase;
      }

      &__time {
        font-family: var(--body-font-family);
        text-transform: capitalize;
      }
    }
  }
`;

export default ThumbnailLarge;
