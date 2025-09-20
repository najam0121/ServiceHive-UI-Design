import { Check, ArrowRight, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingTiers = [
  {
    name: "Starter",
    price: "Contact",
    period: "for pricing",
    description: "Perfect for teams getting started with AI automation",
    features: [
      "Up to 10,000 API calls/month",
      "Basic ML models",
      "Email support",
      "Standard integrations",
      "Basic analytics dashboard",
      "Up to 5 team members"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    price: "Contact",
    period: "for pricing",
    description: "Advanced AI capabilities for growing businesses",
    features: [
      "Up to 100,000 API calls/month",
      "Advanced ML & NLP models",
      "Priority support",
      "Custom integrations",
      "Advanced analytics & reporting",
      "Up to 25 team members",
      "Custom model training",
      "White-label options"
    ],
    cta: "Contact Sales",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Tailored AI solutions for enterprise organizations",
    features: [
      "Unlimited API calls",
      "Custom AI model development",
      "24/7 dedicated support",
      "Custom integrations & APIs",
      "Enterprise analytics suite",
      "Unlimited team members",
      "On-premise deployment",
      "Dedicated success manager",
      "SLA guarantees",
      "Advanced security features"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            <span>Simple, Transparent Pricing</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose the plan that{" "}
            <span className="gradient-text">scales with you</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Start with our flexible pricing options and scale seamlessly as your AI needs grow. 
            All plans include our core AI capabilities with varying levels of customization and support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div 
              key={tier.name}
              className={`pricing-card ${tier.popular ? 'featured' : ''} relative`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-muted-foreground ml-2">{tier.period}</span>
                </div>
                <p className="text-muted-foreground">{tier.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary/20 text-primary rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                className={`w-full ${tier.popular ? 'btn-hero' : 'btn-secondary-cta'} group`}
              >
                <span>{tier.cta}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
  <div className="bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto">
    <h3 className="text-2xl font-bold text-foreground mb-4">
      Need a custom solution?
    </h3>
    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
      Our enterprise team specializes in creating tailored AI solutions that integrate 
      perfectly with your existing infrastructure and business processes.
    </p>
    
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {/* Primary CTA Button */}
      <Button className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 active:scale-95 group">
        <span className="relative z-10 group-hover:text-white">Schedule Consultation</span>
        
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-secondary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
      </Button>
      
      {/* Secondary CTA Button */}
      <Button className="relative overflow-hidden border-2 border-primary bg-transparent hover:bg-primary text-primary hover:text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 active:scale-95 group">
        <span className="relative z-10 flex items-center gap-2">
          View Case Studies
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </span>
        
        {/* Animated border accent */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary w-0 group-hover:w-full transition-all duration-500 rounded-b-xl" />
        
        {/* Background fill effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
      </Button>
    </div>
  </div>
</div>


        {/* Trust Indicators */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            Trusted by companies of all sizes • 30-day money-back guarantee • No setup fees
          </p>
          <div className="flex justify-center items-center gap-8 text-xs text-muted-foreground">
            <span>SOC 2 Compliant</span>
            <span>•</span>
            <span>GDPR Ready</span>
            <span>•</span>
            <span>99.9% Uptime SLA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;