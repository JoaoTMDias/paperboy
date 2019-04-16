import { css } from 'styled-components';

export const flexRow = ({
	direction = 'row',
	justifyContent = 'center',
	alignItems = 'center',
} = {}) => css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
`;

export default flexRow;
