import React from "react";
import styled from "styled-components";

function Controls() {
  return (
    <Container>
      <PlayButton>
        <img alt="" src="/images/play-icon-black.png" />
        <span> Play</span>
      </PlayButton>

      <TrailerButton>
        <img alt="" src="/images/play-icon-white.png" />
        <span> Trailer</span>
      </TrailerButton>

      <AddButton>
        <span>+</span>
      </AddButton>
      <GroupWatchButton>
        <img alt="" src="/images/group-icon.png" />
      </GroupWatchButton>
    </Container>
  );
}

export default Controls;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  padding: 0 24px;
  margin-right: 22px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  text-transform: uppercase;
  letter-spacing: 1.8px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;
const AddButton = styled.button`
  height: 44px;
  width: 44px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgb(249, 249, 249);
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    font-size: 30px;
    color: rgb(249, 249, 249)
  }
`;
const GroupWatchButton = styled(AddButton)`
background-color: black;
`;
