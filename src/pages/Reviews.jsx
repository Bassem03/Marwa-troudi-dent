import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle, Quote } from 'lucide-react';

const Reviews = () => {
    return (
        <div className="bg-slate-50 min-h-screen pt-32 pb-12 relative">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-gradient-to-b from-primary/5 to-transparent skew-x-12 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full bg-accent-gold/10 text-accent-gold font-bold text-xs tracking-widest uppercase">
                        <Star size={14} fill="currentColor" />
                        Vérifié par TrustPilot
                    </div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6"
                    >
                        Témoignages de <span className="text-primary italic">Succès</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-500 font-light"
                    >
                        Rejoignez la communauté des patients qui ont retrouvé leur confiance grâce à nos soins.
                    </motion.p>
                </div>

                {/* Google Reviews Summary Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12 mb-20 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-3 h-full bg-gradient-to-b from-blue-500 to-primary" />
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-6">
                            <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white font-bold text-3xl shadow-lg shadow-blue-500/30">G</div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-800">Cabinet dentaire Dr. Marwa Troudi - Monastir</h2>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-slate-900 font-black text-2xl">4.9</span>
                                    <div className="flex text-amber-400 gap-0.5">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                                    </div>
                                    <span className="text-slate-400 text-sm ml-2 font-medium"></span>
                                </div>
                            </div>
                        </div>
                        <a href="#" className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl transition-all flex items-center gap-2">
                            <MessageCircle size={20} />
                            Écrire un Avis
                        </a>
                    </div>
                </motion.div>

                {/* Masonry Mock Reviews Grid */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {[
                        { name: "Oumayma Besbes", date: "il y a plus de 3 mois", text: "Elle est très compétente, douce et souriante. Elle prend le temps d’expliquer chaque étape. Je suis très satisfaite de ses soins et je la recommande vivement.", bg: "bg-white" },
                        { name: "Malika Mbarki", date: "il y a plus de 4 mois", text: "Excellente dentiste ! Dr Marwa est très professionnelle, douce et à l’écoute. Elle prend le temps d’expliquer chaque étape et fait son travail avec beaucoup de soin. Je suis très satisfaite du résultat, je la recommande vivementi", bg: "bg-primary text-white", dark: true },
                        { name: "MERYEM EL ACHHAL", date: "il y a plus d'un ans'", text: "La prestation c’est bien passer avec beaucoup de professionnalisme et de savoir faire dr Marwa à su me mètre à l aise et m explique chaque étape à faire Le résultat et tout ce que j’attendais je voulais un effet naturel et le résultat était au rdv Je recommande dr Marwa", bg: "bg-white" },
                        { name: "Eric Imberechts", date: "il y a plus de 3 ans", text: "Dentiste très professionnelle humaine prends à chaque à fois le temps d’expliquer au patient avant chaque procédure , je suis très content d’avoir choisi Docteur Marwa Troudi comme dentiste pour mes soins dentaire et plus précisément la mise en place des couronnes en zirconium tout s’est super bien passés pendant les soins elle est  à l’écoute de son patient très patiente à recommander en toute confiance. A notre prochaine visite à Monastir encore Merci", bg: "bg-white" },
                        { name: "Nour Rebai", date: "il y a plus de 3 ans", text: "Je tenais à exprimer toute ma reconnaissance et ma profonde gratitude à Dr. Marwa Troudi pour son professionnalisme et son dévouement lors des soins qu'elle m'a apportés. Je suis très satisfaite 😊 …", bg: "bg-white" },
                        { name: "Krifi Nawras", date: "il y a plus d'un an", text: "Compétence , professionnalisme et bonne écoute aux attentes des patients sont garantis dans ce cabinet dentaire👌👌 …", bg: "bg-secondary text-white", dark: true },
                    ].map((review, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`${review.bg} p-8 rounded-[2rem] border ${review.dark ? 'border-transparent shadow-2xl' : 'border-slate-100 shadow-lg shadow-slate-200/40'} break-inside-avoid`}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${review.dark ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'}`}>
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className={`text-base font-bold ${review.dark ? 'text-white' : 'text-slate-900'}`}>{review.name}</div>
                                        <div className={`text-xs ${review.dark ? 'text-white/60' : 'text-slate-400'}`}>{review.date}</div>
                                    </div>
                                </div>
                                <div className="flex text-amber-400">
                                    {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                                </div>
                            </div>
                            <p className={`text-base leading-relaxed ${review.dark ? 'text-white/90 font-light' : 'text-slate-600'}`}>"{review.text}"</p>
                        </motion.div>
                    ))}
                </div>

                {/* Featured Quote */}
                <div className="bg-gradient-to-r from-accent-purple to-indigo-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <Quote size={64} className="mx-auto mb-8 text-white/30" />
                        <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-10">
                            "Ils n'ont pas seulement soigné mes dents, ils ont restauré ma confiance. Le niveau de soins et d'attention aux détails est inégalé."
                        </h2>
                        <div className="flex items-center justify-center gap-4">
                            <div className="text-left">
                            </div>
                        </div>
                    </div>
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/30 rounded-full blur-[80px] pointer-events-none" />
                </div>

            </div>
        </div>
    );
};

export default Reviews;
