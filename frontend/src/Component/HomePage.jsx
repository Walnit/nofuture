import CourseQuiz from "./CourseQuiz";

export default function HomePage() {
  return (
    <>
      <div className="home-container">
        <h1 className="home-title">FORESIGHT</h1>
        <h2 className="home-subtitle">Welcome to Foresight.</h2>

        <div className="searchbar-container">
          <div className="searchbar">
            <button className="searchbar-button">
              <svg
                className="searchbar-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            <input
              className="searchbar-input"
              type="text"
              placeholder="SEARCH COURSES"
            />
          </div>
        </div>

        <p>Are you a prospective Poly, ITE, or tertiary student?</p>
        <div className="button-container">
          <button className="button">Poly Student</button>
          <button className="button">ITE Student</button>
          <button className="button">Tertiary Student</button>
        </div>
    
        <CourseQuiz />
      </div>
    </>
  );
}
