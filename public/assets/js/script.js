$(".btn--eat").on("click", function(event) {
    const id = $(this).data("id");

    $.ajax(`/api/update/${id}`, {
        type: "PUT"
    }).then(
        function() {
            location.reload();
        }
    );
});

$("#add-burger").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
        "name": $("#burger-name").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/create", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            location.reload();
        }
    );
});