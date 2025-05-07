// Sample student data (expand to 100+ as needed)
const students = [
    {
        name: 'Farah Magdy',
        type: 'photo',
        src: 'img/20141222_141903.jpg',
        instagram: 'https://www.instagram.com/boody_10b/'
      },
      {
        name: 'Farah Magdy',
        type: 'photo',
        src: 'img/20141222_141903.jpg',
        instagram: 'https://www.instagram.com/boody_10b/'
      },
      {
        name: 'Farah Magdy',
        type: 'photo',
        src: 'img/20141222_141903.jpg',
        instagram: 'https://www.instagram.com/boody_10b/'
      },
      {
        name: 'Farah Magdy',
        type: 'photo',
        src: 'img/20141222_141903.jpg',
        instagram: 'https://www.instagram.com/boody_10b/'
      },
      {
        name: 'Farah Magdy',
        type: 'photo',
        src: 'img/20141222_141903.jpg',
        instagram: 'https://www.instagram.com/boody_10b/'
      },
      {
        name: 'Farah Magdy',
        type: 'photo',
        src: 'img/20141222_141903.jpg',
        instagram: 'https://www.instagram.com/boody_10b/'
      },
      {
        name: 'Farah Magdy',
        type: 'photo',
        src: 'img/20141222_141903.jpg',
        instagram: 'https://www.instagram.com/boody_10b/'
      },
      {
        name: 'Farah Magdy',
        type: 'photo',
        src: 'img/20141222_141903.jpg',
        instagram: 'https://www.instagram.com/boody_10b/'
      },
      {
        name: 'Farah Magdy',
        type: 'video',
        src: 'img/VID-20170717-WA0004.mp4',
        instagram: 'https://www.instagram.com/boody_10b/'
      },
    
    
    {
        name: 'Farah Magdy',
        type: 'photo',
        src: 'img/20141222_141903.jpg',
        instagram: 'https://www.instagram.com/boody_10b/'
      },
    
   
  ];
  
  const gallery = document.getElementById('gallery');
  const modal = document.getElementById('modal');
  const closeModal = document.getElementById('closeModal');
  const modalImg = document.getElementById('modalImg');
  const modalVideo = document.getElementById('modalVideo');
  const studentName = document.getElementById('studentName');
  const instaLink = document.getElementById('instaLink');
  
  // Populate gallery
  gallery.innerHTML = students.map((student, idx) => {
    if (student.type === 'photo') {
      return `
        <div class="gallery-item" data-idx="${idx}">
          <img src="${student.src}" alt="${student.name}">
          <div class="student-name">${student.name}</div>
        </div>
      `;
    } else {
      return `
        <div class="gallery-item" data-idx="${idx}">
          <video src="${student.src}" muted playsinline preload="metadata"></video>
          <div class="student-name">${student.name}</div>
        </div>
      `;
    }
  }).join('');
  
  // Modal logic
  gallery.addEventListener('click', function(e) {
    let item = e.target.closest('.gallery-item');
    if (!item) return;
    const idx = item.getAttribute('data-idx');
    const student = students[idx];
    if (student.type === 'photo') {
      modalImg.src = student.src;
      modalImg.style.display = 'block';
      modalVideo.style.display = 'none';
    } else {
      modalVideo.src = student.src;
      modalVideo.style.display = 'block';
      modalImg.style.display = 'none';
      modalVideo.currentTime = 0;
      modalVideo.play();
    }
    studentName.textContent = student.name;
    instaLink.href = student.instagram;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
  
  closeModal.onclick = function() {
    modal.style.display = 'none';
    modalVideo.pause();
    document.body.style.overflow = '';
  };
  
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      modalVideo.pause();
      document.body.style.overflow = '';
    }
  };
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      modal.style.display = 'none';
      modalVideo.pause();
      document.body.style.overflow = '';
    }
  }); 