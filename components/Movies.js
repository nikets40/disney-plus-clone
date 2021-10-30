import { useRouter } from "next/router";
import styled from "styled-components";

function Movies({ movies }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  console.log(movies);

  const router = useRouter();

  return (
    <Container>
      {Object.entries(movies).map(([key, value]) => {
        if (value.results.length > 0)
          return (
            <div key={key}>
              <h4>{key}</h4>
              <Content>
                {value.results.map((movie) => (
                  <Wrap
                    key={movie.id}
                    onClick={() => {
                      router.push({
                        pathname: "/detail",
                        query: {
                          movie: JSON.stringify(movie),
                        },
                      });
                    }}
                  >
                    <div>
                      <h5>{movie.title}</h5>
                      <p>{movie.overview}</p>
                    </div>
                    <img
                      src={
                        BASE_URL + (movie.backdrop_path || movie.poster_path)
                      }
                      alt=""
                    />
                  </Wrap>
                ))}
              </Content>
            </div>
          );
      })}
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: visible;
`;

const Wrap = styled.div`
  margin: 15px;
  cursor: pointer;
  flex: 0 0 auto;
  border-radius: 10px;
  overflow: visible;
  width: 400px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  /* box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px; */
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  position: relative;

  &:last-child {
    margin-right: 50px;
  }

  img {
    border-radius: 7px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    /* box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
      rgb(0 0 0 / 73%) 0 30px 22px -10px; */
  }

  &:hover div {
    opacity: 1;
  }

  div {
    opacity: 0;
    position: absolute;
    border-end-end-radius: inherit;
    border-end-start-radius: inherit;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    display: flex;
    flex-direction: column;
    padding: 20px 10px 0;

    h5 {
      margin: 0px;
      font-size: large;
    }
    p {
      margin-top: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3; /* number of lines to show */
      -webkit-box-orient: vertical;
    }
  }
`;
