import './styles/style.css';

function App() {
  return (
    <div className="fill-view-port is-paper">
      <header className="header">
        <div className="banner">
          <div className="banner-box">
            <h6 className="p-heading--1 title">R. Bryan McClanahan</h6>
            <h4 className="p-heading--3 subtitle">
              Software Developer, Musician, Father
            </h4>
            <div className="tagline">
              I have been a software developer for over 25 years. I still enjoy
              what I do but I need my hobbies to keep me sane. As a musician, I
              play guitar, bass, drums, and piano. I write music and record in
              my home studio.
            </div>
            <div className="sign-off">Welcome to my personal website!</div>
          </div>
          <div className="image" data-testid="site-banner" />
        </div>
      </header>
      <section className="content p-strip grid">
        <div className="row">
          <div className="grid-col-8 content-box">
            <h2 className="p-heading--2">In a nutshell?</h2>
            <p>
              I'm a seasoned software engineer based in Overland Park, Kansas.
              I’ve been building software professionally since 2000, shortly
              after graduating from Columbia College Chicago. Over the years,
              I’ve worked across a wide range of projects—from lean web apps to
              full-scale software systems—always focused on delivering clean,
              effective solutions that solve real problems. I’m currently a
              Software Engineer at Builder Designs, where I help craft custom
              websites and develop brand-new tech to support our builder
              partners. Whether it’s boosting brand awareness, increasing lead
              conversion, or streamlining backend processes, I thrive on
              building tools that move the needle. After more than two decades
              in the industry, I've developed in many different technologies,
              but what has stayed the course is my passion for creating things
              that work, scale, and make users’ lives easier.
            </p>
          </div>
          <div className="grid-col-4">
            <div className="image-placeholder is-bordered">
              <div className="diploma" data-testid="diploma" />
              <div className="disclaimer p-text--x-small">
                Not actual diploma.
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="copyright p-text--x-small">
          &copy;{new Date().getFullYear()} R. Bryan McClanahan. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
