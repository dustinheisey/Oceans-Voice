const config = {
  title: "Ocean's Voice - Ocean Conservation Nonprofit",
  url: "https://oceansvoice.dustinheisey.com",
  description:
    "Ocean's Voice is a nonprofit organization dedicated to protecting and restoring the world's oceans. We conduct research, advocate for policy change, educate the public, and lead conservation initiatives. Join us in creating a future where our oceans thrive.",
  navigation: {
    logo: {
      src: "./public/svg/logo",
      alt: "Ocean's Voice",
    },
    header: {
      variant: "spaced",
      links: [
        {
          label: "About",
          url: "/about",
          subLinks: [
            { label: "Impact", url: "/impact" },
            { label: "Resources", url: "/resources" },
          ],
        },
        {
          label: "Our Work",
          url: "/our-work",
          subLinks: [
            { label: "Advocacy", url: "/our-work/advocacy" },
            { label: "Conservation", url: "/our-work/conservation" },
            { label: "Education", url: "/our-work/education" },
            { label: "Research", url: "/our-work/research" },
          ],
        },
        { label: "Get Involved", url: "/get-involved" },
        { label: "Contact", url: "/contact" },
      ],
      action: { label: "Donate", url: "/donate" },
    },
    bottombar: {
      links: [
        { label: "Home", url: "/", icon: "home" },
        { label: "About", url: "/about", icon: "about" },
        { label: "Our Work", url: "/our-work", icon: "wave" },
        { label: "Impact", url: "/impact", icon: "advocate" },
        { label: "Resources", url: "/resources", icon: "books" },
      ],
      fab: { label: "Donate", url: "/donate", icon: "donate" },
    },
    footer: {
      mission:
        "We are Ocean's Voice. Our mission is to protect and preserve the world's oceans, promoting sustainable practices, education, and research that leads to a vibrant marine ecosystem for future generations.",
      background: "footer-background.svg",
      groups: [
        {
          title: "Our Work",
          links: [
            { label: "Advocacy", url: "/our-work/advocacy" },
            {
              label: "Conservation",
              url: "/our-work/conservation",
            },
            { label: "Education", url: "/our-work/education" },
            { label: "Research", url: "/our-work/research" },
          ],
        },
        {
          title: "Nonprofit",
          links: [
            { label: "Home", url: "/", icon: "home" },
            { label: "About", url: "/about", icon: "about" },
            { label: "Our Work", url: "/our-work", icon: "work" },
            { label: "Impact", url: "/impact", icon: "impact" },
            { label: "Resources", url: "/resources", icon: "resources" },
            { label: "Contact", url: "/contact", icon: "contact" },
            { label: "Donate", url: "/donate", icon: "donate" },
          ],
        },
        {
          title: "Legal",
          links: [
            {
              label: "Privacy Policy",
              url: "https://www.termsfeed.com/live/d5271eb0-e06a-49f5-9021-99c0bb40389b",
            },
            {
              label: "Terms of Service",
              url: "https://www.termsfeed.com/live/dc519ac0-71e6-49d3-a0d6-f9ce86815fa5",
            },
            {
              label: "Cookies",
              url: "https://www.termsfeed.com/live/012a4e98-08d0-48ab-b716-764b86ca84df",
            },
            { label: "Sitemap", url: "/sitemap.xml" },
          ],
        },
      ],
      social: [
        {
          label: "Medium",
          icon: "logo-medium",
          url: "https://medium.com/@dustin_heisey",
        },
        {
          label: "Dribbble",
          icon: "logo-dribbble",
          url: "https://dribbble.com/dustin_heisey",
        },
        {
          label: "Behance",
          icon: "logo-behance",
          url: "https://www.behance.net/dustin_heisey",
        },
        {
          label: "LinkedIn",
          icon: "logo-linkedin",
          url: "https://www.linkedin.com/in/heiseydustin/",
        },
      ],
      copywrite: "© 2023 Ocean's Voice. All rights reserved.",
    },
  },
  pages: [
    {
      url: "index",
      title: "Ocean's Voice: Leading the Charge in Ocean Conservation",
      header: false,
      description:
        "Join Ocean's Voice in our mission to protect and preserve the world's oceans. Learn about our advocacy, conservation, education, and research efforts.",
      regions: {
        hero: {
          layout: "split",
          theme: "dark",
          start: {
            component: "text",
            size: "hero",
            get navbar() {
              return config.navigation;
            },
            headline: "Ocean's Voice: Your Call Can Echo Through the Depths",
            body: "Stand with us at the edge of a critical precipice, where the fate of our oceans hangs in the balance.",
            btn: { label: "Join the Fight", url: "/contact" },
          },
          end: {
            component: "img",
            src: "whale.png",
            alt: "whale",
          },
        },
        problem: {
          layout: "start-heavy",
          start: {
            component: "img",
            src: "oil-seabird.png",
            alt: "Oil Searbird",
          },
          end: {
            component: "text",
            size: "region",
            overline: "The Challenge",
            headline: "A Cry from the Deep",
            body: "Our oceans are gasping for breath. The relentless onslaught of pollution, the greed of overfishing, and the silent killer of climate change are suffocating the lifeblood of our planet. This is not just a fight for the environment; it's a fight for our very survival. Our oceans are our lifeline, providing sustenance, regulating our climate, and breathing life into our world. If they perish, we perish.",
          },
        },
        guide: {
          layout: "bg-pattern",
          theme: "primary",
          pattern: "waves",
          overline: "Our Role",
          headline: "Guiding the Charge",
          body: "Ocean's Voice is your beacon in this storm. Armed with years of experience and a relentless spirit, we have the knowledge and the tools to combat these threats. But our strength is not enough. We need your courage. We need your voice.",
        },
        plan: {
          layout: "switcher",
          overline: "Your Part",
          headline: "Join the Battle",
          items: [
            {
              component: "card",
              theme: "primary-container",
              icon: "book",
              body: "Immerse yourself in our free e-book to grasp the gravity of the threats our oceans face and discover how your voice can echo change.",
            },
            {
              component: "card",
              theme: "secondary-container",
              icon: "donate",
              body: "Your generous contribution will fuel the frontlines of critical conservation battles.",
            },
            {
              component: "card",
              theme: "tertiary-container",
              icon: "advocate",
              body: "Enlist in our army of ocean warriors. Advocate for policy changes, shun the chains of plastic, and let your voice ripple through your community.",
            },
          ],
        },
        action: {
          layout: "end-heavy",
          start: {
            component: "text",
            size: "region",
            overline: "Call to Action",
            headline: "Amplify Ocean's Voice",
            body: "Don't let our oceans fade into a silent, lifeless abyss. Stand with us today and become a beacon of hope. Together, we can amplify Ocean's Voice.",
          },
          end: {
            component: "img",
            src: "time.png",
            alt: "Limited Time",
          },
        },
        stakes: {
          layout: "center",
          content: {
            component: "text",
            size: "region",
            overline: "The Stakes",
            headline: "The Balance of Life",
            body: "If we falter, we risk losing the mesmerizing beauty and vital resources our oceans provide. But with your courage, we can shield marine life, mend wounded ecosystems, and secure a vibrant, thriving ocean for generations yet unborn.",
          },
        },
        transformation: {
          layout: "center",
          theme: "primary",
          content: {
            component: "text",
            size: "region",
            overline: "Your Transformation",
            headline: "From Despair to Guardian",
            body: "Before you joined Ocean's Voice, you may have felt a sense of despair, a feeling of insignificance against the vastness of the problem. But now, you're part of a legion making waves of change. You're not just a donor; you're a guardian of our oceans.",
            btn: { label: "Become a Guardian", url: "/contact" },
          },
        },
      },
    },
    {
      url: "about",
      title:
        "About Ocean's Voice: Our Mission and Vision for Ocean Conservation",
      description:
        "Discover the story behind Ocean's Voice, our mission, vision, and the team dedicated to ocean conservation and marine life protection.",
      regions: {
        intro: {
          layout: "end-heavy",
          start: {
            component: "text",
            size: "page",
            overline: "Our Origin",
            headline: "The Birth of Ocean's Voice",
            body: "Ocean's Voice was born out of a profound love for the sea and a deep concern for its future. We saw the beauty of the ocean being threatened by human actions and knew we had to step in. Our mission began as a ripple, but with your help, it's becoming a wave of change.",
          },
          end: {
            component: "img",
            src: "wave.png",
            alt: "wave",
          },
        },
        mission: {
          layout: "center",
          content: {
            component: "text",
            size: "region",
            overline: "Our Mission",
            headline: "The Echo of Our Purpose",
            body: "Our mission at Ocean's Voice is to protect and restore the world's oceans. We believe in a future where marine life thrives, where our oceans are free of pollution, and where every wave reveals a vibrant, healthy ecosystem. But this future is not guaranteed. It requires action, dedication, and voices willing to speak up for our oceans.",
          },
        },
        approach: {
          layout: "gallery",
          col: 4,
          theme: "secondary",
          overline: "Our Approach",
          headline: "Guiding the Wave of Change",
          body: "At Ocean's Voice, we use a multifaceted approach to address the challenges facing our oceans.",
          items: [
            {
              component: "blurb",
              variant: "stack",
              headline: "Research",
              icon: "magnifier",
            },
            {
              component: "blurb",
              variant: "stack",
              headline: "Advocacy",
              icon: "advocate",
            },
            {
              component: "blurb",
              variant: "stack",
              headline: "Education",
              icon: "book",
            },
            {
              component: "blurb",
              variant: "stack",
              headline: "Conservation",
              icon: "shield",
            },
          ],
        },
        impact: {
          layout: "start-heavy",
          mobile: "end",
          end: {
            component: "text",
            size: "region",
            overline: "Our Impact",
            headline: "Making Waves",
            body: "Since our inception, we've made significant strides in ocean conservation. From successful policy advocacy to impactful conservation projects, our work is making a difference. But the fight is far from over. With every new challenge, our resolve only strengthens.",
          },
          start: {
            component: "stats",
            items: [
              {
                headline: "400",
                body: "Policy Changes Influenced by Ocean's Voice",
              },
              { headline: "3000", body: "Volunteers Mobilized" },
              { headline: "1000", body: "Miles of Coastline Protected" },
              { headline: "100,000", body: "Marine Animals Rescued" },
            ],
          },
        },
        action: {
          layout: "center",
          theme: "primary",
          content: {
            component: "text",
            size: "region",
            overline: "Join Us",
            headline: "Amplify Ocean's Voice",
            body: "We're always looking for more voices to join our chorus for the oceans. Whether you're interested in volunteering, donating, or simply learning more about our work, there's a place for you at Ocean's Voice. Together, we can turn the tide for our oceans.",
            btn: { label: "Become a Guardian", url: "/donate" },
          },
        },
      },
    },
    {
      url: "contact",
      title:
        "Contact Ocean's Voice: Get in Touch with Our Ocean Conservation Team",
      description:
        "Have questions or want to get involved? Contact Ocean's Voice. We'd love to hear from you.",
      regions: {
        form: {
          layout: "end-heavy",
          start: {
            component: "form",
            overline: "Reach Out",
            headline: "Let Your Voice Be Heard",
            body: "Reach out to us via email, phone, or our online contact form. Our team is ready to listen, answer your questions, and provide any information you need.",
            inputs: [
              {
                required: true,
                label: "Full Name",
                id: "full_name",
                type: "text",
              },
              { required: true, label: "Email", id: "email", type: "email" },
              {
                required: true,
                label: "Message",
                id: "message",
                type: "textarea",
              },
            ],
            submit: "Connect",
          },
          end: {
            component: "img",
            src: "contact.png",
            alt: "Contact",
          },
        },
        action: {
          layout: "bg-pattern",
          theme: "primary",
          pattern: "waves",
          size: "region",
          overline: "Newsletter",
          headline: "Stay in the Loop",
          body: "Sign up for our newsletter to receive regular updates on our work, upcoming events, and ways you can get involved. Let's stay connected.",
          input: true,
        },
      },
    },
    {
      url: "donate",
      title:
        "Donate: Support Ocean's Voice in Our Mission for Ocean Conservation",
      description:
        "Your donation can make a difference. Support Ocean's Voice in our mission to protect and preserve our world's oceans.",
      regions: {
        intro: {
          layout: "end-heavy",
          start: {
            component: "text",
            size: "page",
            overline: "Your Impact",
            headline: "Fuel the Wave of Change",
            body: "Your generous donation to Ocean's Voice can make a tangible difference in the health and vitality of our world's oceans. Every dollar you give helps us continue our critical work in ocean conservation.",
          },
          end: {
            component: "img",
            src: "sunset.png",
            alt: "Sunset",
          },
        },
        why: {
          layout: "start",
          content: {
            component: "list",
            variant: "grid",
            full: true,
            overline: "Why Donate",
            headline: "The Power of Your Contribution",
            body: "Your donation supports our research, advocacy, education, and conservation initiatives. It enables us to influence policies, protect marine life, restore damaged ecosystems, and inspire more people to take action for our oceans.",
            icon: "check",
            items: [
              "Fund research vital for understanding and protecting ocean ecosystems.",
              "Advocate for policies that ensure sustainable use of marine resources.",
              "Develop educational programs to inspire ocean conservation in youths.",
              "Actively restore coral reefs and other crucial marine habitats.",
              "Help protect endangered marine species through conservation efforts.",
              "Support and empower communities in protecting local marine environments.",
            ],
          },
        },
        form: {
          layout: "start-heavy",
          start: {
            component: "img",
            src: "donation.png",
            alt: "Donate Now",
          },
          end: {
            component: "form",
            overline: "How to Donate",
            headline: "Join the Ocean's Chorus",
            body: "Donating to Ocean's Voice is simple and secure. Choose the amount you wish to give, fill in your details, and join our chorus of supporters. Every contribution, no matter the size, makes a difference.",
            inputs: [
              {
                required: true,
                label: "Donation Amount",
                id: "donation-amount",
                type: "range",
                min: "5",
                max: "1000",
                step: "15",
                value: "5",
                output: "$",
              },
              {
                required: true,
                label: "Donation Frequency",
                id: "donation-frequency",
                type: "checkbox-cards",
                cards: [
                  { value: "One Time", icon: "dollar" },
                  { value: "Yearly", icon: "calendar" },
                  { value: "Monthly", icon: "calendar-month" },
                ],
              },
            ],
            submit: "Send Donation",
          },
        },
      },
    },
    {
      url: "get-involved",
      title:
        "Get Involved: Join Ocean's Voice in Making a Difference for Our Oceans",
      description:
        "Find out how you can contribute to ocean conservation, from volunteering to donations and partnerships.",
      regions: {
        intro: {
          layout: "end-heavy",
          start: {
            component: "text",
            size: "page",
            overline: "Your Role",
            headline: "Join the Chorus of Ocean's Voice",
            body: "At Ocean's Voice, we believe that everyone has a part to play in protecting and restoring our oceans. Your voice, your actions, and your support can make a world of difference. Here's how you can get involved:",
          },
          end: {
            component: "img",
            src: "chorus.png",
            alt: "Chorus",
          },
        },
        ways: {
          layout: "stack",
          overline: "Ways to Get Involved",
          headline: "Join the Current of Conservation",
          items: [
            {
              component: "article",
              img: { src: "fuel.png", alt: "" },
              overline: "Donate",
              headline: "Fuel the Wave of Change",
              body: "Your generous donation can help fund critical research, advocacy efforts, and conservation initiatives. Every dollar brings us one step closer to a healthier, more vibrant ocean. Stand with us today and make a tangible difference.",
            },
            {
              component: "article",
              img: { src: "volunteer.png", alt: "" },
              overline: "Volunteer",
              headline: "Dive into Action",
              body: "Volunteering with Ocean's Voice is a hands-on way to contribute to our mission. Whether it's helping with a beach clean-up, assisting with an event, or contributing your professional skills, your time and effort can have a significant impact.",
            },
            {
              component: "article",
              img: { src: "amplify.png", alt: "" },
              overline: "Advocate",
              headline: "Amplify the Ocean's Cry",
              body: "Advocacy is a powerful tool for change. By raising awareness about the plight of our oceans, influencing policy, and encouraging others to take action, you can help turn the tide for ocean conservation.",
            },
            {
              component: "article",
              img: { src: "spark.png", alt: "" },
              overline: "Learn & Educate",
              headline: "Ignite the Spark of Knowledge",
              body: "Education is the first step towards action. Learn more about the challenges facing our oceans and share this knowledge with your community. Together, we can create a ripple effect of awareness and action.",
            },
            {
              component: "article",
              img: { src: "unite.png", alt: "" },
              overline: "Partner",
              headline: "Unite for the Oceans",
              body: "Are you part of a business, school, or organization that shares our passion for the oceans? Let's join forces! Through partnerships, we can amplify our impact and create lasting change for our oceans.",
            },
          ],
        },
        action: {
          layout: "center",
          theme: "primary",
          content: {
            component: "text",
            size: "region",
            overline: "Join Us",
            headline: "Become a Guardian of the Ocean",
            body: "No matter how you choose to get involved, your contribution matters. You're not just a supporter; you're a guardian of our oceans. Join us today and let your voice echo through the depths.",
            btn: { label: "Become a Guardian", url: "/donate" },
          },
        },
      },
    },
    {
      url: "impact",
      title:
        "Impact: The Difference Ocean's Voice is Making in Ocean Conservation",
      description:
        "See the tangible impact of our work in ocean conservation, from policy changes to improvements in marine health.",
      regions: {
        intro: {
          layout: "end-heavy",
          start: {
            component: "text",
            size: "page",
            overline: "Our Commitment",
            headline: "The Echo of Ocean's Voice",
            body: "At Ocean's Voice, we're committed to making a tangible difference in the health and vitality of our world's oceans. Here's a glimpse into the impact we've made so far, thanks to the support of individuals like you.",
          },
          end: {
            component: "img",
            src: "vibrant-coral.png",
            alt: "Vibrant Coral",
          },
        },
        conservation: {
          layout: "start-heavy",
          start: {
            component: "img",
            src: "conservation.png",
            alt: "Conservation",
          },
          end: {
            component: "text",
            size: "region",
            overline: "Conservation Successes",
            headline: "Turning the Tide",
            body: "Our conservation initiatives have led to significant successes in protecting marine life and restoring damaged ecosystems. From rehabilitating coral reefs to establishing protected areas for endangered species, we're making waves in ocean conservation.",
          },
        },
        policy: {
          layout: "end-heavy",
          start: {
            component: "text",
            size: "region",
            overline: "Policy Influence",
            headline: "Shaping the Future",
            body: "Through our advocacy efforts, we've influenced policies that protect our oceans and promote sustainable practices. Our voice, amplified by the support of our community, is making a difference at the policy level.",
          },
          end: {
            component: "img",
            src: "policy.png",
            alt: "Policy",
          },
        },
        education: {
          layout: "start-heavy",
          start: {
            component: "img",
            src: "education.png",
            alt: "Education",
          },
          end: {
            component: "text",
            size: "region",
            overline: "Education Impact",
            headline: "Igniting Waves of Knowledge",
            body: "Our educational programs have reached thousands of individuals, inspiring them to learn more about our oceans and take action. We're creating a ripple effect of awareness and action that extends far beyond our organization.",
          },
        },
        community: {
          layout: "end-heavy",
          start: {
            component: "text",
            size: "region",
            overline: "Community Engagement",
            headline: "United for the Oceans",
            body: "We've built a vibrant community of ocean advocates who are passionate about our cause. Their support, whether through volunteering, donating, or spreading the word, is a testament to the power of collective action.",
          },
          end: {
            component: "img",
            src: "team.png",
            alt: "Community",
          },
        },
        action: {
          layout: "center",
          theme: "primary",
          content: {
            component: "text",
            size: "region",
            overline: "Join Us",
            headline: "Amplify the Impact",
            body: "Your involvement can help us make an even greater impact. Whether you choose to donate, volunteer, or advocate for our cause, you're contributing to the health and vitality of our oceans. Join us today and become a part of the Ocean's Voice impact story.",
            btn: { label: "Become a Guardian", url: "/donate" },
          },
        },
      },
    },
    {
      url: "our-work",
      title:
        "Our Work: Ocean's Voice's Comprehensive Approach to Ocean Conservation",
      description:
        "Explore the diverse initiatives of Ocean's Voice in advocacy, conservation, education, and research aimed at preserving our oceans.",
      regions: {
        intro: {
          layout: "end-heavy",
          start: {
            component: "text",
            size: "page",
            overline: "Our Focus",
            headline: "The Heart of Ocean's Voice",
            body: "At Ocean's Voice, our work is centered around the protection and restoration of our world's oceans. We strive to create a future where marine life flourishes, where our oceans are free from the chains of pollution, and where every wave reveals a vibrant, healthy ecosystem.",
          },
          end: {
            component: "img",
            src: "heart.png",
            alt: "Heart",
          },
        },
        research: {
          layout: "start-heavy",
          start: {
            component: "card",
            variant: "list",
            theme: "primary-container",
            icon: "check",
            items: [
              "Mapping ocean habitats to understand biodiversity",
              "Studying the impact of climate change on marine life",
              "Monitoring water quality and its effects on ecosystems",
              "Developing sustainable fisheries practices",
              "Investigating the role of oceans in global climate",
            ],
          },
          end: {
            component: "text",
            size: "region",
            overline: "Research",
            headline: "Uncovering the Depths",
            body: "Our dedicated team of scientists and researchers work tirelessly to understand the complex challenges facing our oceans. Through their efforts, we're able to identify critical areas of need, develop effective conservation strategies, and monitor the impact of our work.",
            btn: {
              label: "Learn More About Research",
              url: "/our-work/research",
              variant: "secondary",
            },
          },
        },
        advocacy: {
          layout: "end-heavy",
          start: {
            component: "text",
            size: "region",
            overline: "Advocacy",
            headline: "Amplifying the Ocean's Cry",
            body: "We believe in the power of collective voices to bring about change. Our advocacy work involves raising awareness about the plight of our oceans, influencing policy, and empowering individuals and communities to take action.",
            btn: {
              label: "Learn More About Advocacy",
              url: "/our-work/advocacy",
              variant: "secondary",
            },
          },
          end: {
            component: "card",
            variant: "list",
            theme: "secondary-container",
            icon: "check",
            items: [
              "Campaigning for stronger ocean protection laws",
              "Organizing beach clean-up events",
              "Raising awareness through social media campaigns",
              "Lobbying for bans on single-use plastics",
              "Educating policymakers on sustainable ocean policies",
            ],
          },
        },
        education: {
          layout: "start-heavy",
          start: {
            component: "card",
            variant: "list",
            theme: "tertiary-container",
            icon: "check",
            items: [
              "Offering educational programs for schools and communities",
              "Creating engaging online content about ocean conservation",
              "Providing resources for teachers on marine science",
              "Organizing workshops and seminars on sustainable living",
              "Developing interactive exhibits on marine ecosystems",
            ],
          },
          end: {
            component: "text",
            size: "region",
            overline: "Education",
            headline: "Igniting Waves of Knowledge",
            body: "Education is a powerful tool for change. We're committed to educating the public about the importance of ocean conservation, the threats our oceans face, and the steps each of us can take to make a difference.",
            btn: {
              label: "Learn More About Education",
              url: "/our-work/education",
              variant: "secondary",
            },
          },
        },
        conservation: {
          layout: "end-heavy",
          start: {
            component: "text",
            size: "region",
            overline: "Conservation Initiatives",
            headline: "Turning the Tide",
            body: "Our conservation initiatives are at the forefront of our mission. From protecting endangered marine species to restoring damaged ecosystems, we're actively working to heal our oceans. Each project is a step towards a healthier, more vibrant ocean.",
            btn: {
              label: "Learn More About Conservation",
              url: "/our-work/conservation",
              variant: "secondary",
            },
          },
          end: {
            component: "card",
            variant: "list",
            theme: "primary-container",
            icon: "check",
            items: [
              "Establishing marine protected areas",
              "Running rehabilitation programs for injured marine animals",
              "Participating in coral reef restoration projects",
              "Promoting sustainable fishing practices",
              "Implementing measures to mitigate ocean pollution",
            ],
          },
        },
        action: {
          layout: "center",
          theme: "primary",
          content: {
            component: "text",
            size: "region",
            overline: "Get Involved",
            headline: "Join the Ocean's Voice",
            body: "Our work is only possible with the support of individuals like you. Whether you're interested in volunteering, donating, or advocating for our cause, there's a place for you at Ocean's Voice. Together, we can create a future where our oceans thrive.",
            btn: { label: "Become a Guardian", url: "/donate" },
          },
        },
      },
    },
    {
      url: "resources",
      title:
        "Resources: Ocean's Voice's Comprehensive Information on Ocean Conservation",
      description:
        "Access a wealth of resources on ocean conservation, including educational materials, research papers, and advocacy tools.",
      regions: {
        intro: {
          layout: "end-heavy",
          start: {
            component: "text",
            size: "page",
            overline: "Your Journey",
            headline: "Dive Deeper with Ocean's Voice",
            body: "At Ocean's Voice, we believe that knowledge is the first step towards action. That's why we've curated a collection of resources to help you learn more about ocean conservation and how you can make a difference.",
          },
          end: {
            component: "img",
            src: "resources.png",
            alt: "Resources",
          },
        },
        resources: {
          layout: "gallery",
          col: 2,
          overline: "Resources and Tools",
          headline: "Empowering Ocean Guardians",
          items: [
            {
              component: "card",
              theme: "primary-container",
              overline: "Educational Materials",
              headline: "Ignite the Spark of Knowledge",
              body: "Our educational materials are designed to provide a comprehensive understanding of the challenges facing our oceans and the solutions that can make a difference. From detailed reports to engaging infographics, these resources are a great starting point for anyone looking to learn more.",
            },
            {
              component: "card",
              theme: "secondary-container",
              overline: "Advocacy Tools",
              headline: "Amplify Your Voice",
              body: "Ready to take action? Our advocacy tools can help. We've compiled a collection of guides, templates, and resources to help you advocate for ocean conservation in your community and beyond.",
            },
            {
              component: "card",
              theme: "tertiary-container",
              overline: "Volunteer Resources",
              headline: "Dive into Action",
              body: "If you're interested in volunteering with Ocean's Voice, we've got you covered. Our volunteer resources include everything you need to know to get started, from volunteer opportunities to tips for making the most of your experience.",
            },
            {
              component: "card",
              theme: "primary-container",
              overline: "Partner Resources",
              headline: "Unite for the Oceans",
              body: "Are you part of a business, school, or organization that shares our passion for the oceans? Our partner resources provide guidance on how we can work together to amplify our impact and create lasting change for our oceans.",
            },
            {
              component: "card",
              theme: "secondary-container",
              overline: "Multimedia",
              headline: "Experience the Ocean's Story",
              body: "Our collection of videos, podcasts, and interactive content brings the story of our oceans to life. Immerse yourself in these captivating resources and let the beauty and urgency of ocean conservation inspire you to action.",
            },
          ],
        },
        action: {
          layout: "center",
          theme: "primary",
          content: {
            component: "text",
            size: "region",
            overline: "Join Us",
            headline: "Become a Guardian of the Ocean",
            body: "No matter where you are on your ocean conservation journey, our resources are here to support you. Dive in, learn, and let your actions echo through the depths. Together, we can give our oceans a voice.",
            btn: { label: "Become a Guardian", url: "/donate" },
          },
        },
      },
    },
    {
      url: "our-work/advocacy",
      title:
        "Advocacy: Ocean's Voice's Efforts in Promoting Ocean Conservation Policies",
      description:
        "Learn about how Ocean's Voice advocates for policies and laws that protect the ocean and its diverse ecosystems.",
      regions: {
        intro: {
          layout: "end-heavy",
          start: {
            component: "text",
            size: "page",
            overline: "Our Work",
            headline: "Amplifying the Ocean's Cry: Our Advocacy",
            body: "Advocacy is a powerful tool in our mission to protect and restore our oceans. At Ocean's Voice, we raise awareness, influence policy, and empower individuals to take action.",
          },
          end: {
            component: "img",
            src: "shield.png",
            alt: "Shield",
          },
        },
        approach: {
          layout: "start-heavy",
          start: {
            component: "img",
            src: "advocacy.png",
            alt: "Advocacy",
          },
          end: {
            component: "text",
            size: "region",
            overline: "Our Approach",
            headline: "Speaking Up for the Seas",
            body: "We work at local, national, and international levels to advocate for policies that protect our oceans. We also provide resources and training to empower others to do the same.",
          },
        },
        impact: {
          layout: "stack",
          overline: "Our Impact",
          headline: "Changing Tides",
          body: "Our advocacy work has led to policy changes, increased awareness, and a growing community of ocean advocates. But there's still more work to do.",
          items: [
            {
              component: "stats",
              variant: "inline",
              items: [
                { headline: "80+", body: "Legislative Wins" },
                {
                  headline: "250,000+",
                  body: "People Reached Through Campaigns",
                },
                { headline: "3,000+", body: "Volunteers Engaged" },
                { headline: "150+", body: "Events and Workshops" },
              ],
            },
          ],
        },
        faq: {
          layout: "end-heavy",
          mobile: "start",
          align: "start",
          start: {
            component: "text",
            size: "region",
            headline: "Frequently Asked Questions",
          },
          end: {
            component: "subgallery",
            variant: "stack",
            items: [
              {
                component: "text",
                size: "title",
                headline: "What is ocean advocacy?",
                body: "Ocean advocacy is about promoting sustainable practices, conservation, and responsible use of ocean resources.",
              },
              {
                component: "text",
                size: "title",
                headline: "How can I get involved in ocean advocacy?",
                body: "You can get involved by learning about ocean issues, joining advocacy groups, participating in events, and spreading awareness.",
              },
              {
                component: "text",
                size: "title",
                headline: "How does Ocean’s Voice influence policy?",
                body: "We engage with policymakers, participate in consultations, collaborate with organizations, and mobilize grassroots campaigns.",
              },
              {
                component: "text",
                size: "title",
                headline: "What are some challenges faced in ocean advocacy?",
                body: "Challenges include public awareness, political barriers, conflicting interests, financial constraints, and the complexity of ocean ecosystems.",
              },
              {
                component: "text",
                size: "title",
                headline:
                  "What are some achievements of Ocean’s Voice in ocean advocacy?",
                body: "We’ve influenced marine policies, engaged volunteers, reached a wide audience through campaigns, and organized numerous conservation events.",
              },
            ],
          },
        },
        action: {
          layout: "center",
          theme: "primary",
          content: {
            component: "text",
            size: "region",
            overline: "Get Involved",
            headline: "Lend Your Voice",
            body: "Join us in advocating for our oceans. Your voice can make a difference. Stand with us today and let your voice echo through the depths.",
            btn: { label: "Become a Guardian", url: "/donate" },
          },
        },
      },
    },
    {
      url: "our-work/conservation",
      title:
        "Conservation: Ocean's Voice's Direct Actions to Protect Marine Life",
      description:
        "Discover our conservation projects aimed at protecting marine life and restoring the health of our oceans.",
      regions: {
        intro: {
          layout: "end-heavy",
          start: {
            component: "text",
            size: "page",
            overline: "Our Work",
            headline: "Turning the Tide: Our Conservation",
            body: "Conservation is at the heart of our mission at Ocean's Voice. We're actively working to protect marine life, restore damaged ecosystems, and ensure a healthy, vibrant ocean for future generations.",
          },
          end: {
            component: "img",
            src: "tree-healing.png",
            alt: "Tree Healing",
          },
        },
        approach: {
          layout: "start-heavy",
          start: {
            component: "img",
            src: "turtle-conserve.png",
            alt: "Turtle Conservation",
          },
          end: {
            component: "text",
            size: "page",
            overline: "Our Approach",
            headline: "Healing the Seas",
            body: "Our conservation initiatives range from protecting endangered marine species to restoring coral reefs and reducing pollution. Each project is a step towards a healthier ocean.",
          },
        },
        impact: {
          layout: "stack",
          overline: "Our Impact",
          headline: "Making Waves",
          body: "Our conservation work has led to tangible improvements in the health and vitality of our oceans. But the fight is far from over. With every new challenge, our resolve only strengthens.",
          items: [
            {
              component: "stats",
              variant: "inline",

              items: [
                { headline: "100+", body: "Marine Species Protected" },
                {
                  headline: "50,000+",
                  body: "Square Miles of Ocean Conserved",
                },
                { headline: "20+", body: "Coral Reef Restoration Projects" },
                { headline: "2 Million", body: "Pounds of Trash Removed" },
              ],
            },
          ],
        },
        faq: {
          layout: "end-heavy",
          mobile: "start",
          align: "start",
          start: {
            component: "text",
            size: "region",
            headline: "Frequently Asked Questions",
          },
          end: {
            component: "subgallery",
            variant: "stack",
            items: [
              {
                component: "text",
                size: "title",
                headline: "What is ocean conservation?",
                body: "Ocean conservation is the protection and management of marine ecosystems to prevent their degradation and ensure biodiversity.",
              },
              {
                component: "text",
                size: "title",
                headline: "How does Ocean’s Voice contribute to conservation?",
                body: "We protect marine species, restore coral reefs, reduce pollution, and work on conserving large areas of the ocean.",
              },
              {
                component: "text",
                size: "title",
                headline: "Can individuals contribute to ocean conservation?",
                body: "Yes, individuals can contribute by reducing waste, supporting sustainable products, participating in clean-ups, and raising awareness.",
              },
              {
                component: "text",
                size: "title",
                headline: "What challenges does marine conservation face?",
                body: "Challenges include overfishing, pollution, climate change, habitat destruction, and lack of funding and public support.",
              },
              {
                component: "text",
                size: "title",
                headline:
                  "How is Ocean’s Voice funded for conservation efforts?",
                body: "Funding comes from donations, grants, partnerships, and fundraising events.",
              },
            ],
          },
        },
        action: {
          layout: "center",
          theme: "primary",
          content: {
            component: "text",
            size: "region",
            overline: "Get Involved",
            headline: "Support Ocean Conservation",
            body: "Your support can help us continue our vital conservation work. Donate today and help us turn the tide for our oceans.",
            btn: { label: "Become a Guardian", url: "/donate" },
          },
        },
      },
    },
    {
      url: "our-work/education",
      title:
        "Education: Ocean's Voice's Commitment to Raising Awareness About Ocean Conservation",
      description:
        "Explore our educational programs designed to inspire and inform the public about the importance of ocean conservation.",
      regions: {
        intro: {
          layout: "end-heavy",
          start: {
            component: "text",
            size: "page",
            overline: "Our Work",
            headline: "Igniting Waves of Knowledge: Our Education",
            body: "At Ocean's Voice, we believe that education is a powerful tool for change. We're committed to educating the public about the importance of ocean conservation and the steps each of us can take to make a difference.",
          },
          end: {
            component: "img",
            src: "diver-education.png",
            alt: "Diver Education",
          },
        },
        approach: {
          layout: "start-heavy",
          start: {
            component: "img",
            src: "class.png",
            alt: "Class",
          },
          end: {
            component: "text",
            size: "page",
            overline: "Our Approach",
            headline: "Learning for the Oceans",
            body: "We offer a range of educational resources and programs designed to inspire and inform. From classroom resources to public talks, we're making ocean conservation accessible to all.",
          },
        },
        impact: {
          layout: "stack",
          overline: "Our Impact",
          headline: "Inspiring Action",
          body: "Our educational efforts have reached thousands of individuals, sparking curiosity, fostering understanding, and inspiring action for our oceans.",
          items: [
            {
              component: "stats",
              variant: "inline",
              items: [
                { headline: "10,000+", body: "Students Educated" },
                { headline: "500+", body: "Educational Resources Created" },
                { headline: "1,000+", body: "Teachers Trained" },
                { headline: "200+", body: "Schools Reached" },
              ],
            },
          ],
        },
        faq: {
          layout: "end-heavy",
          mobile: "start",
          align: "start",
          start: {
            component: "text",
            size: "region",
            headline: "Frequently Asked Questions",
          },
          end: {
            component: "subgallery",
            variant: "stack",
            items: [
              {
                component: "text",
                size: "title",
                headline:
                  "What types of educational programs does Ocean’s Voice offer?",
                body: "We offer classroom resources, public talks, teacher training, and digital content aimed at raising awareness about ocean conservation.",
              },
              {
                component: "text",
                size: "title",
                headline:
                  "Why is educating the public about ocean conservation important?",
                body: "Education informs and inspires action, helping individuals understand the importance of oceans and their role in conservation efforts.",
              },
              {
                component: "text",
                size: "title",
                headline:
                  "How can teachers incorporate ocean conservation in their curriculum?",
                body: "Teachers can use our resources, invite guest speakers, organize field trips, and encourage project-based learning focused on ocean conservation.",
              },
              {
                component: "text",
                size: "title",
                headline:
                  "Can individuals access Ocean’s Voice’s educational resources?",
                body: "Yes, our educational resources are available to the public and can be accessed through our website.",
              },
              {
                component: "text",
                size: "title",
                headline:
                  "How can I contribute to Ocean’s Voice’s educational initiatives?",
                body: "You can contribute by sharing our resources, participating in our programs, providing feedback, or making a donation to support our educational efforts.",
              },
            ],
          },
        },
        action: {
          layout: "center",
          theme: "primary",
          content: {
            component: "text",
            size: "region",
            overline: "Get Involved",
            headline: "Dive into Learning",
            body: "Explore our educational resources, participate in our programs, and share your knowledge with others. Together, we can create a ripple effect of awareness and action.",
            btn: { label: "Become a Guardian", url: "/donate" },
          },
        },
      },
    },
    {
      url: "our-work/research",
      title:
        "Research: Ocean's Voice's Scientific Contributions to Ocean Conservation",
      description:
        "Learn about our research initiatives that provide vital data to guide our conservation efforts and influence policy.",
      regions: {
        intro: {
          layout: "end-heavy",
          start: {
            component: "text",
            size: "page",
            overline: "Our Work",
            headline: "Uncovering the Depths: Our Research",
            body: "At Ocean's Voice, our research forms the backbone of our work. Our dedicated team of scientists and researchers work tirelessly to understand the complex challenges facing our oceans and develop effective strategies to address them.",
          },
          end: {
            component: "img",
            src: "iceberg.png",
            alt: "Iceberg",
          },
        },
        approach: {
          layout: "start-heavy",
          start: {
            component: "img",
            src: "data.png",
            alt: "Data",
          },
          end: {
            component: "text",
            size: "region",
            overline: "Our Approach",
            headline: "Diving into Data",
            body: "We employ rigorous scientific methods to gather data, analyze trends, and uncover the realities of our ocean's health. This data-driven approach ensures our actions are targeted and effective.",
          },
        },
        impact: {
          layout: "stack",
          overline: "Our Impact",
          headline: "Illuminating the Way Forward",
          body: "Our research has shed light on critical issues, informed policy decisions, and guided our conservation initiatives. It's not just about understanding the problem; it's about paving the way for solutions.",
          items: [
            {
              component: "stats",
              variant: "inline",
              overline: "",
              headline: "",
              body: "",
              items: [
                { headline: "50+", body: "Research Papers Published" },
                { headline: "5", body: "Ocean Exploration Expeditions" },
                {
                  headline: "20+",
                  body: "Collaborations with Global Institutions",
                },
                { headline: "100+", body: "Environmental Factors Monitored" },
              ],
            },
          ],
        },
        faq: {
          layout: "end-heavy",
          mobile: "start",
          align: "start",
          start: {
            component: "text",
            size: "region",
            headline: "Frequently Asked Questions",
          },
          end: {
            component: "subgallery",
            variant: "stack",
            items: [
              {
                component: "text",
                size: "title",
                headline: "What kind of research does Ocean’s Voice conduct?",
                body: "We conduct studies on ocean health, marine biodiversity, environmental factors, and the impacts of human activities on marine ecosystems.",
              },
              {
                component: "text",
                size: "title",
                headline:
                  "How does Ocean’s Voice use research in conservation efforts?",
                body: "Our research provides data that guides the development of targeted conservation strategies and helps in influencing policy decisions.",
              },
              {
                component: "text",
                size: "title",
                headline: "Can I access Ocean’s Voice research papers?",
                body: "Yes, our published research papers are accessible to the public and can be found on our website.",
              },
              {
                component: "text",
                size: "title",
                headline:
                  "How does Ocean’s Voice collaborate with other institutions?",
                body: "We collaborate with global institutions through data sharing, joint research projects, and contributing to discussions on ocean conservation.",
              },
              {
                component: "text",
                size: "title",
                headline:
                  "How can I support Ocean’s Voice’s research initiatives?",
                body: "You can support by donating, sharing our research with others, or even engaging in citizen science initiatives.",
              },
            ],
          },
        },
        action: {
          layout: "center",
          theme: "primary",
          content: {
            component: "text",
            size: "region",
            overline: "Get Involved",
            headline: "Support Ocean Research",
            body: "Your support can help us continue our vital research work. Donate today and help us uncover the truths that lie beneath the ocean's surface.",
            btn: { label: "Become a Guardian", url: "/donate" },
          },
        },
      },
    },
  ],
};

module.exports = config;
