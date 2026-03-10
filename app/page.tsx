"use client";

import { motion } from "framer-motion";

const RevealText = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ y: 40, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: false, amount: 0.1 }} 
    transition={{ duration: 0.7, delay, ease: [0.25, 0.8, 0.25, 1] }}
    className="w-full flex justify-center"
  >
    {children}
  </motion.div>
);

/* --- FARKLI ARKA PLAN DOKULARI --- */
const CircuitPattern = () => (
  <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23059669' stroke-width='1'%3E%3Cpath d='M0 10 L 30 10 L 40 0 M 120 110 L 90 110 L 80 120 M 60 60 L 60 90 L 70 100 M 60 60 L 30 60 L 20 70 M 60 60 L 60 30 L 50 20 M 60 60 L 90 60 L 100 50' /%3E%3Cpath d='M 10 0 L 10 30 L 0 40 M 110 120 L 110 90 L 120 80' /%3E%3Ccircle cx='10' cy='10' r='2.5' fill='%23059669' /%3E%3Ccircle cx='110' cy='110' r='2.5' fill='%23059669' /%3E%3Ccircle cx='60' cy='60' r='3.5' fill='%23059669' /%3E%3Ccircle cx='40' cy='100' r='2' fill='%23059669' /%3E%3Ccircle cx='80' cy='20' r='2' fill='%23059669' /%3E%3Ccircle cx='10' cy='110' r='1.5' fill='%23059669' /%3E%3Ccircle cx='110' cy='10' r='1.5' fill='%23059669' /%3E%3Cpath d='M 40 100 L 40 120 M 80 20 L 80 0' stroke-width='0.7' /%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '120px 120px' }}></div>
);

const BlobPattern = () => (
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
    <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-emerald-200/40 rounded-full blur-3xl"></div>
    <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-stone-300/50 rounded-full blur-3xl"></div>
  </div>
);

const DotPattern = () => (
  <div className="absolute inset-0 z-0 opacity-[0.25] pointer-events-none bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:30px_30px]"></div>
);
/* --------------------------------- */

export default function Home() {
  return (
    <div className="h-[100dvh] w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-stone-50 text-stone-800">
      
      {/* Bölüm 1: Ana Giriş (Hero) */}
      <section id="hero" className="min-h-[100dvh] w-full snap-start snap-always flex flex-col items-center justify-center px-4 pt-24 pb-10 relative bg-stone-50 overflow-hidden text-center">
        <CircuitPattern />

        <div className="z-10 flex flex-col items-center w-full max-w-7xl">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] xl:text-[8rem] font-black tracking-tighter mb-2 text-stone-900 leading-none">
              İşletmenizi Büyüten
            </h1>
          </motion.div>
          
          <div className="relative mt-2 mb-8 md:mb-12 flex justify-center max-w-max mx-auto isolation-auto">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
              className="absolute inset-0 bg-emerald-600 rounded-2xl md:rounded-3xl shadow-2xl origin-left"
            ></motion.div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5 }}
              className="relative z-10 text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] xl:text-[8rem] font-black tracking-tighter text-white px-6 md:px-12 py-3 md:py-4 leading-none"
            >
              Dijital Çözümler
            </motion.h1>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-6 md:gap-12 mt-4 w-full">
            <RevealText delay={0.6}>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-600">İş Yükünü <span className="text-emerald-600">Hafiflet.</span></p>
            </RevealText>
            <RevealText delay={0.7}>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-600 hidden md:block">•</p>
            </RevealText>
            <RevealText delay={0.8}>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-600">Maliyetleri <span className="text-emerald-600">Düşür.</span></p>
            </RevealText>
            <RevealText delay={0.9}>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-600 hidden md:block">•</p>
            </RevealText>
            <RevealText delay={1.0}>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-600">Satışları <span className="text-emerald-600">Katla.</span></p>
            </RevealText>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-6 sm:bottom-10 animate-bounce flex flex-col items-center"
          >
            <span className="text-[10px] sm:text-xs font-black text-stone-400 uppercase tracking-[0.3em] mb-2">Aşağı Kaydır</span>
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
            </svg>
          </motion.div>

        </div>
      </section>

      {/* Bölüm 2: Çözümler */}
      <section id="cozumler" className="min-h-[100dvh] w-full snap-start snap-always flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 py-20 md:py-24 bg-stone-100 relative overflow-hidden text-center">
        <BlobPattern />

         <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center justify-center h-full">
            <RevealText>
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-stone-900 mb-8 md:mb-16 tracking-tight">Sizi Nasıl Hızlandırabilirim?</h2>
            </RevealText>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 w-full">
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 30 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.1, type: "spring", bounce: 0.4 }}
                className="bg-white/95 backdrop-blur-md p-5 sm:p-6 lg:p-12 rounded-2xl lg:rounded-3xl border border-white hover:border-emerald-400 hover:shadow-2xl transition-all duration-300 shadow-xl flex flex-row lg:flex-col items-center text-left lg:text-center group w-full gap-4 lg:gap-0"
              >
                <div className="shrink-0 lg:mb-6 group-hover:scale-110 lg:group-hover:scale-125 transition-transform origin-center text-emerald-600">
                  <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-20 lg:h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-xl lg:text-3xl font-black text-stone-900 mb-1 lg:mb-4">ERP & Yönetim</h3>
                  <p className="text-sm sm:text-base lg:text-xl text-stone-500 font-bold">Muhasebe ve stok tek ekranda.</p>
                  <p className="text-sm sm:text-base lg:text-2xl text-emerald-600 font-black mt-1 lg:mt-2">Kağıt işlerine son.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 30 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
                className="bg-white/95 backdrop-blur-md p-5 sm:p-6 lg:p-12 rounded-2xl lg:rounded-3xl border border-white hover:border-emerald-400 hover:shadow-2xl transition-all duration-300 shadow-xl flex flex-row lg:flex-col items-center text-left lg:text-center group w-full gap-4 lg:gap-0"
              >
                <div className="shrink-0 lg:mb-6 group-hover:scale-110 lg:group-hover:scale-125 transition-transform origin-center text-emerald-600">
                  <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-20 lg:h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-xl lg:text-3xl font-black text-stone-900 mb-1 lg:mb-4">Mobil & Web</h3>
                  <p className="text-sm sm:text-base lg:text-xl text-stone-500 font-bold">Müşterinizin cebine girin.</p>
                  <p className="text-sm sm:text-base lg:text-2xl text-emerald-600 font-black mt-1 lg:mt-2">Modern ve kusursuz.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 30 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3, type: "spring", bounce: 0.4 }}
                className="bg-white/95 backdrop-blur-md p-5 sm:p-6 lg:p-12 rounded-2xl lg:rounded-3xl border border-white hover:border-emerald-400 hover:shadow-2xl transition-all duration-300 shadow-xl flex flex-row lg:flex-col items-center text-left lg:text-center group w-full gap-4 lg:gap-0"
              >
                <div className="shrink-0 lg:mb-6 group-hover:scale-110 lg:group-hover:scale-125 transition-transform origin-center text-emerald-600">
                  <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-20 lg:h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-xl lg:text-3xl font-black text-stone-900 mb-1 lg:mb-4">Şirket IT Desteği</h3>
                  <p className="text-sm sm:text-base lg:text-xl text-stone-500 font-bold">Sistem çöktü derdine son.</p>
                  <p className="text-sm sm:text-base lg:text-2xl text-emerald-600 font-black mt-1 lg:mt-2">Siz işinize odaklanın.</p>
                </div>
              </motion.div>
            </div>
         </div>
      </section>

      {/* Bölüm 3: İletişim */}
      <section id="iletisim" className="min-h-[100dvh] w-full snap-start snap-always flex flex-col items-center justify-center px-4 py-16 sm:py-24 bg-emerald-700 text-white relative overflow-hidden text-center">
        <DotPattern />
        
        <div className="z-10 flex flex-col items-center w-full max-w-5xl">
          <RevealText>
            <h2 className="text-5xl sm:text-7xl lg:text-[7rem] font-black mb-4 sm:mb-8 tracking-tighter leading-none w-full text-center">
              Harekete Geçin.
            </h2>
          </RevealText>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center space-y-6 sm:space-y-10 mt-6 w-full"
          >
            <p className="text-xl sm:text-3xl lg:text-4xl text-emerald-100 font-bold max-w-3xl mx-auto px-4 leading-tight text-center">
              Dijital dönüşümünüzü bugün başlatın. Rakiplerinizin önüne geçin.
            </p>
            
            {/* BUTONLAR: Sabit Genişlik (w-full md:w-80) ve Merkezleme */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mt-6 sm:mt-12 w-full px-4">
              
              <a href="https://wa.me/905327788085" target="_blank" rel="noopener noreferrer" className="w-full sm:w-80 text-lg sm:text-2xl lg:text-3xl font-black bg-[#25D366] text-white px-6 sm:px-12 py-4 sm:py-6 rounded-2xl lg:rounded-3xl hover:scale-105 hover:bg-[#20bd5a] transition-all shadow-2xl flex items-center justify-center gap-3 sm:gap-4">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                WhatsApp
              </a>

              <a href="mailto:mertkan.iscan.1@gmail.com" className="w-full sm:w-80 text-lg sm:text-2xl lg:text-3xl font-black bg-white text-emerald-700 px-6 sm:px-12 py-4 sm:py-6 rounded-2xl lg:rounded-3xl hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-3 sm:gap-4">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                E-posta
              </a>
              
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}