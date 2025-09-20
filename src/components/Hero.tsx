import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Bot, TrendingUp, Sparkles, Cpu, Database } from "lucide-react";
import heroBackground from "@/assets/hero-ai-background.jpg";

const Hero = () => {
  return (
    <section className="relative h-[880px] flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 animated-bg opacity-90" />
      
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Enhanced Floating Elements */}
      <div className="floating-elements">
        <div className="floating-shape w-32 h-32 bg-white/10 rounded-full top-1/4 left-1/4" />
        <div className="floating-shape w-24 h-24 bg-secondary/20 rounded-full top-1/3 right-1/4" />
        <div className="floating-shape w-20 h-20 bg-primary/20 rounded-full bottom-1/4 left-1/3" />
        <div className="floating-shape w-16 h-16 bg-accent/30 rounded-full top-1/2 right-1/6" />
        <div className="floating-shape w-28 h-28 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full bottom-1/3 right-1/3" />
        <div className="floating-shape w-12 h-12 bg-muted/40 rounded-full top-1/6 left-1/2" />
      </div>
      
      {/* Animated Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/5 left-1/6 animate-bounce-gentle">
          <Cpu className="w-8 h-8 text-white/30" />
        </div>
        <div className="absolute top-1/4 right-1/5 animate-float" style={{ animationDelay: '1.5s' }}>
          <Database className="w-6 h-6 text-blue-200/40" />
        </div>
        <div className="absolute bottom-1/3 left-1/5 animate-rotate-slow">
          <Sparkles className="w-10 h-10 text-purple-200/30" />
        </div>
      </div>
      
      {/* Content */}
      <div className="container-width relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 text-sm text-white mb-8 animate-fade-in-up hover:scale-105 transition-transform duration-300">
            <div className="relative">
              <Zap className="w-4 h-4 animate-pulse-glow" />
            </div>
            <span className="font-medium">Trusted by 500+ Companies Worldwide</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
          
          {/* Enhanced Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-8 text-shadow animate-fade-in-up leading-tight" style={{ animationDelay: '0.1s' }}>
            Transform Your Business with{" "}
            <span className="text-white  bg-clip-text text-transparent ">
              AI-Powered Intelligence
            </span>
          </h1>
          
          {/* Enhanced Subtitle */}
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in-up opacity-90" style={{ animationDelay: '0.2s' }}>
            Unlock unprecedented business growth with our cutting-edge machine learning, 
            natural language processing, and automation solutions designed for enterprise success.
          </p>
          
          {/* Enhanced Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold text-white group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-blue-200 font-medium">Companies Trust Us</div>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-2 rounded-full" />
            </div>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold text-white group-hover:scale-110 transition-transform duration-300">2.5M+</div>
              <div className="text-blue-200 font-medium">Processes Automated</div>
              <div className="w-12 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-2 rounded-full" />
            </div>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold text-white group-hover:scale-110 transition-transform duration-300">45%</div>
              <div className="text-blue-200 font-medium">Average ROI Increase</div>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-2 rounded-full" />
            </div>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up -mt-8 " style={{ animationDelay: '0.4s' }}>
            <Button className="btn-hero group relative overflow-hidden">
              <span className="relative z-10">Request Free Demo</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            
            <Button variant="outline" className="glass-effect text-black border-white/30 hover:bg-white/20 px-8 py-4 text-lg rounded-xl group relative overflow-hidden">
              <Play className="w-5 h-5 mr-2 group-hover:scale-125 transition-transform duration-300 " />
              <span className="text-black-900">Watch Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
          
          {/* Enhanced Features Preview */}
          <div className="flex flex-wrap justify-center gap-6 mt-20 animate-fade-in-up " style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-3 glass-effect px-6 py-3 rounded-full group hover:scale-105 transition-all duration-300">
              <Bot className="w-5 h-5 text-blue-700 group-hover:animate-bounce" />
              <span className="text-black font-medium">Machine Learning</span>
            </div>
            <div className="flex items-center gap-3 glass-effect px-6 py-3 rounded-full group hover:scale-105 transition-all duration-300">
              <TrendingUp className="w-5 h-5 text-purple-700 group-hover:animate-bounce" />
              <span className="text-black font-medium">Predictive Analytics</span>
            </div>
            <div className="flex items-center gap-3 glass-effect px-6 py-3 rounded-full group hover:scale-105 transition-all duration-300">
              <Zap className="w-5 h-5 text-green-700 group-hover:animate-bounce" />
              <span className="text-black font-medium">Workflow Automation</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40  bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
};

export default Hero;