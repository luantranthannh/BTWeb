document.addEventListener("DOMContentLoaded", function () {
    // Lắng nghe sự kiện khi người dùng thay đổi số lượng người lớn và trẻ em
    const adultsInput = document.querySelector("#adults");
    const childrenInput = document.querySelector("#children");
    const totalInput = document.querySelector("#total");

    

    // Lấy ID của địa điểm từ tham số truyền qua URL
    const urlParams = new URLSearchParams(window.location.search);
    const destinationId = parseInt(urlParams.get("id"));

    // Lấy thông tin chi tiết của địa điểm từ tệp JSON "details.json" dựa trên ID
    fetch("details.json")
        .then(response => response.json())
        .then(details => {
            const destinationDetail = details.details.find(detail => detail.id === destinationId);
             const data= JSON.parse(localStorage.getItem("book"));

            // Lấy giá tiền cho người lớn và trẻ em từ dữ liệu JSON
            const adultPrice = destinationDetail.adultPrice;
            const childPrice = destinationDetail.childPrice;
console.log(data);
            // Hàm tính toán tổng số tiền
            function updateTotal() {
                const adultsCount = parseInt(data.adultPrice) ;
                const childrenCount = parseInt(data.childPrice);

                // Tính toán tổng số tiền
                const total = adultsCount * adultPrice + childrenCount * childPrice;
console.log(total);
                // Hiển thị tổng số tiền lên trường "Tổng tiền"
                totalInput.value = total + " VNĐ";
            }

            // Gọi hàm để tính tổng số tiền ban đầu
            updateTotal();
            adultsInput.addEventListener("change", updateTotal);
    childrenInput.addEventListener("change", updateTotal);
        })
        .catch(error => console.error("Lỗi: " + error));
});
