import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Navbar() {
    return (
        <NavWrapper>
            <Link to="/login">
                <StyledText>Login</StyledText>
            </Link>
            <div></div>
        </NavWrapper>
    )
}

const NavWrapper = styled.div`
    background-color: blue;
    width: 100vw;
    height: 10vh;
` 
const StyledText = styled.p `
    text-decoration: none;
    color: white;
    text-align: center;
`