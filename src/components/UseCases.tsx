import { useState } from "react";
import { ChevronLeft, ChevronRight, Building2, Heart, ShoppingCart, Factory, ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const useCases = [
  {
    icon: Building2,
    industry: "Financial Services",
    title: "Automated Risk Assessment & Fraud Detection",
    description: "Transform your financial operations with AI-powered risk analysis, real-time fraud detection, and automated compliance monitoring. Reduce manual review time by 80% while improving accuracy.",
    benefits: ["Real-time fraud detection", "Automated compliance", "Risk scoring algorithms", "Document processing"],
    metrics: { improvement: "80%", metric: "Faster Processing", secondary: "95% Accuracy Rate" },
    color: "from-blue-600 to-indigo-600",
    bgColor: "from-blue-50 to-indigo-50"
  },
  {
    icon: Heart,
    industry: "Healthcare",
    title: "Intelligent Patient Data Processing",
    description: "Streamline healthcare workflows with AI-driven patient record analysis, predictive health analytics, and automated documentation. Improve patient outcomes while reducing administrative burden.",
    benefits: ["Patient record analysis", "Predictive diagnostics", "Automated documentation", "Treatment optimization"],
    metrics: { improvement: "60%", metric: "Admin Time Saved", secondary: "99.2% Data Accuracy" },
    color: "from-green-600 to-teal-600",
    bgColor: "from-green-50 to-teal-50"
  },
  {
    icon: ShoppingCart,
    industry: "E-commerce",
    title: "Personalized Customer Experience",
    description: "Boost sales with AI-powered product recommendations, dynamic pricing optimization, and intelligent customer service automation. Increase conversion rates and customer satisfaction.",
    benefits: ["Product recommendations", "Dynamic pricing", "Customer insights", "Inventory optimization"],
    metrics: { improvement: "35%", metric: "Revenue Increase", secondary: "4.8x Better Engagement" },
    color: "from-purple-600 to-pink-600",
    bgColor: "from-purple-50 to-pink-50"
  },
  {
    icon: Factory,
    industry: "Manufacturing",
    title: "Smart Production Optimization",
    description: "Optimize manufacturing processes with predictive maintenance, quality control automation, and supply chain intelligence. Reduce downtime and improve operational efficiency.",
    benefits: ["Predictive maintenance", "Quality control", "Supply chain optimization", "Process automation"],
    metrics: { improvement: "45%", metric: "Efficiency Gain", secondary: "70% Less Downtime" },
    color: "from-orange-600 to-red-600",
    bgColor: "from-orange-50 to-red-50"
  }
];

const UseCases = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % useCases.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + useCases.length) % useCases.length);
  };

  const activeCase = useCases[activeIndex];
  const Icon = activeCase.icon;

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-secondary to-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>
      
      <div className="container-width relative">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-secondary/10 text-secondary px-6 py-3 rounded-full text-sm font-medium mb-6 animate-fade-in-up hover:scale-105 transition-transform duration-300">
            <Factory className="w-4 h-4 animate-bounce" />
            <span>Industry Applications</span>
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-8 animate-fade-in-up leading-tight" style={{ animationDelay: '0.1s' }}>
            Proven success across{" "}
            <span className="gradient-text relative">
              every industry
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full animate-scale-in" style={{ animationDelay: '0.5s' }} />
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            See how leading companies across different sectors are transforming their operations 
            with ServiceHive's AI solutions and achieving measurable results.
          </p>
        </div>

        {/* Enhanced Use Case Carousel */}
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Navigation Dots */}
          <div className="flex justify-center gap-3 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {useCases.map((useCase, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`group relative transition-all duration-300 ${
                  index === activeIndex 
                    ? 'scale-145' 
                    : 'hover:scale-110'
                }`}
              >
                <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? `bg-gradient-to-r ${useCase.color}` 
                    : 'bg-muted-foreground/30 group-hover:bg-muted-foreground/50'
                }`} />
                {index === activeIndex && (
                  <div className={`absolute -inset-2 rounded-full bg-gradient-to-r ${useCase.color} opacity-20 animate-pulse`} />
                )}
              </button>
            ))}
          </div>

          {/* Enhanced Active Use Case */}
          <div className="bg-card rounded-3xl shadow-large overflow-hidden group hover:shadow-glow transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Enhanced Content Side */}
              <div className="p-8 lg:p-12 relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${activeCase.color} rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <span className={`inline-block text-sm font-medium bg-gradient-to-r ${activeCase.color} bg-clip-text text-transparent px-4 py-2 rounded-full border border-current/20`}>
                      {activeCase.industry}
                    </span>
                  </div>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
                  {activeCase.title}
                </h3>

                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {activeCase.description}
                </p>

                {/* Enhanced Benefits List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {activeCase.benefits.map((benefit, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 animate-fade-in-left"
                      style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                    >
                      <div className={`w-2.5 h-2.5 bg-gradient-to-r ${activeCase.color} rounded-full animate-pulse`} />
                      <span className="text-sm font-medium text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Enhanced CTA */}
                <Button className="btn-secondary-cta group relative overflow-hidden">
                  <span className="relative z-10">View Case Study</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </div>

              {/* Enhanced Metrics Side */}
              <div className={`bg-gradient-to-br ${activeCase.bgColor} dark:from-card dark:to-card-hover p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden`}>
                {/* Background decoration */}
                <div className="absolute top-4 right-4 opacity-10">
                  <TrendingUp className="w-32 h-32" />
                </div>
                
                <div className="text-center relative z-10">
                  <div className="mb-8">
                    <div className={`text-7xl lg:text-8xl font-bold bg-gradient-to-r ${activeCase.color} bg-clip-text text-transparent mb-3 animate-scale-in`}>
                      {activeCase.metrics.improvement}
                    </div>
                    <div className="text-2xl font-semibold text-foreground mb-2">
                      {activeCase.metrics.metric}
                    </div>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-muted-foreground mb-2">
                      {activeCase.metrics.secondary}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      Additional Performance Boost
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Navigation Arrows */}
          <div className="flex justify-center gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={prevSlide}
              className="flex items-center justify-center w-14 h-14 bg-card border-2 border-border rounded-full hover:bg-card-hover hover:border-primary hover:scale-110 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:text-primary transition-colors duration-300" />
            </button>
            <button
              onClick={nextSlide}
              className="flex items-center justify-center w-14 h-14 bg-card border-2 border-border rounded-full hover:bg-card-hover hover:border-primary hover:scale-110 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 group-hover:text-primary transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;