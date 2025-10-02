---
# Personal Information / 个人信息
name_en: "[REPLACE] Your full name in English"
name_zh: "[替换] 你的中文姓名"
title_en: "[REPLACE] English title (e.g. Senior Software Engineer)"
title_zh: "[替换] 中文头衔（例如：高级软件工程师）"
location_en: "[REPLACE] English location (e.g. Brazil)"
location_zh: "[替换] 中文所在地（例如：巴西）"
email: "[REPLACE] your-email@example.com"
github: "[REPLACE] github.com/yourname"
linkedin: "[REPLACE] linkedin.com/in/yourname"

# Education / 教育经历
education:
  - degree_en: "[REPLACE] Degree name in English (e.g. M.Sc. in Computer Science)"
    degree_zh: "[替换] 中文学历名称（例如：计算机科学硕士）"
    school_en: "[REPLACE] School name in English (e.g. University Name)"
    school_zh: "[替换] 中文学校名称（例如：大学名称）"
    period: "[REPLACE] Time range（示例：2018 - 2020 / 年份区间）"
    gpa_en: "[OPTIONAL] GPA in English (e.g. 3.8/4.0)"
    gpa_zh: "[可选] 中文GPA（例如：3.8/4.0）"
    description_en: "[REPLACE] Brief highlights in English (learning focus/research topics)"
    description_zh: "[替换] 中文简要说明（学习方向/研究主题）"
    courses_en:
      - "[REPLACE] Key course 1 in English"
      - "[REPLACE] Key course 2 in English"
      - "[REPLACE] Key course 3 in English"
    courses_zh:
      - "[替换] 核心课程1（中文）"
      - "[替换] 核心课程2（中文）"
      - "[替换] 核心课程3（中文）"
  
  - degree_en: "[OPTIONAL] Another degree in English"
    degree_zh: "[可选] 其它学历（中文）"
    school_en: "[REPLACE] School name in English"
    school_zh: "[替换] 学校名称（中文）"
    period: "[REPLACE] Time range"
    gpa_en: "[OPTIONAL] GPA in English"
    gpa_zh: "[可选] GPA（中文）"
    description_en: "[OPTIONAL] Brief description in English"
    description_zh: "[可选] 简要描述（中文）"
    courses_en:
      - "[OPTIONAL] Course in English"
    courses_zh:
      - "[可选] 课程（中文）"

# About Me / 关于我
about: "[REPLACE] Your English summary（英文个人简介，2-4句）"
about_en: "[REPLACE] Same as above or refined English summary"
about_zh: "[替换] 中文个人简介（2-4句，突出方向与优势）"

# Contact Information / 联系方式
contact:
  title_en: "Contact"
  title_zh: "联系方式"
  description_en: "[REPLACE] Short call-to-action in English"
  description_zh: "[替换] 简短的联系说明（中文）"
  email: "[REPLACE] Contact email"
  location: "[REPLACE] Default location"
  location_en: "[REPLACE] English location"
  location_zh: "[替换] 中文所在地"
  github: "[REPLACE] github.com/yourname"
  linkedin: "[REPLACE] linkedin.com/in/yourname"
---

# Page Intro / 页面说明

Use this file to configure your homepage profile, education, summary and contact info. Replace all [REPLACE]/[替换] placeholders with your real information, then run:

```bash
pnpm run build:content
```

构建后主页会自动读取以上配置并根据语言切换展示对应内容。
