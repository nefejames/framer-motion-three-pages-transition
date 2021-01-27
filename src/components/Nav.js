import {Link} from 'react-router-dom'
import {NavBox, LinkBox, LinkItem} from "../Styles";

const Nav = () => {
  return (
    <NavBox>
      <LinkBox>
        <LinkItem> <Link to="/">Home</Link> </LinkItem>
        <LinkItem> <Link to="/about">About</Link> </LinkItem>
        <LinkItem> <Link to="/services">Services</Link> </LinkItem>
      </LinkBox>
    </NavBox>
  )
}

export default Nav
