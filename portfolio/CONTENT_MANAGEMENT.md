# 内容管理系统使用指南

本系统使用Markdown文件来管理网站内容，让您可以轻松修改信息而无需接触代码。

## 📁 文件结构

```
content/
├── home.md                    # 首页所有信息
├── blog/                      # 博客文章
│   ├── article1.md
│   └── article2.md
└── projects/                  # 项目展示
    ├── project-template.md    # 项目模板（不显示在页面中）
    ├── project-ai-cursor-init.md
    ├── project-base16-whatsapp-theme.md
    └── project-XXXX.md        # 新项目文件格式
```

## 🏠 首页内容管理 (home.md)

编辑 `content/home.md` 文件来修改首页的所有信息：

### 个人信息
```yaml
name: "您的姓名"
title: "您的职位"
location: "您的位置"
email: "您的邮箱"
github: "您的GitHub用户名"
linkedin: "您的LinkedIn用户名"
```

### 教育经历
```yaml
education:
  - degree: "学位名称"
    school: "学校名称"
    period: "学习时间"
    gpa: "绩点"
    description: "教育经历描述"
    courses:                    # 主修课程列表
      - "课程1"
      - "课程2"
      - "课程3"
```

### 个人简介
```yaml
about: "您的个人简介，会显示在About Me部分"
```

### 联系信息
```yaml
contact:
  title: "联系我"
  description: "联系描述"
  email: "联系邮箱"
  location: "联系地址"
  github: "GitHub链接"
  linkedin: "LinkedIn链接"
```

## 🚀 项目管理

### 创建新项目

1. **复制模板文件**：
   ```bash
   cp content/projects/project-template.md content/projects/project-您的项目名.md
   ```

2. **编辑项目信息**：
   ```yaml
   ---
   # 基本信息
   id: 1
   title: "项目标题"
   description: "项目简短描述"
   image: "项目封面图片URL（可选）"
   tags: 
     - "标签1"
     - "标签2"
   github: "GitHub仓库链接"
   demo: "演示链接（可选）"
   
   # 项目状态
   status: "completed"  # completed, in-progress, planned
   featured: true       # 是否在首页展示
   
   # 技术栈
   technologies:
     - "技术1"
     - "技术2"
   
   # 项目时间
   startDate: "2024-01-01"
   endDate: "2024-06-01"
   ---
   
   # 项目详细描述
   
   在这里写项目的详细描述...
   ```

### 项目文件命名规则

- 必须以 `project-` 开头
- 使用小写字母和连字符
- 例如：`project-ai-cursor-init.md`

### 模板文件说明

- `project-template.md` 是模板文件，**不会显示在页面中**
- 系统会自动识别并排除包含 `template` 的文件
- 只有以 `project-` 开头的文件才会被处理

## 📝 博客管理

在 `content/blog/` 目录下创建Markdown文件：

```yaml
---
title: "文章标题"
description: "文章描述"
date: "2024-01-01"
tags: ["标签1", "标签2"]
---

# 文章内容

在这里写您的博客文章...
```

## 🔄 更新内容流程

1. **修改Markdown文件**：编辑相应的 `.md` 文件
2. **重新构建内容**：运行 `pnpm run build:content`
3. **启动开发服务器**：运行 `pnpm run dev`
4. **查看更改**：在浏览器中查看更新后的内容

## ⚙️ 构建命令

```bash
# 仅构建内容（不启动服务器）
pnpm run build:content

# 构建并启动开发服务器
pnpm run dev

# 构建生产版本
pnpm run build
```

## 📋 注意事项

1. **文件编码**：确保所有Markdown文件使用UTF-8编码
2. **YAML格式**：frontmatter必须使用正确的YAML格式
3. **图片路径**：图片应放在 `public/` 目录下
4. **模板文件**：不要删除 `project-template.md` 文件
5. **自动识别**：系统会自动识别项目数量并展示

## 🎯 快速开始

1. 修改 `content/home.md` 中的个人信息
2. 运行 `pnpm run build:content`
3. 运行 `pnpm run dev`
4. 在浏览器中查看更改

现在您可以通过修改Markdown文件来轻松管理网站内容了！