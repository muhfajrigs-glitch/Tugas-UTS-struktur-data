// Pertama
let saldo = 0;
// Update tampilan saldo
function updateSaldo() {
  document.getElementById("saldo").textContent = `Saldo: Rp${saldo}`;
}

// Setor uang
function setorUang() {
  const jumlah = parseInt(prompt("Masukkan jumlah setor uang:"));
  if (!isNaN(jumlah) && jumlah > 0) {
    saldo += jumlah;
    updateSaldo();
    alert(`Berhasil setor Rp${jumlah}`);
  } else {
    alert("Jumlah tidak valid!");
  }
}

// Kedua
// Tarik uang
function tarikUang() {
  const jumlah = parseInt(prompt("Masukkan jumlah tarik uang:"));
  if (!isNaN(jumlah) && jumlah > 0 && jumlah <= saldo) {
    saldo -= jumlah;
    updateSaldo();
    alert(`Berhasil tarik Rp${jumlah}`);
  } else {
    alert("Jumlah tidak valid atau saldo tidak cukup!");
  }
}

// Gacha dengan kemungkinan rugi
function gacha() {
  if (saldo < 1000) {
    alert("Saldo minimal Rp1000 untuk gacha!");
    return;
  }
  saldo -= 1000;
  // 50% kemungkinan rugi, 50% kemungkinan untung
  const isUntung = Math.random() < 0.5;

  // Ketiga
  let hadiah;
  if (isUntung) {
    hadiah = Math.floor(Math.random() * 700) + 200; // hadiah antara 500 - 10499
    saldo += hadiah;
    updateSaldo();
    alert(`Kamu dapat Rp${hadiah} dari gacha!`);
  } else {
    hadiah = Math.floor(Math.random() * 800) + 100; // kerugian antara 1 - 1000
    saldo -= hadiah;
    updateSaldo();
    alert(`Kamu rugi Rp${hadiah} dari gacha!`);
  }
}

// Render UI
document.body.innerHTML = `
    <h2>Judol Sederhana</h2>
    <div id="saldo">Saldo: Rp0</div>
    <button onclick="setorUang()">Setor Uang</button>
    <button onclick="gacha()">Gacha (Rp1000)</button>
    <button onclick="tarikUang()">Tarik Uang</button>
`;

updateSaldo();
