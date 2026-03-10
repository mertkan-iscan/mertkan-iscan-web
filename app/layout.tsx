import './globals.css'

export const metadata = {
  title: 'Mertkan İşcan | Yazılım Çözümleri',
  description: 'İşletmenizi Büyüten Dijital Çözümler',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className="bg-stone-50 text-stone-900 font-sans antialiased overflow-hidden">
        
        {/* Üst Menü */}
        <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200 transition-all duration-300">
          <nav className="flex items-center justify-between p-4 md:p-6 max-w-7xl mx-auto">
            
            {/* Logo */}
            <div className="text-xl md:text-2xl font-black tracking-tighter text-stone-800 cursor-default">
              Mertkan İşcan<span className="text-emerald-500">.</span>
            </div>
            
            {/* SADECE MASAÜSTÜ: Menü Linkleri */}
            <div className="space-x-8 text-sm font-bold text-stone-500 hidden md:flex items-center">
              <a href="#hero" className="hover:text-emerald-600 transition-colors duration-300">Ana Sayfa</a>
              <a href="#cozumler" className="hover:text-emerald-600 transition-colors duration-300">Çözümler</a>
              <a href="#iletisim" className="hover:text-emerald-600 transition-colors duration-300">İletişim</a>
            </div>

            {/* SADECE MOBİL: Hemen Ulaşın Butonu */}
            <a 
              href="#iletisim" 
              className="md:hidden bg-emerald-600 text-white px-4 py-2 rounded-full font-bold text-xs shadow-lg hover:bg-emerald-700 transition-colors flex items-center gap-1.5"
            >
              Ulaşın
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>

          </nav>
        </header>

        <main className="h-screen w-full">
          {children}
        </main>

      </body>
    </html>
  )
}