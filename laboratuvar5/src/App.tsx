import { useState, useEffect } from "react";
import profileImg from "./assets/profil.jpg";
import type { 
  Project, 
  Category, 
  SortField, 
  SortOrder 
} from "./types/project";
import { fetchProjects } from "./services/projectService";
import { applyFilters } from "./utils/projectHelpers";

// Reusable UI Components (From Week 4)
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import Alert from "./components/Alert";

/** 
 * Uygulama-5: React Component (Ana Sayfa) 
 * Dinamik veri yönetimi ve filtreleme sistemi.
 */

export default function App() {
  // --- STATE ---
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // --- VERI CEKME (Lifecycle) ---
  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Bilinmeyen bir hata olustu."
        );
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // --- TURETILMIS (DERIVED) VERI ---
  const filtered = applyFilters(
    projects,
    search,
    category,
    sortField,
    sortOrder
  );

  const categories: (Category | "all")[] = ["all", "frontend", "fullstack", "backend"];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-500 font-sans">
      
      {/* Tema Değiştirici */}
      <button
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed top-6 right-6 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-3 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all border border-gray-200 dark:border-gray-700 cursor-pointer"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden">🌙</span>
        <span className="hidden dark:inline text-yellow-400">☀️</span>
      </button>

      <div className="max-w-6xl mx-auto p-4 md:p-8">
        
        {/* Header - Portfolyo Sahibi (Uygulama-5 Gorseli Baz Alinarak Refaktor Edildi) */}
        <header className="mb-12 flex flex-col md:flex-row items-center gap-8 bg-white dark:bg-gray-900 md:p-8 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-800">
          <img 
            src={profileImg} 
            alt="Leyla Güneş" 
            className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl" 
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter">
              Leyla Güneş
            </h1>
            <p className="text-gray-500 dark:text-gray-400 font-medium mt-1">
              Software Engineer | Lab-5 Dinamik Portfolyo
            </p>
          </div>
        </header>

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
          Projelerim 🚀
        </h2>

        {/* --- HATA DURUMU (Uygulama-5) --- */}
        {error && (
          <Alert variant="error" title="Sistem Hatası" className="mb-8">
            {error}
          </Alert>
        )}

        {/* --- FILTRELER (Uygulama-5) --- */}
        <div className="flex flex-col lg:flex-row gap-4 mb-10 items-stretch lg:items-end">
          
          {/* Arama */}
          <div className="flex-1 max-w-md">
            <Input 
              id="search" 
              placeholder="Proje ara (Isim, aciklama, teknoloji)..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)} 
            />
          </div>

          {/* Kategori Butonları */}
          <div className="flex gap-2 flex-wrap items-center">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={category === cat ? "primary" : "secondary"}
                size="sm"
                onClick={() => setCategory(cat)}
                className="capitalize"
              >
                {cat === "all" ? "Tümü" : cat}
              </Button>
            ))}
          </div>

          {/* Sıralama */}
          <div className="flex gap-2 items-center">
            <select 
              value={sortField}
              onChange={(e) => setSortField(e.target.value as SortField)}
              className="border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-primary transition-all cursor-pointer"
            >
              <option value="year">Yıla Göre</option>
              <option value="title">Başlığa Göre</option>
            </select>
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setSortOrder(o => o === "asc" ? "desc" : "asc")}
              className="px-4 border border-gray-100 dark:border-gray-800"
            >
              {sortOrder === "asc" ? "A-Z ↑" : "Z-A ↓"}
            </Button>
          </div>
        </div>

        {/* --- YUKLENIYOR (Uygulama-5) --- */}
        {loading && !error && (
          <div className="flex flex-col items-center justify-center py-24 space-y-4">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-500 font-medium animate-pulse">Yükleniyor...</p>
          </div>
        )}

        {/* --- PROJE LISTESI (Uygulama-5) --- */}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-24 bg-white dark:bg-gray-900 rounded-[3rem] border border-dashed border-gray-200 dark:border-gray-700">
            <p className="text-gray-400 text-lg">Eşleşen proje bulunamadı. 🔍</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {!loading && filtered.map(project => (
            <Card 
              key={project.id}
              variant="elevated"
              title={project.title}
              image={project.image}
              imageAlt={`${project.title} ekran goruntusu`}
              className="group"
              footer={
                <div className="flex items-center justify-between">
                   <div className="flex gap-1 flex-wrap">
                    {project.tech.map(t => (
                      <span key={t} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2.5 py-0.5 rounded-full font-bold">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-gray-400">
                    {project.year} &bull; {project.category}
                  </span>
                </div>
              }
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {project.description}
              </p>
            </Card>
          ))}
        </div>

        {/* --- SONUC SAYISI (Uygulama-5) --- */}
        {!loading && (
          <div className="mt-16 text-center">
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 inline-block px-6 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-100 dark:border-gray-800 shadow-sm">
              <span className="text-primary font-bold">{filtered.length}</span> / {projects.length} proje gösteriliyor
            </p>
          </div>
        )}

      </div>

      <footer className="py-12 mt-24 border-t border-gray-100 dark:border-gray-800 text-center">
        <p className="text-sm font-bold text-muted tracking-widest uppercase opacity-60">
          &copy; 2025 Leyla Güneş &bull; Veri Yönetimi | Hafta-5
        </p>
      </footer>
    </div>
  );
}
