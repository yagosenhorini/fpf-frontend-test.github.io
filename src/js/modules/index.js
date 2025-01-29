import {toggleMenu} from "./menu";
import {expandList, mountUserList} from "./list";

const Methods = {
  init() {
    toggleMenu();
    // createUser();
    mountUserList();
    setTimeout(() => {
      expandList();
    }, 300);
  }
}

export default Methods;
