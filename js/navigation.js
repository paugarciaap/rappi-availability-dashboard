(function attachNavigation(global) {
  const LIGHT_THEME_ICON = '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>';
  const DARK_THEME_ICON = '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>';

  function getNavbarOffset() {
    const navbar = document.getElementById("navbar");
    return (navbar?.offsetHeight || 0) + 12;
  }

  function setThemeIcon(theme) {
    const icon = document.getElementById("theme-icon");

    if (!icon) {
      return;
    }

    icon.innerHTML = theme === "dark" ? DARK_THEME_ICON : LIGHT_THEME_ICON;
  }

  function scrollToSection(id) {
    const section = document.getElementById(id);

    if (!section) {
      return;
    }

    const top = section.getBoundingClientRect().top + window.scrollY - getNavbarOffset();
    window.scrollTo({
      top: Math.max(top, 0),
      behavior: "smooth",
    });
  }

  function setActiveLink(activeSectionId, navLinksBySection) {
    Object.entries(navLinksBySection).forEach(([sectionId, link]) => {
      if (!link) {
        return;
      }

      const isActive = sectionId === activeSectionId;
      link.classList.toggle("active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function bindScrollTargets(navLinksBySection) {
    const targets = document.querySelectorAll("[data-scroll-target]");

    targets.forEach((target) => {
      target.addEventListener("click", () => {
        const destination = target.dataset.scrollTarget;

        if (!destination) {
          return;
        }

        setActiveLink(destination, navLinksBySection);
        scrollToSection(destination);
      });
    });
  }

  function bindThemeToggle(onThemeChange) {
    const button = document.getElementById("theme-btn");

    if (!button) {
      return;
    }

    button.addEventListener("click", () => {
      const html = document.documentElement;
      const currentTheme = html.getAttribute("data-theme") === "dark" ? "dark" : "light";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";

      html.setAttribute("data-theme", nextTheme);
      setThemeIcon(nextTheme);

      if (typeof onThemeChange === "function") {
        onThemeChange(nextTheme);
      }
    });
  }

  function bindLanguageToggle(onLanguageToggle) {
    const button = document.getElementById("lang-btn");

    if (!button || typeof onLanguageToggle !== "function") {
      return;
    }

    button.addEventListener("click", () => {
      onLanguageToggle();
    });
  }

  function bindActiveSectionTracking(sectionIds, navLinksBySection) {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) {
      return;
    }

    let ticking = false;

    function updateActiveSection() {
      const probe = window.scrollY + getNavbarOffset() + 80;
      let activeSectionId = sections[0].id;

      sections.forEach((section) => {
        if (section.offsetTop <= probe) {
          activeSectionId = section.id;
        }
      });

      setActiveLink(activeSectionId, navLinksBySection);
      ticking = false;
    }

    function onScroll() {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateActiveSection);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    updateActiveSection();
  }

  function bindNavbarState() {
    const navbar = document.getElementById("navbar");

    if (!navbar) {
      return;
    }

    function updateNavbarState() {
      navbar.classList.toggle("navbar-scrolled", window.scrollY > 18);
    }

    window.addEventListener("scroll", updateNavbarState, { passive: true });
    updateNavbarState();
  }

  function initNavigation({
    sectionIds = [],
    navLinkIds = [],
    onLanguageToggle,
    onThemeChange,
  } = {}) {
    const currentTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const navLinksBySection = {};

    sectionIds.forEach((sectionId, index) => {
      navLinksBySection[sectionId] = document.getElementById(navLinkIds[index]);
    });

    setThemeIcon(currentTheme);
    bindScrollTargets(navLinksBySection);
    bindThemeToggle(onThemeChange);
    bindLanguageToggle(onLanguageToggle);
    bindNavbarState();
    bindActiveSectionTracking(sectionIds, navLinksBySection);

    return { scrollToSection };
  }

  global.AvailNavigation = {
    initNavigation,
    scrollToSection,
  };
})(window);
