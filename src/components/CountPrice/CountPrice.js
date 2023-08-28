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
    const [totalPeople, setTotalPeople] = useState(0);

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
        setTotalPeople(people)
    }

    const fillArray = n => {
        let arr = [];
        if (n) for (let i = 1; i <= n;) arr.push(i++);
        return arr;
    }
    const morph = (n) => {
        n = Math.abs(n) % 100;
        let n1 = n % 10;
        let array = ["день", "дня", "дней"]
        if (n > 10 && n < 20) { return array[2] }
        if (n1 > 1 && n1 < 5) { return array[1] }
        if (n1 === 1) { return array[0] }
        return array[2] ;
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
                Итого: {total} peso ({Math.ceil(total / dollarCourse)}usd ) <br />
                Цена за {totalPeople}чел за {amountDays}{morph(amountDays)}
            </div>
        </div>
    )
}

export default CountPrice;
