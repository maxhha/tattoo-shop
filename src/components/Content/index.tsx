// Content
import { IStore, StoreSection, StoreItem } from "types";
import React from "react";
import {Route, Switch} from "react-router-dom";
import classNames from "classnames";
import "./Content.scss";

import Section from "./Section";

type Props = {
    className?: string;
    store: IStore;
};

type ContentSection = {
    id: string,
    title: string,
    items: StoreItem[]
}

class Content extends React.Component<Props> {
    state = {
        sections: [] as ContentSection[]
    }
    async componentDidMount() {
        const store = this.props.store;

        const loadSectionItems = (section : StoreSection) =>
            store.getItems(section)
                .then((items: StoreItem[]) =>
                    {return {...section, items}}
                );

        const sections = await store.getSections()
            .then( (sections) =>
                Promise.all(sections.map(loadSectionItems))
            );

        this.setState({sections});
    }
    render() {
        const { sections } = this.state;
        return (
            <div
                className={classNames("content", this.props.className)}
                >
                <Switch>
                    <Route
                        exact path="/"
                        render = {() => <Home sections={sections}/>}
                    />
                    <Route
                        path="/about"
                        component={About}
                    />
                </Switch>
            </div>
        );
    }
}

type HomeProps = {
    sections: ContentSection[]
}

const Home : React.FC<HomeProps> = ({ sections }) => {
    return (
        <div className="content__inner">
            <div className="face-image">
                <div className="face-image__title">
                    КРУТЫЕ ТАТУХИ ДЕЛАЮТ ТЕБЯ КРУТЫМ!
                </div>
            </div>
            {sections.slice(0, 3).map( ({id, title, items}) =>
                <Section
                    className="content__section"
                    title={title}
                    key={id}
                    items={items.slice(0, 8)}
                />
            )}
        </div>
    );
}

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

export default Content;
