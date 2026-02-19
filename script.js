function send() {
  const value = document.getElementById("text").value;

  fetch("https://script.google.com/macros/s/AKfycbwig0hbbqsab_6YJl_xI3ONizyRQX9a9kvjfPUoJ0WWdy_hp5PWHFI5gwFRzTkgIqs2/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text: value,
      ua: navigator.userAgent
    })
  })
  .then(() => alert("送信完了"))
  .catch(() => alert("送信失敗"));
}

