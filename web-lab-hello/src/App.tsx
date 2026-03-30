function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
      <header>
        <h1>Web Tasarımı ve Programlama</h1>
        <h2 style={{ color: '#007acc' }}>LAB-1</h2>
      </header>
      
      <main>
        <section className="info" style={{ backgroundColor: '#f4f4f4', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
          <p><strong>Ad Soyad:</strong> Leyla Güneş</p>
          <p><strong>Öğrenci No:</strong> 235541098</p>
          <p><strong>Bölüm:</strong> Yazılım Mühendisliği</p>
        </section>

        <section className="intro" style={{ marginBottom: '1.5rem' }}>
          <h3>Hakkımda</h3>
          <p>
            Yazılım Mühendisliği öğrencisiyim ve web teknolojileri ile yazılım geliştirme alanında uzmanlaşmayı hedefliyorum. 
            Modern web framework'leri ve araçlarıyla kullanıcı dostu projeler üretmek en büyük ilgi alanım.
          </p>
        </section>

        <section className="skills">
          <h3>İlgi Alanlarım ve Hobiler</h3>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Modern Web Geliştirme (React & TypeScript)</li>
            <li>Sistem Analizi ve Tasarımı</li>
            <li>Yeni Teknolojileri ve Algoritmaları Keşfetme</li>
            <li>Kitap Okumak ve Teknoloji Haberlerini Takip Etmek</li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
