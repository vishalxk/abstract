import styled from "styled-components";
import { ReactComponent as RightArrow } from "../assets/right-arrow.svg";

export default function Search() {
  return (
    <Wrapper>
      <SearchContainer>
        <Label>How can we help?</Label>
        <Input type="search" placeholder="Search" />
        <StyledRightArrow />
      </SearchContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  background-color: var(--lavender);
  padding-inline-start: 96px;
  padding-inline-end: 96px;
  padding-block-start: 80px;
  padding-block-end: 115px;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 720px;
  margin: 0 auto;
  position: relative;
`;

const Label = styled.label`
  font-size: calc((80 / 16) * 1rem);
  letter-spacing: -4px;
`;

const Input = styled.input`
  line-height: 32px;
  padding: 16px 16px;
  width: 100%;
  border: 1px solid transparent;
  border-color: var(--black);
  border-radius: 4px;
  box-shadow: 0 9px 14px 0 hsl(0deg 0% 0% / 10%);
`;

const StyledRightArrow = styled(RightArrow)`
  position: absolute;
  width: 28px;
  right: 15px;
  bottom: -5px;
  transform: translateY(-50%);
  transition: all 0.3s;
`;
