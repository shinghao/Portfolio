type Work = {
  company: string;
  jobTitle: string;
  date: string;
  content: Array<string>;
  skills: Array<string>;
};

const workData: Record<string, Work> = {
  serlio: {
    company: "Serl.io",
    jobTitle: "Software Developer",
    date: "May 22 - Nov 22",
    content: [
      "Developed multiple end-to-end {{Mixed Reality}} applications for the {{Microsoft Hololens 2}}",
      "Built the front-end of MRx, a {{Web Client}} on Windows Store",
      "Conducted regular {{Product Demos}} for clients",
      "Independently exhibited booth at SEMICON 2022 Penang, acquiring new international business leads",
    ],
    skills: ["csharp", "unity", "angularjs", "javascript"],
  },
  govtech: {
    company: "Government Technology Agency",
    jobTitle: "Full-Stack Software Engineer Intern",
    date: "July 23 - Dec 23",
    content: [
      "Collaborated to enhance & develop the {{Singpass API Portal}}, a public facing shopfront for Singpass API products used by businesses & developers",
      "Integrated an external system into the portal, involving the development of new endpoints & a webhook",
      "Successfully resolved numerous time-sensitive {{Production Issues}} & {{Vulnerabilities}} raised by stakeholders",
    ],
    skills: ["javascript", "typescript", "angularjs", "nodejs", "awslambda"],
  },
};

export default workData;
