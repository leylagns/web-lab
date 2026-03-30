import profileImg from './assets/profil.jpg'
import project1Img from './assets/project1.png'
import project2Img from './assets/project2.png'
import project3Img from './assets/project3.png'
import Button from './components/Button'
import Input from './components/Input'
import Card from './components/Card'
import Alert from './components/Alert'

function App() {
  return (
    <div className="min-h-screen transition-colors duration-500 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 font-sans">
      
      {/* Erişilebilirlik: Ana içeriğe atla (Uygulama-10) */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-primary text-white p-3 z-50 rounded-br-lg shadow-lg"
      >
        Ana içeriğe atla
      </a>

      {/* Tema Değiştirici */}
      <button
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed top-6 right-6 z-50 bg-white dark:bg-gray-800 text-gray-800 dark:text-yellow-400 p-3 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all border border-gray-200 dark:border-gray-700 cursor-pointer"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden text-xl">🌙</span>
        <span className="hidden dark:inline text-xl">☀️</span>
      </button>

      {/* HEADER & NAV (Uygulama-10) */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-2xl font-bold text-primary dark:text-secondary tracking-tight">
            Leyla Güneş
          </h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap items-center justify-center gap-2">
              {[
                { label: 'Hakkımda', href: '#hakkimda' },
                { label: 'Projeler', href: '#projeler' },
                { label: 'İletişim', href: '#iletisim' },
                { label: 'UI Kit', href: '#uikit' },
              ].map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        
        {/* HAKKIMDA BÖLÜMÜ (Uygulama-10) */}
        <section id="hakkimda" className="py-20 px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-20">
            <figure className="shrink-0">
              <img 
                src={profileImg} 
                alt="Leyla Güneş" 
                className="w-48 h-48 lg:w-64 lg:h-64 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800 ring-4 ring-primary/10" 
              />
            </figure>
            <div className="text-center md:text-left space-y-6">
              <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tighter">
                Hakkımda
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                Yazılım mühendisliği öğrencisi olarak modern web teknolojileri üzerine uzmanlaşmaya odaklanıyorum. 
                Full-stack geliştirici adayı olarak modern ve fark yaratan kullanıcı dostu arayüzler oluşturuyorum.
              </p>
              <ul className="flex flex-wrap justify-center md:justify-start gap-3">
                {['React', 'TypeScript', 'Tailwind v4', 'Node.js', 'Git'].map(skill => (
                  <li key={skill} className="bg-primary text-white px-5 py-2 rounded-full text-sm font-bold shadow-md shadow-primary/20">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PROJELERİM BÖLÜMÜ (Uygulama-10 - Card Kullanımı) */}
        <section id="projeler" className="py-24 px-4 bg-gray-50 dark:bg-gray-800/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white tracking-tight">
              Projelerim
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card 
                variant="elevated" 
                title="E-Ticaret Portalı" 
                image={project1Img} 
                imageAlt="E-Ticaret"
                footer={<Button size="sm" className="w-full">İncele</Button>}
              >
                React ve Node.js ile tam kapsamlı e-ticaret uygulaması.
              </Card>
              <Card 
                variant="outlined" 
                title="Yazılım Blogu" 
                image={project2Img}
                footer={<div className="text-xs font-bold text-primary/60 tracking-widest uppercase">Next.js + MDX</div>}
              >
                Markdown destekli, modern mimarili kişisel blog sitesi.
              </Card>
              <Card 
                variant="filled" 
                title="Hava Durumu Pro" 
                image={project3Img}
                footer={<Button variant="ghost" size="sm">Detaylar &rarr;</Button>}
              >
                API entegrasyonu ile anlık dünya genelinde hava tahmini.
              </Card>
            </div>
          </div>
        </section>

        {/* İLETİŞİM FORMU (Uygulama-10 - Input ve Button Kullanımı) */}
        <section id="iletisim" className="py-24 px-4">
          <div className="max-w-2xl mx-auto space-y-12">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white tracking-tight">
              İletişim
            </h2>
            <form className="space-y-6 bg-white dark:bg-gray-900 p-8 lg:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800">
              <Input id="name" label="Ad Soyad" placeholder="Adınızı giriniz" required />
              <Input id="email" label="E-posta" type="email" placeholder="mail@örnek.com" required />
              <div className="space-y-1.5 px-1">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Mesajınız
                </label>
                <textarea 
                  id="message" 
                  rows={5} 
                  required 
                  placeholder="Bana bir mesaj bırakın..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                ></textarea>
              </div>
              <Button variant="primary" size="lg" type="submit" className="w-full py-5">
                Gönder
              </Button>
            </form>
          </div>
        </section>

        {/* UI KIT (Academic Showcase) */}
        <section id="uikit" className="py-16">
          <div className="container mx-auto px-6 border-t border-gray-100 dark:border-gray-800 pt-16">
            <h2 className="text-center text-2xl font-black uppercase tracking-widest text-muted mb-12">Laboratuvar UI Kit</h2>
            <div className="space-y-12">
              <Alert variant="info" title="Bilgi">Başarıyla Tailwind v4'e geçildi.</Alert>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER (Uygulama-10) */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-10 px-4 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm font-bold tracking-widest uppercase">
          &copy; 2025 Leyla Güneş. Tüm hakları saklıdır.
        </p>
      </footer>
    </div>
  )
}

export default App
