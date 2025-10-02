// This file is auto-generated. Do not edit manually.
// Run 'pnpm run build:content' to regenerate.

export type HomeData = {
  name: string
  title: string
  location: string
  email: string
  github: string
  linkedin: string
  education: Array<{
    degree: string
    school: string
    period: string
    gpa: string
    description: string
    courses: string[]
  }>
  about: string
  contact: {
    title: string
    description: string
    email: string
    location: string
    github: string
    linkedin: string
  }
}

export const homeData: HomeData = {
  "name": "[REPLACE] Your full name in English",
  "title": "[REPLACE] English title (e.g. Senior Software Engineer)",
  "location": "[REPLACE] English location (e.g. Brazil)",
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
  "contact": {
    "title": "Contact",
    "description": "[REPLACE] Short call-to-action in English",
    "email": "[REPLACE] Contact email",
    "location": "[REPLACE] English location",
    "github": "[REPLACE] github.com/yourname",
    "linkedin": "[REPLACE] linkedin.com/in/yourname"
  }
}
