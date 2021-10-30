import React from "react";
import styled from "styled-components";
import HoverVideoPlayer from "react-hover-video-player";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <ViewerItem
          imgSrc="/images/viewers-disney.png"
          videoSrc="/videos/disney.mp4"
        />
      </Wrap>

      <Wrap>
      <ViewerItem
          imgSrc="/images/viewers-pixar.png"
          videoSrc="/videos/pixar.mp4"
        />
      </Wrap>

      <Wrap>
      <ViewerItem
          imgSrc="/images/viewers-marvel.png"
          videoSrc="/videos/marvel.mp4"
        />
      </Wrap>

      <Wrap>
      <ViewerItem
          imgSrc="/images/viewers-starwars.png"
          videoSrc="/videos/starwars.mp4"
        />
      </Wrap>

      <Wrap>
      <ViewerItem
          imgSrc="/images/viewers-national.png"
          videoSrc="/videos/national.mp4"
        />
      </Wrap>
    </Container>
  );
}

export default Viewers;

function ViewerItem({ videoSrc, imgSrc }) {

    const overlay = (<img
        src={imgSrc}
        alt=""
        style={{
          // Make the image expand to cover the video's dimensions
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />);
  return (
    <HoverVideoPlayer
      videoSrc={videoSrc}
        videoClassName="video-player"
      pausedOverlay={overlay}
      // hoverOverlay={overlay}
      overlayTransitionDuration="1000000"

      loadingOverlay={
        <div className="loading-overlay">
          <div className="loading-spinner" />
        </div>
      }
    />
  );
}

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0 26px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;

  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  /* img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  } */

  .video-player{
      opacity: 0;
      border-radius: 10px;

      &:hover{
          opacity: 100%;
          transform: scale(1.05);
      }
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
      rgb(0 0 0 / 73%) 0 30px 22px -10px;
  }
`;
