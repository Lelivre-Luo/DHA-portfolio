# Personal Portfolio Website / 个人作品集网站

## 📋 Project Description / 项目描述

A modern, responsive personal portfolio website built with Next.js and TypeScript. This project allows you to showcase your personal information and projects through a simple Markdown-based content management system.

一个使用 Next.js 和 TypeScript 构建的现代化、响应式个人作品集网站。该项目允许您通过简单的基于 Markdown 的内容管理系统展示个人信息和项目。

### Key Features / 主要特性

- **🌐 Bilingual Support / 双语支持**: Full Chinese and English language support
- **📝 Markdown Content Management / Markdown 内容管理**: Easy content editing through Markdown files
- **🎨 Modern Design / 现代设计**: Clean, responsive design with dark theme
- **📱 Mobile Responsive / 移动端响应式**: Optimized for all device sizes
- **⚡ Fast Performance / 快速性能**: Built with Next.js for optimal performance
- **🖼️ Image Management / 图片管理**: Built-in image optimization and management
- **📊 Project Showcase / 项目展示**: Dedicated sections for projects
- **🔧 Easy Customization / 易于定制**: Simple configuration through Markdown files

- **🌐 双语支持**: 完整的中文和英文语言支持
- **📝 Markdown 内容管理**: 通过 Markdown 文件轻松编辑内容
- **🎨 现代设计**: 简洁、响应式设计，支持暗色主题
- **📱 移动端响应式**: 针对所有设备尺寸优化
- **⚡ 快速性能**: 使用 Next.js 构建，性能优异
- **🖼️ 图片管理**: 内置图片优化和管理功能
- **📊 项目展示**: 专门的项目展示区域
- **🔧 易于定制**: 通过 Markdown 文件简单配置

### Technology Stack / 技术栈

- **Frontend / 前端**: Next.js 14, React 18, TypeScript
- **Styling / 样式**: Tailwind CSS, CSS Modules
- **Content Management / 内容管理**: Markdown files with frontmatter
- **Build Tools / 构建工具**: pnpm, ESLint, Prettier
- **Deployment / 部署**: Vercel-ready

- **前端**: Next.js 14, React 18, TypeScript
- **样式**: Tailwind CSS, CSS Modules
- **内容管理**: 带 frontmatter 的 Markdown 文件
- **构建工具**: pnpm, ESLint, Prettier
- **部署**: 支持 Vercel 部署

## 🚀 Getting Started / 快速开始

### Prerequisites / 前置要求

Before you begin, ensure you have the following installed:
在开始之前，请确保您已安装以下软件：

- **Node.js** (version 18 or higher / 版本 18 或更高)
- **pnpm** (package manager / 包管理器)
- **Git** (version control / 版本控制)

### Installation / 安装步骤

#### Step 1: Clone the Repository / 步骤1：克隆仓库

```bash
# Clone the repository / 克隆仓库
git clone https://github.com/your-username/DHA-portfolio.git

# Navigate to the project directory / 进入项目目录
cd DHA-portfolio
```

#### Step 2: Install Dependencies / 步骤2：安装依赖

```bash
# Install all dependencies / 安装所有依赖
pnpm install
```

#### Step 3: Build Content / 步骤3：构建内容

```bash
# Build content from Markdown files / 从 Markdown 文件构建内容
pnpm run build:content
```

#### Step 4: Start Development Server / 步骤4：启动开发服务器

```bash
# Start the development server / 启动开发服务器
pnpm run dev
```

The website will be available at `http://localhost:3000`
网站将在 `http://localhost:3000` 上可用

### Customizing Your Portfolio / 自定义您的作品集

#### Modifying Homepage Content / 修改首页内容

The homepage content is controlled by the `content/home.md` file. The homepage displays:
首页内容由 `content/home.md` 文件控制。首页显示：

- **Hero Section / 英雄区域**: Name, title, location, profile image, and download buttons
- **Education Section / 教育部分**: Educational background and key courses
- **Featured Projects / 精选项目**: Highlighted projects from your portfolio

- **英雄区域**: 姓名、职位、位置、头像和下载按钮
- **教育部分**: 教育背景和核心课程
- **精选项目**: 作品集中的精选项目

**Note**: Only the fields listed below are actually displayed on the homepage. Other fields in `home.md` are available for future use or other pages.
**注意**: 只有下面列出的字段会在首页实际显示。`home.md` 中的其他字段可供将来使用或其他页面使用。

Here's how to customize it:
以下是自定义方法：

##### 1. Basic Information / 基本信息

Edit the following fields in `content/home.md`:
编辑 `content/home.md` 中的以下字段：

```markdown
---
# Basic Information / 基本信息
name_en: "Your Name"                    # English name / 英文姓名
name_zh: "您的姓名"                      # Chinese name / 中文姓名
title_en: "Software Developer"          # English job title / 英文职位
title_zh: "软件开发者"                   # Chinese job title / 中文职位
location_en: "City, Country"            # English location / 英文位置
location_zh: "城市，国家"                # Chinese location / 中文位置

# Contact Information / 联系信息
email: "your.email@example.com"         # Email address / 邮箱地址
github: "https://github.com/username"   # GitHub profile / GitHub 个人资料
linkedin: "https://linkedin.com/in/username" # LinkedIn profile / LinkedIn 个人资料

# About Me / 个人简介
about_en: "Brief description..."       # English description / 英文描述
about_zh: "简短描述..."                # Chinese description / 中文描述
---
```

##### 2. Profile Images / 个人头像

Add profile and cover images:
添加个人头像和封面图片：

```markdown
---
# ... other fields ...
profile_image: "/images/your-profile.jpg"  # Profile image path / 头像图片路径
cover_image: "/images/your-cover.jpg"      # Cover image path / 封面图片路径
---
```

**Image Requirements / 图片要求:**
- Place images in the `public/images/` directory / 将图片放在 `public/images/` 目录中
- Recommended size: 400x400px for profile, 1200x600px for cover / 推荐尺寸：头像 400x400px，封面 1200x600px
- Supported formats: JPG, PNG, WebP / 支持格式：JPG、PNG、WebP

##### 3. Education Section / 教育部分

Add your educational background:
添加您的教育背景：

```markdown
---
# ... other fields ...
education:
  - institution: "University Name"
    degree: "Bachelor of Computer Science"
    location: "City, Country"
    start_date: "2018-09"
    end_date: "2022-06"
    gpa: "3.8/4.0"
    relevant_courses:
      - "Data Structures and Algorithms"
      - "Software Engineering"
      - "Database Systems"
---
```

#### Adding New Projects / 添加新项目

To add a new project, create a new file in `content/projects/`:
要添加新项目，请在 `content/projects/` 中创建新文件：

```bash
# Create new project file / 创建新项目文件
touch content/projects/project-your-project-name.md
```

##### Featured Projects / 精选项目

To highlight your best projects on the homepage, set `featured: true` in your project file:
要在首页突出显示您的最佳项目，请在项目文件中设置 `featured: true`：

```markdown
---
title: "Your Project Title"
title_en: "Your Project Title"
title_zh: "您的项目标题"
description: "Project description"
description_en: "English project description"
description_zh: "中文项目描述"
technologies: ["React", "Node.js", "MongoDB"]
github_url: "https://github.com/username/project"
live_url: "https://project-demo.com"
image: "/images/project-screenshot.jpg"
featured: true  # This makes it appear on homepage / 这会让它出现在首页
date: "2024-01-15"
---
```

**Complete Project File Template / 完整项目文件模板:**

```markdown
---
title: "Your Project Title"
title_en: "Your Project Title"
title_zh: "您的项目标题"
description: "Project description"
description_en: "English project description"
description_zh: "中文项目描述"
technologies: ["React", "Node.js", "MongoDB"]
github_url: "https://github.com/username/project"
live_url: "https://project-demo.com"
image: "/images/project-screenshot.jpg"
featured: true  # Set to true to show on homepage / 设置为 true 以在首页显示
date: "2024-01-15"
---

**Tips for Featured Projects / 精选项目提示:**
- Only projects with `featured: true` will appear on the homepage
- Recommended to feature 3-6 of your best projects
- Featured projects should have high-quality images and clear descriptions
- You can change which projects are featured by editing the `featured` field

**精选项目提示:**
- 只有设置 `featured: true` 的项目才会出现在首页
- 建议精选 3-6 个您的最佳项目
- 精选项目应该有高质量的图片和清晰的描述
- 您可以通过编辑 `featured` 字段来更改精选项目

# Project Details / 项目详情

## Overview / 概述
Detailed project description...

## Features / 功能
- Feature 1
- Feature 2
- Feature 3

## Technologies Used / 使用的技术
- React
- Node.js
- MongoDB

## Challenges / 挑战
Describe the challenges you faced...

## Solutions / 解决方案
How you solved the challenges...

## Results / 结果
Project outcomes and achievements...
```

#### Content Management Tips / 内容管理技巧

##### 1. File Naming Convention / 文件命名约定

- **Projects**: `project-descriptive-name.md`
- **Use lowercase and hyphens** / 使用小写字母和连字符

##### 2. Image Management / 图片管理

```bash
# Create image directories / 创建图片目录
mkdir -p public/images/projects
mkdir -p public/images/profile
```

##### 3. Content Updates / 内容更新

After modifying any Markdown files, rebuild the content:
修改任何 Markdown 文件后，重新构建内容：

```bash
# Rebuild content / 重新构建内容
pnpm run build:content

# Restart development server / 重启开发服务器
pnpm run dev
```

##### 4. Preview Changes / 预览更改

- Open `http://localhost:3000` in your browser
- Navigate to different pages to see your changes
- Use browser refresh to see updated content

- 在浏览器中打开 `http://localhost:3000`
- 导航到不同页面查看您的更改
- 使用浏览器刷新查看更新内容

### Using Cursor AI Agent / 使用 Cursor AI Agent

If you're using Cursor IDE, you can leverage the AI Agent to automate the setup process:
如果您使用 Cursor IDE，可以利用 AI Agent 来自动化设置过程：

#### Method 1: Direct AI Agent Commands / 方法1：直接 AI Agent 命令

Open Cursor IDE and use the following prompts in the AI Agent:
打开 Cursor IDE 并在 AI Agent 中使用以下提示：

```
# Download and setup the portfolio project
# 下载并设置作品集项目

1. Clone the repository: https://github.com/your-username/DHA-portfolio.git
2. Navigate to the project directory
3. Install dependencies using pnpm
4. Build content from Markdown files
5. Start the development server
```

#### Method 2: Step-by-step AI Agent Instructions / 方法2：分步 AI Agent 指令

You can also ask the AI Agent to perform each step individually:
您也可以要求 AI Agent 单独执行每个步骤：

**Step 1: Clone Repository / 步骤1：克隆仓库**
```
Please clone the repository https://github.com/your-username/DHA-portfolio.git to my local machine
```

**Step 2: Install Dependencies / 步骤2：安装依赖**
```
Please install all dependencies for this Next.js project using pnpm
```

**Step 3: Build Content / 步骤3：构建内容**
```
Please build the content from Markdown files using the build:content script
```

**Step 4: Start Development Server / 步骤4：启动开发服务器**
```
Please start the development server for this Next.js project
```

#### Method 3: AI Agent with Custom Instructions / 方法3：带自定义指令的 AI Agent

For more advanced setup, you can provide detailed instructions:
对于更高级的设置，您可以提供详细指令：

```
I want to set up a personal portfolio website. Please:

1. Clone the repository from https://github.com/your-username/DHA-portfolio.git
2. Check if Node.js and pnpm are installed, install them if needed
3. Install all project dependencies
4. Build the content from Markdown files
5. Start the development server
6. Open the website in my default browser
7. Show me the project structure and explain what each file does

Make sure to handle any errors that might occur during the process.
```

#### Method 4: AI Agent Troubleshooting / 方法4：AI Agent 故障排除

If you encounter issues, ask the AI Agent for help:
如果遇到问题，请向 AI Agent 寻求帮助：

```
I'm having trouble setting up this portfolio project. Please:

1. Check my system requirements (Node.js version, pnpm installation)
2. Diagnose any errors in the terminal
3. Provide solutions for common setup issues
4. Verify that all dependencies are correctly installed
5. Test if the development server starts properly
```


