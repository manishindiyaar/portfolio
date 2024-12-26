import React, { useEffect, useState } from "react";
import "./BlogScreen.css";
import Navbar from "../../components/Navbar/Navbar";
import { motion } from "framer-motion";
import { fetchNotionTableData } from "../../utils/blogUtils/blogUtils";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { BlogTableEntry, Coord } from "../../types";
import BlogEntryCard from "../../components/BlogEntryCard/BlogEntryCard";
import BlobBackground from "../../components/BlobBackground/BlobBackground";
import ScreenFooter from "../../components/ScreenFooter/ScreenFooter";
import { useDetectAdBlock } from "adblock-detect-react";

type BlogScreenProps = {
  blobCurrXY: Coord;
  iblobEnabled: boolean;
};

const BLOG_TABLE_ID = "c23770fbb2174b52b60ae695106a4207";

const BlogScreen = (props: BlogScreenProps) => {
  const [blogTableEntries, setBlogTableEntries] = useState<BlogTableEntry[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const adBlockDetected = useDetectAdBlock();
  const [errorLoadingBlogs, setErrorLoadingBlogs] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchNotionTableData(BLOG_TABLE_ID)
      .then((data) => {
        if (data) {
          console.log(data);
          setBlogTableEntries(data);
        } else {
          setErrorLoadingBlogs(true);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="blog-screen noise">
      {/* <BlobBackground
        blobCurrXY={props.blobCurrXY}
        iblobEnabled={props.iblobEnabled}
      /> */}
      <Navbar />
      <motion.h1
        className="blog-screen-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.75 },
        }}
        viewport={{ once: true, amount: 1 }}
      >
        blogs
      </motion.h1>
      <div
        className={
          "blog-screen-content-container" +
          (loading || errorLoadingBlogs ? " loading" : "")
        }
      >
        {loading && <div className="spinner" />}
        {!errorLoadingBlogs &&
          blogTableEntries.map((entry, index) => (
            <BlogEntryCard
              key={index}
              blogData={entry}
              index={index}
              loading={loading}
            />
          ))}
        {errorLoadingBlogs && (
          <div className="error-loading-blogs glass">
            <h2>
              {adBlockDetected
                ? "An ad blocker is preventing this page from loading."
                : "Whoops! Something went wrong."}
            </h2>
            <p>
              {adBlockDetected
                ? "Please disable your ad blocker and refresh the page to view my blogs."
                : "If you are using an ad blocker, please disable it and refresh the page."}
            </p>
          </div>
        )}
      </div>
      <ScreenFooter />
    </div>
  );
};

export default BlogScreen;
