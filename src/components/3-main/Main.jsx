import React from "react";
import "./Main.css";
function Main() {
  return (
    <main className="flex">
      <section className="flex left-section  ">
        <button className="active">All Projects</button>
        <button>HTML & CSS</button>
        <button>JavaScript</button>
        <button>React & MUI</button>
        <button>Ruby On Rails</button>
        <button>Node & Express</button>
      </section>

      <section className="right-section flex  ">
        {["aa", "bb", "cc" ,"b", "c"].map((item) => {
          return (
            <article key={item} className="card">
              <img
                className=""
                width={266}
                src="/public/resturant.jpeg"
                alt="resturant"
              />
              <div className="box  " style={{ width: "266px" }}>
                <h1 className="title">Landing Page2</h1>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore inventore doloribus in quasi alias animi?
                </p>

                <div className="flex icons ">
                  <div style={{ gap: "18px" }} className="flex ">
                    <a href="">
                      <div className="icon-link" />
                    </a>
                    <a href="">
                      <div className="icon-github" />
                    </a>
                  </div>

                  <a className="link flex" href="">
                    more
                    <span className="icon-arrow-right"></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default Main;
