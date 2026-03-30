import './App.css'
import profileImg from './assets/profil.jpg'
import project1Img from './assets/project1.png'
import project2Img from './assets/project2.png'
import project3Img from './assets/project3.png'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>

      <header>
        <div className="container">
          <div className="logo">
            <h1 className="site-title">Leyla Güneş</h1>
            <span>Yazılım Mühendisliği</span>
          </div>
          <nav aria-label="Ana navigasyon">
            <ul>
              <li><a href="#hakkimda">Hakkımda</a></li>
              <li><a href="#projeler">Projeler</a></li>
              <li><a href="#iletisim">İletişim</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        
        <section id="hakkimda">
          <div className="container">
            <h2>Hakkımda</h2>
            <div className="about-content">
              <figure>
                <img src={profileImg} alt="Leyla Güneş'in profesyonel profil fotoğrafı" />
              </figure>
              <div className="text-content">
                <p>
                  Yazılım mühendisliği öğrencisi olarak modern web teknolojileri üzerine uzmanlaşmaya odaklanıyorum. 
                  Yeni nesil araçlarla performanslı ve kullanıcı dostu arayüzler geliştirmek ana tutkumdur.
                </p>
                <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Git</li>
                  <li>TailwindCSS</li>
                  <li>Node.js</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projeler">
          <div className="container">
            <h2>Projelerim</h2>
            <div className="project-grid">
              
              <article className="project-card">
                <img src={project1Img} alt="E-Ticaret Sitesi ekran görüntüsü" />
                <div className="card-content">
                  <h3>E-Ticaret Sitesi</h3>
                  <p>React ve Node.js ile geliştirilmiş tam kapsamlı bir e-ticaret uygulaması.</p>
                  <ul className="skill-tags">
                    <li>React</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </article>

              <article className="project-card">
                <img src={project2Img} alt="Blog Uygulaması ekran görüntüsü" />
                <div className="card-content">
                  <h3>Blog Uygulaması</h3>
                  <p>Kişisel blog platformu. Markdown destekli yazı editörü.</p>
                  <ul className="skill-tags">
                    <li>TypeScript</li>
                    <li>Next.js</li>
                  </ul>
                </div>
              </article>

              <article className="project-card">
                <img src={project3Img} alt="Hava Durumu uygulaması ekran görüntüsü" />
                <div className="card-content">
                  <h3>Hava Durumu</h3>
                  <p>OpenWeather API ile anlık hava durumu bilgisi.</p>
                  <ul className="skill-tags">
                    <li>JavaScript</li>
                    <li>API</li>
                  </ul>
                </div>
              </article>

            </div>
          </div>
        </section>

        <section id="iletisim">
          <div className="container">
            <h2>İletişim</h2>
            <form action="#" method="POST" noValidate>
              <fieldset>
                <legend>İleşim Formu</legend>
                <div className="form-group">
                  <label htmlFor="name">Ad Soyad:</label>
                  <input type="text" id="name" name="name" required minLength={2} aria-describedby="name-error" />
                  <small id="name-error" className="error-msg" role="alert"></small>
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-posta:</label>
                  <input type="email" id="email" name="email" required aria-describedby="email-error" />
                  <small id="email-error" className="error-msg" role="alert"></small>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Konu:</label>
                  <select id="subject" name="subject" required aria-describedby="subject-error">
                    <option value="">-- Seçiniz --</option>
                    <option value="is">İş Teklifi</option>
                    <option value="soru">Soru</option>
                    <option value="oneri">Öneri</option>
                  </select>
                  <small id="subject-error" className="error-msg" role="alert"></small>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mesajınız:</label>
                  <textarea id="message" name="message" rows={5} required minLength={10} aria-describedby="message-error"></textarea>
                  <small id="message-error" className="error-msg" role="alert"></small>
                </div>
                <button type="submit">Gönder</button>
              </fieldset>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2025 Leyla Güneş. Tüm hakları saklıdır.</p>
          <div className="social-links">
            <a href="https://github.com/leylagns">GitHub</a>
            <a href="https://linkedin.com">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
