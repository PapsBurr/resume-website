"use client";

import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="container-comp bg-gray-300 min-h-screen">
        <div></div>
        <main className="flex-auto flex-col justify-between p-32 bg-gray-100 text-black">
          <div>
            <h1>Android apps</h1>
            <p>
              Here are some of the apps I have made throughout my degree. They
              were all made using Java in Android Studio.
            </p>
            <hr></hr>
          </div>
          <div>
            <h2>Vacation Planner App</h2>
            <p>
              This is the app I made for my B.S. Software Engineering Capstone
              project.
            </p>
            <p>
              It is a fairly simple planner app where information can be filled
              into fields to plan vacations. It utilizes a SQLite database using
              Room following the repository pattern to store all the information
              that the user stores within the app. It also includes an account
              system so that only those who know the username and password can
              access the information relating to them. Multiple accounts can be
              made.
            </p>
            <div className="flex flex-row gap-16 justify-center">
              <Image
                className="rounded-[20px]"
                src="/vacation-planner-login.jpg"
                width={250}
                height={500}
              />
              <Image
                className="rounded-[20px]"
                src="/vacation-planner-main.jpg"
                width={250}
                height={500}
               />
               <Image
                className="rounded-[20px]"
                src="/vacation-planner-details.jpg"
                width={250}
                height={500}
               />
            </div>
            <p>
              There is also the option to set notifications for when the vacation begins and ends. 
              The same is available for excursions. 
              The vacations can also be shared through SMS and email through the top menu.
            </p>
            <hr></hr>
          </div>
          <div>
            <h2>Lights out</h2>
            <p>
              This is the app I made to practice Android development. It's a simple game where if you 
              tap on a tile it will invert the tile and the four adjacent tiles next to it.
            </p>
            <div className="flex justify-center">
              <Image
                className="rounded-[20px]"
                src="/lights-out.jpg"
                width={250}
                height={500}
              />
            </div>
            <p>
              It has different navigation options on the bottom that can help you learn the games rules 
              or change the color of the tiles.
            </p>
            <hr></hr>
          </div>
        </main>
      </div>
    </>
  );
}
