if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('[App] Service Worker registered');

      registration.onupdatefound = () => {
        console.log('[App] Update found');
        const newWorker = registration.installing;

        newWorker.onstatechange = () => {
          console.log('[App] New SW state:', newWorker.state);
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            showUpdateBanner(newWorker);
          }
        };
      };
    });
  });

  // Jika controller berubah (karena skipWaiting), reload otomatis
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    console.log('[App] Controller changed - reloading...');
    window.location.reload();
  });
}

function showUpdateBanner(newWorker) {
  const banner = document.createElement('div');
  banner.style.position = 'fixed';
  banner.style.bottom = '0';
  banner.style.left = '0';
  banner.style.right = '0';
  banner.style.background = '#333';
  banner.style.color = 'white';
  banner.style.padding = '1em';
  banner.style.zIndex = '1000';
  banner.style.display = 'flex';
  banner.style.justifyContent = 'space-between';
  banner.style.alignItems = 'center';

  banner.innerHTML = `
    <span>Versi baru tersedia.</span>
    <button id="reload-btn" style="margin-left: 1em; padding: 0.5em 1em;">Muat Ulang</button>
  `;

  document.body.appendChild(banner);

  document.getElementById('reload-btn').addEventListener('click', () => {
    console.log('[App] Reload button clicked');
    newWorker.postMessage({ type: 'SKIP_WAITING' });
  });
}






   const API_URL = "https://script.google.com/macros/s/AKfycbxBAb5SRY4JEIPSvJGOuAd8BVq4TlzfjOAZCZ4MNOwvKAb7a1P8CnlM7dAv_S6bWvMM/exec";
  let allData = [];
  
  
 
  const tabs = document.querySelectorAll(".tab");
  const refresh = document.getElementById("refresh");
  const cardContainer = document.getElementById("card-container");
  const resultCount = document.getElementById("result-count");
  const loader = document.getElementById("loader-overlay");
  const loadata = document.getElementById("loader-data");








const tabTitles = [
  "FixAlamat",
  "Cari Data",
  "Cari RT RW",
  "FixAlamat"
 
];
 
 
  const swiper = new Swiper(".swiper", {
    speed: 300,
    resistanceRatio: 0.7,
    on: {
      slideChange: () => setActiveTab(swiper.activeIndex)
    }
  });

  
 
  
  
  
  function setTab(index) {
    swiper.slideTo(index);
  }

  


function setActiveTab(index) {
  tabs.forEach((tab, i) => {
    tab.classList.toggle("active", i === index);
  });

  // Scroll tab ke tengah
  const tabsWrapper = document.querySelector(".tabs-wrapper");
  const activeTab = tabs[index];
  const tabOffsetLeft = activeTab.offsetLeft;
  const tabWidth = activeTab.offsetWidth;
  const wrapperWidth = tabsWrapper.offsetWidth;
  const scrollLeft = tabOffsetLeft - (wrapperWidth / 2) + (tabWidth / 2);
  tabsWrapper.scrollTo({
    left: scrollLeft,
    behavior: "smooth"
  });
  // Ganti antara judul dan input search
  const headerTitle = document.getElementById("header-title");
  const searchInput = document.getElementById("search");
  const searchInput_rtrw = document.getElementById("pencarian");
  const kemBali = document.getElementById("kembali");
  const inFo = document.getElementById("info");
  if (index === 1) {
    searchInput_rtrw.style.display = "none";
    headerTitle.style.display = "none";
    searchInput.style.display = "block";
    kemBali.style.display = "block";
    inFo.style.display = "block";
  } else
  if (index === 2) {
    headerTitle.style.display = "none";
    searchInput_rtrw.style.display = "block";
    searchInput.style.display = "none";
    kemBali.style.display = "block";
    inFo.style.display = "block";
  }  
  
  else {searchInput_rtrw.style.display = "none";
    headerTitle.innerText = tabTitles[index] || "Judul";
    headerTitle.style.display = "block";
    searchInput.style.display = "none";
  //  searchInput.value = ""; // reset search saat pindah tab
    kemBali.style.display = "none";
    inFo.style.display = "none";
    
  }
} 
  

  swiper.slideTo(2, 0);
    setActiveTab(2);
window.setTab = setTab;
    
  function kembali() {document.querySelector('.search-bar').value = "";          document.querySelector('.search-rtrw').value = "";
 cari();                     
   searchData();                   
 // swiper.slideTo(0);
 //   setActiveTab(0);
  }

  function tambahh() {           
  swiper.slideTo(0);
    setActiveTab(0);
  }
  
  function showLoader() {
    loader.style.display = "flex";
  }

  function hideLoader() {
    loader.style.display = "none";
  }
 
  function showLoaderData() {
    loadata.style.display = "flex";
  }

  function hideLoaderData() {
    loadata.style.display = "none";
  }

  
 

function togglePassword() {
  const passwordInput = document.getElementById("login-password");
  const toggleIcon = document.querySelector(".toggle-password");

  const isText = passwordInput.type === "text";
  passwordInput.type = isText ? "password" : "text";

  // Ubah ikon sesuai mode
  toggleIcon.textContent = isText ? "🙈" : "👁";
}

 
  
 const desaPerUser = {
  "KEJOBONG": ["@Bandingan", "@Gumiwang", "@Kedarpan", "@Kejobong", "@Krenceng", "@Lamuk", "@Langgar", "@Nangkasawit", "@Nangkod", "@Pandansari", "@Pangempon", "@Sokanegara", "@Timbang", "@Tejasari", "⚠️ Kesalahan TLC"],
   
  "PENGADEGAN": ["@Bedagas", "@Karangjoho", "@Larangan", "@Pangadegan", "@Panunggalan", "@Pasunggingan", "@Tegalpingen", "@Tetel", "@Tumanggal", "⚠️ Kesalahan TLC"],
   
  
  "TEST": ["@Test1", "@Test2", "@Test3", "@Test3", "@Test4", "@Test5", "⚠️ Kesalahan TLC"], 
   
  "KALIGONDANG": ["@Arenan", "@Brecek", "@Cilapar", "@Kaligondang", "@Kalikajar", "@Kembaran Wetan", "@Lamongan", "@Pagerandong", "@Penaruban", "@Penolih", "@Selakambang", "@Selanegara", "@Sempor Lor", "@Sidanegara", "@Sidareja", "@Sinduraja", "@Slinga", "@Tejasari", "⚠️ Kesalahan TLC"]
};

function renderDesaOptions() {
  const userLogin = localStorage.getItem("userLogin");
  const desaList = desaPerUser[userLogin];

  const select = document.getElementById("add-desa");

  // Kosongkan semua opsi kecuali "Pilih Desa"
  select.innerHTML = '<option value="" disabled selected>-- Verifikasi Desa --</option>';

  if (!desaList) return; // jika user tidak cocok, jangan lanjut

  desaList.forEach(namaDesa => {
    const option = document.createElement("option");
    option.value = namaDesa;
    option.textContent = namaDesa.replace("@", ""); // tampilkan tanpa @
    select.appendChild(option);
  });

  // Tambahkan opsi "Lainnya"
  const lainnya = document.createElement("option");
  lainnya.value = "@Lainnya";
  lainnya.textContent = "Lainnya";
  select.appendChild(lainnya);
}
  
function renderEditDesaOptions(selectedValue = "") {
  const userLogin = localStorage.getItem("userLogin");
  const desaList = desaPerUser[userLogin] || [];
  const select = document.getElementById("edit-desa");

  if (!select) return;

  select.innerHTML = '<option value="-" selected disabled>-- Verifikasi Desa --</option>';

 desaList.forEach(namaDesa => {
    const option = document.createElement("option");
    option.value = namaDesa;
    option.textContent = namaDesa.replace("@", "");
    if (namaDesa === selectedValue) option.selected = true;
    select.appendChild(option);
  });

  const lainnya = document.createElement("option");
  lainnya.value = "@Lainnya";
  lainnya.textContent = "Lainnya";
  if (selectedValue === "@Lainnya") lainnya.selected = true;
  select.appendChild(lainnya);
}

       // Cek login
  const userLogin = localStorage.getItem("userLogin");
  const sheetAccess = localStorage.getItem("sheetAccess");
    
  if (userLogin && sheetAccess) {
    
    
   document.getElementById("login-section").classList.add("hidden");
      document.getElementById("main-section").classList.remove("hidden");
      
    document.getElementById("username").innerText = userLogin;
    // loadData(sheetAccess); // optional

  renderDesaOptions();
    renderEditDesaOptions();
 
  
  }
  
  
  const userLogin2 = localStorage.getItem("userLogin");  

  
  if (userLogin2 == "KEJOBONG"){
     const tablekjb = document.getElementById("table_kjb");
    //  tablekjb.style.display = "block";   
     }
  else {
    const tablekjb = document.getElementById("table_kjb");

 // tablekjb.style.display = "none";

    tablekjb.innerText = "konten tidak ada"; 
  }
  // Auto-fill jika remember me aktif
  window.addEventListener("DOMContentLoaded", () => {
       
    

    const savedUser = localStorage.getItem("savedUsername");
    const savedPass = localStorage.getItem("savedPassword");
    const remember = localStorage.getItem("rememberMe");

    if (remember === "true") {
      document.getElementById("login-username").value = savedUser || "";
      document.getElementById("login-password").value = savedPass || "";
      document.getElementById("remember-me").checked = true;
    }
  });

  function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    const remember = document.getElementById("remember-me").checked;

   
    
    
    if (remember) {
      localStorage.setItem("savedUsername", username);
      localStorage.setItem("savedPassword", password);
      localStorage.setItem("rememberMe", true);
    } else {
      localStorage.removeItem("savedUsername");
      localStorage.removeItem("savedPassword");
      localStorage.removeItem("rememberMe");
    }
    
   showLoader()  
 fetch(API_URL + "?action=login&username=" + username + "&password=" + password)  
/*fetch(`${API_URL}?action=login&username=${username}&password=${password}`)*/
     .then(res => res.json())
      .then(response => {
        if (response.status === "success") {
        localStorage.setItem("userLogin", response.username);
          localStorage.setItem("sheetAccess", response.sheet);
    document.getElementById("login-section").classList.add("hidden");
      document.getElementById("main-section").classList.remove("hidden");
            
        
          location.reload();
         hideLoader();
          
        } else {
        //  alert("Login gagal: " + response.message);
       
     showAlert("Login gagal: " + response.message, {
  okText: "OK",
  okColor: "#28a745",
  onClose: () => console.log("Alert selesai.")
});    
          
          hideLoader(); 
          
        }
  
  
  
 
      })
      .catch(err => {
     //   alert("Terjadi kesalahan saat login");
  
  showAlert("Terjadi kesalahan saat login ", {
  okText: "OK",
  okColor: "#28a745",
  onClose: () => console.log("Alert selesai.")
});    
  hideLoader()  
  
        console.error(err);
      });
  }

  function logout() {
    showLoader();
    localStorage.removeItem("userLogin");
    localStorage.removeItem("sheetAccess");
    
  
    location.reload();
  //  hideLoader();  

    

   
  }



function saveData() {
  const nama = document.getElementById("add-nama").value;
  const alamat = document.getElementById("add-alamat").value;
  const telepon = document.getElementById("add-telepon").value;
  const alamataseli = document.getElementById("add-alamataseli").value;
  const desa = document.getElementById("add-desa").value;

  const sheet = localStorage.getItem("sheetAccess"); // Ambil nama sheet dari login

  if (!sheet) {
    alert("Akses sheet tidak ditemukan. Silakan login ulang.");
    return;
  }

  showLoader();
  
 /* fetch(`${API_URL}?action=create&sheetname=${sheet}&nama=${nama}&alamat=${alamat}&telepon=${telepon}&alamataseli=${alamataseli}&desa=${desa}`)*/
  
  
/*fetch(API_URL + "?action=create" + "&sheetname=" + sheet + "&nama=" + nama + "&alamat=" + alamat + "&telepon=" + telepon + "&alamataseli=" + alamataseli + "&desa=" + desa)  
*/
  fetch(API_URL + "?action=create" + "&sheetname=" + encodeURIComponent(sheet) + "&nama=" + encodeURIComponent(nama) + "&alamat=" + encodeURIComponent(alamat) +  "&telepon=" + encodeURIComponent(telepon) + "&alamataseli=" + encodeURIComponent(alamataseli) + "&desa=" + encodeURIComponent(desa))

  .then(res => res.json())
    .then(response => {
      if (response.status === "success") {
        closeModal("modal-add");
        localStorage.setItem("idDataBaru", response.id);
        
        
        loadData();
        swiper.slideTo(1);
        setActiveTab(1);
document.getElementById("nama-status").textContent = "";
        document.getElementById("add-nama").value = "";
        document.getElementById("add-alamat").value = "";
        document.getElementById("add-telepon").value = "";
        document.getElementById("add-alamataseli").value = "";
        document.getElementById("add-desa").value = "";
        
        showNotification("Alamat berhasil disimpan", "success");
      } else {
      //  alert("Gagal menyimpan data baru.");
        
        showNotification("Gagal menyimpan data baru");
       hideLoader();
      }
    })
    .catch(err => {
      console.error("Fetch error:", err);
      hideLoader();
  //  alert("Gagal menyimpan data baru.");
  showNotification("Gagal simpan data: " + err.message, "error");

});
}


  
let alamatSementara = ""; // Untuk simpan sementara
let alamatInput = document.getElementById("add-alamat");

  function checkNama() {
    let inputNama = document.getElementById("add-nama").value.toLowerCase().trim();
    let statusText = document.getElementById("nama-status");

    if (inputNama === "") {
        statusText.textContent = "";
statusText.className = "nama-status";
        alamatInput.value = "";
        return;
    }

    let found = allData.find(item => item[1].toLowerCase() === inputNama);
    if (found) {
      
      play();
        alamatSementara = found[2]; // Simpan alamat untuk nanti
      /*  document.getElementById("modal-text5").innerHTML =
            `<br><h3> Nama sudah tersimpan!</h3><br>Alamat: <b>${alamatSementara}</b><br><br>Lanjut isi dengan alamat ini?`;*/
     document.getElementById("modal-text5").innerHTML =
  "<br><h3> Nama sudah tersimpan!</h3><br>Alamat: <b>" + alamatSementara + "</b><br><br>Lanjut isi dengan alamat ini?";
        document.getElementById("modal-confirm5").style.display = "flex";
      getar();
    } else {
        statusText.textContent = "";
        statusText.className = "nama-status invalid";
    }
}
  
function confirmIsiAlamat(setuju) {
    const modal = document.getElementById("modal-confirm5");
    modal.style.display = "none";

    const statusText = document.getElementById("nama-status");
    if (setuju) {
        alamatInput.value = alamatSementara;
        statusText.textContent = "Alamat berhasil ditempelkan";
        statusText.className = "nama-status valid";
      showNotification("Alamat berhasil ditempelkan", "success");
    } else {
        statusText.textContent = "Nama sudah pernah di simpan";
        statusText.className = "nama-status invalid";
    }
}
  
  
function loadData() { 
  
  
  
    
  hideLoader();
  
  
  showLoaderData();
 // refresh.innerHTML = "<p style='font-size:40px;padding:15px'></p>";
  const idDataBaru = localStorage.getItem("idDataBaru");
  const idDataEdit = localStorage.getItem("idDataEdit");
  const searchInput = document.getElementById("search");
  const sheet = localStorage.getItem("sheetAccess")
 /* fetch(`${API_URL}?action=read&sheetname=${sheet}`)*/
  fetch(API_URL + "?action=read&sheetname=" + sheet)
    .then(res => res.json())
    .then(response => {
      if (!response || response.status !== "success" || !("data" in response)) {
  throw new Error("Data dari server tidak valid.");
}
const data = Array.isArray(response.data) ? response.data : [];
    
    
  allData = data; //  WAJIB: Update allData agar sinkron dengan data terbaru  
if (data.length === 0) {
 /*   cardContainer.innerHTML = `
      <div style="text-align:center; padding:60px 20px; color:#666;">
        <div style="font-size:68px;">O</div><br>
        <h4>Data masih Kosong</h4><br><br><br><br>
        <center><button class ="btn" onclick="kembali()">tambah data</button>
      </center></div>
    `;*/
 cardContainer.innerHTML = 
  '<div style="text-align:center; padding:60px 20px; color:#666;">' +
    '<div style="font-size:68px;">O</div><br>' +
    '<h4>Data masih Kosong</h4><br><br><br><br>' +
    '<center><button class="btn" onclick="tambahh()">tambah data</button></center>' +
  '</div>';
  
    resultCount.innerText = "(0)";
   // refresh.innerText = "";//Data diperbarui
document.querySelector('.search-bar').disabled = true;
    hideLoaderData();
    return;
  }
      allData = data.reverse();
      const tampilkanSemua = allData.map(item => {
        const [id, nama, alamat, telepon, alamataseli, desa, tanggal] = item;       
        return [id, nama, alamat, telepon, alamataseli, desa, tanggal, nama, alamat, desa];
      });
const userLogin = localStorage.getItem("userLogin");    
      renderCards(tampilkanSemua, userLogin, idDataBaru, idDataEdit);
     // searchInput.value = "";
     //  refresh.innerText = "";//Data Diperbarui
      hideLoaderData();     localStorage.removeItem("idDataBaru");
      localStorage.removeItem("idDataEdit");
    })
    .catch(err => {
      console.error("Fetch error:", err);
   //   refresh.innerText = "Gagal memuat";
    showNotification("Jaringan anda tidak stabil, silahkan cek jaringan anda", "success");
  //  getar();
    hideLoaderData();
    
    
    });
}
 
function LoadingRefresh() { 
  const loadMoreBtn = document.getElementById("load-more-btn");
  
  hideLoader();
  
 // resultCount.innerText = "";
 /* cardContainer.innerHTML =`
   <div style="height: calc(100vh - 145px); background: #f9f9f9;width: 100%; display: flex; align-items: center; justify-content: center; font-weight: 400; text-align: center; font-size: 17px;">

  
  <div style="margin-top:-120px;display: flex; flex-direction: column; align-items: center; max-width: 100%;background:#f9f9f9;">

    <img style="max-width: 380px; width: 100%;left:0; margin-bottom: 8px;padding:0;margin:0" 
         src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJviXZzHdH2T7PGZKaXnZrwYMbtaGz3fnwBdLIB9_whvH8ouLL26WC5zVhOZyoRFmITaho8fEJiKCfAAl3K5p6HZpzJ79Iw6JIJXnk5ASD7bc5z3CL_t90irEmvzT_9IS36F_cpvtpv-H3rYC7zNWzRsLbp-zKIOftzg3_ZyQT-4z6BaBqu2EPDWWDkRt_/s720/1000148136.jpg" 
         alt="Tidak ada data">

    <div style="background:#f9f9f9;">Tidak ada data</div>
    
  </div>   
</div>
` ;*/
  cardContainer.innerHTML = 
    '<div style="height: calc(100vh - 145px); background: #f9f9f9;width: 100%; display: flex; align-items: center; justify-content: center; font-weight: 400; text-align: center; font-size: 17px;">' +
    
        '<div style="margin-top:-120px;display: flex; flex-direction: column; align-items: center; max-width: 100%;background:#f9f9f9;">' +
    
            '<img style="max-width: 380px; width: 100%;left:0; margin-bottom: 8px;padding:0;margin:0" ' + 
            'src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJviXZzHdH2T7PGZKaXnZrwYMbtaGz3fnwBdLIB9_whvH8ouLL26WC5zVhOZyoRFmITaho8fEJiKCfAAl3K5p6HZpzJ79Iw6JIJXnk5ASD7bc5z3CL_t90irEmvzT_9IS36F_cpvtpv-H3rYC7zNWzRsLbp-zKIOftzg3_ZyQT-4z6BaBqu2EPDWWDkRt_/s720/1000148136.jpg" ' + 
            'alt="Tidak ada data">' +
    
            '<div style="background:#f9f9f9;">Tidak ada data</div>' +
        
        '</div>' +      
    '</div>';
  loadMoreBtn.style.display = "none";
 refresh.innerHTML = "<p style='padding:12px'><img width='85px' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDmcpoJ8DOvaARXgktt0UHnzO4JpiRgF71UbPyuxzIcFcCgkiUQbWDfLdvcoEnQ8ftNPMF2K6nIcUXk3p7qRouAAI7wMQ7ls4cUgUkiq_z6i6xe-mhqMc0LhGBrPfXLIW5n1GqI9OHRPJ6vmix-SzWmLhTnLDexTEa3JhoRmktE0dpT3LstdMsGCPCejZn/s200/PipKSqoTk55M6sKtik.webp' /></p>";
  const idDataBaru = localStorage.getItem("idDataBaru");
  const idDataEdit = localStorage.getItem("idDataEdit");
  const searchInput = document.getElementById("search");
  const sheet = localStorage.getItem("sheetAccess")
  /*fetch(`${API_URL}?action=read&sheetname=${sheet}`)*/
 fetch(API_URL + "?action=read&sheetname=" + sheet)
    .then(res => res.json())
    .then(response => {
      if (!response || response.status !== "success" || !("data" in response)) {
  throw new Error("Data dari server tidak valid.");
}
const data = Array.isArray(response.data) ? response.data : [];
if (data.length === 0) {
  /*  cardContainer.innerHTML = `
      <div style="text-align:center; padding:60px 20px; color:#666;">
        <div style="font-size:68px;">I</div><br>
        <h4>Data masih Kosong</h4><br><br><br><br>
        <center><button class ="btn" onclick="kembali()">tambah data</button>
      </center></div>
    `;*/
  cardContainer.innerHTML = 
    '<div style="text-align:center; padding:60px 20px; color:#666;">' +
        '<div style="font-size:68px;">O</div><br>' +
        '<h4>Data masih Kosong</h4><br><br><br><br>' +
        '<center><button class="btn" onclick="kembali()">tambah data</button></center>' +
    '</div>';
    resultCount.innerText = "(0)";
    refresh.innerText = "";//Data diperbarui
document.querySelector('.search-bar').disabled = true;
 //   hideLoaderData();
    return;
  }
      allData = data.reverse();
      const tampilkanSemua = allData.map(item => {
        const [id, nama, alamat, telepon, alamataseli, desa, tanggal] = item;       
        return [id, nama, alamat, telepon, alamataseli, desa, tanggal, nama, alamat, desa];
      });
const userLogin = localStorage.getItem("userLogin");    
      renderCards(tampilkanSemua, userLogin, idDataBaru, idDataEdit);
      searchInput.value = "";
       refresh.innerText = "";//Data Diperbarui
 //     hideLoaderData();     localStorage.removeItem("idDataBaru");
      localStorage.removeItem("idDataEdit");
    })
    .catch(err => {
      console.error("Fetch error:", err);
     refresh.innerText = ""; 
// alert("Jaringan anda tidak stabil, silahkan cek jaringan anda");
   getar();
  showNotification("Jaringan anda tidak stabil, silahkan cek jaringan anda", "success");
   //  hideLoaderData();
    });
}
 

  
  
let currentRenderIndex = 0;
let currentRenderData = [];
let renderLimit = 7;// batas limit
  
  
 function onRenderLimitChange() {
  const selected = document.getElementById("render-limit").value;
  renderLimit = selected === "all" ? Infinity : parseInt(selected);
  const userLogin = localStorage.getItem("userLogin") ;
  renderCards(currentRenderData, userLogin);
}
    

function renderCards(data, userLogin, idBaru = null, idEdit = null, append = false) {
  
  if (!append) {
    currentRenderIndex = 0;
    currentRenderData = data;
    cardContainer.innerHTML = "";
  }


 
  const limitedData = currentRenderData.slice(currentRenderIndex, currentRenderIndex + renderLimit);
  currentRenderIndex += renderLimit;

  
  
  cardContainer.classList.add("fade-in");
 /* resultCount.innerText = `(${data.length})`;*/
 resultCount.innerText = "(" + data.length + ")"; 
document.querySelector('.search-bar').disabled = false;
  
 limitedData.forEach(item => {
  const [id, namaHTML, alamatHTML, telepon, alamataseliHTML, desaHTML, tanggalHTML, namaRaw, alamatRaw, desaRaw] = item;
  
  const isBaru = id === idBaru;
  const isEdit = id === idEdit;
  const maskedNumber1 = telepon.slice(-4).padStart(telepon.length, "*");
   const showDeleteButton = (desaHTML === '-' || desaHTML === '@Lainnya');
  const showCallButton = telepon !== '0';
  const DesaLock = (desaHTML !== '-' && desaHTML !== '@Lainnya');
  const pesanWA = encodeURIComponent(
    "Halo 【" + namaRaw + "】, kami dari J&T Express ingin memastikan Alamat pengiriman paket COD anda. Mohon bantuannya untuk konfirmasi alamat lengkapnya,\n\nApakah benar alamat lengkapnya di Desa【" + alamataseliHTML + "】?\n\nTerima kasih"
  );

  const card = document.createElement("div");
  card.className = "card";



  // Set data-* attributes
  card.dataset.id = id;
  card.dataset.nama = namaRaw;
  card.dataset.alamat = alamatRaw;
  card.dataset.telepon = telepon;
  card.dataset.alamataseli = alamataseliHTML;
  card.dataset.desa = desaRaw;
  card.dataset.tanggal = tanggalHTML;

  // Tambahkan event listener atau onclick
  card.setAttribute("onclick", "showDetailModal(this)");

  card.innerHTML = `
    <div class="card-header">
      <div class="circle">1</div>
      <span class="timestamp">${tanggalHTML}</span>
    </div>
    <div class="divider"></div>
    <div class="info">
      <span class="label">Penerima:</span>
      <span class="value" style="font-weight:500;white-space: pre-line;">${namaHTML}</span>
    </div>
    <div class="grid-2">
      <span class="label">No. Hp Penerima:</span>
      <span class="label">Alamat Terverifikasi:</span>
      <span class="value">${maskedNumber1}</span>
      <span class="value">${desaHTML}${DesaLock ? ' <i class="fas fa-lock"></i>' : ''}</span>
    </div>
    <div class="info">
      <span class="label">Alamat Penerima:</span>
      <!--<span style="white-space: pre-line;font-weight:500;">

       </span>-->
   <span class="value" style=" font-weight:500;white-space: pre-line; ">  ${alamatHTML}  </span>
      
    </div>
    <div class="divider"></div>
    <div class="action-buttons">
      ${showDeleteButton ? `<i onclick="event.stopPropagation(); deleteData('${id}')" class="fas fa-trash-alt text-red"></i>` : ''}
      ${showCallButton ? `<a href="tel:${telepon}" onclick="event.stopPropagation()"><i class="fas fa-phone text-red"></i></a>` : ''}
      <a href="https://wa.me/${telepon.replace(/^0/, '62')}?text=${pesanWA}" target="_blank" onclick="event.stopPropagation()">
        <i class="fab fa-whatsapp-square text-green"></i>
      </a>
    </div>
    ${isBaru ? '<div class="badge">TERSIMPAN</div>' : ''}
    ${isEdit ? '<div class="badge badge-edit">SUDAH EDIT</div>' : ''}
  `;

  cardContainer.appendChild(card);
});

  
  /*  limitedData.forEach(item => {
    const [id, namaHTML, alamatHTML, telepon, alamataseliHTML, desaHTML, tanggalHTML, namaRaw, alamatRaw, desaRaw] = item;
    const isBaru = id === idBaru;
    const isEdit = id === idEdit;
    const maskedNumber1 = telepon.slice(-4).padStart(telepon.length, "*");
    const showDeleteButton = (desaHTML === '-' || desaHTML === '@Lainnya' );
    const showCallButton = telepon !== '0';
 const DesaLock = (desaHTML !== '-' && desaHTML !== '@Lainnya' );
  
    
const pesanWA = encodeURIComponent("Halo 【" + namaRaw + "】, kami dari J&T Express ingin memastikan Alamat pengiriman paket COD anda. Mohon bantuannya untuk konfirmasi alamat lengkapnya,\n\nApakah benar alamat lengkapnya di Desa【" + alamataseliHTML + "】?\n\nTerima kasih");
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML ="<div onclick=\"showDetailModal('" + id + "', '" + escapeQuotes(namaRaw) + "', '" + escapeQuotes(alamatRaw) + "', '" + telepon + "', '" + alamataseliHTML + "', '" + escapeQuotes(desaRaw) + "', '" + tanggalHTML + "')\">" + "<div class=\"card-header\">" + "<div class=\"circle\">1</div>" + "<span class=\"timestamp\">" + tanggalHTML + "</span>" + "</div>" + "<div class=\"divider\"></div>" + "<div class=\"info\">" + "<span class=\"label\">Penerima:</span>" + "<span class=\"value\" style=\"font-weight:500;white-space: pre-line;\">" + namaHTML + "</span>" + "</div>" + "<div class=\"grid-2\">" + "<span class=\"label\">No. Hp Penerima:</span>" + "<span class=\"label\">Alamat Terverifikasi:</span>" + "<span class=\"value\">" + maskedNumber1 + "</span>" + "<span class=\"value\">" + desaHTML + (DesaLock ? " <i class=\"fas fa-lock\"></i>" : "") + "</span>" + "</div>" + "<div class=\"info\">" + "<span class=\"label\">Alamat Penerima:</span>" + "<p class=\"value\" style=\"white-space: pre-line;font-weight:500;\"><span style=\"font-weight:400;color:gray\"><!--PURBALINGGA, " + userLogin + ", --></span>" + alamatHTML + "</p>" + "</div>" + "<div class=\"divider\"></div>" + "</div>" + "<div class=\"action-buttons\">" + (showDeleteButton ? "<i onclick=\"deleteData('" + id + "')\" class=\"fas fa-trash-alt text-red\"></i>" : "") + (showCallButton ? "<a href=\"tel:" + telepon + "\" onclick=\"event.stopPropagation()\"><i class=\"fas fa-phone text-red\"></i></a>" : "") + "<a href=\"https://wa.me/" + telepon.replace(/^0/, '62') + "?text=" + pesanWA + "\" target=\"_blank\" onclick=\"event.stopPropagation()\">" + "<i class=\"fab fa-whatsapp-square text-green\"></i>" + "</a>" + "</div>" + (isBaru ? "<div class=\"badge\">TERSIMPAN</div>" : "") + (isEdit ? "<div class=\"badge badge-edit\">SUDAH EDIT</div>" : "");
  
    card.setAttribute("data-id", id);
    cardContainer.appendChild(card);
  });

*/   
 /* setTimeout(() => {
    cardContainer.classList.remove("fade-in");
  }, 50);

*/
  
    
const loadMoreBtn = document.getElementById("load-more-btn");


const sisaData = currentRenderData.length - currentRenderIndex;
if (renderLimit === Infinity || sisaData <= 0) {
  loadMoreBtn.style.display = "none";
} else {
/*  loadMoreBtn.innerText = `Lihat Selanjutnya  (${sisaData})`;*/
  loadMoreBtn.innerText = "Lihat Selanjutnya  (" + sisaData + ")";
  loadMoreBtn.style.display = "block";
}
}  
 
function loadMore() {
  const userLogin = localStorage.getItem("userLogin");
  renderCards(currentRenderData, userLogin, null, null, true);
}
    

function escapeQuotes(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '\\"');
}


let debounceTimer;
document.getElementById("search").addEventListener("input", function () {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    searchData();
  }, 300); // Delay 300ms agar tidak terlalu sering trigger
});  
function searchData() {
  const query = document.getElementById("search").value.toLowerCase().trim();
  const userLogin = localStorage.getItem("userLogin") ;
  
 if (!allData || allData.length === 0) {

  cardContainer.innerHTML = 
  '<div style="text-align:center; padding:60px 20px; color:#666;">' +
    '<div style="font-size:68px;">O</div><br>' +
    '<h4>Data masih Kosong</h4><br><br><br><br>' +
    '<center><button class="btn" onclick="kembali()">tambah data</button></center>' +
  '</div>'; 
   /*   cardContainer.innerHTML = `
      <div style="text-align:center; padding:60px 20px; color:#666;">
        <div style="font-size:68px;">O</div><br>
        <h4>Data masih Kosong</h4><br><br><br><br>
        <center><button class ="btn" onclick="kembali()">tambah data</button>
      </center></div>
    `;*/
    resultCount.innerText = "(0)";
    return;
  }  
  
  if (query === "") {
    const tampilkanSemua = allData.map(item => {
      const [id, nama, alamat, telepon, alamataseli, desa, tanggal] = item;
      return [id, nama, alamat, telepon, alamataseli, desa, tanggal, nama, alamat, desa];
    });
    renderCards(tampilkanSemua, userLogin);
  /*  resultCount.innerText = `(${allData.length})`;*/
   resultCount.innerText = '(' + allData.length + ')';
    return;  };
  const keywords = query.split(/\s+/).filter(Boolean);
  function highlightMatchingWords(text) {
    const words = text.split(/\s+/);
    return words.map(word => {
      const wordLower = word.toLowerCase();
      const match = keywords.some(kw => wordLower.includes(kw));
     return match ? '<span class="highlight">' + word + '</span>' : word;
 /*  return match ? `<span class="highlight">${word}</span>` : word; */  }).join(" ");  }
  const filtered = allData
    .map(item => {
      const [id, nama, alamat, telepon, alamataseli, desa, tanggal] = item;
     /* const combinedText = `${nama} ${alamat} ${desa}`.toLowerCase();*/
      const combinedText = (nama + " " + alamat/* + " " + desa*/).toLowerCase();
      const allKeywordsMatch = keywords.every(kw => combinedText.includes(kw));
      if (allKeywordsMatch) {
        const highlightedNama = highlightMatchingWords(nama);
        const highlightedAlamat = highlightMatchingWords(alamat);
       /* const highlightedDesa = highlightMatchingWords(desa);*/
        return [id, highlightedNama, highlightedAlamat, telepon, alamataseli, /*highlightedDesa*/desa, tanggal, nama, alamat, desa];
      }
      return null;
    })
    .filter(Boolean);
  if (filtered.length === 0) {
  /*  cardContainer.innerHTML = `
      <div style="background:#f9f9f9;height: calc(100dvh - 150px);width: 100%; padding: 50px 0px; font-weight:400;text-align: center; font-size: 16px;"><br><br><br>Hasil tidak ditemukan</div>
    `;*/
    cardContainer.innerHTML = 
  "<div style=\"background:#f9f9f9;height: calc(100dvh - 150px);width: 100%; padding: 50px 0px; font-weight:400;text-align: center; font-size: 16px;\"><br><br><br>Hasil tidak ditemukan</div>";

    resultCount.innerText = "(0)";   
    document.getElementById("load-more-btn").style.display = "none"; 
    
  } else {
    renderCards(filtered, userLogin);
   
    
  }
}




let openModals = [];
  
  
  function showAddModal(){
    document.getElementById('modal-add').style.display='flex';
  openModals.push('modal-add'); 

  history.pushState({ modalId: 'modal-add' }, '');  
    
    
  };
 
 

  let pendingEditData = null;

  function showEditModal(id, nama, alamat, telepon, alamataseli, desa, tanggal) {
 
   // Simpan data edit sementara
pendingEditData = {id, nama, alamat, telepon, alamataseli, desa, tanggal };
    
   
    if (desa !== "-" && desa !== "@Lainnya" ) {
    // Jika desa bukan "-", minta PIN
    document.getElementById("editPasswordModal").style.display = "flex";
      
    openModals.push('editPasswordModal');
    history.pushState({ modalId: 'editPasswordModal' }, '');  
      
      
  } else {
    // Jika desa "-", langsung buka modal edit
    renderEditDesaOptions(desa);
    document.getElementById("edit-id").value = id;
    document.getElementById("edit-nama").value = nama;
    document.getElementById("edit-alamat").value = alamat;
    document.getElementById("edit-telepon").value = telepon;
    document.getElementById("edit-alamataseli").value = alamataseli;
    document.getElementById("edit-tanggal").value = tanggal;

  
   document.getElementById("modal-edit").style.display = "flex";
    openModals.push('modal-edit');
    history.pushState({ modalId: 'modal-edit' }, '');

    
    
  
    }
    
  }

  
  
  
 
   
 document.getElementById('confirmEditBtn').onclick = function () {
  const inputPin = document.getElementById('editModalPasswordInput').value;
  const correctPin = getTodayPin(); // sementara

  if (inputPin !== correctPin) {
    showNotification("PIN salah!", "error");
    return;
  }

  document.getElementById('editPasswordModal').style.display = 'none';
  document.getElementById('editModalPasswordInput').value = "";

  if (!pendingEditData) {
    showNotification("Data tidak tersedia.", "error");
    return;
  }

  const { id, nama, alamat, telepon, alamataseli, desa, tanggal } = pendingEditData;

  renderEditDesaOptions(desa);
  document.getElementById("edit-id").value = id;
  document.getElementById("edit-nama").value = nama;
  document.getElementById("edit-alamat").value = alamat;
  document.getElementById("edit-telepon").value = telepon;
  document.getElementById("edit-alamataseli").value = alamataseli;
  document.getElementById("edit-tanggal").value = tanggal;

  document.getElementById("modal-edit").style.display = "flex";

   openModals.push('modal-edit');
  history.pushState({ modalId: 'modal-edit' }, '');

  pendingEditData = null;
};

 function showDetailModal(el) {
  const id = el.dataset.id;
  const nama = el.dataset.nama;
  const alamat = el.dataset.alamat;
  const telepon = el.dataset.telepon;
  const alamataseli = el.dataset.alamataseli;
  const desa = el.dataset.desa;
  const tanggal = el.dataset.tanggal;

  tempDetail = { id, nama, alamat, telepon, alamataseli, desa, tanggal };

  const userLogin = localStorage.getItem("userLogin");
  const showbadgeButton = desa !== '-';
  const salahTLC = desa === '⚠️ Kesalahan TLC';

  document.getElementById("detail-nama").innerText = nama;
  document.getElementById("detail-alamat").innerText = alamat;

  const last4Digits = telepon.slice(-4); 
  const maskedNumber = last4Digits.padStart(telepon.length, "*");

  document.getElementById("detail-kecamatan").innerText = salahTLC ? desa : userLogin;
  document.getElementById("detail-telepon").innerText = maskedNumber;
  document.getElementById("detail-desa").innerText = desa;
  document.getElementById("detail-tanggal").innerText = tanggal;

  document.getElementById("salahTLC").innerHTML = salahTLC ? desa : 'PURBALINGGA';

  document.getElementById("detail-alamataseli").innerHTML =
    showbadgeButton
      ? alamataseli + ' <span><svg width="17px" height="17px" viewBox="0 0 17 17" class="VerifiedIcon"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-767.000000, -573.000000)"><g transform="translate(-80.000000, -57.000000)"><g transform="translate(100.000000, 77.000000)"><g transform="translate(400.000000, 401.000000)"><g transform="translate(347.000000, 152.000000)"><path d="M1.74035847,11.2810213 C1.61434984,11.617947 1.54545455,11.982746 1.54545455, 12.3636364 C1.54545455,14.0706983 2.92930168,15.4545455 4.63636364,15.4545455 C5.01725401,15.4545455 5.38205302,15.3856502 5.71897873,15.2596415 C6.22025271,16.2899361 7.2772042,17 8.5,17 C9.7227958,17 10.7797473,16.2899361 11.2810213,15.2596415 L11.2810213,15.2596415 C11.617947,15.3856502 11.982746,15.4545455 12.3636364,15.4545455 C14.0706983,15.4545455 15.4545455,14.0706983 15.4545455,12.3636364 C15.4545455,11.982746 15.3856502,11.617947 15.2596415,11.2810213 C16.2899361,10.7797473 17,9.7227958 17,8.5 C17,7.2772042 16.2899361,6.22025271 15.2596415,5.71897873 C15.3856502,5.38205302 15.4545455,5.01725401 15.4545455,4.63636364 C15.4545455,2.92930168 14.0706983,1.54545455 12.3636364,1.54545455 C11.982746,1.54545455 11.617947,1.61434984 11.2810213,1.74035847 C10.7797473,0.71006389 9.7227958,0 8.5,0 C7.2772042,0 6.22025272,0.71006389 5.71897873,1.74035847 C5.38205302,1.61434984 5.01725401,1.54545455 4.63636364,1.54545455 C2.92930168,1.54545455 1.54545455,2.92930168 1.54545455,4.63636364 C1.54545455,5.01725401 1.61434984,5.38205302 1.74035847,5.71897873 C0.71006389,6.22025272 0,7.2772042 0,8.5 C0,9.7227958 0.71006389,10.7797473 1.74035847,11.2810213 L1.74035847,11.2810213 Z" class="verified-bg" opacity="1" fill="#44A7F6"></path><path d="M11.2963464,5.28945679 L6.24739023,10.2894568 L7.63289664,10.2685106 L5.68185283,8.44985845 C5.27786241,8.07328153 4.64508754,8.09550457 4.26851062,8.499495 C3.8919337,8.90348543 3.91415674,9.53626029 4.31814717,9.91283721 L6.26919097,11.7314894 C6.66180802,12.0974647 7.27332289,12.0882198 7.65469737,11.7105432 L12.7036536,6.71054321 C13.0960757,6.32192607 13.0991603,5.68876861 12.7105432,5.29634643 C12.3219261,4.90392425 11.6887686,4.90083965 11.2963464,5.28945679 L11.2963464,5.28945679 Z" class="verified-check" fill="#FFFFFF"></path></g></g></g></g></g></g></svg></span>'
      : alamataseli;

  // Edit button
  const editBtn = document.getElementById("btn-edit-detail");
  if (editBtn) {
    editBtn.onclick = () => {
      showEditModal(id, nama, alamat, telepon, alamataseli, desa, tanggal);
    };
  }

  // Tampilkan modal
  document.getElementById("modal-detail").style.display = "flex";
  openModals.push('modal-detail'); 
  history.pushState({ modalId: 'modal-detail' }, '');
}


/*  
 function showDetailModal(id, nama, alamat, telepon, alamataseli, desa, tanggal) {
  tempDetail = { id, nama, alamat, telepon, alamataseli, desa, tanggal };

  const userLogin = localStorage.getItem("userLogin");
   
const showbadgeButton = desa !== '-';
 const salahTLC = desa === '⚠️ Kesalahan TLC';

     
  document.getElementById("detail-nama").innerText = nama;
//  document.getElementById("detail-alamat").innerText = alamat + " " + userLogin;
   
document.getElementById("detail-alamat").innerText = alamat;
  const last4Digits = telepon.slice(-4); 
  const maskedNumber = last4Digits.padStart(telepon.length, "*");

  document.getElementById("detail-kecamatan").innerText = salahTLC ? desa : userLogin;
   
  document.getElementById("detail-telepon").innerText = maskedNumber;
  document.getElementById("detail-desa").innerText = desa;
   
  document.getElementById("detail-tanggal").innerText = tanggal;
  //document.getElementById("detail-alamataseli").innerText = "" + alamataseli;
   
  document.getElementById("salahTLC").innerHTML =  salahTLC ? desa : 'PURBALINGGA';
   
   document.getElementById("detail-alamataseli").innerHTML =  showbadgeButton ? alamataseli + ' <span><svg width="17px" height="17px" viewBox="0 0 17 17" class="VerifiedIcon"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-767.000000, -573.000000)"><g transform="translate(-80.000000, -57.000000)"><g transform="translate(100.000000, 77.000000)"><g transform="translate(400.000000, 401.000000)"><g transform="translate(347.000000, 152.000000)"><path d="M1.74035847,11.2810213 C1.61434984,11.617947 1.54545455,11.982746 1.54545455, 12.3636364 C1.54545455,14.0706983 2.92930168,15.4545455 4.63636364,15.4545455 C5.01725401,15.4545455 5.38205302,15.3856502 5.71897873,15.2596415 C6.22025271,16.2899361 7.2772042,17 8.5,17 C9.7227958,17 10.7797473,16.2899361 11.2810213,15.2596415 L11.2810213,15.2596415 C11.617947,15.3856502 11.982746,15.4545455 12.3636364,15.4545455 C14.0706983,15.4545455 15.4545455,14.0706983 15.4545455,12.3636364 C15.4545455,11.982746 15.3856502,11.617947 15.2596415,11.2810213 C16.2899361,10.7797473 17,9.7227958 17,8.5 C17,7.2772042 16.2899361,6.22025271 15.2596415,5.71897873 C15.3856502,5.38205302 15.4545455,5.01725401 15.4545455,4.63636364 C15.4545455,2.92930168 14.0706983,1.54545455 12.3636364,1.54545455 C11.982746,1.54545455 11.617947,1.61434984 11.2810213,1.74035847 C10.7797473,0.71006389 9.7227958,0 8.5,0 C7.2772042,0 6.22025272,0.71006389 5.71897873,1.74035847 C5.38205302,1.61434984 5.01725401,1.54545455 4.63636364,1.54545455 C2.92930168,1.54545455 1.54545455,2.92930168 1.54545455,4.63636364 C1.54545455,5.01725401 1.61434984,5.38205302 1.74035847,5.71897873 C0.71006389,6.22025272 0,7.2772042 0,8.5 C0,9.7227958 0.71006389,10.7797473 1.74035847,11.2810213 L1.74035847,11.2810213 Z" class="verified-bg" opacity="1" fill="#44A7F6"></path><path d="M11.2963464,5.28945679 L6.24739023,10.2894568 L7.63289664,10.2685106 L5.68185283,8.44985845 C5.27786241,8.07328153 4.64508754,8.09550457 4.26851062,8.499495 C3.8919337,8.90348543 3.91415674,9.53626029 4.31814717,9.91283721 L6.26919097,11.7314894 C6.66180802,12.0974647 7.27332289,12.0882198 7.65469737,11.7105432 L12.7036536,6.71054321 C13.0960757,6.32192607 13.0991603,5.68876861 12.7105432,5.29634643 C12.3219261,4.90392425 11.6887686,4.90083965 11.2963464,5.28945679 L11.2963464,5.28945679 Z" class="verified-check" fill="#FFFFFF"></path></g></g></g></g></g></g></svg></span>' : alamataseli;
   
   // document.getElementById("detail-alamataseli2").innerText = "" + alamataseli; 

  // Tambahkan event listener langsung di sini
  const editBtn = document.getElementById("btn-edit-detail");
  if (editBtn) {
    editBtn.onclick = () => {
      const { id, nama, alamat, telepon, alamataseli, desa, tanggal } = tempDetail;
      showEditModal(id, nama, alamat, telepon, alamataseli, desa, tanggal);
    };
  }

  document.getElementById("modal-detail").style.display = "flex";
  openModals.push('modal-detail'); 
  history.pushState({ modalId: 'modal-detail' }, '');
}
*/
  
  
  
  
function call() {
    var telepon = tempDetail.telepon; 
    window.location.href = "tel:" + telepon;

  

}
  
function openEditFromDetail() {
  const { id, nama, alamat, telepon, alamataseli, desa, tanggal } = tempDetail;
  
  showEditModal(id, nama, alamat, telepon, alamataseli, desa, tanggal);
 
}

  
function updateData() {
  const sheet = localStorage.getItem("sheetAccess"); // Ambil nama sheet dari login
  const id = document.getElementById("edit-id").value;
  const nama = document.getElementById("edit-nama").value;
  const alamat = document.getElementById("edit-alamat").value;
  const telepon = document.getElementById("edit-telepon").value;
  const alamataseli = document.getElementById("edit-alamataseli").value;
  const desa = document.getElementById("edit-desa").value;
  const tanggal = document.getElementById("edit-tanggal").value;

  showLoader();
  fetch(API_URL + "?action=update" + "&sheetname=" + encodeURIComponent(sheet) + "&id=" + encodeURIComponent(id) + "&nama=" + encodeURIComponent(nama) + "&alamat=" + encodeURIComponent(alamat) + "&telepon=" + encodeURIComponent(telepon) + "&alamataseli=" + encodeURIComponent(alamataseli) + "&desa=" + encodeURIComponent(desa) + "&tanggal=" + encodeURIComponent(tanggal))

/*fetch(API_URL + "?action=update" + "&sheetname=" + sheet + "&id=" + id + "&nama=" + nama + "&alamat=" + alamat + "&telepon=" + telepon + "&alamataseli=" + alamataseli + "&desa=" + desa + "&tanggal=" + tanggal)
*/
    /* fetch(`${API_URL}?action=update&sheetname=${sheet}&id=${id}&nama=${nama}&alamat=${alamat}&telepon=${telepon}&alamataseli=${alamataseli}&desa=${desa}&tanggal=${tanggal}`)*/
    .then(() => {
      closeModal("modal-edit");
      closeModal("modal-detail");

      // Simpan ID yang baru diedit ke localStorage supaya muncul badge "BARU EDIT"
      localStorage.setItem("idDataEdit", id);
      loadData();
    showNotification("Alamat berhasil diedit", "success");
    })
    .catch(err => {
      console.error("Fetch error:", err);
      hideLoader();
  //  alert("Gagal edit data.");
    showNotification("Gagal edit data: " + err.message, "error");
    });
}
    

let deleteId = null;

  
  
var audio = new Audio("https://im-naw111.github.io/audioimage/audio/Teet1.mp3");

function play() {
         audio.play();
      }
      
      
function getar() {
        navigator.vibrate(80)
    }
 
  

  
  
  
function deleteData(id) {
  
  
  deleteId = id;
   document.getElementById('confirmModal').style.display = 'flex';


     
}

// Tombol "Ya" di modal konfirmasi hapus
document.getElementById('yesConfirmBtn').onclick = function () {
  document.getElementById('confirmModal').style.display = 'none';
  document.getElementById('modalPasswordInput').value = '';
  document.getElementById('passwordModal').style.display = 'flex';
};

// Tombol "Tidak"
document.getElementById('noConfirmBtn').onclick = function () {
  document.getElementById('confirmModal').style.display = 'none';
};

// Tombol tutup modal PIN
document.getElementById('closePasswordModal').onclick = function () {
  document.getElementById('passwordModal').style.display = 'none';
};
  
// Fungsi mendapatkan PIN hari ini
function getTodayPin() {
 const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yy = String(today.getFullYear()).slice(-2);
  return dd + mm + yy;
}

  
// Tampilkan modal notifikasi
function showNotification(message, type = 'success') {
  const modal = document.getElementById('notificationModal');
  const messageElem = document.getElementById('notificationMessage');
  const okBtn = document.getElementById('notificationOkBtn');
  const beep = document.getElementById('warningBeep');

  messageElem.innerText = message;
  modal.style.display = 'flex';

  if (type === 'error') {
    okBtn.style.display = 'inline-block';
    play();
    getar();
  } else {
    okBtn.style.display = 'none';
    setTimeout(() => {
      modal.style.display = 'none';
    }, 1250);
  }
}
// Tombol OK untuk notifikasi error
document.getElementById('notificationOkBtn').onclick = function () {
  document.getElementById('notificationModal').style.display = 'none';
};

document.getElementById('confirmDeleteBtn').onclick = function () {
  const inputPin = document.getElementById('modalPasswordInput').value;
  const correctPin = getTodayPin();
  if (inputPin !== correctPin) {
    showNotification("PIN salah!.", "error");
    return;
  }

  const sheet = localStorage.getItem("sheetAccess");
  document.getElementById('passwordModal').style.display = 'none';
/*const card = document.querySelector(`.card[data-id="${deleteId}"]`);*/
  const card = document.querySelector('.card[data-id="' + deleteId + '"]');
  

  showLoader();
  setTimeout(() => {
   fetch(API_URL + '?action=delete&sheetname=' + sheet + '&id=' + deleteId)
  /*  fetch(`${API_URL}?action=delete&sheetname=${sheet}&id=${deleteId}`)*/
      .then(() => {
        showNotification("Data berhasil dihapus.", "success");
      
      
      if (card) {
    card.classList.add("fade-out");
  }
      

      
        loadData(); // render ulang setelah animasi
      })
      .catch(err => {
        showNotification("Gagal hapus data: " + err.message, "error");
      })
      .finally(() => hideLoader());
  }, 800); // waktu sesuai animasi CSS
};
  

 
  
  
  
  function closeModalmanual(id) {
    document.getElementById(id).style.display = "none";
  }

  
// Fungsi close
function closeModal(id) {
  document.getElementById(id).style.display = "none";
  
  // Hapus dari stack
  const index = openModals.indexOf(id);
  if (index !== -1) {
    openModals.splice(index, 1);
  }
  
  history.back(); // kembali satu langkah
}

// Event tombol back
window.addEventListener('popstate', function() {
  if (openModals.length > 0) {
    const lastModal = openModals.pop();
    document.getElementById(lastModal).style.display = 'none';
  }
});
  
    
  
  let startY = 0;
  let isPulling = false;
  const tab1 = document.getElementById("tab1");

  tab1.addEventListener("touchstart", e => {
    if (tab1.scrollTop === 0) {
      startY = e.touches[0].clientY;
      isPulling = true;
    }
  });

  tab1.addEventListener("touchmove", e => {
    if (!isPulling) return;
    const diff = e.touches[0].clientY - startY;
    if (diff > 0) {
      e.preventDefault();
      
      tab1.style.transform = "translateY(" + Math.min(diff, 100) + "px)";
   /*   tab1.style.transform = `translateY(${Math.min(diff, 100)}px)`;*/
   //   refresh.innerText = diff > 80 ? "Lepaskan untuk refresh" : "";//Tarik untuk refresh
     refresh.innerHTML = diff > 80 ? "<p style='padding:12px'><img width='85px' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDmcpoJ8DOvaARXgktt0UHnzO4JpiRgF71UbPyuxzIcFcCgkiUQbWDfLdvcoEnQ8ftNPMF2K6nIcUXk3p7qRouAAI7wMQ7ls4cUgUkiq_z6i6xe-mhqMc0LhGBrPfXLIW5n1GqI9OHRPJ6vmix-SzWmLhTnLDexTEa3JhoRmktE0dpT3LstdMsGCPCejZn/s200/PipKSqoTk55M6sKtik.webp' /></p>" : "";
    }
  }, { passive: false });

  tab1.addEventListener("touchend", () => {
    if (!isPulling) return;
    isPulling = false;
    const diff = parseInt(tab1.style.transform.replace("translateY(", ""));
    if (diff > 80) {
      tab1.style.transition = "transform 0.3s";
      tab1.style.transform = "translateY(50px)";
      LoadingRefresh();
      setTimeout(() => {
        tab1.style.transform = "translateY(0)";
      }, 500);
    } else {
      tab1.style.transition = "transform 0.3s";
      tab1.style.transform = "translateY(0)";
    }
  });

  document.addEventListener("DOMContentLoaded", loadData);
 
/*const manifest = {
  "name": "JMT Database Alamat",  
   "short_name": "JMT Database",
  "display": "standalone",
  "background_color": "#000000",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDYufAx2jGcGR9RXrap-dL_3aoUlo6tPI2o9cvENvIjtYZyONEfAXAVLuRWxTj_IC2EgHN9gBJUSlsBVuICP0Ta4mMvqtAaeLtwNmk6eml1Rs5xVkGUU8PnopiOXvdT5Dm0g530keh0bA-UCdUTKZoZSxhQmJ0dcCMS_8f55y5wEGQ4LRzO1hdWfwKk2Y/s192/1000212069.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWZj7CknSZKjig2HKUnMHOUIcQBey6am1UfFfNItR2d-sg6J7YN6KyWrGGWWBJyi-6XBOO2BblOvc_UoBBq_Vinq1QpEh52XjFRI7l_KGRiw1W9TiJlUsSwO89GbPjXcwMhV9dLccSb3N8vvlWF5ofmgrmAtkSQqSYAq0vsm2HzsULnPGn-nX-EPTkkJk/s512/1000212070.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
};
*/
const manifest = {
  "name": "JMT Database Aplikasi Gelap",  
   "short_name": "PUR3 Vercel",
  //"display": "standalone",
 // "display": "browser",
  "background_color": "#000000",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPjXekcfBn01wJZTLNsej5Xrl44JaqF0HwPHmlHzVQYd6UkDRq_Xx3TDbaFc0NlabJY1_nLmVn96KVX6S84tcttf96fBCBv5XqgIk0b2dUG_VuQLVYFk3OsU4ykYxmubDH20NIfmBri15yk0dFRXVfAGg6kLNx4OQxXQzD9srwdCmV3RgfwLlx87ZvkiNc/s320/1000215347.jpg",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWZj7CknSZKjig2HKUnMHOUIcQBey6am1UfFfNItR2d-sg6J7YN6KyWrGGWWBJyi-6XBOO2BblOvc_UoBBq_Vinq1QpEh52XjFRI7l_KGRiw1W9TiJlUsSwO89GbPjXcwMhV9dLccSb3N8vvlWF5ofmgrmAtkSQqSYAq0vsm2HzsULnPGn-nX-EPTkkJk/s512/1000212070.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
};

const stringManifest = JSON.stringify(manifest);
const blob = new Blob([stringManifest], { type: 'application/json' });
const manifestURL = URL.createObjectURL(blob);
document.getElementById('manifest-placeholder').setAttribute('href', manifestURL);  
   


 
  
  
function showAlert(message, options = {}) {
  // Hapus alert lama jika ada
  const existing = document.querySelector(".custom-alert-box");
  if (existing) existing.remove();

  const alertBox = document.createElement("div");
  alertBox.className = "custom-alert-box";
  
  alertBox.innerHTML =
  "<div class=\"custom-alert-content\" style=\"padding: 15px;\">" +
    "<div class=\"custom-alert-message\" style=\"margin-bottom: 12px; font-size: 16px;\">" +
      message +
    "</div>" +
    "<button class=\"custom-alert-ok-btn\" style=\"" +
      "background-color: " + (options.okColor || '#1877F2') + ";" +
      "color: white;" +
      "border: none;" +
      "padding: 8px 20px;" +
      "border-radius: 6px;" +
      "cursor: pointer;" +
      "font-weight: bold;" +
      "font-size: 14px;" +
    "\">" +
      (options.okText || 'OK') +
    "</button>" +
  "</div>";
/* alertBox.innerHTML = `
    <div class="custom-alert-content" style="padding: 15px;">
      <div class="custom-alert-message" style="margin-bottom: 12px; font-size: 16px;">
        ${message}
      </div>
      <button class="custom-alert-ok-btn" style="
        background-color: ${options.okColor || '#1877F2'};
        color: white;
        border: none;
        padding: 8px 20px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: bold;
        font-size: 14px;
      ">
        ${options.okText || 'OK'}
      </button>
    </div>
  `;*/

  // Styling utama
  Object.assign(alertBox.style, {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#fff",
    color: "#333",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
    zIndex: "9900000",
    minWidth: "260px",
    maxWidth: "90%",
    textAlign: "center",
    fontFamily: "Arial, sans-serif"
  });
play();

  getar();   
  document.body.appendChild(alertBox);

  // Tangani klik tombol OK
  const okBtn = alertBox.querySelector(".custom-alert-ok-btn");
  okBtn.addEventListener("click", () => {
    alertBox.remove();
    if (typeof options.onClose === "function") options.onClose();
  });
}
  
/* showAlert("Perubahan berhasil disimpan!", {
  okText: "Tutup",
  okColor: "#28a745",
  onClose: () => console.log("Alert selesai.")
});
*/
  
