import { useState } from "react";
import { Home, CreateProjectForm, ProjectDetails } from "./index";

export default function Project({ onCreate, projects, showProjectIndex }) {
  const [showHomePage, setShowHomePage] = useState(true);
  const [showForm, setShowForm] = useState(false);

  function handleCreateProject() {
    setShowHomePage(false);
    setShowForm(true);
  }

  function handleSaveProject(projectDetails) {
    onCreate(projectDetails);
    setShowHomePage(true);
    setShowForm(false);
  }

  const projectDetails = projects[showProjectIndex];

  return (
    <>
      {showHomePage && showProjectIndex == null && (
        <Home onCreateProject={handleCreateProject} />
      )}
      {showForm && showProjectIndex == null && (
        <CreateProjectForm onSaveProject={handleSaveProject} />
      )}
      {showProjectIndex != null && (
        <ProjectDetails projectDetails={projectDetails} />
      )}
    </>
  );
}
