import React from "react";
import "./BlogEntryCard.css";
import { BlogTableEntry } from "../../types";

type BlogEntryCardProps = {
  index: number;
  loading: boolean;
  blogData: BlogTableEntry;
};

const BlogEntryCard = (props: BlogEntryCardProps) => {
  const generateGradient = (): string => {
    const colors = [
      "rgba(255, 0, 0, 0.5)",
      "rgba(0, 255, 0, 0.5)",
      "rgba(0, 0, 255, 0.5)",
    ];
    const randColor1 = colors[Math.floor(Math.random() * colors.length)];
    const randColor2 = colors[Math.floor(Math.random() * colors.length)];
    return `linear-gradient(90deg, ${randColor1}, ${randColor2})`;
  };

  const bgGradient = generateGradient();

  return (
    <div
      className={
        "blog-entry-card glass vert-flex" + (props.loading ? " loading" : "")
      }
      style={{ transitionDelay: `${props.index * 0.1}s opacity` }}
    >
      <div className="bec-content top noise">
        <div
          className="bec-content-img"
          style={{ background: bgGradient, opacity: 0.5 }}
        />
      </div>
      <div className="bec-content bottom vert-flex">
        <h2>{props.blogData.title}</h2>
        <div className="hori-flex">
          <p>{props.blogData.date.toISOString()}</p>
          <p>{props.blogData.readingLength}</p>
        </div>
        <p>{props.blogData.preview}</p>
        <div className="blog-tag-container hori-flex">
          {props.blogData.tags.map((tag, index) => (
            <p className="blog-tag" key={index}>
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogEntryCard;
