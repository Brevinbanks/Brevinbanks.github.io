
// Create the Recent Projects Section in every page
function writeProjects(){
    document.write("");
    document.write("    <!-- Projects section -->");
    document.write("    <section class=\"projects\" id=\"projects\">");
    document.write("      <h2 class=\"projects-title\">Some of my Recent Projects<\/h2>");
    document.write("      <div class=\"projects-container\">");
    document.write("        <div class=\"project-container project-card\">");
    document.write("          <img");
    document.write("            src=\"assets\/images\/videofillerimg.png\"");
    document.write("            alt=\"Video Filler Remover\"");
    document.write("            loading=\"lazy\"");
    document.write("            class=\"project-pic\"");
    document.write("          \/>");
    document.write("          <h3 class=\"project-title\">AI Video Filler Remover<\/h3>");
    document.write("          <p class=\"project-details\">");
    document.write("            AI video filler remover for removing silences and filler words. ");
    document.write("            Based on the whisper AI model by open AI.");
    document.write("          <\/p>");
    document.write("          <a href=\".\/VideoFillerRemover.html\"  class=\"project-link\">Check it Out<\/a>");
    document.write("        <\/div>");
    document.write("        <div class=\"project-container project-card\">");
    document.write("          <img");
    document.write("            src=\"assets\/images\/6DofRobotArm2.png\"");
    document.write("            alt=\"6DOF Robot Arm Design\"");
    document.write("            loading=\"lazy\"");
    document.write("            class=\"project-pic\"");
    document.write("          \/>");
    document.write("          <h3 class=\"project-title\">6DOF Robot Arm Mechanical Design<\/h3>");
    document.write("          <p class=\"project-details\">");
    document.write("            Hardware design, CAD design, 3D printing, and Arduino Schematics for a 6 DOF small desk robot.");
    document.write("            Useful for small repeatable tasks.");
    document.write("          <\/p>");
    document.write("          <a href=\".\/RevynDesign.html\"  class=\"project-link\">Check it Out<\/a>");
    document.write("        <\/div>");
    document.write("        <div class=\"project-container project-card\">");
    document.write("          <img");
    document.write("            src=\"assets\/images\/mediapipecontrol.jpg\"");
    document.write("            alt=\"Check back for details later\"");
    document.write("            loading=\"lazy\"");
    document.write("            class=\"project-pic\"");
    document.write("          \/>");
    document.write("          <h3 class=\"project-title\">UR5 Visual Hand Control<\/h3>");
    document.write("          <p class=\"project-details\">");
    document.write("           Visual hand control system for the UR5 robot using Mediapipe hand tracking.");
    document.write("            Hand movements are translated into commands for the robot  over ROS.");
    document.write("          <\/p>");
    document.write("          <a href=\".\/UR5VisualHandControl.html\"  class=\"project-link\">Check it Out<\/a>");
    document.write("        <\/div>");
    document.write("        <div class=\"project-container project-card\">");
    document.write("          <img");
    document.write("            src=\"assets\/images\/lasercutter.jpg\"");
    document.write("            alt=\"Check back for details later\"");
    document.write("            loading=\"lazy\"");
    document.write("            class=\"project-pic\"");
    document.write("          \/>");
    document.write("          <h3 class=\"project-title\">Custom Laser Cutter<\/h3>");
    document.write("          <p class=\"project-details\">");
    document.write("           Fully designed, 3D printed, and built a custom CNC GRBL laser cutter from scratch."); 
    document.write("          <\/p>");
    document.write("          <a href=\".\/LaserCutterDesign.html\"  class=\"project-link\">Check it Out<\/a>");
    document.write("        <\/div>");
    document.write("        <div>");
    document.write("          <p class=\"project-details\">");
    document.write("           <a href=\".\/projectportfolio.html\"  class=\"project-link\">");
    document.write("           Click here to see more projects...");
    document.write("          <\/p>");
    document.write("        <\/div>");
    document.write("    <\/section>");
  };
  
  
  // now place this function call at whatever pointit needs to write the markup on to the page: 
  
  // <script type="text/javascript" src="assets/js/app.js"></script>
  // <script type="text/javascript">
  // writeHTMLasJS();
  // </script>
  
  
  
  // Create the right side social icon and links in every page
  function writeSocials(){
  document.write("<div class=\"socials\">");
  document.write("      <a href=\"https:\/\/www.linkedin.com\/in\/brevinbanks\" target=\"_blank\"");
  document.write("        ><img");
  document.write("          src=\"assets\/icons\/icons8-linkedin.png\"");
  document.write("          alt=\"Linkedin\"");
  document.write("          title=\"Linkedin\"");
  document.write("          loading=\"lazy\"");
  document.write("          class=\"socicon\"");
  document.write("      \/><\/a>");
  document.write("      <a href=\"https:\/\/github.com\/Brevinbanks\" target=\"_blank\"");
  document.write("        ><img");
  document.write("          src=\"assets\/icons\/icons8-smallgit.png\"");
  document.write("          alt=\"Github\"");
  document.write("          title=\"Github\"");
  document.write("          loading=\"lazy\"");
  document.write("          class=\"socicon\"");
  document.write("      \/><\/a>");
  document.write("      <a href=\"assets\/images\/Brevin Banks Resume.pdf\" target=\"_blank\"");
  document.write("      ><img");
  document.write("        src=\"assets\/icons\/Resume.png\"");
  document.write("        alt=\"Resume\"");
  document.write("        title=\"Resume\"");
  document.write("        loading=\"lazy\"");
  document.write("        class=\"socicon\"");
  document.write("    \/><\/a>");
  document.write("    <\/div>");
  };
  // </script>  
  
  // now place this function call at whatever point it needs to write the markup on to the page
  
  // <script type="text/javascript">
  // writeHTMLasJS();
  // </script>
  
  
  