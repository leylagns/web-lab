import profileImg from './assets/profil.jpg'
import project1Img from './assets/project1.png'
import project2Img from './assets/project2.png'
import project3Img from './assets/project3.png'
import Button from './components/Button'
import Input from './components/Input'
import Card from './components/Card'

function App() {
  return (
    <div className="min-h-screen transition-colors duration-500 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 font-sans">
      
      {/* Dark Mode Toggle */}
      <button
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed top-6 right-6 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md text-gray-800 dark:text-yellow-400 p-3 rounded-full shadow-xl hover:scale-110 transition-all border border-gray-200 dark:border-gray-700 cursor-pointer group"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden">🌙</span>
        <span className="hidden dark:inline">☀️</span>
      </button>

      <header className="sticky top-0 z-40 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold tracking-tight text-primary dark:text-secondary">Leyla Güneş</h1>
            <p className="text-xs font-bold uppercase tracking-widest text-muted">Web Laboratuvarı Hub</p>
          </div>
          <nav>
            <ul className="flex items-center gap-2 sm:gap-6">
              <li><a href="#hakkimda" className="text-sm font-semibold hover:text-primary transition-colors uppercase tracking-wider">Hakkımda</a></li>
              <li><a href="#projeler" className="text-sm font-semibold hover:text-primary transition-colors uppercase tracking-wider">Projeler</a></li>
              <li><a href="#uikit" className="text-sm font-semibold hover:text-primary transition-colors uppercase tracking-wider">UI Kit</a></li>
              <li><a href="#iletisim" className="px-5 py-2 bg-primary text-white rounded-full text-sm font-bold shadow-lg hover:bg-secondary transition-all">İletişim</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* HAKKIMDA */}
        <section id="hakkimda" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/30 dark:to-gray-900">
          <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            <div className="relative group mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-accent opacity-25 rounded-full blur-2xl transition-opacity"></div>
              <img src={profileImg} alt="Leyla" className="relative w-72 h-72 rounded-full object-cover border-8 border-white dark:border-gray-800 shadow-2xl z-10" />
            </div>
            <div className="flex-1 text-center lg:text-left space-y-8">
              <h2 className="text-4xl lg:text-6xl font-black tracking-tight leading-tight">Geleceği <span className="text-primary dark:text-secondary underline decoration-primary/20">Kodlayarak</span> İnşa Ediyorum.</h2>
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                Yazılım Mühendisliği yolculuğumda modern araçlarla daha temiz, daha hızlı ve daha etkileyici dijital deneyimler geliştiriyorum. 
                Hafta-4'te Tailwind v4 ile bileşen tabanlı mimariye tam geçiş yaptık.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Button size="lg">CV İndir</Button>
                <Button variant="secondary" size="lg">Projelerime Bak</Button>
              </div>
            </div>
          </div>
        </section>

        {/* PROJELER - Refactored with Card Component */}
        <section id="projeler" className="py-24 container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center tracking-tight">Projeler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card title="E-Ticaret Sitesi" image={project1Img} imageAlt="E-Ticaret" footer={<div className="flex gap-2"><span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded">REACT</span> <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded">NODE</span></div>}>
              Tam kapsamlı alışveriş deneyimi sunan modern bir e-ticaret platformu.
            </Card>
            <Card title="Blog Portalı" image={project2Img} variant="outlined" footer={<Button size="sm" variant="ghost">Detaylar &rarr;</Button>}>
              Markdown destekli, hızlı ve SEO uyumlu kişisel yazılım günlüğü.
            </Card>
            <Card title="Hava Durumu Şık" image={project3Img} variant="filled" footer={<span className="text-xs font-semibold text-muted tracking-widest">GÜNCEL VERİ</span>}>
              Dünya genelindeki tüm şehirlerin anlık hava durumunu sunan API entegrasyonu.
            </Card>
          </div>
        </section>

        {/* UI KIT SHOWCASE (Uygulama 6-8 Görsellerindeki Talimatlar) */}
        <section id="uikit" className="py-24 bg-gray-50 dark:bg-gray-800/10 border-t border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-6">
            <div className="mb-20 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/60 dark:text-secondary/60 mb-4 block">Laboratuvar Kitabı</span>
              <h2 className="text-4xl font-black">Bileşen Kitaplığı</h2>
              <p className="text-muted mt-4">Hafta-4 kapsamında geliştirilen yeniden kullanılabilir UI araçları.</p>
            </div>

            <div className="space-y-24">
              {/* BUTTON VARIANTS */}
              <div className="space-y-8">
                <h3 className="text-xl font-bold flex items-center gap-3"><span className="p-2 bg-primary/10 text-primary rounded-lg text-sm">#1</span> Buton Varyantları</h3>
                <div className="bg-white dark:bg-gray-800/50 p-10 rounded-[2rem] border border-gray-200 dark:border-gray-700 space-y-12 shadow-sm">
                  <div className="space-y-4">
                    <p className="text-xs font-bold text-muted uppercase tracking-widest">Boyutlar</p>
                    <div className="flex flex-wrap items-end gap-6">
                      <Button size="sm">Küçük Buton</Button>
                      <Button size="md">Orta Buton</Button>
                      <Button size="lg">Büyük Buton</Button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs font-bold text-muted uppercase tracking-widest">Renkler & Durumlar</p>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="primary">Primary</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="danger">Danger</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button disabled>Devre Dışı</Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* INPUT VARIANTS */}
              <div className="space-y-8">
                <h3 className="text-xl font-bold flex items-center gap-3"><span className="p-2 bg-primary/10 text-primary rounded-lg text-sm">#2</span> Giriş (Input) Alanları</h3>
                <div className="bg-white dark:bg-gray-800/50 p-10 rounded-[2rem] border border-gray-200 dark:border-gray-700 grid grid-cols-1 md:grid-cols-2 gap-8 shadow-sm">
                  <Input id="name" label="Ad Soyad" placeholder="Ahmet Yılmaz" />
                  <Input id="email" label="E-posta" type="email" helpText="Örnek: ad@mail.com" placeholder="mail@example.com" />
                  <Input id="pass" label="Şifre" type="password" error="En az 8 karakter olmalı" defaultValue="1234" />
                  <Input id="disabled" label="Kilitli Alan" disabled defaultValue="Bu alan düzenlenemez" />
                </div>
              </div>

              {/* CARD VARIANTS */}
              <div className="space-y-8">
                <h3 className="text-xl font-bold flex items-center gap-3"><span className="p-2 bg-primary/10 text-primary rounded-lg text-sm">#3</span> Kart (Card) Tasarımları</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card variant="elevated" title="Gölgeli Kart" image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" imageAlt="Tasarım">
                    <p>Elevated (gölgeli) kartlar, derinlik hissi vurgulanmak istenen önemli içerikler içindir.</p>
                  </Card>
                  <Card variant="outlined" title="Çerçeveli Kart">
                    <p>Outlined (çerçeveli) kartlar, daha sade ve temiz yerleşimler için idealdir.</p>
                  </Card>
                  <Card variant="filled" title="Dolgulu Kart" footer={<Button size="sm" className="w-full">Seç</Button>}>
                    <p>Filled (dolgulu) kartlar, gruplanmış içerikleri hafifçe ayırmak için kullanılır.</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ILETISIM */}
        <section id="iletisim" className="py-24 container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-bold mb-12 text-center">İletişim</h2>
          <div className="bg-white dark:bg-gray-900 p-10 rounded-[3rem] shadow-2xl border border-gray-100 dark:border-gray-800 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input id="fname" label="Adınız" />
              <Input id="femail" label="E-postanız" />
            </div>
            <Input id="fsubject" label="Konu" />
            <div className="space-y-1.5">
              <label className="text-sm font-semibold ml-1">Mesajınız</label>
              <textarea className="w-full p-4 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-primary outline-none h-40 transition-all"></textarea>
            </div>
            <Button className="w-full py-5 text-lg" size="lg">Mesajı Gönder</Button>
          </div>
        </section>
      </main>

      <footer className="py-12 text-center border-t border-gray-100 dark:border-gray-800">
        <p className="text-muted text-sm font-medium tracking-widest">&copy; 2025 LEYLA GÜNEŞ &bull; WEB LAB HAFTA-4</p>
      </footer>
    </div>
  )
}

export default App
