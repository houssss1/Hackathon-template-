# Hackathon Project Template

A modern, professional, and fully-functional HTML template for hackathon project presentations. This template is designed to showcase your project's problem, solution, impact, and enable direct contact from interested parties.

## Features

✨ **Modern Design**
- Clean, professional layout with smooth scrolling
- Responsive design that works on all devices
- Beautiful gradient headers and card-based design
- Smooth animations and transitions

🚀 **Fully Functional**
- Working contact form with Formspree integration
- Real-time form validation and feedback
- Success/error messages with visual feedback
- Form data submission via email

♿ **Accessible**
- ARIA labels for screen readers
- Keyboard navigation support
- Focus-visible styles for keyboard users
- Semantic HTML structure
- Good color contrast

🎨 **Well-Organized Code**
- Separated CSS and JavaScript files
- Clean folder structure
- Easy to customize and maintain
- Professional code quality

## Project Structure

```
hackathon-template/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling
├── js/
│   └── script.js       # Form functionality
└── README.md           # This file
```

## Quick Start

1. **Edit the HTML Content**
   - Open `index.html`
   - Replace placeholder text:
     - "Your Project Title" → Your project name
     - "A clear and simple sentence..." → Your project description
     - Update all section content with your information

2. **Set Up the Contact Form with Formspree**
   - Go to **https://formspree.io**
   - Click "Sign Up" and create a free account
   - Click "Create New Form"
   - Enter your email address where you want to receive messages
   - Copy your **Form ID** (it looks like: `mgeqwpqx`)
   - Open `index.html` in a text editor
   - Find this line (around line 100):
     ```html
     action="https://formspree.io/f/FORM_ID"
     ```
   - Replace `FORM_ID` with your actual Form ID from Formspree
   - Example:
     ```html
     action="https://formspree.io/f/mgeqwpqx"
     ```

3. **Test the Form**
   - Open your HTML file in a browser
   - Scroll to the Contact section
   - Fill in the form and click "Send Message"
   - Check your email for the submission

## How to Customize

### Change Colors

Open `css/styles.css` and modify the CSS variables at the top:

```css
:root {
  --primary: #2563eb;      /* Main blue color */
  --secondary: #2427aa;    /* Secondary blue */
  --bg: #f9fafb;           /* Background color */
  --text: #111827;         /* Text color */
  --muted: #d8e0f0;        /* Light text color */
}
```

### Update Text Content

Edit `hackathonv2.2.html` and replace:
- Hero section: "Your Project Title" and description
- Problem section: Describe the real problem
- Solution section: Explain your solution and features
- Impact section: Show who benefits and expected outcomes
- Contact section: Update heading and instructions
- Footer: Change team name and year

### Customize Styling

Modify `css/styles.css` to change:
- Fonts: Edit the `font-family` property
- Card colors: Change `background: #ff9f1c;` to your desired color
- Spacing: Adjust padding and margins
- Animations: Modify keyframes or transition speeds

## Form Submission Settings

### Email Delivery

Once you've connected your Formspree form:
- **Email Delivery**: Formspree automatically sends form submissions to the email you registered with
- **Spam Protection**: Formspree includes built-in spam protection
- **Response**: You can reply directly from your email to respond to form submissions

### Customizing Email Template

If you want to customize what the email looks like:
1. Go to your Formspree dashboard
2. Open your form settings
3. Configure the email template to your preference

## Browser Compatibility

This template works on all modern browsers:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Tips for Your Presentation

📝 **Content Tips**
- Keep text concise and impactful
- Use bullet points where appropriate
- Focus on **problem → solution → impact**
- Include specific metrics/numbers when possible

🎨 **Design Tips**
- The template is mobile-responsive by default
- Test on different screen sizes
- Keep your color scheme consistent with your brand

📧 **Form Tips**
- Make sure your email is correct in Formspree
- Test the form submission before presenting
- Check your spam folder for test emails

## Troubleshooting

### Form not sending emails?
1. Check that you've replaced `FORM_ID` with your actual Formspree ID in `index.html`
2. Verify you're using the correct form action URL
3. Make sure JavaScript is enabled in your browser
4. Check that the form fields have the correct names (`email` and `message`)

### Styles not loading?
1. Make sure `css/styles.css` is in the correct folder
2. Check the file path in `index.html`: `<link rel="stylesheet" href="css/styles.css">`
3. Clear your browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)

### JavaScript not working?
1. Make sure `js/script.js` is in the correct folder
2. Check the file path in `index.html`: `<script src="js/script.js"></script>`
3. Open browser console (F12) to check for errors

## Performance

This template is optimized for performance:
- Minimal dependencies (no heavy libraries)
- Pure CSS animations
- Lightweight form handling
- Fast load times

## License

This template is provided as-is for educational use in hackathons and projects.

## Questions or Issues?

- Check the troubleshooting section above
- Review your Formspree setup
- Ensure all files are in the correct folders
- Verify file paths are correct relative to your HTML file

---

**Good luck with your hackathon! 🚀**
