export const config = {
  title: "פיתוח Backend - שנה 1",
  description: "למד את יסודות תכנות צד שרת",
  sections: [
    {
      title: "בניית השרת הראשון",
      blocks: [
        {
          type: "video" as const,
          title:"תכנות בשפת פייתון",
          youtubeId: "rfscVS0vtbw",
          description: "הבנת תכנות צד שרת",
        },
        {
          type: "text" as const,
          title: "להתנסות קצת עם פייתון",
          content: "סיימתם את הסרטון? תתנסו קצת עם פייתון, תבנו שטויות",
        },
      ],
    },
    {
      title: "ללמוד להכין תוצרים",
      blocks: [
        {
          type: "video" as const,
          title: "אפשרות אחת: ללמוד flask",
          youtubeId: "Z1RJmh_OqeA",
          description: "הכלי הכי פופולרי לבניית שרתים",
        },
        {
          type: "video" as const,
          title: "אפשרות שנייה: ללמוד QT",
          youtubeId: "Z1N9JzNax2k",
          description: "המערכת אחת הגדולות ביותר בשביל בניית אפליקציות"
        }
      ],
    },
    {
      title: "בחרו פרויקט ראשון",
      blocks: [
        {
          type: "project" as const,
          title: "שרת לתיכון החממה",
          projectId: "year-1-backend-rest-api",
          description: "השרת פייתון הראשון שלך",
          difficulty: "קל" as const,
        },
        {
          type: "project" as const,
          title: "אפליקציה לתיכון החממה",
          projectId: "year-1-backend-application",
          description: "האפליקציה הראשונה שלכם",
          difficulty: "קל" as const,
        },
      ],
    },
  ],
};
