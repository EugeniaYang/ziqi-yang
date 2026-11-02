export type Publication = {
  id: string;
  title: string;
  authors: string;
  venue: string;
  doi?: string;
  pdf?: string;
  note?: string;
};

export const publications: Publication[] = [
  {
    id: "amia2026",
    title: "Family Context, Reproductive Experiences, and Digital Engagement in Relation to Women's Genetic Health Knowledge, Perceptions, and Communication",
    authors: "Ziqi Yang, Weijun Li, Di Hu, Daniel A. Epstein, and Yunan Chen.",
    venue: "AMIA 2026",
    note: "Accepted",
  },
  {
    id: "chi2026",
    title: "Sharing Women's Health Experiences Influenced by Genetic Factors: Practices, Challenges, and Opportunities",
    authors: "Ziqi Yang, Daniel A. Epstein, and Yunan Chen.",
    venue: "CHI 2026",
    doi: "10.1145/3772318.3790514",
    pdf: "/files/_CHI_26_FamilyGeneticsWomenHealth_CameraReady.pdf",
  },
  {
    id: "recover",
    title: "RECOVER: Designing a Large Language Model-based Remote Patient Monitoring System for Postoperative GI Cancer Care",
    authors: "Ziqi Yang, Yuxuan Lu, Jennifer Bagdasarian, Vedant Das Swain, Ritu Agarwal, Collin Campbell, Waddah Al-Refaire, Jehan El-Bayoumi, Guodong Gao, Nawar Shara, Dakuo Wang, and Bingsheng Yao.",
    venue: "CSCW 2026 / PACMHCI",
    doi: "10.1145/3788068",
    pdf: "/files/cscw032.pdf",
  },
  {
    id: "jamia-edits",
    title: "What do clinicians edit in ambient AI-drafted clinical documentation? A qualitative content analysis",
    authors: "Yawen Guo, Di Hu, Ziqi Yang, Seungjun Kim, Brian Tran, Jamie Lee, Sitha Vallabhaneni, Rachael Zehrung, Sairam Sutari, Steven Tam, Emilie Chow, Danielle Perret, Deepti Pandita, and Kai Zheng.",
    venue: "JAMIA 2026",
    doi: "10.1093/jamia/ocag073",
  },
  {
    id: "jamia-rationale",
    title: "Clinicians' rationale for editing ambient AI-drafted clinical notes: persistent challenges and implications for improvement",
    authors: "Yawen Guo, Di Hu, Ziqi Yang, Emilie Chow, Steven Tam, Danielle Perret, Deepti Pandita, and Kai Zheng.",
    venue: "JAMIA 2026",
    doi: "10.1093/jamia/ocag059",
  },
  {
    id: "robot",
    title: "Observing a robot peer's failures facilitates students' classroom learning",
    authors: "Liuqing Chen*, Yu Cai*, Yuyang Fang, Ziqi Yang, Duowei Xia, Jiaxiang You, Shuhong Xiao, Yaxuan Song, Lingwei Zhan, Juanjuan Chen, and Lingyun Sun.",
    venue: "Science Robotics 2025",
    doi: "10.1126/scirobotics.adu5257",
    note: "* Equal contribution",
  },
  {
    id: "cardioai",
    title: "CardioAI: A Multimodal AI-based System to Support Symptom Monitoring and Risk Prediction of Cancer Treatment-Induced Cardiotoxicity",
    authors: "Siyi Wu, Weidan Cao, Shihan Fu, Bingsheng Yao, Ziqi Yang, Changchang Yin, Varun Mishra, Daniel Addison, Ping Zhang, and Dakuo Wang.",
    venue: "CHI 2025",
    doi: "10.1145/3706598.3714272",
  },
  {
    id: "talk2care",
    title: "Talk2Care: An LLM-based Voice Assistant for Communication between Healthcare Providers and Older Adults",
    authors: "Ziqi Yang*, Xuhai Xu*, Bingsheng Yao, Ethan Rogers, Shao Zhang, Stephen Intille, Nawar Shara, Guodong Gordon Gao, and Dakuo Wang.",
    venue: "IMWUT 2024",
    doi: "10.1145/3659625",
    note: "Distinguished Paper Award · * Equal contribution",
  },
];
