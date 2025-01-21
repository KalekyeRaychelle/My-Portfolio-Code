const canvasDots = function () {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
  
    const colorDot = ['rgb(81, 162, 233)', 'rgb(255, 77, 90)'];
    const mousePosition = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const dots = { array: [] };
  
    canvas.width = document.body.scrollWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = 'block';
    ctx.lineWidth = 0.3;
  
    function Dot() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = -0.2 + Math.random() * 0.4; // Reduced speed
      this.vy = -0.2 + Math.random() * 0.4; // Reduced speed
      this.radius = Math.random() * 1.5; // Slightly larger dots
      this.color = colorDot[Math.floor(Math.random() * colorDot.length)];
    }
  
    Dot.prototype.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    };
  
    Dot.prototype.update = function () {
      this.x += this.vx;
      this.y += this.vy;
  
      // Reverse direction on boundary collision
      if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
      if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
    };
  
    Dot.prototype.connect = function () {
      dots.array.forEach((dot) => {
        const distance = Math.sqrt(
          (this.x - dot.x) ** 2 + (this.y - dot.y) ** 2
        );
        if (distance < 80) {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(dot.x, dot.y);
          ctx.strokeStyle = `rgba(255, 165, 0, ${1 - distance / 80})`;
          ctx.stroke();
          ctx.closePath();
        }
      });
    };
  
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      dots.array.forEach((dot) => {
        dot.update();
        dot.draw();
        dot.connect();
      });
  
      requestAnimationFrame(animate);
    }
  
    function initializeDots() {
      const count = window.innerWidth > 800 ? 300 : 150;
      for (let i = 0; i < count; i++) {
        dots.array.push(new Dot());
      }
    }
  
    window.onmousemove = (e) => {
      mousePosition.x = e.clientX;
      mousePosition.y = e.clientY;
    };
  
    window.onresize = () => {
      canvas.width = document.body.scrollWidth;
      canvas.height = window.innerHeight;
      dots.array = [];
      initializeDots();
    };
  
    initializeDots();
    animate();
  };
  
  export default canvasDots;
  
  