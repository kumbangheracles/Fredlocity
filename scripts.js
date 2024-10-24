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

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')
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

const selectionTab = document.querySelector('.selection-tab');

const search = document.querySelectorAll('.search');

let navbar = document.querySelector('.navbar')
const burger = document.querySelector('.burger')
burger.addEventListener('click', function(){
    navbar.classList.toggle('tampil');
    burger.classList.toggle('toggle');
})

const navigation = document.querySelectorAll('.navigation');
navigation.forEach(function(el){
    el.addEventListener('click', function(e){
        if (navbar.classList.contains('tampil')) {
            navbar.classList.remove('tampil');
            navbar.classList.add('tdktampil');
        }
        burger.classList.remove('toggle');
        
    })
})

// Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered with scope: ', registration.scope);
        })
        .catch((error) => {
          console.log('Service Worker registration failed: ', error);
        });
    });
  }