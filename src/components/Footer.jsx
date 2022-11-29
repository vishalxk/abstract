import styled from "styled-components";
import { ReactComponent as AbstractLogo } from "../assets/abstract-logo.svg";

export default function Footer() {
  return (
    <Wrapper>
      <FooterContainer>
        <Column>
          <Title>Abstract</Title>
          <Links>
            <Link>Start Trial</Link>
            <Link>Pricing</Link>
            <Link>Download</Link>
          </Links>
        </Column>
        <Column>
          <Title>Resources</Title>
          <Links>
            <Link>Blog</Link>
            <Link>Help Center</Link>
            <Link>Release Notes</Link>
            <Link>Status</Link>
          </Links>
        </Column>
        <Column>
          <Title>Community</Title>
          <Links>
            <Link>Twitter</Link>
            <Link>LinkedIn</Link>
            <Link>Facebook</Link>
            <Link>Dribbble</Link>
            <Link>Podcast</Link>
          </Links>
        </Column>
        <Column>
          <Title>Company</Title>
          <Links>
            <Link>About Us</Link>
            <Link>Careers</Link>
            <Link>Legal</Link>
          </Links>
          <Contact>Contact Us</Contact>
          <Email>info@abstract.com</Email>
        </Column>
        <Copyright>
          <StyledAbstractLogo />
          <RegisteredName>
            © Copyright 2022
            <br />
            Abstract Studio Design, Inc.
            <br />
            All rights reserved
            <br />
          </RegisteredName>
        </Copyright>
      </FooterContainer>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background-color: var(--black);
  color: var(--white);
  padding-inline: 30px;
  padding-block-end: 60px;
`;

const FooterContainer = styled.div`
  display: flex;
  padding-block-end: 100px;
  margin: 0 auto;
  width: 90%;
  max-width: 1900px;
  position: relative;
`;

const Column = styled.section`
  padding-block-start: 48px;
  width: 20%;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-block-end: 16px;
`;

const Links = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
`;

const Link = styled.li`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Contact = styled.p`
  font-weight: var(--bold);
  margin-block-start: 30px;
`;

const Email = styled.p`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Copyright = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
`;

const StyledAbstractLogo = styled(AbstractLogo)`
  margin-block-end: 20px;
  height: 44px;
  max-width: auto;
`;

const RegisteredName = styled.p``;
