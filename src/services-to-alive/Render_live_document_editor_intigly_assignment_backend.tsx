import React, { useCallback, useEffect } from "react";

const Render_live_document_editor_intigly_assignment_backend: React.FC = () => {
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        "https://live-document-editor-intigly-assignment.onrender.com/health"
      );
      const data = await response.json();
      if (data.ok) {
        console.log("API is healthy");
      } else {
        console.log("API is not healthy");
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  // call the health api here
  useEffect(() => {
    const timerId = setInterval(() => {
      fetchData();
    }, 14 * 60 * 1000); // 14 minutes in milliseconds

    return () => clearInterval(timerId); // cleanup on unmount
  }, [fetchData]);
  return <>1. live_document_editor_intigly_assignment_backend</>;
};

export default Render_live_document_editor_intigly_assignment_backend;
