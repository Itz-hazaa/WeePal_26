export const Footer = () => (
  <footer className="bg-primary-dark py-14 text-white">
    <div className="container">
      <div className="grid gap-9 md:grid-cols-3">
        <div>
          <div className="mb-2 font-display text-xl font-bold text-white">
            Wee<span className="text-accent">Pal</span>
          </div>
          <p className="max-w-[230px] text-sm leading-relaxed text-white/55">
            Live online tuition for Classes 4–10. Small batches, expert teachers, and weekly WhatsApp progress reports for parents.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-[11px] font-extrabold uppercase tracking-widest text-white/45">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/65">
            <li><a href="#howitworks" className="hover:text-accent">How It Works</a></li>
            <li><a href="#curriculum" className="hover:text-accent">What We Teach</a></li>
            <li><a href="#pricing" className="hover:text-accent">Pricing</a></li>
            <li><a href="#faq" className="hover:text-accent">FAQ</a></li>
            <li><a href="#demo" className="hover:text-accent">Book Free Trial</a></li>
            <li><a href="https://www.techshala.org" target="_blank" rel="noopener noreferrer" className="hover:text-accent">TechShala ↗</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-[11px] font-extrabold uppercase tracking-widest text-white/45">Contact Us</h4>
          <p className="mb-1.5 text-sm text-white/65">📞 <a href="tel:+917842012006" className="text-white/85 hover:text-accent">+91 78420 12006</a></p>
          <p className="mb-1.5 text-sm text-white/65">📞 <a href="tel:+971582887447" className="text-white/85 hover:text-accent">+971 582887447</a> (UAE)</p>
          <p className="mb-3 text-sm text-white/65">💬 <a href="https://wa.me/917842012006" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-accent">Chat on WhatsApp</a></p>
          <p className="text-xs text-white/35">#45 Baniyas East 7th, Abu Dhabi, UAE</p>
          <p className="text-xs text-white/35">Hyderabad, Telangana, India</p>
        </div>
      </div>
      <div className="mt-9 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-5">
        <p className="text-xs text-white/30">WeePal Education · Empowering Tomorrow's Thinkers · © 2026</p>
        <p className="text-xs text-white/30">Made with ❤️ in Hyderabad</p>
      </div>
    </div>
  </footer>
);
