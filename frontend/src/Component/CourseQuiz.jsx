export default function CourseQuiz() {
    return (
      <>
        <div className="quiz-container">
            <h2>Course Finder Quiz</h2>
            <p>We’ll generate a ranked list of courses you may be most interested in!</p>
            <p>To begin, watch the videos and select which field you prefer to work in.</p>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                  <button className="quiz-button">SELECT</button>
                </div>
              </div>
              <p style={{ textAlign: 'center', marginLeft: '20px', marginRight: '20px' }}>or</p>
              <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                  <button className="quiz-button">SELECT</button>
                </div>
              </div>
            </div>
        </div>
      </>
    );
  }
  
