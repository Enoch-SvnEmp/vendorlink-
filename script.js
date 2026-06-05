async function addProduct() {

    const name =
        document.getElementById("name").value;

    const price =
        document.getElementById("price").value;

    const response =
        await fetch(
            "http://localhost:3000/add-product",
            {
                method: "POST",
                headers: {
                    "Content-Type":
                    "application/json"
                },
                body: JSON.stringify({
                    name,
                    price
                })
            }
        );

    const result =
        await response.text();

    alert(result);
}