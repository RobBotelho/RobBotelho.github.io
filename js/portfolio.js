  $(document).on('click', 'button', function() {
      var id = $(this).attr('id');
      console.log(id)
      if (id == 'Botelho') {
          $('.portfolio-content').html("<img src='images/individual_new/Roberto_Botelho2.jpg' alt='Roberto Botelho'> <h3>About Me</h3> <p>Originally from the Azores, <a  href='https://en.wikipedia.org/wiki/Portugal'> Portugal</a>, I have been a Torontonian since 1989! I did my B.Sc. at York University, Ph.D. at the University of Toronto under the supervision of <a  href='http://biochemistry.utoronto.ca/person/sergio-grinstein/'>Dr. Sergio Grinstein</a> at Sick Kids. I followed my graduate studies with a post-doctoral fellowship in <a  href='https://emr.wicmb.cornell.edu/'> Dr. Scott Emr’s lab </a>, first at University of <a href='https://en.wikipedia.org/wiki/San_Diego' target='_blank'> California San Diego </a> and then in <a href='https://www.cornell.edu/' target='_blank'>Cornell University </a>. I have been a Professor at Ryerson University since 2008. I typically teach cell biology-related topics and I lead a cell biology lab to learn about how organelles function,especially in innate immunity. </p><h3> Fun Facts </h3> <p>Chances are that if you come see me, I’m listening to drum n’ bass, Dubstep, house (dark is better), Downtempo and sometimes classical.</p><i class='icon fa-linkedin-square' aria-hidden='true'></i>").fadeIn();
      } else if (id == 'Chris') {
          $('.portfolio-content').html('<img src="images/individual/Christopher Choy.jpg" alt="Christopher Choy"><p> A former Ph.D. student and alumni of Ryerson. Chris worked to understand how cells can control biosynthesis of lysosomes through modulating phosphoinositide lipids and through phagocytosis. He is now a MITACS-funded post-doctoral fellow at Sanofi Pasteur Canada </p> <a href="#"><i class="icon fa-linkedin-square" aria-hidden="true"></i></a>').fadeIn();
      } else if (id == 'Golam') {
          $('.portfolio-content').html('<img src="images/individual/Golam.JPG" alt="Golam Saffi"><h3>About Me</h3><p> I completed my BSc and MSc at the University of Waterloo and PhD from the Botelho lab at Ryerson University. I like to have a multidimensional mind that can contemplate multiple visionaries at the same time including science, philosophy (from Islam), family and somewhat comedy (although I may not be that funny to some. Har har!!).  Also, I like playing video games. Currently, I am exploring the exciting prospect of how phosphoinositide membrane lipid PI3,4P2 regulate lysosome function and signalling as a postdoctoral scientist at the lab of Dr. Leonardo Salmena at University of Toronto.            </p><h3> Research Interest </h3> <p>  PIKfyve is a lipid kinase that generates the late endosome-lysosome (endolysosome) membrane lipid PI3,5P2. However, depletion of PI3,5P2 results in dramatic enlargement of endolysosomes. My research aimed at identifying chemicals and protein factors that regulate such enlargement and endolysosome dynamic in general.       </p><a href="#"><i class="icon fa-linkedin-square" aria-hidden="true"></i></a>').fadeIn();
      } else if (id == 'Yasmine') {
          $('.portfolio-content').html('<img src="images/individual/Yasmine.jpg" alt="Yasmine"><h3> Research Interest </h3> <p> My undergraduate was completed at Ryerson University in Biology. My project is about determining whether LYCAT (lysocardiolipin acyltransferase) is involved in the resynthesis and quality control of the types of fatty acids that are attached to phosphoinositides. This is important because phosphoinositides like phosphatidylinositol-4,5-bisphosphate, whcih is found on the plasma membrane, is depleted during signaling. </p><h3> Fun Facts </h3> <p>  I was not allowed to watch the Simpsons until I was 19 years old.  My favourite Disney movie is Mulan.  And I am the eldest in the family but I am only 5 feet 2. </p><a href="#"><i class="icon fa-linkedin-square" aria-hidden="true"></i></a>').fadeIn();
      } else if (id == 'Louis') {
          $('.portfolio-content').html(" <img src='images/individual_new/Louis Lo.jpg' alt='Louis'> <h3> Research Interest </h3><p> I am a M.Sc. student candidate co-supervised by Drs. Botelho and Antonescu in the Dept. of Chemistry and Biology and by Dr. Raffi Kasharfian in Physics. I completed my BSc at Ryerson in biology and continued my research into graduate studies. My research focuses on the effects of ultrasound in combination with microbubbles on the diverse stress response pathways of a cell. I want to understand how this specialized technique can help improve and support cancer therapies.</p><h3> Fun Facts </h3><p> you’ll probably find me at the Mattamy Athletic Centre gym taking pictures of myself for my snapchat. </p><a  href='#'><i class='icon fa-linkedin-square' aria-hidden='true'></i></a>").fadeIn();
      } else if (id == 'Victoria') {
          $('.portfolio-content').html(" <img src='images/individual_new/Victoria Hipolito.jpg' alt='Victoria'> <h3> About Me </h3> <p> I really enjoy mentoring developing scientists - helping them identify and acknowledge their strengths in the lab. </p> <h3> Research Interest </h3><p> My research is focused on understanding how immune cells adapt lysosomes in response to infection and stress. We want to understand how lysosomal adaptation helps our immune cells boost immunity and the regulatory pathways that control this process.  </p><h3> Fun Facts </h3><p> I’m addicted to reality TV!  </p><a  href='https://www.linkedin.com/in/victoria-hipolito'><i class='icon fa-linkedin-square' aria-hidden='true'></i></a>").fadeIn();

      } else if (id == 'Aaron') {
          $('.portfolio-content').html("<img src='images/individual_new/Aaron.jpg' alt='Aaron'><h3> About Me </h3><p> I am a Masters student in Molecular Science. My undergraduate was at Queen's University at Kingston.</p><h3> Research Interest </h3><p> My work focuses on phagosome resolution, or how a phagocyte, such as a macrophage, resets phagocytosis in order to intake particles again. Our working model is that phagolysosomes in mammalian cells fragment and reform into lysosomes, instead of ejecting its contents out of the cell. </p><h3> Fun Facts </h3><p> I built a boat with a duct tape hull with some of my friends in Scouts. </p><a  href='#'><i class='icon fa-linkedin-square' aria-hidden='true'></i></a>").fadeIn();
      } else if (id == 'Jacqueline') {
          $('.portfolio-content').html("<img src='images/individual_new/Jacqueline.png' alt='Jacqueline'><h3> Research Interest </h3><p> I am a third-year undergraduate student in the Biomedical Science program. My project is focused on immune cells, specifically macrophages, and their lysosomes. We want to understand how macrophages remodel their lysosomes upon exposure to infection and how this may help to facilitate clearance by the immune system.</p><h3> Fun Facts </h3><p>  I love to draw... but I’m pretty terrible at it. </p><a  href='#'><i class='icon fa-linkedin-square' aria-hidden='true'></i></a>").fadeIn();
      } else if (id == 'Subo') {
          $('.portfolio-content').html(" <img src='images/individual_new/Subo.jpg' alt='Subo'><h3> About Me </h3><p>  I am a Ph.D. student in the Botelho lab. I did my undergraduate degree at the University of Toronto majoring in microbiology and health & disease. There, I studied virus-host interactions of enteric adenovirus in Dr. Martha Brown’s lab. </p><h3> Research Interest </h3><p>  My current research is focused on elucidating the role of the transcription factor EB (TFEB) in lysosomal physiology in macrophages. Ultimately, we want to see if TFEB is an important factor in immune responses against bacterial pathogens. My research uses both in vitro and in vivo models to study TFEB.  </p><h3> Fun Facts </h3><p> outside of the lab, I am dragon boat paddler (5 years and counting) and you can always find me at the gym working hard (slowly) towards a 315 lbs squat.           </p><a  href='#'><i class='icon fa-linkedin-square' aria-hidden='true'></i></a>").fadeIn();

      } else if (id == 'Saba') {
          $('.portfolio-content').html("<img src='images/individual_new/Saba.jpeg' alt='Saba'><h3> Research Interest </h3><p> I am an undergraduate research assistant in my 3rd year in the biomedical science program. My project aims to understand how proteins such as acyltransferases control and mediate signalling pathways, and their impact on the physiology of the cell. </p><h3> Fun Facts </h3><p>I read somewhere that chocolate is going to run out by the year 2050, and that’s the excuse I use for eating so much chocolate. </p><a  href='#'><i class='icon fa-linkedin-square' aria-hidden='true'></i></a>").fadeIn();

      }  else if (id == 'Emily') {
          $('.portfolio-content').html(" <img src='images/individual/Emily.png' alt='Emily'><h3> Research Interest </h3><p>  I completed my undergraduate thesis in the Botelho Lab, studying the effect of pathogenic adherent-invasive E. coli strains on macrophage cells. These bacteria strains contribute to inflammatory bowel disease, an immune system disorder, so it is important to investigate their interaction with immune cells such as macrophages.  I am now a graduate student in the Dept. of Biochemistry at the University of Toronto.          </p><h3> Fun Facts </h3><p> Outside of the lab and school, I love cooking, sports, and rock music. </p><a  href='#'><i class='icon fa-linkedin-square' aria-hidden='true'></i></a>").fadeIn();
      } else if (id == 'Neha') {
          $('.portfolio-content').html(" <img src='images/individual/Neha.jpg' alt='Neha'><h3> Research Interest </h3><p>   I am an undergraduate alumni of Ryerson University and currently a second-year master's student at the University of Toronto in the Department of Laboratory Medicine and Pathobiology. My research focuses on investigating MRI-guided focused ultrasound as a non-invasive therapeutic delivery method for the treatment of hearing and balance disorders in Dr. Alain Dabdoub's lab at Sunnybrook Research Institute. In the Botelho lab, I studied lysosome remodelling in immune cells in response to bacterial molecules. </p><h3> Fun Facts </h3><p> I watched so much Grey's Anatomy that I think I'm a surgeon now.           </p><a  href='#'><i class='icon fa-linkedin-square' aria-hidden='true'></i></a>").fadeIn();
      }  else if (id == 'Ahmad') {
          $('.portfolio-content').html(" <img src='images/individual/Ahmad.jpg' alt='Venessa'><h3> About Me </h3><p> I had the pleasure of being supervised by Dr. Botelho as an Undergraduate Research Opportunity, and an NSERC USRA student for three summers. I continued my project, which focused on Vac14 modulating Fig4 activity, for my 4th year undergraduate thesis. Dr. Botelho is an incredibly patient and innovative supervisor who is passionate for teaching his students research and interpersonal skills. He trusts his students and builds their confidence and independence -- both of which have been invaluable to me throughout my academic career. The experience I gained was crucial for my successful completion of my M.Sc. at the University of Toronto and St. Michael’s Hospital, and has continued to help me as a medical student at the University of British Columbia. <h3> Fun Fact </h3> <p> I have an energetic little nephew! </p><a  href='https://www.linkedin.com/in/michael-mercer-628114194/'><i class='icon fa-linkedin-square' aria-hidden='true'></i></a>").fadeIn();
      } else if (id == 'Antonietta') {
          $('.portfolio-content').html(" <img src='images/individual/Antonietta.png' alt='Venessa'><h3> About Me </h3><p> I was a undergraduate thesis student inn the Botelho lab, where I helped explore protein interactions between PIP phosphates, kinases and associated scaffolding proteins in the yeast secretory system. I’m currently a Ph.D candidate at the Atlantic Research Centre at Dalhousie University, studying a cholesterol and PIP binding/transport protein called ORP4 under the guidance of Dr. Neale Ridgway. The Botelho lab was my first introduction to just how cool it is that organelles maintain their identity while constantly swapping cargo. Now I’ve caught the bug and want to spend my career studying membrane lipids and intracellular trafficking. <h3> Fun Fact </h3> <p> learned many things in the Botelho lab, the most important of which might have been that overnight transfers should not be run at 100 V. </p><a  href='#'><i class='icon fa-linkedin-square' aria-hidden='true'></i></a>").fadeIn();
      } else if (id == 'Monica Dayam') {
          $('.portfolio-content').html(" <img src='images/individual/alumni/monica.jpg' alt='Monica'><h3> About Me </h3><p> I worked with Dr. Botelho’s lab from 2010-2013 during my Bachelor of Science inBiology, first as NSERC USRA and then as thesis student. This was followed by myPh.D. in Molecular Science in 2013-2017, where I investigated “Role of PIKfyve inmacrophages and neutrophils immune response”. Now, I am Postdoctoral fellow atHarvard Medical School (Department of Cell Biology) and Boston Children&#39;s Hospital(Program in Cellular and Molecular Medicine). The research and training grounds atthe Botelho’s lab enhanced my intellectual, communication, leadership, and researchskills, which advanced my long-term goal of being a researcher in the health science. </p><h3> Fun Fact </h3> <p> Oh, dear Lord...there are way too many... </p><a href='#'><i class='icon fa-linkedin-square' aria-hidden='true'></i></a>").fadeIn();
      } else if (id == 'Amra Saric') {
          $('.portfolio-content').html(" <img src='images/individual/alumni/Amra Saric.jpg' alt='Monica'><h3> About Me </h3><p> I conducted my PhD in Molecular Science in the Botelho laboratory at RyersonUniversity, elucidating the mechanisms of lysosome tubulation in innate immunecells. Prior to graduate school, I received my BSc in Chemistry and Biology atRyerson, during which time I first learned of the exciting work in the Botelho lab, asI conducted an 8-month undergraduate thesis project under the supervision of Dr.Roberto Botelho. I am currently a postdoctoral research fellow in the laboratory ofDr. Juan S. Bonifacino at the National Institutes of Health (NIH/NICHD) in Bethesda,MD, where I study the role of organelle positioning in health and disease. Theresearch topics, curriculum structure and supervision I received in the Botelho labhas empowered me to pursue my research interests at the highly reputable lab andinstitute that I am currently a part of.</p><h3> Fun Fact </h3> <p> I am a huge fan of sci-fi/fantasy books and films including Dune, Lordof the Rings, Game of Thrones, Star Wars, Harry Potter</p><a href='#'><i class='icon fa-linkedin-square' aria-hidden='true'></i></a>").fadeIn();
      } else if (id == 'Leslie Bone') {
          $('.portfolio-content').html(" <img src='images/individual/alumni/Leslie.jpg' alt='Monica'><h3> About Me </h3><p> I was a PhD student in the Botelho lab, co-supervised with Dr. Costin Antonescu. Istudied the function of an acyltransferase, LYCAT, responsible for the enrichment ofphosphoinositides with stearic acid. I now work as a Business Development Specialist forMITACS, a national not-for- profit research organization that offers training and researchprograms that will develop the next generation of researchers and innovators in Canada. </p><a href='#'><i class='icon fa-linkedin-square' aria-hidden='true'></i></a>").fadeIn();
      } else if (id == 'Tamadher Alghamdi') {
          $('.portfolio-content').html(" <img src='images/individual/alumni/Tamadher.jpg' alt='Monica'><h3> About Me </h3><p> I joined Dr. Botelho’s lab as a master&#39;s student in the Molecular Science program atRyerson University.  My master&#39;s thesis research focused on functional characterizationof the Vac14 self-interaction domain. This work has enabled characterization of theVac14 multimer as a crucial regulator of phosphatidylinositol-3,5- bisphosphate[PtdIns(3,5)P2], a signaling lipid essential for lysosomal function and implicated inneuropathological diseases such as Amyelotrophic Lateral Sclerosis. The findings of thisstudy, in combination with that of my former research group, have been published in theJournal of Biological Chemistry. I am now a PhD candidate in the Institute of MedicalScience at the University of Toronto and I am conducting my research at St. Michael&#39;sHospital. My time in Dr. Botelho’s lab has given me a greater appreciation forfundamental research and prepared me very well to continue my postgraduate studies.</p><h3> Fun Fact </h3> <p> I am multilingual and I love travelling.</p><a href='#'><i class='icon fa-linkedin-square' aria-hidden='true'></i></a>").fadeIn();
      } else if (id == 'Krishna Chintaluri') {
          $('.portfolio-content').html(" <img src='images/individual/alumni/Krishna.jpeg' alt='Monica'><h3> About Me </h3><p> I recently graduated with a Master’s in Molecular Science from the Botelho Lab. My projectfocused on researching novel probes for endosomal phosphoinositides. This ties into thebroader focus of lab in our study of the endolysosomal system.</p><h3> Fun Fact </h3> <p> When I’m notthinking about science, I think about what it would be like owning a professional sports team. </p><a href='www.linkedin.com/in/krishna-chintaluri'><i class='icon fa-linkedin-square' aria-hidden='true'></i></a>").fadeIn();
      } else if (id == 'Ava-Botelho') {
          $('.portfolio-content').html(" <img src='images/individual/Ava_Pic.jpg' alt='Monica'><h3> About </h3><p>  The real boss of the lab.  She is a tough grader who will NOT change grades for any reason…. Unless your name is Ariel or you are a character in the Trolls movie.  s</p>").fadeIn();
      } else if (id == 'Anna-Botelho') {
          $('.portfolio-content').html(" <img src='images/individual/Anna.jpg' alt='Anna'><h3> About </h3><p> This southern California beauty is the reason why things keeps on running smoothly. </p><h3> Fun Fact </h3> <p>She still prefers the beach over snow and rollerblading over ice skating.  </p>").fadeIn();
      }
    //   
    else if (id == 'Mihal') {
        $('.portfolio-content').html(" <img src='images/individual_new/Mihal.JPG' alt='Anna'><h3> Research Interest </h3><p>My name is Mihal Shalamov, I am currently in my final year of the biomedical science program at Ryerson University. I have been a part of Dr Botleho's lab for about three years now, holding various roles such as Research Assistant (RA) as well as NSERC awardee (RA).  The objective of my project is to investigate the role of transcription factor EB (TFEB), a key regulator of cellular degradation pathways, in macrophage phagocytosis. Currently, I’m working as a fourth-year thesis student to optimize single-cell viability assays that will be used to assess the role of TFEB in the killing of bacteria such as E.coli and Salmonella.  </p><h3> I can't stand cinnamon :)   </h3> <p> </p>").fadeIn();
    }
    else if (id == 'Victoria Chan') {
        $('.portfolio-content').html(" <img src='images/individual_new/Victoria Chan.jpg' alt='Victoria Chan'><h3> Research Interest </h3><p> I am a MSc student co-supervised by Dr. Botelho and Dr. Antonescu. I completed my BSc (Hons.) with a major in Life Sciences at Queen’s University. My current research focuses on the acyltransferase, LYCAT, and its ability to control acyl chain specificity in phosphoinositides. My project hopes to elucidate the importance of the type of fatty acid on cell proliferation signalling.</p><h3> Fun Fact </h3> <p> I love thrifting, have a growing shoe and sneaker collection, and I’m almost always listening to Frank Ocean.</p>").fadeIn();
    }
    else if (id == 'Eugenia') {
        $('.portfolio-content').html(" <img src='images/individual_new/Eugenia Mansilla.jpg' alt='Eugenia'><h3> Research Interest </h3><p>I am originally from Mendoza, Argentina. I completed my Ph.D. studies at Universidad Nacional de Cuyo in Argentina. Currently, I am a postdoctoral fellow at the University of Toronto under the supervision of Dr. Botelho and Dr. Terebiznik. My research is focused in the study of the mechanisms that govern the interactions between intracellular pathogens and host-cells, including macrophages. Macrophages housekeeping roles include elimination of pathogens, foreign particles and cellular debris. </p><h3> Fun Fact </h3> <p>I like hiking in the mountains and also I enjoy eating for pleasure. So, since I am in Toronto, I love finding new foods to try and I usually walk to look for new restaurants! </p> <i class='icon fa-linkedin-square' aria-hidden='true'></i>").fadeIn();
    }
    else if (id == 'Gizem') {
        $('.portfolio-content').html(" <img src='images/individual_new/Gizem Esra Genc.jpg' alt='Gizem'><h3> Research Interest </h3><p> I hail from the beautiful coast of Antalya, Turkey. I obtained my BSc degree in Biochemistry from Ege University. Afterward, I received my MSc and Ph.D. from the Department of Medical Bİochemistry, Faculty of Medicine, Akdeniz University. I have been working in Botelho and Antonescu labs as a postdoctoral fellow since 2018. Research interest: I am interested in understanding various aspects of metabolism, with a specific focus on AMP-activated protein kinase (AMPK) in cancer cells. Fun Fact: I’ve travelled to 30 countries so far. Even though I hate winter, I decided to move to Canada. Smart decision that one.  </p><a href=' https://www.linkedin.com/in/gizem-esra-genc-3aba3a88/'>        <i class='icon fa-linkedin-square' aria-hidden='true'></i></a>").fadeIn();
    }
    else if (id == 'kai') {
        $('.portfolio-content').html(" <img src='images/individual_new/Kai Zhang.jpg' alt='Kai'><h3> Research Interest </h3><p> I am a postdoc in the Botelho Lab, co-supervised with Dr. Costin Antonescu. I completed my PhD in immunology at Tianjin Medical University in China and did postdoc at Houston Methodist Hospital in the USA.  My project is studying the importance of genes that control phosphoinositide acyl specificity towards PI3K-PIP3-Akt signalling, actin reorganization and cell migration. I will also investigate how enzymes responsible for acyl specificity of phosphoinositides achieve this role. </p><h3> Fun Fact </h3> <p> I love trying various new food, hope one day I can travel around the world and taste all kinds of food. Also, I like Japanese cartoon and romantic Korean drama.        </p> ").fadeIn();
    }
    else if (id == 'Madison') {
        $('.portfolio-content').html(" <img src='images/individual_new/Madison Tomlinson.jpg' alt='Anna'><h3> Research Interest </h3><p>I am a Master’s student in the Botelho Lab, co-supervised with Dr. Joe McPhee. I completed my undergrad at Fanshawe College in Biotechnology and worked as a research assistant for two years at Western University. My research is focused on understanding the relationship between anti-microbial peptides and bacterial division and filamentation. </p><h3> Fun Fact </h3> <p> I was a competitive figure skater for 18 years, and I love plants but I can’t keep a single one alive.</p><a href='https://www.linkedin.com/in/madisontomlinson'> <i class='icon fa-linkedin-square'  aria-hidden='true'></i></a>").fadeIn();
    }
    else if (id == 'Michael') {
        $('.portfolio-content').html(" <img src='images/individual_new/Michael Mercer.jpg' alt='Anna'><h3> Research Interest </h3><p>I am Master’s student in the Botelho Lab. I completed my undergraduate at Queen’s University in Kingston, Ontario. My work is focused mainly on understanding the relationship between the phosphoinositide kinase PIKfyve, and the transcription factor EB (TFEB).  </p><h3> Fun Fact </h3> <p> I was named after my grandfather who was a World War 2 veteran, so technically I’m Michael Mercer the second.        </p> <a href='https://www.linkedin.com/in/michael-mercer-628114194/'>        <i class='icon fa-linkedin-square' aria-hidden='true'></i></a>").fadeIn();
    }
    else if (id == 'Muhammad') {
        $('.portfolio-content').html(" <img src='images/individual_new/Muhammad butt.jpg' alt='Anna'><h3> Research Interest </h3><p> I am a Master's student in the Botelho lab. I completed my undergraduate degree in Biology here at Ryerson during which I developed a passion for cell biology. My research focuses on phagosome recycling specifically with the involvement of clathrin in the process of re-forming lysosomes.  </p><h3> Fun Fact </h3> <p> I became an uncle to my first niece at the age of 7 (yea I got OLD siblings).        </p>").fadeIn();
    }
    else if (id == 'Patris') {
        $('.portfolio-content').html(" <img src='images/individual_new/Patris Alves.jpg' alt='Anna'><h3> Research Interest </h3><p>I am a MSc student in the Botelho lab, and I completed my undergraduate degree at Queen's University majoring in Biology. My research focuses on a lysosome-regulating protein known as Transcription Factor EB (TFEB).  My goal is to examine how phagocytosis increases lysosomal function through the nuclear localization of TFEB, and determine what mechanisms cause this enhanced function. </p><h3> Fun Fact </h3> <p>I lived in 3 countries before I was 10.        </p>").fadeIn();
    }
  else if (id == 'Shiraz') {
        $('.portfolio-content').html(" <img src='images/individual_new/Shiraz_Anwar_Headshot.jpg' alt='Anna'><h3> Research Interest </h3><p>I finished my undergraduate degree at McMaster University in Molecular Biology and Genetics. After working for a year in the pharmaceutical industry, I joined the Botelho lab as a graduate student to continue my higher education.        My research project focuses on lysosomal remodelling within immune cells upon detection of foreign materials. Specifically, I am investigating if and how pH level fluctuations within lysosomes allow them to change shape from globular to tubular networks. Understanding this aspect of immunity will bring us one step closer to understanding and perhaps creating a more robust immune system.</p><h3> Fun Fact </h3> <p>Despite living in Toronto for the past 10 years, I have never been to CN tower or Wonderland.        </p>").fadeIn();
    }
    else if (id == 'Sumaiya') {
        $('.portfolio-content').html(" <img src='images/individual_new/Sumaiya Soha.jpg' alt='Anna'><h3> Research Interest </h3><p> I am a MSc student co-supervised by Drs. Antonescu, Botelho and Impellizzeri. I completed my undergraduate in Biochemistry and Biotechnology, and a master’s in Biotechnology, from North South University in Bangladesh. Due to my research interests, I am pursuing a second masters with a research project that focuses on investigating enhancement of fluorescence by silver nanostructures in imaging of biological systems, bridging nanomaterial chemistry and biology in an interdisciplinary fashion. </p><h3> Fun Fact </h3> <p>I just cannot have dinner without an episode of F.R.I.E.N.D.S or Modern Family running in front of me, no matter how many shows I have lined up to catch up on.         </p><a href='https://www.linkedin.com/in/sumaiya-a-soha-31968b95'><i class='icon fa-linkedin-square'  aria-hidden='true'></i></a>").fadeIn();
    }
    else if (id == 'Anna-Botelho') {
        $('.portfolio-content').html(" <img src='images/individual_new/Anna.jpg' alt='Anna'><h3> Research Interest </h3><p> </p><h3> Fun Fact </h3> <p> </p>").fadeIn();
    }


    //  
      else if (id == 'Niyousha') {
        $('.portfolio-content').html(" <img src='images/individual_new/Niyousha.jpg' alt='Niyousha'><h3> Research Interest </h3><p> I am an undergraduate thesis student in the Botelho lab. My research is focused on understanding the underlying mechanisms of lysosome tubulation in immune cells and investigating the role of pH gradient in facilitating the process. The goal is to get a better understanding of how lysosome tubulation is maintained and how it facilitates antigen presentation in macrophages and dendritic cells. </p><h3> Fun Fact </h3> <p> My favourite hobby is watching Netflix with my dog! We love sitcoms and have watched F.R.I.E.N.D.S a gazillion times together!         </p>").fadeIn();
    }
    else if (id == 'Daniela') {
        $('.portfolio-content').html(" <img src='images/individual_new/Daniela Campisi.jpg' alt='Anna'><h3> Research Interest </h3><p> I am a Biomedical Science student at Ryerson and an undergraduate thesis researcher in the Botelho Lab and co-supervised with Dr. Joe McPhee. I investigate Adherent Invasive E. coli (AIEC) and its association with Inflammatory Bowel Disease. The objective of this project is to examine macrophage functions that are specific to pathogen degradation and observe alterations caused by the presence of AIEC.  </p><h3> Fun Fact </h3> <p>  Having been raised in Vancouver, I am an avid snowboarder and devoted Canucks fan.         </p>").fadeIn();
    }
    else if (id == 'Munira') {
        $('.portfolio-content').html(" <img src='images/individual_new/Munira Verdawala.JPG' alt='Anna'><h3> Research Interest </h3><p> I am a Biomedical Science candidate at Ryerson. My research is focused on phagosome resolution which is a process in which a phagocyte resets its phagocytic capacity, so that it can engulf particles again. We aim to understand the mechanisms involved in exhausting and recovering phagocytosis. </p><h3> Fun Fact </h3> <p> I’m a frequent customer at Starbucks.        </p>").fadeIn();
    }
    else if (id == 'Patrick') {
        $('.portfolio-content').html(" <img src='images/individual_new/Patrick Kook.jpg' alt='Anna'><h3> Research Interest </h3><p> I am an undergraduate student in the biomedical science program. I am currently a research assistant studying the role of the transcription factor TFEB in the immune system by using animal models.  </p><h3> Fun Fact </h3> <p> I was a school team tennis player in elementary school.        </p>").fadeIn();
    }

  });
