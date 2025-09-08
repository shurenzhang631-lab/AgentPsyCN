---
title: Feedback Form
---

# Feedback Form

We value your feedback and suggestions. Please use the form below to submit your feedback:

## Submit Your Feedback

<form action="/submit-feedback" method="POST">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
  </div>
  
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
  </div>
  
  <div>
    <label for="subject">Subject:</label>
    <input type="text" id="subject" name="subject" required>
  </div>
  
  <div>
    <label for="category">Category:</label>
    <select id="category" name="category">
      <option value="bug">Bug Report</option>
      <option value="feature">Feature Request</option>
      <option value="improvement">Improvement Suggestion</option>
      <option value="other">Other</option>
    </select>
  </div>
  
  <div>
    <label for="feedback">Feedback:</label>
    <textarea id="feedback" name="feedback" rows="6" required></textarea>
  </div>
  
  <div>
    <label for="priority">Priority:</label>
    <select id="priority" name="priority">
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
      <option value="urgent">Urgent</option>
    </select>
  </div>
  
  <button type="submit">Submit Feedback</button>
</form>

## Alternative Feedback Methods

If you prefer, you can also provide feedback through:

1. **Feedback Email** - feedback@agentpsy.org
2. **Community Forum** - Post on [community forum](https://community.agentpsy.org)
3. **Social Media** - Follow our official social media accounts

Thank you for helping us improve AgentPsy!