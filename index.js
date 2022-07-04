const pCollection = document.querySelectorAll('p')





const render = () => {
    const currentTime = {
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        second: new Date().getSeconds(),
        year: new Date().getFullYear(),
        day: new Date().getDay()
    }
    const dayTime = () => {
        if (currentTime.hour >= 12 && currentTime.hour <= 24) {
            return 'Добрый день'
        } else if (currentTime.hour >= 0 && currentTime.hour <= 6) {
            return 'Доброй ночи'
        } else if (currentTime.hour > 6 && currentTime.hour < 12) {
            return 'Доброе утро'
        }
    }
    const days = [
        'понедельник',
        'вторник',
        'среда',
        'четверг',
        'пятница',
        'суббота',
        'воскресенье',
    ]
    const newYearDateCounter = () => {
        return Math.floor((new Date(`01 january ${currentTime.year+1}`) - new Date()) / 1000 / 60 / 60 / 24)
    }

    pCollection[0].textContent = dayTime()
    pCollection[1].textContent = `Сегодня ${days[currentTime.day - 1]}`
    pCollection[2].textContent = `Текущее время: ${currentTime.hour}:${currentTime.minute}:${currentTime.second}`
    pCollection[3].textContent = `До нового года осталось ${newYearDateCounter()} дней`
}



setInterval(render, 1000)