import { useState, Component, Fragment } from "react";
import styles from "./UserList.module.css";
import User from "../User/User";

class UserList extends Component {
  constructor() {
    super();
    this.state = {
      showList: false,
      stringState: "New state",
      nested: {
        obj1: "",
        array: [],
      },
      arrayObj: [],
    };
  }
  toggleListHandler() {
    this.setState((curState) => {
      return { showList: !curState.showList };
    });
    console.log(this.props);
  }
  render() {
    const UserList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <Fragment>
        <div className={styles.users}>
          <button onClick={this.toggleListHandler.bind(this)}>
            {this.state.showList ? "Hide" : "Show"} Users
          </button>
          {this.state.showList && UserList}
        </div>
      </Fragment>
    );
  }
}

// const UserList = () => {
//   const [showList, setShowList] = useState(false);
//   const toggleListHandler = () => {
//     setShowList((curState) => !curState);
//   };
//   const UserList = (
//     <ul>
//       {USERS_ARRAY.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={styles.users}>
//       <button onClick={toggleListHandler}>
//         {showList ? "Hide" : "Show"} Users
//       </button>
//       {showList && UserList}
//     </div>
//   );
// };

export default UserList;
