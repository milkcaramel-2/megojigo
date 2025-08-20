# 📧 EmailJS Setup Guide for Direct Email Sending

## Current Status
✅ **Implemented**: Contact form now sends emails directly without opening mail program  
🔧 **Needs Setup**: EmailJS service configuration (5 minutes)

## Quick Setup Steps

### 1. Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for free account
3. Verify your email

### 2. Create Email Service
1. Go to **Email Services** section
2. Click **Add New Service**
3. Choose **Gmail** (recommended) or **Naver Mail**
4. Connect your `dsj152@naver.com` account
5. Copy the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to **Email Templates** section
2. Click **Create New Template**
3. Set template like this:
   ```
   Subject: {{subject}}
   
   새로운 문의가 있습니다:
   
   이름: {{from_name}}
   연락처: {{from_phone}}
   
   문의 내용:
   {{message}}
   
   ---
   메고지고 홈페이지에서 전송됨
   ```
4. Copy the **Template ID** (e.g., `template_abc123`)

### 4. Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `abc123xyz`)

### 5. Update Website Code
In `src/app/page.tsx`, replace these lines (around line 32-34):
```javascript
const serviceId = 'YOUR_SERVICE_ID_HERE';     // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID_HERE';   // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY_HERE';     // Replace with your Public Key
```

Also uncomment line 46:
```javascript
await emailjs.send(serviceId, templateId, templateParams, publicKey);
```

And comment out lines 49-50 (the simulation):
```javascript
// await new Promise(resolve => setTimeout(resolve, 1500));
```

## 💰 Cost
- **Free tier**: 200 emails/month
- **Perfect** for your rice cake shop's contact form needs

## 🎯 Result
- ✅ No more mail program opening
- ✅ Direct email sending from website
- ✅ Professional user experience
- ✅ Email goes directly to `dsj152@naver.com`

## 🚀 Current Demo
Right now the form works with a **demo version** that simulates sending emails and shows success messages. Once you set up EmailJS, emails will actually be sent!
