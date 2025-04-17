import { Week } from '@/types';

export const weeks: Week[] = [
  {
    id: 1,
    title: "Introduction to NPTEL and Environmental Science",
    description: "An overview of the NPTEL program and basic concepts of environmental science.",
    content: {
      content: `
        <h2>Week 1: Introduction to NPTEL and Environmental Science</h2>
        <p>Welcome to the first week of the course! This week, we will introduce the NPTEL program and delve into the fundamental concepts of environmental science.</p>
        <h3>Key Topics:</h3>
        <ul>
          <li>Overview of NPTEL</li>
          <li>What is Environmental Science?</li>
          <li>Importance of Environmental Studies</li>
          <li>Basic Environmental Concepts</li>
        </ul>
      `
    },
    questions: [
      {
        id: 1,
        text: "What does NPTEL stand for?",
        options: ["National Program on Technology Enhanced Learning", "National Program on Technical Education Learning", "National Program on Technology Education Learning", "National Program on Technical Enhanced Learning"],
        correctAnswer: "National Program on Technology Enhanced Learning"
      },
      {
        id: 2,
        text: "Which of the following is NOT a major component of the environment?",
        options: ["Atmosphere", "Hydrosphere", "Lithosphere", "Biosphere"],
        correctAnswer: "Biosphere"
      },
      {
        id: 3,
        text: "Environmental science is a multidisciplinary field that integrates:",
        options: ["Biology, Chemistry, and Physics", "Ecology, Geology, and Geography", "Social Sciences and Humanities", "All of the above"],
        correctAnswer: "All of the above"
      }
    ]
  },
  {
    id: 2,
    title: "Ecology and Ecosystems",
    description: "Understanding the principles of ecology and the structure and function of ecosystems.",
    content: {
      content: `
        <h2>Week 2: Ecology and Ecosystems</h2>
        <p>This week, we will explore the principles of ecology and the structure and function of ecosystems.</p>
        <h3>Key Topics:</h3>
        <ul>
          <li>Principles of Ecology</li>
          <li>Ecosystem Structure</li>
          <li>Ecosystem Function</li>
          <li>Food Chains and Food Webs</li>
        </ul>
      `
    },
    questions: [
      {
        id: 1,
        text: "What is the primary source of energy for most ecosystems?",
        options: ["Chemicals", "The sun", "Decomposers", "Producers"],
        correctAnswer: "The sun"
      },
      {
        id: 2,
        text: "Which of the following is a biotic component of an ecosystem?",
        options: ["Water", "Air", "Plants", "Minerals"],
        correctAnswer: "Plants"
      },
      {
        id: 3,
        text: "What is the role of decomposers in an ecosystem?",
        options: ["To produce energy", "To consume plants", "To break down dead organic matter", "To hunt other animals"],
        correctAnswer: "To break down dead organic matter"
      }
    ]
  },
  {
    id: 3,
    title: "Environmental Pollution",
    description: "Studying the types, causes, and effects of environmental pollution.",
    content: {
      content: `
        <h2>Week 3: Environmental Pollution</h2>
        <p>This week, we will study the types, causes, and effects of environmental pollution.</p>
        <h3>Key Topics:</h3>
        <ul>
          <li>Types of Pollution (Air, Water, Soil)</li>
          <li>Causes of Pollution</li>
          <li>Effects of Pollution on Health and Environment</li>
          <li>Pollution Control Measures</li>
        </ul>
      `
    },
    questions: [
      {
        id: 1,
        text: "Which of the following is a primary air pollutant?",
        options: ["Ozone", "Smog", "Carbon Monoxide", "Acid Rain"],
        correctAnswer: "Carbon Monoxide"
      },
      {
        id: 2,
        text: "What is the main cause of water pollution in rivers?",
        options: ["Natural erosion", "Industrial discharge", "Rainwater", "Animal waste"],
        correctAnswer: "Industrial discharge"
      },
      {
        id: 3,
        text: "Which of the following is a method to control soil pollution?",
        options: ["Deforestation", "Overgrazing", "Crop rotation", "Burning fossil fuels"],
        correctAnswer: "Crop rotation"
      }
    ]
  },
  {
    id: 4,
    title: "Natural Resources and Conservation",
    description: "Exploring the types of natural resources and methods for their conservation.",
    content: {
      content: `
        <h2>Week 4: Natural Resources and Conservation</h2>
        <p>This week, we will explore the types of natural resources and methods for their conservation.</p>
        <h3>Key Topics:</h3>
        <ul>
          <li>Types of Natural Resources (Renewable and Non-Renewable)</li>
          <li>Importance of Resource Conservation</li>
          <li>Methods of Conservation</li>
          <li>Sustainable Resource Management</li>
        </ul>
      `
    },
    questions: [
      {
        id: 1,
        text: "Which of the following is a renewable resource?",
        options: ["Coal", "Petroleum", "Solar energy", "Natural gas"],
        correctAnswer: "Solar energy"
      },
      {
        id: 2,
        text: "What is the primary goal of resource conservation?",
        options: ["To exploit resources for economic gain", "To use resources efficiently and sustainably", "To deplete resources rapidly", "To ignore resource management"],
        correctAnswer: "To use resources efficiently and sustainably"
      },
      {
        id: 3,
        text: "Which method helps in conserving water resources?",
        options: ["Deforestation", "Over-irrigation", "Rainwater harvesting", "Industrial discharge"],
        correctAnswer: "Rainwater harvesting"
      }
    ]
  },
  {
    id: 5,
    title: "Biodiversity and Its Conservation",
    description: "Understanding the importance of biodiversity and the methods to conserve it.",
    content: {
      content: `
        <h2>Week 5: Biodiversity and Its Conservation</h2>
        <p>This week, we will understand the importance of biodiversity and the methods to conserve it.</p>
        <h3>Key Topics:</h3>
        <ul>
          <li>What is Biodiversity?</li>
          <li>Importance of Biodiversity</li>
          <li>Threats to Biodiversity</li>
          <li>Methods of Biodiversity Conservation</li>
        </ul>
      `
    },
    questions: [
      {
        id: 1,
        text: "What does the term 'biodiversity' refer to?",
        options: ["The variety of life on Earth", "The study of fossils", "The process of photosynthesis", "The measurement of air quality"],
        correctAnswer: "The variety of life on Earth"
      },
      {
        id: 2,
        text: "Which of the following is a major threat to biodiversity?",
        options: ["Conservation efforts", "Habitat destruction", "Sustainable agriculture", "Eco-tourism"],
        correctAnswer: "Habitat destruction"
      },
      {
        id: 3,
        text: "Which of the following is an in-situ method of biodiversity conservation?",
        options: ["Zoos", "Botanical gardens", "National parks", "Gene banks"],
        correctAnswer: "National parks"
      }
    ]
  },
  {
    id: 6,
    title: "Climate Change and Its Impacts",
    description: "Studying the causes and impacts of climate change on the environment.",
    content: {
      content: `
        <h2>Week 6: Climate Change and Its Impacts</h2>
        <p>This week, we will study the causes and impacts of climate change on the environment.</p>
        <h3>Key Topics:</h3>
        <ul>
          <li>Causes of Climate Change</li>
          <li>Greenhouse Effect</li>
          <li>Impacts of Climate Change</li>
          <li>Mitigation and Adaptation Strategies</li>
        </ul>
      `
    },
    questions: [
      {
        id: 1,
        text: "Which of the following is a primary greenhouse gas?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correctAnswer: "Carbon Dioxide"
      },
      {
        id: 2,
        text: "What is the main cause of the greenhouse effect?",
        options: ["Deforestation", "Burning fossil fuels", "Reforestation", "Volcanic eruptions"],
        correctAnswer: "Burning fossil fuels"
      },
      {
        id: 3,
        text: "Which of the following is a mitigation strategy for climate change?",
        options: ["Increasing deforestation", "Using more fossil fuels", "Switching to renewable energy", "Ignoring the problem"],
        correctAnswer: "Switching to renewable energy"
      }
    ]
  },
  {
    id: 7,
    title: "Environmental Policies and Legislation",
    description: "Overview of environmental policies and legislation at national and international levels.",
    content: {
      content: `
        <h2>Week 7: Environmental Policies and Legislation</h2>
        <p>This week, we will provide an overview of environmental policies and legislation at national and international levels.</p>
        <h3>Key Topics:</h3>
        <ul>
          <li>National Environmental Policies</li>
          <li>International Environmental Agreements</li>
          <li>Role of Legislation in Environmental Protection</li>
          <li>Case Studies of Successful Policies</li>
        </ul>
      `
    },
    questions: [
      {
        id: 1,
        text: "Which international agreement addresses climate change?",
        options: ["Montreal Protocol", "Kyoto Protocol", "Ramsar Convention", "Basel Convention"],
        correctAnswer: "Kyoto Protocol"
      },
      {
        id: 2,
        text: "What is the main goal of environmental policies?",
        options: ["To promote economic growth at any cost", "To protect and improve the environment", "To ignore environmental issues", "To exploit natural resources rapidly"],
        correctAnswer: "To protect and improve the environment"
      },
      {
        id: 3,
        text: "Which of the following is a key element of environmental legislation?",
        options: ["Ignoring pollution", "Promoting deforestation", "Setting standards and regulations", "Encouraging unsustainable practices"],
        correctAnswer: "Setting standards and regulations"
      }
    ]
  },
  {
    id: 8,
    title: "Waste Management",
    description: "Studying different types of waste and methods for their effective management.",
    content: {
      content: `
        <h2>Week 8: Waste Management</h2>
        <p>This week, we will study different types of waste and methods for their effective management.</p>
        <h3>Key Topics:</h3>
        <ul>
          <li>Types of Waste (Solid, Liquid, Hazardous)</li>
          <li>Waste Generation and Composition</li>
          <li>Waste Treatment and Disposal Methods</li>
          <li>Integrated Waste Management</li>
        </ul>
      `
    },
    questions: [
      {
        id: 1,
        text: "Which of the following is a method for treating solid waste?",
        options: ["Open dumping", "Incineration", "Watering plants", "Air pollution"],
        correctAnswer: "Incineration"
      },
      {
        id: 2,
        text: "What does the term 'reduce' mean in the context of waste management?",
        options: ["To generate more waste", "To decrease the amount of waste produced", "To ignore waste management", "To pollute the environment"],
        correctAnswer: "To decrease the amount of waste produced"
      },
      {
        id: 3,
        text: "Which type of waste poses the greatest threat to the environment and human health?",
        options: ["Paper waste", "Plastic waste", "Hazardous waste", "Food waste"],
        correctAnswer: "Hazardous waste"
      }
    ]
  },
  {
    id: 9,
    title: "Water Resources and Management",
    description: "Understanding the importance of water resources and strategies for their sustainable management.",
    content: {
      content: `
        <h2>Week 9: Water Resources and Management</h2>
        <p>This week, we will understand the importance of water resources and strategies for their sustainable management.</p>
        <h3>Key Topics:</h3>
        <ul>
          <li>Importance of Water Resources</li>
          <li>Water Scarcity and Its Causes</li>
          <li>Water Management Strategies</li>
          <li>Water Conservation Techniques</li>
        </ul>
      `
    },
    questions: [
      {
        id: 1,
        text: "Which of the following is a major cause of water scarcity?",
        options: ["Rainwater harvesting", "Efficient irrigation", "Overuse of water resources", "Water conservation"],
        correctAnswer: "Overuse of water resources"
      },
      {
        id: 2,
        text: "What is the primary goal of water management?",
        options: ["To deplete water resources rapidly", "To use water resources sustainably", "To ignore water scarcity", "To pollute water bodies"],
        correctAnswer: "To use water resources sustainably"
      },
      {
        id: 3,
        text: "Which technique helps in conserving water in agriculture?",
        options: ["Flood irrigation", "Drip irrigation", "Over-irrigation", "Deforestation"],
        correctAnswer: "Drip irrigation"
      }
    ]
  },
  {
    id: 10,
    title: "Air Quality Management",
    description: "Studying the sources of air pollution and methods for improving air quality.",
    content: {
      content: `
        <h2>Week 10: Air Quality Management</h2>
        <p>This week, we will study the sources of air pollution and methods for improving air quality.</p>
        <h3>Key Topics:</h3>
        <ul>
          <li>Sources of Air Pollution</li>
          <li>Effects of Air Pollution on Health</li>
          <li>Air Quality Monitoring</li>
          <li>Air Pollution Control Measures</li>
        </ul>
      `
    },
    questions: [
      {
        id: 1,
        text: "Which of the following is a major source of air pollution in urban areas?",
        options: ["Deforestation", "Agricultural activities", "Vehicle emissions", "Water pollution"],
        correctAnswer: "Vehicle emissions"
      },
      {
        id: 2,
        text: "What is the primary goal of air quality management?",
        options: ["To increase air pollution", "To improve and maintain air quality", "To ignore air pollution", "To promote deforestation"],
        correctAnswer: "To improve and maintain air quality"
      },
      {
        id: 3,
        text: "Which of the following is a method for controlling air pollution from industries?",
        options: ["Using more fossil fuels", "Installing emission control devices", "Promoting deforestation", "Ignoring pollution standards"],
        correctAnswer: "Installing emission control devices"
      }
    ]
  },
  {
    id: 11,
    title: "Environmental Impact Assessment",
    description: "Understanding the process and importance of Environmental Impact Assessment (EIA).",
    content: {
      content: `
        <h2>Week 11: Environmental Impact Assessment</h2>
        <p>This week, we will understand the process and importance of Environmental Impact Assessment (EIA).</p>
        <h3>Key Topics:</h3>
        <ul>
          <li>What is Environmental Impact Assessment (EIA)?</li>
          <li>Objectives of EIA</li>
          <li>EIA Process</li>
          <li>Importance of Public Participation in EIA</li>
        </ul>
      `
    },
    questions: [
      {
        id: 1,
        text: "What is the main purpose of Environmental Impact Assessment (EIA)?",
        options: ["To promote deforestation", "To assess the environmental impacts of a project", "To ignore environmental concerns", "To increase pollution"],
        correctAnswer: "To assess the environmental impacts of a project"
      },
      {
        id: 2,
        text: "Which of the following is a key step in the EIA process?",
        options: ["Ignoring public opinion", "Identifying potential environmental impacts", "Promoting unsustainable practices", "Avoiding mitigation measures"],
        correctAnswer: "Identifying potential environmental impacts"
      },
      {
        id: 3,
        text: "Why is public participation important in EIA?",
        options: ["To delay project approval", "To ensure transparency and accountability", "To promote corruption", "To ignore environmental concerns"],
        correctAnswer: "To ensure transparency and accountability"
      }
    ]
  },
  {
    id: 12,
    title: "Wildlife Conservation and Ecosystem Services",
    description: "Exploring wildlife protection, ecosystem services, and conservation strategies.",
    content: {
      content: `
        <h2>Week 12: Wildlife Conservation and Ecosystem Services</h2>
        <p>This week focuses on understanding the intricate relationships between wildlife, ecosystems, and conservation efforts.</p>
        <h3>Key Topics:</h3>
        <ul>
          <li>Wildlife Protection Act 1972</li>
          <li>Ecosystem Services</li>
          <li>Conservation Strategies</li>
          <li>Role of Keystone and Flagship Species</li>
        </ul>
      `
    },
    questions: [
      {
        id: 1,
        text: "As per Wildlife Protection Act 1972 (WPA 1972), wild life includes any animal, aquatic or land vegetation which forms part of any _____.",
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

export const getWeekbyId = (id: number): Week | undefined => {
  return weeks.find(week => week.id === id);
};
