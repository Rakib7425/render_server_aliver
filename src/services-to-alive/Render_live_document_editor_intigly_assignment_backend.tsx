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

  // Frontend appServer aliver
  const callAppServer = useCallback(async () => {
    try {
      const response = await fetch(
        "https://live-document-editor-intigly-assignment-07xv.onrender.com/login"
      );

      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  // call the health api here
  useEffect(() => {
    const timerId = setInterval(() => {
      fetchData();
      callAppServer();
    }, 14.2 * 60 * 1000); // 14 minutes in milliseconds

    return () => clearInterval(timerId); // cleanup on unmount
  }, [callAppServer, fetchData]);
  return (
    <main>
      <p>1. live_document_editor_intigly_assignment_backend</p>
      <p>2. live_document_editor_intigly_assignment_frontend</p>
    </main>
  );
};

export default Render_live_document_editor_intigly_assignment_backend;
