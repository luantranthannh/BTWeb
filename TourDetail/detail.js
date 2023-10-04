document.addEventListener("DOMContentLoaded", function () {
    // Lấy ID của địa điểm từ tham số truyền qua URL
    const urlParams = new URLSearchParams(window.location.search);
    const destinationId = parseInt(urlParams.get("id"));

    // Lấy thông tin chi tiết của địa điểm từ tệp JSON "details.json" dựa trên ID
    fetch("details.json")
        .then(response => response.json())
        .then(details => {
            const destinationDetail = details.details.find(detail => detail.id === destinationId);

            // Hiển thị thông tin chi tiết lên trang web
            const detailContainer = document.querySelector("#detail-container");
            detailContainer.innerHTML = `
                <h2>${destinationDetail.name}</h2>
                <img src="${destinationDetail.mainImage}" alt="${destinationDetail.name}">
                <img src="${destinationDetail.images[0]}" >
                <img src="${destinationDetail.images[1]}" >
                <img src="${destinationDetail.images[2]}" >

                <p>${destinationDetail.descriptions.join("</p><p>")}</p>
                <p>Highlight: ${destinationDetail.highlight}</p>
                <p >Giá vé người lớn: ${destinationDetail.adultPrice} VNĐ</p>
                <p>Giá vé trẻ em: ${destinationDetail.childPrice} VNĐ</p>
            `;

            // Lắng nghe sự kiện khi người dùng nhấn nút "Book Now"
            const bookNowButton = document.querySelector("#book-now-button");
            


            bookNowButton.addEventListener("click", function () {
                localStorage.setItem("book",JSON.stringify(destinationDetail )) ;
                


                // Chuyển hướng đến trang "book.html" khi nhấn nút "Book Now"
                window.location.href = `book.html?id=${destinationId}`;
            });
        })
        .catch(error => console.error("Lỗi: " + error));
});


