# GitHub Pages 部署指南

## 部署方式选择

### 推荐：GitHub Actions（自动部署）
- ✅ 每次推送代码时自动构建和部署
- ✅ 无需手动操作
- ✅ 构建过程在云端进行，不依赖本地环境
- ✅ 支持预览部署（Pull Request）

### 备选：gh-pages 分支（手动部署）
- ⚠️ 需要手动运行部署命令
- ⚠️ 依赖本地构建环境
- ⚠️ 每次更新都需要手动操作

## 使用 GitHub Actions 部署

### 1. 启用 GitHub Pages
1. 进入您的 GitHub 仓库
2. 点击 `Settings` → `Pages`
3. 在 `Source` 部分选择 `GitHub Actions`
4. 保存设置

### 2. 推送代码
```bash
git add .
git commit -m "Add GitHub Actions deployment"
git push origin main
```

### 3. 查看部署状态
1. 进入仓库的 `Actions` 标签页
2. 查看 `Deploy to GitHub Pages` 工作流
3. 等待构建和部署完成

### 4. 访问您的网站
部署完成后，您的网站将在以下地址可用：
```
https://[您的用户名].github.io/mixed_characters_meme_maker/
```

## 使用 gh-pages 手动部署

如果您更喜欢手动部署，可以使用以下命令：

```bash
# 构建项目
npm run build

# 部署到 GitHub Pages
npm run deploy
```

## 故障排除

### 常见问题

1. **404 错误**
   - 确保 Vite 配置中的 `base` 路径正确
   - 检查仓库名称是否与配置匹配

2. **构建失败**
   - 检查 GitHub Actions 日志
   - 确保所有依赖都已安装
   - 验证 TypeScript 编译是否通过

3. **页面显示空白**
   - 检查浏览器控制台是否有错误
   - 验证资源路径是否正确

### 更新部署
每次推送代码到 `main` 分支时，GitHub Actions 会自动重新部署您的网站。

## 自定义域名（可选）

如果您想使用自定义域名：

1. 在仓库根目录创建 `CNAME` 文件
2. 添加您的域名（例如：`meme-maker.yourdomain.com`）
3. 在 DNS 提供商处添加 CNAME 记录
4. 在 GitHub Pages 设置中启用自定义域名

## 环境变量

如果需要使用环境变量，可以在 GitHub Actions 中设置：

```yaml
- name: Build
  run: npm run build
  env:
    VITE_API_URL: ${{ secrets.VITE_API_URL }}
``` 