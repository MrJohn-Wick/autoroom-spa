import { P1Styled } from './styled';

export function HtmlContractP1() {
  return (
    <P1Styled>
      <p>
        <strong>Приложение 1 к договору №____________ от___________</strong>
      </p>
      <br />
      <p>
        СОГЛАСИЕ
        <br />
        на обработку персональных данных
      </p>
      <br />
      <p>
        Я, __________________________________________ имя, отчество (если таковое имеется)), (дата и
        год рождения), (идентификационный номер, а в случае его отсутствия - номер и серия
        документа, удостоверяющего личность), даю согласие ЧТУП «ВитЛайкКофе» (Республика Беларусь,
        г.Витебск, ул. Ленина, д.26А), далее по тексту «Оператор персональных данных», на сбор,
        систематизацию, накопление, хранение, уточнение (обновление, изменение), использование,
        обезличивание, блокирование, распространение, предоставление, удаление, уничтожение
        следующих персональных данных:
        <ol>
          <li>ФИО (полностью) _______________________</li>
          <li>Дата рождения: ________________</li>
          <li>Идентификационный номер _______________________</li>
          <li>Адрес регистрации с указанием страны: ______________</li>
          <li>Пол : _________</li>
        </ol>
      </p>
      <p>
        Согласие дается на обработку персональных данных ЧТУП «ВитЛайкКофе» (далее - оператор) для
        целей оказании услуг по договору № ________ от ____________.
      </p>
      <p>
        Обработка моих персональных данных может осуществляться как автоматизированным, так и
        неавтоматизированным способом.
      </p>
      <p>
        Мне разъяснены права, связанные с обработкой моих персональных данных, механизм реализации
        таких прав, а также последствия дачи мною согласия или отказа в даче такого согласия.
      </p>
      <p>
        Я ознакомлен(а) с тем, что: согласие на обработку персональных данных действует бессрочно с
        даты его подписания и до его отзыва субъектом персональных данных путем письменного
        обращения к оператору.{' '}
      </p>
      <p>
        Субъект персональных данных уведомляется о том, что в случае отзыва субъектом персональных
        данных согласия на обработку персональных данных оператор вправе продолжить обработку
        персональных данных без согласия субъекта персональных данных.
      </p>
      <br />
      <p>Подпись субъекта персональных данных:</p>
      <br />
      <div>
        <span>
          <strong>ФИО</strong>
        </span>
        <span>
          <strong>дата________________</strong>
        </span>
        <span>
          <strong>подпись____________________</strong>
        </span>
      </div>
    </P1Styled>
  );
}
