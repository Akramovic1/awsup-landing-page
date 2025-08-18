import React, { useState } from 'react';
import { 
  Cloud, 
  Zap, 
  Shield, 
  Code, 
  Terminal, 
  ChevronRight, 
  Github, 
  ExternalLink,
  Copy,
  Check,
  Rocket,
  Globe,
  Lock,
  ArrowRight,
  Server,
  Eye,
  RefreshCw,
  Trash2,
  Settings,
  DollarSign,
  AlertTriangle,
  Monitor
} from 'lucide-react';

function App() {
  const [copiedCommand, setCopiedCommand] = useState('');

  const copyToClipboard = async (text: string, command: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCommand(command);
      setTimeout(() => setCopiedCommand(''), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Zero Configuration",
      description: "Works out of the box with no complex setup. Just install and deploy - AWSUP handles all AWS infrastructure automatically."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure by Default",
      description: "SSL certificates, Origin Access Control (OAC), encryption, and private S3 buckets configured automatically for maximum security."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global CloudFront CDN",
      description: "Lightning-fast global content delivery with automatic cache optimization and edge locations worldwide."
    },
    {
      icon: <RefreshCw className="h-8 w-8" />,
      title: "Smart State Management",
      description: "Resumes interrupted deployments and maintains state across operations. Never lose progress on large deployments."
    },
    {
      icon: <Terminal className="h-8 w-8" />,
      title: "Beautiful CLI Interface",
      description: "Rich terminal UI with progress bars, colored output, and comprehensive validation with helpful error messages."
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Production Ready",
      description: "Comprehensive validation, error handling, monitoring setup, and cost tracking for enterprise-grade deployments."
    }
  ];

  const quickStartSteps = [
    {
      step: 1,
      title: "Install AWSUP globally",
      command: "pip install awsup",
      description: "Install the AWSUP CLI tool using Python pip"
    },
    {
      step: 2,
      title: "Navigate to your website",
      command: "cd /path/to/your/website",
      description: "Go to your website directory"
    },
    {
      step: 3,
      title: "Deploy instantly",
      command: "awsup deploy yourdomain.com --website-path .",
      description: "Deploy your website with automatic AWS infrastructure setup"
    }
  ];

  const workflows = [
    {
      title: "React/Next.js",
      commands: [
        "npm run build",
        "awsup deploy myapp.com --website-path ./build"
      ]
    },
    {
      title: "Vue/Nuxt",
      commands: [
        "npm run generate",
        "awsup deploy myapp.com --website-path ./dist"
      ]
    },
    {
      title: "Static HTML",
      commands: [
        "awsup deploy myapp.com --website-path ./public"
      ]
    },
    {
      title: "Jekyll/Hugo",
      commands: [
        "awsup deploy myapp.com --website-path ./_site"
      ]
    }
  ];

  const allCommands = [
    {
      command: "awsup deploy yourdomain.com --website-path ./build",
      description: "Deploy website with specified path"
    },
    {
      command: "awsup status yourdomain.com",
      description: "Check deployment status"
    },
    {
      command: "awsup invalidate yourdomain.com",
      description: "Clear CDN cache"
    },
    {
      command: "awsup cleanup yourdomain.com",
      description: "Remove all AWS resources"
    },
    {
      command: "awsup phase1 yourdomain.com",
      description: "DNS setup phase"
    },
    {
      command: "awsup phase2 yourdomain.com",
      description: "Full deployment phase"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-2 rounded-lg">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">AWSUP</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#quickstart" className="text-gray-600 hover:text-gray-900 transition-colors">Quick Start</a>
              <a href="#workflows" className="text-gray-600 hover:text-gray-900 transition-colors">Workflows</a>
              <a href="#commands" className="text-gray-600 hover:text-gray-900 transition-colors">Commands</a>
            </nav>
            <a 
              href="https://github.com/Akramovic1/aws-website-quick-deployer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                <Rocket className="h-4 w-4 mr-2" />
                Lightning-Fast AWS Website Deployment
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="block">AWSUP</span>
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                Zero Config AWS
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Production-grade CLI tool for deploying static websites to AWS using S3, CloudFront, Route53, and ACM. 
              Zero configuration, maximum automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2">
                <Terminal className="h-5 w-5" />
                <span>Get Started Now</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <a 
                href="https://github.com/Akramovic1/aws-website-quick-deployer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all flex items-center space-x-2"
              >
                <ExternalLink className="h-5 w-5" />
                <span>View Documentation</span>
              </a>
            </div>
            
            {/* Quick Install */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-900 rounded-lg p-6 font-mono text-left relative group">
                <div className="text-gray-400 text-sm mb-2"># Install globally</div>
                <div className="text-green-400 text-lg mb-4">$ pip install awsup</div>
                <div className="text-gray-400 text-sm mb-2"># Deploy instantly</div>
                <div className="text-green-400 text-lg">$ awsup deploy yourdomain.com --website-path .</div>
                <button
                  onClick={() => copyToClipboard('pip install awsup\nawsup deploy yourdomain.com --website-path .', 'hero')}
                  className="absolute right-4 top-4 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                >
                  {copiedCommand === 'hero' ? (
                    <Check className="h-5 w-5 text-green-400" />
                  ) : (
                    <Copy className="h-5 w-5" />
                  )}
                </button>
              </div>
              <p className="text-gray-600 mt-4 text-lg">
                That's it! AWSUP handles all AWS infrastructure automatically.
              </p>
            </div>
          </div>
        </div>
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ✨ Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for developers who want simple AWS deployments without sacrificing power or security.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
                <div className="text-blue-600 mb-4 group-hover:text-orange-500 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section id="quickstart" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ⚡ Quick Start
            </h2>
            <p className="text-xl text-gray-600">
              Get your website live on AWS in under 5 minutes
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {quickStartSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {step.description}
                    </p>
                    <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm relative group">
                      <code className="text-green-400">$ {step.command}</code>
                      <button
                        onClick={() => copyToClipboard(step.command, step.command)}
                        className="absolute right-3 top-3 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                        title="Copy command"
                      >
                        {copiedCommand === step.command ? (
                          <Check className="h-4 w-4 text-green-400" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Workflows Section */}
      <section id="workflows" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🎯 Common Workflows
            </h2>
            <p className="text-xl text-gray-600">
              Works seamlessly with all popular frameworks and static site generators
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {workflows.map((workflow, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Code className="h-6 w-6 mr-3 text-blue-600" />
                  {workflow.title}
                </h3>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm relative group">
                  {workflow.commands.map((command, cmdIndex) => (
                    <div key={cmdIndex} className="text-green-400 mb-2 last:mb-0">
                      $ {command}
                    </div>
                  ))}
                  <button
                    onClick={() => copyToClipboard(workflow.commands.join('\n'), `workflow-${index}`)}
                    className="absolute right-3 top-3 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                  >
                    {copiedCommand === `workflow-${index}` ? (
                      <Check className="h-4 w-4 text-green-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Commands Section */}
      <section id="commands" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              📋 All Commands
            </h2>
            <p className="text-xl text-gray-600">
              Complete command reference for all AWSUP operations
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {allCommands.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm mb-4 relative group">
                  <code className="text-green-400">$ {item.command}</code>
                  <button
                    onClick={() => copyToClipboard(item.command, `cmd-${index}`)}
                    className="absolute right-3 top-3 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                  >
                    {copiedCommand === `cmd-${index}` ? (
                      <Check className="h-4 w-4 text-green-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              🔄 How It Works
            </h2>
            <p className="text-xl text-gray-300">
              AWSUP automates the entire AWS infrastructure setup process
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Globe className="h-8 w-8" />, title: "Route53", desc: "Creates hosted zone and DNS records" },
              { icon: <Lock className="h-8 w-8" />, title: "ACM", desc: "Requests and validates SSL certificate" },
              { icon: <Server className="h-8 w-8" />, title: "S3", desc: "Creates secure bucket and uploads files" },
              { icon: <Zap className="h-8 w-8" />, title: "CloudFront", desc: "Sets up global CDN with SSL" },
              { icon: <Settings className="h-8 w-8" />, title: "DNS", desc: "Configures domain routing" },
              { icon: <Monitor className="h-8 w-8" />, title: "Monitoring", desc: "Sets up CloudWatch dashboards" }
            ].map((step, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-colors">
                <div className="text-blue-400 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-300">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Cost Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Security Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Shield className="h-8 w-8 mr-3 text-green-600" />
                🛡️ Security Features
              </h2>
              <div className="space-y-4">
                {[
                  "S3 buckets are private (no public access)",
                  "CloudFront Origin Access Control (OAC)",
                  "TLS 1.2+ enforced with automatic SSL certificates",
                  "Input validation for domains and files",
                  "Security scanning of uploaded content"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost Estimates */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <DollarSign className="h-8 w-8 mr-3 text-blue-600" />
                💰 Cost Estimates
              </h2>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <p className="text-lg font-semibold text-gray-900 mb-4">
                  Small website (&lt;1GB, &lt;100GB transfer/month): ~$5-10/month
                </p>
                <div className="space-y-3">
                  {[
                    { service: "Route53", cost: "$0.50 per hosted zone" },
                    { service: "S3", cost: "~$0.023 per GB stored" },
                    { service: "CloudFront", cost: "~$0.085 per GB transferred" },
                    { service: "ACM", cost: "Free with CloudFront" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-700">{item.service}:</span>
                      <span className="text-gray-600">{item.cost}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              📋 Prerequisites
            </h2>
            <p className="text-xl text-gray-600">
              What you need before getting started
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Requirements</h3>
              <div className="space-y-4">
                {[
                  "AWS Account with appropriate permissions",
                  "Python 3.8+ installed",
                  "AWS CLI configured with credentials",
                  "Domain name (registered with any registrar)"
                ].map((req, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">AWS Permissions</h3>
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-xs overflow-x-auto">
                <pre className="text-green-400">{`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "route53:*",
        "s3:*", 
        "cloudfront:*",
        "acm:*",
        "sts:GetCallerIdentity"
      ],
      "Resource": "*"
    }
  ]
}`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <AlertTriangle className="h-8 w-8 mr-3 text-orange-500" />
              🚨 Troubleshooting
            </h2>
            <p className="text-xl text-gray-600">
              Common issues and their solutions
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "DNS Not Resolving",
                solutions: [
                  "Verify NS records at your registrar",
                  "Wait up to 48 hours for propagation",
                  "Test: dig yourdomain.com NS"
                ]
              },
              {
                title: "CloudFront Not Updating",
                solutions: [
                  "Clear cache: awsup invalidate yourdomain.com",
                  "Wait 15-20 minutes for changes"
                ]
              },
              {
                title: "Certificate Issues",
                solutions: [
                  "Ensure NS records are configured",
                  "Wait up to 30 minutes for validation"
                ]
              }
            ].map((issue, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{issue.title}</h3>
                <div className="space-y-2">
                  {issue.solutions.map((solution, sIndex) => (
                    <div key={sIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{solution}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Deploy?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join developers worldwide who trust AWSUP for lightning-fast AWS deployments. 
            Zero configuration, maximum automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-gray-900 rounded-lg p-4 font-mono text-left">
              <code className="text-green-400 text-lg">$ pip install awsup</code>
            </div>
            <a 
              href="https://github.com/Akramovic1/aws-website-quick-deployer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center space-x-2"
            >
              <Github className="h-5 w-5" />
              <span>View on GitHub</span>
              <ChevronRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-2 rounded-lg">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">AWSUP</span>
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://github.com/Akramovic1/aws-website-quick-deployer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://github.com/Akramovic1/aws-website-quick-deployer/issues" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Issues
              </a>
              <a 
                href="https://github.com/Akramovic1/aws-website-quick-deployer#readme" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Documentation
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              Made with ❤️ for developers who want simple AWS deployments. MIT License - Free to use and modify.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;