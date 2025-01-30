export const mountUserList = () => {
  const $userSection = document.querySelector('.x-users-section__content');

  const showLoading = () => {
    const $loadingCard = document.createElement('div');
    $loadingCard.className = 'x-loading-card';
    $loadingCard.innerHTML = 'Carregando usuários...';
    $userSection.appendChild($loadingCard);
  };

  const hideLoading = () => {
    const $loadingCard = $userSection.querySelector('.x-loading-card');
    if ($loadingCard) {
      $userSection.removeChild($loadingCard);
    }
  };

  showLoading();
  return fetch('public/mock/data.json')
    .then((res) => res.json())
    .then((users) => {
      hideLoading();

      users.forEach((user) => {
        const userCard = document.createElement('div');
        userCard.className = 'x-card';
        userCard.innerHTML = `
          <div class="x-card-profile">
            <div class="x-card-profile__image">
              <img src="${user.image}" alt="${user.name}" />
            </div>
            <span class="x-card-profile__status">Status: ${user.status}</span>
            <button type="button" class="x-card-info__more-details">Ver mais</button>
          </div>
          <div class="x-card-info">
            <div class="x-card-info-wrapper">
              <h4 class="x-card-address-title">Informações pessoais</h4>
              <p class="x-card-info__name"><strong>Nome:</strong> ${user.name}</p>
              <p class="x-card-info__age"><strong>Idade:</strong> ${user.age} ${user.age > 1 ? 'anos' : 'ano'}</p>
              <p class="x-card-info__birth"><strong>Data de nascimento:</strong> ${user.birthday}</p>
              <p class="x-card-info__document"><strong>CPF:</strong> ${user.documentNumber}</p>
              <p class="x-card-info__email"><strong>Email:</strong> ${user.email}</p>
              <p class="x-card-info__phone"><strong>Telefone:</strong> ${user.phoneNumber}</p>
            </div>
            <div class="x-card-info-wrapper is--hide">
              <h4 class="x-card-address-title">Endereço</h4>
              <p class="x-card-address__street"><strong>Logradouro:</strong> ${user.address.street}</p>
              <p class="x-card-address__street"><strong>Número:</strong> ${user.address.number}</p>
              <p class="x-card-address__street"><strong>Bairro:</strong> ${user.address.district}</p>
              <p class="x-card-address__street"><strong>Cidade:</strong> ${user.address.city}</p>
              <p class="x-card-address__street"><strong>UF:</strong> ${user.address.state}</p>
            </div>
          </div>
        `;
        $userSection.appendChild(userCard);
      });
    })
};

export const expandList = () => {
  const $cardContainer = document.querySelector('.x-users-section__content');

  $cardContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('x-card-info__more-details')) {
      const $card = event.target.closest('.x-card');

      const $wrapper = $card.querySelector('.x-card-info-wrapper:last-child');

      if ($wrapper) {
        $wrapper.classList.toggle('is--hide');
        if (!$wrapper.classList.contains('is--hide')) {
          event.target.textContent = 'Ocultar';
        } else {
          event.target.textContent = 'Ver mais';
        }
      }
    }
  });
};

