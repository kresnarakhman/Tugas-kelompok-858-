// Mendapatkan elemen DOM
const inputBox = document.querySelector('.input-box input');
const sendButton = document.querySelector('.send');
const cancelButton = document.querySelector('.cancel');
const transferMenu = document.getElementById('transferMenu');
const nomorTujuanInput = document.getElementById('nomorTujuan');

// Menangani event saat tombol "Send" diklik di menu utama
sendButton.addEventListener('click', () => {
    const userInput = inputBox.value;
    let message = '';

    // Memproses input pengguna
    switch(userInput) {
        case '1':
            // Menampilkan menu transfer nomor tujuan
            document.querySelector('.ussd-box').classList.add('hidden');
            transferMenu.classList.remove('hidden');
            break;
        case '2':
            message = 'Anda memilih untuk Minta Pulsa.';
            alert(message);
            break;
        case '3':
            message = 'Anda memilih untuk Auto TP.';
            alert(message);
            break;
        case '4':
            message = 'Anda memilih untuk Delete Auto TP.';
            alert(message);
            break;
        case '5':
            message = 'Anda memilih untuk List Auto TP.';
            alert(message);
            break;
        case '6':
            message = 'Anda memilih untuk Cek Kupon Undian TP.';
            alert(message);
            break;
        default:
            message = 'Pilihan tidak valid. Silakan masukkan angka dari 1 hingga 6.';
            alert(message);
    }
});

// Menangani event saat tombol "Cancel" diklik
cancelButton.addEventListener('click', () => {
    inputBox.value = ''; // Menghapus input
    transferMenu.classList.add('hidden'); // Sembunyikan menu transfer tujuan jika terbuka
    document.querySelector('.ussd-box').classList.remove('hidden'); // Tampilkan menu utama
});

// Menangani event saat mengirim nomor tujuan transfer pulsa
const sendTransferButton = transferMenu.querySelector('.send');
sendTransferButton.addEventListener('click', () => {
    const nomorTujuan = nomorTujuanInput.value;
    if (nomorTujuan) {
        alert(`Pulsa berhasil ditransfer ke nomor ${nomorTujuan}`);
        nomorTujuanInput.value = ''; // Reset input
        transferMenu.classList.add('hidden');
        document.querySelector('.ussd-box').classList.remove('hidden');
    } else {
        alert('Harap masukkan nomor tujuan.');
    }
});
