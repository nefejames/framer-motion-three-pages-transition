import styled from "styled-components" 
import { motion } from "framer-motion";

export const PageContainer = styled(motion.div)`
  background: ${(props) => (props.primary? "#4078e3" : "#86f")};
  width: 100vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavBox = styled.nav`
  background: #111;
  padding: 1rem;
  color: white;

  & * {
    color: inherit
  }
`
export const LinkBox = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
`

export const LinkItem = styled.li`
  font-size: 1.4rem;

` 