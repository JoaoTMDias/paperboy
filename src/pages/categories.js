import React from 'react';
import { Layout, Container } from '../components/index';

const CategoriesPage = () => (
	<Layout header={false}>
		<Container
			fullwidth
			fullheight
			isFixed={false}
			title="Current Page is: Latest News"
		>
			<p>Categories</p>
		</Container>
	</Layout>
);

export default CategoriesPage;
