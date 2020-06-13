// Libraries
import * as React from "react";
import styled from "styled-components";

// Component Props
interface IIconBrandingSmallProps {}

/**
 * @description Dialog Icon: Branding Small

 * @date  09/December/2018 at 16:22
 * @extends {React.FC}
 */
export const IconBrandingSmall: React.FunctionComponent<IIconBrandingSmallProps> = (props) => (
	<Icon
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 166.32 32"
		aria-labelledby="branding-small-icon-title"
		tabIndex={-1}
	>
		<defs>
			<linearGradient
				id="a"
				x1="-71.87"
				x2="-71.87"
				y1="42.25"
				y2="41.67"
				gradientTransform="matrix(55 0 0 -55 3969 2324)"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#f5836f" />
				<stop offset="1" stopColor="#e74c3c" />
			</linearGradient>
		</defs>
		<title id="branding-small-icon-title">Dialog Icon: Branding Small</title>
		<rect width="32" height="32" x="67.16" fill="url(#a)" rx="4" />
		<path
			fill="#fff"
			fillRule="evenodd"
			d="M75.36 7.5A2.31 2.31 0 0 0 73 9.84v4.67a2.26 2.26 0 0 0 .67 1.65 2.28 2.28 0 0 0 1.65.68h2.72a1.09 1.09 0 0 1 .82.34 1.12 1.12 0 0 1 .34.83v.39a3 3 0 0 1-.91 2.2 3 3 0 0 1-2.19.91h-.78a.79.79 0 0 0-.77.78v1.56a.79.79 0 0 0 .77.77h.78a6 6 0 0 0 2.41-.49 6.33 6.33 0 0 0 2-1.33 6.26 6.26 0 0 0 1.33-2 6.18 6.18 0 0 0 .49-2.41V9.83A2.32 2.32 0 0 0 80 7.5zm10.89-.06a2.32 2.32 0 0 0-2.34 2.34v4.69a2.32 2.32 0 0 0 2.34 2.34H89a1.17 1.17 0 0 1 .83.34 1.13 1.13 0 0 1 .34.83v.39a3 3 0 0 1-.92 2.21 3 3 0 0 1-2.2.92h-.79a.79.79 0 0 0-.78.78v1.56a.76.76 0 0 0 .23.55.74.74 0 0 0 .55.23H87a6.27 6.27 0 0 0 6.25-6.25V9.78a2.34 2.34 0 0 0-2.35-2.34z"
		/>
		<path
			className="icon-left-far"
			fill="#faf9f8"
			fillRule="evenodd"
			d="M0 0h15.16a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H.09"
		/>
		<rect className="icon-left" width="32" height="32" x="27.16" fill="#f0ecec" rx="4" />
		<path
			className="icon-right-far"
			fill="#faf9f8"
			fillRule="evenodd"
			d="M166.32 32h-15.15a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h15.08"
		/>
		<rect
			className="icon-right"
			width="32"
			height="32"
			x="107.17"
			fill="#f0ecec"
			rx="4"
			transform="rotate(180 123.175 16)"
		/>
	</Icon>
);

// Styling´
const Icon = styled.svg`
	width: 100%;
	height: 100%;

	html[data-theme="DARK"] & {
		.icon {
			&-left,
			&-right  {
				fill: var(--color-gray8);

				&-far {
					fill: var(--color-gray9);
				}
			}
		}
	}
`;

export default IconBrandingSmall;
