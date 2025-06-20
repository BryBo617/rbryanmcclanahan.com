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
              I have been developing software for over 25 years. I still enjoy
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
              after graduating from Columbia College in Chicago. Over the years,
              I’ve worked across a wide range of projects—from lean web apps to
              full-scale software systems. Always focused on delivering clean,
              effective solutions that solve real problems. <br />
              Most recently, I was a Senior Software Engineer at Builder
              Designs, where I performed product support and developed new
              technology to support our home builder partners. Whether it was
              boosting brand awareness, increasing lead conversion, or
              streamlining backend processes, I thrived on crafting tools that
              moved the needle. <br />
              Now, I'm exploring new opportunities and looking for my next role
              as a Senior Software Engineer or Manager of Engineering. After
              more than two decades in the industry, I’ve worked with a wide
              variety of technologies—but what’s stayed constant is my passion
              for creating things that work, scale, and genuinely improve users’
              lives.
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
