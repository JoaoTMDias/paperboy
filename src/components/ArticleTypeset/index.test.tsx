import * as React from "react";
import { render } from "@testing-library/react";
import { ArticleTypeset } from "./index";
import Provider from "../../../wrap-with-provider";

describe("<ArticleTypeset />", () => {
	test("renders", () => {
		const wrapper = render(<Provider element={<ArticleTypeset />} />);
		expect(wrapper).toMatchSnapshot();
	});
});
