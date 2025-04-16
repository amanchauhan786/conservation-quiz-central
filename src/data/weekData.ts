// Import necessary types
import { Week, Question } from '@/types';

// Define week data
export const weeks: Week[] = [
  {
    id: 1,
    title: "Introduction to Environmental Science",
    description: "An overview of key concepts in environmental science.",
    questions: [
      {
        id: 1,
        text: "What is the study of the interactions between organisms and their environment called?",
        options: ["Ecology", "Biology", "Chemistry", "Physics"],
        correctAnswer: "Ecology",
        weekId: 1
      },
      {
        id: 2,
        text: "Which of the following is NOT a renewable energy source?",
        options: ["Solar", "Wind", "Coal", "Hydropower"],
        correctAnswer: "Coal",
        weekId: 1
      },
      {
        id: 3,
        text: "What is the primary cause of deforestation?",
        options: ["Agriculture", "Urbanization", "Mining", "All of the above"],
        correctAnswer: "All of the above",
        weekId: 1
      }
    ]
  },
  {
    id: 2,
    title: "Ecosystems and Biodiversity",
    description: "Exploring the structure and function of ecosystems and the importance of biodiversity.",
    questions: [
      {
        id: 1,
        text: "What is the term for the variety of life in a particular habitat or ecosystem?",
        options: ["Biodiversity", "Ecology", "Evolution", "Genetics"],
        correctAnswer: "Biodiversity",
        weekId: 2
      },
      {
        id: 2,
        text: "Which of the following is an example of a keystone species?",
        options: ["Deer", "Beaver", "Rabbit", "Squirrel"],
        correctAnswer: "Beaver",
        weekId: 2
      },
      {
        id: 3,
        text: "What is the process by which plants convert carbon dioxide and water into glucose and oxygen?",
        options: ["Photosynthesis", "Respiration", "Transpiration", "Fermentation"],
        correctAnswer: "Photosynthesis",
        weekId: 2
      }
    ]
  },
  {
    id: 3,
    title: "Pollution and Waste Management",
    description: "Understanding the sources and impacts of pollution and strategies for waste management.",
    questions: [
      {
        id: 1,
        text: "Which of the following is a major source of air pollution?",
        options: ["Volcanic eruptions", "Industrial emissions", "Deforestation", "All of the above"],
        correctAnswer: "Industrial emissions",
        weekId: 3
      },
      {
        id: 2,
        text: "What is the term for the contamination of water bodies with harmful substances?",
        options: ["Water pollution", "Air pollution", "Soil pollution", "Noise pollution"],
        correctAnswer: "Water pollution",
        weekId: 3
      },
      {
        id: 3,
        text: "Which of the following is a method of reducing waste?",
        options: ["Recycling", "Composting", "Reducing consumption", "All of the above"],
        correctAnswer: "All of the above",
        weekId: 3
      }
    ]
  },
  {
    id: 4,
    title: "Climate Change",
    description: "Examining the causes and consequences of climate change and strategies for mitigation and adaptation.",
    questions: [
      {
        id: 1,
        text: "What is the primary greenhouse gas responsible for climate change?",
        options: ["Carbon dioxide", "Methane", "Nitrous oxide", "Water vapor"],
        correctAnswer: "Carbon dioxide",
        weekId: 4
      },
      {
        id: 2,
        text: "Which of the following is a consequence of climate change?",
        options: ["Rising sea levels", "More frequent extreme weather events", "Changes in species distribution", "All of the above"],
        correctAnswer: "All of the above",
        weekId: 4
      },
      {
        id: 3,
        text: "What is the term for reducing greenhouse gas emissions?",
        options: ["Mitigation", "Adaptation", "Conservation", "Preservation"],
        correctAnswer: "Mitigation",
        weekId: 4
      }
    ]
  },
  {
    id: 5,
    title: "Environmental Policy and Sustainability",
    description: "Exploring environmental policies and the principles of sustainability.",
    questions: [
      {
        id: 1,
        text: "What is the concept of meeting the needs of the present without compromising the ability of future generations to meet their own needs?",
        options: ["Sustainability", "Conservation", "Preservation", "Development"],
        correctAnswer: "Sustainability",
        weekId: 5
      },
      {
        id: 2,
        text: "Which of the following is an example of an international environmental agreement?",
        options: ["Kyoto Protocol", "Paris Agreement", "Montreal Protocol", "All of the above"],
        correctAnswer: "All of the above",
        weekId: 5
      },
      {
        id: 3,
        text: "What is the role of environmental policies?",
        options: ["To protect natural resources", "To regulate pollution", "To promote sustainable development", "All of the above"],
        correctAnswer: "All of the above",
        weekId: 5
      }
    ]
  },
  {
    id: 6,
    title: "Water Resources and Management",
    description: "Understanding the importance of water resources and strategies for their management.",
    questions: [
      {
        id: 1,
        text: "What is the process by which water is purified naturally?",
        options: ["Evaporation", "Condensation", "Filtration", "All of the above"],
        correctAnswer: "All of the above",
        weekId: 6
      },
      {
        id: 2,
        text: "Which of the following is a major source of water pollution?",
        options: ["Agricultural runoff", "Industrial discharge", "Sewage", "All of the above"],
        correctAnswer: "All of the above",
        weekId: 6
      },
      {
        id: 3,
        text: "What is the term for the sustainable use and protection of water resources?",
        options: ["Water management", "Water conservation", "Water preservation", "Water development"],
        correctAnswer: "Water management",
        weekId: 6
      }
    ]
  },
  {
    id: 7,
    title: "Energy Resources and Consumption",
    description: "Exploring different energy resources and patterns of energy consumption.",
    questions: [
      {
        id: 1,
        text: "Which of the following is a renewable energy source?",
        options: ["Solar", "Wind", "Geothermal", "All of the above"],
        correctAnswer: "All of the above",
        weekId: 7
      },
      {
        id: 2,
        text: "What is the term for the amount of energy consumed by a household or industry?",
        options: ["Energy consumption", "Energy production", "Energy efficiency", "Energy conservation"],
        correctAnswer: "Energy consumption",
        weekId: 7
      },
      {
        id: 3,
        text: "Which of the following is a strategy for reducing energy consumption?",
        options: ["Using energy-efficient appliances", "Turning off lights when not in use", "Insulating buildings", "All of the above"],
        correctAnswer: "All of the above",
        weekId: 7
      }
    ]
  },
  {
    id: 8,
    title: "Land Use and Urbanization",
    description: "Understanding the impacts of land use and urbanization on the environment.",
    questions: [
      {
        id: 1,
        text: "What is the term for the conversion of natural land into urban areas?",
        options: ["Urbanization", "Deforestation", "Desertification", "Land degradation"],
        correctAnswer: "Urbanization",
        weekId: 8
      },
      {
        id: 2,
        text: "Which of the following is a consequence of urbanization?",
        options: ["Habitat loss", "Increased pollution", "Increased traffic congestion", "All of the above"],
        correctAnswer: "All of the above",
        weekId: 8
      },
      {
        id: 3,
        text: "What is the concept of designing cities to minimize environmental impact?",
        options: ["Sustainable urban planning", "Urban sprawl", "Urban renewal", "Urban decay"],
        correctAnswer: "Sustainable urban planning",
        weekId: 8
      }
    ]
  },
  {
    id: 9,
    title: "Agriculture and Food Production",
    description: "Exploring the environmental impacts of agriculture and strategies for sustainable food production.",
    questions: [
      {
        id: 1,
        text: "What is the term for the practice of growing crops without synthetic fertilizers and pesticides?",
        options: ["Organic farming", "Conventional farming", "Industrial farming", "Subsistence farming"],
        correctAnswer: "Organic farming",
        weekId: 9
      },
      {
        id: 2,
        text: "Which of the following is a consequence of intensive agriculture?",
        options: ["Soil erosion", "Water pollution", "Loss of biodiversity", "All of the above"],
        correctAnswer: "All of the above",
        weekId: 9
      },
      {
        id: 3,
        text: "What is the concept of producing food in a way that minimizes environmental impact?",
        options: ["Sustainable agriculture", "Industrial agriculture", "Monoculture", "Slash-and-burn agriculture"],
        correctAnswer: "Sustainable agriculture",
        weekId: 9
      }
    ]
  },
  {
    id: 10,
    title: "Environmental Ethics and Justice",
    description: "Examining ethical considerations and issues of justice in environmental decision-making.",
    questions: [
      {
        id: 1,
        text: "What is the concept of extending moral consideration to non-human entities?",
        options: ["Environmental ethics", "Anthropocentrism", "Biocentrism", "Ecocentrism"],
        correctAnswer: "Environmental ethics",
        weekId: 10
      },
      {
        id: 2,
        text: "Which of the following is an example of environmental injustice?",
        options: ["Disproportionate exposure of minority communities to pollution", "Unequal access to natural resources", "Lack of representation in environmental decision-making", "All of the above"],
        correctAnswer: "All of the above",
        weekId: 10
      },
      {
        id: 3,
        text: "What is the principle of distributing environmental benefits and burdens fairly?",
        options: ["Environmental justice", "Social justice", "Economic justice", "Political justice"],
        correctAnswer: "Environmental justice",
        weekId: 10
      }
    ]
  },
  {
    id: 11,
    title: "Wildlife Conservation",
    description: "Understanding the importance of wildlife conservation and strategies for protecting endangered species.",
    questions: [
      {
        id: 1,
        text: "What is the term for the protection of wild species and their habitats?",
        options: ["Wildlife conservation", "Wildlife management", "Wildlife preservation", "Wildlife exploitation"],
        correctAnswer: "Wildlife conservation",
        weekId: 11
      },
      {
        id: 2,
        text: "Which of the following is a threat to wildlife?",
        options: ["Habitat loss", "Poaching", "Pollution", "All of the above"],
        correctAnswer: "All of the above",
        weekId: 11
      },
      {
        id: 3,
        text: "What is the role of protected areas in wildlife conservation?",
        options: ["To provide habitat for wildlife", "To protect endangered species", "To promote ecotourism", "All of the above"],
        correctAnswer: "All of the above",
        weekId: 11
      }
    ]
  },
  // Add Week 12
  {
    id: 12,
    title: "Conservation Terminology and Ecosystem Services",
    description: "Understanding key conservation terms, wildlife acts, and the classification of ecosystem services.",
    questions: [
      {
        id: 1,
        text: "As per Wildlife Protection Act 1972 (WPA 1972), wild life includes any animal, aquatic or land vegetation which forms part of any _____ .",
        options: ["ecosystem", "state", "country", "habitat"],
        correctAnswer: "habitat",
        weekId: 12
      },
      {
        id: 2,
        text: "The tiger has a home range of several square kilometres, regulates the ecosystem through controlling herbivore populations and trophic cascades, and people come to tiger reserves to watch tigers. Thus, the tiger can be called as",
        options: ["umbrella species", "keystone species", "flagship species", "all of the above"],
        correctAnswer: "all of the above",
        weekId: 12
      },
      {
        id: 3,
        text: "Soil formation is an example of",
        options: ["provisioning service", "regulating service", "supporting service", "cultural service"],
        correctAnswer: "supporting service",
        weekId: 12
      },
      {
        id: 4,
        text: "Zoo is an example of",
        options: ["in-situ conservation", "ex-situ conservation", "in-situ preservation", "ex-situ preservation"],
        correctAnswer: "ex-situ conservation",
        weekId: 12
      },
      {
        id: 5,
        text: "The fig tree bears fruits in times when animals do not have much access to food. In this context, it would be a good example of",
        options: ["least concern species", "keystone species", "flagship species", "extinct species"],
        correctAnswer: "keystone species",
        weekId: 12
      },
      {
        id: 6,
        text: "Nutrient cycling is an example of",
        options: ["provisioning service", "regulating service", "supporting service", "cultural service"],
        correctAnswer: "supporting service",
        weekId: 12
      },
      {
        id: 7,
        text: "People come to Sessa orchid sanctuary in Arunachal Pradesh to witness orchids, which in this context would be classified as",
        options: ["umbrella species", "keystone species", "flagship species", "extinct species"],
        correctAnswer: "flagship species",
        weekId: 12
      },
      {
        id: 8,
        text: "We prefer those areas for the creation of a conservation reserve where the level of threat is",
        options: ["very high", "medium", "very low", "non-existent"],
        correctAnswer: "non-existent",
        weekId: 12
      },
      {
        id: 9,
        text: "The elephant has a home range of several square kilometres, regulates the ecosystem by its habit of destructive feeding, and people can relate to this animal which is important for conservation. Given this background, the elephant can be called as",
        options: ["umbrella species", "keystone species", "flagship species", "all of the above"],
        correctAnswer: "all of the above",
        weekId: 12
      },
      {
        id: 10,
        text: "Biological control of pest populations is an example of",
        options: ["provisioning service", "regulating service", "supporting service", "cultural service"],
        correctAnswer: "regulating service",
        weekId: 12
      }
    ]
  }
];

// Export all weeks data
export const getAllWeeks = (): Week[] => {
  return weeks;
};

// Get a specific week by ID
export const getWeekbyId = (id: number): Week | undefined => {
  return weeks.find(week => week.id === id);
};

// Export a specific week's questions
export const getWeekQuestions = (weekId: number): Question[] => {
  const week = weeks.find(w => w.id === weekId);
  return week ? week.questions : [];
};

// Export weekly quiz titles for navigation
export const getWeeklyQuizTitles = (): { id: number; title: string }[] => {
  return weeks.map(week => ({
    id: week.id,
    title: week.title
  }));
};

// Get random questions across all weeks
export const getRandomQuestions = (count: number): Question[] => {
  // Flatten all questions from all weeks into a single array
  const allQuestions = weeks.flatMap(week => 
    week.questions.map(q => ({
      ...q,
      weekId: week.id
    }))
  );
  
  // Shuffle the array
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  
  // Return requested number of questions (or all if count > available questions)
  return shuffled.slice(0, Math.min(count, shuffled.length));
};
