
import {convertImageToBase64, createUserCard, maskCEP, maskCPF, maskPhone} from "../../utils";

export const toggleModal = () => {
  const $modal = document.querySelector('.x-modal');
  const $addBtn = document.querySelector('.x-users-section-header__button');
  const $closeBtn = document.getElementById('cancel-btn');
  $addBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    if ($modal.classList.contains('is--hide')) {
      $modal.classList.remove('is--hide');
    }
  });
  $closeBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    if (!$modal.classList.contains('is--hide')) {
      $modal.classList.add('is--hide');
    }
  });

  window.addEventListener('click', (event) => {
    if (event.target === $modal) {
      $modal.classList.add('is--hide');
    }
  });
}

export const setMasksOnInput = () => {
  const $phoneNumber = document.getElementById('phone');
  const $document = document.getElementById('documentNumber');
  const $zipCode = document.getElementById('zipCode');

  $phoneNumber.addEventListener('input', (e) => {
    e.target.value = maskPhone(e.target?.value);
  });

  $document.addEventListener('input', (e) => {
    e.target.value = maskCPF(e.target?.value);
  });

  $zipCode.addEventListener('input', (e) => {
    e.target.value = maskCEP(e.target?.value);
  });
}

export const appendNewCard = () => {
  const $form = document.getElementById('profileForm');
  const $usersCardSection = document.querySelector('.x-users-section__content');
  const $modal = document.querySelector('.x-modal');
  $form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const street = document.getElementById('street').value;
    const number = document.getElementById('number').value;
    const district = document.getElementById('district').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zipCode = document.getElementById('zipCode').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone').value;
    const birthday = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const profilePhoto = document.getElementById('profilePhoto').files[0];
    const documentNumber = document.getElementById('documentNumber').value;

    if (!profilePhoto) {
      alert('Por favor, selecione uma foto de perfil.');
      return;
    }

    const convertBirthday = () => {
      const spllitedBirthday = birthday.split('-');
      console.log(spllitedBirthday);
      return `${spllitedBirthday[2]}/${spllitedBirthday[1]}/${spllitedBirthday[0]}`;
    }

    convertImageToBase64(profilePhoto, (base64Image) => {
      const user = {
        id: document.querySelectorAll('.x-card').length + 1,
        image: base64Image,
        name,
        address: {
          street,
          number,
          district,
          city,
          state,
          zipCode,
        },
        documentNumber,
        email,
        phoneNumber: `+55 ${phoneNumber}`,
        birthday: convertBirthday(),
        age: new Date().getFullYear() - new Date(birthday).getFullYear(),
        gender,
      };

      const userCard = createUserCard(user);
      $usersCardSection.appendChild(userCard);
      $modal.classList.add('is--hide');
      $form.reset();
    });
  });
}
