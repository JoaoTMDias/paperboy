/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import wrapWithProvider from './wrap-with-provider'
export const wrapRootElement = wrapWithProvider

export const onClientEntry = async () => {
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`);
  }
}

export const onServiceWorkerUpdateFound = () => {
  const answer = window.confirm(
    `Paperboy has been updated.` + `Reload to display the latest version?`
  );

  if(answer === true){
    window.location.reload();
  }
}
