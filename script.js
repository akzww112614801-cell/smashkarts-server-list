function toggleDesc(element) {
  const desc = element.nextElementSibling;
  desc.style.display = (desc.style.display === 'block') ? 'none' : 'block';
}

function showForm() {
  document.getElementById('form-container').style.display = 'block';
}

function cancelAdd() {
  document.getElementById('form-container').style.display = 'none';
  document.getElementById('server-name').value = '';
  document.getElementById('server-ip').value = '';
  document.getElementById('server-arena').value = '';
  document.getElementById('server-rules').value = '';
}

function addServer() {
  const name = document.getElementById('server-name').value;
  const ip = document.getElementById('server-ip').value;
  const arena = document.getElementById('server-arena').value;
  const rules = document.getElementById('server-rules').value;

  if (!name || !ip) {
    alert('サーバー名とリンクは必須です！');
    return;
  }

  const serverList = document.getElementById('server-list');

  const newServer = document.createElement('div');
  newServer.className = 'server-item';
  newServer.innerHTML = `
    <div class="option" onclick="toggleDesc(this)">${name}</div>
    <div class="description">
      <p><strong>部屋:</strong> ${ip}</p>
      <p><strong>アリーナ:</strong> ${arena}</p>
      <p><strong>ルール:</strong> ${rules}</p>
      <a class="option" href="${ip}" target="_blank">参加する</a>
    </div>
  `;

  serverList.appendChild(newServer);
  cancelAdd(); // フォーム閉じてリセット
}