import profileImg from './assets/profil.jpg'
import project1Img from './assets/project1.png'
import project2Img from './assets/project2.png'
import project3Img from './assets/project3.png'

function App() {
  return (
    <div className="min-h-screen transition-colors duration-500 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 font-sans">
      
      {/* Uygulama-5: Dark Mode Toggle Button - Refined Design */}
      <button
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed top-6 right-6 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md text-gray-800 dark:text-yellow-400 p-3 rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all border border-gray-200 dark:border-gray-700 cursor-pointer group"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden group-hover:rotate-12 transition-transform block">🌙</span>
        <span className="hidden dark:inline group-hover:rotate-12 transition-transform block">☀️</span>
      </button>

      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:bg-primary focus:text-white focus:p-4 focus:z-[100]">
        Ana içeriğe atla
      </a>

      {/* HEADER & NAV */}
      <header className="sticky top-0 z-40 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold tracking-tight text-primary dark:text-secondary mb-0.5">Leyla Güneş</h1>
            <p className="text-sm font-medium text-muted uppercase tracking-widest">Yazılım Mühendisliği</p>
          </div>
          <nav aria-label="Ana navigasyon">
            <ul className="flex items-center gap-1 sm:gap-4">
              <li><a href="#hakkimda" className="px-4 py-2 text-sm font-medium rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">Hakkımda</a></li>
              <li><a href="#projeler" className="px-4 py-2 text-sm font-medium rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">Projeler</a></li>
              <li><a href="#iletisim" className="px-5 py-2 text-sm font-semibold rounded-full bg-primary text-white hover:bg-secondary transition-all shadow-md">İletişim</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        
        {/* HAKKIMDA - Refined Layout */}
        <section id="hakkimda" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/30 dark:to-gray-900">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-accent opacity-20 group-hover:opacity-30 rounded-full blur-2xl transition-opacity"></div>
                <img 
                  src={profileImg} 
                  alt="Leyla Güneş" 
                  className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl border-8 border-white dark:border-gray-800 z-10" 
                />
              </div>
              <div className="max-w-2xl text-center lg:text-left space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
                    Merhaba, Ben <span className="text-primary dark:text-secondary">Leyla</span>
                  </h2>
                  <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                    Yazılım mühendisliği öğrencisi olarak modern web teknolojileri üzerine uzmanlaşmaya odaklanıyorum. 
                    Tailwind CSS v4 ile geliştirilen bu portfolyo, tasarım ve performans tutkumun bir yansımasıdır.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-muted">Teknoloji Yığınım</h3>
                  <ul className="flex flex-wrap justify-center lg:justify-start gap-3">
                    {['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS', 'Git', 'Node.js'].map(skill => (
                      <li key={skill} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-5 py-2 rounded-xl text-sm font-semibold shadow-sm hover:border-primary dark:hover:border-secondary transition-colors">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJELERİM - Responsive Grid Refined */}
        <section id="projeler" className="py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">Projelerim</h2>
              <p className="text-muted">Geliştirdiğim modern ve kullanıcı odaklı web uygulamalarından bazıları.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Proje Kartları */}
              {[
                { title: 'E-Ticaret Sitesi', desc: 'React ve Node.js ile geliştirilmiş tam kapsamlı bir platform.', img: project1Img, tags: ['React', 'Node.js', 'MongoDB'] },
                { title: 'Blog Uygulaması', desc: 'Markdown destekli, modern bir kişisel blog deneyimi.', img: project2Img, tags: ['Next.js', 'TypeScript'] },
                { title: 'Hava Durumu', desc: 'OpenWeather API entegrasyonlu anlık hava tahmini.', img: project3Img, tags: ['JavaScript', 'API'] }
              ].map((project, idx) => (
                <article key={idx} className="group bg-gray-50 dark:bg-gray-800/50 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2">
                  <div className="overflow-hidden relative h-56">
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <span className="text-white text-sm font-medium">Projeyi İncele &rarr;</span>
                    </div>
                  </div>
                  <div className="p-8 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[11px] font-bold uppercase tracking-wider bg-gray-200/50 dark:bg-gray-700/50 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ILETISIM */}
        <section id="iletisim" className="py-24 bg-gray-50 dark:bg-gray-800/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-[3rem] shadow-2xl shadow-black/5 overflow-hidden border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row">
              <div className="bg-primary p-12 text-white md:w-2/5 flex flex-col justify-between">
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold">Selamlaşalım!</h2>
                  <p className="text-white/80">Yeni projeler, iş birliği veya sadece tanışmak için bana mesaj gönderin.</p>
                </div>
                <div className="text-sm font-medium opacity-60">Bulunduğum Şehir: Türkiye</div>
              </div>
              <form className="p-12 md:w-3/5 space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted">Ad Soyad</label>
                    <input type="text" className="w-full p-4 bg-gray-50 dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted">E-posta</label>
                    <input type="email" className="w-full p-4 bg-gray-50 dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted">Mesajınız</label>
                    <textarea rows={4} className="w-full p-4 bg-gray-50 dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all" required></textarea>
                  </div>
                </div>
                <button type="submit" className="w-full bg-primary hover:bg-secondary text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-primary/20">
                  Mesajı Gönder
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 text-center">
        <div className="container mx-auto px-6">
          <p className="text-sm font-medium text-muted tracking-wide">&copy; 2025 Leyla Güneş. Modern bir Gelecek İçin Kodlanmıştır.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
