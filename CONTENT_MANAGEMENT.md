# 内容管理系统使用指南

本系统目前主要使用 `data/` 目录下的TypeScript文件来管理网站内容。部分内容仍可通过Markdown文件修改，系统会自动构建为TypeScript数据文件。

## 📁 当前文件结构

```
# 📝 Markdown内容源（仍可修改的部分）
content/
├── home.md                           # ✅ 可修改：首页个人信息
├── blog/                             # ✅ 可修改：博客文章
│   ├── graphql-vs-rest-python.md
│   ├── optimizing-fastapi-performance.md
│   └── scalable-python-microservices.md
└── projects/                          # ✅ 可修改：项目描述
    ├── project-template.md            # 模板文件（不显示）
    ├── project-ai-cursor-init.md
    ├── project-base16-whatsapp-theme.md
    ├── project-covid-data-tracker.md
    └── project-myinstants-discord-bot.md

# 💻 TypeScript数据文件（自动生成/直接编辑）
data/
├── home-i18n.ts                     # 首页数据（从home.html生成）
├── blog-data.ts                      # 博客数据（从blog/*生成）
└── projects-i18n.ts                 # 项目数据（从projects/*生成）
```

## 🏠 首页内容管理

### 📄 home.md 结构

编辑 `content/home.md` 文件来修改首页的所有信息：

```yaml
---
# 🏠 个人信息（中文）
name: "[替换] 你的中文姓名"
title: "[替换] 中文头衔（例如：高级软件工程师）"
location: "[替换] 中文所在地（例如：巴西）"

education:
  - degree: "[替换] 学位名称（中文）"
    school: "[替换] 学校名称（中文）"
    period: "[替换] 时间范围（例如：2018 - 2020）"
    gpa: "[OPTIONAL] GPA 绩点（例如：3.8/4.0）"
    description: "[替换] 教育经历描述"
    courses: ["课程1", "课程2", "课程3"]

about: "[替换] 你的个人简介（会显示在About Me部分）"

contact:
  email: "[替换] 你的邮箱地址"
  location: "[替换] 中文所在地（例如：巴西）"
  github: "[替换] GitHub用户名"
  linkedin: "[替换] LinkedIn用户名"

projects:
  - feature:
      title: "[替换] 项目标题"
      tagline: "[替换] 项目副标题"
      description: "[替换] 项目描述"
      link: "[替换] 项目相关链接"

# 🌍 个人 Information（英文）
name_en: "[To be replace] Your full name in English"
title_en: "[To be replace] English title (e.g. Senior Software Engineer)"
location_en: "[To be replace] English location (e.g. Brazil)"

education_en:
  - degree: "[To be replace] Degree Name in English"
    school: "[To be replace] School Name in English"
    period: "[To be replace] Time range (e.g. 2018 - 2020)"
    gpa: "[To be replace] GPA in English (e.g. 3.8/4.0)"
    description: "[To be replace] Education description"
    courses_en: ["Course 1", "Course 2", "Course 3"]

about_en: "[To be replace] Your brief summary"

contact_en:
  email: "[To be replace] Your email"
  location: "[To be replace] English location (e.g. Brazil)"
  github: "[To be replace] GitHub username"
  linkedin: "[To be replace] LinkedIn username"

projects_en:
  - feature_en:
      title: "[To be replace] Project title"
      tagline: "[To be replace] Project tagline"
      description: "[To be replace] Project description"
      link: "[To be replace] Project link"
---
```

### 🔄 自动数据生成

系统将自动生成 `data/home-i18n.ts`，包含简化的数据结构：

```typescript
export type HomeData = {
  name: string          // 动态映射：中文/英文
  title: string         // 动态映射：中文/英文  
  location: string      // 动态映射：中文/英文
  email: string         // 通用字段
  github: string        // 通用字段
  linkedin: string      // 通用字段
  about: string         // 动态映射：中文/英文
  education: Array<{    // 动态映射：中文/英文
    degree: string
    school: string
    period: string
    gpa: string
    description: string
    courses: string[]
  }>
  contact: {         // 简化的联系信息
    email: string
    location: string
    github: string
    linkedin: string
  }
}

export function getHomeData(lang: 'en' | 'zh'): HomeData
```

## 🚀 项目管理

### 📄 项目文件格式

新系统支持中英双语项目描述：

```yaml
---
# 基本信息（英文）
id: 1
title: "Project Title in English"
description: "Project description in English"
image: "https://example.com/image.jpg"  # 可选
tags: 
  - "Technology"
  - "Web Development"
github: "https://github.com/user/repo"
demo: "https://demo.example.com"       # 可选
content: "Detailed project description in English..."

# 基本信息（中文）
title_zh: "项目中文标题"
description_zh: "项目中文描述"
tags_zh:
  - "技术"
  - "网页开发"
content_zh: "详细的项目中文描述..."

# 项目状态
status: "completed"  # completed, in-progress, planned
featured: true     # 是否在首页展示
technologies:
  - "React"
  - "TypeScript"
startDate: "2024-01-01"
endDate: "2024-06-01"
---

# 项目详细描述（可选）

在这里可以写完整的项目文档...
```

### 🔄 自动数据生成

系统将自动生成优化的项目数据结构：

```typescript
export type Project = {
  id: number
  title_en: string
  title_zh: string
  description_en: string
  description_zh: string
  image?: string | null
  tags_en: string[]
  tags_zh: string[]
  github: string
  demo: string | null
  content_en: string
  content_zh: string
}

export function getProjectsData(lang: 'en' | 'zh') {
  return {
    projects: Project[],        // 所有项目
    featuredProjects: Project[] // 精选项目（前3个）
  }
}
```

### 📋 项目文件命名规则

- 必须以 `project-` 开头
- 使用小写字母和连字符
- 例如：`project-ai-cursor-init.md`
- **重要**：`project-template.md` 是模板文件，不会显示在页面中

## 📝 博客管理

博客系统的结构保持不变：

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

## 🎯 系统优势

### 📊 数据结构优化
- ✅ **无冗余**：删除了重复的 `name_en/name_zh` 结构
- ✅ **单一数据源**：每个字段只有一个定义
- ✅ **智能映射**：根据语言动态映射字段

### 🌍 国际化支持
- ✅ **完整双语支持**：首页和项目都支持中英双语
- ✅ **自动切换**：语言切换自动影响所有内容
- ✅ **智能映射**：`homeEn.name` → `homeZh.name` 自动匹配

### 🚀 开发体验
- ✅ **自动生成**：修改 Markdown 后运行构建命令即可
- ✅ **类型安全**：Pure TypeScript 代码，完整类型定义
- ✅ **易于维护**：单一文件管理，清晰的数据流

## 🔄 更新内容流程

### 📝 通过Markdown文件（推荐）
1. **修改Markdown文件**：编辑 `content/` 目录下的 `.md` 文件
2. **重新构建内容**：运行 `pnpm run build:content`
3. **启动开发服务器**：运行 `pnpm run dev`
4. **查看更改**：在浏览器中查看更新后的内容

### 💻 直接编辑TypeScript文件（高级）
1. **直接编辑**：修改 `data/` 目录下的 `.ts` 文件
2. **启动开发服务器**：运行 `pnpm run dev`
3. **查看更改**：直接在浏览器中查看更改

> **注意**：直接编辑TypeScript文件会覆盖构建脚本生成的更改

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
3. **图片路径**：图片应放在 `public/` 目录下，或使用完整的URL
4. **模板文件**：不要删除 `project-template.md` 文件
5. **自动识别**：系统会自动识别项目数量并展示
6. **语言映射**：确保中文和英文字段都有对应的值

## 🎯 快速开始

### 🆕 新用户（推荐通过Markdown）
1. 修改 `content/home.md` 中的个人信息
2. 修改 `content/projects/` 中的项目文件
3. 运行 `pnpm run build:content`
4. 运行 `pnpm run dev`
5. 在浏览器中查看更改

### 🔧 开发人员（直接编辑TypeScript）
1. 直接修改 `data/home-i18n.ts`、`data/projects-i18n.ts` 等文件
2. 运行 `pnpm run dev`
3. 在浏览器中查看更改

> **提示**：目前项目实际运行的是 `data/*.ts` 文件，Markdown文件是数据源

## 📈 新架构对比

### 🔴 旧架构问题
- ❌ 数据冗余：`name`, `name_en`, `name_zh` 同时存在
- ❌ 维护复杂：需要手动同步多个字段
- ❌ 内存浪费：重复数据占用空间

### ✅ 新架构优势
- ✅ **简化结构**：每个字段只有一次定义
- ✅ **自动映射**：语言切换自动处理
- ✅ **类型安全**：完整的TypeScript支持
- ✅ **维护性强**：修改一处，处处生效

现在您可以通过修改Markdown文件来轻松管理完全国际化的网站内容了！🚀