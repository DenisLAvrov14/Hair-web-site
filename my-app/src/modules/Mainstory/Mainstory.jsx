import React from 'react'
import Foto1 from '../../public/Foto1.png'
import Foto2 from '../../public/Foto2.png'
import Foto3 from '../../public/Foto3.png'

import './Mainstory.css' // Подключаем файл стилей

export const MainStory = () => {
    return (
        <div className="blog-story">
            {/* Первый блок - текст слева, изображение справа */}
            <div className="story-block">
                <div className="story-text">
                    <p>
                        Приветствую вас! Если вы читаете это, значит, вы думаете
                        о возможности совершить пересадку волос. Хочу рассказать
                        вам свою историю. Первые мысли о том, что мне нужно
                        пересадить волосы, посетили меня примерно за два года,
                        когда я оказался в кресле в городе Мерсин. Трихологи,
                        лосьоны, витамины и масла уже не помогали, и мои волосы
                        продолжали методично выпадать. Я был молодым человеком,
                        и, конечно же, перспектива полысеть до тридцати лет меня
                        не прельщала. Изучив информацию об этой процедуре, стало
                        понятно, что пересадка волос действенна, и что лидером в
                        этом вопросе является Турция. Тогда мне показалось, что
                        это очень сложная задача. Посмотрев цены в России, стало
                        понятно, что мне это не по карману, и я решил проверить
                        цены в Турции ради интереса. И был приятно удивлен! Так
                        начался мой путь к решению проблемы, которая беспокоила
                        меня в течении нескольких предыдущих лет.
                    </p>
                </div>
                <div className="story-image">
                    <img src={Foto1} alt="Как начиналась пересадка волос" />
                </div>
            </div>

            {/* Второй блок - изображение слева, текст справа */}
            <div className="story-block">
                <div className="story-image">
                    <img
                        src={Foto2}
                        alt="так я выглядил после пересадки волос"
                    />
                </div>
                <div className="story-text">
                    <p>
                        Выяснилось, что цена на пересадку волос в Турции в три
                        раза ниже, чем в Петербурге, где я тогда жил. Мне
                        повезло, что у меня есть друзья, хорошо владеющие языком
                        и проживающие в Мерсине. Они помогли мне договориться с
                        доктором и приютили на время операции и восстановления.
                        Сама операция заняла около 5 часов, но это потому, что у
                        меня были относительно небольшие очаги выпадения волос.
                        Мой товарищ, который мне позволил у себя погостить, тоже
                        пересаживал волосы у того же доктора. Его операция
                        проходила около десяти часов, так как он был уже сильно
                        облысевшим. Особой боли я не испытывал. Во время
                        операции было пару перерывов, в один из них, меня даже
                        покормили. Дискомфорт в области головы у был только в
                        первый вечер. Надо понимать, что это нормально для
                        такого рода процедуры. Пробыв в Мерсине пять дней, я
                        отправился обратно домой в Россию. Именно там произошли
                        те интересные события, которые мотивировали меня создать
                        эту компанию.
                    </p>
                </div>
            </div>

            {/* Третий блок - текст слева, изображение справа */}
            <div className="story-block">
                <div className="story-text">
                    <p>
                        Вернувшись домой, я думал, что мой внешний вид будет
                        смущать коллег. Ведь первое время после пересадки нельзя
                        носить головные уборы, чтобы покрыть волосы. Так сильно
                        я не ошибался никогда в жизни. Буквально за первую
                        неделю я собрал целую группу желающих из числа своих
                        коллег, желающих повторить мой путь. Но самый главный
                        случай, окончательно убедивший меня в важности этой
                        истории и побудивший заняться бизнесом по пересадке
                        волос, произошел в поезде Москва - Петербург. Во время
                        поездки ко мне подошел мужчина и застенчиво предложил
                        выйти с ним в тамбур побеседовать, потому что в вагоне
                        его смущает разговаривать. Мне стало интересно, что за
                        щекотливая тема интересует абсолютно незнакомого
                        человека. К тому моменту я уже не стеснялся своего вида
                        после операции и вообще забыл о том, как выгляжу.
                        Оказавшись тет-а-тет, он около получаса расспрашивал
                        меня об операции и всех сопутствующих вопросах.
                        Оказалось, он давно об этом мечтал, но сомневался в
                        эффективности метода. В конце разговора я не видел более
                        счастливого человека, чем этот незнакомец. От одного
                        факта, что он может решить свою проблему, мужчина
                        буквально засветился. На том мы и расстались. Этот
                        случай окончательно убедил меня в важности дела, которым
                        мы сейчас занимаемся. Отсутствие волос у мужчин может
                        нести разные проблемы. Кто-то стесняется своего внешнего
                        вида, кому-то не нравится ходить с одной и той же
                        прической до конца жизни, а точнее, её отсутствием. Но
                        главное, что в наше время это решаемая проблема. И
                        задача нашей компании - помогать мужчинам решать её с
                        помощью лучших специалистов и по приемлемой цене.
                    </p>
                </div>
                <div className="story-image">
                    <img
                        src={Foto3}
                        alt="так я выглядил после пересадки волос"
                    />
                </div>
            </div>
        </div>
    )
}

export default MainStory