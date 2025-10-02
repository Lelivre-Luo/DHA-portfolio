---
title_en: "Base 16 Whatsapp Theme"
title_zh: "Base 16 Whatsapp 主题"
description_en: "A Whatsapp Web theme inspired by the Dark Base 16 colors."
description_zh: "受 Base 16 暗色配色启发的 WhatsApp Web 主题。"
image: "https://camo.githubusercontent.com/1b6684c7c3ad58073423a154fa0709eb215c096fec5aa32b6a430240aaa7ce55/68747470733a2f2f692e696d6775722e636f6d2f733134694f54392e706e67"
tags_en: ["CSS", "Javascript"]
tags_zh: ["CSS", "Javascript"]
github: "https://github.com/mgiovani/base16-whatsapp"
demo: null
---

# Base 16 Whatsapp Theme

A beautifully crafted dark theme for WhatsApp Web that brings the elegance of Base 16 color schemes to your messaging experience. This theme transforms the standard WhatsApp Web interface into a visually appealing and eye-friendly dark mode using carefully selected colors from the Base 16 palette.

## Features

### 🎨 Base 16 Color Scheme
- **Consistent Color Palette**: Uses Base 16 dark color scheme for visual consistency
- **High Contrast**: Optimized for readability and reduced eye strain
- **Professional Look**: Clean, modern appearance suitable for work and personal use

### 🌙 Dark Mode Optimization
- **Reduced Eye Strain**: Dark background reduces eye fatigue during extended use
- **Better Night Usage**: Perfect for late-night messaging sessions
- **Battery Friendly**: Dark themes can help save battery on OLED displays

### 🎯 Customizable Elements
- **Message Bubbles**: Styled incoming and outgoing message bubbles
- **Sidebar**: Dark themed navigation sidebar
- **Chat Area**: Optimized chat background and text colors
- **Status Indicators**: Custom styled online/offline indicators

## Technical Implementation

### Core Technologies
- **CSS3**: Advanced styling with custom properties
- **JavaScript**: Dynamic theme application and user preferences
- **Chrome Extension API**: Browser extension integration
- **CSS Variables**: Easy customization and theming

### Architecture
The theme follows a modular CSS architecture:

```
src/
├── css/
│   ├── base.css          # Base styles and CSS variables
│   ├── components/       # Component-specific styles
│   │   ├── sidebar.css
│   │   ├── chat.css
│   │   └── messages.css
│   └── themes/
│       └── base16-dark.css
├── js/
│   ├── theme-loader.js   # Theme application logic
│   └── preferences.js    # User preference management
└── manifest.json         # Extension manifest
```

### CSS Variables System
```css
:root {
  /* Base 16 Dark Colors */
  --base00: #181818;  /* Background */
  --base01: #282828;  /* Lighter background */
  --base02: #383838;  /* Selection background */
  --base03: #585858;  /* Comments */
  --base04: #b8b8b8;  /* Dark foreground */
  --base05: #d8d8d8;  /* Default foreground */
  --base06: #e8e8e8;  /* Light foreground */
  --base07: #f8f8f8;  /* Lightest foreground */
  
  /* Accent Colors */
  --base08: #ab4642;  /* Red */
  --base09: #dc9656;  /* Orange */
  --base0A: #f7ca88;  /* Yellow */
  --base0B: #a1b56c;  /* Green */
  --base0C: #86c1b9;  /* Cyan */
  --base0D: #7cafc2;  /* Blue */
  --base0E: #ba8baf;  /* Magenta */
  --base0F: #a16946;  /* Brown */
}
```

### Component Styling
```css
/* Message Bubbles */
.message-in {
  background: var(--base01);
  color: var(--base05);
  border-radius: 8px;
  padding: 8px 12px;
  margin: 4px 0;
}

.message-out {
  background: var(--base0D);
  color: var(--base07);
  border-radius: 8px;
  padding: 8px 12px;
  margin: 4px 0;
  margin-left: auto;
}

/* Sidebar */
.sidebar {
  background: var(--base00);
  border-right: 1px solid var(--base02);
}

.sidebar-header {
  background: var(--base01);
  border-bottom: 1px solid var(--base02);
}

/* Chat Area */
.chat-area {
  background: var(--base00);
  color: var(--base05);
}

.chat-header {
  background: var(--base01);
  border-bottom: 1px solid var(--base02);
}
```

## Installation

### Method 1: Browser Extension (Recommended)

1. **Download the Extension**
   - Download the latest release from GitHub
   - Extract the files to a local directory

2. **Install in Chrome/Edge**
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the extension folder

3. **Install in Firefox**
   - Open Firefox and go to `about:debugging`
   - Click "This Firefox"
   - Click "Load Temporary Add-on"
   - Select the `manifest.json` file

### Method 2: UserScript (Tampermonkey/Greasemonkey)

1. **Install Tampermonkey**
   - Install Tampermonkey browser extension
   - Go to the [UserScript page](https://github.com/mgiovani/base16-whatsapp)

2. **Install the Script**
   - Click "Install" on the UserScript page
   - The script will automatically apply the theme

### Method 3: Manual CSS Injection

1. **Open WhatsApp Web**
   - Go to [web.whatsapp.com](https://web.whatsapp.com)

2. **Open Developer Tools**
   - Press F12 or right-click and select "Inspect"

3. **Inject CSS**
   - Go to the Console tab
   - Paste the CSS code from the repository
   - Press Enter to apply

## Customization

### Color Customization
You can easily customize the theme by modifying CSS variables:

```css
:root {
  /* Change background color */
  --base00: #1a1a1a;
  
  /* Change accent color */
  --base0D: #6a9bd2;
  
  /* Change text color */
  --base05: #e0e0e0;
}
```

### Component Customization
Modify specific components by targeting their CSS classes:

```css
/* Customize message bubbles */
.message-in {
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Customize sidebar */
.sidebar {
  width: 300px;
  background: linear-gradient(180deg, var(--base00) 0%, var(--base01) 100%);
}
```

## Browser Compatibility

### Supported Browsers
- **Chrome**: 80+
- **Firefox**: 75+
- **Edge**: 80+
- **Safari**: 13+
- **Opera**: 67+

### Requirements
- Modern browser with CSS Grid and Flexbox support
- JavaScript enabled
- WhatsApp Web access

## Performance

### Optimization Features
- **Minimal CSS**: Lightweight stylesheet for fast loading
- **Efficient Selectors**: Optimized CSS selectors for better performance
- **No JavaScript Dependencies**: Pure CSS implementation
- **Lazy Loading**: Components load only when needed

### Resource Usage
- **CSS Size**: ~15KB minified
- **Memory Usage**: Minimal impact on browser memory
- **CPU Usage**: No JavaScript processing overhead

## Troubleshooting

### Common Issues

#### Theme Not Applying
- Check if the extension is enabled
- Refresh the WhatsApp Web page
- Clear browser cache and cookies
- Check browser console for errors

#### Colors Not Displaying Correctly
- Verify CSS variables are supported
- Check for conflicting styles
- Update browser to latest version

#### Extension Not Working
- Check extension permissions
- Verify WhatsApp Web URL
- Reinstall the extension

### Getting Help
- Check the [Issues](https://github.com/mgiovani/base16-whatsapp/issues) page
- Join our [Discord community](https://discord.gg/your-server)
- Read the [FAQ](https://github.com/mgiovani/base16-whatsapp/wiki/FAQ)

## Contributing

We welcome contributions from the community! Here's how you can help:

### Development Setup
1. Fork the repository
2. Clone your fork
3. Make your changes
4. Test in different browsers
5. Submit a pull request

### Areas for Contribution
- New color schemes
- Additional browser support
- Performance improvements
- Bug fixes
- Documentation updates

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Base 16 color scheme creators
- WhatsApp Web team
- Browser extension communities
- All contributors and users

---

*Transform your WhatsApp Web experience with the elegance of Base 16 colors.*
