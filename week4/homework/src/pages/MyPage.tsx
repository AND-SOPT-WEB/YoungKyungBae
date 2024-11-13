// src/pages/MyPage.tsx
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Theme } from '../styles/theme';

const MyPage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <MyPageContainer>
            <Header>
                <Container>
                    <Title>마이페이지</Title>
                    <Nav>
                        <StyledNavLink to="/mypage/hobby">취미</StyledNavLink>
                        <StyledNavLink to="/mypage/my-info">내 정보</StyledNavLink>
                    </Nav>
                </Container>
                
                <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
            </Header>
            <Content>
                <Outlet />
            </Content>
        </MyPageContainer>
    );
};

export default MyPage;

const MyPageContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f5f5f5;
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: ${Theme.color.boldPink};
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 7rem;
`

const Title = styled.h1`
    font-size: 1.8rem;
    color: ${Theme.color.white};
`;

const Nav = styled.nav`
    display: flex;
    gap: 1rem;
`;

const StyledNavLink = styled(NavLink)`
    color: #FFE3E3;
    font-size: 1.4rem;
    text-decoration: none;

    &.active {
        color: ${Theme.color.white};
        font-weight: bold;
    }

    &:hover {
        color: ${Theme.color.white};
    }
`;

const LogoutButton = styled.button`
    background: none;
    border: none;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
`;

const Content = styled.main`
    display: flex;
    justify-content: center;
    padding: 2rem;
`;
