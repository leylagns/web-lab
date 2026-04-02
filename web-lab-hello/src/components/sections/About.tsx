import profileImg from "../../assets/profil.jpg";

export default function About() {
  const tags = ["HTML5", "CSS3", "Safe UX", "WAI-ARIA"];

  return (
    <section id="hakkimda" className="pt-12 scroll-mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter leading-tight">
            Merhaba, ben <span className="text-primary">Leyla.</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
            Temiz, erişilebilir ve modern web standartlarına uygun projeler inşa etmekten büyük keyif alıyorum. Amacım sürekli olarak kendimi geliştirmek.
          </p>
          <div className="flex flex-wrap gap-3">
            {tags.map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-bold text-gray-500 dark:text-gray-400">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-blue-400 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <img 
            src={profileImg} 
            alt="Leyla Güneş Çalışma Anından Bir Kare" 
            className="relative w-full aspect-square rounded-[3rem] object-cover shadow-2xl border-8 border-white dark:border-gray-800" 
          />
        </div>
      </div>
    </section>
  );
}
