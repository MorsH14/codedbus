"use client";

import styled from "@emotion/styled";

const VideoWrapper = styled.div`
  position: relative;
  width: 70%;
  margin: 4rem auto;
  padding-top: 56.25%; 

  @media screen and (max-width: 700px){
    width: 95%;
  }
`;
const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; 
  border: none;

  @media screen and (max-width: 700px){
    height: 100%;
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
