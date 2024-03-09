import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import "./App.css"
import resume from "./assets/resume.png"
import resume1 from "./assets/resume1.png"
import resume2 from "./assets/resume2.png"
import resume3 from "./assets/resume3.png"
import resume4 from "./assets/resume4.png"

export default function App() {
  const editorRef = useRef(null);
  const [text, setText] = useState("")
  console.log(text)

  const send = () => {
      setText(`<div class="resume" style="width:800px; height: 100vh;margin: 50px auto;">
      <div class="header_section" style="height: 200px; background-color: brown; justify-content: center; display: flex; align-items: center;">
      <div class="header_title" style="text-align: center;"><span style="color: white; font-size: 42px;">Sumit Jambharkar</span><br><span style="color: white; font-size: 24px;">Full Stack Devloper</span></div>
      </div>
      <div class="middle_section" style="background-color: white; height: 100vh; display: flex; padding: 48px 0 0 64px;">
      <div class="left_section" style="width: 40%; display: flex; row-gap: 24px; flex-direction: column; padding: 0 32px 0 0;">
      <div class="my_contact" style="display: flex; flex-direction: column; row-gap: 10px;">
      <div class="title" style="font-size: 18px;"><span style="text-decoration: underline; color: rgb(186, 55, 42);"><strong>My Contact</strong></span></div>
      <div class="gap" style="display: flex; column-gap: 12px; justify-content: flex-start; align-items: center; text-align: justify;"><span class="about"><img src="https://pngmind.com/wp-content/uploads/2019/08/Email-Logo-Png-Transparent-Background.jpg" alt="email" width="10" height="8"> sujam3545@gmail.com</span></div>
      <div class="gap" style="display: flex; column-gap: 12px; justify-content: flex-start; align-items: center; text-align: justify;"><span class="about"><img src="https://www.freepngimg.com/thumb/telephone/75359-mobile-phones-button-telephone-call-logo-now.png" alt="call" width="10" height="10"> +91 8898699498</span></div>
      <div class="gap" style="display: flex; column-gap: 12px; justify-content: flex-start; align-items: center; text-align: justify;"><span class="about"><img src="https://tse2.mm.bing.net/th?id=OIP.Q0dqcascQhoafKMGC2tDkgHaJI&amp;pid=Api&amp;P=0&amp;h=180" alt="location" width="10" height="12"> Versova Andheri West</span></div>
      <div class="gap" style="display: flex; column-gap: 12px; justify-content: flex-start; align-items: center;"><span class="about"><img src="https://e7.pngegg.com/pngimages/357/433/png-clipart-computer-icons-website-web-design-logo.png" alt="website" width="10" height="10"> sumitjambharkar.netlify.app</span></div>
      <div class="gap" style="display: flex; column-gap: 12px; justify-content: flex-start; align-items: center;"><span class="about"><img src="https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png" alt="git" width="10" height="10"> github.com/sumitjambharkar</span></div>
      </div>
      <div class="my_contact_top" style="display: flex; flex-direction: column; row-gap: 10px; padding-top: 24px;">
      <div class="title" style="font-size: 18px;"><span style="text-decoration: underline; color: rgb(186, 55, 42);"><strong>Hard Skill</strong></span></div>
      <ul class="skill" style="padding: 0 0 0 12px;">
      <li>HTML/CSS</li>
      <li>ADVANCE JAVASCRIPTS</li>
      <li>React Native</li>
      <li>REACT JS/NEXT JS</li>
      <li>NODE JS</li>
      <li>EXPRESS JS</li>
      <li>MONGODB</li>
      <li>FIREBASE</li>
      <li>EJS</li>
      <li>Git &amp; GitHub</li>
      <li>AWS S3</li>
      <li>PHOTOSHOP</li>
      <li>WORDPRESS</li>
      </ul>
      </div>
      <div class="my_contact_top" style="display: flex; flex-direction: column; row-gap: 10px; padding-top: 24px;">
      <div class="title" style="font-size: 18px;"><span style="text-decoration: underline; color: rgb(186, 55, 42);"><strong>Education Background</strong></span></div>
      <div class="gaper" style="display: flex; flex-direction: column; row-gap: 8px; text-align: justify;"><strong><span style="text-align: justify;">&diams; Bachelor of Commerce</span></strong> <span class="about">Clara&rsquo;s College Of Commerce</span><span class="year" style="font-size: 8pt;">2010 - 2016</span></div>
      <div class="gaper" style="display: flex; flex-direction: column; row-gap: 8px;"><strong>&diams; Technical Computer Networking</strong> <span class="about">Govt Technical Vidyalaya, Mumbai</span><span class="year" style="font-size: 8pt;">2017</span></div>
      <div class="gaper" style="display: flex; flex-direction: column; row-gap: 8px;"><strong>&diams; Full Stack Developer</strong> <span class="about">IIDE - Indian Institute of Digital Education</span><span class="year" style="font-size: 8pt;">2018</span></div>
      </div>
      <div class="my_contact_top" style="display: flex; flex-direction: column; row-gap: 10px; padding-top: 24px;">
      <div class="title" style="font-size: 18px;"><span style="text-decoration: underline; color: rgb(186, 55, 42);"><strong>Achievements</strong></span></div>
      <ul class="skill" style="padding: 0 0 0 12px;">
      <li class="year">Certified Full Stack Developer.</li>
      <li class="year">Lead my Cricket Team as a Captain and achieved First Place in the Cricket tournament held by my Clara collage.</li>
      </ul>
      </div>
      </div>
      <div class="right_section" style="width: 60%; display: flex; row-gap: 24px; flex-direction: column;">
      <div class="my_contact" style="display: flex; flex-direction: column; row-gap: 10px;">
      <div class="title" style="font-size: 18px;"><span style="text-decoration: underline;"><span style="color: rgb(186, 55, 42); text-decoration: underline;"><strong>About Me</strong></span></span></div>
      <div class="gap" style="display: flex; column-gap: 12px; justify-content: flex-start; align-items: center;"><span class="about">To work with an organization that gives me an opportunity to learn, grow, and at the same time, presents me with an opportunity to contribute towards its growth.</span></div>
      </div>
      <div class="my_contact" style="display: flex; flex-direction: column; row-gap: 10px;">
      <div class="title" style="font-size: 18px;"><span style="text-decoration: underline; color: rgb(186, 55, 42);"><strong>Professional Experience</strong></span></div>
      <div><span style="font-size: 10pt;"><strong>ThunderSoft Global Pvt. Ltd</strong>. || <span class="company">Senior Full Stack Developer</span><br><span class="year" style="font-size: 8pt;">Feb 2023 to Feb 2024</span><br><span class="key">Key Responsibilities:</span></span>
      <ul class="skill" style="padding: 0 0 0 12px;">
      <li>Developed and managed e-commerce and affiliate marketing projects, including OrganicEssentialsHub.com and Kuikdose.io, utilizing React for frontend functionality.</li>
      <li>Created a user-friendly WordPress dashboard accessible through Next.js.</li>
      <li>Created REST APIs using Node.js and integrated MongoDB for efficient data storage.</li>
      <li>Utilized AWS, Hostinger, and Contabo as hosting services to deploy projects live.</li>
      <li>Website : https://organicEssentialsHub.com</li>
      <li>Website : https://Kuikdose.io.</li>
      </ul>
      </div>
      <div><strong>Smart Deal and Investment Pvt. Ltd</strong>. || <span class="company">Full Stack Developer</span><br><span class="year" style="font-size: 8pt;">Mar 2022 to Jan 2023</span><br><span class="key">Key Responsibilities:</span>
      <ul class="skill" style="padding: 0 0 0 12px;">
      <li>Working with Project React JS Framework and Firebase Realtime Database</li>
      <li>Built the logic for a streamlined ad-serving platform that scaled</li>
      <li>Created Matrimony website and Application</li>
      <li>Website : https://marriageorbit.com</li>
      <li>Application : https://play.google.com/store/apps/details?id=com.marriage.marriageorbit&amp;pli=1</li>
      </ul
      </div>
      <div><strong>Clean Nation</strong> || <span class="company">Full Stack Developer</span><br><span class="year" style="font-size: 8pt;">2021 - 2022</span><br><span class="key">Key Responsibilities:</span>
      <ul class="skill" style="padding: 0 0 0 12px;">
      <li>Build website using react Js and MongoDB.</li>
      <li>Database administration and website design</li>
      <li>Built the logic for a streamlined ad-serving platform that scaled</li>
      <li>Storing and fetching data with MongoDB.</li>
      <li>Website : https://cleannation.in</li>
      </ul>
      </div>
      <div><strong>Della Leaders Club</strong> || <span class="company">Front-End Developer</span><br><span class="year" style="font-size: 8pt;">2019 - 2021</span><br><span class="key">Key Responsibilities:</span>
      <ul class="skill" style="padding: 0 0 0 12px;">
      <li>Worked on WordPress website with own code.</li>
      <li>Website design and update in WordPress</li>
      <li>Built the logic for a streamlined ad-serving platform that scaled</li>
      <li>Website : https://www.dellaleaders.com</li>
      </ul>
      </div>
      </div>
      </div>
      </div>
      </div>`)
  }

  const sendOne = ()=> {
    setText(`<div style="width:800px; height: 100vh;margin: 50px auto;" class="container"><header>
    <h1 style="text-align: center;">Resume</h1>
    </header>
    <section class="personal-info">
    <h2><span style="text-decoration: underline;">Personal Information</span></h2>
    <ul>
    <li><strong>Name:</strong> John Doe</li>
    <li><strong>Email:</strong> john.doe@example.com</li>
    <li><strong>Phone:</strong> +1234567890</li>
    <li><strong>Address:</strong> 123 Main St, City, Country</li>
    </ul>
    </section>
    <section class="education">
    <h2><span style="text-decoration: underline;">Education</span></h2>
    <ul>
    <li><strong>Degree:</strong> Bachelor of Science in Computer Science</li>
    <li><strong>University:</strong> ABC University</li>
    <li><strong>Year:</strong> 2024</li>
    </ul>
    </section>
    <section class="skills">
    <h2><span style="text-decoration: underline;">Skills</span></h2>
    <ul>
    <li>HTML5</li>
    <li>CSS3</li>
    <li>JavaScript</li>
    <li>Python</li>
    <li>Problem Solving</li>
    </ul>
    </section>
    <section class="projects">
    <h2 style="text-align: left;"><span style="text-decoration: underline;">Projects</span></h2>
    <ul>
    <li>Project 1: Description of Project 1</li>
    <li>Project 2: Description of Project 2</li>
    <li>Project 3: Description of Project 3</li>
    </ul>
    </section>
    <section class="hobbies">
    <h2><span style="text-decoration: underline;">Hobbies</span></h2>
    <ul>
    <li>Reading</li>
    <li>Traveling</li>
    <li>Playing guitar</li>
    </ul>
    <p><span style="text-decoration: underline; font-size: 14pt;"><strong>Achievement</strong></span></p>
    <ul>
    <li style="font-size: 12pt;"><span style="font-size: 12pt;">certifnnddnndn</span></li>
    </ul>
    </section>
    </div>
   
    `)
  }

  const sendThre = ()=> {
    setText(`<div class="full" style="width:800px; margin: 50px auto; background-color: rgb(245, 239, 231); display: grid; grid-template-columns: 2fr 4fr;">
    <div class="left" style="position: initial; background-color: rgb(126, 219, 231); padding: 20px;">
    <div class="image"><img style="width: 105px; height: 105px;" src="data:image/jpeg;base64,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" alt="gfg-logo"></div>
    <div class="Contact">
    <h2>Contact</h2>
    <p><strong>Email id:</strong>xyz@gmail.com</p>
    <p><strong>Mobile no :</strong>1234567890</p>
    </div>
    <div class="Skills">
    <h2>Skills</h2>
    <ul>
    <li><strong>Programming Languages : Python, Java, C++</strong></li>
    <li><strong>Frontend : HTML5, CSS3, JavaScript, React</strong></li>
    <li><strong>Backend : Node.js</strong></li>
    </ul>
    </div>
    <div class="Language">
    <h2>Language</h2>
    <ul>
    <li>English</li>
    <li>Hindi</li>
    </ul>
    </div>
    <div class="Hobbies">
    <h2>Hobbies</h2>
    <ul>
    <li>Playing cricket</li>
    <li>Swimming</li>
    </ul>
    </div>
    </div>
    <div class="right" style="position: initial; background-color: rgb(162, 202, 206); padding: 20px;">
    <div class="name">
    <h1>Sumit Jambharkar</h1>
    </div>
    <div class="title">
    <p>Full Satck Developer</p>
    </div>
    <div class="Summary">
    <h2>Summary</h2>
    <p>To secure a challenging position in a reputable organization to expand my learning knowledge and skill</p>
    </div>
    <div class="Experience">
    <h2>Experience</h2>
    <h3>Abc webdev pvt ltd - Senior Web Developer</h3>
    <p>January 2022 to Present</p>
    <ul>
    <li>Actively engaged in web creative design and development.</li>
    <li>Designing project &amp; planning</li>
    </ul>
    <h3>Xyz webdev pvt ltd - junior web developer</h3>
    <p>August 2021 to December 2021</p>
    <ul>
    <li>Actively engaged in web creative design and development.</li>
    <li>Designing project &amp; planning</li>
    <li>Working on designing</li>
    </ul>
    </div>
    <div class="Education">
    <h2>Education</h2>
    <table>
    <tbody>
    <tr>
    <th>University/college</th>
    <th>Passing year</th>
    <th>percentage/cgpa</th>
    </tr>
    <tr>
    <td>xyz</td>
    <td>2020</td>
    <td>8.9</td>
    </tr>
    <tr>
    <td>pqr</td>
    <td>2018</td>
    <td>89%</td>
    </tr>
    </tbody>
    </table>
    </div>
    <div class="project">
    <ul>
    <li>
    <h2>Project1</h2>
    <p>This project is based on html &amp; used React</p>
    </li>
    <li>
    <h2>Project2</h2>
    <p>This project is based on html &amp; used React</p>
    </li>
    </ul>
    </div>
    </div>
    </div>`)
  }

  const sendFour = ()=>{
    setText(`<div class="resume" style="width: 800px; height: auto; display: flex; margin: 50px auto;">
    <div class="resume_left" style="width: 280px; background: #0bb5f4;">
    <div class="resume_profile" style="width: 100%; height: 220px;"><img style="width: 100%; height: 100%;" src="https://i.imgur.com/eCijVBe.png" alt="profile_pic"></div>
    <div class="resume_content" style="padding: 0 25px;">
    <div class="resume_item resume_info" style="padding: 25px 0; border-bottom: 2px solid #b1eaff;">
    <div class="title" style="margin-bottom: 20px;">
    <p class="bold" style="font-weight: bold; font-size: 20px; text-transform: uppercase; color: #fff;">sumit jambharkar</p>
    <p class="regular" style="color: #b1eaff;">Front End Devloper</p>
    </div>
    <ul style="padding: 0;">
    <li style="display: flex; margin-bottom: 10px; align-items: center;">
    <div class="icon" style="width: 35px; height: 35px; background: #fff; color: #0bb5f4; border-radius: 50%; margin-right: 15px; font-size: 16px; position: relative;">&nbsp;</div>
    <div class="data" style="color: #b1eaff;">21 Street, Texas USA</div>
    </li>
    <li style="display: flex; margin-bottom: 10px; align-items: center;">
    <div class="icon" style="width: 35px; height: 35px; background: #fff; color: #0bb5f4; border-radius: 50%; margin-right: 15px; font-size: 16px; position: relative;">&nbsp;</div>
    <div class="data" style="color: #b1eaff;">+324 4445678</div>
    </li>
    <li style="display: flex; margin-bottom: 10px; align-items: center;">
    <div class="icon" style="width: 35px; height: 35px; background: #fff; color: #0bb5f4; border-radius: 50%; margin-right: 15px; font-size: 16px; position: relative;">&nbsp;</div>
    <div class="data" style="color: #b1eaff;">stephen@gmail.com</div>
    </li>
    <li style="display: flex; margin-bottom: 0; align-items: center;">
    <div class="icon" style="width: 35px; height: 35px; background: #fff; color: #0bb5f4; border-radius: 50%; margin-right: 15px; font-size: 16px; position: relative;">&nbsp;</div>
    <div class="data" style="color: #b1eaff;">www.stephen.com</div>
    </li>
    </ul>
    </div>
    <div class="resume_item resume_skills" style="padding: 25px 0; border-bottom: 2px solid #b1eaff;">
    <div class="title" style="margin-bottom: 20px;">
    <p class="bold" style="font-weight: bold; font-size: 20px; text-transform: uppercase; color: #fff;">skill's</p>
    </div>
    <ul style="padding: 0;">
    <li style="display: flex; margin-bottom: 10px; align-items: center; color: #b1eaff; justify-content: space-between;">
    <div class="skill_name" style="width: 25%;">HTML</div>
    <div class="skill_progress" style="width: 60%; margin: 0 5px; height: 5px; background: #009fd9; position: relative;">&nbsp;</div>
    <div class="skill_per" style="width: 15%;">80%</div>
    </li>
    <li style="display: flex; margin-bottom: 10px; align-items: center; color: #b1eaff; justify-content: space-between;">
    <div class="skill_name" style="width: 25%;">CSS</div>
    <div class="skill_progress" style="width: 60%; margin: 0 5px; height: 5px; background: #009fd9; position: relative;">&nbsp;</div>
    <div class="skill_per" style="width: 15%;">70%</div>
    </li>
    <li style="display: flex; margin-bottom: 10px; align-items: center; color: #b1eaff; justify-content: space-between;">
    <div class="skill_name" style="width: 25%;">SASS</div>
    <div class="skill_progress" style="width: 60%; margin: 0 5px; height: 5px; background: #009fd9; position: relative;">&nbsp;</div>
    <div class="skill_per" style="width: 15%;">90%</div>
    </li>
    <li style="display: flex; margin-bottom: 10px; align-items: center; color: #b1eaff; justify-content: space-between;">
    <div class="skill_name" style="width: 25%;">JS</div>
    <div class="skill_progress" style="width: 60%; margin: 0 5px; height: 5px; background: #009fd9; position: relative;">&nbsp;</div>
    <div class="skill_per" style="width: 15%;">60%</div>
    </li>
    <li style="display: flex; margin-bottom: 10px; align-items: center; color: #b1eaff; justify-content: space-between;">
    <div class="skill_name" style="width: 25%;">React</div>
    <div class="skill_progress" style="width: 60%; margin: 0 5px; height: 5px; background: #009fd9; position: relative;">&nbsp;</div>
    <div class="skill_per" style="width: 15%;">88%</div>
    </li>
    </ul>
    </div>
    <div class="resume_item resume_social" style="padding: 25px 0; border-bottom: 0px;">
    <div class="title" style="margin-bottom: 20px;">
    <p class="bold" style="font-weight: bold; font-size: 20px; text-transform: uppercase; color: #fff;"><span style="color: rgb(236, 240, 241);"><strong>Achievements</strong></span></p>
    <ul>
    <li style="color: rgb(236, 240, 241);"><span style="color: rgb(236, 240, 241);">Certified Front End Developer.</span></li>
    <li style="color: rgb(236, 240, 241);"><span style="color: rgb(236, 240, 241);">Lead my Cricket Team as a Captain and achieved First Place in the Cricket tournament held by my Clara collage.</span></li>
    </ul>
    </div>
    <ul style="padding: 0;">
    <li style="display: flex; margin-bottom: 10px; align-items: center;">&nbsp;</li>
    </ul>
    </div>
    </div>
    </div>
    <div class="resume_right" style="width: 520px; background: #fff; padding: 25px;">
    <div class="resume_item resume_about" style="padding: 0px 0;border-bottom: 2px solid #b1eaff;">
    <div class="title" style="margin-bottom: 20px;">
    <p class="bold" style="font-weight: bold; font-size: 20px; text-transform: uppercase; color: #0bb5f4;">About us</p>
    </div>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis illo fugit officiis distinctio culpa officia totam atque exercitationem inventore repudiandae?</p>
    </div>
    <div class="resume_item resume_work" style="padding: 0px 0;border-bottom: 2px solid #b1eaff;">
    <div class="title" style="margin-bottom: 20px;">
    <p class="bold" style="font-weight: bold; font-size: 20px; text-transform: uppercase; color: #0bb5f4;">Work Experience</p>
    </div>
    <ul style="padding-left: 40px; overflow: hidden;">
    <li style="position: relative;">
    <div class="date" style="font-size: 16px; font-weight: 500; margin-bottom: 15px;">2013 - 2015</div>
    <div class="info" style="margin-bottom: 20px;">
    <p class="semi-bold" style="font-weight: 500; font-size: 16px;">Lorem ipsum dolor sit amet.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
    </div>
    </li>
    <li style="position: relative;">
    <div class="date" style="font-size: 16px; font-weight: 500; margin-bottom: 15px;">2015 - 2017</div>
    <div class="info" style="margin-bottom: 20px;">
    <p class="semi-bold" style="font-weight: 500; font-size: 16px;">Lorem ipsum dolor sit amet.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
    </div>
    </li>
    <li style="position: relative;">
    <div class="date" style="font-size: 16px; font-weight: 500; margin-bottom: 15px;">2017 - Present</div>
    <div class="info" style="margin-bottom: 20px;">
    <p class="semi-bold" style="font-weight: 500; font-size: 16px;">Lorem ipsum dolor sit amet.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
    </div>
    </li>
    </ul>
    </div>
    <div class="resume_item resume_education" style="padding: 0px 0;border-bottom: 2px solid #b1eaff;">
    <div class="title" style="margin-bottom: 20px;">
    <p class="bold" style="font-weight: bold; font-size: 20px; text-transform: uppercase; color: #0bb5f4;">Education</p>
    </div>
    <ul style="padding-left: 40px; overflow: hidden;">
    <li style="position: relative;">
    <div class="date" style="font-size: 16px; font-weight: 500; margin-bottom: 15px;">2010 - 2013</div>
    <div class="info" style="margin-bottom: 20px;">
    <p class="semi-bold" style="font-weight: 500; font-size: 16px;">Web Designing (Texas University)</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
    </div>
    </li>
    <li style="position: relative;">
    <div class="date" style="font-size: 16px; font-weight: 500; margin-bottom: 15px;">2000 - 2010</div>
    <div class="info" style="margin-bottom: 20px;">
    <p class="semi-bold" style="font-weight: 500; font-size: 16px;">Texas International School</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
    </div>
    </li>
    </ul>
    </div>
    <div class="resume_item resume_hobby" style="padding: 0px 0;border-bottom: 0px;">
    <div class="title" style="margin-bottom: 20px;">
    <p class="bold" style="font-weight: bold; font-size: 20px; text-transform: uppercase; color: #0bb5f4;">Hobby</p>
    <ul>
    <li>Cricket</li>
    <li>football</li>
    </ul>
    </div>
    </div>
    </div>
    </div>`)
  }

  const sendFive = () => {
    setText(`<div class="container" style="margin: 0px auto 0px; box-sizing: border-box; max-width: 700px; background: #fff; border-radius: 3px; margin-top: 50px;">
    <div class="header" style="margin: 0; padding: 0; box-sizing: border-box; margin-bottom: 5px; .full-name {      font-size: 40px; text-transform: uppercase;">
    <div class="full-name" style="margin: 0; padding: 0; box-sizing: border-box;"><span style="font-size: 24pt;"><strong><span class="first-name" style="margin: 0px; padding: 0px; box-sizing: border-box;">Sumit Jambharkar</span></strong></span></div>
    <div class="contact-info" style="margin: 0; padding: 0; box-sizing: border-box; margin-bottom: 20px;"><span class="email" style="margin: 0; padding: 0; box-sizing: border-box; color: #999; font-weight: 300;">Email: </span> <span class="email-val" style="margin: 0; padding: 0; box-sizing: border-box;">john.doe@gmail.com</span> <span class="phone" style="margin: 0; padding: 0; box-sizing: border-box; color: #999; font-weight: 300;">Phone: </span> <span class="phone-val" style="margin: 0; padding: 0; box-sizing: border-box;">111-222-3333</span></div>
    <div class="about" style="margin: 0; padding: 0; box-sizing: border-box;"><span class="position" style="margin: 0; padding: 0; box-sizing: border-box; font-weight: bold; display: inline-block; margin-right: 10px; text-decoration: underline;">Front-End Developer </span> <span class="desc" style="margin: 0; padding: 0; box-sizing: border-box;"> I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow. </span></div>
    </div>
    <div class="details" style="margin: 0; padding: 0; box-sizing: border-box; line-height: 20px; .section {      margin-bottom: 40px;">
    <div class="section" style="margin: 0; padding: 0; box-sizing: border-box;">
    <div class="section__title" style="margin: 0; padding: 0; box-sizing: border-box; letter-spacing: 2px; color: #54afe4; font-weight: bold; margin-bottom: 10px; text-transform: uppercase;">Experience</div>
    <div class="section__list" style="margin: 0; padding: 0; box-sizing: border-box;">
    <div class="section__list-item" style="margin: 0; padding: 0; box-sizing: border-box; margin-bottom: 40px;">
    <div class="left" style="margin: 0; padding: 0; box-sizing: border-box; vertical-align: top; display: inline-block; width: 60%;">
    <div class="name" style="margin: 0; padding: 0; box-sizing: border-box; font-weight: bold;">KlowdBox</div>
    <div class="addr" style="margin: 0; padding: 0; box-sizing: border-box;">San Fr, CA</div>
    <div class="duration" style="margin: 0; padding: 0; box-sizing: border-box;">Jan 2011 - Feb 2015</div>
    </div>
    <div class="right" style="margin: 0; padding: 0; box-sizing: border-box; vertical-align: top; display: inline-block; text-align: right; width: 39%;">
    <div class="name" style="margin: 0; padding: 0; box-sizing: border-box; font-weight: bold;">Fr developer</div>
    <div class="desc" style="margin: 0; padding: 0; box-sizing: border-box;">did This and that</div>
    </div>
    </div>
    <div class="section__list-item" style="margin: 0; padding: 0; box-sizing: border-box; margin-bottom: 40px;">
    <div class="left" style="margin: 0; padding: 0; box-sizing: border-box; vertical-align: top; display: inline-block; width: 60%;">
    <div class="name" style="margin: 0; padding: 0; box-sizing: border-box; font-weight: bold;">Akount</div>
    <div class="addr" style="margin: 0; padding: 0; box-sizing: border-box;">San Monica, CA</div>
    <div class="duration" style="margin: 0; padding: 0; box-sizing: border-box;">Jan 2011 - Feb 2015</div>
    </div>
    <div class="right" style="margin: 0; padding: 0; box-sizing: border-box; vertical-align: top; display: inline-block; text-align: right; width: 39%;">
    <div class="name" style="margin: 0; padding: 0; box-sizing: border-box; font-weight: bold;">Fr developer</div>
    <div class="desc" style="margin: 0; padding: 0; box-sizing: border-box;">did This and that</div>
    </div>
    </div>
    </div>
    </div>
    <div class="section" style="margin: 0; padding: 0; box-sizing: border-box;">
    <div class="section__title" style="margin: 0; padding: 0; box-sizing: border-box; letter-spacing: 2px; color: #54afe4; font-weight: bold; margin-bottom: 10px; text-transform: uppercase;">Education</div>
    <div class="section__list" style="margin: 0; padding: 0; box-sizing: border-box;">
    <div class="section__list-item" style="margin: 0; padding: 0; box-sizing: border-box; margin-bottom: 40px;">
    <div class="left" style="margin: 0; padding: 0; box-sizing: border-box; vertical-align: top; display: inline-block; width: 60%;">
    <div class="name" style="margin: 0; padding: 0; box-sizing: border-box; font-weight: bold;">Sample Institute of technology</div>
    <div class="addr" style="margin: 0; padding: 0; box-sizing: border-box;">San Fr, CA</div>
    <div class="duration" style="margin: 0; padding: 0; box-sizing: border-box;">Jan 2011 - Feb 2015</div>
    </div>
    <div class="right" style="margin: 0; padding: 0; box-sizing: border-box; vertical-align: top; display: inline-block; text-align: right; width: 39%;">
    <div class="name" style="margin: 0; padding: 0; box-sizing: border-box; font-weight: bold;">Fr developer</div>
    <div class="desc" style="margin: 0; padding: 0; box-sizing: border-box;">did This and that</div>
    </div>
    </div>
    <div class="section__list-item" style="margin: 0; padding: 0; box-sizing: border-box; margin-bottom: 40px;">
    <div class="left" style="margin: 0; padding: 0; box-sizing: border-box; vertical-align: top; display: inline-block; width: 60%;">
    <div class="name" style="margin: 0; padding: 0; box-sizing: border-box; font-weight: bold;">Akount</div>
    <div class="addr" style="margin: 0; padding: 0; box-sizing: border-box;">San Monica, CA</div>
    <div class="duration" style="margin: 0; padding: 0; box-sizing: border-box;">Jan 2011 - Feb 2015</div>
    </div>
    <div class="right" style="margin: 0; padding: 0; box-sizing: border-box; vertical-align: top; display: inline-block; text-align: right; width: 39%;">
    <div class="name" style="margin: 0; padding: 0; box-sizing: border-box; font-weight: bold;">Fr developer</div>
    <div class="desc" style="margin: 0; padding: 0; box-sizing: border-box;">did This and that</div>
    </div>
    </div>
    </div>
    </div>
    <div class="section" style="margin: 0; padding: 0; box-sizing: border-box;">
    <div class="section__title" style="margin: 0; padding: 0; box-sizing: border-box; letter-spacing: 2px; color: #54afe4; font-weight: bold; margin-bottom: 10px; text-transform: uppercase;">Projects</div>
    <div class="section__list" style="margin: 0; padding: 0; box-sizing: border-box;">
    <div class="section__list-item" style="margin: 0; padding: 0; box-sizing: border-box; margin-bottom: 40px;">
    <div class="name" style="margin: 0; padding: 0; box-sizing: border-box; font-weight: bold;">DSP</div>
    <div class="text" style="margin: 0; padding: 0; box-sizing: border-box;">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.</div>
    </div>
    <div class="section__list-item" style="margin: 0; padding: 0; box-sizing: border-box; margin-bottom: 40px;">
    <div class="name" style="margin: 0; padding: 0; box-sizing: border-box; font-weight: bold;">DSP</div>
    <div class="text" style="margin: 0; padding: 0; box-sizing: border-box;">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow. <a style="margin: 0; padding: 0; box-sizing: border-box; text-decoration: none; color: #000; font-style: italic;" href="login">link</a></div>
    </div>
    </div>
    </div>
    <div class="section" style="margin: 0; padding: 0; box-sizing: border-box;">
    <div class="section__title" style="margin: 0; padding: 0; box-sizing: border-box; letter-spacing: 2px; color: #54afe4; font-weight: bold; margin-bottom: 10px; text-transform: uppercase;">Skills</div>
    <div class="skills" style="margin: 0; padding: 0; box-sizing: border-box;">
    <div class="skills__item" style="margin: 0; padding: 0; box-sizing: border-box; margin-bottom: 10px;">
    <div class="left" style="margin: 0; padding: 0; box-sizing: border-box; vertical-align: top; display: inline-block; width: 60%;">
    <div class="name" style="margin: 0; padding: 0; box-sizing: border-box; font-weight: bold;">Javascript</div>
    </div>
    <div class="right" style="margin: 0; padding: 0; box-sizing: border-box; vertical-align: top; display: inline-block; text-align: right; width: 39%; input {        display: none;"><input id="ck1" style="margin: 0; padding: 0; box-sizing: border-box;" checked="checked" type="checkbox"> <label style="margin: 0; padding: 0; box-sizing: border-box; display: inline-block; width: 20px; height: 20px; background: #C3DEF3; border-radius: 20px; margin-right: 3px;" for="ck1"></label> <input id="ck2" style="margin: 0; padding: 0; box-sizing: border-box;" checked="checked" type="checkbox"> <label style="margin: 0; padding: 0; box-sizing: border-box; display: inline-block; width: 20px; height: 20px; background: #C3DEF3; border-radius: 20px; margin-right: 3px;" for="ck2"></label> <input id="ck3" style="margin: 0; padding: 0; box-sizing: border-box;" type="checkbox"> <label style="margin: 0; padding: 0; box-sizing: border-box; display: inline-block; width: 20px; height: 20px; background: #C3DEF3; border-radius: 20px; margin-right: 3px;" for="ck3"></label> <input id="ck4" style="margin: 0; padding: 0; box-sizing: border-box;" type="checkbox"> <label style="margin: 0; padding: 0; box-sizing: border-box; display: inline-block; width: 20px; height: 20px; background: #C3DEF3; border-radius: 20px; margin-right: 3px;" for="ck4"></label> <input id="ck5" style="margin: 0; padding: 0; box-sizing: border-box;" type="checkbox"> <label style="margin: 0; padding: 0; box-sizing: border-box; display: inline-block; width: 20px; height: 20px; background: #C3DEF3; border-radius: 20px; margin-right: 3px;" for="ck5"></label></div>
    </div>
    </div>
    <div class="skills__item" style="margin: 0; padding: 0; box-sizing: border-box; margin-bottom: 10px;">
    <div class="left" style="margin: 0; padding: 0; box-sizing: border-box; vertical-align: top; display: inline-block; width: 60%;">
    <div class="name" style="margin: 0; padding: 0; box-sizing: border-box; font-weight: bold;">CSS</div>
    </div>
    <div class="right" style="margin: 0; padding: 0; box-sizing: border-box; vertical-align: top; display: inline-block; text-align: right; width: 39%; input {        display: none;"><input id="ck1" style="margin: 0; padding: 0; box-sizing: border-box;" checked="checked" type="checkbox"> <label style="margin: 0; padding: 0; box-sizing: border-box; display: inline-block; width: 20px; height: 20px; background: #C3DEF3; border-radius: 20px; margin-right: 3px;" for="ck1"></label> <input id="ck2" style="margin: 0; padding: 0; box-sizing: border-box;" checked="checked" type="checkbox"> <label style="margin: 0; padding: 0; box-sizing: border-box; display: inline-block; width: 20px; height: 20px; background: #C3DEF3; border-radius: 20px; margin-right: 3px;" for="ck2"></label> <input id="ck3" style="margin: 0; padding: 0; box-sizing: border-box;" type="checkbox"> <label style="margin: 0; padding: 0; box-sizing: border-box; display: inline-block; width: 20px; height: 20px; background: #C3DEF3; border-radius: 20px; margin-right: 3px;" for="ck3"></label> <input id="ck4" style="margin: 0; padding: 0; box-sizing: border-box;" type="checkbox"> <label style="margin: 0; padding: 0; box-sizing: border-box; display: inline-block; width: 20px; height: 20px; background: #C3DEF3; border-radius: 20px; margin-right: 3px;" for="ck4"></label> <input id="ck5" style="margin: 0; padding: 0; box-sizing: border-box;" type="checkbox"> <label style="margin: 0; padding: 0; box-sizing: border-box; display: inline-block; width: 20px; height: 20px; background: #C3DEF3; border-radius: 20px; margin-right: 3px;" for="ck5"></label></div>
    </div>
    </div>
    <div class="section" style="margin: 0; padding: 0; box-sizing: border-box;">
    <div class="section__title" style="margin: 0; padding: 0; box-sizing: border-box; letter-spacing: 2px; color: #54afe4; font-weight: bold; margin-bottom: 10px; text-transform: uppercase;">Interests</div>
    <div class="section__list" style="margin: 0; padding: 0; box-sizing: border-box;">
    <div class="section__list-item" style="margin: 0; padding: 0; box-sizing: border-box; margin-bottom: 40px;">Football, programming.</div>
    </div>
    </div>
    </div>
    </div>`)
  }

  

  return (
    <>
     <div className="con">
     <div>
      <h2 className='head_title'>Create Resume & Download Free</h2>
     <div className="cv">
      <div onClick={send}><img style={{width:"150px",height:"160px"}} src={resume} alt="" /></div>
      <div onClick={sendOne}><img style={{width:"150px",height:"160px"}} src={resume1} alt="" /></div>
      <div onClick={sendThre}><img style={{width:"150px",height:"160px"}} src={resume2} alt="" /></div>
      <div onClick={sendFour}><img style={{width:"150px",height:"160px"}} src={resume3} alt="" /></div>
      <div onClick={sendFive}><img style={{width:"150px",height:"160px"}} src={resume4} alt="" /></div>
     </div>
      
    <div>
    <Editor
      
      apiKey="qo462wysj4yv99by9ki4sbxc7rxjhjecbsq8kqm6vh8ayrk0"
      onInit={(evt, editor) => (editorRef.current = editor)}

      init={{
        height:"100vh",
        menubar: true,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "help",
          "wordcount",
        ],
        toolbar:
          "undo redo | blocks | " +
          "bold italic forecolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
      value={text}
      onEditorChange={(text) =>
        setText({
          target: { name: "text", value: text },
        })
      }
    />
    </div>
     </div>
     </div>
    </>
  );
}
