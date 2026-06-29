import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'
import { Logo } from '../Logo'

const services = [
  { label: 'Commercial Carpark Sweeping', href: '#services' },
  { label: 'Industrial Sweeping', href: '#services' },
  { label: 'Warehouse Sweeping', href: '#services' },
  { label: 'Construction Site Sweeping', href: '#services' },
  { label: 'Body Corporate Sweeping', href: '#services' },
  { label: 'Scheduled Maintenance Programs', href: '#services' },
  { label: 'Washd by Swept', href: '#washd' },
  { label: 'Pressure Cleaning', href: '#washd' },
  { label: 'Grounds by Swept', href: '#grounds' },
  { label: 'Grounds Maintenance', href: '#grounds' },
]

const industries = [
  'Shopping Centres',
  'Industrial Facilities',
  'Construction Sites',
  'Body Corporates',
  'Resorts & Hotels',
  'Distribution Centres',
]

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Equipment', href: '#equipment' },
  { label: 'About Us', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Get a Quote', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="bg-asphalt text-white/70" aria-label="Site footer">
      <div className="section-container py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Logo inverted size="sm" />
            <p className="mt-6 text-sm leading-relaxed text-white/50 max-w-xs">
              Professional commercial sweeping services across South East Queensland.
              Reliable, punctual, and built to the highest industry standards.
            </p>
            <div className="flex gap-4 mt-8">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="w-9 h-9 border border-white/15 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="w-9 h-9 border border-white/15 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="w-9 h-9 border border-white/15 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-sm hover:text-white transition-colors duration-150"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Industries
            </h3>
            <ul className="space-y-3">
              {industries.map((i) => (
                <li key={i}>
                  <span className="text-sm">{i}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+61412345678"
                  className="flex items-start gap-3 text-sm hover:text-white transition-colors duration-150"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-orange-500 shrink-0" aria-hidden="true" />
                  0412 345 678
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@swept.au"
                  className="flex items-start gap-3 text-sm hover:text-white transition-colors duration-150"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-orange-500 shrink-0" aria-hidden="true" />
                  info@swept.au
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-orange-500 shrink-0" aria-hidden="true" />
                <span>
                  Gold Coast, Queensland<br />
                  Australia
                </span>
              </li>
            </ul>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-xs text-white/40 mb-1">Business Hours</p>
              <p className="text-sm text-white/60">Mon – Fri: 6:00am – 6:00pm</p>
              <p className="text-sm text-white/60">Sat: 7:00am – 2:00pm</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} SWEPT. All rights reserved. ABN 00 000 000 000
          </p>
          <div className="flex gap-6">
            {quickLinks.slice(0, 4).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-white/30 hover:text-white/60 transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
