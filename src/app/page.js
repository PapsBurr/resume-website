"use client";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container-comp bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 min-h-screen">
        <div></div>
        <main className="flex-auto flex-col justify-between p-32 bg-gray-100 text-black">
          <div>
            <h1 className="text-center">Nathan Pons</h1>
            <h1 className="text-center m-6">Software Engineer</h1>
            <hr></hr>
            <h1>About Me</h1>
            <p>
              Hi! My name is Nathan Pons and this is a website I made as a
              summary of my qualifications and projects I've made throughout the
              years (especially throughout my Software Engineering degree). I
              am, as of writing this, 25 years old and have been working with
              tech essentially throughout all of my life. I have a lot of
              experience programming and working with a variety of programs like
              unity, photoshop, blender, and a dozen other things I'm forgetting.
            </p>
            <hr></hr>
          </div>
          <div>
            <h2>Qualifications</h2>
            <h3>Western Governors University</h3>
            <div className="grid grid-cols-2">
              <p className="underline">B.S. Software Engineering</p>
              <p className="justify-end text-right">May, 2025</p>
            </div>
            <h3>Utah State Board of Education</h3>
            <div className="grid grid-cols-2">
              <p className="underline">GED - High school diploma</p>
              <p className="justify-end text-right">Dec, 2022</p>
            </div>
            <h3>Certifications</h3>
            <ul className="list-disc m-8 text-xl">
              <li>AWS Certified Cloud Practitioner</li>
              <li>CompTIA Project +</li>
              <li>Axelos ITIL Foundations</li>
              <li>Coursera Google IT Support</li>
            </ul>
            <h3>Skills / Hobbies / Interests</h3>
            <ul className="list-disc m-8 text-xl">
              <li>Programming</li>
              <li>Science</li>
              <li>Learning</li>
              <li>Art (Drawing / Painting / Designing)</li>
              <li>Aerospace</li>
              <li>Puzzle/Problem Solving</li>
              <li>Strategy</li>
            </ul>
            <h3>Programming Languages</h3>
            <ul className="list-disc m-8 text-xl">
              <li>Java</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>UML</li>
            </ul>
            <hr></hr>
          </div>
          <div>
            <h2>Art</h2>
            <p>
              Art is something I've spent a lot of time doing and I feel it is
              deeply related to programming. Programming is all about creating a
              good experience for a user and meeting their needs, and art is one
              of the mediums to accomplish that. It especially shines through
              GUIs and guiding a user through an application. Understanding
              where a user is likely to search for something and, as a
              developer, being able to provide that thing for them where they
              want it.
            </p>
            <p>
              It's also something I enjoy so I'm going to show a couple
              things I've made:
            </p>
            <h3 className="text-center">
              Griffin, Digital, ~2021
            </h3>
            <div className="flex gap-16 justify-center my-8">
              <Image
                className="rounded-[20px] shadow-md/40"
                src="/resume-website/digital-griffin.jpg"
                alt="An image of the reservation hotel website."
                width={500}
                height={500}
              />
            </div>
            <h3 className="text-center">
              Flower with Dew, Oil paint, ~2020
            </h3>
            <div className="flex gap-16 justify-center my-8">
              <Image
                className="rounded-[20px] shadow-md/40"
                src="/resume-website/painting-flower.jpg"
                alt="An image of the reservation hotel website."
                width={500}
                height={500}
              />
            </div>
            <hr></hr>
          </div>
          <div>
            <h2>This Site</h2>
            <p>
              Built with JavaScript using Next.js, HTML, and Tailwind CSS. It is
              currently only viewable on browser and is not optimized for phones. 
              Also, I'm sure I made a bunch of grammatical errors
              throughout the site. I'm trying to make this fast and as
              professional I can, but still fast.
            </p>
            <hr></hr>
          </div>
        </main>
      </div>
    </>
  );
}
