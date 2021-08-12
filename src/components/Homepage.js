import React from 'react';

function Homgepage() {
  return (
    <>
      <h1>Welcome to No More Cover Letter</h1>
      <h5><em>~ our goal is to demystify the process of writing a cover letter ~</em></h5>
      <div className='row'>
        <div className='col-6'>
          <div className='card keyword-card'>
            <h3>Info on witing a good cover letter</h3>
            <p>
              A good cover letter and resume will make it easy to see how your skills and
              experience match an employer's job description.
              Many companies use automated tools to scan cover
              letters and resumes for keywords that match their job descriptions,
              then automatically reject applications that don't have those words.
            </p>
            <p>
              But even when they don't use these tools,
              writing as if they do will help you concisely convey why you’re qualified
              when a real person is sitting in front of your application.
              That's why you should always strive to use the most important words and
              phrases from the job description—verbatim—in your cover letter and resume.
            </p>
            <p>
              So before we even start writing our cover letter and resume,
              we'll do some prep work to identify these key words and phrases.
            </p>
          </div>
        </div>
        <div className='col-6'>
          <div className='card keyword-card'>
            <h3>How it works</h3>
            <p>Once you have made an account, you will be able to submit your first job posting that you want to apply for.
              It's okay if you don't have a cover letter for it yet, we will help you start one!
            </p>
            <p>
              Once you have uploaded <em>ALL</em> text from the job posting,
              you will be able to hit compare and get a list of
              "power words" that you will want to address in your cover letter.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homgepage;
