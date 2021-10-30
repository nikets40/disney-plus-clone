import React from "react";
import Controls from "../components/Controls";
import styled from "styled-components";
import Header from "../components/Header";
import { useRouter, Router } from "next/router";

function Detail() {
  const BASE_IMG_URL = "https://image.tmdb.org/t/p/original";
  const router = useRouter();

  const movie = JSON.parse(router.query.movie);
  console.log(movie);

  const bgImgUrl = BASE_IMG_URL + movie.backdrop_path;

  const imageTitle = "";

  const subTitle = "2018 | 7 min | Family, Fantasy, Kids, Animation";
  const description = movie.overview;
  return (
    <div>
      <Header />
      <Container>
        <Background>
          <img alt="" src={bgImgUrl} />
        </Background>

        <BottomSection>
          <h1>{movie.title}</h1>

          <Controls />

          <SubTitle>{subTitle}</SubTitle>

          <Description>{description}</Description>
        </BottomSection>
      </Container>
    </div>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const BottomSection = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10vh calc(3.5vw + 5px) 5vh;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  margin-top: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 760px;
`;
