import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Blog from "./components/Blog";
import BlogPage from "./components/BlogPage";
import Contact from "./components/Contact";
import Cookie from "./components/Cookie";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: {
        white: "#ffffff",
        purple: "#2F1562",
        light_purple: "#533097",
        yellow: "#FBD362",
        blogTitle: '#0E004E'
      },
      white: "#fff",
      black: "#000000",
      btnBackground: "#6D44BC",
      dealCardBackground: "#D1BEEA",
      helper: "#8490ff",
      bg: "#533097",
      footer_bg: "#533097",
      blog_bg: '#F5F5FC',
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    fontFamily: {
      latin: "'Anek Latin', sans-serif",
      devnagri: "'Anek Devanagari', sans-serif",
    },
    weight: {
      normal: 500,
      bold: 600,
      bolder: 700,
    },
    media: { mobile: "767px", tab: "998px" },
    bgimage: {
      purple: process.env.PUBLIC_URL+ "/images/Hero_BG.svg",
      white: "./images/White_Bg.svg",
    },
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
        <Footer />
        <Cookie />
      </ThemeProvider>
    </>
  );
}

export default App;
