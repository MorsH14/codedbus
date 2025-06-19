"use client";

import styled from "@emotion/styled";

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  /* max-width: 900px; */
  margin: 4rem auto;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
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
