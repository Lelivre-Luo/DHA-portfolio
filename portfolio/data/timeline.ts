export interface TimelineItem {
  id: string
  type: 'education' | 'achievement' | 'project'
  title: string
  subtitle: string
  period: string
  location?: string
  status?: string
  description?: string
  data: any
}

export function getTimelineData(language: 'zh' | 'en'): TimelineItem[] {
  const educationData = {
    zh: [
      {
        degree: '设计（未来媒体与交互设计）专业硕士',
        university: '中国传媒大学',
        location: '中国 北京',
        period: '2024. 9 - 2026. 8',
        gpa: 'GPA：前5%',
        advisor: '吕欣 教授',
        thesis: '毕业设计：沉浸式交互作品《数字之心》',
        thesisDescription:
          '由人工智能管理的人类社会"摇篮"，人类脱离了动物、植物等其他生物独自生存，物质性的缺失导致人类丢失了对动物、植物等其他生物的感性体验……在人工智能创造的"摇篮"中，一个人类产生了对"真实的花"的追求…… 一场在虚拟现实的沉浸场域下的科幻叙事，一场与智能交互数字人的交互实验，一场人类和人工智能的思考……',
        coursework: ['未来媒体与智能设计实践', '数字设计与智能生成技术', '项目实训', '开放性实训', 'Unreal Engine工作坊', 'AIGC工作坊'],
      },
      {
        degree: '数字媒体技术学士',
        university: '中国传媒大学',
        location: '中国 北京',
        period: '2020. 9 - 2024. 8',
        gpa: 'GPA：前5%',
        thesis: '毕业设计：计算驱动型虚拟数字人的研究与实现',
        thesisDescription:
          'ChatGPT的问世，让我们看到与人工智能进行互动的可能──完全由计算驱动的虚拟数字人已然不是幻想，而是现实，真正的"虚拟主播"、"虚拟伴侣"正在向我们走来。',
        coursework: ['C++语言程序设计', '数据结构与算法', '虚拟现实技术', '计算机图形学', '人机交互技术', '线性代数', '高等数学'],
      },
    ],
    en: [
      {
        degree: 'Master in Design (Future Media and Interaction Design)',
        university: 'Communication University of China',
        location: 'Beijing, China',
        period: 'Sept 2024 - Aug 2026',
        gpa: 'GPA: Top 5%',
        advisor: 'Advisor: Prof. Lv Xin',
        thesis: "Graduation Project: Interactive Work 'Digital Heart'",
        thesisDescription:
          "In the 'Cradle,' a human society managed by AI, humanity lives isolated from other life forms like animals and plants. This material void leads to a loss of sensory experience with the natural world. Within this AI-created 'Cradle,' a human develops a longing for a 'real flower.' This project is a sci-fi narrative within an immersive virtual reality field, an interactive experiment with an intelligent digital human, and a contemplation on humanity and artificial intelligence.",
        coursework: [
          'Future Media and Intelligent Design Practice',
          'Digital Design and Intelligent Generation Technology',
          'Project Training',
          'Open Training',
          'Unreal Engine Workshop',
          'AIGC Workshop',
        ],
      },
      {
        degree: 'B.E. in Digital Media Technology',
        university: 'Communication University of China',
        location: 'Beijing, China',
        period: 'Sept 2020 - Aug 2024',
        gpa: 'GPA: Top 5%',
        thesis:
          'Graduation Project: Research and Implementation of Computation-Driven Virtual Digital Human',
        thesisDescription:
          "The advent of ChatGPT has shown us the potential for interaction with artificial intelligence. Fully computation-driven virtual digital humans are no longer a fantasy, but a reality. True 'virtual streamers' and 'virtual companions' are now approaching.",
        coursework: [
          'C++ Programming Language',
          'Data Structures & Algorithms',
          'Virtual Reality Technology',
          'Computer Graphics',
          'Human-Computer Interaction Technology',
          'Linear Algebra',
          'Advanced Mathematics',
        ],
      },
    ],
  }

  const achievementsData = {
    zh: [
      {
        title:
          "Li Bai the Youth: An LLM-Powered Virtual Agent for Children's Chinese Poetry Education",
        organization: 'SIGGRAPH Asia 2024',
        date: '2024年12月',
        location: 'SIGGRAPH Asia 2024',
        description:
          'Large language models (LLMs) are increasingly recognized for their potential, but their application in fostering children\'s poetry learning remains underexplored. This paper introduces Li Bai the Youth, an interactive installation that leverages a virtual agent powered by an LLM. We present a technical pipeline incorporating text-to-speech, lip synchronization, and other functionalities to enable real-time conversation between users and the virtual agent, Li Bai. Additionally, we implemented strategies to enhance the user experience during interaction. Li Bai the Youth offers a novel approach to poetry learning, promoting cultural heritage engagement.',
        type: 'publication' as const,
        level: 'international' as const,
        authors: 'Yurun Chen, Xin Lyu, Tianzhao Li, Zihan Gao',
        venue: 'SIGGRAPH Asia 2024',
        paperurl: 'https://dl.acm.org/doi/10.1145/3681756.3697967',
        excerpt:
          "This poster presents 'Li Bai the Youth,' an LLM-powered virtual agent designed to make learning classical Chinese poetry engaging and interactive for children.",
      },
      {
        title:
          'TRiMM: Transformer-Based Rich Motion Matching for Real-Time multi-modal Interaction in Digital Humans',
        organization: '拟发CCF B类国际会议',
        date: '2025年（未发表）',
        location: '拟投国际会议',
        description:
          'Large Language Model (LLM)-driven digital humans have sparked a series of recent studies on co-speech gesture generation systems. However, existing approaches struggle with real-time synthesis and long-text comprehension. This paper introduces Transformer-Based Rich Motion Matching (TRiMM), a novel multi-modal framework for real-time 3D gesture generation. Our method incorporates three modules: 1) a cross-modal attention mechanism to achieve precise temporal alignment between speech and gestures; 2) a long-context autoregressive model with a sliding window mechanism for effective sequence modeling; 3) a large-scale gesture matching system that constructs an atomic action library and enables real-time retrieval. Additionally, we develop a lightweight pipeline implemented in the Unreal Engine for experimentation. Our approach achieves real-time inference at 120 fps and maintains a per-sentence latency of 0.15 seconds on consumer-grade GPUs (Geforce RTX3060). Extensive subjective and objective evaluations on the ZEGGS, and BEAT datasets demonstrate that our model outperforms current state-of-the-art methods. TRiMM enhances the speed of co-speech gesture generation while ensuring gesture quality, enabling LLM-driven digital humans to respond to speech in real time and synthesize corresponding gestures.',
        type: 'under_review' as const,
        level: 'international' as const,
        authors:
          'Yueqian Guo, Tianzhao Li, Xin Lyu, Jiehaolin Chen, Zhaohan Wang, Sirui Xiao, Yurun Chen, Yezi He, Helin Li, Fan Zhang',
        venue: '拟发CCF B类国际会议',
        paperurl: 'https://arxiv.org/abs/2506.01077',
        excerpt:
          'A Transformer-based Motion Matching that realize real-time synthesis and long-text comprehension of Virtual Digital Humans.',
      },
    ],
    en: [
      {
        title:
          "Li Bai the Youth: An LLM-Powered Virtual Agent for Children's Chinese Poetry Education",
        organization: 'SIGGRAPH Asia 2024',
        date: 'December 2024',
        location: 'SIGGRAPH Asia 2024',
        description:
          'Large language models (LLMs) are increasingly recognized for their potential, but their application in fostering children\'s poetry learning remains underexplored. This paper introduces Li Bai the Youth, an interactive installation that leverages a virtual agent powered by an LLM. We present a technical pipeline incorporating text-to-speech, lip synchronization, and other functionalities to enable real-time conversation between users and the virtual agent, Li Bai. Additionally, we implemented strategies to enhance the user experience during interaction. Li Bai the Youth offers a novel approach to poetry learning, promoting cultural heritage engagement.',
        type: 'publication' as const,
        level: 'international' as const,
        authors: 'Yurun Chen, Xin Lyu, Tianzhao Li, Zihan Gao',
        venue: 'SIGGRAPH Asia 2024',
        paperurl: 'https://dl.acm.org/doi/10.1145/3681756.3697967',
        excerpt:
          "This poster presents 'Li Bai the Youth,' an LLM-powered virtual agent designed to make learning classical Chinese poetry engaging and interactive for children.",
      },
      {
        title:
          'TRiMM: Transformer-Based Rich Motion Matching for Real-Time multi-modal Interaction in Digital Humans',
        organization: 'Under Review (CCF B Conference)',
        date: '2025 (Under Review)',
        location: 'International Conference',
        description:
          'Large Language Model (LLM)-driven digital humans have sparked a series of recent studies on co-speech gesture generation systems. However, existing approaches struggle with real-time synthesis and long-text comprehension. This paper introduces Transformer-Based Rich Motion Matching (TRiMM), a novel multi-modal framework for real-time 3D gesture generation. Our method incorporates three modules: 1) a cross-modal attention mechanism to achieve precise temporal alignment between speech and gestures; 2) a long-context autoregressive model with a sliding window mechanism for effective sequence modeling; 3) a large-scale gesture matching system that constructs an atomic action library and enables real-time retrieval. Additionally, we develop a lightweight pipeline implemented in the Unreal Engine for experimentation. Our approach achieves real-time inference at 120 fps and maintains a per-sentence latency of 0.15 seconds on consumer-grade GPUs (Geforce RTX3060). Extensive subjective and objective evaluations on the ZEGGS, and BEAT datasets demonstrate that our model outperforms current state-of-the-art methods. TRiMM enhances the speed of co-speech gesture generation while ensuring gesture quality, enabling LLM-driven digital humans to respond to speech in real time and synthesize corresponding gestures.',
        type: 'under_review' as const,
        level: 'international' as const,
        authors:
          'Yueqian Guo, Tianzhao Li, Xin Lyu, Jiehaolin Chen, Zhaohan Wang, Sirui Xiao, Yurun Chen, Yezi He, Helin Li, Fan Zhang',
        venue: 'Under Review (CCF B Conference)',
        paperurl: 'https://arxiv.org/abs/2506.01077',
        excerpt:
          'A Transformer-based Motion Matching that realize real-time synthesis and long-text comprehension of Virtual Digital Humans.',
      },
    ],
  }

  const projectsData = {
    zh: [
      {
        title: 'VSPO-电竞赛事直转播系统',
        description:
          '合作Apple Vision Pro电竞赛事直转播系统的交互系统设计，负责设计观赛界面的布局与交互、三维地图的交互、沉浸式赛场场景、赛事数据的数据存储结构。使用AVPlayer框架和Windows框架开发了观赛界面及其配套交互逻辑，使用RealityKit框架和Space框架开发了三维地图的交互逻辑、沉浸式赛场场景，使用Insta 360和HLS协议实现了赛事直播流的接入、实时沉浸式赛场场景。',
        period: '2024年5月 - 2025年9月',
        role: '交互设计/开发',
        technologies: ['Swift', 'AVPlayer', 'RealityKit', 'Material'],
        achievements: [
          '项目设计：合作Apple Vision Pro电竞赛事直转播系统的交互系统设计',
          '技术评估：负责项目开发技术评估，包括观赛界面构建、三维地图模型交互等技术栈路径评估',
          '项目开发：使用AVPlayer框架和Windows框架开发观赛界面及其配套交互逻辑',
          '技术交流：负责项目开发的技术分享与交流，与Apple公司Vision Pro设计师进行技术交流',
        ],
        collaborators: '与Apple公司合作',
        status: 'ongoing' as const,
        links: {},
      },
      {
        title: '多模态智能交互虚拟数字人',
        description:
          '合作开发多模态智能交互数字人。借鉴Bert-VITS2项目，使用ONNX框架、数据分块思维，开发了兼顾发音准确性、发音连贯性、语调的语音生成系统。使用数据分块思维开发流式语音生成系统，攻克了语音生成模型在加载和推理时产生的高延迟问题，将虚拟数字人的回应延迟由3s缩短至1s。',
        period: '2023年10月 - 至今',
        role: '交互设计/开发/运营',
        technologies: ['Python', 'GME', 'ChatGPT API', 'Bert-VITS2', 'Omniverse Audio2Face', 'multiprocess'],
        achievements: [
          '项目开发：合作开发多模态智能交互数字人，使用ONNX框架、数据分块思维开发语音生成系统',
          '项目运营：负责2024 BIRTV中国传媒大学数字人研究院《少年李白》项目运营',
          '学术成果孵化：提供技术支持与技术文档，辅助实验室成员完成学术成果孵化',
          '技术优化：使用数据分块思维开发流式语音生成系统，攻克高延迟问题',
        ],
        collaborators: '与中国传媒大学实验室团队、百度合作',
        status: 'ongoing' as const,
        video: '/assets/videos/LibaiTheYouth.mp4',
        links: {},
      },
      {
        title: 'TRiMM',
        description:
          '合作开发基于Transformer框架的虚拟数字人动作匹配和生成系统，动作生成的延迟控制在0.2s之内。使用Bert和Wav2Vec2模型开发语义提取模块、使用动作图模型开发动作图与动作搜索逻辑模块。负责项目整体的测试与优化，负责用户调研实验的制定与数据整理、分析。',
        period: '2024年10月 - 至今',
        role: '研发',
        technologies: ['Transformer', 'Temporal-Space attention', 'Bert', 'WAV2VEC2', 'websocket'],
        achievements: [
          '项目开发：合作开发基于Transformer框架的虚拟数字人动作匹配和生成系统',
          '技术实现：使用Bert和Wav2Vec2模型开发语义提取模块、动作图模型开发动作图与动作搜索逻辑模块',
          '项目测试：负责项目整体的测试与优化',
          '学术成果孵化：负责用户调研实验的制定与数据整理、分析',
        ],
        collaborators: '与实验室团队合作',
        status: 'ongoing' as const,
        links: {},
      },
      {
        title: 'Jump Jump @ Kinect',
        description:
          '合作开发Kinect体感交互的"跳一跳"运动小游戏程序。使用Kinect传感器和Kinect for Windows SDK v2开发了特定动作状态识别系统、多阶段的姿态检测算法并驱动"跳一跳"小游戏系统。',
        period: '2023年5月 - 2023年6月',
        role: '交互设计/开发',
        technologies: ['Kinect SDK'],
        achievements: [
          '项目开发：合作开发Kinect体感交互的"跳一跳"运动小游戏程序',
          '技术实现：使用Kinect传感器和Kinect for Windows SDK v2开发特定动作状态识别系统',
          '算法开发：开发多阶段的姿态检测算法并驱动"跳一跳"小游戏系统',
        ],
        collaborators: '与团队合作开发',
        status: 'completed' as const,
        video: '/assets/videos/JumpJumpofKinect.mp4',
        links: {},
      },
      {
        title: '《数字之心》',
        description:
          '负责《数字之心》沉浸式虚拟数字人交互项目从概念阶段到技术落地的全流程策划。负责核心概念和剧情的编写，负责制定虚拟数字人的技术路线，负责沉浸式体验场景的开发平台、开发框架选择，制定沉浸式体验场景的交互形式、开发路线。使用LLM、LangChain、Embedding模型等开发了可以进行多层次思考、具备长期记忆能力和记忆总结能力、可以自主执行动作指令的AI-Agent。',
        period: '2025年6月 - 至今',
        role: '项目策划/交互设计/项目开发',
        technologies: ['OpenXR', 'LangChain', 'LLM', 'Embedding', 'Websocket'],
        achievements: [
          '项目策划：负责《数字之心》沉浸式虚拟数字人交互项目从概念阶段到技术落地的全流程策划',
          '交互设计：负责AI Agent虚拟数字人、VR沉浸空间的交互设计',
          '项目开发：使用LLM、LangChain、Embedding模型等开发AI-Agent',
          '技术集成：使用OpenXR架构、Websocket框架和Unreal Engine平台开发VR沉浸式体验交互',
        ],
        collaborators: '独立项目',
        status: 'ongoing' as const,
        links: {},
      },
    ],
    en: [
      {
        title: 'VSPO-Esports Live Broadcasting System',
        description:
          'Collaborated on Apple Vision Pro esports live broadcasting system interaction design, responsible for designing spectator interface layout and interaction, 3D map interaction, immersive arena scenes, and event data storage structure. Developed spectator interface and supporting interaction logic using AVPlayer framework and Windows framework, developed 3D map interaction logic and immersive arena scenes using RealityKit framework and Space framework, implemented event live stream integration and real-time immersive arena scenes using Insta 360 and HLS protocol.',
        period: 'May 2024 - Sept 2025',
        role: 'Interaction Design/Development',
        technologies: ['Swift', 'AVPlayer', 'RealityKit', 'Material'],
        achievements: [
          'Project Design: Collaborated on Apple Vision Pro esports live broadcasting system interaction design',
          'Technical Assessment: Responsible for project development technical assessment including spectator interface construction and 3D map model interaction',
          'Project Development: Developed spectator interface and supporting interaction logic using AVPlayer framework and Windows framework',
          'Technical Exchange: Responsible for technical sharing and exchange, conducted technical exchanges with Apple Vision Pro designers',
        ],
        collaborators: 'Collaborated with Apple Inc.',
        status: 'ongoing' as const,
      },
      {
        title: 'Multimodal Intelligent Interactive Virtual Digital Human',
        description:
          'Collaborated on developing multimodal intelligent interactive digital human. Drawing from Bert-VITS2 project, used ONNX framework and data chunking approach to develop speech generation system that balances pronunciation accuracy, pronunciation coherence, and intonation. Developed streaming speech generation system using data chunking approach, solved high latency issues during model loading and inference, reduced virtual digital human response delay from 3s to 1s.',
        period: 'Oct 2023 - Present',
        role: 'Interaction Design/Development/Operations',
        technologies: ['Python', 'GME', 'ChatGPT API', 'Bert-VITS2', 'Omniverse Audio2Face', 'multiprocess'],
        achievements: [
          'Project Development: Collaborated on developing multimodal intelligent interactive digital human using ONNX framework and data chunking approach',
          'Project Operations: Led 2024 BIRTV Communication University of China Digital Human Research Institute \"Li Bai the Youth\" project operations',
          'Academic Incubation: Provided technical support and documentation to assist lab members in academic achievement incubation',
          'Technical Optimization: Developed streaming speech generation system using data chunking approach to solve high latency issues',
        ],
        collaborators: 'Collaborated with CUC Lab team and Baidu',
        status: 'ongoing' as const,
        video: '/assets/videos/LibaiTheYouth.mp4',
      },
      {
        title: 'TRiMM',
        description:
          'Collaborated on developing Transformer-based virtual digital human motion matching and generation system, controlling motion generation latency within 0.2s. Developed semantic extraction module using Bert and Wav2Vec2 models, developed motion graph and motion search logic module using motion graph models. Responsible for overall project testing and optimization, user research experiment design and data collection and analysis.',
        period: 'Oct 2024 - Present',
        role: 'Research & Development',
        technologies: ['Transformer', 'Temporal-Space attention', 'Bert', 'WAV2VEC2', 'websocket'],
        achievements: [
          'Project Development: Collaborated on developing Transformer-based virtual digital human motion matching and generation system',
          'Technical Implementation: Developed semantic extraction module using Bert and Wav2Vec2 models, motion graph and motion search logic module',
          'Project Testing: Responsible for overall project testing and optimization',
          'Academic Incubation: Responsible for user research experiment design and data collection and analysis',
        ],
        collaborators: 'Collaborated with lab team',
        status: 'ongoing' as const,
      },
      {
        title: 'Jump Jump @ Kinect',
        description:
          "Collaborated on developing Kinect motion-sensing 'Jump Jump' sports mini-game program. Used Kinect sensor and Kinect for Windows SDK v2 to develop specific action state recognition system, multi-stage pose detection algorithm and drive 'Jump Jump' mini-game system.",
        period: 'May 2023 - June 2023',
        role: 'Interaction Design/Development',
        technologies: ['Kinect SDK'],
        achievements: [
          "Project Development: Collaborated on developing Kinect motion-sensing 'Jump Jump' sports mini-game program",
          'Technical Implementation: Developed specific action state recognition system using Kinect sensor and Kinect for Windows SDK v2',
          "Algorithm Development: Developed multi-stage pose detection algorithm and drove 'Jump Jump' mini-game system",
        ],
        collaborators: 'Collaborated with team',
        status: 'completed' as const,
        video: '/assets/videos/JumpJumpofKinect.mp4',
      },
      {
        title: 'Digital Heart',
        description:
          "Responsible for full-process planning of 'Digital Heart' immersive virtual digital human interaction project from concept stage to technical implementation. Responsible for core concept and storyline writing, virtual digital human technical roadmap planning, immersive experience scene development platform and framework selection, immersive experience scene interaction form and development roadmap planning. Used LLM, LangChain, Embedding models to develop AI-Agent capable of multi-level thinking, long-term memory and memory summarization, and autonomous action execution.",
        period: 'June 2025 - Present',
        role: 'Project Planning/Interaction Design/Development',
        technologies: ['OpenXR', 'LangChain', 'LLM', 'Embedding', 'Websocket'],
        achievements: [
          "Project Planning: Responsible for full-process planning of 'Digital Heart' immersive virtual digital human interaction project from concept to technical implementation",
          'Interaction Design: Responsible for AI Agent virtual digital human and VR immersive space interaction design',
          'Project Development: Developed AI-Agent using LLM, LangChain, Embedding models',
          'Technical Integration: Developed VR immersive experience interaction using OpenXR architecture, Websocket framework and Unreal Engine platform',
        ],
        collaborators: 'Independent project',
        status: 'ongoing' as const,
      },
    ],
  }

  const timelineItems: TimelineItem[] = []

  educationData[language].forEach((edu, index) => {
    timelineItems.push({
      id: `education-${index}`,
      type: 'education',
      title: edu.degree,
      subtitle: edu.university,
      period: edu.period,
      location: edu.location,
      status: edu.gpa,
      data: edu,
    })
  })

  achievementsData[language].forEach((achievement, index) => {
    timelineItems.push({
      id: `achievement-${index}`,
      type: 'achievement',
      title: achievement.title,
      subtitle: achievement.organization,
      period: achievement.date,
      location: achievement.location,
      status: language === 'zh' ? '已发表' : 'Published',
      data: achievement,
    })
  })

  projectsData[language].forEach((project, index) => {
    const statusMap = {
      zh: { completed: '已完成', ongoing: '进行中', published: '已发表' },
      en: { completed: 'Completed', ongoing: 'Ongoing', published: 'Published' },
    }
    timelineItems.push({
      id: `project-${index}`,
      type: 'project',
      title: project.title,
      subtitle: project.role,
      period: project.period,
      status: statusMap[language][project.status],
      data: project,
    })
  })

  return timelineItems.sort((a, b) => {
    const getYear = (period: string) => {
      const yearMatch = period.match(/(\d{4})/)
      return yearMatch ? parseInt(yearMatch[1]) : 0
    }
    const yearA = getYear(a.period)
    const yearB = getYear(b.period)
    return yearB - yearA
  })
}


