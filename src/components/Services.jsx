import { motion } from "framer-motion";
import { Image, Share2, ShoppingBag } from "lucide-react";

const services = [
  {
    icon: Image,
    title: "AI Poster Design",
    description: "Stunning editorial posters for events, campaigns, and brand launches."
  },
  {
    icon: Share2,
    title: "Social Media Creatives",
    description: "Scroll-stopping visuals tailored for Instagram, Pinterest, and more."
  },
  {
    icon: ShoppingBag,
    title: "Product Ads",
    description: "Clean, product-focused designs that elevate your e-commerce presence."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-deep-blue">Our Services</h2>
          <p className="mt-2 text-deep-blue/60">
            Design solutions crafted with care and creativity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-white border border-cream-dark hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-terracotta/10 flex items-center justify-center text-terracotta group-hover:bg-terracotta group-hover:text-white transition-colors duration-300">
                <service.icon size={24} />
              </div>
              <h3 className="mt-5 font-serif text-xl text-deep-blue">{service.title}</h3>
              <p className="mt-2 text-deep-blue/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
