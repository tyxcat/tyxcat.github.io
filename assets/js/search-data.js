// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Research publications by Cady Xu on LLM agents, multimodal AI, extended reality (XR), and human-computer interaction. Includes papers from CHI, UIST, ICRA, and ICML.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research and engineering projects by Cady Xu in LLM agents, multimodal AI, XR audio systems, and machine learning applications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "news-2-papers-accepted-to-uist-2025",
          title: '2 papers accepted to UIST 2025! 🎉🎉',
          description: "",
          section: "News",},{id: "news-serving-as-a-reviewer-for-chi-2026",
          title: 'Serving as a reviewer for CHI 2026! 🤠',
          description: "",
          section: "News",},{id: "news-joined-google-deepmind",
          title: 'Joined Google DeepMind! 🌀🌀🌀',
          description: "",
          section: "News",},{id: "news-project-moxart-has-been-accepted-to-chi-2026",
          title: 'Project MoXaRt has been accepted to CHI 2026.',
          description: "",
          section: "News",},{id: "news-thrilled-to-be-a-speaker-at-the-2026-silicon-valley-women-in-engineering-conference-i-ll-be-presenting-sound-space-and-agency-building-context-aware-wearable-systems-in-the-emerging-technologies-c2-ux-amp-amp-wearable-technology-session-sat-3-21-at-1-45-2-45-pm-️",
          title: 'Thrilled to be a speaker at the 2026 Silicon Valley Women in Engineering...',
          description: "",
          section: "News",},{id: "projects-moxart-audio-visual-object-guided-sound-interaction-for-xr",
          title: 'MoXaRt: Audio-Visual Object-Guided Sound Interaction for XR',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/moxart/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
