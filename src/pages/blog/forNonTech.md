---
layout: "../../layouts/BlogLayout.astro"
title: "v1.0 | For non tech"
pubDate: "Aug 19 2022"
iframe: "https://embed.music.apple.com/us/album/shaiqa/1528325604?i=1528325801"
type: "apple"
new: true
personal: true
song: "Shaiqa - cactus.kk"
---

Я наконец то добрался до момента когда считаю, что сайт дошел до версии 1.0

В этот чейнджлог входят:

- Оптимизировал сайт до максимальных скоростей
- Мультистраничность ( Настоящая !!! )
- Убрал все лишние элементы
   - Плеер музыки ( Добавлю чуть позже, когда пойму как его оптимизровать на всех устройствах, оказывается Audio API очень сильно различается на всех платформах )
   - Убрал страницы с карточками разных языков ( Есть идея как сделать лучше эту идею, на основании личного опыта и дальнейшего ресерча в изучении языков )
- Сделал дизайн еще более минималистичным ( Что не считаю супер отличным, но я буду его делать более уникальным по пути, сейчас я доволен тем что есть )
- Максимально упрастил создание новых постов ( Теперь от меня не требуется дополнительное написание кода, а только текста и система сама будет их пушить в сайт )

Супер доволен работой и очень огромную часть в этом сыграл недавно вышедший фреймворк [Astro](https://astro.build). Это что-то невероятное, не вдаваясь в технические детали, я совершенно без болезнено перенёс весь свой сайт с прошлого фреймворка, что уже невероятное достижение Astro, с минимальными затратами времени - 6 часов на весь процесс.

Первое что хочу отметить это оптимизацию:

С минимальными изменениями кода:

1. Сократил вес сайта, который присылается вам в браузер с 456кб до **46кб!!!**
2. TTI ( Time To Interactive / Время до интерактивности ) с 3.5s до **0.9s!!!**
3. TBT ( Total Blocking Time / Общее время блокировки ) с 60ms до **0ms!!!!!**
4. LCP ( Largest Contentful Paint / Скорость загрузки основного контента ) с 1.6s до **0.9s!**

И во вторых мультистраничность, это означает, что теперь каждая статья и каждый пост имеет отдельную страницу, на которую можно перейти по прямой ссылке.

Я доволен проделанной работой и считаю это правильным временем, чтобы назвать это обновление **v1.0.**

А так же я сделал проект **open source** под лизенцию **MIT**, теперь его исходный код доступен на GitHub и любой может залесть и посмотреть, что и как там устроенно.

---

**P.S.** Хочу сделать аудиоплеер рабочим на всех платформах перед тем как его обратно запускать и добавить как радио МамаВаритКофе ( все еще лучшее радио Уфы, особенно с тех пор как Studio 21 ушли из города ), так же попробовать сделать своё собственное ). А для Карточек будет переработан интерфейс и подход.

А **"Разрыв танцпола"** сегодня из мест где я пребываю:

