function xpYears(startYear) {
    var currDate = new Date();
    var currYear = currDate.getFullYear();
    return currYear - startYear;
}

export const stories = [
    {
      body: `Hello! I am <span style="color: #00749C">Nelson Ochagavía</span>, a highly skilled web developer with <span style="color: #3EB489">${xpYears(2018)}+ years</span> creating dynamic and user-centered experiences across the entire web stack.`
    },
    {
      body: `I master the latest <span style="color: #f0db4f">JavaScript</span> frameworks, including <span style="color: #61dbfb">React.js</span>, <span style="color: #45ce05">Next.js</span>, <span style="color: #f0db4f">Express</span>, and <span style="color: #f73c00">Sveltekit</span>, and I use them to build beautiful front-ends and robust, efficient back-ends.`
    },
    {
      body: `My UI/UX toolkit includes <span style="color: #b8c2cc">Tailwindcss</span>, <span style="color: #563d7c">Bootstrap</span>, and <span style="color: #f0db4f">Material UI</span>, ensuring seamless interfaces for any project.`
    },
    {
      body: `I have experience in developing relational databases (<span style="color: #016e88">MySQL</span>, <span style="color: #2f5e8d">PostgreSQL</span>) and non-relational databases (<span style="color: #4cab3d">MongoDB</span>), allowing me to design and develop scalable and secure solutions.`
    },
    {
      body: `In addition, I have experience using <span style="color: #e84e31">Git</span> for version control, teamwork, and the <span style="color: #189ab6">SCRUM</span> methodology, which allows me to collaborate efficiently with other developers and work effectively on complex projects.`
    },
    {
      body: `Beyond <span style="color: #f0db4f">JavaScript</span>, I am an expert in creating attractive blogs, web portals, and e-commerces with <span style="color: #00749C">WordPress</span> / <span style="color: #00749C">Woocommerce</span>, facilitating content management.`
    },
    {
      body: `My experience extends to desktop environments, where I employ <span style="color: #3859a3">PyQt</span> for <span style="color: #ffde57">Python</span> application development, bringing your ideas to life with a powerful and intuitive touch.`
    },
    {
      body: `This diverse skillset allows me to tackle any project with confidence. I am a passionate problem solver with a knack for clean code and efficient workflows, always striving to exceed expectations.`
    }
  ];
  