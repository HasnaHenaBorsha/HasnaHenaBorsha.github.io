document.addEventListener('DOMContentLoaded', function () {
          // === Matrix Rain Effect ===
          const canvas = document.getElementById('matrix-canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;

          const katakana = 'アカサタナハマヤラワガザダバパイキシチニヒミリギジヂビピウクスツヌフムユルグズブヅプエケセテネヘメレゲゼデベペオコソトノホモヨロゴゾドボポヴッン';
          const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          const nums = '0123456789';
          const alphabet = katakana + latin + nums;
          const fontSize = 16;
          const columns = canvas.width / fontSize;
          const rainDrops = Array(Math.floor(columns)).fill(1);

          function drawMatrix() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#0F0';
            ctx.font = fontSize + 'px monospace';

            rainDrops.forEach((y, index) => {
              const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
              ctx.fillText(text, index * fontSize, y * fontSize);

              if (y * fontSize > canvas.height && Math.random() > 0.975) {
                rainDrops[index] = 0;
              }
              rainDrops[index]++;
            });
          }
          setInterval(drawMatrix, 30);

          // === Responsive Resize ===
          window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
          });

          // === Sticky Navbar Scroll Effect ===
          window.addEventListener('scroll', function () {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
              navbar.classList.add('scrolled');
            } else {
              navbar.classList.remove('scrolled');
            }
          });

          // === Smooth Scroll for Anchor Links ===
          document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', function (e) {
              e.preventDefault();
              const targetId = this.getAttribute('href');
              const targetEl = document.querySelector(targetId);

              if (targetEl) {
                window.scrollTo({
                  top: targetEl.offsetTop - 70,
                  behavior: 'smooth'
                });
              }

              // Close navbar on mobile
              const navbarCollapse = document.querySelector('.navbar-collapse');
              if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
              }

              // Highlight active link
              document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
              this.classList.add('active');
            });
          });

          // === Active Nav on Scroll ===
          const sections = document.querySelectorAll('section');
          const navLinks = document.querySelectorAll('.nav-link');

          function updateActiveLink() {
            let current = '';
            sections.forEach(section => {
              const sectionTop = section.offsetTop;
              if (window.scrollY >= sectionTop - 120) {
                current = section.getAttribute('id');
              }
            });
            navLinks.forEach(link => {
              link.classList.remove('active');
              if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
              }
            });
          }

          window.addEventListener('scroll', updateActiveLink);
          updateActiveLink();

          // === Animate timeline on scroll ===
          const timelineItems = document.querySelectorAll('.timeline-item');
          function showTimeline() {
            timelineItems.forEach(item => {
              const rect = item.getBoundingClientRect();
              if (rect.top < window.innerHeight - 100) {
                item.classList.add('visible');
              }
            });
          }
          window.addEventListener('scroll', showTimeline);
          showTimeline();

          // === Animate Section Titles ===
          const animateTitles = () => {
            document.querySelectorAll('.section-title').forEach(el => {
              if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.classList.add('animate__fadeIn');
              }
            });
          };
          window.addEventListener('scroll', animateTitles);
          animateTitles();

        });

        // Update copyright year
        document.querySelector('.copyright .year').textContent = new Date().getFullYear();
