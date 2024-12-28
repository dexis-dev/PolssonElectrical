document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})




const snowContainer = document.getElementById('snow-container');

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');


  const size = Math.random() * 10 + 5 + 'px'; 
  const left = Math.random() * 100 + '%'; 
  const duration = Math.random() * 5 + 3 + 's'; 
  const delay = Math.random() * 5 + 's'; 


  snowflake.style.width = size;
  snowflake.style.height = size;
  snowflake.style.left = left;
  snowflake.style.animationDuration = duration;
  snowflake.style.animationDelay = delay;

  
  snowContainer.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, parseFloat(duration) * 1000);
}


setInterval(createSnowflake, 200);



document.addEventListener('DOMContentLoaded', () => {
  const servicesBtn = document.querySelector('.services_btn');
  const overlay = document.querySelector('.overlay');
  const closeBtn = document.querySelector('.close_btn');

  servicesBtn.addEventListener('click', () => {
    overlay.classList.add('show');
  });

 
  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('show');
  });


  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      overlay.classList.remove('show');
    }
  });
});


document.querySelectorAll('.faq_box').forEach((box) => {
  box.addEventListener('click', () => {
      const content = box.querySelector('.faq_content');
      const plus = box.querySelector('.faq_plus');

      if (content.style.maxHeight) {
          content.style.maxHeight = null;
          content.style.padding = "0 20px";
          plus.textContent = "+";
      } else {
          content.style.maxHeight = content.scrollHeight + "px";
          content.style.padding = "10px 20px";
          plus.textContent = "×";
      }
  });
});
