let dropdown = document.querySelectorAll('.dropdown');
const button = document.querySelectorAll('#button')

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




const items = document.querySelectorAll('.room');

function checkItemsInCenter() {
    const containerCenter = mainProduct.getBoundingClientRect().width / 2; // Titik tengah container
    const containerLeft = mainProduct.getBoundingClientRect().left;

    items.forEach(item => {
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.left + itemRect.width / 2 - containerLeft; // Titik tengah item relatif terhadap container
        
        // Cek apakah item berada di sekitar posisi tengah
        if (Math.abs(itemCenter - containerCenter) < itemRect.width / 2) {
            item.style.transform = 'scale(1.1)'; // Jika item dekat dengan tengah, scale(1.1)
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

let navbar = document.getElementById('nav')
const burger = document.querySelector('.burger')
burger.addEventListener('click', function(){
     // Hapus kelas 'tdktampil' jika ada untuk menghindari konflik animasi
     if (navbar.classList.contains('tdktampil')) {
        navbar.classList.remove('tdktampil');
    }
    // Toggle kelas 'tampil' untuk menampilkan atau menyembunyikan navbar
    navbar.classList.toggle('tampil');
})

const navigation = document.querySelectorAll('.navigation');
navigation.forEach(function(el){
    el.addEventListener('click', function(e){
        if (navbar.classList.contains('tampil')) {
            navbar.classList.remove('tampil');
            navbar.classList.add('tdktampil');
        }
    })
})