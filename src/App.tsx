import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import tw from "twin.macro";

const Container = tw.div`
w-full
bg-indigo-700
p-20
`;

function App() {
    return <Container>Hamidkhan</Container>;
}

export default App;
