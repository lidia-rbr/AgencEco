document.addEventListener('DOMContentLoaded', function () {
    var panorama = document.querySelector('.panorama');
    var isDragging = false;
    var startX;
    var currentBackgroundPosX = 0;

    panorama.addEventListener('mousedown', function (e) {
        isDragging = true;
        startX = e.clientX;
        panorama.style.cursor = 'grabbing';
        e.preventDefault();  // Prevent text selection or other default behaviors
    });

    document.addEventListener('mousemove', function (e) {
        if (isDragging) {
            var deltaX = e.clientX - startX;
            var newBackgroundPosX = currentBackgroundPosX + deltaX;
            panorama.style.backgroundPosition = newBackgroundPosX + 'px 0';
        }
    });

    document.addEventListener('mouseup', function (e) {
        if (isDragging) {
            isDragging = false;
            panorama.style.cursor = 'grab';
            currentBackgroundPosX += e.clientX - startX;
        }
    });

    panorama.addEventListener('dragstart', function (e) {
        e.preventDefault();
    });
});
