import React from "react";
import ReviewCard from "./ReviewCard";
import ExperienceItem from "./ExperienceItem";

export default function Middlesections() {
  return (
    <>
      <div className="middlesections">
        <div>
          <div>
            <h2>Course Information</h2>
          </div>
          <div>
            <h2>Find Mentor</h2>
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
