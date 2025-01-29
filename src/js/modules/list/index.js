export const mountUserList = () => {
  const $userSection = document.querySelector('.x-users-section');

  const showLoading = () => {
    const loadingCard = document.createElement('div');
    loadingCard.className = 'x-loading-card';
    loadingCard.innerHTML = 'Carregando usuários...';
    $userSection.appendChild(loadingCard);
  };

  const hideLoading = () => {
    const loadingCard = $userSection.querySelector('.x-loading-card');
    if (loadingCard) {
      $userSection.removeChild(loadingCard);
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
            <p class="x-card-info__name">Nome: ${user.name}</p>
            <p class="x-card-info__age">Idade: ${user.age} ${user.age > 1 ? 'anos' : 'ano'}</p>
            <p class="x-card-info__birth">Data de nascimento: ${user.birthday}</p>
            <p class="x-card-info__document">CPF: ${user.documentNumber}</p>
            <p class="x-card-info__email">Email: ${user.email}</p>
            <p class="x-card-info__phone">Telefone: ${user.phoneNumber}</p>
            <h4 class="x-card-address-title">Endereço</h4>
            <p class="x-card-address__street">Logradouro: ${user.address.street}</p>
            <p class="x-card-address__street">Número: ${user.address.number}</p>
            <p class="x-card-address__street">Bairro: ${user.address.district}</p>
            <p class="x-card-address__street">Cidade: ${user.address.city}</p>
            <p class="x-card-address__street">UF: ${user.address.state}</p>

          </div>
        `;
        $userSection.appendChild(userCard);
      });
    })
};

export const expandList = () => {
  const $cards = document.querySelectorAll('.x-card .x-card-info__more-details');
  $cards.forEach((button) => {
    button.addEventListener('click', () => {
      button.closest('.x-card').classList.toggle('is--expanded');
      if (button.closest('.x-card').classList.contains('is--expanded')) {
        button.textContent = 'Ocultar';
      } else {
        button.textContent = 'Ver mais';

      }
    });
  });
}

