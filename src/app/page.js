
export default function Home() {
  return (
    <>
      <div className="container-comp bg-gray-300 min-h-screen">
        <div></div>
        <main className="flex-auto flex-col justify-between p-32 bg-gray-100 text-black">
          <div>
            <h1>About me</h1>
            <p>
              Hi! My name is Nathan Pons and this is a website I made as a summary of my qualifications 
              and projects I've made throughout the years. I am, as of writing this, 25 years old and 
              have been working with tech essentially throughout all of my life. I have a lot of experience 
              programming and working with a variety of programs like unity, photoshop, blender, and whatever 
              else I'm forgetting.
            </p>
            <hr></hr>
          </div>
          <div>
            <h2>Qualifications</h2>
            <h3>Western Governors University</h3>
            <div className="grid grid-cols-2">
              <p>
              B.S. Software Engineering
              </p>
              <p className="justify-end text-right">
                May, 2025
              </p>
            </div>
            <h3>Certifications</h3>
            <p>
              <ul className="list-disc m-8">
                <li>AWS Certified Cloud Practitioner</li>
                <li>CompTIA Project +</li>
                <li>Axelos ITIL Foundations</li>
              </ul>
            </p>
            <hr></hr>
          </div>
          
        </main>
      </div>
    </>
  );
}
