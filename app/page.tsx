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

const GridPattern = () => (
  <div className="absolute inset-0 z-0 opacity-[0.3] pointer-events-none bg-[linear-gradient(to_right,#d6d3d1_1px,transparent_1px),linear-gradient(to_bottom,#d6d3d1_1px,transparent_1px)] bg-[size:60px_60px]"></div>
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
          <RevealText>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] xl:text-[8rem] font-black tracking-tighter mb-2 text-stone-900 leading-none">
              İşletmenizi Büyüten
            </h1>
          </RevealText>
          <div className="relative mt-2 mb-8 md:mb-12 flex justify-center max-w-max mx-auto isolation-auto">
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: false }} transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }} className="absolute inset-0 bg-emerald-600 rounded-2xl md:rounded-3xl shadow-2xl origin-left" />
            <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ delay: 0.5 }} className="relative z-10 text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] xl:text-[8rem] font-black tracking-tighter text-white px-6 md:px-12 py-3 md:py-4 leading-none">
              Dijital Çözümler
            </motion.h1>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-6 md:gap-12 mt-4 w-full">
            <RevealText delay={0.6}><p className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-600">İş Yükünü <span className="text-emerald-600">Hafiflet.</span></p></RevealText>
            <RevealText delay={0.7}><p className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-600 hidden md:block">•</p></RevealText>
            <RevealText delay={0.8}><p className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-600">Maliyetleri <span className="text-emerald-600">Düşür.</span></p></RevealText>
            <RevealText delay={0.9}><p className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-600 hidden md:block">•</p></RevealText>
            <RevealText delay={1.0}><p className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-600">Satışları <span className="text-emerald-600">Katla.</span></p></RevealText>
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ delay: 1.5 }} className="absolute bottom-6 sm:bottom-10 animate-bounce flex flex-col items-center">
            <span className="text-[10px] sm:text-xs font-black text-stone-400 uppercase tracking-[0.3em] mb-2">Aşağı Kaydır</span>
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" /></svg>
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
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 30 }} whileInView={{ scale: 1, opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: 0.1, type: "spring", bounce: 0.4 }} className="bg-white/95 backdrop-blur-md p-5 sm:p-6 lg:p-12 rounded-2xl lg:rounded-3xl border border-white hover:border-emerald-400 hover:shadow-2xl transition-all duration-300 shadow-xl flex flex-row lg:flex-col items-center text-left lg:text-center group w-full gap-4 lg:gap-0">
              <div className="shrink-0 lg:mb-6 group-hover:scale-110 lg:group-hover:scale-125 transition-transform origin-center text-emerald-600">
                <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-20 lg:h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-3xl font-black text-stone-900 mb-1 lg:mb-4">Özel ERP Çözümleri</h3>
                <p className="text-sm sm:text-base lg:text-xl text-stone-500 font-bold">İş akışınıza %100 uyumlu sistemler.</p>
                <p className="text-sm sm:text-base lg:text-2xl text-emerald-600 font-black mt-1 lg:mt-2">Verimliliği mühendislikle katlayın.</p>
              </div>
            </motion.div>

            <motion.div initial={{ scale: 0.9, opacity: 0, y: 30 }} whileInView={{ scale: 1, opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: 0.2, type: "spring", bounce: 0.4 }} className="bg-white/95 backdrop-blur-md p-5 sm:p-6 lg:p-12 rounded-2xl lg:rounded-3xl border border-white hover:border-emerald-400 hover:shadow-2xl transition-all duration-300 shadow-xl flex flex-row lg:flex-col items-center text-left lg:text-center group w-full gap-4 lg:gap-0">
              <div className="shrink-0 lg:mb-6 group-hover:scale-110 lg:group-hover:scale-125 transition-transform origin-center text-emerald-600">
                <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-20 lg:h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-3xl font-black text-stone-900 mb-1 lg:mb-4">Mobil & Web</h3>
                <p className="text-sm sm:text-base lg:text-xl text-stone-500 font-bold">Müşterinizin cebine girin.</p>
                <p className="text-sm sm:text-base lg:text-2xl text-emerald-600 font-black mt-1 lg:mt-2">Modern ve kusursuz.</p>
              </div>
            </motion.div>

            <motion.div initial={{ scale: 0.9, opacity: 0, y: 30 }} whileInView={{ scale: 1, opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: 0.3, type: "spring", bounce: 0.4 }} className="bg-white/95 backdrop-blur-md p-5 sm:p-6 lg:p-12 rounded-2xl lg:rounded-3xl border border-white hover:border-emerald-400 hover:shadow-2xl transition-all duration-300 shadow-xl flex flex-row lg:flex-col items-center text-left lg:text-center group w-full gap-4 lg:gap-0">
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

      {/* Bölüm 3: Neden Özel ERP? (Mobil Uyumlu) */}
      <section id="neden-ozel-erp" className="min-h-[100dvh] w-full snap-start snap-always flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 py-8 md:py-24 bg-white relative overflow-hidden">
        <GridPattern />
        <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">
          <RevealText>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-stone-900 mb-6 md:mb-12 tracking-tighter text-center">
              Neden <span className="text-emerald-600">Özel ERP?</span>
            </h2>
          </RevealText>

          <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-8 w-full max-w-5xl">
            
            {/* Eksi Yön: Standart Yazılım Kartı */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: false }} 
              transition={{ duration: 0.5 }} 
              className="flex-1 bg-stone-50 border border-stone-200 p-5 sm:p-8 rounded-2xl md:rounded-3xl shadow-sm flex flex-col relative overflow-hidden group"
            >
              <div className="absolute -top-6 -right-6 text-stone-200 group-hover:text-red-100 transition-colors duration-500">
                <svg className="w-24 h-24 md:w-32 md:h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-stone-800 mb-4 sm:mb-6">
                  <span className="line-through decoration-red-500 decoration-[3px] md:decoration-4">Standart Yazılımlar</span>
                </h3>
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-stone-600 font-medium">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-red-500 font-black mt-0.5 sm:mt-1">✗</span> 
                    Sizi kendi katı kalıplarına zorlar.
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-red-500 font-black mt-0.5 sm:mt-1">✗</span> 
                    Kullanmadığınız onlarca menü arasında kaybolursunuz.
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-red-500 font-black mt-0.5 sm:mt-1">✗</span> 
                    "Bizim işleyişimiz farklı" dediğiniz an sistem tıkanır.
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Geçiş İkonu (Ok) - Sadece Tablet ve PC'de */}
            <div className="hidden md:flex flex-col items-center justify-center text-stone-300">
               <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </div>

            {/* Artı Yön: Özel ERP Kartı */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: false }} 
              transition={{ duration: 0.5, delay: 0.1 }} 
              className="flex-1 bg-emerald-600 text-white p-5 sm:p-8 rounded-2xl md:rounded-3xl shadow-xl flex flex-col relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="absolute -bottom-8 -right-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-32 h-32 md:w-48 md:h-48" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-100 mb-4 sm:mb-6">Size Özel Sistemler</h3>
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-xl text-emerald-50 font-medium mb-5 sm:mb-8">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-emerald-300 font-black mt-0.5 sm:mt-1">✓</span> 
                    Siz yazılıma değil, yazılım sizin işleyişinize uyar.
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-emerald-300 font-black mt-0.5 sm:mt-1">✓</span> 
                    Sadece ihtiyacınız olan, verimi artıran ekranlar.
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-emerald-300 font-black mt-0.5 sm:mt-1">✓</span> 
                    Şirketinize özel iş kurallarının kusursuz dijital hali.
                  </li>
                </ul>
                <div className="mt-auto">
                  <p className="text-base sm:text-lg md:text-2xl font-black text-white leading-tight italic border-t border-emerald-500/50 pt-4 sm:pt-6">
                    İşleyişinizi <span className="text-emerald-200 underline">koda döküyoruz.</span>
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Bölüm 4: Dinamikler ve Kalıplar */}
      <section id="dinamikler" className="min-h-[100dvh] w-full snap-start snap-always flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 py-16 md:py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-5xl mx-auto text-center z-10">
          <RevealText>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Sektörünüzün dinamiklerini <br className="hidden md:block"/> 
              <span className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">standart bir kalıba</span> sığdırmayın.
            </h2>
          </RevealText>
          <RevealText delay={0.3}>
            <p className="text-xl md:text-3xl font-bold text-stone-400">
              Her şirketin parmak izi farklıdır. <br/> Sizin için en verimli iş akışını bizzat tasarlıyor ve hayata geçiriyorum.
            </p>
          </RevealText>
        </div>
      </section>

      {/* Bölüm 5: İletişim */}
      <section id="iletisim" className="min-h-[100dvh] w-full snap-start snap-always flex flex-col items-center justify-center px-4 py-16 sm:py-24 bg-emerald-700 text-white relative overflow-hidden text-center">
        <DotPattern />
        <div className="z-10 flex flex-col items-center w-full max-w-5xl">
          <RevealText>
            <h2 className="text-5xl sm:text-7xl lg:text-[7rem] font-black mb-4 sm:mb-8 tracking-tighter leading-none w-full text-center">Harekete Geçin.</h2>
          </RevealText>
          <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: false }} transition={{ delay: 0.3 }} className="flex flex-col items-center space-y-6 sm:space-y-10 mt-6 w-full">
            <p className="text-xl sm:text-3xl lg:text-4xl text-emerald-100 font-bold max-w-3xl mx-auto px-4 leading-tight text-center">Dijital dönüşümünüzü bugün başlatın. Rakiplerinizin önüne geçin.</p>
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