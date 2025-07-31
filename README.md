# 混合角色梗图制作器

一个基于React的Web应用，用于创建混合角色梗图。用户可以点击模板的不同区域来选择角色，通过拖拽调整位置，并导出最终的梗图。

## 功能特性

- 🎨 **模板系统**: 支持多种梗图模板
- 👥 **角色选择**: 丰富的角色库，支持搜索和分类筛选
- 🖱️ **交互编辑**: 拖拽、缩放、透明度调节
- 📱 **响应式设计**: 支持桌面和移动设备
- 💾 **自动同步**: 自动从Wiki同步角色数据
- 📤 **一键导出**: 支持PNG格式导出

## 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式框架**: Tailwind CSS
- **画布库**: React Konva
- **状态管理**: Zustand
- **HTTP客户端**: Axios
- **部署**: GitHub Pages

## 快速开始

### 环境要求

- Node.js 18+
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

应用将在 `http://localhost:3000` 启动

### 构建生产版本

```bash
npm run build
```

### 部署到GitHub Pages

```bash
npm run deploy
```

## 项目结构

```
src/
├── components/          # React组件
│   ├── Layout/         # 布局组件
│   ├── MemeEditor/     # 主要编辑器
│   ├── CharacterSelector/ # 角色选择器
│   └── Toolbar/        # 工具栏
├── hooks/              # 自定义Hooks
├── services/           # API服务
├── types/              # TypeScript类型定义
├── utils/              # 工具函数
└── styles/             # 样式文件
```

## 开发指南

### 添加新模板

1. 在 `public/templates/` 目录下添加模板图片
2. 在 `src/data/templates.ts` 中定义模板配置
3. 更新模板选择器组件

### 添加新角色

角色数据会自动从Wiki同步，也可以手动添加：

1. 在 `public/characters/` 目录下添加角色图片
2. 更新角色数据文件

### 自定义样式

项目使用Tailwind CSS，可以通过修改 `tailwind.config.js` 来自定义主题。

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 致谢

- 感谢所有提供角色立绘的游戏开发商
- 感谢开源社区提供的优秀工具和库

## 联系方式

如有问题或建议，请通过以下方式联系：

- 提交 Issue
- 发送邮件至 [your-email@example.com]
- 访问项目主页 [GitHub Repository]

---

**注意**: 本项目仅用于学习和娱乐目的，请遵守相关版权法规。 