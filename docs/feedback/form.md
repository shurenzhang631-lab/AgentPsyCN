---
title: 反馈表单
---

# 反馈表单

我们非常重视您的反馈和建议。请使用以下表单提交您的反馈：

## 提交您的反馈

<form action="/submit-feedback" method="POST">
  <div>
    <label for="name">姓名：</label>
    <input type="text" id="name" name="name" required>
  </div>
  
  <div>
    <label for="email">邮箱：</label>
    <input type="email" id="email" name="email" required>
  </div>
  
  <div>
    <label for="subject">主题：</label>
    <input type="text" id="subject" name="subject" required>
  </div>
  
  <div>
    <label for="category">分类：</label>
    <select id="category" name="category">
      <option value="bug">问题报告</option>
      <option value="feature">功能建议</option>
      <option value="improvement">改进建议</option>
      <option value="other">其他</option>
    </select>
  </div>
  
  <div>
    <label for="feedback">反馈内容：</label>
    <textarea id="feedback" name="feedback" rows="6" required></textarea>
  </div>
  
  <div>
    <label for="priority">优先级：</label>
    <select id="priority" name="priority">
      <option value="low">低</option>
      <option value="medium">中</option>
      <option value="high">高</option>
      <option value="urgent">紧急</option>
    </select>
  </div>
  
  <button type="submit">提交反馈</button>
</form>

## 其他反馈方式

如果您愿意，也可以通过以下方式提供反馈：

1. **反馈邮箱** - feedback@agentpsy.org
2. **社区论坛** - 在[社区论坛](https://community.agentpsy.org)发帖
3. **社交媒体** - 关注我们的官方微博和微信公众号

感谢您帮助我们改进 AgentPsy！