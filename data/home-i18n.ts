// This file is auto-generated. Do not edit manually.
// Run 'pnpm run build:content' to regenerate.

// Simplified HomeData type - no redundancy
export type HomeData = {
  name: string
  title: string
  location: string
  email: string
  github: string
  linkedin: string
  about: string
  education: Array<{
    degree: string
    school: string
    period: string
    gpa: string
    description: string
    courses: string[]
  }>
  contact: {
    email: string
    location: string
    github: string
    linkedin: string
  }
}

export const homeEn: HomeData = {
  "name": "[待替换waiting] Your full name in English",
  "title": "[待替换waiting] English title (e.g. Senior Software Engineer)",
  "location": "[待替换waiting] English location (e.g. Brazil)",
  "email": "[待替换waiting] your-email@example.com",
  "github": "[待替换waiting] github.com/yourname",
  "linkedin": "[待替换waiting] linkedin.com/in/yourname",
  "about": "[待替换waiting] Your English summary (2-4 sentences)",
  "education": [
    {
      "degree": "[待替换waiting] Degree name in English (e.g. M.Sc. in Computer Science)",
      "school": "[待替换waiting] School name in English (e.g. University Name)",
      "period": "[待替换waiting] Time range (e.g. 2018 - 2020)",
      "gpa": "[OPTIONAL] GPA (e.g. 3.8/4.0)",
      "description": "[待替换waiting] Brief highlights in English (learning focus/research topics)",
      "courses": [
        "[待替换waiting] Key course 1 in English",
        "[待替换waiting] Key course 2 in English",
        "[待替换waiting] Key course 3 in English"
      ]
    }
  ],
  "contact": {
    "email": "[待替换waiting] your-email@example.com",
    "location": "[待替换waiting] English location (e.g. Brazil)",
    "github": "[待替换waiting] github.com/yourname",
    "linkedin": "[待替换waiting] linkedin.com/in/yourname"
  }
}
export const homeZh: HomeData = {
  "name": "[待替换waiting] 你的中文姓名",
  "title": "[待替换waiting] 中文头衔（例如：高级软件工程师）",
  "location": "[待替换waiting] 中文所在地（例如：巴西）",
  "email": "[待替换waiting] your-email@example.com",
  "github": "[待替换waiting] github.com/yourname",
  "linkedin": "[待替换waiting] linkedin.com/in/yourname",
  "about": "[待替换waiting] 中文个人简介（2-4句，突出方向与优势）",
  "education": [
    {
      "degree": "[待替换waiting] 中文学历名称（例如：计算机科学硕士）",
      "school": "[待替换waiting] 中文学校名称（例如：大学名称）",
      "period": "[待替换waiting] 时间范围（例如：2018 - 2020）",
      "gpa": "[OPTIONAL] GPA (e.g. 3.8/4.0)",
      "description": "[待替换waiting] 中文简要说明（学习方向/研究主题）",
      "courses": [
        "[待替换waiting] 核心课程1（中文）",
        "[待替换waiting] 核心课程2（中文）",
        "[待替换waiting] 核心课程3（中文）"
      ]
    }
  ],
  "contact": {
    "email": "[待替换waiting] your-email@example.com",
    "location": "[待替换waiting] 中文所在地（例如：巴西）",
    "github": "[待替换waiting] github.com/yourname",
    "linkedin": "[待替换waiting] linkedin.com/in/yourname"
  }
}

export function getHomeData(lang: 'en' | 'zh') {
  return lang === 'zh' ? homeZh : homeEn
}
