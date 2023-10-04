document.addEventListener("DOMContentLoaded", function () {
    // Lấy danh sách địa điểm du lịch từ tệp JSON "destinations.json"
    fetch("destinations.json")
        .then(response => response.json())
        .then(destinations => {
            // Hiển thị danh sách địa điểm du lịch trên trang web
            const destinationList = document.querySelector("#destination-list");
            destinations.destinations.forEach(destination => {
                const listItem = document.createElement("li");
                const link = document.createElement("a");
                link.href = `detail.html?id=${destination.id}`; // Liên kết đến trang chi tiết
                link.textContent = destination.name;

                listItem.appendChild(link);
                destinationList.appendChild(listItem);
            });
        })
        .catch(error => console.error("Lỗi: " + error));
});
