import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import Alert from '../components/Alert';

/** 
 * Uygulama-11: UI Kit Sayfası 
 * Showcase 8+ variants of the reusable components.
 */

export default function UIKit() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-12 font-sans transition-colors duration-500">
      
      <div className="border-b border-gray-200 dark:border-gray-800 pb-8">
        <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter">
          Laboratuvar UI Kit
        </h1>
        <p className="text-gray-500 mt-2 font-medium">Hafta-4: Yeniden Kullanılabilir Tailwind Bileşenleri</p>
      </div>

      {/* --- BUTTONS --- */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 text-gray-800 dark:text-gray-200 border-gray-100 dark:border-gray-800">Buttons</h2>
        
        {/* Varyant 1: Renkler */}
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-muted">Renk Varyantları</p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </div>

        {/* Varyant 2: Boyutlar */}
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-muted">Boyut Varyantları</p>
          <div className="flex flex-wrap items-end gap-6">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>
      </section>

      {/* --- INPUTS --- */}
      <section className="space-y-6 max-w-4xl">
        <h2 className="text-2xl font-bold border-b pb-2 text-gray-800 dark:text-gray-200 border-gray-100 dark:border-gray-800">Inputs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Varyant 3: Normal */}
          <Input 
            id="ui-name" 
            label="Normal Input" 
            placeholder="Bir sey yazin..." 
          />
          
          {/* Varyant 4: Hatali */}
          <Input 
            id="ui-err" 
            label="Hatali Input" 
            error="Bu alan zorunludur" 
          />
          
          {/* Varyant 5: Help text */}
          <Input 
            id="ui-help" 
            label="Help Text" 
            type="email" 
            helpText="E-posta adresinizi girin" 
          />
          
          {/* Varyant 6: Disabled */}
          <Input 
            id="ui-dis" 
            label="Disabled" 
            disabled 
            value="Düzenlenemez" 
          />
        </div>
      </section>

      {/* --- CARDS --- */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 text-gray-800 dark:text-gray-200 border-gray-100 dark:border-gray-800">Cards</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Varyant 7: Elevated */}
          <Card 
            variant="elevated" 
            title="Elevated Card" 
            image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600"
          >
            Golge ile yukseltilmis, modern derinlikli kart.
          </Card>
          
          {/* Varyant 8: Outlined */}
          <Card 
            variant="outlined" 
            title="Outlined Card"
          >
            Sade ve temiz, cerceveli kart tasarımı.
          </Card>
          
          <Card 
            variant="filled" 
            title="Filled Card" 
            footer={<Button size="sm" className="w-full">Detay</Button>}
          >
            Dolgulu arka plana sahip, hafif ayırıcı kart.
          </Card>
        </div>
      </section>

      {/* --- ALERTS --- */}
      <section className="space-y-6 max-w-2xl">
        <h2 className="text-2xl font-bold border-b pb-2 text-gray-800 dark:text-gray-200 border-gray-100 dark:border-gray-800">Alerts</h2>
        
        <div className="space-y-4">
          <Alert variant="info" title="Bilgi">Bilgilendirme mesajı.</Alert>
          <Alert variant="success" title="Basarili">İşlem başarıyla tamamlandı.</Alert>
          <Alert variant="warning" title="Uyari">Dikkat edilmesi gereken bir durum mevcut.</Alert>
          <Alert variant="error" title="Hata" dismissible onDismiss={() => alert('Kapatildi!')}>
            Bir hata olustu. (Kapatılabilir)
          </Alert>
        </div>
      </section>

    </div>
  );
}
