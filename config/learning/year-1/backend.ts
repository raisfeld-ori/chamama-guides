export const config = {
  title: "פיתוח Backend - שנה 1",
  description: "למד את יסודות תכנות צד שרת",
  sections: [
    {
      title: "בניית השרת הראשון",
      blocks: [
        {
          id: "python-intro",
          type: "video" as const,
          title:"תכנות בשפת פייתון",
          youtubeId: "rfscVS0vtbw",
          description: "הבנת תכנות צד שרת",
        },
        {
          id: "python-practice",
          type: "text" as const,
          title: "להתנסות קצת עם פייתון",
          content: "סיימתם את הסרטון? תתנסו קצת עם פייתון, תבנו שטויות",
        },
      ],
    },
    {
      title: "איך להכין שרתים",
      blocks: [
        {
          id: "flask-tutorial",
          type: "video" as const,
          title: "ללמוד Flask",
          youtubeId: "Z1RJmh_OqeA",
          description: "הכלי הכי פופולרי לבניית שרתים בפייתון",
        }
      ],
    },
    {
      title: "בחרו פרויקט ראשון",
      blocks: [
        {
          type: "project" as const,
          title: "שרת API שימושי",
          projectId: "year-1-backend-rest-api",
          description: "שרתי API הם הזדמנות לפרסום, כסף, והרבה למידה",
          difficulty: "קל" as const,
        },
        {
          type: "project" as const,
          title: "אתר פורטפוליו",
          projectId: "year-1-portfolio-website",
          description: "זה יעזור לכם למשך שאר הלימודים",
          difficulty: "קל" as const,
        },
      ],
    },
    {
      title: "קידום ידע",
      blocks: [
        {
          id: "oop-tutorial",
          type: "video" as const,
          title: "פיתוח מובנה חפצים",
          youtubeId: "JeznW_7DlB0",
          description: "כלי מאוד חשוב ושימושי לכל אחד לדעת"
        },
        {
          id: "algorithms-tutorial",
          type: "video" as const,
          title: "אלגוריתמים ומבני נתונים",
          youtubeId: "pkYVOmU3MgA",
          description: "תלמדו הרבה אלגוריתמים ומבני נתונים פופולריים",
        },
      ]
    },
    {
      title: "הוצאת שרת לרשת",
      blocks: [
        {
          id: "deployment-tutorial",
          type: "video" as const,
          title: "השרת שלך, עכשיו אונליין",
          youtubeId: "Bx_jHawKn5A",
          description: "סרטון קצר בשביל להעלות את השרת לרשת"
        }
      ]
    },
    {
      title: "אותו פרויקט- עם יותר ידע",
      blocks: [
        {
          id: "rebuild-project",
          type: "text" as const,
          title: "אתם עכשיו בונים מחדש את הפרויקט הראשון שלכם, אבל עם יותר ידע ויכולות",
          content: "קחו את הפרויקט הראשון שלכם ובנו אותו מחדש עם כל הידע החדש שרכשתם. הוסיפו פיצ'רים חדשים, שפרו את הקוד, והפכו אותו למשהו שאתם באמת גאים בו."
        },
        {
          type: "project" as const,
          title: "שרת API שימושי",
          projectId: "year-1-backend-rest-api",
          description: "שרתי API הם הזדמנות לפרסום, כסף, והרבה למידה",
          difficulty: "קל" as const,
        },
        {
          type: "project" as const,
          title: "אתר פורטפוליו",
          projectId: "year-1-portfolio-website",
          description: "זה יעזור לכם למשך שאר הלימודים",
          difficulty: "קל" as const,
        },
      ],
    },
    {
      title: "שרתים מתקדמים וSQL",
      blocks: [
        {
          id: "networking-python",
          type: "video" as const,
          title: "רשתות עם פייתון",
          youtubeId: "FGdiSJakIS4",
          description: "ללמוד איך הרשת עובדת עם פייתון"
        },
        {
          id: "postgresql-tutorial",
          type: "video" as const,
          title: "postgresQL",
          youtubeId: "qw--VYLpxG4",
          description: "ללמוד איך להכין נתונים בפייתון"
        }
      ]
    }
  ],
};
