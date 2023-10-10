import React from 'react';
import Container from 'components/ui/layout/Container';
import Card from 'components/card/Card';
import { getProjectData } from 'shared/graphql/queries/getProjectData';

const Projects = () => {
  //Get meta data
  const data = getProjectData();
  const cards = data.projects.map((p) => (
    <Card
      thumbnail={p.frontmatter.thumb.childImageSharp.gatsbyImageData}
      videoSrc=""
      title={p.frontmatter.title}
      summary={p.frontmatter.title}
    />
  ));

  return (
    <section className="bg-slate-100">
      <Container>
        <div>Projects</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cards}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
