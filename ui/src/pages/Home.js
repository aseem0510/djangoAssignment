import { Grid } from "@mui/material";

const Home = () => {
  return <>
    <Grid container justifyContent='center'>
      <Grid item sm={10}>
        <h1>Home Page (Introduction)</h1>
        <hr />
        <p>Hello, myself Aseem Ranjan, currently pursuing BTech in Computer Science and Engineering at the Indian Institute of Information Technology, Nagpur (IIITN). I have a profound interest in software development and enjoy creating hard technical products with a good knowledge of Data Structures and Algorithms. I have designed and programmed a Complaint Management System for my institution and also assisted in designing the Institution's Website. I've taken part in several hackathons. Despite the fact that I was unable to obtain standing, I learned a great deal from them. These hackathons' contributions have taught me a lot about leadership, teamwork, problem-solving, bug detection and fixing, and evaluating other team members' code. I'd like to get more experience working with Celetel teams, and I'll do whatever is required of me to the best of my abilities and with a lot of effort. My short-term goal is to get an internship in a reputed company like Celetel where I can use my knowledge to deliver value-driven results.</p>
      </Grid>
    </Grid>
  </>;
};

export default Home;
