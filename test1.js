// This adds some nice ellipsis to the description:
document.querySelectorAll(".projcard-description").forEach(function(box) {
	$clamp(box, {clamp: 6});
});
// This adds some nice ellipsis to the description:
document.querySelectorAll(".projcard-description").forEach(function(box) {
	$clamp(box, {clamp: 6});


});
function createJoystickIcons() {
    const icons = document.querySelectorAll('.joystick-icon');
    let attempts = 0;

    for (let i = 0; i < 3; i++) {  // สร้าง 5 ไอคอนพร้อมกัน
        let icon;
        let validPosition = false;

        while (!validPosition && attempts < 100) {
            const startX = Math.random() * window.innerWidth; // สุ่มตำแหน่ง X เริ่มต้นภายในหน้าจอ
            const startY = Math.random() * window.innerHeight; // สุ่มตำแหน่ง Y เริ่มต้นที่ความสูงของหน้าจอ

            // ตรวจสอบว่าตำแหน่งนี้ทับกับไอคอนที่มีอยู่หรือไม่
            validPosition = true;
            icons.forEach(existingIcon => {
                const existingX = parseFloat(existingIcon.style.left);
                const existingY = parseFloat(existingIcon.style.top);

                if (Math.abs(startX - existingX) < 200 && Math.abs(startY - existingY) < 200) {
                    validPosition = false; // ใกล้เกินไปกับไอคอนที่มีอยู่
                }
            });

            if (validPosition) {
                icon = document.createElement('div');
                icon.classList.add('joystick-icon');
                icon.style.left = `${startX}px`;
                icon.style.top = `${startY}px`;
                icon.style.animationDelay = `${Math.random() * 30}s`;
                document.body.appendChild(icon);

                icon.addEventListener('animationend', function() {
                    icon.remove();
                });
            }
            attempts++;
        }
    }
}

// เรียกฟังก์ชันทุก 6 วินาทีเพื่อสร้างไอคอนชุดใหม่ 5 อัน
setInterval(createJoystickIcons, 6000);
