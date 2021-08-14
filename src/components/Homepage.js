import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../img/abstract-paper.jpg';

function Homgepage() {
  return (
    <>
      <img id='banner' src={Banner} className='img-fluid' alt='colored paper close up' />
      <h1 id='welcome'>Welcome</h1>
      <h5 id='quote'><em>~ our goal is to demystify the process of writing a cover letter ~</em></h5>
      <div className='container' />
      <div className='card job-compare-card'>
        <div className='row'>
          <div className='col-12'>
            <div className='card homepage-card'>
              <h3>How to write a competative cover letter</h3>
              <p>
                A good cover letter and resume will make it easy to see how your skills and
                experience match an employer's job description.
                Many companies use automated tools such as a Applicant Tracking System (ATS) to scan cover
                letters and resumes for keywords that match their job descriptions,
                then automatically reject applications that don't have those words.
              </p>
              <p>
                But even when they don't use these tools,
                writing as if they do will help you concisely convey why you’re qualified
                when a real person is sitting in front of your application.
                That's why you should always strive to use the most important power words and
                phrases from the job description—verbatim—in your cover letter.
              </p>
              <p>
                So before we even start writing our cover letter and resume, we'll do some prep work to identify these
                keywords and phrases. Normally you will want to read through the job posting and manually write down these
                power words when you see them. For a programming job, these kinds of words might include coding languages,
                frameworks, and best practices. This can be a tedious and frankly,
                repetitive task that takes time out of applying for more jobs.
              </p>
              <p>
                Power words in their own right allow your cover letter to stand out amongst a sea of others that a potential
                hiring manager or the program will notice.
                By including these words, you are increasing your chances of through the
                ATS and having your application read and hopefully an interview.
              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='card homepage-card'>
              <h3>How it works</h3>
              <p>Once you have made an account, you will be able to submit your first job posting that you want to apply for.
                It's okay if you don't have a cover letter for it yet, this will be a great resource to start one!
              </p>
              <p>
                Once you have uploaded <em>ALL</em> text from the job posting,
                you will be able to hit compare and get a list of
                "power words" that you will want to address in your cover letter. These power words are common for
                programming positions as well as general soft skills that recruiters are looking for.
              </p>
              <Link to='/signin'><button className='btn btn-warning'>create an account and get started</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homgepage;
