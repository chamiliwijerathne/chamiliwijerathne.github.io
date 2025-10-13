---
heroSection:
   id: home-hero-section
   type: hero
   classNames:
      - home-hero-section
   containers:
      - id: home-hero-content-container
        subContainers:
           - id: role-text
             subContainerType: block
             type: paragraph
             text: UI/UX DESIGNER
             classNames:
                - home-hero-role
           - id: intro-heading
             subContainerType: block
             type: heading
             text: Hello, my name is
             level: 2
             classNames:
                - leading-tight
           - id: full-name-heading
             subContainerType: block
             type: heading
             text: Chamili Wijerathne
             level: 1
             classNames:
                - leading-tight
                - mb-8
           - id: role-description
             subContainerType: block
             type: paragraph
             text: >-
                A passionate UI/UX designer. I create clean, user-friendly digital
                experiences that bring ideas to life through thoughtful design
                and usability.
             classNames:
                - role-description
           - id: cta-buttons-container
             subContainerType: container
             classNames:
                - cta-container
             subContainers:
                - id: projects-button
                  subContainerType: block
                  type: button
                  variant: primary
                  href:
                     url: /projects
                     label: Projects
                  classNames:
                     - cta-button
                     - rounded-lg
                - id: linkedin-button
                  subContainerType: block
                  type: button
                  variant: secondary
                  href:
                     url: /projects
                     label: LinkedIn
                     targetBlank: true
                  classNames:
                     - cta-button
                     - rounded-lg
   img:
      src: ./images/homePageImage.png
      alt: Hero Image
      classNames:
         - hero-img
---
