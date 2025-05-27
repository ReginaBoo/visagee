function openSidebar() {
  document.getElementById("sidebarOverlay").style.display = "block";
  document.getElementById("step1").style.display = "block";
  document.getElementById("step2").style.display = "none";
  document.getElementById("confirmation").style.display = "none";
}

function closeSidebar() {
  document.getElementById("sidebarOverlay").style.display = "none";
}
function goToStep2() {
  const service = document.getElementById("serviceSelect").value;
  if (!service) {
    alert("Пожалуйста, выберите услугу");
    return;
  }

  document.getElementById("step1").style.display = "none";
  document.getElementById("step2").style.display = "block";
}

function submitBooking() {
  const date = document.getElementById("dateInput").value;
  const time = document.getElementById("timeInput").value;

  if (!date || !time) {
    alert("Пожалуйста, выберите дату и время");
    return;
  }

  document.getElementById("step2").style.display = "none";
  document.getElementById("confirmation").style.display = "block";
}


function onOverlayClick(event) {
  const sidebar = document.getElementById("bookingSidebar");
  // Закрываем только если клик вне боковика
  if (!sidebar.contains(event.target)) {
    closeSidebar();
  }
}