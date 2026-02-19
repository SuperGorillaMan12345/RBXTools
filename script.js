function send() {
  const value = document.getElementById("text").value;

  fetch("【GASのWebアプリURL】", {
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
