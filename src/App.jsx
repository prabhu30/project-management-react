import { useState } from "react";
import { Sidebar, Project } from "./components/index";

function App() {
  const [projects, setProjects] = useState([]);
  const [showProjectIndex, setShowProjectIndex] = useState(null);

  const [showHomePage, setShowHomePage] = useState(true);
  const [showForm, setShowForm] = useState(false);

  function handleCreateProject(projectDetails) {
    setProjects((prevProjects) => [
      ...prevProjects,
      {
        title: projectDetails.title,
        description: projectDetails.description,
        date: projectDetails.date,
      },
    ]);
  }

  function handleCreateProjectFromSidebar() {
    setShowHomePage(false);
    setShowForm(true);
    setShowProjectIndex(null);
  }

  function handleShowProject(projectIndex) {
    console.log("Showing Project - ", projectIndex);
    setShowProjectIndex(projectIndex);
  }

  return (
    <>
      <main className="h-screen flex gap-8">
        <Sidebar
          projects={projects}
          onCreate={handleCreateProjectFromSidebar}
          onShowProject={handleShowProject}
        />
        <Project
          showForm={showForm}
          showHomePage={showHomePage}
          setShowForm={setShowForm}
          setShowHomePage={setShowHomePage}
          projects={projects}
          onCreate={handleCreateProject}
          showProjectIndex={showProjectIndex}
        />
      </main>
    </>
  );
}

export default App;
