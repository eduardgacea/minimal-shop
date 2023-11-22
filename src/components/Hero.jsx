import { Link } from "react-router-dom";
import { css } from "styled-components";

import styled from "styled-components";
import Button from "../ui/Button";

const StyledHero = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 3rem;
	margin-top: 6rem;
`;

const Title = styled.h1`
	color: white;
	font-size: 2.5rem;
	font-weight: 900;
	letter-spacing: 0.1rem;
	user-select: none;
`;

const extraButtonStyles = css`
	padding: 0.75rem 1.5rem;
	font-size: 1.5rem;
	font-weight: 700;
`;

function Hero() {
	return (
		<StyledHero>
			<Title>Unleash your superficial consumer self</Title>
			<Link to="/products">
				<Button styles={extraButtonStyles}>Start shopping now!</Button>
			</Link>
		</StyledHero>
	);
}

export default Hero;
