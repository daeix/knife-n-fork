import React from "react"
import Pages from "./pages/Pages"
import Category from "./components/Category"
import { BrowserRouter } from "react-router-dom"
import Search from "./components/Search"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { GiKnifeFork } from "react-icons/gi"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>Knife&Fork </Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5 rem;
  font-weight: 500;
  font-family: "Lobster Two", cursive;
  font-style: italic;
`
const Nav = styled.div`
  padding: 3rem 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`
