import { Star, Shield, Award, Users } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Solutions",
    content: "ServiceHive transformed our data processing pipeline. We've seen a 300% improvement in efficiency and our team can now focus on strategic initiatives rather than manual tasks.",
    rating: 5,
    image: "SC"
  },
  {
    name: "Marcus Rodriguez",
    role: "VP of Operations", 
    company: "GlobalManufacturing Corp",
    content: "The predictive maintenance capabilities have saved us millions. We went from reactive to proactive, reducing equipment downtime by 70% in just six months.",
    rating: 5,
    image: "MR"
  },
  {
    name: "Emily Thompson",
    role: "Chief Data Officer",
    company: "FinanceFirst Bank",
    content: "Implementation was seamless and the ROI was immediate. Their fraud detection system caught threats our previous solution missed completely.",
    rating: 5,
    image: "ET"
  }
];

const stats = [
  { number: "500+", label: "Enterprise Clients" },
  { number: "2.5M+", label: "Automated Processes" },
  { number: "45%", label: "Average ROI Increase" },
  { number: "99.9%", label: "System Uptime" }
];

const certifications = [
  { name: "SOC 2 Type II", icon: Shield },
  { name: "ISO 27001", icon: Award },
  { name: "GDPR Compliant", icon: Shield },
  { name: "Enterprise Ready", icon: Users }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            <span>Trusted by Leaders</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Join the companies already{" "}
            <span className="gradient-text">winning with AI</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from the executives and technical leaders 
            who have transformed their businesses with ServiceHive.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="feature-card">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-muted/30 rounded-2xl p-8 relative overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-0 left-0 w-32 h-32 bg-primary rounded-full -translate-x-16 -translate-y-16" />
    <div className="absolute bottom-0 right-0 w-24 h-24 bg-secondary rounded-full translate-x-12 translate-y-12" />
    <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
    <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-secondary/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
  </div>

  <div className="relative z-10">
    {/* Enhanced Header */}
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-6 shadow-lg">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      
      <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Enterprise-Grade Security & Compliance
      </h3>
      
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Trusted by industry leaders with bank-level security and comprehensive compliance certifications
      </p>
    </div>
    
    {/* Enhanced Certification Grid */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {certifications.map((cert, index) => {
        const Icon = cert.icon;
        return (
          <div 
            key={cert.name} 
            className="group text-center transform transition-all duration-500 hover:scale-110 hover:-translate-y-2"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Enhanced Certificate Badge */}
            <div className="relative mb-6">
              {/* Outer Ring Animation */}
              <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              {/* Main Badge */}
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-card border-2 border-border group-hover:border-primary/30 rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-500 overflow-hidden">
                {/* Icon Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Animated Icon */}
                <Icon className="w-10 h-10 text-primary group-hover:text-primary group-hover:scale-110 group-hover:drop-shadow-lg transition-all duration-300 relative z-10" />
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Corner Accent */}
                <div className="absolute top-1 right-1 w-2 h-2 bg-gradient-to-br from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300" />
              </div>
            </div>
            
            {/* Enhanced Certificate Name */}
            <div className="space-y-2">
              <div className="font-bold text-foreground group-hover:text-primary transition-colors duration-300 text-lg">
                {cert.name}
              </div>
              
              {/* Status Indicator */}
              <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-muted-foreground font-medium">Certified</span>
              </div>
            </div>
            
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
          </div>
        );
      })}
    </div>
    
    {/* Enhanced CTA Section */}
    <div className="text-center relative">
      {/* Decorative Elements */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-24 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10 backdrop-blur-sm">
        {/* Trust Indicators */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span>99.9% Uptime</span>
          </div>
          <div className="w-px h-4 bg-border" />
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>SOC 2 Compliant</span>
          </div>
          <div className="w-px h-4 bg-border" />
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span>Bank-Grade Security</span>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-6 text-lg">
          Ready to join <span className="font-semibold text-primary">500+</span> industry leaders?
        </p>
        
        {/* Enhanced CTA Button */}
        <button className="btn-hero group/cta relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300">
          <span className="relative z-10 flex items-center gap-3">
            Start Your Transformation
            <svg className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          
          {/* Button Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-700" />
        </button>
        
        {/* Additional Trust Elements */}
        <div className="mt-6 flex items-center justify-center gap-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>14-Day Free Trial</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
            <span>No Setup Fees</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Testimonials;