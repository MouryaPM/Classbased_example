import { useState, useEffect, Component } from "react";
import styles from "./UserSearch.module.css";
import UserList from "../UserList/UserList";
import UserContext from "../Context/user-context";
import Wrapper from "../Wrapper/Wrapper";
class UserSearch extends Component {
  static contextType = UserContext;

  constructor() {
    super();
    this.state = {
      filteredUser: [],
      searchText: "",
    };
  }

  componentDidMount() {
    this.setState({ filteredUser: this.context.users });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchText !== this.state.searchText) {
      this.setState({
        filteredUser: this.context.users.filter((user) =>
          user.name.includes(this.state.searchText)
        ),
      });
    }
  }
  searchChangeHandler(event) {
    this.setState({
      searchText: event.target.value,
    });
  }
  render() {
    return (
      <Wrapper>
        <div className={styles.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
          <UserList users={this.state.filteredUser} />
        </div>
      </Wrapper>
    );
  }
}

// const UserSearch = () => {
//   const [filteredUser, setUsers] = useState(USERS_ARRAY);
//   const [searchText, setSearchText] = useState("");

//   useEffect(() => {
//     setUsers(USERS_ARRAY.filter((user) => user.name.includes(searchText)));
//   }, [searchText]);

//   const searchChangeHandler = (event) => {
//     setSearchText(event.target.value);
//   };
//   return (
//     <div className={styles.finder}>
//       <input type="search" onChange={searchChangeHandler} />
//       <UserList users={filteredUser} />
//     </div>
//   );
// };

export default UserSearch;
{
  /**
1.componentDidMount -> useEffect without []
2.componentDidUpdate -> useEffect with [a,b]
3.componentwillunmount -> clean up
*/
}
