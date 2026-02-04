function unlockPremium() {
    const userCode = prompt("Masukkan Kode Aktivasi:");
    // Ganti 'KODE123' dengan daftar kode Anda
    if (userCode === 'KODE123') { 
        localStorage.setItem('premiumUnlocked', 'true');
        alert("🎉 Aktivasi Berhasil! Silakan klik tanggal kembali.");
        location.reload(); // Refresh halaman agar status premium terbaca
    } else {
        alert("❌ Kode salah.");
    }
}
