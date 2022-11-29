import styled from "styled-components";
import UseImage from "../assets/use.png";
import AccountImage from "../assets/account.png";
import OrganiseImage from "../assets/organise.png";
import BillingImage from "../assets/billing.png";
import AuthenticateImage from "../assets/authenticate.png";
import SupportImage from "../assets/support.png";
import { ReactComponent as LongRightArrow } from "../assets/long-right-arrow.svg";

export default function Information() {
  return (
    <Wrapper>
      <InformationContainer>
        <Card>
          <Image src={UseImage} />
          <TextContainer>
            <Title>Using Abstract</Title>
            <Text>
              Abstract lets you manage, version, and document your designs in
              one place.
            </Text>
            <Link>
              Learn more
              <StyledLongRightArrow />
            </Link>
          </TextContainer>
        </Card>
        <Card>
          <Image src={AccountImage} />
          <TextContainer>
            <Title>Manage your account</Title>
            <Text>
              Configure your account settings, such as your email, profile
              details, and password.
            </Text>
            <Link>
              Learn more
              <StyledLongRightArrow />
            </Link>
          </TextContainer>
        </Card>
        <Card>
          <Image src={OrganiseImage} />
          <TextContainer>
            <Title>Manage organizations, teams, and projects</Title>
            <Text>
              Use Abstract organizations, teams, and projects to organize your
              people and your work.
            </Text>
            <Link>
              Learn more
              <StyledLongRightArrow />
            </Link>
          </TextContainer>
        </Card>
        <Card>
          <Image src={BillingImage} />
          <TextContainer>
            <Title>Manage billing</Title>
            <Text>Change subscriptions and payment details.</Text>
            <Link>
              Learn more
              <StyledLongRightArrow />
            </Link>
          </TextContainer>
        </Card>
        <Card>
          <Image src={AuthenticateImage} />
          <TextContainer>
            <Title>Authenticate to Abstract</Title>
            <Text>
              Set up and configure SSO, SCIM, and Just-in-Time provisioning.
            </Text>
            <Link>
              Learn more
              <StyledLongRightArrow />
            </Link>
          </TextContainer>
        </Card>
        <Card>
          <Image src={SupportImage} />
          <TextContainer>
            <Title>Abstract support</Title>
            <Text>Get in touch with a human.</Text>
            <Link>
              Learn more
              <StyledLongRightArrow />
            </Link>
          </TextContainer>
        </Card>
      </InformationContainer>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  font-size: 1.5rem;
  padding-inline: 164px;
  padding-block-start: 128px;
  padding-block-end: 84px;
  max-width: 1600px;
  width: 0 auto;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.section`
  display: flex;
  gap: 30px;
  min-height: 115px;
  width: 50%;
  padding-inline-end: 44px;
  padding-block-start: 48px;
  margin-block-end: 48px;
`;

const Image = styled.img`
  max-height: 80px;
  width: auto;
  align-self: flex-start;
`;

const TextContainer = styled.div``;

const Title = styled.h4`
  margin-block-end: 16px;
`;

const Text = styled.p`
  margin-block-end: 20px;
`;

const Link = styled.a`
  font-size: calc((20 / 16) * 1rem);
  color: var(--blue);
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const StyledLongRightArrow = styled(LongRightArrow)`
  width: 20px;
  height: fit-content;
`;
