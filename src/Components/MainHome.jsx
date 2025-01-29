import styled from 'styled-components';

function MainHome() {
  return (
    <ProjectsContainer>
      <ProjectCard>Project 1</ProjectCard>
      <ProjectCard>Project 2</ProjectCard>
      <ProjectCard>Project 3</ProjectCard>
      <ProjectCard>Project 4</ProjectCard>
      <ProjectCard>Project 1</ProjectCard>
      <ProjectCard>Project 2</ProjectCard>
      <ProjectCard>Project 3</ProjectCard>
      <ProjectCard>Project 4</ProjectCard>
      <ProjectCard>Project 1</ProjectCard>
      <ProjectCard>Project 2</ProjectCard>
      <ProjectCard>Project 3</ProjectCard>
      <ProjectCard>Project 4</ProjectCard>
      <ProjectCard>Project 1</ProjectCard>
      <ProjectCard>Project 2</ProjectCard>
      <ProjectCard>Project 3</ProjectCard>
      <ProjectCard>Project 4</ProjectCard>
      <ProjectCard>Project 1</ProjectCard>
      <ProjectCard>Project 2</ProjectCard>
      <ProjectCard>Project 3</ProjectCard>
      <ProjectCard>Project 4</ProjectCard>
      <ProjectCard>Project 1</ProjectCard>
      <ProjectCard>Project 2</ProjectCard>
      <ProjectCard>Project 3</ProjectCard>
      <ProjectCard>Project 4</ProjectCard>
      <ProjectCard>Project 1</ProjectCard>
      <ProjectCard>Project 2</ProjectCard>
      <ProjectCard>Project 3</ProjectCard>
      <ProjectCard>Project 4</ProjectCard>
      <ProjectCard>Project 1</ProjectCard>
      <ProjectCard>Project 2</ProjectCard>
      <ProjectCard>Project 3</ProjectCard>
      <ProjectCard>Project 4</ProjectCard>
      <ProjectCard>Project 1</ProjectCard>
      <ProjectCard>Project 2</ProjectCard>
      <ProjectCard>Project 3</ProjectCard>
      <ProjectCard>Project 4</ProjectCard>
      <ProjectCard>Project 1</ProjectCard>
      <ProjectCard>Project 2</ProjectCard>
      <ProjectCard>Project 3</ProjectCard>
      <ProjectCard>Project 4</ProjectCard>

    </ProjectsContainer>
  );
}

export default MainHome;

const ProjectsContainer = styled.div`
  margin-top: 100vh; /* Ensure it starts below the Hero */
  z-index: 2; /* Higher z-index to overlap Hero */
  background-color: #fff; /* Solid background */
  position: relative; /* Make sure it doesn't interfere with fixed Hero */
  padding: 50px;
`;

const ProjectCard = styled.div`
  margin: 10px 0;
  padding: 20px;
  background: #f4f4f4;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;