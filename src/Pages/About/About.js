import styles from "./About.module.css";
export default function About() {
  return (
    <div className={styles.cont}>
      <p>
        Hello, I'm Aram, the creator of BookHaven, a fictional bookstore project
        designed for the sole purpose of honing my coding skills. As an aspiring
        developer, I've embarked on this journey to delve into the intricacies
        of React, React Routing, Redux, and Redux Toolkit.
      </p>
      <hr />
      <p>
        BookHaven serves as my coding playground, allowing me to experiment with
        creating a dynamic and responsive user interface. Within this virtual
        bookstore, users can seamlessly explore a diverse catalog of books,
        browse through sections, utilize a robust search functionality, and even
        simulate a shopping experience by adding books to their cart.
      </p>
      <hr />
      <p>
        While the app is not connected to a live API, it employs limited mock
        data that i have curated from Goodreads.com to mimic real-world
        information. Join me on this coding adventure with BookHaven, where I
        combine my passion for literature with the pursuit of mastering modern
        front-end development techniques.
      </p>
    </div>
  );
}
