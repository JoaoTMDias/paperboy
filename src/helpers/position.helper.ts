import { css } from 'styled-components';

const fixed = ({ x = 0, y = 0, yProp = 'top', xProp = 'left' } = {}) => css`
	position: fixed;
	${yProp}: ${y};
	${xProp}: ${x};
`;

const absolute = ({ x = 0, y = 0, yProp = 'top', xProp = 'left' } = {}) => css`
	position: absolute;
	${yProp}: ${y};
	${xProp}: ${x};
`;

export { fixed, absolute };
