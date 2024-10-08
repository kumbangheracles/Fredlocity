let dropdown = document.querySelectorAll('.dropdown');
const button = document.querySelectorAll('#button')


for(let i = 0; i<button.length; i++){
    button[i].addEventListener('click', function(){
        dropdown[i].classList.toggle('active');
        button[i].classList.toggle('rotate');        
    })
}

const value = document.querySelector(".value");
const barProgress = document.querySelector(".bar-progress");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
let progress = 0;
const progressMainValue = document.querySelector('.main-value')

const deskRoom = document.querySelector('.desk-room');
const officeRoom = document.querySelector('.office-room');
const meetingRoom = document.querySelector('.meeting-room');

function updateProgress() {
    
     // Menampilkan angka progress
     if(progress === 33.5){
        progressMainValue.textContent = "01";
        // deskRoom.style.boxShadow = "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
        
        deskRoom.style.transform = "scale(1.1)";
        officeRoom.style.transform = "";
        meetingRoom.style.transform = "";
        
        

        // officeRoom.style.boxShadow = "";
        // meetingRoom.style.boxShadow ="";
     }else if(progress === 67){
        progressMainValue.textContent = "02";
        // officeRoom.style.boxShadow = "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";

        deskRoom.style.transform = "";
        officeRoom.style.transform = "scale(1.1)";
        meetingRoom.style.transform = "";

        // deskRoom.style.boxShadow = "";
        // meetingRoom.style.boxShadow = "";
    }else if(progress ===  100.5){
        progressMainValue.textContent = "03";
        // meetingRoom.style.boxShadow = "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
        
        deskRoom.style.transform = "";
        officeRoom.style.transform = "";
        meetingRoom.style.transform = "scale(1.1)";
        
        // officeRoom.style.boxShadow = "";
        // deskRoom.style.boxShadow = "";
    }
     barProgress.style.width = progress + '%';
    //  console.log(progress)
  }



nextButton.addEventListener('click', function(){
    if(progress <100.5){
        progress+= 33.5; // Tambah 33.5% setiap klik
        if(progress>100.5){
            progress = 33.5;
        }
        updateProgress();
        // barProgress.style.width = progress + "%";
    } else {
        progress = 100.5; // Reset ketika mencapai 100%
        barProgress.style.width = progress + '%';
    }
})

prevButton.addEventListener('click', function(){
    if (progress > 33.5) {
        progress -= 33.5; // Kurangi 33.5% setiap klik
        // barProgress.style.width = progress + '%';
        if(progress < 33.5){
            progress = 33.5;
        }
        updateProgress();

      }else {
        progress = 33.5; // Reset ketika mencapai 100%
        barProgress.style.width = progress + '%';
    }
})

const product = document.getElementById('product');

const prevButtonProduct = document.getElementById('product-button-prev')
const nextButtonProduct = document.getElementById('product-button-next')

const mainProduct = document.querySelector('.main-product')

// prevButton.addEventListener('click', function(){
//     mainProduct.scrollBy({
//         left: -100,
//         behavior: 'smooth',
//     });
// })

// document.getElementById('product-button-prev').onclick = function() {
//     document.querySelector('.main-product').scrollBy({
//         left: -100, // Jumlah pixel untuk scroll ke kiri
//         behavior: 'smooth'
//     });
// }
// document.getElementById('product-button-next').onclick = function() {
//     document.querySelector('.main-product').scrollBy({
//         left: 100, // Jumlah pixel untuk scroll ke kanan
//         behavior: 'smooth'
//     });
// }

let scrollAmount = 0;
const scrollStep = 240; // Berapa banyak pixel untuk di-scroll setiap klik
const maxScroll = document.querySelector('.main-product').scrollWidth - document.querySelector('.content-product').clientWidth;

document.getElementById('product-button-prev').onclick = function() {
    scrollAmount = Math.max(scrollAmount - scrollStep, 0); // Jangan sampai lebih dari batas kiri
    document.querySelector('.main-product').style.transform = `translateX(-${scrollAmount}px)`;
}

document.getElementById('product-button-next').onclick = function() {
    scrollAmount = Math.min(scrollAmount + scrollStep, maxScroll); // Jangan sampai lebih dari batas kanan
    document.querySelector('.main-product').style.transform = `translateX(-${scrollAmount}px)`;
}

// document.body.addEventListener('mousemove', function(event){
//     // posisi mouse
//     console. log(event.clientY);
//     // uuran browser
//     console.log(window.innerWidth);
//     const xPos = Math.round((event.clientX / window.innerWidth) * 255)
//     console.log(xPos);
//     const yPos = Math.round((event.clientY / window.innerHeight) * 255)
//     console.log(yPos);
//     // document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)';
// });



const items = document.querySelectorAll('.room');

function checkItemsInCenter() {
    const containerCenter = mainProduct.getBoundingClientRect().width / 2; // Titik tengah container
    const containerLeft = mainProduct.getBoundingClientRect().left;

    items.forEach(item => {
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.left + itemRect.width / 2 - containerLeft; // Titik tengah item relatif terhadap container
        
        // Cek apakah item berada di sekitar posisi tengah
        if (Math.abs(itemCenter - containerCenter) < itemRect.width / 2) {
            item.style.transform = 'scale(1.1)'; // Jika item dekat dengan tengah, scale
        } else {
            item.style.transform = 'scale(1)'; // Jika tidak, kembali ke ukuran normal
        }
    });
}

// Jalankan fungsi saat di-scroll
mainProduct.addEventListener('scroll', checkItemsInCenter);

// Panggil fungsi saat halaman pertama kali dimuat
window.addEventListener('load', checkItemsInCenter);

const selectionTab = document.querySelector('.selection-tab');

const search = document.querySelectorAll('.search');
// search[2].style.cursor = 'pointer';
// search.forEach(function(element) {
//     element.addEventListener('click', function() {
//         element.style.border = '1px solid black';
//         element.style.transition = '0.3s ease';
//     });
// });
// Array.from(searchs).forEach(function(inputElement) { //ubah htmlcollection menjadi array
//     inputElement.addEventListener('input', function() {
//         inputElement.style.border = '50px solid black'
//     });
// });

