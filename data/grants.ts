import { Grant } from '../types';

export const grantsData: Grant[] = [
  {
    id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    title: "Startup India Seed Fund Scheme (SISFS)",
    department: "DPIIT, Ministry of Commerce & Industry",
    description: "Provides financial assistance to startups for proof of concept, prototype development, product trials, market entry, and commercialization. It helps startups validate their ideas and scale up.",
    eligibility: [
      "DPIIT recognized startup (not more than 2 years old)",
      "Startup must have a business idea to develop a product or a service with a market fit, viable commercialization, and scope of scaling.",
      "Should not have received more than ₹10 lakh of monetary support under any other Central or State Government scheme."
    ],
    fundingAmount: "Up to ₹20 Lakhs (Proof of Concept) & Up to ₹50 Lakhs (Commercialization)",
    applicationLink: "https://seedfund.startupindia.gov.in/",
    tags: ["Seed Fund", "Early Stage", "Startup", "Innovation"],
    applicationDeadline: "Varies by Incubator"
  },
  {
    id: "b2c3d4e5-f6a7-8901-2345-67890abcdef1",
    title: "TIDE 2.0 (Technology Incubation and Development of Entrepreneurs)",
    department: "Ministry of Electronics and Information Technology (MeitY)",
    description: "Aims to promote tech entrepreneurship through financial and technical support to incubators engaged in supporting ICT startups using emerging technologies such as IoT, AI, Blockchain, Robotics etc.",
    eligibility: [
      "Focus on specific thematic areas in ICT.",
      "Must be an individual entrepreneur or a startup.",
      "The program supports ventures from the ideation stage to the MVP stage."
    ],
    fundingAmount: "Up to ₹4 Lakhs (EiR) & Up to ₹7 Lakhs (Grant)",
    applicationLink: "https://meitystartuphub.in/",
    tags: ["Technology", "Incubation", "Electronics", "ICT", "AI"],
    applicationDeadline: "Varies by Incubator"
  },
  {
    id: "c3d4e5f6-a7b8-9012-3456-7890abcdef23",
    title: "NIDHI-PRAYAS",
    department: "Department of Science & Technology (DST)",
    description: "Supports young innovators to turn their ideas into proof-of-concept. This grant helps build a prototype so the innovator has a better chance to attract further funding.",
    eligibility: [
      "Individual innovator, team of innovators, or a startup.",
      "Must have a formal business plan.",
      "Idea must be innovative and have potential for commercialization."
    ],
    fundingAmount: "Up to ₹10 Lakhs",
    applicationLink: "https://www.nidhi-prayas.org/",
    tags: ["Innovation", "Prototype", "Hardware", "Science & Tech"],
    applicationDeadline: "Varies by PRAYAS Centre"
  },
  {
    id: "d4e5f6a7-b8c9-0123-4567-890abcdef345",
    title: "Biotechnology Ignition Grant (BIG)",
    department: "BIRAC, Department of Biotechnology",
    description: "Supports and encourages entrepreneurs and young startups to take their high-risk, high-reward innovative ideas to the proof-of-concept stage in the biotechnology sector.",
    eligibility: [
      "Individual, Startup, or LLP.",
      "Project must be in the field of biotechnology.",
      "Applicant must have a formal business plan."
    ],
    fundingAmount: "Up to ₹50 Lakhs",
    applicationLink: "https://birac.nic.in/desc_new.php?id=83",
    tags: ["Biotechnology", "Healthcare", "Research", "Life Sciences"],
    applicationDeadline: "Check official website (Typically biannual)"
  },
  {
    id: "e5f6a7b8-c9d0-1234-5678-90abcdef4567",
    title: "Dairy Processing & Infrastructure Development Fund (DIDF)",
    department: "NABARD, Dept of Animal Husbandry & Dairying",
    description: "Provides subsidized loans for modernizing and expanding milk processing capacity and infrastructure. Aims to double farmers' income and boost the dairy sector.",
    eligibility: [
      "Dairy Cooperatives, Milk Producer Companies, Multi State Cooperatives.",
      "Must have a viable project plan for infrastructure development.",
    ],
    fundingAmount: "Loan with Interest subvention up to 2.5%",
    applicationLink: "https://www.nabard.org/content.aspx?id=594",
    tags: ["Agriculture", "Dairy", "Infrastructure", "Rural"],
    applicationDeadline: "Open throughout the year"
  },
  {
    id: "f6a7b8c9-d0e1-2345-6789-01bcdef56789a",
    title: "SAMRIDH Scheme",
    department: "Ministry of Electronics and Information Technology (MeitY)",
    description: "Supports existing and upcoming accelerators to select and accelerate potential software product-based startups to scale. The program provides funding and mentorship.",
    eligibility: [
      "Startups must be registered with DPIIT.",
      "Must have a validated proof of concept.",
      "Should be looking for institutional funding to scale up."
    ],
    fundingAmount: "Up to ₹40 Lakhs",
    applicationLink: "https://www.meitystartuphub.in/en/startup-scheme/samridh-scheme/",
    tags: ["IT", "Software", "Accelerator", "Scale-up"],
    applicationDeadline: "Check official website for cohorts"
  },
  {
    id: "a7b8c9d0-e1f2-3456-7890-12cdef6789ab0",
    title: "NewGen IEDC",
    department: "National Science & Technology Entrepreneurship Development Board (NSTEDB)",
    description: "Aims to inculcate the spirit of innovation and entrepreneurship amongst the young S&T students, and to support and encourage them to generate innovative ideas and startups.",
    eligibility: [
      "Implemented in educational institutions.",
      "Students can form teams to work on innovative ideas.",
      "Projects should have commercial potential."
    ],
    fundingAmount: "Up to ₹2.5 Lakhs per project",
    applicationLink: "https://www.newgeniedc.com/",
    tags: ["Students", "Innovation", "Academia", "Entrepreneurship"],
    applicationDeadline: "Varies by Institution"
  },
  {
    id: "b8c9d0e1-f2a3-4567-8901-23def789ab01c",
    title: "Support for International Patent Protection in E&IT (SIP-EIT)",
    department: "Ministry of Electronics and Information Technology (MeitY)",
    description: "Provides financial support to MSMEs and Technology Startup units for international patent filing to encourage innovation and recognize the value and capabilities of global IP.",
    eligibility: [
      "Registered MSMEs or technology startups.",
      "Applicant should have a valid patent in India.",
      "The invention should be in the ICT domain."
    ],
    fundingAmount: "Up to ₹15 Lakhs per invention",
    applicationLink: "https://www.meity.gov.in/content/sip-eit",
    tags: ["Patent", "Intellectual Property", "IT", "MSME", "Global"],
    applicationDeadline: "Open throughout the year"
  },
  {
    id: "c9d0e1f2-a3b4-5678-9012-34ef89ab01cd2",
    title: "Mudra Yojana (PMMY)",
    department: "Ministry of Finance",
    description: "Provides loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises. These loans are given by Commercial Banks, RRBs, Small Finance Banks, MFIs and NBFCs.",
    eligibility: [
      "Any Indian Citizen who has a business plan for a non-farm sector income generating activity.",
      "Activities allied to agriculture are also covered.",
      "Loan categories: Shishu (up to ₹50,000), Kishor (₹50,001 - ₹5 lakh), Tarun (₹5,00,001 - ₹10 lakh)."
    ],
    fundingAmount: "Up to ₹10 Lakhs",
    applicationLink: "https://www.mudra.org.in/",
    tags: ["Loan", "MSME", "Small Business", "Micro Enterprise"],
    applicationDeadline: "Open throughout the year"
  },
  {
    id: "d0e1f2a3-b4c5-6789-0123-45f9ab01cd23e",
    title: "Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)",
    department: "Ministry of MSME & SIDBI",
    description: "Provides a credit guarantee for loans taken by micro and small enterprises from formal banking institutions, without the need for collateral.",
    eligibility: [
      "New and existing Micro and Small Enterprises.",
      "The loan should be for a viable business project.",
    ],
    fundingAmount: "Collateral-free loans up to ₹2 Crore",
    applicationLink: "https://www.cgtmse.in/",
    tags: ["MSME", "Credit Guarantee", "Loan", "Small Business"],
    applicationDeadline: "Open throughout the year"
  },
  {
    id: "e1f2a3b4-c5d6-7890-1234-56a0bc12de34f",
    title: "SPIN (Strengthening the Potential of India) Scheme",
    department: "Khadi and Village Industries Commission (KVIC)",
    description: "Aims to enable the potters to get direct credit from the banks under PMMY and to provide them with necessary training and modern equipment to enhance their skills and income.",
    eligibility: [
      "Artisans and individuals skilled in pottery.",
      "Must be willing to set up their own pottery unit."
    ],
    fundingAmount: "Financial assistance under PM Mudra Yojana",
    applicationLink: "http://www.kvic.org.in/kvicres/update/SPIN.html",
    tags: ["Artisan", "Pottery", "Rural", "Skill Development"],
    applicationDeadline: "Open throughout the year"
  },
  {
    id: "f2a3b4c5-d6e7-8901-2345-67b1cd23ef450",
    title: "Venture Capital Assistance Scheme",
    department: "Small Farmers' Agri-Business Consortium (SFAC)",
    description: "Provides interest-free loans to qualifying projects to meet the shortfall in capital requirement for the implementation of the project.",
    eligibility: [
      "Farmers, Producer Groups, Agripreneurs, Units in Agri-Export Zones.",
      "Project must be in the agri-business sector.",
    ],
    fundingAmount: "Lower of ₹50 Lakhs or 26% of promoter's equity",
    applicationLink: "https://sfacindia.com/vca.html",
    tags: ["Agri-Business", "Venture Capital", "Agriculture", "Farmers"],
    applicationDeadline: "Open throughout the year"
  },
  {
    id: "a3b4c5d6-e7f8-9012-3456-78c2de34f0561",
    title: "Stand-Up India Scheme",
    department: "Department of Financial Services",
    description: "Facilitates bank loans between ₹10 lakh and ₹1 Crore to at least one Scheduled Caste (SC) or Scheduled Tribe (ST) borrower and at least one woman borrower per bank branch for setting up a greenfield enterprise.",
    eligibility: [
      "SC/ST and/or women entrepreneurs, above 18 years of age.",
      "Loans under the scheme are available for only greenfield projects.",
      "The enterprise may be in manufacturing, services or the trading sector."
    ],
    fundingAmount: "₹10 Lakhs - ₹1 Crore",
    applicationLink: "https://www.standupmitra.in/",
    tags: ["Women Entrepreneurs", "SC/ST", "Loan", "Greenfield", "Social Welfare"],
    applicationDeadline: "Open throughout the year"
  },
  {
    id: "b4c5d6e7-f8a9-0123-4567-89d3ef4501672",
    title: "AGRI UDAAN - Food and Agribusiness Accelerator",
    department: "ICAR-NAARM, a-IDEA & IIM-A",
    description: "A program focused on catalyzing scale-up stage Food and Agribusiness startups through rigorous mentoring, industry networking and investor pitching.",
    eligibility: [
      "Scale-up stage startups in Food & Agri-business.",
      "Must have a market-ready product.",
      "Should be looking for scaling up their operations."
    ],
    fundingAmount: "Mentoring, Networking, Investor Connect",
    applicationLink: "https://www.agriudaan.com/",
    tags: ["Agri-Tech", "Food Processing", "Accelerator", "Scale-up"],
    applicationDeadline: "Check official website for cohorts"
  },
  {
    id: "c5d6e7f8-a9b0-1234-5678-90e4f05612783",
    title: "ASPIRE (A Scheme for Promoting Innovation, Rural Industry & Entrepreneurship)",
    department: "Ministry of MSME",
    description: "Aims to set up a network of technology centers and to set up incubation centers to accelerate entrepreneurship and also to promote startups for innovation and entrepreneurship in the rural and agriculture-based industry.",
    eligibility: [
      "Implementing agencies can be Government or Private sector institutions.",
      "Focus on rural and agro-based industries.",
    ],
    fundingAmount: "Varies based on the component",
    applicationLink: "https://aspire.msme.gov.in/",
    tags: ["Rural", "Innovation", "MSME", "Agro-Industry", "Incubation"],
    applicationDeadline: "Varies by project"
  }
];