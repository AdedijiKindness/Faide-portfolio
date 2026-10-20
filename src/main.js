import './style.css'
import heroImg from '../hero-img.jpg'

document.querySelector('#app').innerHTML = `
  <main class="portfolio-shell">
    <section class="hero-panel" style="--hero-image: url('${heroImg}')">
      <nav class="site-nav" aria-label="Primary navigation">
        <a class="brand" href="#top">Faide</a>
        <div class="nav-links">
          <a class="icon-link" href="#top" aria-label="Home" title="Home">
            <span class="nav-label">Home</span>
            <svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10Z" /></svg>
          </a>
          <a class="icon-link" href="#about" aria-label="About" title="About">
            <span class="nav-label">About</span>
            <svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5" /><path d="M5 21a7 7 0 0 1 14 0" /></svg>
          </a>
          <a class="icon-link" href="#projects" aria-label="Work" title="Work">
            <span class="nav-label">Work</span>
            <svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="15" rx="2" /><path d="M8 5V3h8v2M3 10h18" /></svg>
          </a>
          <a class="contact-button" href="https://wa.me/2348051191431" target="_blank" rel="noreferrer">Hire Me <span aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M3 10h13M11 5l5 5-5 5" /></svg></span></a>
        </div>
      </nav>

      <div class="hero-content" id="top">
        <div class="hero-intro">
          <p class="eyebrow">Hey, I’m Faide, a</p>
          <h1>Video<br />Editor</h1>
        </div>
        <div class="hero-summary">
          <h2>Great editing should<br />go unnoticed.</h2>
          <p>From raw footage to final cut, I shape stories<br />that hold attention and move people.</p>
        </div>
      </div>

      <div class="service-list" aria-label="Services">
        <div><span>#01</span><p>Documentary Editing</p></div>
        <div><span>#02</span><p>Longform Storytelling</p></div>
        <div><span>#03</span><p>Short-Form Content</p></div>
        <div><span>#04</span><p>Motion Design</p></div>
      </div>
    </section>

    <section class="tools-strip" aria-labelledby="tools-title">
      <p class="tools-intro" id="tools-title">Tools I use to shape stories</p>
      <div class="tools-list">
        <div class="tool-item">
          <span class="tool-monogram" aria-hidden="true">CC</span>
          <span>CapCut</span>
        </div>
        <div class="tool-item">
          <img class="tool-logo--premiere" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobepremierepro.svg" alt="" />
          <span>Adobe Premiere Pro</span>
        </div>
        <div class="tool-item">
          <img src="https://cdn.simpleicons.org/davinciresolve/ffffff" alt="" />
          <span>DaVinci Resolve</span>
        </div>
        <div class="tool-item">
          <img src="https://cdn.simpleicons.org/google/ffffff" alt="" />
          <span>Google Flow</span>
        </div>
      </div>
    </section>

    <section class="about-section" id="about" aria-labelledby="about-title">
      <div class="about-heading">
        <p class="about-eyebrow">Who I Am</p>
        <h2 id="about-title">Editing with<br />Purpose and<br />Precision</h2>
      </div>
      <div class="about-copy">
        <h3>Clear structure, strong pacing,<br />and stories built to keep<br />viewers watching.</h3>
        <div class="about-body">
          <p>I’m Faide, a YouTube video editor. I help creators turn raw footage into clear, well-paced videos that actually hold attention. Most of my work sits in Shorts and Explained-style content, where structure and timing matter more than flashy effects.</p>
          <p>I focus on clean storytelling, tight pacing, and making sure the final video feels intentional. I also handle simple motion graphics and use AI tools where they genuinely speed up the process without lowering quality.</p>
          <p>Clients tend to come back because I communicate clearly, stick to deadlines, and treat every project like it matters. Whether it’s a one-off edit or ongoing work, I aim to make the process smooth and the results consistent.</p>
          <p>Open to new projects and longer-term collaborations.</p>
        </div>
      </div>
    </section>

    <section class="featured-video-section" id="projects" aria-labelledby="featured-video-title">
      <div class="featured-video-heading">
        <p class="about-eyebrow">Featured Work</p>
        <h2 id="featured-video-title">Best Performing Video</h2>
      </div>

      <div class="featured-video-grid">
        <div class="video-player-placeholder">
          <iframe src="https://www.youtube.com/embed/5ecsnYB70co?si=x-Rq8J180na3B1Ob" title="Best performing video for Overscaled" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <article class="performance-card">
          <div class="performance-card-topline">
            <p class="performance-label">Performance</p>
            <span class="performance-index">01</span>
          </div>
          <div class="performance-stats" aria-label="Video performance metrics">
            <div><strong>25,877</strong><span>Views</span></div>
            <div><strong>60%</strong><span>Retention</span></div>
          </div>
          <div class="performance-details">
            <p class="performance-label">Client</p>
            <div class="client-name-row">
              <h3>Overscaled</h3>
              <img src="https://cdn.simpleicons.org/youtube/ff0000" alt="YouTube" />
            </div>
            <blockquote>“I really appreciate your attention to detail. Your work is good and, at the very least, close to the level I'm expecting. I'll upload it as it is, and I hope to see even more improvement in the next video.”</blockquote>
            <p class="review-author">Client Review</p>
          </div>
        </article>
      </div>
    </section>

    <section class="reviews-section" aria-labelledby="reviews-title">
      <div class="reviews-heading">
        <p class="about-eyebrow">Client Reviews</p>
        <h2 id="reviews-title">Words from the<br />people I work with.</h2>
      </div>
      <div class="reviews-grid">
        <article class="review-card">
          <div class="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
          <p>&quot;Hey Faide, I like what I am seeing right here&quot;</p>
          <span class="review-quote" aria-hidden="true">“</span>
        </article>
        <article class="review-card">
          <div class="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
          <p>&quot;Overall<br />You did great.<br />This is very close to what I like.&quot;</p>
          <span class="review-quote" aria-hidden="true">“</span>
        </article>
        <article class="review-card">
          <div class="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
          <p>&quot;Your edits are really nice&quot;</p>
          <span class="review-quote" aria-hidden="true">“</span>
        </article>
        <article class="review-card">
          <div class="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
          <p>&quot;Overall the video&apos;s great. And, the Sound Design was great too. I forgot to mention that&quot;</p>
          <span class="review-quote" aria-hidden="true">“</span>
        </article>
      </div>
    </section>

    <section class="timeline-section" aria-labelledby="timeline-title">
      <div class="process-heading">
        <p class="timeline-kicker">How it works</p>
        <h2 id="timeline-title">From first message<br />to final delivery.</h2>
        <p class="process-intro">A simple, clear process so you always know where the project stands.</p>
      </div>
      <div class="timeline-track">
        <article class="timeline-event">
          <div class="process-number">01</div>
          <div class="timeline-copy">
            <h3>Brief</h3>
            <p>We align on the goal, style, references, and what the final video needs to do.</p>
          </div>
        </article>
        <article class="timeline-event">
          <div class="process-number">02</div>
          <div class="timeline-copy">
            <h3>Edit</h3>
            <p>I cut with clean pacing, clear structure, and attention to the story. You’ll get updates along the way.</p>
          </div>
        </article>
        <article class="timeline-event">
          <div class="process-number">03</div>
          <div class="timeline-copy">
            <h3>Delivery</h3>
            <p>Focused feedback rounds, final polish, and exports ready for YouTube, Shorts, or whatever platform you need.</p>
          </div>
        </article>
      </div>
    </section>

    <footer class="contact-footer">
      <section class="contact-section" aria-labelledby="contact-title">
        <div class="contact-intro">
          <p class="contact-kicker"><span></span>Start a project</p>
          <h2 id="contact-title">Raw footage?<br />Let's make a <em>story.</em></h2>
          <p class="contact-note">Tell me what you’re building. I’ll get back to you within 1–2 business days.</p>
          <a class="whatsapp-link" href="https://wa.me/2348051191431" target="_blank" rel="noreferrer">Prefer WhatsApp? Message me <span aria-hidden="true">↗</span></a>
        </div>

        <form class="project-form" action="mailto:adewunmifaith01@gmail.com" method="post" enctype="text/plain">
          <div class="form-row">
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="you@company.com" required />
            </label>
          </div>
          <label>
            <span>Tell me about the project</span>
            <textarea name="project" placeholder="What are we making?" rows="3" required></textarea>
          </label>
          <label class="budget-field">
            <span>Estimated budget</span>
            <select name="budget" required>
              <option value="" selected disabled>Select a range</option>
              <option value="under-500">Under $500</option>
              <option value="500-1000">$500 - $1,000</option>
              <option value="1000-2500">$1,000 - $2,500</option>
              <option value="2500-plus">$2,500+</option>
            </select>
          </label>
          <button type="submit">Send enquiry <span aria-hidden="true">→</span></button>
        </form>
      </section>

      <div class="footer-bar">
        <a class="footer-brand" href="#top">FAI<span>DE</span></a>
        <p>© 2026 Faide. All frames reserved.</p>
        <nav aria-label="Social links">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><img src="https://cdn.simpleicons.org/instagram/ffffff" alt="Instagram" /></a>
          <a href="https://x.com/FaideEdits" target="_blank" rel="noreferrer" aria-label="X"><img src="https://cdn.simpleicons.org/x/ffffff" alt="X" /></a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><img src="https://cdn.simpleicons.org/youtube/ffffff" alt="YouTube" /></a>
        </nav>
      </div>
    </footer>
  </main>
`

const siteNav = document.querySelector('.site-nav')
const updateNavState = () => siteNav.classList.toggle('is-scrolled', window.scrollY > 40)

window.addEventListener('scroll', updateNavState, { passive: true })
updateNavState()
