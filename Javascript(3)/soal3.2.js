// membuat program menggunakan promise
const menuNasiPadang = {
    'Rendang': true,
    'Ayam Pop': true,
    'Gulai Ayam': true,
    'Dendeng Balado': true,
    'Perkedel': true,
    'Telur Balado': true,
};

// Fungsi untuk mengecek nama menu menggunakan Promise
const cekMenuNasiPadang = (menu) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Mengecek apakah menu ada dalam menu
            if (menuNasiPadang[menu]) {
                resolve(`Menu ${menu} tersedia di Nasi Padang.`);
            } else {
                reject(new Error(`Menu ${menu} tidak tersedia di Nasi Padang.`));
            }
        }, 1500);
    });
};

// Menggunakan Promise dengan then-catch untuk melihat hasil cekMenuNasiPadang
cekMenuNasiPadang('Perkedel')
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error.message);
    });

cekMenuNasiPadang('Sop Iga')
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error.message);
    });
