document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const isActive = faqItem.classList.contains('active');
      
      // Close all FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
          item.classList.remove('active');
      });

      // Open clicked item if it wasn't already open
      if (!isActive) {
          faqItem.classList.add('active');
      }
  });
});
// Add the styles to the document
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// JavaScript for handling the responsive behavior
function toggleMenu() {
  const navbarLinks = document.querySelector('.navbar-links');
  navbarLinks.classList.toggle('active');
}