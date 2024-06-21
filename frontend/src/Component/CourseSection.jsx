import * as React from "react";
import Navbars from "./Navbar";

export default function CourseSection() {
  return (
    <>
    <Navbars/>
    <br/>
      <div className="div">
     
        <div className="div-10">
          <img
            loading="lazy"
            srcSet="..."
            className="img"
          />
          <div className="div-11">
            <div className="div-12">
              <img
                loading="lazy"
                srcSet="..."
                className="img-2"
              />
              <div className="div-13">COURSE FINDER QUIZ</div>
            </div>
            <div className="div-14">
              Based on your responses, we think you’d be interested in these
              courses!
              <br />
              Click on each of the links to find out more about the course.
            </div>
            <div className="div-15">
              <div className="div-16">
                Pharmaceutical Science
                <br />
                Architecture, Building & Real Estate
                <br />
                Business & Administration
                <br />
                Education
                <br />
                Engineering Sciences
                <br />
                Fine & Applied Arts
                <br />
                Humanities & Social Sciences
                <br />
                Information Technology
                <br />
                Mass Communication
                <br />
                Information Science
              </div>
              <img
                loading="lazy"
                srcSet="..."
                className="img-3"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #000;
          padding: 19px 80px 80px;
        }
        @media (max-width: 991px) {
          .div {
            padding: 0 20px;
          }
        }
        .div-2 {
          display: flex;
          width: 100%;
          max-width: 1249px;
          gap: 20px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-3 {
          display: flex;
          gap: 20px;
          font-size: 20px;
          font-weight: 500;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-3 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-4 {
          font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-5 {
          font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
          font-weight: 700;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-6 {
          font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-7 {
          border-radius: 30px;
          background: linear-gradient(
            90deg,
            rgba(252, 183, 149, 0.5) 0%,
            rgba(222, 197, 226, 0.5) 100%
          );
          display: flex;
          gap: 20px;
          font-size: 18px;
          font-weight: 400;
          letter-spacing: 0.72px;
          padding: 12px 17px;
        }
        .div-8 {
          border-radius: 50%;
          border-color: rgba(0, 0, 0, 1);
          border-style: solid;
          border-width: 3px;
          align-self: start;
          width: 21px;
          height: 21px;
        }
        .div-9 {
          font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-10 {
          border-radius: 30px;
          background: linear-gradient(
            98deg,
            rgba(255, 212, 124, 0.5) 0%,
            rgba(171, 211, 218, 0.5) 100%
          );
          display: flex;
          margin-top: 76px;
          width: 1113px;
          max-width: 100%;
          align-items: flex-start;
          gap: 20px;
          font-size: 25px;
          padding: 19px 80px 19px 13px;
        }
        @media (max-width: 991px) {
          .div-10 {
            flex-wrap: wrap;
            padding-right: 20px;
            margin-top: 40px;
          }
        }
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 70px;
          align-self: end;
          margin-top: 542px;
        }
        @media (max-width: 991px) {
          .img {
            margin-top: 40px;
          }
        }
        .div-11 {
          align-self: start;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          flex-basis: 0;
          width: fit-content;
        }
        @media (max-width: 991px) {
          .div-11 {
            max-width: 100%;
          }
        }
        .div-12 {
          align-self: center;
          display: flex;
          gap: 20px;
          font-size: 30px;
          font-weight: 700;
          letter-spacing: 0.6px;
        }
        .img-2 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 60px;
        }
        .div-13 {
          font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
        .div-14 {
          font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
          font-weight: 400;
          margin-top: 24px;
        }
        @media (max-width: 991px) {
          .div-14 {
            max-width: 100%;
          }
        }
        .div-15 {
          align-self: start;
          display: flex;
          gap: 6px;
          font-weight: 500;
          margin: 45px 0 0 41px;
        }
        @media (max-width: 991px) {
          .div-15 {
            flex-wrap: wrap;
            margin-top: 40px;
          }
        }
        .div-16 {
          font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        @media (max-width: 991px) {
          .div-16 {
            max-width: 100%;
          }
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
          align-self: start;
          margin-top: 41px;
        }
        @media (max-width: 991px) {
          .img-3 {
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}

