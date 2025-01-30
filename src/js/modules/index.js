import {toggleMenu} from "./menu";
import {expandList, mountUserList} from "./list";
import {appendNewCard, setMasksOnInput, toggleModal} from "./modal";

const Methods = {
  init() {
    toggleMenu();
    toggleModal();
    mountUserList();
    setMasksOnInput();
    appendNewCard();
    expandList();
  }
}

export default Methods;
