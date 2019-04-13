import { css } from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../constants';

/* 
  Usage: within styled components, you can provide responsive media queries like

  const Banner = styled.div`
    font-size: 30px;
    ${media.down.tablet`
      font-size: 24px;
    `}
  `
*/

// iterate through the sizes and create a media template
const media = minmax =>
  Object.keys(DEVICE_BREAKPOINTS).reduce((accumulator, label) => {
    // use rem in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = DEVICE_BREAKPOINTS[label] / 16;
    accumulator[label] = (...args) => css`
    @media (${minmax}-width: ${emSize}rem) {
      ${css(...args)};
    }
  `;
    return accumulator;
  }, {});

export default {
  up: media('min'),
  down: media('max')
};
