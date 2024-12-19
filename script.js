// Ambil elemen tombol dan pesan
const showMessageBtn = document.getElementById('showMessageBtn');
const specialMessage = document.getElementById('specialMessage');

// Tambahkan event listener untuk tombol
showMessageBtn.addEventListener('click', () => {
    specialMessage.classList.toggle('hidden'); // Menyembunyikan atau menampilkan pesan spesial
});
