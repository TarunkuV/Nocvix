function setFavicon(darkMode) {
      // Remove any existing favicons
      document.querySelectorAll("link[rel*='icon']").forEach(link => link.remove());

      // Create new favicon
      const link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/png";
      link.href = darkMode 
        ? "/imgs/lighticon.png?v=" + Date.now()   // white icon for dark backgrounds
        : "/imgs/darkicon.png?v=" + Date.now(); // black icon for light backgrounds
      document.head.appendChild(link);
    }

    function updateFavicon() {
      const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setFavicon(darkMode);
    }

    // Run on load
    updateFavicon();

    // Swap if theme changes live
    window.matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", updateFavicon);