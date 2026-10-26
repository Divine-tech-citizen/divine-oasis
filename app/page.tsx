import Image from "next/image";

const collections = [
  {
    number: "01",
    name: "Heritage, reimagined",
    category: "WOMENSWEAR",
    image: "/divine-oasis-heritage-gown.jpg",
    alt: "Navy Nigerian gown finished with soft blue ruffles",
    className: "collection-card--heritage",
  },
  {
    number: "02",
    name: "The art of tailoring",
    category: "BESPOKE SUITING",
    image: "/divine-oasis-tailoring.jpg",
    alt: "Three carefully tailored suits in warm neutral tones",
    className: "collection-card--tailoring",
  },
  {
    number: "03",
    name: "A new kind of classic",
    category: "MODERN MENSWEAR",
    image: "/divine-oasis-blue-set.png",
    alt: "Light blue contemporary Nigerian two-piece outfit",
    className: "collection-card--blue",
  },
];

function BrandMark() {
  return (
    <a className="brand" href="#home" aria-label="Divine Oasis home">
      <span className="brand-monogram" aria-hidden="true">
        D<span>O</span>
      </span>
      <span className="brand-name">DIVINE OASIS</span>
      <span className="brand-caption">MADE WITH MEANING</span>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <div className="announcement">
        ROOTED IN HERITAGE <span aria-hidden="true">·</span> MADE FOR YOUR
        MOMENTS
      </div>

      <header className="site-header">
        <BrandMark />
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#collections">Collections</a>
          <a href="#story">Our story</a>
          <a href="#contact">Get in touch</a>
        </nav>
        <a className="header-appointment" href="#contact">
          BOOK A CONSULTATION <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span /> THE DIVINE OASIS ATELIER</p>
          <h1>
            Wear your
            <br />
            <em>own story.</em>
          </h1>
          <p className="hero-description">
            Thoughtfully made Nigerian fashion for the moments that matter.
            Rooted in culture, created just for you.
          </p>
          <div className="hero-actions">
            <a className="button button--light" href="#collections">
              Discover the collection <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link text-link--light" href="#story">
              Meet Divine Oasis <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-note">
            <span className="hero-note-line" />
            <span>MADE TO BE KEPT. MADE TO BE YOU.</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrap">
            <Image
              className="hero-image"
              src="/divine-oasis-heritage-gown.jpg"
              alt="Navy heritage gown with flowing blue ruffle detail"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 53vw"
            />
          </div>
          <div className="hero-image-label">
            <span>THE OASIS EDIT</span>
            <span>01 / 04</span>
          </div>
          <span className="hero-seal" aria-hidden="true">
            D<span>O</span>
          </span>
        </div>
        <span className="hero-side-note">CRAFTED IN NIGERIA · WORN EVERYWHERE</span>
      </section>

      <section className="values-strip" aria-label="Our approach">
        <p><span>01</span> Made for your measure</p>
        <span className="values-divider" aria-hidden="true" />
        <p><span>02</span> Thoughtful by design</p>
        <span className="values-divider" aria-hidden="true" />
        <p><span>03</span> Proudly rooted in Nigeria</p>
      </section>

      <section className="collections section-wrap" id="collections">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow--green"><span /> FIND YOUR OASIS</p>
            <h2>Pieces with <em>presence.</em></h2>
          </div>
          <p className="section-intro">
            From everyday elegance to once-in-a-lifetime dressing, discover
            pieces made to feel unmistakably yours.
          </p>
        </div>

        <div className="collection-grid">
          {collections.map((collection) => (
            <a
              className={`collection-card ${collection.className}`}
              href="#contact"
              key={collection.number}
            >
              <div className="collection-image-wrap">
                <Image
                  src={collection.image}
                  alt={collection.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, 33vw"
                />
                <span className="collection-number">{collection.number}</span>
                <span className="collection-arrow" aria-hidden="true">↗</span>
              </div>
              <p className="collection-category">{collection.category}</p>
              <h3>{collection.name}</h3>
            </a>
          ))}
        </div>
        <div className="collection-footnote">
          <span>01 — 03</span>
          <span>INDIVIDUALLY CONSIDERED. NEVER ORDINARY.</span>
        </div>
      </section>

      <section className="story" id="story">
        <div className="story-image">
          <Image
            src="/divine-oasis-green-set.png"
            alt="Deep green contemporary Nigerian outfit with handcrafted details"
            fill
            sizes="(max-width: 760px) 100vw, 48vw"
          />
          <span className="story-image-caption">A TOUCH OF THE OASIS</span>
        </div>
        <div className="story-copy">
          <p className="eyebrow"><span /> OUR PHILOSOPHY</p>
          <h2>
            Culture in
            <br />
            every <em>thread.</em>
          </h2>
          <p>
            Divine Oasis is a celebration of where we come from and all the
            places we are going. We bring Nigerian craftsmanship and
            contemporary design together to create clothing that feels personal,
            considered, and entirely your own.
          </p>
          <p>
            Every detail has a reason. Every piece begins with you.
          </p>
          <a className="text-link text-link--light" href="#contact">
            Get to know us <span aria-hidden="true">↗</span>
          </a>
          <span className="story-flourish" aria-hidden="true">D O</span>
        </div>
      </section>

      <section className="quote">
        <span className="quote-mark" aria-hidden="true">“</span>
        <p>True style is a feeling you carry with you.</p>
        <span className="quote-caption">THE DIVINE OASIS WAY</span>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow eyebrow--green"><span /> LET’S MAKE IT PERSONAL</p>
        <h2>Your next favourite<br /><em>starts with a conversation.</em></h2>
        <p>
          Tell us what you have in mind. We’ll make something beautiful of it.
        </p>
        <a
          className="button button--dark"
          href="mailto:divineoasisservices@gmail.com?subject=Divine%20Oasis%20consultation"
        >
          Begin your consultation <span aria-hidden="true">↗</span>
        </a>
        <div className="contact-methods" aria-label="Contact details">
          <a href="tel:09131515423">09131515423</a>
          <a href="mailto:divineoasisservices@gmail.com">
            divineoasisservices@gmail.com
          </a>
          <a
            href="https://www.instagram.com/divine_oasis24/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram <span aria-hidden="true">↗</span>
          </a>
        </div>
        <span className="contact-note">IN PERSON OR FROM WHEREVER YOU ARE</span>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <BrandMark />
            <p>Clothing with a sense of place.<br />Made with meaning in Nigeria.</p>
          </div>
          <div className="footer-links">
            <span>EXPLORE</span>
            <a href="#collections">The collections</a>
            <a href="#story">Our story</a>
          </div>
          <div className="footer-links">
            <span>LET’S CONNECT</span>
            <a href="tel:09131515423">09131515423</a>
            <a href="mailto:divineoasisservices@gmail.com">
              divineoasisservices@gmail.com
            </a>
            <a
              href="https://www.instagram.com/divine_oasis24/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>
            <a href="#contact">Book a consultation ↗</a>
          </div>
          <div className="footer-note">
            <span>ROOTED IN NIGERIA</span>
            <span>MADE FOR EVERYWHERE</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 DIVINE OASIS. ALL RIGHTS RESERVED.</span>
          <span>MADE WITH MEANING. WORN WITH PRIDE.</span>
        </div>
      </footer>
    </main>
  );
}
