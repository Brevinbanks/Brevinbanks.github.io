
// Create the Recent Projects Section in every page
function writeProjects(){
    document.write("");
    document.write("    <!-- Projects section -->");
    document.write("    <section class=\"projects\" id=\"projects\">");
    document.write("      <h2 class=\"projects-title\">Some of my Recent Projects<\/h2>");
    document.write("      <div class=\"projects-container\">");
    document.write("        <div class=\"project-container project-card\">");
    document.write("          <img");
    document.write("            src=\"assets\/images\/6DofRobotArm3.png\"");
    document.write("            alt=\"6DOF Robot Arm IK and FK\"");
    document.write("            loading=\"lazy\"");
    document.write("            class=\"project-pic\"");
    document.write("          \/>");
    document.write("          <h3 class=\"project-title\">6DOF Linear Trajectory, IK, & FK<\/h3>");
    document.write("          <p class=\"project-details\">");
    document.write("            Linear Trajectory generator that uses inverse kinematics and forward kinematics ");
    document.write("            to maintain orientation as the robot moves.");
    document.write("          <\/p>");
    document.write("          <a href=\".\/RevynFKIK.html\"  class=\"project-link\">Check it Out<\/a>");
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
    document.write("            src=\"assets\/images\/Checker.png\"");
    document.write("            alt=\"Check back for details later\"");
    document.write("            loading=\"lazy\"");
    document.write("            class=\"project-pic\"");
    document.write("          \/>");
    document.write("          <h3 class=\"project-title\">Hand Eye Calibration<\/h3>");
    document.write("          <p class=\"project-details\">");
    document.write("            Using a robot attached camera to create a mathematical understanding of 3D space.");
    document.write("            Computer vision assisted homography.");
    document.write("          <\/p>");
    document.write("          <a href=\".\/HandEye.html\"  class=\"project-link\">Check it Out<\/a>");
    document.write("        <\/div>");
    document.write("      <\/div>");
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
  document.write("      <a href=\"https:\/\/app.joinhandshake.com\/stu\/users\/43200986\" target=\"_blank\"");
  document.write("        ><img");
  document.write("          src=\"assets\/icons\/icons8-handsharke.png\"");
  document.write("          alt=\"Handshake\"");
  document.write("          title=\"Handshake\"");
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
  
  
  