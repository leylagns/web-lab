# CSS Kararları

## 1. Breakpoint Seçimi
- **Neden 640px ve 1024px seçtim?**
  - 640px, çoğu akıllı telefonun yatay modu ve tabletlerin dikey modu için ideal bir geçiş noktasıdır. Bu noktada içeriği tek sütundan iki sütuna (veya yatay dizilime) geçirmek okunabilirliği artırır.
  - 1024px, standart laptop ve masaüstü ekranları için ana yerleşim sınırıdır. Bu genişlikte içeriği ortalayıp max-width (1200px) uygulayarak görsel dengeyi sağladım.
- **İçeriğim bu noktalarda nasıl değişiyor?**
  - 640px'te; Navigasyon menüsü dikeyden yataya geçiyor, "Hakkımda" bölümü alt alta dizilmek yerine yan yana yerleşiyor.
  - 1024px'te; Proje kartları 3 sütunlu sabit bir ızgara (grid) yapısına bürünüyor.

## 2. Layout Tercihleri
- **Header için neden Flexbox seçtim?**
  - Logo ve menü elemanlarını iki uca (space-between) kolayca dağıtmak ve dikeyde ortalamak (align-items: center) için Flexbox en hızlı ve esnek yöntemdir.
- **Proje kartları için neden Grid seçtim?**
  - Proje kartları iki boyutlu (satır ve sütun) bir yerleşim gerektirdiği için CSS Grid daha uygundur. Kartların eşit yükseklikte olmasını ve yan yana düzenli dizilmesini sağlar.
- **auto-fit mi auto-fill mi kullandım, neden?**
  - `auto-fit` kullandım. Çünkü kart sayısı az olduğunda bile mevcut kartların boş alanı kaplayarak genişlemesini ve dengeli durmasını istedim.

## 3. Design Tokens
- **Hangi renk paletini seçtim ve neden?**
  - Yazılım Mühendisliği kimliğine uygun, güven veren ve kurumsal bir "Profesyonel Mavi" (#2563EB) paleti seçtim. Zıtlık (contrast) oranlarını yüksek tutarak erişilebilirliği sağladım.
- **Spacing skalasını nasıl belirledim?**
  - 4px tabanlı (0.25rem, 0.5rem, 1rem...) sistemli bir boşluk skalası kullandım. Bu, görsel tutarlılığı ve ritmi korumamı sağladı.
- **Fluid typography için clamp değerlerini nasıl ayarladım?**
  - `clamp(min, preferred, max)` yapısını kullanarak yazıların mobilde çok küçük, masaüstünde çok kaba durmamasını sağladım. Yazılar ekranla birlikte akıcı bir şekilde büyüyor.

## 4. Responsive Stratejiler
- **Mobile-first yaklaşımını nasıl uyguladım?**
  - CSS'i 0-639px (mobil) varsayılan olacak şekilde yazdım. Daha büyük ekranlar için sadece `@media (min-width: ...)` blokları ekleyerek kodu hafiflettim ve performansı artırdım.
- **Hangi elemanlar breakpoint'lerde değişiyor?**
  - Header (yön), Nav menüsü (dizilim), About Grid (sütun sayısı) ve Project Grid (sütun sayısı).
- **Görsel boyutları nasıl yönettim?**
  - Görsellere `max-width: 100%` ve `height: auto` vererek taşmalarını engelledim. `object-fit: cover` ile farklı oranlardaki görsellerin bozulmadan kırpılmasını sağladım.
