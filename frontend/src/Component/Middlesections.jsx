import React from "react";
import ReviewCard from "./ReviewCard";
import ExperienceItem from "./ExperienceItem";
import CourseDetail from "./CourseDetail";
import '../App.css'
import FindMentor from "./FindMentor";

export default function Middlesections() {
  return (
    <>
      <div className="middlesections">
        <div>
          <div>
            <h2>Course Information</h2>
            <div className="cinfo-container">
              <CourseDetail title="Schools offering the course" content="NYP, NP, SP, TP, RP"/>
              <CourseDetail title="What you might expect to learn" content="Pharmeceutical Compounding<br>Dispensing Medicine"/>
              <CourseDetail title="Job Opportunities" content="Research Assistant (Pharmacy & Pharmaceutical Sciences)" />
            </div>
          </div>
          <div>
            <h2>Find Mentor</h2>
            <div className="fmentor-container">
              <FindMentor photo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/510px-Default_pfp.svg.png" content_title="Callie" content="Lion City Secondary (2018 - 2021)<br>NYP (2022 - Present)" profile="VIEW FULL PROFILE" />
              <FindMentor photo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/510px-Default_pfp.svg.png" content_title="Panela" content="Green Park Secondary (2019 - 2022)<br>SP (2022 - Present)" profile="VIEW FULL PROFILE" />
            </div>
          </div>
        </div>
        <div>
          <h2>Reviews</h2>
        </div>
        <div>
          <ReviewCard
            rating={5}
            name="Ronnie Tan, NYP"
            content="Very systematic learning. Learned a lot of organic chemistry, although we did have to memorize a bit."
          />
          <ReviewCard
            rating={5}
            name="Mr Lee, NYP Lecturer"
            content="Very systematic learning. Learned a lot of organic chemistry, although we did have to memorize a bit."
          />
        </div>
        <div>
          <h2>Experiental Opportunities</h2>
        </div>
        <div>
          <ExperienceItem date="13 Mar" content="NYP Open House" />
        </div>
        <div>
          <ExperienceItem date="14 Mar" content="Pharmaceutical Conferences" />
        </div>
        <div>
          <ExperienceItem
            date="15 Mar"
            content="Dialogue Sessions by Industrial Experts, Networking Session"
          />
        </div>
      </div>
    </>
  );
}
