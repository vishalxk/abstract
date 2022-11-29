import styled from "styled-components";
import { ReactComponent as AbstractLogo } from "../assets/abstract-logo.svg";
import { ReactComponent as VerticalSeparator } from "../assets/vertical-separator.svg";

export default function Navigation() {
  return (
    <Wrapper>
      <LeftAlign>
        <StyledAbstractLogo />
        <CompanyName>Abstract</CompanyName>
        <StyledVerticalSeparator />
        <HelpCenter>Help Center</HelpCenter>
      </LeftAlign>
      <RightAlign>
        <RequestButton>Submit a request</RequestButton>
        <SignInButton>Sign in</SignInButton>
      </RightAlign>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  background-color: var(--black);
  font-size: 1.5rem;
  color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 96px;
`;

const LeftAlign = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StyledAbstractLogo = styled(AbstractLogo)`
  height: 32px;
  width: auto;
`;

const CompanyName = styled.h2`
  font-size: 1.5rem;
  font-weight: var(--semi-bold);
  align-self: baseline;
  margin-inline-start: -8px;
`;

const StyledVerticalSeparator = styled(VerticalSeparator)`
  height: 2rem;
  width: fit-content;
`;

const HelpCenter = styled.p`
  align-self: baseline;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const RightAlign = styled.div`
  display: flex;
  gap: 16px;
`;

const RequestButton = styled.button`
  background: var(--dark-grey);
  color: inherit;
  border: 1px solid var(--white);
  border-radius: 8px;
  cursor: pointer;
  outline: inherit;
  padding: 6px 32px;
`;

const SignInButton = styled.button`
  background: var(--blue);
  color: inherit;
  border: 1.5px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  outline: inherit;
  padding: 6px 32px;
  transition: all 0.3s;

  &:hover {
    background: var(--white);
    color: var(--black);
    transition: all 0.3s;
  }
`;
