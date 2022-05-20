function toggleMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".navigation");
    menuToggle.classList.toggle("active"); // active class가 없으면 생성됨
    navigation.classList.toggle("active");
}