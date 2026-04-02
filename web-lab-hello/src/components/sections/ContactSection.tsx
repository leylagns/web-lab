import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section id="iletisim" className="scroll-mt-24 max-w-2xl mx-auto py-12">
      <div className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-[3.5rem] shadow-sm border border-gray-100 dark:border-gray-800 space-y-8 text-center">
        <div className="space-y-4">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter">İletişime Geçelim 👋</h2>
          <p className="text-gray-500 font-medium italic">Sorularınız veya iş birliği için bana ulaşın.</p>
        </div>

        {/* LAB-6 Gelişmiş İletişim Formu */}
        <ContactForm />
      </div>
    </section>
  );
}
