import React from 'react';
import '../css/App.css'
import '../css/About.css'


class AboutPage extends React.Component {
  render() {
    return (
      <div className='about-page'>
        <div id='cnt'>
          <div className='map'>
            <div className='scrollable-history'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.74013477933!2d76.84493581263162!3d43.23590777100468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369c12a1a951f%3A0x629e5b76dfe99bff!2z0JDRg9GN0LfQvtCy0YHQutC40Lkg0YDQsNC50L7QvSwg0JDQu9C80LDRgtGL!5e0!3m2!1sru!2skz!4v1717336017033!5m2!1sru!2skz"  width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <p>Отличный кофе и вкуснейше закуски! приходите по адресу указанному на карте</p>
              <p>Добро пожаловать в нашу уютную кофейню "Мокко Наяда"!
              Здесь, в сердце города, мы создали место, где каждый гость может почувствовать себя как дома. Наше название "Мокко Наяда" не случайно: "мокко" — это не только название восхитительного кофе, но и символ нашего стремления к качеству и вкусовому совершенству. А "наяда" — древнегреческая богиня воды, олицетворяющая свежесть, чистоту и непрерывное движение жизни. Мы верим, что именно такой должна быть каждая чашка кофе: свежей, бодрящей и живой.
              Наша эмблема — это не просто логотип, а маленькая история. Она пальмовую кошку, известную также как мусанг. Этот зверек знаменит своей ролью в создании одного из самых редких и изысканных видов кофе. Мы выбрали его в качестве нашего символа, чтобы передать нашу любовь к уникальному и качественному кофе, а также уважение к природе и традициям.
              Каждый уголок нашей кофейни пропитан теплом и заботой. Мы тщательно отбираем лучшие сорта кофе со всего мира, чтобы каждый гость смог насладиться неповторимым вкусом и ароматом. Наши бариста — настоящие мастера своего дела, которые с радостью приготовят для вас не только классические эспрессо и капучино, но и авторские напитки, вдохновленные сезонными ингредиентами и нашими фантазиями.
              Приходите в "Мокко Наяда", чтобы насладиться атмосферой уюта и тепла, послушать приятную музыку и, конечно, выпить чашечку изысканного кофе. Мы ждем вас с нетерпением и верим, что каждый ваш визит станет особенным!
              С любовью,</p>
              <p>Команда "Мокко Наяда"</p> 
            </div>   
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;