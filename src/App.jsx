import restik from  './assets/image 2.png'
import Shapka from './components/Shapka'
import Btn from './components/button'
import mak from './assets/image 1.png'
import Infa from './components/infa'
import one from './assets/Vector.svg'
import two from './assets/Vector2.svg'
import three from './assets/Vector3.svg'
import four from './assets/Vector4.svg'
import Food from './components/food'
import pasta from './assets/image 4.png'
import meat from './assets/image 5.png'
import left from './assets/left.svg'
import right from './assets/right.svg'
import RedBtn from './components/redbtn'
import Stock from './components/stock'
import rightFoto from './assets/image 6.png'
import Review from './components/review'
import zal from './assets/zal.png'
import WhiteBtn from './components/whiteBtn'
import phone from './assets/phone.svg'
import mail from './assets/mail.svg'
import location from './assets/location.svg'


function App() {


  return (
      <>

        <Shapka></Shapka>
    <div className="site">
      <div class="hero-block">
          <div class="left">
            <div class="text">
              <h1>DELL’ ARTE</h1>
              <p>Ресторан итальянской и европейской кухни с авторским подходом </p>
            </div>
            <Btn text="ЗАБРОНИРОВАТЬ"></Btn>
          </div>
          <img src={mak} alt="" />
        </div>

        <div className="two-block">
          <div className="restik">
            <h1>О РЕСТОРАНЕ</h1>
            <div className="row">
              <div class="text">
                  <p>Dell’ ARTE - это место, где каждый гость может насладиться уникальным сочетанием изысканной кухни, уютной атмосферы и высокого уровня обслуживания. </p>
                  <p>Наша команда - это профессионалы своего дела, которые с любовью и страстью готовят каждое блюдо, чтобы порадовать вас и ваши вкусовые рецепторы. Они готовы предложить  Вам лучшие блюда европейской и итальянской кухни, чтобы этот поход в ресторан стал незабываемым для Вас.</p>
                  <p>Мы верим, что каждый прием пищи должен быть настоящим праздником для души и тела, поэтому мы уделяем особое внимание каждой детали - от выбора ингредиентов до подачи на стол. Наш ресторан - это не просто место для трапезы, это место, где вы сможете окунуться в атмосферу уюта, расслабиться и насладиться вкусом жизни. 
        ы стремимся создать уникальную концепцию, которая объединяет в себе традиции и современные тенденции, чтобы удовлетворить самые изысканные вкусы наших гостей.</p>
                  <p>Каждый гость может почувствовать себя особенным и насладиться неповторимой атмосферой радости и уюта. Наша команда готова приветствовать вас и предложить вам лучшее из мира кулинарии, чтобы сделать ваше посещение незабываемым.</p>
                  <p>Мы приглашаем вас окунуться в мир настоящего гастрономического искусства и провести незабываемое время в нашем ресторане. Вместе с нами вы сможете открыть для себя новые вкусы, насладиться приятной беседой и провести время в компании друзей или близких. </p>
                </div>
              <img src={restik} alt="" />
            </div>
          </div>
       </div>
       <div class="three-block">
          <h1>ПОЧЕМУ МЫ?</h1>
          <div className="blocks">
            <Infa
              img={one}
              h1="Вкусная и полезная еда" 
              p="Все блюда в нашем ресторане готовятся в соответствии с современными технлогиями из качественных и свежих продуктов"
            >
              
            </Infa>
            <Infa
              img={two}
               h1="Широкий ассортимент напитков" 
               p="У вас есть возможность выбрать напиток, который идеально сочетается с вашими блюдами"
            >
            </Infa>
            <Infa
               img={three}
               h1="Детская игровая комната" 
               p="Игровая комната в нашем ресторане - это место, где ваши дети смогут весело провести время, играя и развлекаясь"
            >
            </Infa>
            <Infa
               img={four}
               h1="Дог-френдли" 
               p="В нашем ресторане ососбое приемущество - дог-френдли! Вы можете привести своего пушистого друга и вместе наслаждаться"
            >
            </Infa>
          </div> 
       </div>
       <div className="four-block">
          <h1>МЕНЮ</h1>
            <div className="row">
              <div className="left">
                <p>Мы собрали самые популярные блюда нашего ресторана из обновленного меню.
                    Изысканный вкус и уникальная подача, разработанная нашим шеф-поваром, не оставит вас равнодушными.
                </p>
                <div className="menu">
                  <img className='strelka' src={left} alt="" />
                    <Food
                      h3="Паста с креветками"
                      p="549 руб"
                    >
                      <img src={pasta} alt="" />
                    </Food>
                    <Food
                      h3="Чоризо болоньезе"
                      p="549 руб"
                    >
                      <img src={meat} alt="" />
                    </Food>
                    <Food
                      h3="Паста с креветками"
                      p="549 руб"
                    ></Food>
                   <img  className='strelka' src={right} alt="" />
                </div>
                <div className="buttons">
                  <RedBtn text="СМОТРЕТЬ МЕНЮ ПОЛНОСТЬЮ"></RedBtn>
                  <RedBtn text="ВИННАЯ КАРТА"></RedBtn>
                </div>  
              </div>
                <div className="right">
                  <img className='img' src={rightFoto} alt="" />
                    <div className="text">
                        <p>Паста с креветками</p>
                        <p>549 руб</p>
                    </div>
                </div>
            </div>
       </div>
       <div className="five-block">
          <h1>АКЦИИ</h1>
            <div className="stock-row">
              <Stock
                  h3="Скидка 10% для постоянных гостей"
                  p="Доступна после 6 посещения"
                >

                </Stock>
                <Stock
                  h3="Скидка 15% в честь дня рождения"
                  p="Действует в течение 3 дней после дня рождения "
                >
                  
                </Stock>
                <Stock
                  h3="Дарим бокал вина при предъявлении в театр «Модерн»"
                  p="Акция действует до 31 декабря"
                >
                  
                </Stock>
            </div>
       </div>
       <div className="six-block">
          <h1>ОТЗЫВЫ</h1>
            <div className="review-row">
              <Review
                name="Евгений"
                p="Прекрасное место для ужина с родными и близкими. Всё безумно вкусно, а персонал очень вежливый и доброелательный."
              >

              </Review>
              <Review
                name="Юлия"
                p="Не первый раз бываю в этом месте. Очень радует большой выбор в меню и живая музыка. Еда тоже очень вкусная, ососбенно паста."
              >

              </Review>
              <Review
                name="Ян"
                p="Очень понравилось меню, порции большие. Атмосфера в ресторане уютная. Обязательно прийду еще!"
              >

              </Review>
            </div>
       </div>
       <div className="seven-block">
          <div className="row">
            <img src={zal} alt="" />
              <div className="right">
                <h1>ЗАБРОНИРУЙТЕ СТОЛИК</h1>
                  <form>
                    <input type="name" placeholder="Имя" />
                    <input type="number" placeholder="Телефон" />
                    <input type="time" placeholder="Время"  />
                    <input type="text" placeholder="Количество гостей" />
                  </form>
                <Btn text="ЗАБРОНИРОВАТЬ"></Btn>
              </div>
          </div>
       </div>
       <footer>
          <div className="footer-con">
            <h1>Dell’ Arte</h1>
              <div className="ulInfa">
                <ul>
                    <a href="">Меню</a>
                    <a href="">О ресторане</a>
                    <a href="">Акции</a>
                    <a href="">Акции</a>
                    <a href="">Бронь</a>
                  </ul>
                <div className="infa">
                  <h3>Контакты</h3>
                  <div className="txt">
                    <img src={phone} alt="" />
                    <p>89012345678</p>
                  </div>
                  <div className="txt">
                    <img src={mail} alt="" />
                    <p>Dell’Arte@mail.com</p>
                  </div>
                  <div className="txt">
                    <img src={location} alt="" />
                    <p>г. Ломберн, ул. 8 Марта, д. 4/2</p>
                  </div>
              </div>
            </div>
             
            <div className="ivent">
              <div className="text">
                <h3>Оставайтесь в курсе событий!</h3>
                <p>Получайте самую свежую информацию о предстоящих мероприятиях, подписавшись на нашу рассылку </p>
              </div>
              <div className="send">
                <input type="email" placeholder="Электронная почта" />
                <WhiteBtn text="Отправить"></WhiteBtn>
              </div>
            </div>
          </div>
       </footer>
    </div>
        
      </>

  )
}

export default App
