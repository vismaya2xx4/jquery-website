$(document).ready(function() {
    // Toggle About Section Text
    $("#toggleText").click(function() {
        $("#hiddenText").slideToggle();
    });

    // Form Validation & Submission
    $("#interactiveForm").submit(function(event) {
        event.preventDefault();
        let username = $("#username").val();
        let email = $("#email").val();
        let message = $("#message").val();

        if (username === "" || email === "" || message === "") {
            $("#formMessage").text("All fields are required!").css("color", "red");
        } else {
            $("#formMessage").text("Form submitted successfully!").css("color", "green");
        }
    });

    // Canvas Drawing
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    let painting = false;
    canvas.addEventListener("mousedown", () => painting = true);
    canvas.addEventListener("mouseup", () => painting = false);
    canvas.addEventListener("mousemove", draw);

    function draw(event) {
        if (!painting) return;
        ctx.lineWidth = 3;
        ctx.lineCap = "round";
        ctx.strokeStyle = "black";
        ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        ctx.stroke();
    }

    $("#clearCanvas").click(function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    // Load JSON Data
    $("#loadData").click(function() {
        let userData = [
            { name: "Alice", email: "alice@example.com" },
            { name: "Bob", email: "bob@example.com" }
        ];
        $("#dataContainer").html(userData.map(user => `<p>${user.name} - ${user.email}</p>`).join(""));
    });
});

$(document).ready(function() {
    $(".gallery-img").click(function() {
        var imgSrc = $(this).attr("src");
        $("#lightbox-img").attr("src", imgSrc);
        $("#lightbox").fadeIn();
    });

    $("#close").click(function() {
        $("#lightbox").fadeOut();
    });

    $("#lightbox").click(function(event) {
        if (event.target.id === "lightbox") {
            $("#lightbox").fadeOut();
        }
    });
});
