document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  if (btn) {
    btn.addEventListener("click", () => {
      alert("Xin chào! 👋 Đây là trang web của bạn!");
    });
  }
});
