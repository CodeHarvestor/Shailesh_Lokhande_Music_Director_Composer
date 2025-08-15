document.getElementById('yr').textContent = new Date().getFullYear();

// ======== GALLERY IMAGES ========
const galleryImages = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg"
];

const gallery = document.getElementById('gallery');
gallery.innerHTML = galleryImages.map(src =>
  `<div class="thumb"><img src="${src}" alt="Gallery photo"></div>`
).join('');

// ======== WORK PROFILE VIDEOS ========
const workItems = [
  {
    title: "Bappa Morya Re",
    sub: "By Shankar Mahadevan",
    desc: "“Bappa Morya Re” is a heartfelt tribute to Pune’s most revered Ganpati – Shrimant Bhausaheb Rangari Ganpati, the deity with whom India’s first public Ganeshotsav began. Celebrating history, devotion, and culture, this song beautifully blends traditional fervor with a modern musical touch.",
    id: "7_GFOC8rifo"
  },
  {
    title: "Ghe Damana",
    sub: "Dance Number",
    desc: "A high-voltage blend of bold beats and catchy hooks bringing unstoppable energy to the dance floor.",
    id: "SGe2dEz3c3E"
  },
  {
    title: "Sobati",
    sub: "Where Love Finds Its Tune",
    desc: "A soulful melody that captures tenderness and companionship—romance wrapped in rhythm.",
    id: "oBzfjhPk3J8"
  },
  {
    title: "Vaju De Rhythm",
    sub: "A Tribute to Friendship",
    desc: "A lively celebration of friendship—blending fun, freedom, and fierce vibes into a musical ride.",
    id: "loUt32_Ttug"
  },
  {
    title: "Ala Re Dhiraj Ala Re",
    sub: "The Voice of the People",
    desc: "A high-energy anthem echoing hope, leadership, and the spirit of change.",
    id: "StqMFLPDfM8"
  },
  {
    title: "Swachha Latur Song",
    sub: "A Call for Cleanliness",
    desc: "An inspiring anthem encouraging a cleaner, greener Latur with catchy rhythm.",
    id: "fIcN0sBVQsM"
  },
  {
    title: "Chaturthi (Namo Shree Ganesha)",
    sub: "Devotional",
    desc: "A soul-stirring tribute to Lord Ganesha blending divine devotion with uplifting melody.",
    id: "bHKNITdGSMQ"
  }
];

const worklist = document.getElementById('worklist');
worklist.innerHTML = workItems.map((item, idx) => `
  <div class="work-item">
    <div class="video-thumb" data-id="${item.id}">
      <img src="https://img.youtube.com/vi/${item.id}/hqdefault.jpg" alt="${item.title}">
    </div>
    <div class="work-title">${item.title} <span class="work-sub">· ${item.sub}</span></div>
    <div class="work-desc">${item.desc}</div>
  </div>
`).join('');

// ======== CLICK TO PLAY VIDEO ========
document.querySelectorAll('.video-thumb').forEach(thumb => {
  thumb.addEventListener('click', function() {
    const videoId = this.getAttribute('data-id');
    this.innerHTML = `
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}?autoplay=1"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
    `;
  });
});
