"use client";

import styled from "@emotion/styled";

const VideoWrapper = styled.div`
  position: relative;
  width: 70%;
  /* max-width: 900px; */
  margin: 4rem auto;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */

  @media screen and (max-width: 700px){
    width: 95%;
  }
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60%;
  border: none;

  @media screen and (max-width: 700px){
    height: auto;
  }
`;

export default function CodedbusVideo() {
  return (
    <VideoWrapper>
      <Iframe
        src="https://www.youtube.com/embed/y3KKGKhV3yA"
        title="Codedbus Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoWrapper>
  );
}
