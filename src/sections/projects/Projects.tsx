import React from "react";
import Container from "components/ui/layout/Container";
import Card from "components/card/Card";
import t from "src/assets/images/Flappy Bird Thumbnail.png";

const Projects = () => {
  return (
    <section className="bg-slate-100">
      <Container>
        <div>Projects</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card thumbnail={t} videoSrc="" title="Test" summary="Test" />
          <Card thumbnail="" videoSrc="" title="Test" summary="Test" />
          <Card thumbnail="" videoSrc="" title="Test" summary="Test" />
          <Card thumbnail="" videoSrc="" title="Test" summary="Test" />
        </div>
      </Container>
    </section>
  );
};

export default Projects;
