import { css } from 'styled-components'

/**
 * For the specified media query, returns a tag function that can be used to
 * automatically wrap the tagged template literal in its media query.
 *
 * @param {string} query The string or template literal containing the media
 *   query features.
 */

const mediaQuery = (...query) => (...rules) => css`
    @media ${css(...query)} {
        ${css(...rules)}
    }
`;

const media =  {
    medium: mediaQuery`(min-width: ${640 / 16}rem)`,
    large: mediaQuery`(min-width: ${1024 / 16}rem)`,
    xlarge: mediaQuery`(min-width: ${1200 / 16}rem)`,
    xxlarge: mediaQuery`(min-width: ${1440 / 16}rem)`,
  };

export { mediaQuery, media }