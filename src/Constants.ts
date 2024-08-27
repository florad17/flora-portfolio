import burtImg from "./Assets/burt_intelligence_logo.jpeg"
import fordhamImg from "./Assets/logo_square_Fordham_Logo__1_.png";

export const METADATA = {
  title: "Portfolio | Flora Dedvukaj",
  description:
    "I am a Computer Science and Mathematics student at Fordham University with expertise in software engineering, machine learning, and data science. Passionate about technology and healthcare innovation, I have hands-on experience in developing full-stack web applications and intelligent models.",
}

export const PROJECTS = [
  {
    image: burtImg,
    name: "Burt Intelligence.",
    technologyUsed: "Data Science Intern | Summer 2024",
    description: "I created a scalable chatbot architecture using AWS services, including Bedrock, SageMaker, and S3. To enhance document retrieval, I implemented Retrieval-Augmented Generation (RAG) using Kendra and LanceDB. I also developed real-time Lambda functions to ensure low latency and set up API Gateway for RESTful API interaction.",
  },
  {
    image: fordhamImg,
    name: "Fordham University Mathematics Department",
    technologyUsed: "Summer Research Assistant | Summer 2023",
    description: "I authored and presented research findings on space-filling curves at various conferences, including JMM 2024. I constructed specific examples of algebraic space-filling curves in three-dimensional projective space, focusing on those with the smallest possible degree. Additionally, I developed new geometrical constructs in three-dimensional projective spaces using Macaulay2 and Python, employing the NumPy and SciPy libraries to perform advanced algebraic computations.",
  },
  {
    image: fordhamImg,
    name: "Fordham University Computer Science Department",
    technologyUsed: "AI/ML Fellowship",
    description: "I conducted extensive research on the latest developments and best practices in Artificial Intelligence and Machine Learning, reviewing academic literature and attending conferences and seminars. I analyzed and tested simple machine learning models, conducting experiments to evaluate the effectiveness and accuracy of various algorithms. Additionally, I analyzed and interpreted data using TensorFlow and Keras to identify patterns and trends in the results.",
  }
];

export const SKILLS = [
  { name: "ReactJs", initialRating: 4 },
  { name: "React-Native", initialRating: 4 },
  { name: "JavaScript", initialRating: 4 },
  { name: "Redux", initialRating: 4 },
  { name: "Nodejs", initialRating: 3 },
  { name: "Html", initialRating: 4 },
  { name: "CSS", initialRating: 4 },
  { name: "TypeScript", initialRating: 4 },
  { name: "Git", initialRating: 4 },
  { name : "AWS", initialRating: 4}
];

export const TOOLS = [
  "Visual Studio Code", 
  "Git", 
  "Chrome DevTools", 
  "Npm (Node Package Manager)", 
  "Sublime Text", 
  "Linux", 
  "Postman", 
  "MongoDB"
]

export const TYPED_STRINGS = [
  "AI Enthusiast", 
  "Machine Learning Engineer", 
  "Software Developer", 
  "Problem Solver"
]

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide"
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large"
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Headstarter AI Software Engineering Fellowship",
    size: ItemSize.SMALL,
    subtitle: "Built several AI projects",
    shouldDrawLine: true,
    alignment: Branch.LEFT
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Data Science intern at Burt Intelligence.",
    shouldDrawLine: true,
    alignment: Branch.LEFT
  },
  {
  type: NodeTypes.CHECKPOINT,
  title: "2023",
  size: ItemSize.LARGE,
  shouldDrawLine: false,
  alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "AI/ML Fellowship",
    size: ItemSize.SMALL,
    subtitle: "Worked with students and advisors to learn about machine learning principles and test various models using complex datasets.",
    image: "/src/Assets/logo_square_Fordham_Logo__1_.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Summer Research Assistant",
    size: ItemSize.SMALL,
    subtitle: "Algebraic space filling curves"
  }
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  }
]

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAP