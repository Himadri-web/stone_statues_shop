/* Demo data (replace with your backend later) */
const PRODUCTS = [
  {id:'g1', title:'Sleeping Ganesh', category:'Ganesh', size:'1ft', material:'Black Stone', price:12000, img:'src/assets/ganesh_sleeping.png', desc:'Hand‑carved 1 ft Ganesh in reclining pose.'},
  <!--{id:'g2', title:'Sitting Ganesh', category:'Ganesh', size:'2ft', material:'Marble', price:45000, img:'src/assets/ganesh_sitting.jpg', desc:'2 ft seated Ganesh with ornate detailing.'},-->
  {id:'g3', title:'Standing Ganesh', category:'Ganesh', size:'3ft', material:'Sandstone', price:78000, img:'src/assets/ganesh_standing.png', desc:'3 ft standing Ganesh ideal for courtyards.'},
  {id:'b1', title:'Meditating Buddha', category:'Buddha', size:'2ft', material:'Granite', price:52000, img:'src/assets/budha.png', desc:'Serene Buddha for indoor sanctum.'},
  {id:'v1', title:'Vishnu on Garuda', category:'Vishnu', size:'3ft', material:'Granite', price:98000, img:'src/assets/photo/vishnu/sleeping/vishnu_sleeping_1.jpg', desc:'Detailed depiction of Vishnu with Garuda.'},
  {id:'s1', title:'Shiva Lingam Set', category:'Shiva', size:'2ft', material:'Sand Stone', price:35000, img:'src/assets/photo/shiva/sitting/siva_sitting_1.jpg', desc:'Sitting Siva in meditation.'},
  <!--sitting Ganesh-->
  {id:'g4', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Black Granite Stone', price:125000, img:'src/assets/photo/ganesh/sitting/ganesh_sitting_1.jpg', desc:'Ganesha in black granite stone,Height 38 inch width 21 inch and thickness 14 inch.'},
  <!--{id:'g5', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Black Granite Stone', price:125000, img:'src/assets/photo/ganesh/sitting/ganesh_sitting_2.jpg', desc:'Ganesha in black granite stone,Height 38 inch width 21 inch and thickness 14 inch.'},-->
  <!--{id:'g6', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Black Granite Stone', price:125000, img:'src/assets/photo/ganesh/sitting/ganesh_sitting_3.jpg', desc:'Ganesha in black granite stone,Height 38 inch width 21 inch and thickness 14 inch.'},-->
  <!--{id:'g7', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Black Granite Stone', price:125000, img:'src/assets/photo/ganesh/sitting/ganesh_sitting_4.jpg', desc:'Ganesha in black granite stone,Height 38 inch width 21 inch and thickness 14 inch.'},-->
  <!--{id:'g8', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Black Granite Stone', price:125000, img:'src/assets/photo/ganesh/sitting/ganesh_sitting_5.jpg', desc:'Ganesha in black granite stone,Height 38 inch width 21 inch and thickness 14 inch.'},-->
  <!--{id:'g9', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Black Granite Stone', price:125000, img:'src/assets/photo/ganesh/sitting/ganesh_sitting_6.jpg', desc:'Ganesha in black granite stone,Height 38 inch width 21 inch and thickness 14 inch.'},-->
  
  <!--sitting Ganesh: black granite-->
   {id:'g10', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Black Granite Stone', price:115000, img:'src/assets/photo/ganesh/sitting/black_granite/ganesh_sitting_1.jpg', desc:'Ganesha in black granite stone,Height 36 inch width 21 inch and thickness 12 inch.'},
  <!--{id:'g11', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Black Granite Stone', price:115000, img:'src/assets/photo/ganesh/sitting/black_granite/ganesh_sitting_2.jpg', desc:'Ganesha in black granite stone,Height 36 inch width 21 inch and thickness 12 inch.'},-->
  <!--{id:'g12', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Black Granite Stone', price:115000, img:'src/assets/photo/ganesh/sitting/black_granite/ganesh_sitting_3.jpg', desc:'Ganesha in black granite stone,Height 36 inch width 21 inch and thickness 12 inch.'},-->
  <!--{id:'g13', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Black Granite Stone', price:115000, img:'src/assets/photo/ganesh/sitting/black_granite/ganesh_sitting_4.jpg', desc:'Ganesha in black granite stone,Height 36 inch width 21 inch and thickness 12 inch.'},-->
  
  <!--sitting Ganesh: black granite-->
   {id:'g14', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Black Granite Stone', price:135000, img:'src/assets/photo/ganesh/sitting/black_granite_1/ganesh_sitting_1.jpg', desc:'Ganesha in black granite stone, Height 36 inch width 22 inch and thickness 15 inch.'},
  <!--{id:'g15', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Black Granite Stone', price:135000, img:'src/assets/photo/ganesh/sitting/black_granite_1/ganesh_sitting_2.jpg', desc:'Ganesha in black granite stone, Height 36 inch width 22 inch and thickness 15 inch.'},-->
  <!--{id:'g16', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Black Granite Stone', price:135000, img:'src/assets/photo/ganesh/sitting/black_granite_1/ganesh_sitting_3.jpg', desc:'Ganesha in black granite stone, Height 36 inch width 22 inch and thickness 15 inch.'},-->

<!--Three headed sitting Ganesh: black granite-->
   {id:'g17', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Black Granite Stone', price:65000, img:'src/assets/photo/ganesh/sitting/three_head/ganesh_sitting_7.jpg', desc:'Three-headed Ganesha sculpture in black granite stone, height 24 inches, width 15 inches, and thickness 6 inches.'},

<!--42 inches sitting Ganesh: black granite-->
   {id:'g18', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Black Granite Stone', price:135000, img:'src/assets/photo/ganesh/sitting/42_inches/ganesh_sitting_1.jpg', desc:'Ganesha sculpture in black granite stone, height 42 inches, width 24 inches, and thickness 14 inches.'},
<!--4 feets sitting Ganesh: black granite-->
   {id:'g19', title:'Sitting Ganesh', category:'Ganesh', size:'4ft', material:'Black Granite Stone', price:165000, img:'src/assets/photo/ganesh/sitting/4_feet/ganesh_sitting_2.jpg', desc:'Ganesha sculpture in black granite stone, height 48 inches, width 26 inches, and thickness 16 inches.'},
<!--5 feets sitting Ganesh: black granite-->
   {id:'g20', title:'Sitting Ganesh', category:'Ganesh', size:'4ft', material:'Black Granite Stone', price:275000, img:'src/assets/photo/ganesh/sitting/5_feet/ganesh_sitting_1.jpg', desc:'Ganesha sculpture in black granite stone, height 60 inches, width 33 inches, and thickness 18 inches.'},    
];


/* Render utilities */
const grid = document.getElementById('productGrid');
const sizeFilter = document.getElementById('sizeFilter');
const catFilter = document.getElementById('categoryFilter');
const searchInput = document.getElementById('searchInput');

function money(n){ return '₹' + n.toLocaleString('en-IN'); }

function productCard(p){
  const el = document.createElement('article');
  el.className = 'card';
  el.innerHTML = `
    <div class="thumb" style="background-image:url('${p.img}');background-size:contain;background-position:center;background-repeat:no-repeat">
      <span class="tag">${p.size}</span>
    </div>
    <div class="card-body">
      <h3>${p.title}</h3>
      <div class="small">${p.category} • ${p.material}</div>
      <div class="price-row">
        <strong class="price">${money(p.price)}</strong>
        <div>
          <button class="btn ghost" data-quick="${p.id}">Quick View</button>
          <button class="btn primary" data-add="${p.id}">Add</button>
        </div>
      </div>
    </div>`;
  return el;
}

function render(){
  grid.innerHTML='';
  const q = searchInput.value.trim().toLowerCase();
  const s = sizeFilter.value;
  const c = catFilter.value;
  const filtered = PRODUCTS.filter(p => 
    (!q || p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)) &&
    (!s || p.size === s) &&
    (!c || p.category === c)
  );
  if(!filtered.length){ grid.innerHTML = '<p class="small">No items match your filters.</p>'; return; }
  filtered.forEach(p => grid.appendChild(productCard(p)));
}
[sizeFilter, catFilter, searchInput].forEach(el => el.addEventListener('input', render));
render();

/* Category shortcuts */
document.querySelectorAll('.cat-card').forEach(el => {
  el.addEventListener('click', () => { 
    catFilter.value = el.dataset.filter; 
    window.location.hash = '#catalog';
    render(); 
  });
});

/* Modal */
const modal = document.getElementById('productModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalSize = document.getElementById('modalSize');
const modalMaterial = document.getElementById('modalMaterial');
const modalCategory = document.getElementById('modalCategory');
const modalPrice = document.getElementById('modalPrice');
const modalAdd = document.getElementById('modalAdd');

grid.addEventListener('click', (e) => {
  const quickId = e.target.getAttribute('data-quick');
  const addId = e.target.getAttribute('data-add');
  if (quickId){ openModal(quickId); }
  if (addId){ addToCart(addId); }
});

function openModal(id){
  const p = PRODUCTS.find(x => x.id === id);
  if(!p) return;
  modalImage.src = p.img; modalImage.alt = p.title;
  modalTitle.textContent = p.title;
  modalDesc.textContent = p.desc;
  modalSize.textContent = p.size;
  modalMaterial.textContent = p.material;
  modalCategory.textContent = p.category;
  modalPrice.textContent = money(p.price);
  modalAdd.onclick = () => addToCart(p.id);
  modal.showModal();
}

/* Cart */
const cart = document.getElementById('cart');
const cartBackdrop = document.getElementById('cartBackdrop');
const cartButton = document.getElementById('cartButton');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
let CART = [];

function saveCart(){ localStorage.setItem('cart', JSON.stringify(CART)); }
function loadCart(){ CART = JSON.parse(localStorage.getItem('cart')||'[]'); updateCart(); }
function openCart(){ cart.classList.add('open'); cartBackdrop.classList.add('show'); }
function hideCart(){ cart.classList.remove('open'); cartBackdrop.classList.remove('show'); }
cartButton.addEventListener('click', openCart);
closeCart.addEventListener('click', hideCart);
cartBackdrop.addEventListener('click', hideCart);

function addToCart(id){
  const p = PRODUCTS.find(x => x.id === id);
  if(!p) return;
  const line = CART.find(l => l.id === id);
  if(line) line.qty += 1; else CART.push({id:p.id, title:p.title, price:p.price, img:p.img, qty:1});
  updateCart(); openCart(); saveCart();
}

function updateCart(){
  cartItems.innerHTML='';
  let total = 0, count = 0;
  CART.forEach(line => {
    total += line.qty * line.price; count += line.qty;
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <img src="${line.img}" alt="" width="56" height="56" style="border-radius:8px;object-fit:cover"/>
      <div>
        <div><strong>${line.title}</strong></div>
        <div class="small">${money(line.price)} × ${line.qty}</div>
      </div>
      <div style="display:flex; gap:6px; align-items:center">
        <button class="icon-btn" data-dec="${line.id}">−</button>
        <button class="icon-btn" data-inc="${line.id}">+</button>
        <button class="icon-btn" data-del="${line.id}">✕</button>
      </div>`;
    cartItems.appendChild(row);
  });
  cartTotal.textContent = money(total);
  cartCount.textContent = count;
}

cartItems.addEventListener('click', (e) => {
  const dec = e.target.getAttribute('data-dec');
  const inc = e.target.getAttribute('data-inc');
  const del = e.target.getAttribute('data-del');
  if(dec){ const i=CART.findIndex(l=>l.id===dec); if(i>-1){ CART[i].qty=Math.max(0,CART[i].qty-1); if(!CART[i].qty) CART.splice(i,1);}}
  if(inc){ const i=CART.findIndex(l=>l.id===inc); if(i>-1){ CART[i].qty++; }}
  if(del){ const i=CART.findIndex(l=>l.id===del); if(i>-1){ CART.splice(i,1);}}
  updateCart(); saveCart();
});

document.getElementById('checkoutBtn').addEventListener('click', () => {
  /*alert('Demo checkout. Add your payment flow here.');*/
  alert('Payment Gateway Under Consruction!. Contact @+91-7504299519 or ommstoneart@gmail.com');  
});

document.getElementById('year').textContent = new Date().getFullYear();
loadCart();

/* Close modal on native button */
document.querySelector('.modal-close').addEventListener('click', () => modal.close());
