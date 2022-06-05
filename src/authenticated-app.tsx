import React from "react";
import styled from "@emotion/styled";
import ProjectList from "screens/project-list";
import { Row } from "components/lib";

const Container = styled.div`
display: grid;
grid-template-rows: 6rem 1fr 6rem;
grid-template-columns: 20rem 1fr 20rem;
grid-template-areas: 
"header header header"
"main main main";
height: 100vh;
grid-gap: 1rem;
`
const Header = styled(Row)`
grid-area: header;
flex-direction: row;
`
const HeaderLeft = styled(Row)``
const HeaderRight = styled.div``

// const Nav = styled.nav`
// grid-area: nav;
// `
const Main = styled.main`
grid-area: main;
`
// const Aside = styled.aside`
// grid-area: aside;
// `
// const Footer = styled.footer`
// grid-area: footer;
// `

// const PageHeader = styled.header`
// 	height: 6rem;
// `

// const Main = styled.main`
// 	height: calc(100vh - 6rem);
// `

export const AuthenticatedApp = () => {
	return (
		<Container>
			<Header between={false}>
				<HeaderLeft gap={true}>
					<h3>Logo</h3>
					<h3>項目</h3>
					<h3>用戶</h3>
				</HeaderLeft>
				<HeaderRight>
					<button>登出</button>
				</HeaderRight>
			</Header>
			{/* <Nav>Nav</Nav> */}
			<Main>
				<ProjectList />
			</Main>
			{/* <Aside>aside</Aside>
		<Footer>Footer</Footer> */}
		</Container>
	)
}