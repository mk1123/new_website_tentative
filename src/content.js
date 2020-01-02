import React from "react";
import curr_pic from "./profile.jpg";
import { Link } from "react-router-dom";
import scythe from "./scythe.jpg";
import book from "./book.jpg";
import study_abroad from "./study_abroad.jpg";
import skating from "./skating.jpg";
import cmd_palette from "./cmd_palette.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactMediumImg from "react-medium-zoom";
let defaultContent = (
  <p>
    Hello world. This page must still be under construction! Check back in in a
    couple of days.
  </p>
);
let content = {
  about: {
    photos: {
      body: (
        <div>
          <p>
            Here are some photos that are pertinent to me at this point in life.
            They are in no particular order.
          </p>
          <Container>
            <Row>
              <Col style={{ marginTop: "10px" }}>
                <ReactMediumImg width="200px" src={scythe}></ReactMediumImg>
              </Col>
              <Col style={{ marginTop: "10px" }}>
                <ReactMediumImg
                  width="200px"
                  src={study_abroad}
                ></ReactMediumImg>
              </Col>
            </Row>
            <Row>
              <Col>
                <ReactMediumImg
                  style={{ marginTop: "10px" }}
                  width="200px"
                  src={book}
                ></ReactMediumImg>
              </Col>
              <Col>
                <ReactMediumImg
                  style={{ marginTop: "10px" }}
                  width="200px"
                  src={skating}
                ></ReactMediumImg>
              </Col>
            </Row>
          </Container>
        </div>
      )
    },
    resume: {
      body: (
        <p>
          Here's a copy of my resume if you're interested:{" "}
          <a
            target="_blank"
            href="https://www.dropbox.com/s/67aopu1f0fke87v/Manan%20Khattar%20Resume%2010%3A9%3A19.pdf?dl=0"
          >
            link
          </a>
          .
        </p>
      )
    },
    website: {
      body: (
        <div>
          <p>
            This website is inspired by the Command Palette in VSCode/Sublime
            Text/Atom! It looks like this:
          </p>
          <ReactMediumImg width="100%" src={cmd_palette}></ReactMediumImg>

          <p style={{ marginTop: "20px" }}>
            The idea is that it provides a much more efficient, streamlined way
            of viewing different pages if you know how to use it, and it also
            provides a different perspective on going through content than the
            normal linear style.
          </p>

          <p>
            Of course, it could also be garbage. In either case, please{" "}
            <Link to="/about/contact">tell me what you think</Link>! Much much
            appreciated.
          </p>
        </div>
      )
    },
    contact: {
      body: defaultContent
    },
    "weekly-updates": {
      body: (
        <div>
          <p>1/01/2020.</p>Long time no updates! I've been pretty busy with
          worrying about finals, relaxing for a couple days, and back to
          worrying again as my flight to Edinburgh is in two days. I've made all
          my checklists - going to spend the next two days packing, saying my
          final goodbyes, and selecting books/movies to peruse for the 17-hour
          journey. I'm so excited! Also side note, I've shifted most of my
          journaling to Agenda, so I might report here less frequently. I'll
          find time eventually to update all my projects and experience and
          such, though.
          <p>
            <b>12/05/2019.</b>Thanksgiving break was great! Finally played
            Scythe with my family, which was something I had been looking
            forward to do for a while. Pretty much counting down the days till
            I'm going abroad at this point -- I'm very excited. Just waiting to
            get through this semester, finals and all, and have a fun-packed
            (very short) winter break!
          </p>
          <p>
            <b>11/23/2019</b>. Fun fact - my computer needed repairs so I turned
            it over to the Apple Store. I thought I had backed up everything on
            my computer, but for this website, turns out I only had access to
            the minified, production code, which is obviously very different
            than code that I could actually edit. <br />
            And of course, my computer got wiped, so I lost all the code for
            this website :( That's why I haven't updated it for a while, but I
            found time today to go through and reimplement all the code and
            content, and backed everything to multiple places, so everything
            should be good now. I'll make sure to go back to the regular, weekly
            updates going forward!
          </p>
          <p>
            <b>10/13/2019</b>. Power was out for three days so we had a five-day
            weekend; naturally, I was about 10x less productive than I should've
            been. So much stuff to do this week; I hope I can do all of it
            justice.
          </p>
          <p>
            <b>10/07/19</b>. I'm going to try to post weekly updates here every
            week! This is basically a blog but a bit more manageable and in a
            form that I'm comfortable with. Eventually I want to link this with
            my texting journal app so I can make texts to this page directly.
          </p>
        </div>
      )
    },
    body: (
      <div>
        <p>
          Hi everyone! I'm Manan Khattar. Welcome to my website. This is me.
          <center>
            <img
              src={curr_pic}
              alt=""
              style={{ width: "140px", marginTop: "20px", borderRadius: "50%" }}
            />
          </center>
        </p>
        <h3>tl;dr</h3>
        <ul style={{ fontSize: "0.8em" }}>
          <li>Studying Computer Science and Applied Math at UC Berkeley.</li>
          <li>
            Love learning. And technology. And self-growth. And optimizing
            things.
          </li>
          <li>Trying hard to be a good person.</li>
          <li>
            Want to start sharing more about myself! This website is a good
            place to start.
          </li>
        </ul>
        <p>
          Please explore! Let me know if you see anything weird or
          objectionable. For convenience, here are some other links on this
          section of the website:
        </p>
        <ul style={{ fontSize: "0.8em" }}>
          <li>
            <Link to="/about/website">How does this website work?</Link>
          </li>
          <li>
            <Link to="/about/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about/resume">Resume</Link>
          </li>
          <li>
            <Link to="/about/photos">Photos</Link>
          </li>
          <li>
            <Link to="/about/weekly-updates">Weekly updates</Link>
          </li>
        </ul>
      </div>
    )
  },
  projects: {
    polly: {
      body: defaultContent
    },
    utrient: {
      body: defaultContent
    },
    "cal-eats": {
      body: defaultContent
    },
    "gm-hackathon": {
      body: defaultContent
    },
    "text-journal": {
      body: defaultContent
    },
    "cal-admissions": {
      body: defaultContent
    },
    "social-network": {
      body: defaultContent
    },
    body: defaultContent
  },
  experience: {
    industry: {
      pause: {
        body: defaultContent
      },
      dss: {
        body: defaultContent
      },
      dascena: {
        body: defaultContent
      },
      body: defaultContent
    },
    teaching: {
      algorithms: {
        body: defaultContent
      },
      "cs-mentors": {
        body: defaultContent
      },
      "cs-scholars": {
        body: defaultContent
      },
      "data-science": {
        body: defaultContent
      },
      body: defaultContent
    },
    body: defaultContent
  },
  research: {
    math: {
      body: defaultContent
    },
    modin: {
      body: defaultContent
    },
    pocab: {
      body: defaultContent
    },
    sociology: {
      body: defaultContent
    },
    astrophysics: {
      body: defaultContent
    },
    "nba-hackathon": {
      body: defaultContent
    },
    "college-bball": {
      body: defaultContent
    },
    "raise-social-game": {
      body: defaultContent
    },
    "slam-indoor-mapping": {
      body: defaultContent
    },
    body: defaultContent
  },
  my: {
    music: {
      body: defaultContent
    },
    books: {
      body: defaultContent
    },
    films: {
      body: defaultContent
    },
    thoughts: {
      body: defaultContent
    },
    interests: {
      body: defaultContent
    },
    "board-games": {
      body: defaultContent
    },
    "video-games": {
      body: defaultContent
    },
    body: defaultContent
  }
};

export default content;
