import React from "react";
import ProjectTracking from "./ProjectTracking";
import TaskTracking from "./TaskTracking";
import IntegrationsHeader from "../integrations/IntegrationsHeader";

export default function Porjects() {
  return (
    <section className="w-screen bg-base-200">
      <IntegrationsHeader />
      <ProjectTracking />
      <TaskTracking />
    </section>
  );
}
