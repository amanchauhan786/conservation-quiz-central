
import { Question } from "@/types";

export interface Week {
  id: number;
  title: string;
  description: string;
  content: {
    content: string;
  };
  questions: Question[];
}

export const weeks: Week[] = [
  {
    id: 1,
    title: "Week 1: Introduction to Environmental Science",
    description: "Overview of environmental science, its scope, and importance.",
    content: {
      content: `
        <h2>Introduction</h2>
        <p>This week introduces the fundamental concepts of environmental science. We'll explore the interdisciplinary nature of the field and its relevance to current global challenges.</p>
        
        <h3>Topics Covered:</h3>
        <ul>
          <li>Definition and scope of environmental science</li>
          <li>Key environmental issues: climate change, pollution, deforestation</li>
          <li>The role of science and technology in addressing environmental problems</li>
        </ul>
      `
    },
    questions: [
      {
        id: 1,
        text: "What is the primary focus of environmental science?",
        options: ["Studying outer space", "Understanding the interactions between humans and the environment", "Developing new technologies", "Analyzing economic systems"],
        correctAnswer: "Understanding the interactions between humans and the environment"
      },
      {
        id: 2,
        text: "Which of the following is NOT a major environmental issue?",
        options: ["Climate change", "Pollution", "Deforestation", "Quantum physics"],
        correctAnswer: "Quantum physics"
      },
      {
        id: 3,
        text: "What role does technology play in environmental science?",
        options: ["It has no role", "It only contributes to environmental problems", "It can help solve environmental problems", "It is only useful for monitoring pollution"],
        correctAnswer: "It can help solve environmental problems"
      }
    ]
  },
  {
    id: 2,
    title: "Week 2: Ecosystems and Biodiversity",
    description: "Understanding ecosystems, biodiversity, and their importance.",
    content: {
      content: `
        <h2>Ecosystems and Biodiversity</h2>
        <p>This week delves into the structure and function of ecosystems, the concept of biodiversity, and the importance of preserving it.</p>
        
        <h3>Topics Covered:</h3>
        <ul>
          <li>Ecosystem components and interactions</li>
          <li>Definition and types of biodiversity</li>
          <li>Threats to biodiversity: habitat loss, invasive species, pollution</li>
        </ul>
      `
    },
    questions: [
      {
        id: 4,
        text: "What is an ecosystem?",
        options: ["A community of living organisms", "A physical environment", "A community of living organisms interacting with their physical environment", "A group of animals"],
        correctAnswer: "A community of living organisms interacting with their physical environment"
      },
      {
        id: 5,
        text: "What does biodiversity refer to?",
        options: ["The variety of life on Earth", "The number of species in a specific area", "The genetic variation within a species", "The study of biology"],
        correctAnswer: "The variety of life on Earth"
      },
      {
        id: 6,
        text: "Which of the following is a major threat to biodiversity?",
        options: ["Habitat loss", "Invasive species", "Pollution", "All of the above"],
        correctAnswer: "All of the above"
      }
    ]
  },
  {
    id: 3,
    title: "Week 3: Water Resources and Management",
    description: "Exploring water resources, their importance, and management strategies.",
    content: {
      content: `
        <h2>Water Resources and Management</h2>
        <p>This week focuses on the importance of water resources, their distribution, and the challenges associated with managing them sustainably.</p>
        
        <h3>Topics Covered:</h3>
        <ul>
          <li>The water cycle and its components</li>
          <li>Water scarcity and its causes</li>
          <li>Water pollution: sources and impacts</li>
          <li>Sustainable water management strategies</li>
        </ul>
      `
    },
    questions: [
      {
        id: 7,
        text: "What is the water cycle?",
        options: ["The process of water evaporation", "The continuous movement of water on, above, and below the surface of the Earth", "The process of water condensation", "The process of water filtration"],
        correctAnswer: "The continuous movement of water on, above, and below the surface of the Earth"
      },
      {
        id: 8,
        text: "What is water scarcity?",
        options: ["The abundance of water resources", "The lack of sufficient water resources to meet water demands", "The pollution of water resources", "The unequal distribution of water resources"],
        correctAnswer: "The lack of sufficient water resources to meet water demands"
      },
      {
        id: 9,
        text: "Which of the following is a major source of water pollution?",
        options: ["Industrial discharge", "Agricultural runoff", "Sewage", "All of the above"],
        correctAnswer: "All of the above"
      }
    ]
  },
  {
    id: 4,
    title: "Week 4: Air Quality and Pollution",
    description: "Understanding air quality, sources of pollution, and their impacts.",
    content: {
      content: `
        <h2>Air Quality and Pollution</h2>
        <p>This week examines the composition of air, the sources and effects of air pollution, and strategies for improving air quality.</p>
        
        <h3>Topics Covered:</h3>
        <ul>
          <li>Composition of air and its importance</li>
          <li>Sources of air pollution: industrial, transportation, domestic</li>
          <li>Effects of air pollution on human health and the environment</li>
          <li>Air quality management and control strategies</li>
        </ul>
      `
    },
    questions: [
      {
        id: 10,
        text: "What is the major component of air?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        correctAnswer: "Nitrogen"
      },
      {
        id: 11,
        text: "Which of the following is a major source of air pollution?",
        options: ["Industrial emissions", "Transportation", "Domestic activities", "All of the above"],
        correctAnswer: "All of the above"
      },
      {
        id: 12,
        text: "How does air pollution affect human health?",
        options: ["It has no effect", "It only affects the elderly", "It can cause respiratory problems and other health issues", "It only affects people with pre-existing conditions"],
        correctAnswer: "It can cause respiratory problems and other health issues"
      }
    ]
  },
  {
    id: 5,
    title: "Week 5: Soil Science and Land Use",
    description: "Exploring soil science, land use patterns, and sustainable practices.",
    content: {
      content: `
        <h2>Soil Science and Land Use</h2>
        <p>This week explores the composition and properties of soil, different land use patterns, and the importance of sustainable land management.</p>
        
        <h3>Topics Covered:</h3>
        <ul>
          <li>Soil composition and properties</li>
          <li>Land use patterns: agriculture, forestry, urban development</li>
          <li>Soil degradation and erosion</li>
          <li>Sustainable land management practices</li>
        </ul>
      `
    },
    questions: [
      {
        id: 13,
        text: "What is soil composed of?",
        options: ["Minerals", "Organic matter", "Water", "All of the above"],
        correctAnswer: "All of the above"
      },
      {
        id: 14,
        text: "Which of the following is a major land use pattern?",
        options: ["Agriculture", "Forestry", "Urban development", "All of the above"],
        correctAnswer: "All of the above"
      },
      {
        id: 15,
        text: "What is soil degradation?",
        options: ["The improvement of soil quality", "The decline in soil quality due to improper land use", "The increase in soil fertility", "The natural process of soil formation"],
        correctAnswer: "The decline in soil quality due to improper land use"
      }
    ]
  },
  {
    id: 6,
    title: "Week 6: Energy Resources and Consumption",
    description: "Understanding energy resources, consumption patterns, and renewable energy.",
    content: {
      content: `
        <h2>Energy Resources and Consumption</h2>
        <p>This week examines different types of energy resources, global energy consumption patterns, and the potential of renewable energy sources.</p>
        
        <h3>Topics Covered:</h3>
        <ul>
          <li>Types of energy resources: fossil fuels, nuclear, renewable</li>
          <li>Global energy consumption patterns</li>
          <li>Renewable energy sources: solar, wind, hydro, geothermal</li>
          <li>Energy conservation and efficiency</li>
        </ul>
      `
    },
    questions: [
      {
        id: 16,
        text: "Which of the following is a fossil fuel?",
        options: ["Solar energy", "Wind energy", "Coal", "Hydro energy"],
        correctAnswer: "Coal"
      },
      {
        id: 17,
        text: "What is renewable energy?",
        options: ["Energy that is finite and exhaustible", "Energy that comes from natural sources and is replenished", "Energy that is only available in certain locations", "Energy that is too expensive to use"],
        correctAnswer: "Energy that comes from natural sources and is replenished"
      },
      {
        id: 18,
        text: "Why is energy conservation important?",
        options: ["It is not important", "It only benefits large corporations", "It helps reduce energy consumption and environmental impact", "It is too difficult to implement"],
        correctAnswer: "It helps reduce energy consumption and environmental impact"
      }
    ]
  },
  {
    id: 7,
    title: "Week 7: Climate Change and Its Impacts",
    description: "Exploring the science of climate change and its impacts on the planet.",
    content: {
      content: `
        <h2>Climate Change and Its Impacts</h2>
        <p>This week delves into the science of climate change, its causes, and its far-reaching impacts on the planet.</p>
        
        <h3>Topics Covered:</h3>
        <ul>
          <li>The science of climate change: greenhouse effect, global warming</li>
          <li>Causes of climate change: anthropogenic emissions</li>
          <li>Impacts of climate change: sea level rise, extreme weather events</li>
          <li>Mitigation and adaptation strategies</li>
        </ul>
      `
    },
    questions: [
      {
        id: 19,
        text: "What is the greenhouse effect?",
        options: ["The warming of the Earth's atmosphere due to the trapping of heat by greenhouse gases", "The cooling of the Earth's atmosphere", "The process of photosynthesis", "The depletion of the ozone layer"],
        correctAnswer: "The warming of the Earth's atmosphere due to the trapping of heat by greenhouse gases"
      },
      {
        id: 20,
        text: "What is the main cause of climate change?",
        options: ["Natural variations in the Earth's climate", "Volcanic eruptions", "Anthropogenic emissions of greenhouse gases", "Solar flares"],
        correctAnswer: "Anthropogenic emissions of greenhouse gases"
      },
      {
        id: 21,
        text: "Which of the following is an impact of climate change?",
        options: ["Sea level rise", "Extreme weather events", "Changes in ecosystems", "All of the above"],
        correctAnswer: "All of the above"
      }
    ]
  },
  {
    id: 8,
    title: "Week 8: Waste Management and Pollution Control",
    description: "Understanding waste management strategies and pollution control technologies.",
    content: {
      content: `
        <h2>Waste Management and Pollution Control</h2>
        <p>This week examines different waste management strategies and technologies for controlling pollution from various sources.</p>
        
        <h3>Topics Covered:</h3>
        <ul>
          <li>Types of waste: solid, liquid, hazardous</li>
          <li>Waste management strategies: reduce, reuse, recycle</li>
          <li>Pollution control technologies: wastewater treatment, air filters</li>
          <li>Integrated waste management systems</li>
        </ul>
      `
    },
    questions: [
      {
        id: 22,
        text: "Which of the following is a waste management strategy?",
        options: ["Reduce", "Reuse", "Recycle", "All of the above"],
        correctAnswer: "All of the above"
      },
      {
        id: 23,
        text: "What is wastewater treatment?",
        options: ["The process of polluting water resources", "The process of cleaning wastewater to remove pollutants", "The process of storing wastewater", "The process of transporting wastewater"],
        correctAnswer: "The process of cleaning wastewater to remove pollutants"
      },
      {
        id: 24,
        text: "Why is integrated waste management important?",
        options: ["It is not important", "It only benefits waste management companies", "It helps minimize waste generation and environmental impact", "It is too expensive to implement"],
        correctAnswer: "It helps minimize waste generation and environmental impact"
      }
    ]
  },
  {
    id: 9,
    title: "Week 9: Environmental Policy and Legislation",
    description: "Exploring environmental policies, laws, and regulations at different levels.",
    content: {
      content: `
        <h2>Environmental Policy and Legislation</h2>
        <p>This week explores environmental policies, laws, and regulations at the local, national, and international levels.</p>
        
        <h3>Topics Covered:</h3>
        <ul>
          <li>Environmental policy-making process</li>
          <li>Environmental laws and regulations in different countries</li>
          <li>International environmental agreements and conventions</li>
          <li>The role of government and NGOs in environmental protection</li>
        </ul>
      `
    },
    questions: [
      {
        id: 25,
        text: "What is the purpose of environmental policy?",
        options: ["To promote economic growth", "To protect the environment and human health", "To regulate business activities", "To increase government revenue"],
        correctAnswer: "To protect the environment and human health"
      },
      {
        id: 26,
        text: "Which of the following is an international environmental agreement?",
        options: ["The Paris Agreement", "The Kyoto Protocol", "The Montreal Protocol", "All of the above"],
        correctAnswer: "All of the above"
      },
      {
        id: 27,
        text: "What role do NGOs play in environmental protection?",
        options: ["They have no role", "They only criticize government policies", "They advocate for environmental protection and conduct research", "They only focus on fundraising"],
        correctAnswer: "They advocate for environmental protection and conduct research"
      }
    ]
  },
  {
    id: 10,
    title: "Week 10: Sustainable Development Goals (SDGs)",
    description: "Understanding the Sustainable Development Goals and their relevance to environmental sustainability.",
    content: {
      content: `
        <h2>Sustainable Development Goals (SDGs)</h2>
        <p>This week introduces the Sustainable Development Goals (SDGs) and their relevance to environmental sustainability.</p>
        
        <h3>Topics Covered:</h3>
        <ul>
          <li>Introduction to the SDGs and their targets</li>
          <li>SDGs related to environmental sustainability: clean water, clean energy, climate action</li>
          <li>The role of different stakeholders in achieving the SDGs</li>
          <li>Challenges and opportunities in implementing the SDGs</li>
        </ul>
      `
    },
    questions: [
      {
        id: 28,
        text: "What are the Sustainable Development Goals (SDGs)?",
        options: ["A set of economic goals", "A set of social goals", "A set of environmental goals", "A set of 17 global goals adopted by the United Nations"],
        correctAnswer: "A set of 17 global goals adopted by the United Nations"
      },
      {
        id: 29,
        text: "Which SDG is related to climate action?",
        options: ["SDG 6", "SDG 7", "SDG 13", "SDG 15"],
        correctAnswer: "SDG 13"
      },
      {
        id: 30,
        text: "What is the role of different stakeholders in achieving the SDGs?",
        options: ["They have no role", "They only benefit from the SDGs", "They all have a role to play in implementing the SDGs", "They only focus on their own interests"],
        correctAnswer: "They all have a role to play in implementing the SDGs"
      }
    ]
  },
  {
    id: 11,
    title: "Week 11: Environmental Ethics and Justice",
    description: "Exploring environmental ethics, justice, and their implications for environmental decision-making.",
    content: {
      content: `
        <h2>Environmental Ethics and Justice</h2>
        <p>This week explores environmental ethics, justice, and their implications for environmental decision-making.</p>
        
        <h3>Topics Covered:</h3>
        <ul>
          <li>Different ethical perspectives on the environment: anthropocentrism, biocentrism, ecocentrism</li>
          <li>Environmental justice: equity and fairness in environmental decision-making</li>
          <li>The role of ethics in addressing environmental problems</li>
          <li>Case studies of environmental ethics and justice issues</li>
        </ul>
      `
    },
    questions: [
      {
        id: 31,
        text: "What is anthropocentrism?",
        options: ["A human-centered view of the environment", "A nature-centered view of the environment", "A balanced view of the environment", "A scientific view of the environment"],
        correctAnswer: "A human-centered view of the environment"
      },
      {
        id: 32,
        text: "What is environmental justice?",
        options: ["The fair distribution of environmental benefits", "The fair distribution of environmental burdens", "The equal access to environmental resources", "Equity and fairness in environmental decision-making"],
        correctAnswer: "Equity and fairness in environmental decision-making"
      },
      {
        id: 33,
        text: "Why is ethics important in addressing environmental problems?",
        options: ["It is not important", "It only complicates decision-making", "It helps guide decision-making based on values and principles", "It only benefits certain groups"],
        correctAnswer: "It helps guide decision-making based on values and principles"
      }
    ]
  },
  {
    id: 12,
    title: "Week 12: Wildlife Conservation and Ecosystem Services",
    description: "Exploring the principles of wildlife conservation and ecosystem services.",
    content: {
      content: `
        <h2>Coming Soon</h2>
        <p>Detailed learning materials for Week 12 will be available soon.</p>
      `
    },
    questions: [
      {
        id: 1,
        text: "As per Wildlife Protection Act 1972 (WPA 1972), wild life includes any animal, aquatic or land vegetation which forms part of any _____ .",
        options: ["ecosystem", "state", "country", "habitat"],
        correctAnswer: "habitat"
      },
      {
        id: 2,
        text: "The tiger has a home range of several square kilometres, regulates the ecosystem through controlling herbivore populations and trophic cascades, and people come to tiger reserves to watch tigers. Thus, the tiger can be called as",
        options: ["umbrella species", "keystone species", "flagship species", "all of the above"],
        correctAnswer: "all of the above"
      },
      {
        id: 3,
        text: "Soil formation is an example of",
        options: ["provisioning service", "regulating service", "supporting service", "cultural service"],
        correctAnswer: "supporting service"
      },
      {
        id: 4,
        text: "Zoo is an example of",
        options: ["in-situ conservation", "ex-situ conservation", "in-situ preservation", "ex-situ preservation"],
        correctAnswer: "ex-situ conservation"
      },
      {
        id: 5,
        text: "The fig tree bears fruits in times when animals do not have much access to food. In this context, it would be a good example of",
        options: ["least concern species", "keystone species", "flagship species", "extinct species"],
        correctAnswer: "keystone species"
      },
      {
        id: 6,
        text: "Nutrient cycling is an example of",
        options: ["provisioning service", "regulating service", "supporting service", "cultural service"],
        correctAnswer: "supporting service"
      },
      {
        id: 7,
        text: "People come to Sessa orchid sanctuary in Arunachal Pradesh to witness orchids, which in this context would be classified as",
        options: ["umbrella species", "keystone species", "flagship species", "extinct species"],
        correctAnswer: "flagship species"
      },
      {
        id: 8,
        text: "We prefer those areas for the creation of a conservation reserve where the level of threat is",
        options: ["very high", "medium", "very low", "non-existent"],
        correctAnswer: "medium"
      },
      {
        id: 9,
        text: "The elephant has a home range of several square kilometres, regulates the ecosystem by its habit of destructive feeding, and people can relate to this animal which is important for conservation. Given this background, the elephant can be called as",
        options: ["umbrella species", "keystone species", "flagship species", "all of the above"],
        correctAnswer: "all of the above"
      },
      {
        id: 10,
        text: "Biological control of pest populations is an example of",
        options: ["provisioning service", "regulating service", "supporting service", "cultural service"],
        correctAnswer: "regulating service"
      }
    ]
  }
];

// Add the getWeekbyId function to find a week by its ID
export const getWeekbyId = (weekId: number): Week | undefined => {
  return weeks.find(week => week.id === weekId);
};
