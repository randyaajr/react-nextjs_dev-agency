import { users } from "../data";
import styles from "../styles/Testimonials.module.css";
import Design from "./Design";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <Design backgroundColor="#bb05057c" top="-70vh" left="0" right="0" />
      <h1 className={styles.titleA}>Testimonials</h1>
      <div className={styles.wrapper}>
        {users.map((user) => (
          <div key={user.id} className={styles.card}>
            <Image src={`/images/${user.logo}`} width="30" height="30" alt="" />
            <p className={styles.comment}>{user.comment}</p>
            <div className={styles.person}>
              <Image
                className={styles.avatar}
                src={`/images/${user.avatar}`}
                width="45"
                height="45"
                objectFit="cover"
                alt=""
              />
              <div className={styles.info}>
                <span className={styles.username}>{user.name}</span>
                <span className={styles.jobTitle}>{user.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
