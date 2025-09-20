import { Brain, MessageSquare, Zap, TrendingUp, BarChart3, Settings, ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Brain,
    title: "Machine Learning Analytics",
    description: "Advanced algorithms that learn from your data to provide intelligent insights and predictions for better decision-making.",
    benefits: ["Predictive modeling", "Pattern recognition", "Automated insights"],
    gradient: "from-blue-500 to-purple-500",
    delay: 0
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Extract meaning from text, automate document processing, and enable conversational AI interfaces for your business.",
    benefits: ["Text analysis", "Sentiment detection", "Document automation"],
    gradient: "from-purple-500 to-pink-500",
    delay: 0.1
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Streamline complex business processes with intelligent automation that adapts to your organization's unique needs.",
    benefits: ["Process optimization", "Task automation", "Error reduction"],
    gradient: "from-green-500 to-blue-500",
    delay: 0.2
  },
  {
    icon: TrendingUp,
    title: "Real-time Insights",
    description: "Get instant visibility into your business metrics with AI-powered dashboards and intelligent reporting systems.",
    benefits: ["Live monitoring", "Instant alerts", "Performance tracking"],
    gradient: "from-orange-500 to-red-500",
    delay: 0.3
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Forecast trends, identify opportunities, and mitigate risks with sophisticated predictive modeling capabilities.",
    benefits: ["Trend forecasting", "Behavior prediction", "Risk assessment"],
    gradient: "from-indigo-500 to-purple-500",
    delay: 0.4
  },
  {
    icon: Settings,
    title: "Custom AI Solutions",
    description: "Tailored artificial intelligence solutions designed specifically for your industry and business requirements.",
    benefits: ["Custom models", "Industry-specific", "Scalable solutions"],
    gradient: "from-teal-500 to-green-500",
    delay: 0.5
  }
];

const Features = () => {
  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-2xl animate-rotate-slow" />
      </div>
      
      <div className="container-width relative">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-6 animate-fade-in-up hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-4 h-4 animate-bounce" />
            <span>Powerful AI Capabilities</span>
            <div className="flex gap-1">
              <Star className="w-3 h-3 fill-current animate-pulse" />
              <Star className="w-3 h-3 fill-current animate-pulse" style={{ animationDelay: '0.5s' }} />
              <Star className="w-3 h-3 fill-current animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-8 animate-fade-in-up leading-tight" style={{ animationDelay: '0.1s' }}>
            Everything you need to{" "}
            <span className="gradient-text relative">
              transform your business
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full animate-scale-in" style={{ animationDelay: '0.5s' }} />
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Our comprehensive AI platform provides enterprise-grade solutions that integrate seamlessly 
            with your existing infrastructure and scale with your business growth.
          </p>
        </div>
        
        {/* Enhanced Features Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
  {features.map((feature, index) => {
    const Icon = feature.icon;
    return (
      <div 
        key={feature.title}
        className="feature-card group relative animate-fade-in-up bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 cursor-pointer overflow-hidden transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:bg-white/80 dark:hover:bg-gray-800/80"
        style={{ animationDelay: `${feature.delay}s` }}
      >
        {/* Enhanced Icon with Glow Effect */}
        <div className="icon-wrapper mb-6 relative z-10">
          <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl text-white shadow-lg group-hover:shadow-glow group-hover:shadow-primary/50 transition-all duration-500 relative overflow-hidden`}>
            <Icon className="w-8 h-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10" />
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Animated Ring */}
            <div className="absolute inset-0 rounded-2xl border-2 border-white/30 scale-100 group-hover:scale-150 opacity-100 group-hover:opacity-0 transition-all duration-500" />
          </div>
        </div>
        
        {/* Enhanced Content */}
        <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary group-hover:scale-105 transition-all duration-300 origin-left">
          {feature.title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors duration-300">
          {feature.description}
        </p>
        
        {/* Benefits List */}
        <div className="space-y-2 mb-6">
          {feature.benefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-3 text-sm animate-fade-in-left group-hover:translate-x-2 transition-transform duration-300"
              style={{ 
                animationDelay: `${feature.delay + 0.1 + (idx * 0.1)}s`,
                transitionDelay: `${idx * 50}ms`
              }}
            >
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full  group-hover:scale-150 group-hover:shadow-sm group-hover:shadow-primary transition-all duration-300" />
              <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{benefit}</span>
            </div>
          ))}
        </div>
        
        {/* Enhanced CTA */}
        <Button 
          variant="ghost" 
          className="p-0 h-auto text-primary hover:text-primary-light group/btn w-full justify-start group-hover:bg-primary/10 group-hover:px-4 group-hover:py-2 rounded-lg transition-all duration-300"
        >
          <span className="text-sm font-medium group-hover:font-semibold transition-all duration-300">Learn More</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 group-hover:scale-110 transition-all duration-300" />
        </Button>
        
        {/* Animated border on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm" />
        
        {/* Floating particles effect */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500" style={{ animationDelay: '0.2s' }} />
        <div className="absolute top-8 right-8 w-1 h-1 bg-secondary/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500" style={{ animationDelay: '0.4s' }} />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {/* Slide-in accent line */}
        <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary w-0 group-hover:w-full transition-all duration-500 rounded-t-2xl" />
      </div>
    );
  })}
</div>

        
        {/* Enhanced Bottom CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-3xl p-12 relative overflow-hidden group hover:shadow-glow transition-all duration-500">
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 text-primary mb-4">
                <Sparkles className="w-5 h-5 animate-bounce" />
                <span className="text-sm font-medium">Ready to get started?</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Ready to see these features in action?
              </h3>
              
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                Schedule a personalized demo to discover how ServiceHive can transform your business operations 
                and unlock new levels of efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-hero group">
                  <span>Schedule Free Demo</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
                
                <Button variant="outline" className="px-6 py-3 text-primary border-primary hover:bg-primary hover:text-white">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;