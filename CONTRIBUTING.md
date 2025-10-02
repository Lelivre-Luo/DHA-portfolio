# 贡献指南

感谢您对 DHA Portfolio 项目的关注！我们欢迎任何形式的贡献。

## 如何贡献

### 报告问题

如果您发现了 bug 或有功能建议，请：

1. 检查 [Issues](https://github.com/your-username/DHA-portfolio/issues) 是否已有类似问题
2. 如果没有，请创建新的 Issue
3. 在 Issue 中详细描述问题或建议

### 提交代码

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 开发环境设置

### 前置要求

- Node.js 18+ 
- pnpm

### 安装步骤

1. 克隆仓库
```bash
git clone https://github.com/ZhaohanWang/DHA-portfolio.git
cd DHA-portfolio
```

2. 安装依赖
```bash
pnpm install
```

3. 启动开发服务器
```bash
pnpm run dev
```

4. 构建内容（修改内容后必须运行）
```bash
pnpm run build:content
```

## 代码规范

- 使用 TypeScript
- 遵循 ESLint 规则
- 使用 Prettier 格式化代码
- 组件使用函数式组件和 Hooks
- 使用 Tailwind CSS 进行样式设计

## 内容管理

本项目使用 Markdown 文件进行内容管理，详细说明请参考 [CONTENT_MANAGEMENT.md](./CONTENT_MANAGEMENT.md)。

## 提交信息规范

请使用清晰的提交信息：

- `feat:` 新功能
- `fix:` 修复 bug
- `docs:` 文档更新
- `style:` 代码格式调整
- `refactor:` 代码重构
- `test:` 测试相关
- `chore:` 构建过程或辅助工具的变动

## 许可证

通过贡献代码，您同意您的贡献将在 MIT 许可证下发布。

## 联系方式

如有问题，请通过以下方式联系：

- 创建 Issue
- 发送邮件至 wqwangzhaohan@126.com
- 联系 Lelivre-Luo

感谢您的贡献！

