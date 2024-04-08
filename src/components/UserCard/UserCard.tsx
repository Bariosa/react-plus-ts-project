// @ts-ignore
import styles from "./UserCard.module.scss";
import { UserStat } from "../UserStat";
import { LocalGithubUser } from "../../types";

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
    />
  </div>
);
