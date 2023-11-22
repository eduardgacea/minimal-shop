import { Outlet } from "react-router";

import styled from "styled-components";
import Header from "../components/Header";

const Main = styled.main`
	padding: 1rem 4rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

function Layout() {
	return (
		<>
			<Header />
			<Main>
				<Outlet />
			</Main>
		</>
	);
}

export default Layout;
