import React from "react";
import { useState } from "react";
import *as classes from "./CountPrice.module.css"

const CountPrice = ({ price }) => {
    const dollarCourse = 16;
    const amountDays = price.amountDays;
    const amountNights = price.amountNights;
    const pricePerDayPerPerson = price.pricePerDayPerPerson;
    const priceRentMoto = price.priceRentMoto;
    const currentPayForMoto = price.currentPayForMoto;
    const priceHotel = price.priceHotel || 0;
    const priceForGuidePerDay = price.priceForGuidePerDay;
    const income = price.income;
    const [motos, setMotos] = useState(1);
    const [people, setPeople] = useState(1);
    const [total, setTotal] = useState(0);

    const countTotal = () => {
        let totalMotos = Number(motos) + 1;
        let totalPeople = Number(people)
        let count =
            amountDays * (
                (totalMotos * currentPayForMoto) + (totalMotos * priceRentMoto) + (totalPeople * pricePerDayPerPerson) + priceForGuidePerDay + income
            ) +
            amountNights * (
                priceHotel + (Math.ceil(totalPeople / 2) * priceHotel)
            )
        setTotal(count)
    }

    const fillArray = n => {
        let arr = [];
        if (n) for (let i = 1; i <= n;) arr.push(i++);
        return arr;
    }

    return (
        <div className={classes.wrapperCountBlock}>
            <h2>Рассчитать стоимость этого тура:</h2>

            <form className={classes.wrapperFormCounter}>
                <label>Количество человек:
                    <select value={people} onChange={(e) => setPeople(e.target.value)}>
                        {fillArray(6).map(option => (
                            <option key={option} value={option}>
                                {option}
                            </option>))
                        }
                    </select>
                </label>
                <label>Количество мотоциклов:
                    <select value={motos} onChange={(e) => setMotos(e.target.value)}>
                        {fillArray(3).map(option => (
                            <option key={option} value={option}>
                                {option}
                            </option>))
                        }
                    </select>
                </label>
            </form>

            <button onClick={countTotal} className={classes.buttonCount}>рассчитать</button>

            <div>
                Итого: {total} peso ({Math.ceil(total / dollarCourse)}usd)
            </div>
        </div>
    )
}

export default CountPrice;
