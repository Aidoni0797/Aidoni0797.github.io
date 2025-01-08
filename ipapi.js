async function getIPInfo() {
  const response = await fetch("https://ipapi.co/json/");
  const data = await response.json();

  console.log("IP-адрес:", data.ip);
  console.log("Страна:", data.country_name);

  document.body.innerHTML = `
    <h1>Информация об IP-адресе</h1>
    <p><b>IP-адрес:</b> ${data.ip}</p>
    <p><b>Страна:</b> ${data.country_name}</p>
  `;
}

getIPInfo();
