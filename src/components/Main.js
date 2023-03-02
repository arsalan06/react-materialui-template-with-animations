import { useEffect, useRef, useState } from "react";
import Layout from "./Layout";
import Navbar from "./Navbar";
import BannerSection from "./BannerSection";
import DataTable from "./DataTable";
import ClippedDrawer from "./ClippedDrawer";

const Main = () => {
  const bannerRef = useRef(null);
  const layoutRef = useRef(null);

  const [activelink, setActiveLink] = useState("#banner-section");
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id) => {
    setActiveLink(id);
    const ref = id === "#banner-section" ? bannerRef : layoutRef;
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    const bannerTop = bannerRef.current.getBoundingClientRect().top;
    const layoutTop = layoutRef.current.getBoundingClientRect().top;
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    if (bannerTop >= 0 && bannerTop <= window.innerHeight) {
      setActiveLink(`#${bannerRef.current.id}`);
    } else if (layoutTop >= 0 && layoutTop <= window.innerHeight) {
      setActiveLink(`#${layoutRef.current.id}`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* for a side fixed drawer, uncomment this code */}
      {/* <ClippedDrawer
        scrolled={scrolled ? 1 : 0}
        scrollToSection={scrollToSection}
        activelink={activelink}
      >
        <BannerSection bannerRef={bannerRef} />
        <Layout layoutRef={layoutRef} />
        <DataTable />
      </ClippedDrawer> */}

      {/* This code is for top navbar */}
      <Navbar
        scrolled={scrolled ? 1 : 0}
        scrollToSection={scrollToSection}
        activelink={activelink}
      />
      <BannerSection bannerRef={bannerRef} />
      <Layout layoutRef={layoutRef} />
      <DataTable />
    </>
  );
};

export default Main;
