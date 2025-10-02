// This file is auto-generated. Do not edit manually.
// Run 'pnpm run build:content' to regenerate.

import type { HomeData } from './home-data'

export const homeEn: HomeData = {
  "name_en": "[REPLACE] Your full name in English",
  "name_zh": "[替换] 你的中文姓名",
  "title_en": "[REPLACE] English title (e.g. Senior Software Engineer)",
  "title_zh": "[替换] 中文头衔（例如：高级软件工程师）",
  "location_en": "[REPLACE] English location (e.g. Brazil)",
  "location_zh": "[替换] 中文所在地（例如：巴西）",
  "email": "[REPLACE] your-email@example.com",
  "github": "[REPLACE] github.com/yourname",
  "linkedin": "[REPLACE] linkedin.com/in/yourname",
  "education": [
    {
      "degree": "[REPLACE] Degree name in English (e.g. M.Sc. in Computer Science)",
      "school": "[REPLACE] School name in English (e.g. University Name)",
      "period": "[REPLACE] Time range（示例：2018 - 2020 / 年份区间）",
      "gpa": "[OPTIONAL] GPA in English (e.g. 3.8/4.0)",
      "description": "[REPLACE] Brief highlights in English (learning focus/research topics)",
      "courses": [
        "[REPLACE] Key course 1 in English",
        "[REPLACE] Key course 2 in English",
        "[REPLACE] Key course 3 in English"
      ]
    },
    {
      "degree": "[OPTIONAL] Another degree in English",
      "school": "[REPLACE] School name in English",
      "period": "[REPLACE] Time range",
      "gpa": "[OPTIONAL] GPA in English",
      "description": "[OPTIONAL] Brief description in English",
      "courses": [
        "[OPTIONAL] Course in English"
      ]
    }
  ],
  "about": "[REPLACE] Same as above or refined English summary",
  "about_en": "[REPLACE] Same as above or refined English summary",
  "about_zh": "[替换] 中文个人简介（2-4句，突出方向与优势）",
  "contact": {
    "title_en": "Contact",
    "title_zh": "联系方式",
    "description_en": "[REPLACE] Short call-to-action in English",
    "description_zh": "[替换] 简短的联系说明（中文）",
    "email": "[REPLACE] Contact email",
    "location": "[REPLACE] English location",
    "location_en": "[REPLACE] English location",
    "location_zh": "[替换] 中文所在地",
    "github": "[REPLACE] github.com/yourname",
    "linkedin": "[REPLACE] linkedin.com/in/yourname",
    "title": "Contact",
    "description": "[REPLACE] Short call-to-action in English"
  },
  "name": "[REPLACE] Your full name in English",
  "title": "[REPLACE] English title (e.g. Senior Software Engineer)",
  "location": "[REPLACE] English location (e.g. Brazil)"
}
export const homeZh: HomeData = {
  "name_en": "[REPLACE] Your full name in English",
  "name_zh": "[替换] 你的中文姓名",
  "title_en": "[REPLACE] English title (e.g. Senior Software Engineer)",
  "title_zh": "[替换] 中文头衔（例如：高级软件工程师）",
  "location_en": "[REPLACE] English location (e.g. Brazil)",
  "location_zh": "[替换] 中文所在地（例如：巴西）",
  "email": "[REPLACE] your-email@example.com",
  "github": "[REPLACE] github.com/yourname",
  "linkedin": "[REPLACE] linkedin.com/in/yourname",
  "education": [
    {
      "degree": "[替换] 中文学历名称（例如：计算机科学硕士）",
      "school": "[替换] 中文学校名称（例如：大学名称）",
      "period": "[REPLACE] Time range（示例：2018 - 2020 / 年份区间）",
      "gpa": "[可选] 中文GPA（例如：3.8/4.0）",
      "description": "[替换] 中文简要说明（学习方向/研究主题）",
      "courses": [
        "[替换] 核心课程1（中文）",
        "[替换] 核心课程2（中文）",
        "[替换] 核心课程3（中文）"
      ]
    },
    {
      "degree": "[可选] 其它学历（中文）",
      "school": "[替换] 学校名称（中文）",
      "period": "[REPLACE] Time range",
      "gpa": "[可选] GPA（中文）",
      "description": "[可选] 简要描述（中文）",
      "courses": [
        "[可选] 课程（中文）"
      ]
    }
  ],
  "about": "[替换] 中文个人简介（2-4句，突出方向与优势）",
  "about_en": "[REPLACE] Same as above or refined English summary",
  "about_zh": "[替换] 中文个人简介（2-4句，突出方向与优势）",
  "contact": {
    "title_en": "Contact",
    "title_zh": "联系方式",
    "description_en": "[REPLACE] Short call-to-action in English",
    "description_zh": "[替换] 简短的联系说明（中文）",
    "email": "[REPLACE] Contact email",
    "location": "[替换] 中文所在地",
    "location_en": "[REPLACE] English location",
    "location_zh": "[替换] 中文所在地",
    "github": "[REPLACE] github.com/yourname",
    "linkedin": "[REPLACE] linkedin.com/in/yourname",
    "title": "联系方式",
    "description": "[替换] 简短的联系说明（中文）"
  },
  "name": "[替换] 你的中文姓名",
  "title": "[替换] 中文头衔（例如：高级软件工程师）",
  "location": "[替换] 中文所在地（例如：巴西）"
}

export function getHomeData(lang: 'en' | 'zh') {
  return lang === 'zh' ? homeZh : homeEn
}
