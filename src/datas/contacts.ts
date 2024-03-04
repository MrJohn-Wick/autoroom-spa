const email = 'AutoroomBy@gmail.com';
const phone = '+375 (29) 152-44-15';
const instagram = 'autoroom_by';
const telegram = 'autoroomby';

export function getEmail() {
  return email.toLowerCase();
}

export function getEmailDisplay() {
  return email;
}

export function getPhone() {
  return phone.replace(/[()-\s]/gi, '');
}

export function getPhoneDisplay() {
  return phone;
}

export function getInstagramUrl() {
  return 'https://www.instagram.com/' + instagram + '/';
}

export function getTelegramUrl() {
  return 'https://t.me/' + telegram;
}
