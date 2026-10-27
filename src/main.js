import './style.css'
import heroImg from '../hero-img.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

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
        <div class="hero-intro" data-aos="fade-up" data-aos-duration="800">
          <p class="eyebrow">Hey, I’m Faide, a</p>
          <h1>Video<br />Editor</h1>
        </div>
        <div class="hero-summary" data-aos="fade-up" data-aos-delay="150" data-aos-duration="800">
          <h2>Great editing should<br />go unnoticed.</h2>
          <p>From raw footage to final cut, I shape stories<br />that hold attention and move people.</p>
        </div>
      </div>

      <div class="service-list" aria-label="Services" data-aos="fade-up" data-aos-delay="300">
        <div><span>#01</span><p>Documentary Editing</p></div>
        <div><span>#02</span><p>Longform Storytelling</p></div>
        <div><span>#03</span><p>Short-Form Content</p></div>
        <div><span>#04</span><p>Motion Design</p></div>
      </div>
    </section>

    <section class="tools-strip" aria-labelledby="tools-title" data-aos="fade-up">
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
      <aside class="about-social-rail" aria-label="Quick navigation">
        <div class="rail-lights" aria-hidden="true"><span></span><span></span><span></span></div>
        <a class="rail-brand" href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" title="YouTube">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2C2 9 2 12 2 12s0 3 .4 4.8a2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2C22 15 22 12 22 12s0-3-.4-4.8Z" /><path class="rail-youtube-play" d="m10 15.5 5-3.5-5-3.5v7Z" /></svg>
        </a>
        <span class="rail-divider"></span>
        <nav class="rail-nav" aria-label="Social links">
          <a class="rail-link" href="https://discord.gg/mmeQqTFu" target="_blank" rel="noreferrer" aria-label="Discord" title="Discord"><img src="https://cdn.simpleicons.org/discord/ffffff" alt="" /></a>
          <a class="rail-link" href="https://www.tiktok.com/@faidevisuals?_r=1&amp;_t=ZS-9Ak71sSKR6I" target="_blank" rel="noreferrer" aria-label="TikTok" title="TikTok"><img src="https://cdn.simpleicons.org/tiktok/ffffff" alt="" /></a>
          <a class="rail-link" href="https://www.instagram.com/faide.edits?psln=MWl2bjhvODFoYWpjaQ%3D%3D&amp;utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram"><img src="https://cdn.simpleicons.org/instagram/ffffff" alt="" /></a>
          <a class="rail-link" href="https://wa.me/2348051191431" target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp"><img src="https://cdn.simpleicons.org/whatsapp/ffffff" alt="" /></a>
          <a class="rail-link" href="https://x.com/faideedits?s=11" target="_blank" rel="noreferrer" aria-label="X" title="X"><img src="https://cdn.simpleicons.org/x/ffffff" alt="" /></a>
        </nav>
      </aside>
      <div class="about-heading" data-aos="fade-right">
        <p class="about-eyebrow">Who I Am</p>
        <h2 id="about-title">Editing with<br />Purpose and<br />Precision</h2>
      </div>
      <div class="about-copy" data-aos="fade-left" data-aos-delay="120">
        <h3>Clear structure, strong pacing,<br />and stories built to keep<br />viewers watching.</h3>
        <div class="about-body">
          <ul class="about-points">
            <li><strong>Storytelling</strong><span>I turn raw footage into clear, intentional videos that hold attention, especially for Shorts and Explained-style content.</span></li>
            <li><strong>Pacing</strong><span>I shape structure, timing, sound, and simple motion graphics so every part of the edit earns its place.</span></li>
            <li><strong>Reliability</strong><span>I communicate clearly, meet deadlines, and keep the process smooth whether it’s a one-off edit or ongoing work.</span></li>
          </ul>
          <p class="about-note">Open to new projects and longer-term collaborations.</p>
        </div>
      </div>
    </section>

    <section class="featured-video-section" id="projects" aria-labelledby="featured-video-title">
      <div class="featured-video-heading" data-aos="fade-up">
        <p class="about-eyebrow">Featured Work</p>
        <h2 id="featured-video-title">Best Performing Video</h2>
      </div>

      <div class="featured-video-grid" data-aos="fade-up" data-aos-delay="120">
        <div class="video-player-placeholder">
          <iframe src="https://www.youtube.com/embed/5ecsnYB70co?si=x-Rq8J180na3B1Ob" title="Best performing video for Overscaled" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <article class="performance-card">
          <div class="performance-card-topline">
            <p class="performance-label">Performance</p>
            <span class="performance-index">01</span>
          </div>
          <div class="performance-stats" role="group" aria-label="25,877 views and 60% retention">
            <div aria-hidden="true"><strong data-count-to="25877" data-video-id="5ecsnYB70co">25,877</strong><span>Views</span></div>
            <div aria-hidden="true"><strong data-count-to="60" data-count-suffix="%">60%</strong><span>Retention</span></div>
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

      <a class="other-works-button" href="https://drive.google.com/drive/folders/1iRjAt97789NHUbZcslTgnxcH8fEvZXfn" target="_blank" rel="noreferrer">
        <span>View my other works</span>
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5" /></svg>
      </a>
    </section>

    <section class="reviews-section" aria-labelledby="reviews-title">
      <div class="reviews-heading" data-aos="fade-up">
        <p class="about-eyebrow">Client Reviews</p>
        <h2 id="reviews-title">Words from the<br />people I work with.</h2>
      </div>
      <div class="reviews-grid">
        <article class="review-card" data-aos="fade-up" data-aos-delay="0">
          <div class="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
          <p>&quot;Hey Faide, I like what I am seeing right here&quot;</p>
          <div class="testimonial-author">
            <img src="https://i.pravatar.cc/96?img=47" alt="Esther" />
            <div><strong>Esther</strong><span>Instagram Creator · 1k+ followers</span></div>
          </div>
          <span class="review-quote" aria-hidden="true">“</span>
        </article>
        <article class="review-card" data-aos="fade-up" data-aos-delay="100">
          <div class="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
          <p>&quot;Overall<br />You did great.<br />This is very close to what I like.&quot;</p>
          <div class="testimonial-author">
            <img src="https://i.pravatar.cc/96?img=32" alt="Maryann" />
            <div><strong>Maryann</strong><span>Klaviyo Email Designer · 7-figure e-commerce brands</span></div>
          </div>
          <span class="review-quote" aria-hidden="true">“</span>
        </article>
        <article class="review-card" data-aos="fade-up" data-aos-delay="200">
          <div class="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
          <p>&quot;Your edits are really nice&quot;</p>
          <div class="testimonial-author">
            <img src="https://i.pravatar.cc/96?img=12" alt="Dan" />
            <div><strong>Dan</strong><span>Faceless Shorts Creator · up to 10k views/short</span></div>
          </div>
          <span class="review-quote" aria-hidden="true">“</span>
        </article>
        <article class="review-card" data-aos="fade-up" data-aos-delay="300">
          <div class="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
          <p>&quot;Overall the video&apos;s great. And, the Sound Design was great too. I forgot to mention that&quot;</p>
          <div class="testimonial-author">
            <img src="https://i.pravatar.cc/96?img=68" alt="Sekani" />
            <div><strong>Sekani</strong><span>True Crime YouTuber · 10k+ subs</span></div>
          </div>
          <span class="review-quote" aria-hidden="true">“</span>
        </article>
      </div>
    </section>

    <section class="timeline-section" aria-labelledby="timeline-title">
      <div class="process-heading" data-aos="fade-up">
        <p class="timeline-kicker">How it works</p>
        <h2 id="timeline-title">From first message<br />to final delivery.</h2>
        <p class="process-intro">A simple, clear process so you always know where the project stands.</p>
      </div>
      <div class="timeline-track">
        <article class="timeline-event" data-aos="fade-up" data-aos-delay="0">
          <div class="process-number">01</div>
          <div class="timeline-copy">
            <h3>Brief</h3>
            <p>We align on the goal, style, references, and what the final video needs to do.</p>
          </div>
        </article>
        <article class="timeline-event" data-aos="fade-up" data-aos-delay="120">
          <div class="process-number">02</div>
          <div class="timeline-copy">
            <h3>Edit</h3>
            <p>I cut with clean pacing, clear structure, and attention to the story. You’ll get updates along the way.</p>
          </div>
        </article>
        <article class="timeline-event" data-aos="fade-up" data-aos-delay="240">
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
        <div class="contact-intro" data-aos="fade-right">
          <p class="contact-kicker"><span></span>Start a project</p>
          <h2 id="contact-title">Raw footage?<br />Let's make a <em>story.</em></h2>
          <p class="contact-note">Tell me what you’re building. I’ll get back to you within 1–2 business days.</p>
          <a class="whatsapp-link" href="https://wa.me/2348051191431" target="_blank" rel="noreferrer">Prefer WhatsApp? Message me <span aria-hidden="true">↗</span></a>
        </div>

        <div class="contact-form-column" data-aos="fade-left" data-aos-delay="120">
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

          <div class="outreach-links" aria-label="Reach out on">
            <span>Reach out to me on</span>
            <nav aria-label="Reach out on social platforms">
              <a href="https://discord.gg/mmeQqTFu" target="_blank" rel="noreferrer" aria-label="Discord"><img src="https://cdn.simpleicons.org/discord/ffffff" alt="" /></a>
              <a href="https://x.com/faideedits?s=11" target="_blank" rel="noreferrer" aria-label="X"><img src="https://cdn.simpleicons.org/x/ffffff" alt="" /></a>
              <a href="https://wa.me/2348051191431" target="_blank" rel="noreferrer" aria-label="WhatsApp"><img src="https://cdn.simpleicons.org/whatsapp/ffffff" alt="" /></a>
              <a href="https://www.tiktok.com/@faidevisuals?_r=1&amp;_t=ZS-9Ak71sSKR6I" target="_blank" rel="noreferrer" aria-label="TikTok"><img src="https://cdn.simpleicons.org/tiktok/ffffff" alt="" /></a>
            </nav>
          </div>
        </div>
      </section>

      <div class="footer-bar" data-aos="fade-up">
        <a class="footer-brand" href="#top">FAI<span>DE</span></a>
        <p>© 2026 Faide. All frames reserved.</p>
        <nav aria-label="Social links">
          <a href="https://www.instagram.com/faide.edits?psln=MWl2bjhvODFoYWpjaQ%3D%3D&amp;utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram"><img src="https://cdn.simpleicons.org/instagram/ffffff" alt="Instagram" /></a>
          <a href="https://x.com/faideedits?s=11" target="_blank" rel="noreferrer" aria-label="X"><img src="https://cdn.simpleicons.org/x/ffffff" alt="X" /></a>
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

AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: true,
  offset: 70,
})

const countUpTargets = Array.from(document.querySelectorAll('[data-count-to]'))
const statsBlock = document.querySelector('.performance-stats')
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const formatCount = (value, suffix) => `${value.toLocaleString('en-US')}${suffix}`

// Pulls the live view count for the embedded video. Resolves to null when the
// request fails, times out, or returns junk, so callers decide which number to
// show and can still notice a value that arrives after their own deadline.
const fetchLiveViewCount = async (videoId) => {
  if (!videoId || !('fetch' in window)) return null

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 6000)

  try {
    const response = await fetch(
      `https://returnyoutubedislikeapi.com/votes?videoId=${encodeURIComponent(videoId)}`,
      { signal: controller.signal, headers: { Accept: 'application/json' } }
    )

    if (!response.ok) throw new Error(`Live view count request failed: ${response.status}`)

    const { viewCount } = await response.json()
    const liveViews = Number(viewCount)

    return Number.isFinite(liveViews) && liveViews > 0 ? Math.round(liveViews) : null
  } catch {
    return null
  } finally {
    clearTimeout(timeoutId)
  }
}

// Start the request right away so the data is ready by the time the card scrolls in.
const viewsElement = document.querySelector('[data-video-id]')
const liveViewsRequest = viewsElement ? fetchLiveViewCount(viewsElement.dataset.videoId) : null

// Reads whatever number the element is currently showing so a replacement
// animation picks up from there instead of jumping back to the start.
const readDisplayedCount = (element) => {
  const displayed = Number(String(element.textContent).replace(/[^\d]/g, ''))
  return Number.isFinite(displayed) && displayed > 0 ? displayed : 1
}

const runningFrames = new WeakMap()

const animateCount = (element, target, { delay = 0, from = 1 } = {}) => {
  const suffix = element.dataset.countSuffix || ''
  const duration = 1400

  if (!Number.isFinite(target)) return

  const previousFrame = runningFrames.get(element)
  if (previousFrame) cancelAnimationFrame(previousFrame)

  const startValue = Number.isFinite(from) ? from : 1
  const start = performance.now() + delay

  const tick = (now) => {
    const elapsed = Math.max(now - start, 0)
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    const value = Math.max(1, Math.round(startValue + (target - startValue) * eased))

    element.textContent = formatCount(value, suffix)

    if (progress < 1) {
      runningFrames.set(element, requestAnimationFrame(tick))
    } else {
      runningFrames.delete(element)
      element.textContent = formatCount(target, suffix)
    }
  }

  runningFrames.set(element, requestAnimationFrame(tick))
}

// The view total the card is counting towards or already showing. Starts as the
// hard-coded figure so the card reads correctly if the request never lands.
let viewsTarget = countUpTargets[0] ? Number(countUpTargets[0].dataset.countTo) : null

const syncStatsLabel = () => {
  const retention = countUpTargets[1] ? Number(countUpTargets[1].dataset.countTo) : null
  statsBlock.setAttribute(
    'aria-label',
    `${formatCount(viewsTarget, '')} views and ${formatCount(retention, '')}% retention`
  )
}

const startCountUp = async () => {
  // Give the live count a short head start so the first animation usually lands
  // on real data, but never hold the card back for more than ~1.2s.
  const firstViews = liveViewsRequest
    ? await Promise.race([
        liveViewsRequest,
        new Promise((resolve) => setTimeout(() => resolve(null), 1200)),
      ])
    : null

  if (Number.isFinite(firstViews) && firstViews > 0) viewsTarget = firstViews

  const targets = countUpTargets.map((element, index) =>
    index === 0 ? viewsTarget : Number(element.dataset.countTo)
  )

  syncStatsLabel()

  if (prefersReducedMotion) {
    countUpTargets.forEach((element, index) => {
      element.textContent = formatCount(targets[index], element.dataset.countSuffix || '')
    })
  } else {
    countUpTargets.forEach((element, index) => {
      animateCount(element, targets[index], { delay: index * 120 })
    })
  }

  // A count that lands after the head start still refreshes the card instead of
  // leaving the hard-coded fallback on screen.
  if (liveViewsRequest) {
    liveViewsRequest.then((lateViews) => {
      if (!Number.isFinite(lateViews) || lateViews <= 0 || lateViews === viewsTarget) return

      viewsTarget = lateViews
      const viewsStat = countUpTargets[0]

      if (prefersReducedMotion) {
        viewsStat.textContent = formatCount(lateViews, viewsStat.dataset.countSuffix || '')
      } else {
        animateCount(viewsStat, lateViews, { from: readDisplayedCount(viewsStat) })
      }

      syncStatsLabel()
    })
  }
}

if (countUpTargets.length && statsBlock) {
  countUpTargets.forEach((element) => {
    element.textContent = formatCount(1, element.dataset.countSuffix || '')
  })

  if (!('IntersectionObserver' in window)) {
    startCountUp()
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return

        observer.disconnect()
        startCountUp()
      },
      { threshold: 0.4 }
    )

    observer.observe(statsBlock)
  }
}
