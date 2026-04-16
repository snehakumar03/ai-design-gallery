import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, ExternalLink, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-deep-blue">Get in Touch</h2>
          <p className="mt-2 text-deep-blue/60">
            Ready to create something beautiful? Let&rsquo;s talk.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-deep-blue mb-1">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white border border-cream-dark text-deep-blue focus:outline-none focus:ring-2 focus:ring-terracotta/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-deep-blue mb-1">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white border border-cream-dark text-deep-blue focus:outline-none focus:ring-2 focus:ring-terracotta/20"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-deep-blue mb-1">Message</label>
              <textarea
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white border border-cream-dark text-deep-blue focus:outline-none focus:ring-2 focus:ring-terracotta/20 resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-deep-blue text-white font-medium hover:bg-deep-blue/90 transition-colors"
            >
              Send Message
              <Send size={18} />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center gap-4"
          >
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-cream-dark hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 rounded-full bg-muted-green/10 flex items-center justify-center text-muted-green">
                <MessageCircle size={20} />
              </div>
              <div className="flex-1">
                <p className="font-medium text-deep-blue">WhatsApp</p>
                <p className="text-sm text-deep-blue/60">Quick chat for inquiries</p>
              </div>
              <ExternalLink size={18} className="text-deep-blue/30" />
            </a>

            <a
              href="https://fiverr.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-cream-dark hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta">
                <Mail size={20} />
              </div>
              <div className="flex-1">
                <p className="font-medium text-deep-blue">Fiverr</p>
                <p className="text-sm text-deep-blue/60">Order directly via Fiverr</p>
              </div>
              <ExternalLink size={18} className="text-deep-blue/30" />
            </a>

            <a
              href="mailto:hello@artifyai.design"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-cream-dark hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 rounded-full bg-deep-blue/10 flex items-center justify-center text-deep-blue">
                <Mail size={20} />
              </div>
              <div className="flex-1">
                <p className="font-medium text-deep-blue">Email</p>
                <p className="text-sm text-deep-blue/60">hello@artifyai.design</p>
              </div>
              <ExternalLink size={18} className="text-deep-blue/30" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
