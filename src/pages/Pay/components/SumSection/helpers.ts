const services: any = {
  1: 'Оплата услуги по подбору и доставке',
  2: 'Оплата депозита',
  3: 'Отчет CarFax',
  4: 'Расширенный отчет Copart',
};

export function getServiceName(number: number) {
  return services[number];
}
