# Home.md 模板使用指南

## 📋 概述

`content/home.md` 文件控制着网站首页的个人信息展示。该文件支持模板模式，当检测到模板标记时会自动使用默认数据，避免在网站上显示 `[待替换]` 标记。

## 🔧 模板检测机制

构建脚本会自动检测 `home.md` 是否包含以下模板标记：
- `[待替换]`
- `[To be replace]`
- `[待替换waiting]`
- `[To be replace waiting]`

如果检测到这些标记，系统会：
1. 显示警告信息：`⚠️ home.md is detected as template, using default data`
2. 使用预设的默认数据替代模板内容
3. 确保网站显示的是完整的信息而不是模板标记

## 📝 使用方法

### 方法一：使用模板（推荐新手）

1. **保持当前模板格式**：不要修改 `[待替换]` 标记
2. **运行构建**：`pnpm run build:content`
3. **查看效果**：网站会显示默认的示例数据

### 方法二：填写实际内容

1. **复制模板**：复制 `content/home.md` 文件
2. **替换标记**：将所有 `[待替换]` 标记替换为实际信息
3. **运行构建**：`pnpm run build:content`
4. **查看效果**：网站会显示您填写的实际数据

## 📊 字段说明

### 个人信息 (Personal Information)
- `name_en/name_zh`: 英文/中文姓名
- `title_en/title_zh`: 英文/中文职业头衔
- `location_en/location_zh`: 英文/中文所在地
- `email`: 邮箱地址
- `github`: GitHub 用户名或链接
- `linkedin`: LinkedIn 用户名或链接

### 教育背景 (Education)
- `degree_en/degree_zh`: 英文/中文学位名称
- `school_en/school_zh`: 英文/中文学校名称
- `period_en/period_zh`: 英文/中文时间范围
- `gpa`: 绩点（可选）
- `description_en/description_zh`: 英文/中文描述
- `courses_en/courses_zh`: 英文/中文核心课程列表

### 个人简介 (About Me)
- `about_en`: 英文个人简介（2-4句话）
- `about_zh`: 中文个人简介（2-4句话）

## 🎯 示例

### 模板格式（会被替换为默认数据）
```yaml
name_en: "[To be replace waiting] Your full name in English"
name_zh: "[待替换waiting] 你的中文姓名"
title_en: "[To be replace waiting] English title (e.g. Senior Software Engineer)"
```

### 实际内容格式（会显示在网站上）
```yaml
name_en: "John Doe"
name_zh: "约翰·多伊"
title_en: "Senior Software Engineer"
```

## 🚀 构建和部署

1. **修改内容**：编辑 `content/home.md` 文件
2. **构建内容**：运行 `pnpm run build:content`
3. **启动开发服务器**：运行 `pnpm run dev`
4. **查看效果**：在浏览器中查看网站首页

## ⚠️ 注意事项

1. **模板标记**：如果文件中包含 `[待替换]` 等标记，系统会自动使用默认数据
2. **YAML 格式**：确保 YAML 语法正确，特别是缩进
3. **编码格式**：使用 UTF-8 编码保存文件
4. **构建顺序**：修改内容后必须运行 `pnpm run build:content`

## 🔍 故障排除

### 问题：修改后网站没有更新
**解决方案**：
1. 确认已运行 `pnpm run build:content`
2. 检查控制台是否有错误信息
3. 确认文件保存成功

### 问题：网站显示模板标记
**解决方案**：
1. 检查是否包含 `[待替换]` 等标记
2. 如果不想显示模板标记，请填写实际内容
3. 如果希望显示默认数据，保持模板格式即可

### 问题：构建失败
**解决方案**：
1. 检查 YAML 语法是否正确
2. 确认文件编码为 UTF-8
3. 查看错误信息并修复

## 📞 支持

如果遇到问题，请：
1. 检查构建日志中的错误信息
2. 确认文件格式和内容正确
3. 参考本文档的故障排除部分

---

*Happy coding! 🎉*
