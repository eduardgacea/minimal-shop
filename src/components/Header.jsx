import { Link } from "react-router-dom";

import styled from "styled-components";
import Button from "../ui/Button";

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: lightpink;
	padding: 1rem 4rem;
`;

const Logo = styled.h1`
	font-size: 3rem;
	letter-spacing: 0.25rem;
	font-weight: 400;
	user-select: none;
`;

const Actions = styled.ul`
	display: flex;
	gap: 1rem;
`;

const StyledLink = styled(Link)`
	color: black;
	text-decoration: none;
`;

function Header() {
	return (
		<StyledHeader>
			<StyledLink to="/">
				<Logo>Minimal Shop</Logo>
			</StyledLink>
			<Actions>
				<StyledLink to="/products">
					<Button>Shop</Button>
				</StyledLink>
				<StyledLink to="/cart">
					<Button>Cart</Button>
				</StyledLink>
				<StyledLink to="wishlist">
					<Button>Wishlist</Button>
				</StyledLink>
			</Actions>
		</StyledHeader>
	);
}

export default Header;
