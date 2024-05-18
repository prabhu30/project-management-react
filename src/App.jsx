import { useState } from "react";
import { Sidebar, Project } from "./components/index";

function App() {
  const [projects, setProjects] = useState([]);
  const [showProjectIndex, setShowProjectIndex] = useState(null);

  function handleCreateProject(projectDetails) {
    console.log(projectDetails);
    setProjects((prevProjects) => [
      ...prevProjects,
      {
        title: projectDetails.title,
        description: projectDetails.description,
        date: projectDetails.date,
      },
    ]);
  }

  function handleShowProject(projectIndex) {
    console.log("Showing Project - ", projectIndex);
    setShowProjectIndex(projectIndex);
  }

  return (
    <>
      <main className="h-screen flex gap-8">
        <Sidebar projects={projects} onShowProject={handleShowProject} />
        <Project
          projects={projects}
          onCreate={handleCreateProject}
          showProjectIndex={showProjectIndex}
        />
      </main>
    </>
  );
}

export default App;
