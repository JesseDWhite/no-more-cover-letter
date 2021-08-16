<div align="center">
<img src="https://media.giphy.com/media/RH7HREzgpzUuWMeFJu/giphy.gif" width="200px" />

# _No More Cover Letter_ 
</div>
<div align="center">
<h4><a href="https://no-more-cover-letter.firebaseapp.com/">No More Cover Letter</a></h4>
<h3><em >This is a capstone project for Epicodus March 2021 cohort.</em></h3>
<h4><p>By Jesse White</p></h4>
</div>

## Technologies Used
* 📝 _HTML_
* 🎨 _CSS_
* ☕ _Javascript_
* 🧭 _Node_
* 🥾 _Bootstrap_
* ⚛ _React_
* 🧙‍♂️ _Redux_
* 🔥 _Firebase_
## 📜 Description
_This application was meant to streamline and de-mistify the process of writing a cover letter for a job appliaciton. See below for full project overview._
### 💻 Prerequisites
* [Node](https://nodejs.org/en/)
* A text editor like [VS Code](https://code.visualstudio.com/)
## 🏗 Setup/Installation Requirements
1. Clone the repository: `$ git clone https://github.com/JesseDWhite/no-more-cover-letter`.
2. Navigate to the `no-more-cover-letter/` directory on your computer.
3. Open with your preferred text editor to view the code base.
4. To start a development server and view the project in the browser:
    * _Navigate to `no-more-cover-letter/` in your command line_
    * _Run the command `npm install` to install dependencies_
    * _Optionally, run the command `npm run build` to make a bundle of the files_
    * _Finally, run the command `npm run start` to start a development server_
## 🐛 Known Bugs
* _Plurality of words such as "communicate" and "communicating" are not seen as a match._
## ⚖ License
_MIT © 2021 Jesse White_
## 🤳 Contact Information
Jesse White _jesse.white6@gmail.com_

# Full Project Outlook
<div align="center">
<em>✔️ represents goals that have been met so far.</em>
<em>❌ represents goals that are not met yet.</em>
<em>🚧 represents goals that are actively being worked on.</em>
</div>

<h2> Project Inspiration <img src="https://media.giphy.com/media/YWLDUhxMbpPfY831Fn/giphy.gif" width="60px"></h2>

<p>
I originally had the idea to make a cover letter generator after writing my third one for a job application. When completing a job application, the applicant will take the job posting and break it down to keywords that then need to be addressed in their cover letter. I then realized that this process was very repetitive and could be automated by an application. While my original plan of generating an entire cover letter did not pan out, I think the final product  is actually more useful for prospective applicants.
</p>

<h2> Process <img src="https://media.giphy.com/media/3ohhwlYW4evn0r0BXO/giphy.gif" width="80px"></h2>

<p>
Once I shifted gears, I knew I would need a way to break every word apart and check the value in both the cover letter and the job posting. These words would then be turned into lowercase and all punctuation removed. Once that has been complete, each word is then split into a new array and sorted, so each word has its own index value. The next step passes those arrays into a new Set to remove any and all duplicated words, so you are left with an array of only unique words for both cover letter and job posting. This final step then filters out all words in the job posting that are not listed as a keyword in a variable that I have been feeding hot topic words and then filters the cover letter array against the job posting filtered array. The user is then left with two things: a list of keywords from the job posting that need to be addressed and all the keywords they have already addressed in their cover letter.
</p>

## Goals

<h3> MVP </h3>

* ✔️ Allow user input for cover letter and job posting.
* ✔️ List keywords manually from the user for job posting.
* ✔️ Display currently inputted cover letter and job postings.

<h3> Stretch Goals </h3>

* ✔️ Use authentication through Firebase.
* ✔️ Use authorization through Firebase.
* ✔️ Automate the process of finding keywords.
* ✔️ Host the project on Firebase.
* ❌ Integrate another framework to catch plurality of keywords.
* 🚧 Integrate Material UI for styleing and layout.
* ✔️ Create splash-page for before users log in.

<details>
  <summary>Click to see the original project scope and process</summary>
<h3>Project Insipration <img src="https://media.giphy.com/media/QxSRmUeq7RUIHLxADc/giphy.gif" width="60px"> </h3> 

<p>Applying for jobs and writing cover letters that are tailored for each job posting can become a tedious and repeatable process. Many people that have a cover letter already, know the sections that can be altered to fit the needs of a job posting. The rest of the cover letter can largely be left the same. Having done this myself numerous times made me realize that this process could be automated to some capacity. This is where I got the idea to make an application that could help someone write a custom cover letter with minimal input from the user.</p>

<p>Many job postings can be broken down into key talking points and key words and phrases. These talking points are typically taken from the list of job duties/responsibilities and the general job description. The companies that are receiving the cover letters are usually putting them through a text analyzer for word matches between the job posting and the letter itself. When an applicant breaks the job posting into these key words, it becomes much easier to provide information on themselves per key word and get past the gatekeeper bot.</p>

<p>With this application, I wanted to help make that process easier for both people that have cover letters already and for those that are stuck staring a blank screen and a blinking curser.</p>

<h3>Technical Layout & Goals<img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="60px">
</h3>
<h4><em>Minimum Viable Product (MVP)<em></h4>

* Take the input for key responsibilities/qualifications from the job posting (the user will need to manually put these in from the job posting.)
* Ask the user whether or not they have experience or can supply talking points to each of the responsibilities/qualifications.
* Take user input for each area they listed above.
* Populate two main paragraphs that will contain all talking points that were previously inputted.
* There will be a generic introductory paragraph and an ending paragraph.
Display final output to users to copy and edit within their own text editor.
* The application will be tailored for my current cover letter and information therein.
* Potentially making it a succint style cover letter.
* ✔ Application will use firebase to save user input for later use.

<h4><em>Stretch Goals<em></h4>

* I would like to give the option to customize the introductory paragraph and the end paragraph to each job posting.
* The end result can be passed through a Grammarly type of program to check for grammar/spelling errors.
* Previous inputs can be saved for future job applications
* Final output can be exported to pdf/google doc.
* Users can select what kind of tone they would like the cover letter to have and change keywords based on their selection.
* Host the application on a Heroku-type site/Firebase.
* Application can be tailored to any user.
* Save general user information like name and address for re-use later.
* Create a job tracking dashboard for jobs user is actively applying for.

</details>

# Time Logged For Research
<details>
  <summary>Click to see full project timeline for anything done outside of commit history</summary>

  ## 7/16/2021
  * 8:00 - 9:00: research on text anylizers to evaluate job postings for key words. Currently looking into Microsoft Azure.
  * 9:45 - 10:31: writing project overview and inspiration on a word doc to import later into README.
  * 10:45 - 11:30: reading articles on good cover letters and content.
  * 14:56 - 15:16: researching more cover letter examples.
  * 15:30 - 16:24: researching how to add Google authentication to gather user info for reusable forms.
  ## 7/23/2021
  * 13:00 - 13:45: gathering list of common programming laguages for text analyzer: might come back to this idea later if there is time.
</details>