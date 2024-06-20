import React from "react";
export default function CourseInfo({ content1, title, subtitle }) {
  return (
    <>
      <div style={{ padding: "20px" }}>
        <p>
          {content1}
          <span style={{ color: "#2400FF" }}>{title}</span>
        </p>
        <h1
          style={{
            display: "inline-block",
            background:
              "linear-gradient(120deg, rgba(171, 211, 218) 0%, rgba(255, 212, 124) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            minWidth: "fit-content",
            marginTop: "0px",
            marginBottom: "0px",
            fontSize: "60px",
            fontWeight: "bold",
          }}
        >
          {title}{" "}
        </h1>
        <p>{subtitle}</p>
      </div>
    </>
  );
}
