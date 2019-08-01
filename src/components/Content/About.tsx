import React from "react";

const About : React.FC = () => {
    return (<div className="content__inner">
        <section className="section content__section">
            <h2 className="section__title">О нас</h2>
            <p className="text-about">Нет никаких нас.</p>
            <p className="text-about">
            Этот сайт был создан <a href="https://github.com/maxhha">мной</a>,
            чтобы изучить связку <a href="https://reactjs.org/">React</a>{' + '}
            <a href="https://www.typescriptlang.org/">Typescript</a>.
            Попутно мне пришлось разобраться
            c <a href="https://webpack.js.org/">Webpack</a>'ом,
            чтобы сконфигурировать автозагруку изменений приложения.
            Вовремя разработки я старался соблюдать best practices, постоянно
            гугля всякие мелочи, например: файловая структура проекта,
            создание апи на клиенте, как сделать роутер-кнопку и т.д.
            В общем, достаточно хорошо прокачал свои скилы в фронтенд разработке на React.
            </p>
            <p className="text-about">
            В целом, для этого проекта можно было не использовать Typescript,
            потому что я почти всегда знал, какие аргументы нужны компонентам
            и функциям, но в командной разработке, уверен, он сыграет важную роль.
            Не могло не радовать то, что, благодаря строгой типизации, каждый раз
            после исправления всех подсвечиваемых ошибок в редакторе приложение всегда
            работало так, как нужно {'>w<'}.
            </p>
            <p className="text-about">
            Названия категорий я взял из какого-то генератора названий, а картинки
            из <a href="https://unsplash.com">Unspash</a>.
            Дизайн приложения придумал сам.</p>
        </section>
    </div>)
}

export default About;
