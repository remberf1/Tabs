function openTab(evt,pageName) {
    var tabContent= document.querySelectorAll('.tab-content');
    tabContent.forEach((tab) => {
        tab.style.display = "none";
    })
    
    var tablinks = document.querySelectorAll('.tablink');
    tablinks.forEach((tab) => {
        tab.className = tab.className.replace(" active", "");
    })

    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.classList.add("active");
}
document.addEventListener("DOMContentLoaded", function() {
    // Now you can safely call getElementById
    document.getElementById("defaultOpen")?.click();
});