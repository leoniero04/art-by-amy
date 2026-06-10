import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

import signatureLogo from "./assets/signature_logo.png";
import artistStudio from "./assets/artist-studio.png";

import artwork01 from "./assets/drip-bloom-01.png";
import artwork02 from "./assets/drip-bloom-02.png";
import artwork03 from "./assets/drip-bloom-03.png";
import artwork04 from "./assets/drip-bloom-04.png";
import artwork05 from "./assets/drip-bloom-05.png";
import artwork06 from "./assets/drip-bloom-06.png";

import closeArtwork01 from "./assets/close-drip-bloom-01.png";
import closeArtwork02 from "./assets/close-drip-bloom-02.png";
import closeArtwork03 from "./assets/close-drip-bloom-03.png";
import closeArtwork04 from "./assets/close-drip-bloom-04.png";
import closeArtwork05 from "./assets/close-drip-bloom-05.png";
import closeArtwork06 from "./assets/close-drip-bloom-06.png";

import signedImage from "./assets/signed.png";
import limitedImage from "./assets/limited.png";
import protectedImage from "./assets/protected.png";

import zitatOne from "./assets/zitat_1.png";
import zitatTwo from "./assets/zitat_2.png";
import zitatThree from "./assets/zitat_3.png";

import strokeOne from "./assets/stroke_1.png";
import strokeTwo from "./assets/stroke_2.png";

import mockupArtwork01A from "./assets/mockup-drip-bloom-01-01.png";
import mockupArtwork01B from "./assets/mockup-drip-bloom-01-02.png";

import mockupArtwork02A from "./assets/mockup-drip-bloom-02-01.png";
import mockupArtwork02B from "./assets/mockup-drip-bloom-02-02.png";

import mockupArtwork03A from "./assets/mockup-drip-bloom-03-01.png";
import mockupArtwork03B from "./assets/mockup-drip-bloom-03-02.png";

import mockupArtwork04A from "./assets/mockup-drip-bloom-04-01.png";
import mockupArtwork04B from "./assets/mockup-drip-bloom-04-02.png";

import mockupArtwork05A from "./assets/mockup-drip-bloom-05-01.png";
import mockupArtwork05B from "./assets/mockup-drip-bloom-05-02.png";

import mockupArtwork06A from "./assets/mockup-drip-bloom-06-01.png";
import mockupArtwork06B from "./assets/mockup-drip-bloom-06-02.png";

const artworks = [
  {
    id: "pastel-arrangement",
    title: "Pastel Arrangement",
    image: artwork01,
    detailImages: [
      artwork01,
      closeArtwork01,
      mockupArtwork01A,
      mockupArtwork01B,
    ],
    label: "Limited print",
    meta: "Mixed-media original · 2026",
    size: "50 × 70 cm",
    material: "Archival fine art paper",
    short:
      "Soft pastel florals, visible drips and an airy blue ground with gentle layered movement that continues beyond the first impression.",
    description:
      "Pastel Arrangement keeps the raw hand of the original painting visible while staying bright, open and calm. It is made for interiors that need presence without heaviness.",
  },
  {
    id: "green-intensity",
    title: "Green Intensity",
    image: artwork02,
    detailImages: [
      artwork02,
      closeArtwork02,
      mockupArtwork02A,
      mockupArtwork02B,
    ],
    label: "Limited print",
    meta: "Mixed-media original · 2026",
    size: "50 × 70 cm",
    material: "Archival fine art paper",
    short:
      "Painterly florals, deep greens and luminous pink contour lines with layered paint texture and a more denser dramatic atmosphere.",
    description:
      "Green Intensity is the most dramatic work of the first drop. Deep green grounds, pale florals and visible pink contour lines create a darker, denser atmosphere.",
  },
  {
    id: "night-flower",
    title: "Night Flower",
    image: artwork03,
    detailImages: [
      artwork03,
      closeArtwork03,
      mockupArtwork03A,
      mockupArtwork03B,
    ],
    label: "Limited print",
    meta: "Mixed-media original · 2026",
    size: "50 × 70 cm",
    material: "Archival fine art paper",
    short:
      "A single red bloom with long drips and stronger contrast, created for rooms that can hold a sharper visual statement without feeling cold.",
    description:
      "Night Flower focuses on one expressive bloom. The red tones, long drips and open negative space make it feel more direct and graphic.",
  },
  {
    id: "held-in-blue",
    title: "Held in Blue",
    image: artwork04,
    detailImages: [
      artwork04,
      closeArtwork04,
      mockupArtwork04A,
      mockupArtwork04B,
    ],
    label: "Limited print",
    meta: "Mixed-media original · 2026",
    size: "50 × 70 cm",
    material: "Archival fine art paper",
    short:
      "Pale pinks, creams and yellow notes on an airy blue ground, with tall stems and a softer spring-like rhythm throughout the composition.",
    description:
      "Held in Blue has a taller, lighter arrangement with soft pinks, creams and yellow notes. It feels open, vertical and quietly optimistic.",
  },
  {
    id: "rose-veil",
    title: "Rose Veil",
    image: artwork05,
    detailImages: [
      artwork05,
      closeArtwork05,
      mockupArtwork05A,
      mockupArtwork05B,
    ],
    label: "Limited print",
    meta: "Mixed-media original · 2026",
    size: "50 × 70 cm",
    material: "Archival fine art paper",
    short:
      "Warm blush petals, loose edges and visible drips create a soft but expressive print with a slightly romantic handmade presence.",
    description:
      "Rose Veil is warm and expressive, with loose pink petals, painterly marks and softer negative space around the main bloom.",
  },
  {
    id: "deep-bloom",
    title: "Deep Bloom",
    image: artwork06,
    detailImages: [
      artwork06,
      closeArtwork06,
      mockupArtwork06A,
      mockupArtwork06B,
    ],
    label: "Limited print",
    meta: "Mixed-media original · 2026",
    size: "50 × 70 cm",
    material: "Archival fine art paper",
    short:
      "A darker floral print with rich red tones, a small yellow accent and visible painted texture that rewards a closer look.",
    description:
      "Deep Bloom combines a dark red ground with a pale pink bloom and a small yellow accent. It is bold, moody and tactile.",
  },
];

const releaseCards = [
  {
    title: "Signed",
    text: "Each print is signed before shipping.",
    image: signedImage,
  },
  {
    title: "Limited",
    text: "Each print is released as an edition of 20.",
    image: limitedImage,
  },
  {
    title: "Protected",
    text: "Careful packaging and clear delivery details.",
    image: protectedImage,
  },
];



const feedbackItems = [
  {
    quote:
      "I like that the work still feels raw. You can see the paint, the drips and the hand behind it.",
    author: "Laura Petersen",
    avatar: zitatOne,
  },
  {
    quote:
      "Knowing that the prints are signed and limited makes the drop seem more considered, not like a random poster shop.",
    author: "Nora Klein",
    avatar: zitatThree,
  },
  {
    quote:
      "I like that the details are shown before ordering. It feels calm, not like I have to rush into a decision.",
    author: "Mina Neumann",
    avatar: zitatTwo,
  },
];

const faqItems = [
  {
    question: "What happens when I join the drop list?",
    answer:
      "You receive the release note before the drop opens. It includes artwork details, edition information, practical ordering notes and a small list-only discount.",
  },
  {
    question: "Are the prints limited and signed?",
    answer:
      "Yes. Each artwork is released as an edition of 20 and signed by Amy before shipping.",
  },
  {
    question: "Will I receive price and shipping details first?",
    answer:
      "Yes. The release note explains price, material, shipping and return information before you decide.",
  },
  {
    question: "Is joining the list a purchase commitment?",
    answer:
      "No. Joining the list only gives you early information. It does not reserve or purchase a print automatically.",
  },
];

function useReveal(dependency) {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.16 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [dependency]);
}

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash || "#top");

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || "#top");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return hash;
}

function useTypingPlaceholder(text) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    let timeout;

    if (direction === 1 && index === text.length) {
      timeout = window.setTimeout(() => setDirection(-1), 2600);
    } else if (direction === -1 && index === 0) {
      timeout = window.setTimeout(() => setDirection(1), 700);
    } else {
      timeout = window.setTimeout(
        () => setIndex((current) => current + direction),
        direction === 1 ? 74 : 38
      );
    }

    return () => window.clearTimeout(timeout);
  }, [direction, index, text]);

  return text.slice(0, index);
}

function useCarouselProgress(ref, itemCount, preferredPages = 2) {
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    let frame = 0;

    const update = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const maxScroll = Math.max(0, element.scrollWidth - element.clientWidth);
        const nextPages = maxScroll > 4 ? preferredPages : 1;
        const ratio = maxScroll > 0 ? element.scrollLeft / maxScroll : 0;
        const nextPage = nextPages === 1 ? 0 : Math.min(nextPages - 1, Math.round(ratio * (nextPages - 1)));

        setPages(nextPages);
        setPage(nextPage);
      });
    };

    update();
    element.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(element);

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      element.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [itemCount, preferredPages, ref]);

  return { page, pages };
}

function goToWork(id) {
  window.location.hash = `#work-${id}`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goToPageSection(id) {
  window.location.hash = `#${id}`;

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function getCardStep(element) {
  const firstCard = element?.querySelector(".work-card");
  if (!element || !firstCard) return element ? element.clientWidth * 0.78 : 0;

  const styles = window.getComputedStyle(element);
  const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;
  return firstCard.getBoundingClientRect().width + gap;
}

function getCarouselTarget(element, direction) {
  if (!element) return 0;

  const maxScroll = Math.max(0, element.scrollWidth - element.clientWidth);
  const step = getCardStep(element);
  if (!step) return 0;

  const currentIndex = Math.round(element.scrollLeft / step);
  const nextIndex = Math.max(0, currentIndex + direction);

  return Math.max(0, Math.min(maxScroll, nextIndex * step));
}

function scrollCarouselTo(element, target) {
  if (!element) return;

  const maxScroll = Math.max(0, element.scrollWidth - element.clientWidth);
  const safeTarget = Math.max(0, Math.min(maxScroll, target));

  element.scrollTo({ left: safeTarget, behavior: "smooth" });
}

function getCarouselPointerHandlers(ref) {
  const resetDragState = () => {
    const element = ref.current;
    if (!element) return;

    window.setTimeout(() => {
      element.dataset.dragging = "false";
    }, 0);
  };

  return {
    onPointerDown: (event) => {
      const element = ref.current;
      if (!element) return;

      element.dataset.startX = String(event.clientX);
      element.dataset.startY = String(event.clientY);
      element.dataset.dragging = "false";
    },
    onPointerMove: (event) => {
      const element = ref.current;
      if (!element) return;

      const startX = Number(element.dataset.startX || event.clientX);
      const startY = Number(element.dataset.startY || event.clientY);
      const deltaX = Math.abs(event.clientX - startX);
      const deltaY = Math.abs(event.clientY - startY);

      if (deltaX > 10 && deltaX > deltaY) {
        element.dataset.dragging = "true";
      }
    },
    onPointerUp: resetDragState,
    onPointerCancel: resetDragState,
    onMouseLeave: resetDragState,
  };
}

function BackgroundStrokes({ variant = "default" }) {
  const showSecondStroke = !["process", "detail-feedback", "release"].includes(variant);

  return (
    <div className={`background-strokes ${variant}-strokes`} aria-hidden="true">
      <img src={strokeOne} alt="" className="brush-stroke brush-stroke-one" data-reveal="stroke" />
      {showSecondStroke ? (
        <img src={strokeTwo} alt="" className="brush-stroke brush-stroke-two" data-reveal="stroke" />
      ) : null}
    </div>
  );
}

function Header({ isDetailPage = false, onOpenJoinModal }) {
  const [showNotice, setShowNotice] = useState(true);
  const [isWorksReached, setIsWorksReached] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowNotice(window.scrollY < 48);

      if (isDetailPage) {
        setIsWorksReached(false);
        return;
      }

      const worksSection = document.querySelector("#works");
      if (!worksSection) {
        setIsWorksReached(false);
        return;
      }

      const worksTop = worksSection.getBoundingClientRect().top;
      setIsWorksReached(worksTop <= 170);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isDetailPage]);

  const joinClassName = [
    "nav-join",
    isDetailPage ? "is-detail-active" : "",
    !isDetailPage && isWorksReached ? "is-scroll-active" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="top-stack">
      <header className="site-header">
        <a className="logo" href="#top" aria-label="Art by Amy home">
          <img src={signatureLogo} alt="Art by Amy" />
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="#works">Works</a>
          <a href="#about">About</a>
          <a href="#quality">Quality</a>
          <a href="#process">Why join?</a>
          <button type="button" className={joinClassName} onClick={onOpenJoinModal}>
            Join the drop
          </button>
        </nav>
      </header>

      <div className={`notice-bar ${showNotice ? "is-visible" : ""}`}>
        Signed editions · Limited release · Details upfront
      </div>
    </div>
  );
}

function ConfettiBurst({ side }) {
  return (
    <span className={`confetti-burst confetti-burst-${side}`} aria-hidden="true">
      {Array.from({ length: 8 }).map((_, index) => (
        <span key={index} className="confetti-piece" />
      ))}
    </span>
  );
}

function SignupForm({ dark = false }) {
  const placeholder = useTypingPlaceholder("Your email address");
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [status, setStatus] = useState("idle");

  const isSent = status === "success";
  const isError = status === "error";

  function submitForm(event) {
    event.preventDefault();

    const trimmedValue = value.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue);

    if (!trimmedValue) {
      setStatus("error");
      return;
    }

    if (!isValidEmail) {
      setStatus("invalid");
      return;
    }

    setStatus("success");
  }

  function handleChange(event) {
    setValue(event.target.value);
    if (status !== "idle") setStatus("idle");
  }

  return (
    <form className={`signup-form ${dark ? "signup-form-dark" : ""}`} onSubmit={submitForm} noValidate>
      <div className={`signup-row ${isSent ? "has-confetti" : ""}`}>
        {isSent ? <ConfettiBurst side="left" /> : null}
        <input
          type="email"
          value={value}
          placeholder={focused || value ? "Your email address" : placeholder || " "}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-label="Email address"
          aria-invalid={isError || status === "invalid" ? "true" : "false"}
        />
        <button
          className={`button ${dark ? "button-glass" : "button-primary"} ${isSent ? "is-sent" : ""}`}
          type="submit"
        >
          {isSent ? "Joined" : "Join the drop"}
        </button>
        {isSent ? <ConfettiBurst side="right" /> : null}
      </div>

      <p
        className={`form-feedback ${dark ? "dark" : ""} ${isSent ? "success" : ""} ${isError || status === "invalid" ? "error" : ""}`}
        aria-live="polite"
      >
        {isSent ? (
          <>
            <span className="feedback-check" aria-hidden="true">✓</span>
            Release note reserved for this email.
          </>
        ) : status === "error" ? (
          "Please enter your email first."
        ) : status === "invalid" ? (
          "Please enter a valid email address."
        ) : (
          "No purchase commitment · release details only"
        )}
      </p>
    </form>
  );
}

function JoinDropModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="join-modal-overlay" role="presentation" onMouseDown={onClose}>
      <section
        className="join-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="join-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="join-modal-close" type="button" onClick={onClose} aria-label="Close popup">
          ×
        </button>

        <span className="eyebrow eyebrow-on-dark">Join the drop</span>
        <h2 className="section-title join-modal-title" id="join-modal-title">
          Get the first<br />release note
        </h2>
        <p className="body-large join-modal-copy">
          Enter your email to receive the release note, including a small list-only discount, before the first drop opens.
        </p>

        <SignupForm dark />
      </section>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="hero-section surface-hero" id="top">
      <BackgroundStrokes variant="hero" />

      <div className="container hero-grid">
        <div className="hero-copy" data-reveal="left">
          <span className="eyebrow">First Drop</span>

          <h1 className="hero-title" aria-label="Drip and Bloom">
            <span className="hero-title-drip">Drip</span>
            <span className="hero-title-bloom"> &amp; Bloom</span>
          </h1>

          <p className="hero-subtitle">Six signed prints, one limited release</p>

          <p className="hero-text">
            A small print drop from Amy’s original mixed-media paintings. Join the list for early access and release details.
          </p>

          <SignupForm />
        </div>

        <button
          className="hero-visual hero-art-card hero-art-card-clickable"
          type="button"
          onClick={() => goToWork("green-intensity")}
          aria-label="Open Green Intensity artwork details"
          data-reveal="right"
        >
          <img src={artwork02} alt="Green Intensity floral artwork" />
        </button>
      </div>
    </section>
  );
}

function WorkCard({ artwork }) {
  function openArtwork(event) {
    const track = event.currentTarget.closest(".works-track");
    if (track?.dataset.dragging === "true") return;

    goToWork(artwork.id);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      goToWork(artwork.id);
    }
  }

  return (
    <article
      className="work-card"
      onClick={openArtwork}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Open ${artwork.title}`}
    >
      <div className="work-card-image">
        <img src={artwork.image} alt={`${artwork.title} artwork`} />
      </div>
      <div className="work-card-copy">
        <span className="work-card-kicker">{artwork.label}</span>
        <h3>{artwork.title}</h3>
        <p>{artwork.short}</p>
      </div>
    </article>
  );
}

function WorksCarousel() {
  const trackRef = useRef(null);
  const { page, pages } = useCarouselProgress(trackRef, artworks.length, 3);

  function scrollBy(direction) {
    const el = trackRef.current;
    if (!el) return;
    const target = getCarouselTarget(el, direction);
    scrollCarouselTo(el, target);
  }

  function scrollToPage(index) {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    const target = pages === 1 ? 0 : (maxScroll / (pages - 1)) * index;
    scrollCarouselTo(el, target);
  }

  return (
    <section className="section surface-soft" id="works">
      <div className="container">
        <div className="section-header section-header-split" data-reveal="up">
          <div>
            <h2 className="works-title">
              <span className="title-strong">Preview the collection</span>
              <br />
              <span className="title-muted">Explore the first six signed prints</span>
            </h2>
          </div>

          <div className="carousel-controls">
            <button className="icon-button" type="button" onClick={() => scrollBy(-1)} aria-label="Previous works">
              ‹
            </button>
            <button className="icon-button" type="button" onClick={() => scrollBy(1)} aria-label="Next works">
              ›
            </button>
          </div>
        </div>

        <div
          className="works-track"
          ref={trackRef}
          data-reveal="up"
          {...getCarouselPointerHandlers(trackRef)}
        >
          {artworks.map((artwork) => (
            <WorkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>

        <div className="works-progress" aria-label="Collection scroll progress">
          {Array.from({ length: pages }).map((_, index) => (
            <button
              key={index}
              type="button"
              className={`works-progress-dot ${page === index ? "is-active" : ""}`}
              onClick={() => scrollToPage(index)}
              aria-label={`Go to collection page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="section surface-cream-alt" id="about">
      <BackgroundStrokes variant="about" />

      <div className="container two-column-grid about-grid">
        <div className="about-copy" data-reveal="left">
          <span className="eyebrow">About the artist</span>
          <h2 className="section-title big-title statement-title" aria-label="Artist Statement">
            <span className="statement-title-artist">Artist</span>{" "}
            <span className="statement-title-statement">Statement</span>
          </h2>
          <p className="body-large statement-lead">I paint flowers so they do not fade.</p>
          <p className="body-large">
            In my paintings, I like mixing loose floral shapes with rougher marks: dripping color, visible brush strokes and hand-drawn lines that do not always behave. I enjoy the moment where a piece stops looking too neat and starts feeling more expressive.
          </p>
          <p className="body-large">
            This first drop turns six original floral works into signed fine art prints. Each one carries its own mood, some soft, some darker, some a little dramatic, but they all come from the same place: movement, contrast and messy little accidents.
          </p>
          <p className="body-large">
            It also marks the beginning of finally sharing my work beyond my own studio, which feels exciting, slightly terrifying, and probably exactly right.
          </p>
          <p className="body-large">
            I hope they feel raw, imperfect in the right places, and bring more than decoration into your room.
          </p>
          <p className="body-large artist-signoff">— Amy</p>
        </div>

        <div className="about-visual-card" data-reveal="right">
          <img src={artistStudio} alt="Amy in the studio" />
        </div>
      </div>
    </section>
  );
}

function ReleaseSection() {
  return (
    <section className="section surface-cream" id="quality">
      <BackgroundStrokes variant="release" />

      <div className="container">
        <div className="left-aligned-copy" data-reveal="up">
          <span className="eyebrow">Small Edition</span>
          <h2 className="section-title big-title release-title-mixed" aria-label="Order Details">
            <span className="release-title-order">Order</span>{" "}
            <span className="release-title-details">Details</span>
          </h2>
        </div>

        <div className="release-grid" data-reveal="up">
          {releaseCards.map((card, index) => (
            <article className="release-card" key={card.title}>
              <div className="release-card-image">
                <img src={card.image} alt="" />
              </div>
              <div className="release-card-copy">
                <span className="release-number">0{index + 1}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeedbackHeader({ onDark = false }) {
  return (
    <div className="confidence-copy" data-reveal="left">
      <span className={`eyebrow ${onDark ? "eyebrow-on-dark" : ""}`}>Preview feedback</span>
      <h2 className="section-title feedback-title" aria-label="First Reactions">
        <span className="feedback-title-first">First</span>{" "}
        <span className="feedback-title-reactions">Reactions</span>
      </h2>
      <p className="body-large">Early reactions to the prints, details and<br />ordering experience.</p>
    </div>
  );
}

function CollectorConfidence() {
  return (
    <section className="section collector-section">
      <div className="container confidence-grid">
        <FeedbackHeader />

        <div className="feedback-grid" data-reveal="right">
          {feedbackItems.map((item) => (
            <article className="feedback-card" key={item.author}>
              <p className="feedback-quote">“{item.quote}”</p>
              <div className="feedback-author">
                <span className="feedback-avatar">
                  <img src={item.avatar} alt="" />
                </span>
                <span className="feedback-label">— {item.author}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function IconDocument() {
  return (
    <svg className="line-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 3.8h7.4L18 7.4v12.8H7z" />
      <path d="M14 4v4h4" />
      <path d="M9.5 12h5" />
      <path d="M9.5 15h5" />
    </svg>
  );
}

function IconMaterial() {
  return (
    <svg className="line-icon paper-wave-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.2 4.8h9.4l2.2 2.4v12H6.2z" />
      <path d="M15.6 4.9v2.6h2.2" />
      <path d="M8.6 11.1c1.2-.8 2.4-.8 3.6 0s2.4.8 3.6 0" />
      <path d="M8.6 14.2c1.2-.8 2.4-.8 3.6 0s2.4.8 3.6 0" />
      <path d="M8.6 17.2c1.2-.8 2.4-.8 3.6 0s2.4.8 3.6 0" />
    </svg>
  );
}

function IconTruck() {
  return (
    <svg className="line-icon truck-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3.8 7.5h10.4v8.2H3.8z" />
      <path d="M14.2 10.2h3.6l2.4 2.7v2.8h-6" />
      <path d="M7.2 18.2a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1z" />
      <path d="M17.3 18.2a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1z" />
    </svg>
  );
}

function IconReturn() {
  return (
    <svg className="line-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 7 5.5 10.5 9 14" />
      <path d="M6 10.5h8.2c3 0 5.3 2 5.3 4.9 0 2.8-2.1 4.8-5.1 4.8H10" />
    </svg>
  );
}

function ProcessSection() {
  const process = [
    {
      number: "01",
      title: "Join the drop list",
      text: "Leave your email for the first release note and enjoy a small list-only discount.",
    },
    {
      number: "02",
      title: "Get reminded",
      text: "Be notified when the drop goes live.",
    },
    {
      number: "03",
      title: "Read the details",
      text: <>See material, edition and shipping notes first.<br />Decide without pressure.</>,
    },
  ];

  return (
    <section className="section process-section-dark" id="process">
      <BackgroundStrokes variant="process" />

      <div className="container">
        <div className="left-aligned-copy" data-reveal="up">
          <span className="eyebrow eyebrow-on-dark">Why join?</span>
          <h2 className="section-title process-title-dark process-mixed-title" aria-label="First access to the drop">
            <span className="process-title-first">First access</span>{" "}
            <span className="process-title-drop">to the drop</span>
          </h2>
        </div>

        <div className="process-grid process-grid-sequence">
          {process.map((item, index) => (
            <article
              className="process-card process-card-dark process-card-sequence"
              key={item.number}
              data-reveal="sequence"
              style={{ "--sequence-delay": `${index * 260}ms` }}
            >
              <span className="process-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuestionsSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section surface-cream questions-section">
      <BackgroundStrokes variant="questions" />

      <div className="container questions-grid">
        <div className="questions-copy" data-reveal="left">
          <span className="eyebrow">Common Questions</span>
          <h2 className="section-title questions-title-mixed" aria-label="No guessing before ordering">
            <span className="questions-title-clear">No guessing</span>
            <br />
            <span className="questions-title-rest">before ordering</span>
          </h2>
        </div>

        <div className="question-list" data-reveal="right">
          {faqItems.map((item, index) => (
            <article className={`question-item ${openIndex === index ? "is-open" : ""}`} key={item.question}>
              <button className="question-trigger" type="button" onClick={() => setOpenIndex(openIndex === index ? -1 : index)}>
                <span>{item.question}</span>
                <span className="question-icon">+</span>
              </button>
              <div className="question-panel">
                <div className="question-panel-inner">
                  <p>{item.answer}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="section final-cta-section" id="join">
      <div className="container final-cta-inner" data-reveal="up">
        <span className="eyebrow eyebrow-on-dark">Join the drop</span>
        <h2 className="section-title cta-title">Get the release note before<br />the first drop opens</h2>
        <p className="body-large cta-copy">Receive the release note, including a small list-only discount,<br />before the first drop opens.</p>
        <SignupForm dark />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={signatureLogo} alt="Art by Amy" />
          </div>

          <div className="footer-links">
            <a
              href="#quality"
              onClick={(event) => {
                event.preventDefault();
                goToPageSection("quality");
              }}
            >
              Order details
            </a>
            <a
              href="#process"
              onClick={(event) => {
                event.preventDefault();
                goToPageSection("process");
              }}
            >
              Why join?
            </a>
            <a href="mailto:hello@artbyamy.com?subject=Art%20by%20Amy%20Drop%20Question">Contact</a>
          </div>
        </div>

        <div className="footer-notes">
          <p>
            Art by Amy is a fictional student project prototype. All artwork, product information, release details and customer feedback are used for concept and interface demonstration only.
          </p>
          <p>
            The limited art-print drop, purchase flow, payment process and shipping information are simulated. No real purchase, payment or shipping process is active.
          </p>
          <p>
            Rights notice: All visual material, artwork concepts, interface design and written content are part of this project context only. They may not be reproduced, sold, redistributed or used commercially.
          </p>
        </div>
      </div>
    </footer>
  );
}


function DetailMoreWorks({ currentId }) {
  const trackRef = useRef(null);
  const relatedArtworks = artworks.filter((item) => item.id !== currentId);
  const { page, pages } = useCarouselProgress(trackRef, relatedArtworks.length);

  function scrollBy(direction) {
    const el = trackRef.current;
    if (!el) return;
    const target = getCarouselTarget(el, direction);
    scrollCarouselTo(el, target);
  }

  function scrollToPage(index) {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    const target = pages === 1 ? 0 : (maxScroll / (pages - 1)) * index;
    scrollCarouselTo(el, target);
  }

  return (
    <section className="section surface-cream detail-more-section detail-more-section-light">
      <div className="container">
        <div className="section-header section-header-split" data-reveal="up">
          <div>
            <h2 className="works-title">
              <span className="title-strong">Explore more works</span>
              <br />
              <span className="title-muted">Continue with the remaining signed prints</span>
            </h2>
          </div>

          <div className="carousel-controls">
            <button className="icon-button" type="button" onClick={() => scrollBy(-1)} aria-label="Previous works">
              ‹
            </button>
            <button className="icon-button" type="button" onClick={() => scrollBy(1)} aria-label="Next works">
              ›
            </button>
          </div>
        </div>

        <div
          className="works-track detail-works-track"
          ref={trackRef}
          data-reveal="up"
          {...getCarouselPointerHandlers(trackRef)}
        >
          {relatedArtworks.map((item) => (
            <WorkCard key={item.id} artwork={item} />
          ))}
        </div>

        <div className="works-progress" aria-label="Collection scroll progress">
          {Array.from({ length: pages }).map((_, index) => (
            <button
              key={index}
              type="button"
              className={`works-progress-dot ${page === index ? "is-active" : ""}`}
              onClick={() => scrollToPage(index)}
              aria-label={`Go to collection page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArtworkDetail({ artwork }) {
  const [activeImage, setActiveImage] = useState(0);
  const images = artwork.detailImages?.length ? artwork.detailImages : [artwork.image];

  useEffect(() => {
    setActiveImage(0);
  }, [artwork.id]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 7600);

    return () => window.clearTimeout(timeout);
  }, [activeImage, images.length]);

  function nextImage() {
    setActiveImage((current) => (current + 1) % images.length);
  }

  const detailInfo = [
    {
      title: "Edition size",
      text: "Edition of 20",
      icon: <IconDocument />,
    },
    {
      title: "Material",
      text: artwork.material,
      icon: <IconMaterial />,
    },
    {
      title: "Shipping",
      text: "Shipping note included before ordering",
      icon: <IconTruck />,
    },
    {
      title: "Returns",
      text: "Return details included before ordering",
      icon: <IconReturn />,
    },
  ];

  return (
    <>
      <section className="section detail-hero-section surface-hero">
        <BackgroundStrokes variant="detail" />

        <div className="container detail-hero-grid">
          <div className="detail-copy" data-reveal="left">
            <button
              className="back-link"
              type="button"
              onClick={() => {
                window.location.hash = "#works";
                window.setTimeout(() => {
                  document.getElementById("works")?.scrollIntoView({ behavior: "auto", block: "start" });
                }, 0);
              }}
            >
              ← Back to works
            </button>

            <h1 className="section-title detail-title">{artwork.title}</h1>
            <p className="detail-subtitle">{artwork.meta}</p>
            <p className="body-large detail-text">{artwork.description}</p>

            <div className="detail-meta-list">
              <div>
                <span className="meta-label">Edition</span>
                <strong>Edition of 20</strong>
              </div>
              <div>
                <span className="meta-label">Size</span>
                <strong>{artwork.size}</strong>
              </div>
              <div>
                <span className="meta-label">Material</span>
                <strong>{artwork.material}</strong>
              </div>
            </div>
          </div>

          <div className="detail-image-showcase" data-reveal="right">
            <button className="detail-image-frame" type="button" onClick={nextImage} aria-label="Change artwork image">
              {images.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`${artwork.title} detail ${index + 1}`}
                  className={`detail-image-slide ${activeImage === index ? "is-active" : ""}`}
                />
              ))}
            </button>

            <div className="detail-image-controls" aria-label="Image controls">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`detail-image-dot ${activeImage === index ? "is-active" : ""}`}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`Show image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section detail-info-section detail-info-section-dark">
        <div className="container">
          <div className="left-aligned-copy" data-reveal="up">
            <span className="eyebrow">Before ordering</span>
            <h2 className="section-title detail-info-title-mixed" aria-label="Details first, decision second">
              <span className="detail-info-title-details">Details first,</span>{" "}
              <span className="detail-info-title-decision">decision second</span>
            </h2>
          </div>

          <div className="detail-info-grid" data-reveal="up">
            {detailInfo.map((item) => (
              <article className="detail-info-card" key={item.title}>
                <span className="detail-info-icon">{item.icon}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DetailMoreWorks currentId={artwork.id} />
      <section className="section surface-soft detail-feedback-section">
        <BackgroundStrokes variant="detail-feedback" />

        <div className="container confidence-grid">
          <FeedbackHeader onDark />

          <div className="feedback-grid" data-reveal="right">
            {feedbackItems.map((item) => (
              <article className="feedback-card" key={item.author}>
                <p className="feedback-quote">“{item.quote}”</p>
                <div className="feedback-author">
                  <span className="feedback-avatar">
                    <img src={item.avatar} alt="" />
                  </span>
                  <span className="feedback-label">— {item.author}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <QuestionsSection />
      <FinalCTA />
      <Footer />
    </>
  );
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <WorksCarousel />
      <AboutSection />
      <ReleaseSection />
      <CollectorConfidence />
      <ProcessSection />
      <QuestionsSection />
      <FinalCTA />
      <Footer />
    </>
  );
}

export default function App() {
  const hash = useHashRoute();
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  useReveal(hash);

  const selectedArtwork = useMemo(() => {
    if (!hash.startsWith("#work-")) return null;
    const id = hash.replace("#work-", "");
    return artworks.find((artwork) => artwork.id === id) || null;
  }, [hash]);

  return (
    <div className="site-shell">
      <Header
        isDetailPage={Boolean(selectedArtwork)}
        onOpenJoinModal={() => setIsJoinModalOpen(true)}
      />
      <main>{selectedArtwork ? <ArtworkDetail artwork={selectedArtwork} /> : <HomePage />}</main>
      <JoinDropModal isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
    </div>
  );
}