export const convertImageToBase64 = (file, callback) => {
  const reader = new FileReader();
  reader.onload = function (e) {
    callback(e.target.result);
  };
  reader.readAsDataURL(file);
}

export const createUserCard = (user) => {
  const $userCard = document.createElement('div');
  $userCard.className = 'x-card';
  $userCard.innerHTML = `
    <div class="x-card-profile">
            <div class="x-card-profile__image">
              <img src="${user.image}" alt="${user.name}" />
            </div>
            <span class="x-card-profile__status">Status: ${user.status ?? 'Ativo'}</span>
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
  return $userCard;
}


export const maskPhone = (value) => {
  value = value.replace(/\D/g, '');

  if (value.length > 10) {
    value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
  } else if (value.length > 6) {
    value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
  } else if (value.length > 2) {
    value = value.replace(/^(\d{2})(\d{0,5}).*/, '($1) $2');
  } else {
    value = value.replace(/^(\d{0,2}).*/, '($1');
  }

  return value;
}

export const maskCPF = (value) => {
  value = value.replace(/\D/g, '');

  if (value.length > 9) {
    value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
  } else if (value.length > 6) {
    value = value.replace(/^(\d{3})(\d{3})(\d{0,3}).*/, '$1.$2.$3');
  } else if (value.length > 3) {
    value = value.replace(/^(\d{3})(\d{0,3}).*/, '$1.$2');
  } else {
    value = value.replace(/^(\d{0,3}).*/, '$1');
  }

  return value;
}

export const maskCEP = (value) => {
  value = value.replace(/\D/g, '');

  if (value.length > 5) {
    value = value.replace(/^(\d{5})(\d{0,3}).*/, '$1-$2');
  } else {
    value = value.replace(/^(\d{0,5}).*/, '$1');
  }

  return value;
}

