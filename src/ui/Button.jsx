import styled from "styled-components";

const StyledButton = styled.button`
	font-family: inherit;
	font-size: 1rem;
	font-weight: 500;
	letter-spacing: 0.1rem;
	padding: 0.5rem 0.75rem;
	border: none;
	border-radius: 8px;
	user-select: none;
	transition: all 0.3s;
	cursor: pointer;

	${(props) => props.$extraStyles}

	&:hover {
		color: white;
		background-color: darkred;
	}
`;

function Button({ onClick, children, styles }) {
	return (
		<StyledButton $extraStyles={styles} onClick={onClick}>
			{children}
		</StyledButton>
	);
}

export default Button;
