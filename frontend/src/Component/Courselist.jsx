import React from "react";
import Navbars from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from "react-router-dom";

function CourseList() {
  return (
    <>      

    <br/>
        <p  className="text-sm-start text-lg-center text-xl-center"> Home &gt;{" "}  Polytechnic Diploma Courses</p>

      <div className="div pt-0">
       
        <div className="div-11">
          <div className="div-12">
            <div className="column">
              <div className="div-13">
                <span style={{ fontWeight: 600, fontSize: 25 }}>
                  Architecture, Building & Real Estate
                </span>
                <br />
                Architecture
                <br />
                Hotel & Leisure Facilities Management
                <br />
                Landscape Architecture
                <br />
                Landscape Design & Horticulture
                <br />
                <br />
                <span style={{ fontWeight: 600, fontSize: 25 }}>
                  Business & Administration
                </span>
                <br />
                Business Administration
                <br />
                Office Management
                <br />
                Sales and Marketing
                <br />
                Financial Management
                <br />
                <br />
                {/* Other categories */}
              </div>
            </div>
            <div className="column-2">
              <div className="div-14">
                <span style={{ fontWeight: 600, fontSize: 25 }}>
                  Health Sciences
                </span>
                <br />
                Nursing
                <br />
                Pharmacy
                <br />
                Dental Sciences
                <br />
                Medical Laboratory Technology
                <br />
                <br />
                <span style={{ fontWeight: 600, fontSize: 25 }}>
                  Humanities & Social Sciences
                </span>
                <br />
                Sociology
                <br />
                Psychology
                <br />
                Anthropology
                <br />
                History
                <br />
                <br />
                {/* Other categories */}
              </div>
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
          color: #000;
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
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-3 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-4 {
          font-family: "Plus Jakarta Sans", -apple-system, Roboto, Helvetica,
            sans-serif;
          font-weight: 400;
        }
        .div-5 {
          font-family: "Plus Jakarta Sans", -apple-system, Roboto, Helvetica,
            sans-serif;
          font-weight: 500;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-6 {
          font-family: "Plus Jakarta Sans", -apple-system, Roboto, Helvetica,
            sans-serif;
          font-weight: 700;
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
          font-family: "Plus Jakarta Sans", -apple-system, Roboto, Helvetica,
            sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-10 {
          color: #abd3da;
          margin-top: 54px;
          font: 400 20px "Plus Jakarta Sans", -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-10 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-11 {
          margin-top: 55px;
          width: 100%;
          max-width: 1249px;
        }
        @media (max-width: 991px) {
          .div-11 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-12 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-12 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 46%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-13 {
          color: #000;
          font: 400 20px "Plus Jakarta Sans", -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-13 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 54%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-14 {
          color: #000;
          font: 400 20px "Plus Jakarta Sans", -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-14 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
      `}</style>
      <Outlet/>
    </>
  );
}

export default CourseList
