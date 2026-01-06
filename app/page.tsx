"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowRight, 
  MapPin, 
  Globe, 
  Shield, 
  Gem, 
  ShoppingBag, 
  Package, 
  Plane,
  CheckCircle2,
  Menu
} from "lucide-react";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  const [isLocationsHovered, setIsLocationsHovered] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden w-full relative font-sans selection:bg-primary/20">
      {/* Decorative Background - Muted and Modern */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#6366f110_100%)]"></div>

      {/* Modern Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
              <Package className="h-5 w-5" />
            </div>
            <span className="font-bold text-xl tracking-tight">capitaltome.</span>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</Link>
            <Link href="#locations" className="text-muted-foreground hover:text-foreground transition-colors">Locations</Link>
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">Why Us</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="mailto:support@capitaltome.com" className="hidden md:block">
              <Button>Contact Support</Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="px-6 py-20 md:py-32 lg:py-40 container mx-auto text-center md:text-left">
          <div className="max-w-5xl mx-auto md:mx-0">
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm rounded-full border-indigo-100 bg-indigo-50 text-indigo-700 hover:bg-indigo-100">
              <span className="mr-2 flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
              Now serving UK, Ghana, & India
            </Badge>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl mb-6 text-slate-900 leading-[1.1]">
              Shop Global. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                Delivered Local.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed md:mx-0 mx-auto">
              Your premium gateway to global shopping. We consolidate and forward parcels from <strong className="text-foreground">United Kingdom</strong>, <strong className="text-foreground">Ghana</strong>, and <strong className="text-foreground">India</strong> to you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-indigo-500/20" asChild>
                <Link href="mailto:support@capitaltome.com">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base border-slate-200 bg-white/50 hover:bg-white" asChild>
                <Link href="#services">
                  How it Works
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section ("What We Do") */}
        <section id="services" className="px-6 py-24 bg-slate-50/50 border-y border-slate-100">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center md:text-left mb-16 md:flex md:items-end md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-2">Our Services</h2>
                <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">Seamless global logistics.</h3>
              </div>
              <p className="hidden md:block text-muted-foreground max-w-md text-right">
                We handle the complexities of international shipping so you can enjoy the products you love.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Personal Shopping",
                  desc: "We shop on your behalf from high-end stores in global capitals, ensuring you get exactly what you want.",
                  icon: ShoppingBag,
                },
                {
                  title: "Parcel Forwarding",
                  desc: "Shop online using our dedicated address. We receive, inspect, and securely forward your packages.",
                  icon: Package,
                },
                {
                  title: "Reliable Handling",
                  desc: "End-to-end tracking and premium handling ensure your items arrive in perfect condition.",
                  icon: Plane,
                },
              ].map((item, i) => (
                <Card key={i} className="group border-slate-200 bg-white/80 backdrop-blur-sm transition-all hover:shadow-xl hover:border-indigo-100 hover:-translate-y-1 duration-300">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {item.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Locations - Expanding Section */}
        <section id="locations" className="px-6 py-24 overflow-hidden w-full">
          <div 
            className={cn(
              "mx-auto w-full transition-[max-width,transform] duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] will-change-[max-width]",
              isLocationsHovered ? "md:max-w-[95%]" : "md:max-w-5xl"
            )}
            onMouseEnter={() => setIsLocationsHovered(true)}
            onMouseLeave={() => setIsLocationsHovered(false)}
          >
            <div className="relative mb-12 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold tracking-tight">Our Locations</h2>
                <Badge variant="outline" className="hidden md:flex border-indigo-200 text-indigo-700 bg-indigo-50">
                  <Globe className="mr-1 h-3 w-3" /> Global Network
                </Badge>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  city: "London",
                  country: "United Kingdom",
                  address: "",
                  loc: "",
                  color: "bg-slate-900 text-white"
                },
                {
                  city: "Accra",
                  country: "Ghana",
                  address: "",
                  loc: "",
                  color: "bg-white text-slate-900 border-slate-200"
                },
                {
                  city: "Bangalore",
                  country: "India",
                  address: "",
                  loc: "",
                  color: "bg-white text-slate-900 border-slate-200"
                },
              ].map((loc, i) => (
                <div key={i} className="group h-full">
                  <div className={cn(
                    "relative overflow-hidden rounded-2xl p-8 h-full flex flex-col justify-between transition-all duration-300 border shadow-sm hover:shadow-md",
                    loc.color
                  )}>
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <MapPin className="h-8 w-8 opacity-80" />
                        <span className="text-xs font-bold tracking-widest opacity-50 uppercase">{loc.loc}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-1">{loc.city}</h3>
                      <p className="font-medium opacity-70">{loc.country}</p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-current border-opacity-10">
                      <p className="opacity-80 text-sm">{loc.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Capitaltome */}
        <section id="about" className="px-6 py-24 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Why choose Capitaltome?</h2>
              <p className="text-muted-foreground text-lg">
                We combine the speed of modern logistics with the care of a personal shopper.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Global Access",
                  desc: "Direct access to UK, Ghana, and Indian markets without travel.",
                  icon: Globe
                },
                {
                  title: "Trustworthy",
                  desc: "Verified handling and secure forwarding you can trust.",
                  icon: Shield
                },
                {
                  title: "Premium Service",
                  desc: "Personalized attention for every client and package.",
                  icon: Gem
                }
              ].map((feature, i) => (
                 <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-white hover:shadow-sm transition-all duration-200">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 shadow-sm">
                      <feature.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-lg font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="rounded-3xl bg-slate-900 p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6 sm:text-4xl tracking-tight">Ready to shop globally?</h2>
                <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto">
                  Join hundreds of satisfied customers who trust us with their international deliveries.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-semibold" asChild>
                    <Link href="mailto:support@capitaltome.com">
                      Contact Support
                    </Link>
                  </Button>
                </div>
                <p className="mt-8 text-sm text-slate-500 flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> Response within 24 hours
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background">
        <div className="container mx-auto px-6 py-12">
          <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-5">
            <div className="md:col-span-2 lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="bg-primary text-primary-foreground p-1 rounded">
                  <Package className="h-4 w-4" />
                </div>
                <span className="font-bold text-lg tracking-tight">capitaltome.</span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                Connect your world. Personal shopping and logistics from the global capitals to your doorstep.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">Personal Shopping</Link></li>
                <li><Link href="#" className="hover:text-foreground">Parcel Forwarding</Link></li>
                <li><Link href="#" className="hover:text-foreground">Corporate Logistics</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">About Us</Link></li>
                <li><Link href="#" className="hover:text-foreground">Contact</Link></li>
                <li><Link href="#" className="hover:text-foreground">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Social</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">Instagram</Link></li>
                <li><Link href="#" className="hover:text-foreground">Twitter</Link></li>
                <li><Link href="#" className="hover:text-foreground">LinkedIn</Link></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center md:text-left text-sm text-muted-foreground">
            © {new Date().getFullYear()} Capitaltome. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
