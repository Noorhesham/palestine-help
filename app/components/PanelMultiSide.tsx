"use client";
import React, { useEffect } from "react";
import "../panels.css";
import gsap from "gsap";
const PanelMultiSide = () => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#container",
          scroller: ".main-container",
          pin: true,
          scrub: true,
          end: "+=4000",
          anticipatePin: 1,
        },
      })
      //   .from(".red", { xPercent: 100 })
      .from(".orange", { yPercent: 100 })
      .from(".purple", { xPercent: -100 })
      .from(".green", { yPercent: 100 });
  }, []);
  return (
    <div>
      <div className="description min-h-screen panel blue">
        <div>
          <h1>Slide-in panels</h1>
          <p>
            A simple animation linked to a ScrollTrigger with <code>scrub: true</code> creates a nifty effect.
          </p>
          <div className="scroll-down">
            Scroll down<div className="arrow"></div>
          </div>
        </div>
      </div>

      <div id="container">
        <section className="panel red">ONE</section>
        <section className="panel orange">TWO</section>
        <section className="panel purple">THREE</section>
        <section className="panel green">FOUR</section>
      </div>

      <header>
        <a href="https://greensock.com/scrolltrigger">
          <img
            className="greensock-icon"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg"
            width="200"
            height="64"
          />
        </a>
      </header>
    </div>
  );
};

export default PanelMultiSide;
