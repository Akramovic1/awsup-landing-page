# AWSUP Landing Page

A modern, responsive landing page for **AWSUP** - the lightning-fast AWS website deployment CLI tool.

## 🚀 About AWSUP

AWSUP is a production-grade CLI tool for deploying static websites to AWS using S3, CloudFront, Route53, and ACM with zero configuration and maximum automation.

### Key Features
- ⚡ **Zero Configuration** - Works out of the box
- 🔒 **Secure by Default** - SSL, OAC, encryption enabled  
- 🌍 **Global CDN** - Lightning-fast CloudFront delivery
- 🛡️ **Production Ready** - Comprehensive validation & error handling
- 🎨 **Beautiful CLI** - Rich terminal UI with progress bars
- 🔄 **Smart State** - Resumes interrupted deployments

## 🎯 Quick Start with AWSUP

```bash
# Install globally
pip install awsup

# Deploy your website instantly
cd /path/to/your/website
awsup deploy yourdomain.com --website-path .

# Or deploy with default "Coming Soon" page
awsup deploy yourdomain.com
```

That's it! AWSUP handles all AWS infrastructure automatically.

## 🌟 Common Workflows

**React/Next.js:**
```bash
npm run build
awsup deploy myapp.com --website-path ./build
```

**Vue/Nuxt:**
```bash
npm run generate  
awsup deploy myapp.com --website-path ./dist
```

**Static HTML:**
```bash
awsup deploy myapp.com --website-path ./public
```

## 📋 All Commands

- `awsup deploy yourdomain.com --website-path ./build` - Deploy website
- `awsup status yourdomain.com` - Check status
- `awsup invalidate yourdomain.com` - Clear CDN cache
- `awsup cleanup yourdomain.com` - Remove all AWS resources
- `awsup phase1 yourdomain.com` - DNS setup
- `awsup phase2 yourdomain.com` - Full deployment

## 🔗 AWSUP Links

- **GitHub Repository**: [aws-website-quick-deployer](https://github.com/Akramovic1/aws-website-quick-deployer)
- **PyPI Package**: [awsup on PyPI](https://pypi.org/project/awsup/)
- **Issues & Support**: [GitHub Issues](https://github.com/Akramovic1/aws-website-quick-deployer/issues)
- **Documentation**: [Full README](https://github.com/Akramovic1/aws-website-quick-deployer#readme)

## 💰 Cost Estimates

For a small website (<1GB, <100GB transfer/month): **~$5-10/month**

- Route53: $0.50 per hosted zone
- S3: ~$0.023 per GB stored
- CloudFront: ~$0.085 per GB transferred
- ACM: Free with CloudFront

## 🛡️ Security Features

- S3 buckets are private (no public access)
- CloudFront Origin Access Control (OAC)
- TLS 1.2+ enforced with automatic SSL certificates
- Input validation for domains and files
- Security scanning of uploaded content

## 📋 Prerequisites

- AWS Account with appropriate permissions
- Python 3.8+ installed
- AWS CLI configured with credentials
- Domain name (registered with any registrar)

---

**Made with ❤️ for developers who want simple AWS deployments.**

*Deploy fast. Deploy secure. Deploy with AWSUP.*