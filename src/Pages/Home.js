import React from "react";
import Post from "../Components/Post";
import Box from "@material-ui/core/Box";

export default function Home() {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Post />
      </Box>
    </>
  );
}
