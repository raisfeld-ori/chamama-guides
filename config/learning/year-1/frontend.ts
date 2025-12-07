export const config = {
  title: "יסודות פיתוח Frontend - שנה 1",
  description: "למד את הבסיס הנכון: HTML, CSS, JavaScript וכלי עבודה מקצועיים",
  sections: [
    {
      title: "הכנה וכלי עבודה",
      blocks: [
        {
          id: "vscode-setup",
          type: "video" as const,
          title: "התקנה והגדרת VS Code",
          youtubeId: "ITxcbrfEcIY",
          description: "איך להתקין ולהגדיר VS Code בצורה מושלמת למפתחים",
        },
        {
          id: "developer-tools-intro",
          type: "text" as const,
          title: "כלי עבודה למפתח מתחיל",
          content:
            "לפני שנתחיל לקודד, חשוב להכיר את הכלים:\n\n💻 VS Code:\n• עורך הקוד הכי פופולרי בעולם\n• Extensions חיוניים:\n  - Live Server (לצפיה מיידית)\n  - Auto Rename Tag\n  - Prettier (עיצוב קוד)\n  - HTML CSS Support\n  - Auto Close Tag\n\n🌐 דפדפן:\n• Chrome/Firefox עם Developer Tools\n• איך לפתוח ולהשתמש ב-DevTools\n• Elements tab לבחינת HTML/CSS\n• Console לשגיאות\n\n📁 ארגון קבצים:\n• תיקיות index.html, style.css, script.js\n• שמות קבצים באנגלית\n• מבנה תיקיות נקי\n\nזה הבסיס לכל מה שיבוא!",
        },
        {
          id: "browser-devtools",
          type: "video" as const,
          title: "לימוד Developer Tools",
          youtubeId: "x4q86IjJFag",
          description: "איך להשתמש ב-DevTools של הדפדפן לפיתוח ודיבוג",
        },
      ],
    },
    {
      title: "HTML מהיסוד",
      blocks: [
        {
          id: "html-crash-course",
          type: "video" as const,
          title: "HTML מאפס עד מתקדם",
          youtubeId: "qz0aGYrrlhU",
          description: "למד HTML בצורה מקיפה ומובנית",
        },
        {
          id: "semantic-html",
          type: "video" as const,
          title: "Semantic HTML וקוד נקי",
          youtubeId: "ZThq93Yuwd0",
          description: "למד לכתוב HTML משמעותי ונגיש",
        },
        {
          id: "html-fundamentals",
          type: "text" as const,
          title: "יסודות HTML - מה חשוב להבין",
          content:
            "HTML הוא השפה הבסיסית של האינטרנט. בואו נלמד אותה נכון:\n\n🏗️ מבנה בסיסי:\n```html\n<!DOCTYPE html>\n<html lang='he'>\n<head>\n  <meta charset='UTF-8'>\n  <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n  <title>כותרת העמוד</title>\n</head>\n<body>\n  <h1>כותרת ראשית</h1>\n  <p>פסקת טקסט</p>\n</body>\n</html>\n```\n\n📝 אלמנטים חיוניים:\n• h1-h6 לכותרות\n• p לפסקאות\n• div לקבוצות\n• span לטקסט קטן\n• img לתמונות\n• a לקישורים\n• ul/ol/li לרשימות\n• form/input לטפסים\n\n🎯 Semantic HTML:\n• header, main, footer\n• nav לתפריטים\n• section, article\n• aside לתוכן צדדי\n\nזה יעזור לSEO ולנגישות!",
        },
        {
          id: "html-mdn-guide",
          type: "link" as const,
          title: "MDN HTML Guide",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          description: "המדריך הרשמי והמקיף ביותר ל-HTML",
        },
      ],
    },
    {
      title: "CSS מהיסוד",
      blocks: [
        {
          id: "css-crash-course",
          type: "video" as const,
          title: "CSS מאפס עד מתקדם",
          youtubeId: "1Rs2ND1ryYc",
          description: "למד CSS בצורה מקיפה עם דוגמאות מעשיות",
        },
        {
          id: "flexbox-tutorial",
          type: "video" as const,
          title: "Flexbox מעמיק",
          youtubeId: "fYq5PXgSsbE",
          description: "למד Flexbox לפריסות מורכבות בקלות",
        },
        {
          id: "css-grid-tutorial",
          type: "video" as const,
          title: "CSS Grid Layout",
          youtubeId: "9zBsdzdE4sM",
          description: "CSS Grid לפריסות דו-ממדיות מתקדמות",
        },
        {
          id: "responsive-design",
          type: "video" as const,
          title: "Responsive Design עם CSS",
          youtubeId: "srvUrASNdxk",
          description: "איך לבנות אתרים שנראים טוב בכל גודל מסך",
        },
        {
          id: "css-fundamentals",
          type: "text" as const,
          title: "CSS - הבסיס לעיצוב מקצועי",
          content:
            "CSS זה מה שהופך HTML ל-website יפה ופונקציונלי:\n\n🎨 Selectors בסיסיים:\n```css\n/* Element */\nh1 { color: blue; }\n\n/* Class */\n.my-class { font-size: 20px; }\n\n/* ID */\n#my-id { background: red; }\n\n/* Descendant */\n.container p { margin: 10px; }\n```\n\n📏 Box Model:\n• Content (תוכן)\n• Padding (ריפוד פנימי)\n• Border (מסגרת)\n• Margin (מרווח חיצוני)\n\n📱 Responsive Design:\n• Mobile-first approach\n• Media queries\n• Flexbox לפריסות\n• CSS Grid למערכים\n• Viewport units (vw, vh)\n\n🎯 מושגים חיוניים:\n• Display (block, inline, flex, grid)\n• Position (static, relative, absolute, fixed)\n• Z-index\n• Pseudo-classes (:hover, :focus)\n• Pseudo-elements (::before, ::after)\n\nתרגלו הרבה - זה המפתח!",
        },
        {
          id: "css-tricks",
          type: "link" as const,
          title: "CSS-Tricks - המדריך הכי טוב",
          url: "https://css-tricks.com/",
          description: "אתר עם טריקים, טיפים ומדריכים לCSS",
        },
      ],
    },
    {
      title: "JavaScript מהבסיס",
      blocks: [
        {
          id: "javascript-beginners",
          type: "video" as const,
          title: "JavaScript למתחילים מוחלטים",
          youtubeId: "hdI2bqOjy3c",
          description: "למד JavaScript צעד אחר צעד מהתחלה",
        },
        {
          id: "dom-manipulation",
          type: "video" as const,
          title: "DOM Manipulation בJavaScript",
          youtubeId: "5fb2aPlgoys",
          description: "איך לשנות ולעדכן את הHTML עם JavaScript",
        },
        {
          id: "javascript-events",
          type: "video" as const,
          title: "JavaScript Events ואינטראקטיביות",
          youtubeId: "ndz6iH6o1ms",
          description: "איך להוסיף אינטראקטיביות עם events",
        },
        {
          id: "javascript-fundamentals",
          type: "text" as const,
          title: "JavaScript - הכוח מאחורי האינטראקטיביות",
          content:
            "JavaScript הופך את האתר מסטטי לדינמי ואינטראקטיבי:\n\n📝 יסודות השפה:\n```javascript\n// Variables\nlet name = 'ישראל';\nconst age = 25;\n\n// Functions\nfunction sayHello(name) {\n  return `שלום ${name}!`;\n}\n\n// Arrays\nlet colors = ['אדום', 'כחול', 'ירוק'];\n\n// Objects\nlet person = {\n  name: 'דני',\n  age: 30,\n  city: 'תל אביב'\n};\n```\n\n🎯 DOM Manipulation:\n• getElementById(), querySelector()\n• innerHTML, textContent\n• style properties\n• classList (add, remove, toggle)\n• createElement(), appendChild()\n\n⚡ Events:\n• addEventListener('click', function)\n• Mouse events (click, hover)\n• Keyboard events (keydown, keyup)\n• Form events (submit, change)\n\n🔄 Control Flow:\n• if/else statements\n• for/while loops\n• Array methods (forEach, map, filter)\n• Promises ו-async/await (מתקדם)\n\nזה הבסיס לכל האינטראקטיביות!",
        },
        {
          id: "javascript-mdn",
          type: "link" as const,
          title: "MDN JavaScript Guide",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          description: "המדריך המקיף והמדויק ביותר ל-JavaScript",
        },
      ],
    },
    {
      title: "Git ו-GitHub - ניהול קוד מקצועי",
      blocks: [
        {
          id: "git-github-crash-course",
          type: "video" as const,
          title: "Git ו-GitHub מאפס",
          youtubeId: "apGV9Kg7ics",
          description: "למד לנהל קוד כמו מפתח מקצועי",
        },
        {
          id: "git-workflow",
          type: "video" as const,
          title: "Git Workflow ו-Branches",
          youtubeId: "1ffBJ4sVUb4",
          description: "איך לעבוד עם branches ולשתף קוד בצוות",
        },
        {
          id: "github-pages",
          type: "video" as const,
          title: "פרסום אתרים עם GitHub Pages",
          youtubeId: "QyFcl_Fba-k",
          description: "איך לפרסם את האתרים שלכם בחינם",
        },
        {
          id: "git-fundamentals",
          type: "text" as const,
          title: "Git ו-GitHub - חובה לכל מפתח!",
          content:
            "Git זה מה שהופך אתכם ממתחבבים למפתחים מקצועיים:\n\n🔧 Git בסיסי:\n```bash\n# התקנה ראשונית\ngit config --global user.name 'השם שלכם'\ngit config --global user.email 'email@example.com'\n\n# יצירת repository חדש\ngit init\ngit add .\ngit commit -m 'First commit'\n\n# חיבור ל-GitHub\ngit remote add origin https://github.com/username/repo.git\ngit push -u origin main\n```\n\n🌿 עבודה עם Branches:\n```bash\n# יצירת branch חדש\ngit checkout -b feature-name\n\n# מעבר בין branches\ngit checkout main\ngit checkout feature-name\n\n# איחוד branches\ngit checkout main\ngit merge feature-name\n```\n\n📝 Commits נכונים:\n• הודעות ברורות ומדויקות\n• commit אחד = שינוי אחד\n• לא לעשות commit על קבצים שבורים\n\n🌐 GitHub:\n• Repository management\n• README.md files\n• Issues ו-Pull Requests\n• GitHub Pages לפרסום\n• Profile קיום מקצועי\n\nזה הבסיס לכל עבודה בצוות!",
        },
        {
          id: "git-handbook",
          type: "link" as const,
          title: "Pro Git Book",
          url: "https://git-scm.com/book",
          description: "הספר הרשמי והמלא של Git",
        },
      ],
    },
    {
      title: "פרויקטי תרגול מעשיים",
      blocks: [
        {
          type: "project" as const,
          title: "דף אישי ראשון",
          projectId: "year-1-frontend-portfolio",
          description: "בנה את הדף האישי הראשון שלך עם HTML, CSS ו-JavaScript",
          difficulty: "מתחיל" as const,
        },
        {
          type: "project" as const,
          title: "דף נחיתה רספונסיבי",
          projectId: "year-1-frontend-landing",
          description: "צור דף נחיתה מקצועי שעובד בכל המכשירים",
          difficulty: "בינוני" as const,
        },
      ],
    },
  ],
};
