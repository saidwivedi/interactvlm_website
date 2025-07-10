# InteractVLM Project Website

This repository contains the source code for the InteractVLM project website, presenting our CVPR 2025 paper "InteractVLM: 3D Interaction Reasoning from 2D Foundational Models".

## 🚀 Quick Start

Simply open `index.html` in your browser to view the website.

## ⚠️ Important: Google Analytics

**BEFORE DEPLOYMENT**: Remember to either:
- Remove the Google Analytics code (lines 16-26 in `index.html`)
- Replace `G-8GKPR36DGP` with your own Google Analytics tracking ID

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
```

## 🎨 Customization

To adapt this template for your project:

1. **Update content** in `index.html`:
   - Title, authors, affiliations
   - Abstract and method description
   - Paper links (arXiv, PDF, video, code)

2. **Add media files**:
   - `static/figures/teaser.png` - Main teaser image
   - `static/figures/method.png` - Method overview
   - `static/results/` - Result images and videos

3. **Update BibTeX citation** (bottom of `index.html`)

## 📁 Structure

```
webpage/
├── index.html              # Main website
├── static/
│   ├── css/               # Stylesheets  
│   ├── js/                # JavaScript
│   ├── figures/           # Paper figures
│   └── results/           # Result media
└── README.md              # This file
```

## 🙏 Acknowledgments

This website template is borrowed from [Yuliang Xiu](https://xiuyuliang.cn)'s [ECON website](https://xiuyuliang.cn/econ/).

## 📞 Contact

- **Technical Questions**: [sai.dwivedi@tue.mpg.de](mailto:sai.dwivedi@tue.mpg.de)
