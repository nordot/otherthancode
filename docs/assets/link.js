document.addEventListener("DOMContentLoaded", () => {
  const allowDomains = ["legal.nordot.jp", "localhost:4000"];

  document.querySelectorAll("a[href]").forEach((link) => {
    try {
      const url = new URL(link.href, window.location.href);
      if (!allowDomains.includes(url.hostname)) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      }
    } catch (e) {
      console.warn("Invalid link skipped:", link.href);
    }
  });
});
