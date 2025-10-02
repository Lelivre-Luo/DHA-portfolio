# Portfolio Website - Content Management Guide

这是一个基于Next.js的作品集网站，使用Markdown文件进行内容管理。您可以通过编辑Markdown文件来更新网站内容，无需修改代码。

## 🚀 快速开始

### 1. 安装依赖
```bash
pnpm install
```

### 2. 启动开发服务器
```bash
pnpm run dev
```

### 3. 构建内容（修改内容后必须运行）
```bash
pnpm run build:content
```

## 📁 内容文件结构

```
content/
├── blog/           # 博客文章
│   ├── optimizing-fastapi-performance.md
│   ├── scalable-python-microservices.md
│   └── graphql-vs-rest-python.md
├── projects/       # 项目信息
│   ├── ai-cursor-init.md
│   ├── myinstants-discord-bot.md
│   ├── base16-whatsapp-theme.md
│   └── covid-data-tracker.md
└── resume/         # 简历信息
    ├── personal-info.md
    ├── work-experience.md
    ├── skills.md
    ├── languages.md
    └── publications.md
```

## ✏️ 如何修改内容

### 修改博客文章

1. **找到要修改的文章**
   - 进入 `content/blog/` 目录
   - 选择对应的 `.md` 文件

2. **编辑文章信息**
   ```markdown
   ---
   title: "文章标题"
   excerpt: "文章摘要"
   date: "发布日期"
   readTime: "阅读时间"
   image: "图片URL或null"
   tags: ["标签1", "标签2", "标签3"]
   ---
   
   # 文章标题
   
   文章内容...
   ```

3. **保存并构建**
   ```bash
   pnpm run build:content
   ```

4. **查看效果**
   - 刷新浏览器
   - 访问 `http://localhost:3000/blog`

### 修改项目信息

1. **找到要修改的项目**
   - 进入 `content/projects/` 目录
   - 选择对应的 `.md` 文件

2. **编辑项目信息**
   ```markdown
   ---
   title: "项目名称"
   description: "项目描述"
   image: "项目图片URL或null"
   tags: ["技术1", "技术2", "技术3"]
   github: "GitHub仓库链接"
   demo: "演示链接或null"
   ---
   
   # 项目名称
   
   详细项目描述...
   ```

3. **保存并构建**
   ```bash
   pnpm run build:content
   ```

4. **查看效果**
   - 刷新浏览器
   - 访问 `http://localhost:3000/projects`

### 修改简历信息

#### 个人信息 (`content/resume/personal-info.md`)
```markdown
---
name: "您的姓名"
title: "职位标题"
email: "邮箱地址"
location: "所在地"
linkedin: "LinkedIn链接"
github: "GitHub链接"
website: "个人网站"
photo: "/images/profile.png"
yearsOfExperience: "工作经验描述"
teamLeadExperience: "团队领导经验描述"
summary: ["个人简介要点1", "个人简介要点2"]
---
```

#### 工作经历 (`content/resume/work-experience.md`)
```markdown
---
experience:
  - title: "职位名称"
    company: "公司名称"
    period: "工作时间"
    location: "工作地点"
    responsibilities:
      - "工作职责1"
      - "工作职责2"
      - "工作职责3"
---
```

#### 技能信息 (`content/resume/skills.md`)
```markdown
---
skills:
  languages: ["编程语言1", "编程语言2"]
  architecture: ["架构模式1", "架构模式2"]
  cloud: ["云服务1", "云服务2"]
  data: ["数据库1", "数据库2"]
  quality: ["质量工具1", "质量工具2"]
hardSkills: ["硬技能1", "硬技能2"]
softSkills: ["软技能1", "软技能2"]
---
```

#### 语言能力 (`content/resume/languages.md`)
```markdown
---
languages:
  - name: "语言名称"
    level: "熟练程度"
    certificate: "证书信息（可选）"
---
```

#### 出版物 (`content/resume/publications.md`)
```markdown
---
publications:
  - title: "出版物标题"
    description: "出版物描述"
    year: "发表年份"
    link: "链接（可选）"
---
```

## 🆕 添加新内容

### 添加新博客文章

1. **创建新文件**
   - 在 `content/blog/` 目录下创建新的 `.md` 文件
   - 文件名使用英文，用连字符分隔（如：`my-new-post.md`）

2. **编写文章**
   ```markdown
   ---
   title: "新文章标题"
   excerpt: "文章摘要"
   date: "2024-01-01"
   readTime: "5 min read"
   image: null
   tags: ["标签1", "标签2"]
   ---
   
   # 新文章标题
   
   文章内容...
   ```

3. **构建并查看**
   ```bash
   pnpm run build:content
   ```

### 添加新项目

1. **创建新文件**
   - 在 `content/projects/` 目录下创建新的 `.md` 文件

2. **编写项目信息**
   ```markdown
   ---
   title: "新项目名称"
   description: "项目描述"
   image: "/images/project-image.png"
   tags: ["技术1", "技术2"]
   github: "https://github.com/username/repo"
   demo: "https://demo-url.com"
   ---
   
   # 新项目名称
   
   详细项目描述...
   ```

3. **构建并查看**
   ```bash
   pnpm run build:content
   ```

## 🖼️ 图片管理

### 添加图片

1. **将图片放入 `public/images/` 目录**
2. **在Markdown文件中引用**
   ```markdown
   image: "/images/your-image.png"
   ```

### 图片要求

- **格式**: JPG, PNG, WebP
- **大小**: 建议不超过2MB
- **尺寸**: 博客文章图片建议1200x500px，项目图片建议500x300px

## 📝 Markdown语法

### 基本语法

```markdown
# 一级标题
## 二级标题
### 三级标题

**粗体文本**
*斜体文本*

[链接文本](链接地址)

![图片描述](图片地址)

- 列表项1
- 列表项2

1. 有序列表1
2. 有序列表2

> 引用文本

`行内代码`

```代码块
代码内容
```

### 代码高亮

```python
def hello_world():
    print("Hello, World!")
```

```javascript
function helloWorld() {
    console.log("Hello, World!");
}
```

## 🔧 常用命令

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev

# 构建内容（修改内容后必须运行）
pnpm run build:content

# 构建生产版本
pnpm run build

# 启动生产服务器
pnpm run start

# 代码检查
pnpm run lint
```

## ⚠️ 重要注意事项

### 1. 修改内容后必须构建
每次修改Markdown文件后，都必须运行：
```bash
pnpm run build:content
```

### 2. 文件编码
确保所有Markdown文件都使用UTF-8编码。

### 3. 前端格式
frontmatter必须使用YAML格式，注意缩进和冒号后的空格。

### 4. 图片路径
图片路径必须以 `/` 开头，指向 `public/` 目录下的文件。

### 5. 特殊字符
在frontmatter中避免使用特殊字符，如引号、冒号等。

## 🐛 常见问题

### 内容没有更新
1. 确认运行了 `pnpm run build:content`
2. 检查frontmatter格式是否正确
3. 刷新浏览器缓存

### 构建错误
1. 检查YAML语法是否正确
2. 确保所有必需字段都已填写
3. 检查文件编码是否为UTF-8

### 图片不显示
1. 确认图片在 `public/images/` 目录中
2. 检查图片路径是否正确
3. 确认图片文件存在

### 页面显示异常
1. 检查控制台是否有错误信息
2. 确认所有必需字段都已填写
3. 检查Markdown语法是否正确

## 📞 获取帮助

如果遇到问题：

1. **检查文档**: 查看 `CONTENT_MANAGEMENT.md` 获取详细说明
2. **查看示例**: 参考现有的Markdown文件格式
3. **检查控制台**: 查看浏览器控制台的错误信息
4. **验证格式**: 使用在线YAML验证器检查frontmatter格式

## 🎯 最佳实践

1. **定期备份**: 定期备份 `content/` 目录
2. **版本控制**: 使用Git跟踪内容变更
3. **测试修改**: 修改后及时查看效果
4. **保持格式**: 保持一致的Markdown格式
5. **优化图片**: 压缩图片以提高加载速度

---

**记住**: 修改内容后一定要运行 `pnpm run build:content` 命令！