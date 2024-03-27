export function Payment() {
  const params = {
    checkout_url: 'https://checkout.bepaid.by',
    checkout: {
      // iframe: true,
      test: true,
      transaction_type: 'payment',
      // public_key:
      //   'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4Wvg9Px7HmqztmXa94DVdA4Y3O2uZLpTo/NpdHdGBKG7+ITgIgX7r5FsTg9AeGk0pRYcRS7kfa3T3PnR1pPsgjfxZa+aRV6k0hzeQUabsBRF6goOBt9cyImGVUxx0aozqbvGZToLSl6aLuJiM5mGfgHiH7BMWQhmYTG1WWuag4Z/ODwBgLXKuoWKQRZM6MEz1lMHT/zVLmR67iXBPrYz9L365hogU4/q1/c/n7Gw9ReEV158lvEK+mE1mTne8Hsthabx8W26HtUcUwUVLBAbFtak7dyKeRQcISyBMPJWK/Z6Os9PrluHZL6bVyKg83wpQ5XAjWtqlRnunG6Q4j+5SwIDAQAB',
      order: {
        amount: 700 * 100,
        currency: 'BYN',
        description: 'Payment description',
        tracking_id: 'my_transaction_id',
      },
      customer: {
        first_name: 'Кагукин',
        last_name: 'Виталий',
      },
      settings: {
        success_url: 'http://localhost:3000/',
      },
    },
    closeWidget() {
      // возможные значения status
      // successful - операция успешна
      // failed - операция не успешна
      // pending - ожидаем результат/подтверждение операции
      // redirected - пользователь отправлен на внешнюю платежную систему
      // error - ошибка (в параметрах/сети и тд)
      // null - виджет закрыли без запуска оплаты
      console.debug('close widget callback');
    },
  };

  async function postData(url = 'https://checkout.bepaid.by/ctp/api/checkouts', data = params) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      // @ts-expect-error
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        'X-API-Version': 2,
        Authorization:
          'Basic Mjc0ODM6OTk3MTYwMTU3OWEzZGYwMGI4YWFmYWQ0YzI2YTBjOTBhNmI3OWU2MjNkNGNlZmVkZmNkN2VkODVkYTViMGFiYw==',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (response?.ok) {
      const res = await response.json();
      // console.log(res, ' res');
      window.location = res.checkout.redirect_url;
    }

    // return response; // parses JSON response into native JavaScript objects
  }

  // const payment = () => {
  //   const params = {
  //     checkout_url: 'https://checkout.bepaid.by',
  //     checkout: {
  //       payment_method: {
  //         types: ['credit_card'],
  //         // erip: {
  //         //   order_id: '123456789101',
  //         //   account_number: '312123123',
  //         //   service_no: '313',
  //         //   service_info: ['dfsfsd', 'fsfsdfsdf', 'saasdasdasd'],
  //         // },
  //       },
  //       iframe: true,
  //       test: true,
  //       customer: {
  //         first_name: 'Кагукин',
  //         last_name: 'Виталий',
  //       },
  //       transaction_type: 'payment',
  //       public_key:
  //         'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4Wvg9Px7HmqztmXa94DVdA4Y3O2uZLpTo/NpdHdGBKG7+ITgIgX7r5FsTg9AeGk0pRYcRS7kfa3T3PnR1pPsgjfxZa+aRV6k0hzeQUabsBRF6goOBt9cyImGVUxx0aozqbvGZToLSl6aLuJiM5mGfgHiH7BMWQhmYTG1WWuag4Z/ODwBgLXKuoWKQRZM6MEz1lMHT/zVLmR67iXBPrYz9L365hogU4/q1/c/n7Gw9ReEV158lvEK+mE1mTne8Hsthabx8W26HtUcUwUVLBAbFtak7dyKeRQcISyBMPJWK/Z6Os9PrluHZL6bVyKg83wpQ5XAjWtqlRnunG6Q4j+5SwIDAQAB',
  //       order: {
  //         amount: 10001.0,
  //         currency: 'BYN',
  //         description: 'Payment description',
  //         tracking_id: 'my_transaction_id',
  //       },
  //     },
  //     closeWidget() {
  //       // возможные значения status
  //       // successful - операция успешна
  //       // failed - операция не успешна
  //       // pending - ожидаем результат/подтверждение операции
  //       // redirected - пользователь отправлен на внешнюю платежную систему
  //       // error - ошибка (в параметрах/сети и тд)
  //       // null - виджет закрыли без запуска оплаты
  //       console.debug('close widget callback');
  //     },
  //   };

  //   // @ts-expect-error
  //   new BeGateway(params).createWidget();
  // };

  return (
    <div>
      <button onClick={() => postData()}>Оплатить</button>
    </div>
  );
}
